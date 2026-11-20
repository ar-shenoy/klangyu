const MAJOR = [6.35, 2.23, 3.48, 2.33, 4.38, 4.09, 2.52, 5.19, 2.39, 3.66, 2.29, 2.88];
const MINOR = [6.33, 2.68, 3.52, 5.38, 2.6, 3.53, 2.54, 4.75, 3.98, 2.69, 3.34, 3.17];

export type Analysis = {
  bpm: number;
  bpmConfidence: number;
  keyRoot: number;
  mode: "major" | "minor";
  energy: number;
  brightness: number;
  danceability: number;
  loudnessLufs: number;
  mono: boolean;
};

function downmix(buffer: AudioBuffer): { mono: Float32Array; sr: number } {
  const srIn = buffer.sampleRate;
  const target = 22050;
  const step = srIn / target;
  const left = buffer.getChannelData(0);
  const right = buffer.numberOfChannels > 1 ? buffer.getChannelData(1) : left;
  const n = Math.min(left.length, Math.floor(srIn * 45));
  const outLen = Math.max(1, Math.floor(n / step));
  const mono = new Float32Array(outLen);
  for (let i = 0; i < outLen; i++) {
    const idx = Math.min(n - 1, Math.floor(i * step));
    mono[i] = 0.5 * (left[idx] + right[idx]);
  }
  return { mono, sr: target };
}

function goertzel(samples: Float32Array, start: number, len: number, sr: number, freq: number): number {
  const k = Math.round((len * freq) / sr);
  const w = (2 * Math.PI * k) / len;
  const coeff = 2 * Math.cos(w);
  let s0 = 0;
  let s1 = 0;
  let s2 = 0;
  const end = Math.min(samples.length, start + len);
  for (let i = start; i < end; i++) {
    s0 = samples[i] + coeff * s1 - s2;
    s2 = s1;
    s1 = s0;
  }
  return s1 * s1 + s2 * s2 - coeff * s1 * s2;
}

function correlate(chroma: number[], profile: number[]): number {
  let c = 0;
  let n1 = 0;
  let n2 = 0;
  const mc = chroma.reduce((a, b) => a + b, 0) / chroma.length;
  const mp = profile.reduce((a, b) => a + b, 0) / profile.length;
  for (let i = 0; i < 12; i++) {
    const a = chroma[i] - mc;
    const b = profile[i] - mp;
    c += a * b;
    n1 += a * a;
    n2 += b * b;
  }
  return c / Math.sqrt(n1 * n2 + 1e-9);
}

export function stereoCorrelation(buffer: AudioBuffer): number {
  if (buffer.numberOfChannels < 2) return 1;
  const l = buffer.getChannelData(0);
  const r = buffer.getChannelData(1);
  let num = 0;
  let dl = 0;
  let dr = 0;
  const step = Math.max(1, Math.floor(l.length / 24000));
  for (let i = 0; i < l.length; i += step) {
    num += l[i] * r[i];
    dl += l[i] * l[i];
    dr += r[i] * r[i];
  }
  return num / Math.sqrt(dl * dr + 1e-9);
}

export function peaksFromBuffer(buffer: AudioBuffer, bars = 48): number[] {
  const data = buffer.getChannelData(0);
  const size = Math.max(1, Math.floor(data.length / bars));
  const peaks: number[] = [];
  for (let i = 0; i < bars; i++) {
    let sum = 0;
    let n = 0;
    const start = i * size;
    for (let j = 0; j < size; j += 16) {
      sum += Math.abs(data[start + j] || 0);
      n += 1;
    }
    peaks.push(sum / Math.max(1, n));
  }
  const max = Math.max(...peaks, 0.001);
  return peaks.map((p) => Math.min(1, p / max));
}

export function analyseBuffer(buffer: AudioBuffer): Analysis {
  const { mono, sr } = downmix(buffer);
  const frame = 1024;
  const hop = 512;
  const energies: number[] = [];
  for (let i = 0; i + frame < mono.length; i += hop) {
    let e = 0;
    for (let j = 0; j < frame; j += 2) e += mono[i + j] * mono[i + j];
    energies.push(e / frame);
  }
  const flux = energies.map((e, i) => Math.max(0, e - (energies[i - 1] ?? e)));
  const fps = sr / hop;
  let best = 0;
  let bestBpm = 0;
  let sumCorr = 0;
  let trials = 0;
  for (let bpm = 70; bpm <= 180; bpm += 1) {
    const lag = Math.round((fps * 60) / bpm);
    if (lag < 1 || lag >= flux.length) continue;
    let c = 0;
    const limit = Math.min(flux.length - lag, 1500);
    for (let i = 0; i < limit; i += 1) c += flux[i] * flux[i + lag];
    sumCorr += c;
    trials += 1;
    if (c > best) {
      best = c;
      bestBpm = bpm;
    }
  }
  const mean = sumCorr / Math.max(1, trials);
  let confidence = mean > 0 ? Math.min(1, best / (mean * 4)) : 0;
  if (bestBpm < 50 || bestBpm > 220) confidence = 0;

  const chroma = new Array(12).fill(0);
  const win = 8192;
  const windows = 8;
  for (let w = 0; w < windows; w++) {
    const start = Math.floor(((mono.length - win) * w) / windows);
    if (start < 0) continue;
    for (let midi = 36; midi < 84; midi++) {
      const freq = 440 * 2 ** ((midi - 69) / 12);
      chroma[midi % 12] += goertzel(mono, Math.max(0, start), win, sr, freq);
    }
  }
  let bestKey = 0;
  let bestMode: "major" | "minor" = "major";
  let bestScore = -Infinity;
  let second = -Infinity;
  for (let root = 0; root < 12; root++) {
    const rotated = chroma.map((_, i) => chroma[(i + root) % 12]);
    for (const [mode, profile] of [
      ["major", MAJOR],
      ["minor", MINOR],
    ] as const) {
      const score = correlate(rotated, profile);
      if (score > bestScore) {
        second = bestScore;
        bestScore = score;
        bestKey = root;
        bestMode = mode;
      } else if (score > second) second = score;
    }
  }
  if (bestScore - second < 0.04) confidence = Math.min(confidence, 0.45);

  let sq = 0;
  let zc = 0;
  for (let i = 1; i < mono.length; i += 2) {
    sq += mono[i] * mono[i];
    if (mono[i] * mono[i - 1] < 0) zc += 1;
  }
  const rms = Math.sqrt(sq / (mono.length / 2));
  const energy = Math.max(0, Math.min(1, (rms - 0.015) / 0.18));
  const brightness = Math.max(0, Math.min(1, (zc / (mono.length / 2) - 0.01) / 0.12));
  const danceability = Math.max(0, Math.min(1, confidence * (bestBpm > 100 ? 0.75 : 0.45) * (0.4 + energy)));
  const lufs = Math.max(-28, Math.min(-6, -0.691 + 20 * Math.log10(rms + 1e-6)));
  const corr = stereoCorrelation(buffer);

  return {
    bpm: confidence > 0 ? bestBpm : 0,
    bpmConfidence: Number.isFinite(confidence) ? confidence : 0,
    keyRoot: bestKey,
    mode: bestMode,
    energy,
    brightness,
    danceability,
    loudnessLufs: Number.isFinite(lufs) ? lufs : -14,
    mono: buffer.numberOfChannels < 2 || corr > 0.98,
  };
}
