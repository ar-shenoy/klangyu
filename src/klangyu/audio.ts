import type { Mode, SketchStyle, Technique } from "./types";

export type Clip = {
  id: string;
  durationMs: number;
  lufs: number;
  source: "sketch" | "file";
  style?: SketchStyle;
  seed?: number;
  bpm: number;
  keyRoot: number;
  mode: Mode;
  energy: number;
};

export type Arm = {
  clip: Clip;
  fadeMs: number;
  technique: Technique;
  fallback: boolean;
  reason: string;
};

export type Snapshot = {
  playing: boolean;
  positionMs: number;
  currentId: string | null;
  durationMs: number;
  transition: { technique: Technique; fallback: boolean; reason: string; inMs: number } | null;
};

type Handlers = {
  onAdvance?: (playedMs: number, nextPositionMs: number) => void;
  onEnded?: () => void;
};

const FREQS = [32, 64, 125, 250, 500, 1000, 2000, 4000, 8000, 16000];

type Deck = {
  input: GainNode;
  hp: BiquadFilterNode;
  lp: BiquadFilterNode;
  fader: GainNode;
  echoSend: GainNode;
  delay: DelayNode;
  source: AudioBufferSourceNode | null;
};

type Play = {
  id: string;
  durationMs: number;
  deck: 0 | 1;
  anchorCtx: number;
  anchorMs: number;
  lufs: number;
};

function midi(note: number): number {
  return 440 * 2 ** ((note - 69) / 12);
}

