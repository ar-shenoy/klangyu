import type { PlayEvent, Track } from "./types";

export type ListeningReport = {
  plays: PlayEvent[];
  totalMs: number;
  topArtists: { name: string; ms: number }[];
  topTracks: { track: Track; ms: number }[];
  hours: number[];
  streak: number;
  newArtists: number;
  avgBpm: number;
  favouriteKey: string;
  avgEnergy: number;
  label: string | null;
};

export function inRange(events: PlayEvent[], from: number, to: number): PlayEvent[] {
  return events.filter((e) => e.startedAt >= from && e.startedAt <= to && e.playedMs >= 8_000);
}

export function buildReport(events: PlayEvent[], tracks: Track[], from: number, to: number): ListeningReport {
  const plays = inRange(events, from, to);
  const byId = new Map(tracks.map((t) => [t.id, t]));
  const totalMs = plays.reduce((sum, e) => sum + e.playedMs, 0);
  const artistMs = new Map<string, number>();
  const trackMs = new Map<string, number>();
  const hours = Array.from({ length: 24 }, () => 0);
  let bpm = 0;
  let energy = 0;
  let weighted = 0;
  const keyMs = new Map<string, number>();
  for (const event of plays) {
    const track = byId.get(event.trackId);
    if (!track) continue;
    artistMs.set(track.artist, (artistMs.get(track.artist) ?? 0) + event.playedMs);
    trackMs.set(track.id, (trackMs.get(track.id) ?? 0) + event.playedMs);
    hours[event.hourOfDay] += event.playedMs;
    bpm += track.bpm * event.playedMs;
    energy += track.energy * event.playedMs;
    weighted += event.playedMs;
    keyMs.set(track.camelot, (keyMs.get(track.camelot) ?? 0) + event.playedMs);
  }
  const topArtists = Array.from(artistMs.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, ms]) => ({ name, ms }));
  const topTracks = Array.from(trackMs.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .flatMap(([id, ms]) => {
      const track = byId.get(id);
      return track ? [{ track, ms }] : [];
    });
  const night = hours.slice(22).reduce((a, b) => a + b, 0) + hours.slice(0, 5).reduce((a, b) => a + b, 0);
  const morning = hours.slice(5, 10).reduce((a, b) => a + b, 0);
  let label: string | null = null;
  if (totalMs > 0 && night / totalMs > 0.4) label = "night";
  else if (totalMs > 0 && morning / totalMs > 0.45) label = "early";
  const days = new Set(plays.map((e) => new Date(e.startedAt).toDateString()));
  let streak = 0;
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  while (days.has(cursor.toDateString())) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  const firstSeen = new Map<string, number>();
  const ordered = [...events].sort((a, b) => a.startedAt - b.startedAt);
  let newArtists = 0;
  for (const event of ordered) {
    const track = byId.get(event.trackId);
    if (!track) continue;
    if (!firstSeen.has(track.artist)) firstSeen.set(track.artist, event.startedAt);
  }
  for (const event of plays) {
    const track = byId.get(event.trackId);
    if (!track) continue;
    if (firstSeen.get(track.artist) === event.startedAt) newArtists += 1;
  }
  let favouriteKey = "–";
  let best = -1;
  for (const [key, ms] of keyMs) {
    if (ms > best) {
      best = ms;
      favouriteKey = key;
    }
  }
  return {
    plays,
    totalMs,
    topArtists,
    topTracks,
    hours,
    streak,
    newArtists,
    avgBpm: weighted ? Math.round(bpm / weighted) : 0,
    favouriteKey,
    avgEnergy: weighted ? energy / weighted : 0,
    label,
  };
}

export function rangeFor(kind: "week" | "month" | "year", now = Date.now()): { from: number; to: number } {
  const to = now;
  const d = new Date(now);
  if (kind === "week") return { from: now - 7 * 86400000, to };
  if (kind === "month") return { from: now - 30 * 86400000, to };
  d.setMonth(0, 1);
  d.setHours(0, 0, 0, 0);
  return { from: d.getTime(), to };
}
