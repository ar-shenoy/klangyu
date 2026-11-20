import type { Mode } from "./types";

const MAJOR = ["8B", "3B", "10B", "5B", "12B", "7B", "2B", "9B", "4B", "11B", "6B", "1B"];
const MINOR = ["5A", "12A", "7A", "2A", "9A", "4A", "11A", "6A", "1A", "8A", "3A", "10A"];

const NAMES = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];

export function toCamelot(keyRoot: number, mode: Mode): string {
  const i = ((keyRoot % 12) + 12) % 12;
  return mode === "major" ? MAJOR[i] : MINOR[i];
}

export function keyLabel(keyRoot: number, mode: Mode): string {
  const i = ((keyRoot % 12) + 12) % 12;
  return `${NAMES[i]} ${mode === "major" ? "major" : "minor"}`;
}

export function camelotSteps(a: string, b: string): number {
  const pa = parseCamelot(a);
  const pb = parseCamelot(b);
  if (!pa || !pb) return 6;
  let num = Math.abs(pa.n - pb.n);
  num = Math.min(num, 12 - num);
  return Math.min(6, num + (pa.m === pb.m ? 0 : 1));
}

function parseCamelot(value: string): { n: number; m: string } | null {
  const match = /^(\d{1,2})([AB])$/.exec(value);
  if (!match) return null;
  const n = Number(match[1]);
  if (n < 1 || n > 12) return null;
  return { n, m: match[2] };
}

/** Nearest same / half / double tempo, scaled to 0–1. An octave fold lands at 0. */
export function tempoDist(bpmA: number, bpmB: number): number {
  if (!(bpmA > 0) || !(bpmB > 0)) return 1;
  const ratio = bpmB / bpmA;
  const best = Math.min(
    Math.abs(Math.log2(ratio)),
    Math.abs(Math.log2(ratio / 2)),
    Math.abs(Math.log2(ratio * 2)),
  );
  return Math.min(1, best * 2);
}

/** Absolute tempo gap after folding half and double time, as a fraction. */
export function tempoGap(bpmA: number, bpmB: number): number {
  if (!(bpmA > 0) || !(bpmB > 0)) return 1;
  const ratio = bpmB / bpmA;
  const folded = [ratio, ratio / 2, ratio * 2].reduce((best, r) => {
    const d = Math.abs(Math.log2(r));
    return d < best.d ? { d, r } : best;
  }, { d: Infinity, r: ratio });
  return Math.abs(folded.r - 1);
}

export function keyHue(camelot: string): number {
  const parsed = parseCamelot(camelot);
  if (!parsed) return 8;
  return ((parsed.n - 1) / 12) * 360 + (parsed.m === "A" ? 0 : 16);
}

export function hashString(value: string): number {
  let h = 2166136261;
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) / 4294967296;
}

export function makePeaks(seed: number, energy: number): number[] {
  let s = Math.abs(seed) % 2147483646 || 1;
  const rnd = () => {
    s = (s * 48271) % 2147483647;
    return s / 2147483647;
  };
  return Array.from({ length: 48 }, (_, i) => {
    const beat = i % 4 === 0 ? 1 : i % 4 === 2 ? 0.72 : 0.4;
    return Math.min(1, 0.18 + energy * 0.55 * beat + rnd() * 0.22);
  });
}

export function formatClock(ms: number): string {
  if (!Number.isFinite(ms) || ms < 0) ms = 0;
  const total = Math.floor(ms / 1000);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function energyLabel(energy: number): "low" | "mid" | "high" {
  if (energy < 0.4) return "low";
  if (energy < 0.7) return "mid";
  return "high";
}