function rng(seed: number) {
  let s = Math.abs(seed) % 2147483646 || 1;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function noiseBuffer(ctx: BaseAudioContext, seed: number): AudioBuffer {
  const rand = rng(seed);
  const len = Math.floor(ctx.sampleRate * 0.25);
  const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = rand() * 2 - 1;
  return buffer;
}

async function renderSketch(clip: Clip): Promise<AudioBuffer> {
  const bpm = Math.max(60, clip.bpm || 110);
  const bars = 8;
  const seconds = (bars * 4 * 60) / bpm;
  const ctx = new OfflineAudioContext(2, Math.ceil(seconds * 44100), 44100);
  const dest = ctx.destination;
  const rand = rng((clip.seed ?? 1) + clip.keyRoot * 17);
  const scale = clip.mode === "major" ? [0, 2, 4, 5, 7, 9, 11] : [0, 2, 3, 5, 7, 8, 10];
  const root = 36 + ((clip.keyRoot % 12) + 12) % 12;
  const leadRoot = root + 24;
  const style = clip.style ?? "indie";
  const energy = clip.energy;
  const sixteenth = 60 / bpm / 4;
  const steps = bars * 16;
  const noise = noiseBuffer(ctx, clip.seed ?? 3);
  const low = ctx.createBiquadFilter();
  low.type = "lowpass";
  low.frequency.value = 280;
  low.connect(dest);
  const hatFilter = ctx.createBiquadFilter();
  hatFilter.type = "highpass";
  hatFilter.frequency.value = 6000;
  hatFilter.connect(dest);

  const tone = (
    time: number,
    dur: number,
    freq: number,
    type: OscillatorType,
    peak: number,
    target: AudioNode,
    attack = 0.012,
  ) => {
    if (time < 0 || time > seconds - 0.05) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(Math.max(30, freq), time);
    const a = Math.min(attack, dur * 0.4);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), time + a);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    osc.connect(gain);
    gain.connect(target);
    osc.start(time);
    osc.stop(time + dur + 0.03);
  };

  const panTone = (
    time: number,
    dur: number,
    freq: number,
    type: OscillatorType,
    peak: number,
    pan: number,
  ) => {
    const p = ctx.createStereoPanner();
    p.pan.value = pan;
    p.connect(dest);
    tone(time, dur, freq, type, peak, p, 0.01);
  };

  const hit = (time: number, peak: number, rate: number, target: AudioNode, dur: number) => {
    const src = ctx.createBufferSource();
    src.buffer = noise;
    src.playbackRate.value = rate;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(peak, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    src.connect(gain);
    gain.connect(target);
    src.start(time);
    src.stop(time + dur + 0.02);
  };

  const degree = (base: number, deg: number) => {
    const oct = Math.floor(deg / scale.length);
    const i = ((deg % scale.length) + scale.length) % scale.length;
    return base + scale[i] + oct * 12;
  };

  let walk = 0;
  for (let i = 0; i < steps; i++) {
    const time = i * sixteenth;
    if (time > seconds - 0.06) break;
    const pos = i % 16;
    const kickPeak = style === "club" ? 0.62 : style === "ambient" ? 0.22 : 0.42;
    const kickOn =
      style === "club"
        ? pos % 4 === 0
        : style === "ambient"
          ? pos === 0 && i % 32 === 0
          : pos === 0 || pos === 8 || (style === "pop" && pos === 10 && rand() > 0.4);
    if (kickOn) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(style === "ambient" ? 90 : 150, time);
      osc.frequency.exponentialRampToValueAtTime(42, time + 0.09);
      gain.gain.setValueAtTime(kickPeak, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + (style === "ambient" ? 0.4 : 0.22));
      osc.connect(gain);
      gain.connect(dest);
      osc.start(time);
      osc.stop(time + 0.42);
    }
    if ((style === "club" || style === "pop") && (pos === 4 || pos === 12)) {
      tone(time, 0.12, midi(leadRoot - 12), "triangle", 0.12, dest, 0.005);
      hit(time, 0.18, 0.8, dest, 0.16);
    } else if (style === "indie" && (pos === 4 || pos === 12)) {
      hit(time, 0.12, 0.7, dest, 0.14);
    }
    const hatOn = style === "ambient" ? pos === 4 && rand() > 0.5 : style === "club" ? pos % 2 === 1 : pos % 2 === 0;
    if (hatOn) {
      const p = ctx.createStereoPanner();
      p.pan.value = pos % 4 === 0 ? -0.35 : 0.4;
      p.connect(hatFilter);
      hit(time, style === "club" ? 0.045 : 0.03, 1.4, p, 0.05);
    }
    if (pos % 4 === 0 && style !== "ambient") {
      const pattern = [0, 0, 4, 0, 3, 4, 0, 6];
      const deg = pattern[(i / 4) % pattern.length];
      tone(time, sixteenth * 3.2, midi(degree(root, deg)), "triangle", 0.2, low, 0.008);
    } else if (style === "ambient" && pos === 0) {
      tone(time, sixteenth * 14, midi(degree(root, 0)), "sine", 0.16, low, 0.08);
    }
    if (pos % 2 === 0 && rand() < 0.25 + energy * 0.55 && style !== "ambient") {
      walk = Math.max(-2, Math.min(9, walk + (rand() < 0.5 ? -1 : 1) * (rand() < 0.75 ? 1 : 2)));
      const note = midi(degree(leadRoot, walk));
      tone(time, sixteenth * (rand() > 0.7 ? 3.5 : 1.7), note, "sine", 0.075, dest, 0.02);
      tone(time, sixteenth * 1.6, note * 2, "triangle", 0.02, dest, 0.02);
    }
    if (style === "ambient" && pos === 0 && rand() > 0.3) {
      tone(time, sixteenth * 10, midi(degree(leadRoot, Math.floor(rand() * 5))), "sine", 0.05, dest, 0.1);
    }
    if (pos === 0) {
      const chord = [0, 2, 4];
      for (const deg of chord) {
        const freq = midi(degree(leadRoot - 12, deg));
        panTone(time, Math.min(seconds - time - 0.08, sixteenth * 15), freq * 1.003, "triangle", style === "club" ? 0.035 : 0.05, -0.55);
        panTone(time, Math.min(seconds - time - 0.08, sixteenth * 15), freq * 0.997, "sine", style === "club" ? 0.03 : 0.045, 0.55);
      }
    }
  }

  const rendered = await ctx.startRendering();
  for (let c = 0; c < rendered.numberOfChannels; c++) {
    const data = rendered.getChannelData(c);
    const n = Math.min(32, data.length);
    for (let i = 0; i < n; i++) data[data.length - 1 - i] *= i / n;
  }
  return rendered;
}

