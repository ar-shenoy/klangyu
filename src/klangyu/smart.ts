import { camelotSteps, tempoDist, tempoGap } from "./theory";
import type { Settings, SmartMode, Technique, Track } from "./types";

export type Plan = {
  technique: Technique;
  seconds: number;
  fallback: boolean;
  reason: string;
};

function mulberry(seed: number) {
  let s = seed % 2147483646 || 1;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function planTransition(
  a: Track,
  b: Track,
  settings: Pick<Settings, "automixStyle" | "automixHarmonicOnly" | "crossfadeSeconds">,
  allowAutomix: boolean,
): Plan {
  if (!allowAutomix) {
    const seconds = settings.crossfadeSeconds;
    return {
      technique: seconds > 0 ? "blend" : "cut",
      seconds,
      fallback: true,
      reason: seconds > 0 ? "crossfade" : "cut",
    };
  }
  const steps = camelotSteps(a.camelot, b.camelot);
  const gap = tempoGap(a.bpm, b.bpm);
  const conf = Math.min(a.bpmConfidence, b.bpmConfidence);
  const style = settings.automixStyle;
  if (settings.automixHarmonicOnly && steps > 2) {
    return { technique: "cut", seconds: 0, fallback: true, reason: "harmonic" };
  }
  if (conf < 0.55 || !Number.isFinite(gap)) {
    return { technique: "blend", seconds: Math.min(3, 3), fallback: true, reason: "low-confidence" };
  }
  if (gap > 0.2) {
    return { technique: "blend", seconds: 3, fallback: true, reason: "tempo" };
  }
  if (style === "RADIO" && conf >= 0.6) {
    return { technique: "cut", seconds: 0.15, fallback: false, reason: "radio" };
  }
  if (style === "CHILL" || steps >= 3) {
    return {
      technique: "filter",
      seconds: style === "CHILL" ? 11 : 6,
      fallback: false,
      reason: steps >= 3 ? "key" : "chill",
    };
  }
  if (style === "CLUB" && gap <= 0.08 && steps <= 1 && conf >= 0.6) {
    return { technique: "bass", seconds: 8, fallback: false, reason: "club" };
  }
  if (gap > 0.08 && gap <= 0.2 && conf < 0.85) {
    return { technique: "echo", seconds: 4, fallback: false, reason: "echo" };
  }
  return { technique: "blend", seconds: 6, fallback: false, reason: "blend" };
}

export function automixAllowed(
  a: Track,
  b: Track,
  settings: Settings,
  smartSession: boolean,
  albumOrder: boolean,
): boolean {
  if (settings.automixMode === "OFF") return false;
  if (settings.automixMode === "SMART_SESSIONS" && !smartSession) return false;
  if (settings.gaplessAlbums && albumOrder && a.album === b.album && a.folder === b.folder) {
    return false;
  }
  if (a.durationMs > 20 * 60 * 1000 || b.durationMs > 20 * 60 * 1000) return false;
  if (a.durationMs < 60_000 || b.durationMs < 60_000) return false;
  const genre = `${a.genre} ${b.genre} ${a.folder} ${b.folder}`.toLowerCase();
  if (genre.includes("podcast") || genre.includes("audiobook")) return false;
  return true;
}

function weight(track: Track, tier: 0 | 1 | 2): { e: number; b: number; t: number; k: number; g: number; emb: number } {
  if (tier >= 1) return { e: 0.25, b: 0.1, t: 0.25, k: 0.2, g: 0.1, emb: 0.1 };
  const base = { e: 0.25, b: 0.1, t: 0.25, k: 0.2, g: 0.1 };
  const sum = base.e + base.b + base.t + base.k + base.g;
  return {
    e: base.e / sum,
    b: base.b / sum,
    t: base.t / sum,
    k: base.k / sum,
    g: base.g / sum,
    emb: 0,
  };
}

function embed(track: Track): number[] {
  return [track.energy, track.brightness, track.danceability, Math.min(track.bpm, 220) / 220];
}

function cosine(a: number[], b: number[]): number {
  let dot = 0;
  let na = 0;
  let nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  if (na === 0 || nb === 0) return 1;
  return 1 - dot / Math.sqrt(na * nb);
}

export function buildSmartQueue(
  seed: Track,
  library: Track[],
  mode: SmartMode,
  length: number,
  tier: 0 | 1 | 2,
  personalisation: boolean,
  taste: Record<string, number>,
  recentIds: string[],
): { ids: string[]; analysed: number; total: number } {
  const usable = library.filter(
    (t) => !t.hidden && t.analysis === "done" && t.bpmConfidence > 0 && t.bpm >= 50 && t.bpm <= 220,
  );
  const recent = new Set(recentIds.slice(-50));
  const w = weight(seed, tier);
  const picked: Track[] = [seed];
  const artistCounts = new Map<string, number>([[seed.artist, 1]]);
  const rnd = mulberry(seed.title.length * 97 + seed.bpm);
  const targetLen = Math.min(length, usable.length);

  for (let i = 1; i < targetLen; i++) {
    const progress = i / Math.max(1, targetLen - 1);
    const targetEnergy =
      mode === "up"
        ? seed.energy + 0.3 * progress
        : mode === "down"
          ? seed.energy - 0.3 * progress
          : seed.energy;
    const last = picked[picked.length - 1];
    const scored = usable
      .filter((t) => !picked.some((p) => p.id === t.id) && !recent.has(t.id))
      .map((t) => {
        const dEnergy = Math.abs(t.energy - targetEnergy);
        const dBright = Math.abs(t.brightness - seed.brightness);
        const dTempo = tempoDist(seed.bpm, t.bpm);
        const dKey = camelotSteps(seed.camelot, t.camelot) / 6;
        const genre = t.genre === seed.genre ? 0 : 1;
        const emb = tier >= 1 ? cosine(embed(seed), embed(t)) : 0;
        let d =
          w.e * dEnergy + w.b * dBright + w.t * dTempo + w.k * dKey + w.g * genre + w.emb * emb;
        if (mode === "discover") d *= 1 + Math.min(2, t.playCount / 4);
        if (personalisation) {
          const factor = 1 + Math.max(-1, Math.min(1, taste[t.id] ?? 0)) * 0.3;
          d /= factor;
        }
        return { t, d };
      })
      .filter((row) => {
        const count = artistCounts.get(row.t.artist) ?? 0;
        if (row.t.artist === last.artist) return false;
        if (count >= 3) return false;
        return true;
      })
      .sort((a, b) => a.d - b.d)
      .slice(0, 10);

    const pool =
      scored.length > 0
        ? scored
        : usable
            .filter((t) => !picked.some((p) => p.id === t.id))
            .map((t) => ({ t, d: 1 }));
    if (pool.length === 0) break;
    const weights = pool.map((row) => Math.exp(-row.d / 0.3));
    const sum = weights.reduce((a, b) => a + b, 0);
    let r = rnd() * sum;
    let choice = pool[0];
    for (let k = 0; k < pool.length; k++) {
      r -= weights[k];
      if (r <= 0) {
        choice = pool[k];
        break;
      }
    }
    picked.push(choice.t);
    artistCounts.set(choice.t.artist, (artistCounts.get(choice.t.artist) ?? 0) + 1);
  }

  return {
    ids: picked.map((t) => t.id),
    analysed: usable.length,
    total: library.filter((t) => !t.hidden).length,
  };
}

export function contextMix(id: string, tracks: Track[], hour: number): Track[] {
  const open = tracks.filter((t) => !t.hidden && t.durationMs >= 60_000);
  const scored = open
    .map((t) => {
      let score = 0;
      if (id === "morning") score = (1 - Math.abs(t.energy - 0.45)) * 2 + t.brightness;
      if (id === "focus") score = (1 - t.energy) * 1.4 + (1 - t.danceability) + (t.bpm < 110 ? 0.4 : 0);
      if (id === "workout") score = t.energy + (t.bpm > 118 ? 0.5 : 0) + t.danceability;
      if (id === "night") {
        score = (1 - t.energy) * 1.3 + (t.mode === "minor" ? 0.35 : 0) + (hour >= 21 || hour < 5 ? 0.2 : 0);
      }
      if (id === "discover") score = 1 / (1 + t.playCount) + (t.analysis === "done" ? 0.2 : 0);
      return { t, score };
    })
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, 18).map((row) => row.t);
}