function lufsGain(lufs: number): number {
  const db = Math.max(-10, Math.min(10, -14 - lufs));
  return 10 ** (db / 20);
}

class KlangEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private preamp: GainNode | null = null;
  private filters: BiquadFilterNode[] = [];
  private bass: BiquadFilterNode | null = null;
  private vocalDry: GainNode | null = null;
  private vocalWet: GainNode | null = null;
  private vocalBass: GainNode | null = null;
  private analyser: AnalyserNode | null = null;
  private decks: Deck[] = [];
  private cache = new Map<string, AudioBuffer>();
  private files = new Map<string, AudioBuffer>();
  private head: Play | null = null;
  private currentClip: Clip | null = null;
  private pausedMs = 0;
  private playing = false;
  private armed: Arm | null = null;
  private armedBuffer: AudioBuffer | null = null;
  private preparing = false;
  private fading = false;
  private fadeEnds = 0;
  private fadeFrom: 0 | 1 = 0;
  private handoff: { at: number; deck: 0 | 1; clip: Clip } | null = null;
  private queuedArm: Arm | null = null;
  private timer = 0;
  private token = 0;
  private listeners = new Set<() => void>();
  private handlers: Handlers = {};
  private loudnessOn = true;

  setHandlers(handlers: Handlers) {
    this.handlers = handlers;
  }

  subscribe(fn: () => void) {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  }

  private emit() {
    for (const fn of this.listeners) fn();
  }

  snapshot(): Snapshot {
    const positionMs = this.positionMs();
    const durationMs = this.head?.durationMs ?? 0;
    const transition =
      this.armed && this.head
        ? {
            technique: this.armed.technique,
            fallback: this.armed.fallback,
            reason: this.armed.reason,
            inMs: Math.max(0, durationMs - positionMs),
          }
        : null;
    return {
      playing: this.playing,
      positionMs,
      currentId: this.head?.id ?? null,
      durationMs,
      transition,
    };
  }

  positionMs(): number {
    if (!this.playing || !this.head || !this.ctx) return this.pausedMs;
    return this.head.anchorMs + (this.ctx.currentTime - this.head.anchorCtx) * 1000;
  }

  async unlock() {
    const ctx = this.ensure();
    if (ctx.state === "suspended") await ctx.resume();
  }

  setUserBuffer(id: string, buffer: AudioBuffer) {
    this.files.set(id, buffer);
    if (this.files.size > 4) {
      const oldest = this.files.keys().next().value;
      if (oldest && oldest !== id) this.files.delete(oldest);
    }
  }

  forgetUser(id: string) {
    this.files.delete(id);
    this.cache.delete(id);
  }

  clearUsers() {
    this.files.clear();
  }

  setLoudness(on: boolean) {
    this.loudnessOn = on;
  }

  setEq(bands: number[], preampDb: number, bassDb: number) {
    if (!this.ctx) this.pendingEq = { bands, preampDb, bassDb };
    else this.applyEq(bands, preampDb, bassDb);
  }

  private pendingEq: { bands: number[]; preampDb: number; bassDb: number } | null = null;
  private pendingVocal = 0;

  private applyEq(bands: number[], preampDb: number, bassDb: number) {
    if (!this.preamp || !this.bass) return;
    this.preamp.gain.value = 10 ** (Math.max(-12, Math.min(12, preampDb)) / 20);
    this.bass.gain.value = Math.max(0, Math.min(12, bassDb));
    bands.forEach((g, i) => {
      if (this.filters[i]) this.filters[i].gain.value = Math.max(-12, Math.min(12, g));
    });
  }

  setVocal(amount: number) {
    const v = Math.max(0, Math.min(1, amount));
    this.pendingVocal = v;
    if (!this.vocalDry || !this.vocalWet || !this.vocalBass) return;
    this.vocalDry.gain.value = 1 - v;
    this.vocalWet.gain.value = v;
    this.vocalBass.gain.value = v * 0.9;
  }

  readFreq(target: Uint8Array<ArrayBuffer>) {
    if (!this.analyser) return;
    this.analyser.getByteFrequencyData(target);
  }

  arm(next: Arm | null) {
    if (this.fading || this.handoff) {
      this.queuedArm = next;
      return;
    }
    this.armed = next;
    this.armedBuffer = null;
    this.preparing = false;
    this.emit();
  }

  async play(clip: Clip, startMs = 0) {
    this.currentClip = clip;
    const token = ++this.token;
    const ctx = this.ensure();
    if (ctx.state === "suspended") await ctx.resume();
    if (this.master) this.master.gain.setValueAtTime(1, ctx.currentTime);
    const buffer = await this.bufferFor(clip);
    if (token !== this.token) return;
    this.stopAll();
    this.fading = false;
    this.handoff = null;
    const ms = Math.max(0, Math.min(startMs, Math.max(0, clip.durationMs - 400)));
    this.startDeck(0, buffer, ctx.currentTime + 0.02, (ms / 1000) % buffer.duration, 1);
    this.applyLoudness(0, clip.lufs);
    this.head = {
      id: clip.id,
      durationMs: clip.durationMs,
      deck: 0,
      anchorCtx: ctx.currentTime + 0.02,
      anchorMs: ms,
      lufs: clip.lufs,
    };
    this.pausedMs = ms;
    this.playing = true;
    this.armedBuffer = null;
    this.emit();
    this.session();
  }

  pause() {
    if (!this.ctx || !this.playing) return;
    this.pausedMs = this.positionMs();
    this.stopAll();
    this.playing = false;
    this.fading = false;
    this.handoff = null;
    this.emit();
    this.session();
  }

  async resume() {
    if (!this.head || !this.currentClip || this.playing) return;
    await this.play(this.currentClip, this.pausedMs);
  }

  seek(ms: number) {
    if (!this.head) return;
    const next = Math.max(0, Math.min(ms, this.head.durationMs - 200));
    this.pausedMs = next;
    if (!this.playing) {
      this.emit();
      return;
    }
    if (!this.currentClip) return;
    void this.play(this.currentClip, next);
  }

  fadeOut(seconds: number) {
    if (!this.ctx || !this.master) return;
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setValueAtTime(this.master.gain.value, now);
    this.master.gain.linearRampToValueAtTime(0.0001, now + seconds);
  }

  restoreGain() {
    if (!this.ctx || !this.master) return;
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setValueAtTime(1, now);
  }

  updateSession(meta: { title: string; artist: string; album: string } | null) {
    if (typeof navigator === "undefined" || !("mediaSession" in navigator)) return;
    if (!meta) {
      navigator.mediaSession.playbackState = "none";
      return;
    }
    navigator.mediaSession.metadata = new MediaMetadata({
      title: meta.title,
      artist: meta.artist,
      album: meta.album,
    });
    navigator.mediaSession.playbackState = this.playing ? "playing" : "paused";
  }

  private session() {
    if (typeof navigator === "undefined" || !("mediaSession" in navigator)) return;
    navigator.mediaSession.playbackState = this.playing ? "playing" : "paused";
  }

  private ensure() {
    if (this.ctx) return this.ctx;
    const ctx = new AudioContext();
    this.ctx = ctx;
    const preamp = ctx.createGain();
    this.preamp = preamp;
    let node: AudioNode = preamp;
    this.filters = FREQS.map((freq) => {
      const filter = ctx.createBiquadFilter();
      filter.type = "peaking";
      filter.frequency.value = freq;
      filter.Q.value = 1.15;
      filter.gain.value = 0;
      node.connect(filter);
      node = filter;
      return filter;
    });
    const bass = ctx.createBiquadFilter();
    bass.type = "lowshelf";
    bass.frequency.value = 90;
    bass.gain.value = 0;
    this.bass = bass;
    node.connect(bass);
    const vocalIn = ctx.createGain();
    bass.connect(vocalIn);
    const splitter = ctx.createChannelSplitter(2);
    const sideL = ctx.createGain();
    const sideR = ctx.createGain();
    sideR.gain.value = -1;
    const side = ctx.createGain();
    side.gain.value = 0.5;
    const hp = ctx.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 150;
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 150;
    const dry = ctx.createGain();
    const wet = ctx.createGain();
    const bassBack = ctx.createGain();
    const vocalOut = ctx.createGain();
    this.vocalDry = dry;
    this.vocalWet = wet;
    this.vocalBass = bassBack;
    vocalIn.connect(dry);
    vocalIn.connect(splitter);
    splitter.connect(sideL, 0);
    splitter.connect(sideR, 1);
    sideL.connect(side);
    sideR.connect(side);
    side.connect(hp);
    hp.connect(wet);
    vocalIn.connect(lp);
    lp.connect(bassBack);
    dry.connect(vocalOut);
    wet.connect(vocalOut);
    bassBack.connect(vocalOut);
    dry.gain.value = 1;
    wet.gain.value = 0;
    bassBack.gain.value = 0;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -2;
    comp.knee.value = 3;
    comp.ratio.value = 12;
    comp.attack.value = 0.004;
    comp.release.value = 0.08;
    vocalOut.connect(comp);
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 64;
    analyser.smoothingTimeConstant = 0.82;
    this.analyser = analyser;
    comp.connect(analyser);
    const master = ctx.createGain();
    this.master = master;
    analyser.connect(master);
    master.connect(ctx.destination);
    this.decks = [0, 1].map(() => this.makeDeck(ctx, preamp));
    if (this.pendingEq) this.applyEq(this.pendingEq.bands, this.pendingEq.preampDb, this.pendingEq.bassDb);
    this.setVocal(this.pendingVocal);
    this.timer = window.setInterval(() => this.tick(), 100);
    this.bindSession();
    return ctx;
  }

  private makeDeck(ctx: AudioContext, dest: AudioNode): Deck {
    const input = ctx.createGain();
    const hp = ctx.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 20;
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 18000;
    const fader = ctx.createGain();
    const echoSend = ctx.createGain();
    echoSend.gain.value = 0;
    const delay = ctx.createDelay(1.5);
    delay.delayTime.value = 0.3;
    const fb = ctx.createGain();
    fb.gain.value = 0.32;
    const echoReturn = ctx.createGain();
    echoReturn.gain.value = 0.45;
    input.connect(hp);
    hp.connect(lp);
    lp.connect(fader);
    fader.connect(dest);
    fader.connect(echoSend);
    echoSend.connect(delay);
    delay.connect(echoReturn);
    echoReturn.connect(dest);
    delay.connect(fb);
    fb.connect(delay);
    return { input, hp, lp, fader, echoSend, delay, source: null };
  }

  private bindSession() {
    if (!("mediaSession" in navigator)) return;
    const safe = (type: MediaSessionAction, fn: () => void) => {
      try {
        navigator.mediaSession.setActionHandler(type, fn);
      } catch {
        /* unsupported action */
      }
    };
    safe("play", () => this.handlers.onAdvance && document.dispatchEvent(new CustomEvent("klangyu-media", { detail: "play" })));
    safe("pause", () => document.dispatchEvent(new CustomEvent("klangyu-media", { detail: "pause" })));
    safe("nexttrack", () => document.dispatchEvent(new CustomEvent("klangyu-media", { detail: "next" })));
    safe("previoustrack", () => document.dispatchEvent(new CustomEvent("klangyu-media", { detail: "prev" })));
    safe("seekto", () => {});
  }

  private async bufferFor(clip: Clip): Promise<AudioBuffer> {
    if (clip.source === "file") {
      const found = this.files.get(clip.id);
      if (found) return found;
      throw new Error("missing-file");
    }
    const cached = this.cache.get(clip.id);
    if (cached) return cached;
    const rendered = await renderSketch(clip);
    this.cache.set(clip.id, rendered);
    if (this.cache.size > 8) {
      const oldest = this.cache.keys().next().value;
      if (oldest && oldest !== clip.id) this.cache.delete(oldest);
    }
    return rendered;
  }

  private startDeck(index: 0 | 1, buffer: AudioBuffer, when: number, offset: number, gain: number) {
    const ctx = this.ctx;
    if (!ctx) return;
    const deck = this.decks[index];
    this.stopDeck(index);
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    src.connect(deck.input);
    const dur = buffer.duration || 1;
    const off = ((offset % dur) + dur) % dur;
    src.start(when, off);
    deck.source = src;
    const now = Math.max(when, ctx.currentTime);
    deck.fader.gain.cancelScheduledValues(now);
    deck.fader.gain.setValueAtTime(gain, now);
    deck.hp.frequency.cancelScheduledValues(now);
    deck.lp.frequency.cancelScheduledValues(now);
    deck.hp.frequency.setValueAtTime(20, now);
    deck.lp.frequency.setValueAtTime(18000, now);
    deck.echoSend.gain.cancelScheduledValues(now);
    deck.echoSend.gain.setValueAtTime(0, now);
  }

  private applyLoudness(index: 0 | 1, lufs: number) {
    this.decks[index].input.gain.value = this.loudnessOn ? lufsGain(lufs) : 1;
  }

  private stopDeck(index: number) {
    const deck = this.decks[index];
    if (!deck?.source) return;
    try {
      deck.source.stop();
    } catch {
      /* already stopped */
    }
    deck.source.disconnect();
    deck.source = null;
  }

  private stopAll() {
    this.stopDeck(0);
    this.stopDeck(1);
  }

  private tick() {
    if (!this.ctx || !this.head || !this.playing) return;
    const pos = this.positionMs();
    const dur = this.head.durationMs;
    if (this.fading && this.ctx.currentTime >= this.fadeEnds) {
      this.finishFade();
    } else if (this.handoff && this.ctx.currentTime >= this.handoff.at) {
      this.finishHandoff();
    } else if (!this.fading && !this.handoff && this.armed) {
      const lead = Math.max(2500, this.armed.fadeMs + 1500);
      if (!this.armedBuffer && !this.preparing && pos > dur - lead) {
        this.preparing = true;
        const arm = this.armed;
        void this.bufferFor(arm.clip)
          .then((buffer) => {
            if (this.armed?.clip.id === arm.clip.id) this.armedBuffer = buffer;
          })
          .catch(() => {
            this.armedBuffer = null;
          })
          .finally(() => {
            this.preparing = false;
          });
      }
      if (this.armedBuffer && this.armed.fadeMs > 40 && pos >= dur - this.armed.fadeMs && pos < dur) {
        this.beginFade();
      } else if (this.armed.fadeMs <= 40 && this.armedBuffer && pos >= dur - 120) {
        this.beginHandoff();
      } else if (pos >= dur) {
        this.hardEnd();
      }
    } else if (!this.armed && pos >= dur) {
      this.hardEnd();
    }
    this.emit();
  }

  private beginFade() {
    if (!this.ctx || !this.head || !this.armed || !this.armedBuffer) return;
    const arm = this.armed;
    const from = this.head.deck;
    const to = (from === 0 ? 1 : 0) as 0 | 1;
    const now = this.ctx.currentTime + 0.03;
    const seconds = Math.max(0.08, arm.fadeMs / 1000);
    this.startDeck(to, this.armedBuffer, now, 0, 0.0001);
    this.applyLoudness(to, arm.clip.lufs);
    const out = this.decks[from].fader.gain;
    const inn = this.decks[to].fader.gain;
    const steps = 24;
    const cOut = new Float32Array(steps);
    const cIn = new Float32Array(steps);
    for (let i = 0; i < steps; i++) {
      const p = i / (steps - 1);
      cOut[i] = Math.cos((p * Math.PI) / 2);
      cIn[i] = Math.sin((p * Math.PI) / 2);
    }
    try {
      out.cancelScheduledValues(now);
      inn.cancelScheduledValues(now);
      out.setValueAtTime(out.value || 1, now);
      inn.setValueAtTime(0.0001, now);
      out.setValueCurveAtTime(cOut, now, seconds);
      inn.setValueCurveAtTime(cIn, now, seconds);
    } catch {
      out.linearRampToValueAtTime(0.0001, now + seconds);
      inn.linearRampToValueAtTime(1, now + seconds);
    }
    this.shape(from, to, arm, now, seconds);
    this.fading = true;
    this.fadeEnds = now + seconds;
    this.fadeFrom = from;
  }

  private shape(from: 0 | 1, to: 0 | 1, arm: Arm, now: number, seconds: number) {
    const a = this.decks[from];
    const b = this.decks[to];
    if (arm.technique === "filter") {
      a.lp.frequency.setValueAtTime(16000, now);
      a.lp.frequency.exponentialRampToValueAtTime(380, now + seconds);
    }
    if (arm.technique === "echo") {
      const beat = 60 / Math.max(60, arm.clip.bpm || 120);
      a.delay.delayTime.setValueAtTime(Math.min(1.2, beat), now);
      a.echoSend.gain.setValueAtTime(0.7, now);
      a.echoSend.gain.linearRampToValueAtTime(0.0001, now + seconds);
    }
    if (arm.technique === "bass") {
      b.hp.frequency.setValueAtTime(220, now);
      b.hp.frequency.exponentialRampToValueAtTime(28, now + seconds);
      a.hp.frequency.setValueAtTime(30, now + seconds * 0.45);
      a.hp.frequency.exponentialRampToValueAtTime(180, now + seconds);
    }
  }

  private finishFade() {
    if (!this.head || !this.armed) {
      this.fading = false;
      return;
    }
    const playedMs = this.positionMs();
    const to = (this.fadeFrom === 0 ? 1 : 0) as 0 | 1;
    this.stopDeck(this.fadeFrom);
    const clip = this.armed.clip;
    const startedAt = this.fadeEnds - Math.max(0.08, this.armed.fadeMs / 1000);
    this.head = {
      id: clip.id,
      durationMs: clip.durationMs,
      deck: to,
      anchorCtx: startedAt,
      anchorMs: 0,
      lufs: clip.lufs,
    };
    this.currentClip = clip;
    this.pausedMs = Math.max(0, (this.ctx?.currentTime ?? startedAt) - startedAt) * 1000;
    this.fading = false;
    this.armed = this.queuedArm;
    this.queuedArm = null;
    this.armedBuffer = null;
    this.handlers.onAdvance?.(Math.min(playedMs, 10_000_000), this.positionMs());
    this.emit();
  }

  private beginHandoff() {
    if (!this.ctx || !this.head || !this.armed || !this.armedBuffer) return;
    const endAt = this.head.anchorCtx + (this.head.durationMs - this.head.anchorMs) / 1000;
    const to = (this.head.deck === 0 ? 1 : 0) as 0 | 1;
    this.startDeck(to, this.armedBuffer, Math.max(this.ctx.currentTime, endAt), 0, 1);
    this.applyLoudness(to, this.armed.clip.lufs);
    this.handoff = { at: endAt, deck: to, clip: this.armed.clip };
  }

  private finishHandoff() {
    if (!this.head || !this.handoff) return;
    const playedMs = this.head.durationMs;
    this.stopDeck(this.head.deck);
    const clip = this.handoff.clip;
    this.head = {
      id: clip.id,
      durationMs: clip.durationMs,
      deck: this.handoff.deck,
      anchorCtx: this.handoff.at,
      anchorMs: 0,
      lufs: clip.lufs,
    };
    this.currentClip = clip;
    this.handoff = null;
    this.armed = this.queuedArm;
    this.queuedArm = null;
    this.armedBuffer = null;
    this.handlers.onAdvance?.(playedMs, 0);
  }

  private hardEnd() {
    if (this.armed && this.armedBuffer) {
      const clip = this.armed.clip;
      const played = this.head?.durationMs ?? 0;
      void this.playArmedNow(clip, played);
      return;
    }
    this.playing = false;
    this.pausedMs = this.head?.durationMs ?? 0;
    this.stopAll();
    this.handlers.onEnded?.();
    this.emit();
  }

  private async playArmedNow(clip: Clip, playedMs: number) {
    this.armed = this.queuedArm;
    this.queuedArm = null;
    this.armedBuffer = null;
    this.handlers.onAdvance?.(playedMs, 0);
    if (!this.playing) return;
    await this.play(clip, 0);
  }
}

export const engine = new KlangEngine();
