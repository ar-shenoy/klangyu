import { create } from "zustand";
import { persist } from "zustand/middleware";
import { analyseBuffer, peaksFromBuffer } from "./analyse";
import { engine, type Clip } from "./audio";
import { createCatalog, seedHistory } from "./catalog";
import { idbClear, idbGet, idbPut } from "./idb";
import { automixAllowed, buildSmartQueue, contextMix, planTransition } from "./smart";
import { keyHue, toCamelot } from "./theory";
import type {
  EqState,
  Locale,
  MixId,
  PlayEvent,
  Playlist,
  Probe,
  RepeatMode,
  Settings,
  Sheet,
  SmartMode,
  Tab,
  Track,
} from "./types";
import { EQ_PRESETS } from "./types";

const seeded = seedHistory(createCatalog());

const defaultSettings: Settings = {
  locale: "en",
  theme: "dark",
  palette: "default",
  gaplessAlbums: true,
  crossfadeSeconds: 0,
  automixMode: "SMART_SESSIONS",
  automixStyle: "SUBTLE",
  automixHarmonicOnly: false,
  loudnessMode: "TRACK",
  resumeOnLaunch: true,
  haptics: true,
  minTrackSeconds: 30,
  ignoreArticles: true,
  tierOverride: "AUTO",
  personalisation: true,
  smartQueueLength: 12,
  showSketches: true,
};

const defaultEq: EqState = { bands: [...EQ_PRESETS.Flat], preamp: 0, bass: 0 };

export type Toast = { id: string; text: string; undo?: boolean };

type Sleep =
  | { kind: "off" }
  | { kind: "time"; until: number }
  | { kind: "track" }
  | { kind: "album" };

type State = {
  onboarded: boolean;
  firstLaunch: number;
  promptState: "later" | "never";
  promptDismissals: number;
  lastPromptAt: number;
  tab: Tab;
  sheet: Sheet;
  tracks: Track[];
  playlists: Playlist[];
  events: PlayEvent[];
  settings: Settings;
  eq: EqState;
  vocal: number;
  source: string[];
  order: string[];
  index: number;
  shuffle: boolean;
  repeat: RepeatMode;
  positionMs: number;
  smartSession: boolean;
  recentSearches: string[];
  badMixes: string[];
  taste: Record<string, number>;
  toasts: Toast[];
  sleep: Sleep;
  probe: Probe;
  supportOpen: boolean;
  promptedSession: boolean;
};

type Actions = {
  setProbe: (probe: Probe) => void;
  setTab: (tab: Tab) => void;
  setSheet: (sheet: Sheet) => void;
  setOnboarded: () => void;
  patchSettings: (patch: Partial<Settings>) => void;
  patchTrack: (id: string, patch: Partial<Track>) => void;
  visible: () => Track[];
  track: (id: string | null | undefined) => Track | undefined;
  current: () => Track | undefined;
  playIds: (ids: string[], start?: number, smart?: boolean) => void;
  resumePlayback: () => void;
  toggle: () => void;
  next: () => void;
  prev: () => void;
  seek: (ms: number) => void;
  toggleShuffle: () => void;
  cycleRepeat: () => void;
  toggleFavourite: (id: string) => void;
  hideTrack: (id: string) => void;
  restoreTrack: (id: string) => void;
  playNext: (id: string) => void;
  enqueue: (ids: string[]) => void;
  removeFromOrder: (index: number) => void;
  moveOrder: (index: number, dir: -1 | 1) => void;
  smartFrom: (id: string, mode: SmartMode) => void;
  mix: (id: MixId) => void;
  saveQueue: (name: string) => void;
  createPlaylist: (name: string, ids?: string[]) => void;
  renamePlaylist: (id: string, name: string) => void;
  deletePlaylist: (id: string) => void;
  addToPlaylist: (playlistId: string, ids: string[]) => void;
  movePlaylistTrack: (playlistId: string, index: number, dir: -1 | 1) => void;
  removePlaylistTrack: (playlistId: string, index: number) => void;
  addUserTrack: (track: Track) => void;
  setEq: (eq: EqState) => void;
  setVocal: (vocal: number) => void;
  setSleep: (sleep: Sleep) => void;
  clearSleep: () => void;
  extendSleep: () => void;
  rememberSearch: (query: string) => void;
  clearSearches: () => void;
  markBadMix: () => void;
  skipTransition: () => void;
  resetTaste: () => void;
  clearHistory: () => void;
  clearAll: () => Promise<void>;
  exportData: () => string;
  importData: (raw: string) => boolean;
  toast: (text: string, undo?: () => void) => void;
  undoToast: (id: string) => void;
  dismissToast: (id: string) => void;
  onAdvance: (playedMs: number, nextPos: number) => void;
  onEnded: () => void;
  notePosition: (ms: number) => void;
  openSupport: (fromPrompt?: boolean) => void;
  dismissPrompt: (forever: boolean) => void;
  rearm: () => void;
  effectiveTier: () => 0 | 1 | 2;
};

const undos = new Map<string, () => void>();

function uid(): string {
  return crypto.randomUUID();
}

function haptic(on: boolean) {
  if (on && typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(8);
}

export function toClip(track: Track, settings: Settings, tracks: Track[]): Clip {
  let lufs = track.loudnessLufs || -14;
  if (settings.loudnessMode === "ALBUM") {
    const peers = tracks.filter((t) => t.album === track.album && t.loudnessLufs);
    if (peers.length) lufs = peers.reduce((sum, t) => sum + t.loudnessLufs, 0) / peers.length;
  }
  return {
    id: track.id,
    durationMs: track.durationMs,
    lufs,
    source: track.source,
    style: track.style,
    seed: track.seed,
    bpm: track.bpm || 120,
    keyRoot: track.keyRoot,
    mode: track.mode,
    energy: track.energy,
  };
}

function peekNext(state: State): string | null {
  if (state.order.length === 0) return null;
  if (state.repeat === "one") return state.order[state.index] ?? null;
  const next = state.index + 1;
  if (next < state.order.length) return state.order[next];
  if (state.repeat === "all") return state.order[0] ?? null;
  return null;
}

async function ensureBuffer(track: Track) {
  if (track.source !== "file") return;
  const blob = await idbGet(track.id);
  if (!blob) throw new Error("missing-file");
  const ctx = new AudioContext();
  const audio = await ctx.decodeAudioData(await blob.arrayBuffer());
  await ctx.close();
  engine.setUserBuffer(track.id, audio);
}

export const useStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      onboarded: false,
      firstLaunch: Date.now(),
      promptState: "later",
      promptDismissals: 0,
      lastPromptAt: 0,
      tab: "home",
      sheet: null,
      tracks: seeded.tracks,
      playlists: [],
      events: seeded.events,
      settings: defaultSettings,
      eq: defaultEq,
      vocal: 0,
      source: [],
      order: [],
      index: 0,
      shuffle: false,
      repeat: "off",
      positionMs: 0,
      smartSession: false,
      recentSearches: [],
      badMixes: [],
      taste: {},
      toasts: [],
      sleep: { kind: "off" },
      probe: { tier: 0, ramGb: null, cores: 4 },
      supportOpen: false,
      promptedSession: false,

      setProbe: (probe) => set({ probe }),
      setTab: (tab) => set({ tab }),
      setSheet: (sheet) => set({ sheet }),
      setOnboarded: () => set({ onboarded: true }),
      patchSettings: (patch) => {
        set({ settings: { ...get().settings, ...patch } });
        engine.setLoudness(get().settings.loudnessMode !== "OFF");
        get().rearm();
      },
      patchTrack: (id, patch) =>
        set({
          tracks: get().tracks.map((t) => (t.id === id ? { ...t, ...patch } : t)),
        }),
      visible: () => {
        const { tracks, settings } = get();
        return visibleTracks(tracks, settings.showSketches, settings.minTrackSeconds);
      },
      track: (id) => get().tracks.find((t) => t.id === id),
      current: () => get().track(get().order[get().index]),
      effectiveTier: () => {
        const { settings, probe } = get();
        if (settings.tierOverride === "CORE") return 0;
        if (settings.tierOverride === "ENHANCED") return 1;
        if (settings.tierOverride === "STUDIO") return 2;
        return probe.tier;
      },
      playIds: (ids: string[], start = 0, smart = false) => {
        const playable = ids.filter((id) => get().track(id) && !get().track(id)?.hidden);
        if (playable.length === 0) return;
        const index = Math.max(0, Math.min(start, playable.length - 1));
        set({
          source: playable,
          order: playable,
          index,
          smartSession: smart,
          positionMs: 0,
          shuffle: false,
        });
        haptic(get().settings.haptics);
        void startCurrent(0);
      },
      resumePlayback: () => {
        if (get().order.length === 0) return;
        haptic(get().settings.haptics);
        void startCurrent(get().positionMs);
      },
      toggle: () => {
        const snap = engine.snapshot();
        if (snap.playing) {
          engine.pause();
          set({ positionMs: engine.positionMs() });
          return;
        }
        if (get().order.length === 0) {
          const ids = get().visible().map((t) => t.id);
          if (ids[0]) get().playIds(ids, 0, false);
          return;
        }
        const track = get().current();
        if (!track) return;
        if (snap.currentId === track.id) void engine.resume();
        else void startCurrent(get().positionMs);
      },
      next: () => {
        const state = get();
        const cur = state.current();
        if (cur) rememberPlay(cur, engine.positionMs());
        let index = state.index + 1;
        if (index >= state.order.length) {
          if (state.repeat === "all") index = 0;
          else {
            engine.pause();
            return;
          }
        }
        set({ index, positionMs: 0 });
        void startCurrent(0);
      },
      prev: () => {
        if (engine.positionMs() > 3000) {
          engine.seek(0);
          set({ positionMs: 0 });
          return;
        }
        const cur = get().current();
        if (cur) rememberPlay(cur, engine.positionMs());
        const index = Math.max(0, get().index - 1);
        set({ index, positionMs: 0 });
        void startCurrent(0);
      },
      seek: (ms) => {
        engine.seek(ms);
        set({ positionMs: ms });
      },
      toggleShuffle: () => {
        const state = get();
        if (state.order.length === 0) return;
        if (!state.shuffle) {
          const current = state.order[state.index];
          const rest = state.order.filter((_, i) => i !== state.index);
          for (let i = rest.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [rest[i], rest[j]] = [rest[j], rest[i]];
          }
          set({ shuffle: true, order: current ? [current, ...rest] : rest, index: 0 });
        } else {
          const current = state.order[state.index];
          const index = Math.max(0, state.source.indexOf(current));
          set({ shuffle: false, order: state.source, index });
        }
        get().rearm();
      },
      cycleRepeat: () => {
        const repeat = get().repeat === "off" ? "all" : get().repeat === "all" ? "one" : "off";
        set({ repeat });
        get().rearm();
      },
      toggleFavourite: (id) => {
        const track = get().track(id);
        if (!track) return;
        const favourite = !track.favourite;
        get().patchTrack(id, { favourite });
        bumpTaste(id, favourite ? 0.4 : -0.4);
        haptic(get().settings.haptics);
      },
      hideTrack: (id) => {
        get().patchTrack(id, { hidden: true });
        const state = get();
        if (state.order[state.index] !== id) return;
        const order = state.order.filter((trackId) => trackId !== id);
        const source = state.source.filter((trackId) => trackId !== id);
        set({ order, source, index: Math.min(state.index, Math.max(0, order.length - 1)) });
        if (order.length) void startCurrent(0);
        else engine.pause();
      },
      restoreTrack: (id) => get().patchTrack(id, { hidden: false }),
      playNext: (id) => {
        const state = get();
        if (state.order.length === 0) {
          get().playIds([id], 0, false);
          return;
        }
        const order = state.order.slice();
        const source = state.source.slice();
        order.splice(state.index + 1, 0, id);
        source.splice(Math.min(source.length, state.index + 1), 0, id);
        set({ order, source });
        get().rearm();
        say("playNext");
      },
      enqueue: (ids) => {
        if (get().order.length === 0) {
          get().playIds(ids, 0, false);
          return;
        }
        set({ order: [...get().order, ...ids], source: [...get().source, ...ids] });
        get().rearm();
        say("addQueue");
      },
      removeFromOrder: (index) => {
        const state = get();
        const removed = state.order[index];
        const order = state.order.filter((_, i) => i !== index);
        const source = state.source.filter((id, i) => !(id === removed && i === index));
        let nextIndex = state.index;
        if (index < state.index) nextIndex -= 1;
        if (nextIndex >= order.length) nextIndex = Math.max(0, order.length - 1);
        const snapshot = { order: state.order, source: state.source, index: state.index };
        set({ order, source, index: nextIndex });
        if (index === state.index && order.length) void startCurrent(0);
        else get().rearm();
        say("removed", () => set(snapshot));
      },
      moveOrder: (index, dir) => {
        const order = get().order.slice();
        const j = index + dir;
        if (j < 0 || j >= order.length) return;
        [order[index], order[j]] = [order[j], order[index]];
        let next = get().index;
        if (get().index === index) next = j;
        else if (get().index === j) next = index;
        set({ order, index: next });
        get().rearm();
      },
      smartFrom: (id, mode) => {
        const seed = get().track(id);
        if (!seed) return;
        const recent = get().events.slice(-50).map((e) => e.trackId);
        const built = buildSmartQueue(
          seed,
          get().visible(),
          mode,
          get().settings.smartQueueLength,
          get().effectiveTier(),
          get().settings.personalisation,
          get().taste,
          recent,
        );
        get().playIds(built.ids, 0, true);
        if (built.analysed < built.total) say("partialQueue");
      },
      mix: (id) => {
        const hour = new Date().getHours();
        const tracks = contextMix(id, get().visible(), hour);
        if (tracks.length === 0) return;
        get().playIds(
          tracks.map((t) => t.id),
          0,
          true,
        );
      },
      saveQueue: (name) => {
        const ids = get().order;
        if (!name.trim() || ids.length === 0) return;
        set({
          playlists: [
            { id: uid(), name: name.trim(), trackIds: ids, createdAt: Date.now() },
            ...get().playlists,
          ],
        });
        say("queueSaved");
      },
      createPlaylist: (name, ids = []) => {
        if (!name.trim()) return;
        set({
          playlists: [
            { id: uid(), name: name.trim(), trackIds: ids, createdAt: Date.now() },
            ...get().playlists,
          ],
        });
      },
      renamePlaylist: (id, name) =>
        set({
          playlists: get().playlists.map((p) => (p.id === id ? { ...p, name } : p)),
        }),
      deletePlaylist: (id) => set({ playlists: get().playlists.filter((p) => p.id !== id) }),
      addToPlaylist: (playlistId, ids) =>
        set({
          playlists: get().playlists.map((p) =>
            p.id === playlistId ? { ...p, trackIds: [...p.trackIds, ...ids] } : p,
          ),
        }),
      movePlaylistTrack: (playlistId, index, dir) =>
        set({
          playlists: get().playlists.map((p) => {
            if (p.id !== playlistId) return p;
            const trackIds = p.trackIds.slice();
            const j = index + dir;
            if (j < 0 || j >= trackIds.length) return p;
            [trackIds[index], trackIds[j]] = [trackIds[j], trackIds[index]];
            return { ...p, trackIds };
          }),
        }),
      removePlaylistTrack: (playlistId, index) =>
        set({
          playlists: get().playlists.map((p) =>
            p.id === playlistId ? { ...p, trackIds: p.trackIds.filter((_, i) => i !== index) } : p,
          ),
        }),
      addUserTrack: (track) => set({ tracks: [track, ...get().tracks] }),
      setEq: (eq) => {
        set({ eq });
        engine.setEq(eq.bands, eq.preamp, eq.bass);
      },
      setVocal: (vocal) => {
        set({ vocal });
        engine.setVocal(vocal);
      },
      setSleep: (sleep) => {
        set({ sleep });
        if (sleep.kind === "track" || sleep.kind === "album") get().rearm();
      },
      clearSleep: () => set({ sleep: { kind: "off" } }),
      extendSleep: () => {
        const sleep = get().sleep;
        if (sleep.kind === "time") set({ sleep: { kind: "time", until: sleep.until + 10 * 60 * 1000 } });
      },
      rememberSearch: (query) => {
        const q = query.trim();
        if (!q) return;
        set({ recentSearches: [q, ...get().recentSearches.filter((item) => item !== q)].slice(0, 8) });
      },
      clearSearches: () => set({ recentSearches: [] }),
      markBadMix: () => {
        const state = get();
        const a = state.order[state.index];
        const b = peekNext(state);
        if (!a || !b) return;
        const pair = `${a}>${b}`;
        set({ badMixes: state.badMixes.includes(pair) ? state.badMixes : [...state.badMixes, pair] });
        bumpTaste(b, -0.25);
        get().rearm();
        say("badMix");
      },
      skipTransition: () => get().next(),
      resetTaste: () => {
        set({ taste: {} });
        say("tasteReset");
      },
      clearHistory: () =>
        set({
          events: [],
          tracks: get().tracks.map((t) => ({ ...t, playCount: 0, skipCount: 0, lastPlayedAt: null })),
          taste: {},
        }),
      clearAll: async () => {
        engine.pause();
        engine.clearUsers();
        await idbClear();
        const fresh = createCatalog();
        set({
          tracks: fresh,
          playlists: [],
          events: [],
          order: [],
          source: [],
          index: 0,
          taste: {},
          badMixes: [],
          recentSearches: [],
          positionMs: 0,
        });
      },
      exportData: () =>
        JSON.stringify(
          {
            version: 1,
            settings: get().settings,
            playlists: get().playlists,
            events: get().events,
            tracks: get().tracks,
            taste: get().taste,
            eq: get().eq,
          },
          null,
          2,
        ),
      importData: (raw) => {
        try {
          const data = JSON.parse(raw) as {
            settings?: Settings;
            playlists?: Playlist[];
            events?: PlayEvent[];
            tracks?: Track[];
            taste?: Record<string, number>;
            eq?: EqState;
          };
          if (!data.tracks && !data.playlists && !data.settings) return false;
          set({
            settings: data.settings ? { ...defaultSettings, ...data.settings } : get().settings,
            playlists: data.playlists ?? get().playlists,
            events: data.events ?? get().events,
            tracks: data.tracks ?? get().tracks,
            taste: data.taste ?? get().taste,
            eq: data.eq ?? get().eq,
          });
          return true;
        } catch {
          return false;
        }
      },
      toast: (text, undo) => {
        const id = uid();
        if (undo) undos.set(id, undo);
        set({ toasts: [...get().toasts, { id, text, undo: Boolean(undo) }] });
        window.setTimeout(() => get().dismissToast(id), 4200);
      },
      undoToast: (id) => {
        undos.get(id)?.();
        undos.delete(id);
        get().dismissToast(id);
      },
      dismissToast: (id) => {
        undos.delete(id);
        set({ toasts: get().toasts.filter((t) => t.id !== id) });
      },
      onAdvance: (playedMs) => {
        const state = get();
        const prev = state.current();
        if (prev) rememberPlay(prev, playedMs);
        if (state.sleep.kind === "track") {
          engine.pause();
          set({ sleep: { kind: "off" } });
          return;
        }
        if (state.sleep.kind === "album") {
          const nxtId = peekNext(state);
          const nxt = nxtId ? state.track(nxtId) : undefined;
          if (!nxt || nxt.album !== prev?.album) {
            engine.pause();
            set({ sleep: { kind: "off" } });
            return;
          }
        }
        let index = state.index + 1;
        if (state.repeat === "one") index = state.index;
        else if (index >= state.order.length) index = state.repeat === "all" ? 0 : state.index;
        set({ index, positionMs: 0 });
        const track = get().current();
        if (track) engine.updateSession({ title: track.title, artist: track.artist, album: track.album });
        get().rearm();
      },
      onEnded: () => {
        const track = get().current();
        if (track) rememberPlay(track, track.durationMs);
        engine.pause();
      },
      notePosition: (ms) => set({ positionMs: ms }),
      openSupport: () => set({ supportOpen: true, sheet: "support" }),
      dismissPrompt: (forever) =>
        set({
          supportOpen: false,
          promptState: forever ? "never" : "later",
          promptDismissals: get().promptDismissals + (forever ? 3 : 1),
          lastPromptAt: Date.now(),
          promptedSession: true,
        }),
      rearm: () => {
        const state = get();
        engine.setLoudness(state.settings.loudnessMode !== "OFF");
        const cur = state.current();
        const nextId = peekNext(state);
        const blocking =
          state.sleep.kind === "track" ||
          (state.sleep.kind === "album" &&
            nextId &&
            state.track(nextId)?.album !== cur?.album);
        if (!cur || !nextId || blocking) {
          engine.arm(null);
          return;
        }
        const nxt = state.track(nextId);
        if (!nxt) {
          engine.arm(null);
          return;
        }
        const albumOrder =
          nxt.album === cur.album && Math.abs(nxt.trackNo - cur.trackNo) === 1 && state.order[state.index + 1] === nxt.id;
        const blocked = state.badMixes.includes(`${cur.id}>${nxt.id}`);
        const allow = !blocked && automixAllowed(cur, nxt, state.settings, state.smartSession, albumOrder);
        const plan = planTransition(cur, nxt, state.settings, allow && !blocked);
        if (blocked) {
          engine.arm({
            clip: toClip(nxt, state.settings, state.tracks),
            fadeMs: 0,
            technique: "cut",
            fallback: true,
            reason: "cut",
          });
          return;
        }
        engine.arm({
          clip: toClip(nxt, state.settings, state.tracks),
          fadeMs: plan.seconds * 1000,
          technique: plan.technique,
          fallback: plan.fallback || !allow,
          reason: !allow && state.settings.gaplessAlbums && albumOrder ? "gapless" : plan.reason,
        });
      },
    }),
    {
      name: "klangyu",
      skipHydration: true,
      version: 1,
      partialize: (state) => ({
        onboarded: state.onboarded,
        firstLaunch: state.firstLaunch,
        promptState: state.promptState,
        promptDismissals: state.promptDismissals,
        lastPromptAt: state.lastPromptAt,
        tracks: state.tracks,
        playlists: state.playlists,
        events: state.events,
        settings: state.settings,
        eq: state.eq,
        vocal: state.vocal,
        source: state.source,
        order: state.order,
        index: state.index,
        shuffle: state.shuffle,
        repeat: state.repeat,
        positionMs: state.positionMs,
        smartSession: state.smartSession,
        recentSearches: state.recentSearches,
        badMixes: state.badMixes,
        taste: state.taste,
      }),
    },
  ),
);

let visibleCache: { tracks: Track[]; show: boolean; min: number; result: Track[] } | null = null;

function visibleTracks(tracks: Track[], showSketches: boolean, minTrackSeconds: number): Track[] {
  if (
    visibleCache &&
    visibleCache.tracks === tracks &&
    visibleCache.show === showSketches &&
    visibleCache.min === minTrackSeconds
  ) {
    return visibleCache.result;
  }
  const result = tracks.filter((t) => {
    if (t.hidden) return false;
    if (!showSketches && t.source === "sketch") return false;
    if (t.durationMs < minTrackSeconds * 1000) return false;
    return true;
  });
  visibleCache = { tracks, show: showSketches, min: minTrackSeconds, result };
  return result;
}

function bumpTaste(id: string, delta: number) {
  if (!useStore.getState().settings.personalisation) return;
  const taste = { ...useStore.getState().taste };
  taste[id] = Math.max(-2, Math.min(2, (taste[id] ?? 0) + delta));
  useStore.setState({ taste });
}

function rememberPlay(track: Track, playedMs: number) {
  if (playedMs < 1500) return;
  const completed = playedMs > track.durationMs * 0.85;
  const event: PlayEvent = {
    id: uid(),
    trackId: track.id,
    startedAt: Date.now() - playedMs,
    playedMs: Math.round(playedMs),
    completed,
    hourOfDay: new Date().getHours(),
  };
  const tracks = useStore.getState().tracks.map((t) =>
    t.id === track.id
      ? {
          ...t,
          playCount: t.playCount + (completed || playedMs > 30_000 ? 1 : 0),
          skipCount: t.skipCount + (!completed && playedMs < 20_000 ? 1 : 0),
          lastPlayedAt: Date.now(),
        }
      : t,
  );
  useStore.setState({ tracks, events: [...useStore.getState().events, event].slice(-2000) });
  if (!completed && playedMs < 20_000) bumpTaste(track.id, -0.3);
  else if (completed) bumpTaste(track.id, 0.2);
}

function say(key: "removed" | "playNext" | "addQueue" | "partialQueue" | "badMix" | "tasteReset" | "queueSaved", undo?: () => void) {
  const locale = useStore.getState().settings.locale;
  const table: Record<typeof key, Record<Locale, string>> = {
    removed: { en: "Removed from queue", de: "Aus der Warteschlange genommen", "zh-TW": "已從佇列移除" },
    playNext: { en: "Playing next", de: "Als Nächstes", "zh-TW": "下一首播放" },
    addQueue: { en: "Added to queue", de: "Zur Warteschlange hinzugefügt", "zh-TW": "已加入佇列" },
    partialQueue: {
      en: "Smart queue is using analysed tracks only.",
      de: "Die Smart Queue nutzt nur analysierte Titel.",
      "zh-TW": "智慧佇列只用已分析的曲目。",
    },
    badMix: { en: "Noted. That pair will not mix.", de: "Gemerkt. Dieses Paar wird nicht gemischt.", "zh-TW": "已記下，這兩首不會再混接。" },
    tasteReset: { en: "Personalisation reset", de: "Personalisierung zurückgesetzt", "zh-TW": "已重設個人化" },
    queueSaved: { en: "Playlist saved", de: "Playlist gesichert", "zh-TW": "已存成播放清單" },
  };
  useStore.getState().toast(table[key][locale], undo);
}

async function startCurrent(ms: number) {
  const state = useStore.getState();
  const track = state.current();
  if (!track) return;
  engine.setLoudness(state.settings.loudnessMode !== "OFF");
  engine.setEq(state.eq.bands, state.eq.preamp, state.eq.bass);
  engine.setVocal(state.vocal);
  const clip = toClip(track, state.settings, state.tracks);
  try {
    await engine.play(clip, ms);
  } catch {
    try {
      await ensureBuffer(track);
      await engine.play(clip, ms);
    } catch {
      useStore.getState().toast(
        state.settings.locale === "de"
          ? "Die Datei ließ sich nicht abspielen. Es geht weiter."
          : state.settings.locale === "zh-TW"
            ? "這個檔案無法播放，已跳到下一首。"
            : "That file could not be played. Moving on.",
      );
      useStore.getState().next();
      return;
    }
  }
  engine.updateSession({ title: track.title, artist: track.artist, album: track.album });
  useStore.getState().rearm();
}

export function probeDevice(): Probe {
  const nav = navigator as Navigator & { deviceMemory?: number };
  const ram = typeof nav.deviceMemory === "number" ? nav.deviceMemory : null;
  const cores = navigator.hardwareConcurrency || 2;
  let tier: 0 | 1 | 2 = 0;
  if (cores >= 4 && (ram === null || ram >= 4)) tier = 1;
  if (ram !== null && ram >= 8 && cores >= 8) tier = 2;
  return { tier, ramGb: ram, cores };
}

export async function importAudioFiles(files: File[]) {
  const { settings } = useStore.getState();
  let added = 0;
  let skipped = 0;
  for (const file of files) {
    const durationMs = await readDuration(file);
    if (!durationMs || durationMs < settings.minTrackSeconds * 1000) {
      skipped += 1;
      continue;
    }
    const id = uid();
    await idbPut(id, file);
    const base = file.name.replace(/\.[^.]+$/, "").replaceAll("_", " ");
    const parts = base.split(" - ");
    const artist = parts.length > 1 ? parts[0].trim() : "Unknown";
    const title = (parts.length > 1 ? parts.slice(1).join(" - ") : base).trim() || base;
    const track: Track = {
      id,
      title,
      artist,
      album: "Imported",
      albumArtist: artist,
      genre: "Unknown",
      year: new Date().getFullYear(),
      trackNo: added + 1,
      durationMs: Math.round(durationMs),
      folder: "Imported",
      bpm: 0,
      bpmConfidence: 0,
      keyRoot: 0,
      mode: "major",
      camelot: "–",
      energy: 0.4,
      brightness: 0.4,
      loudnessLufs: -14,
      danceability: 0.4,
      hue: 12,
      peaks: Array.from({ length: 48 }, () => 0.35),
      source: "file",
      analysis: "pending",
      favourite: false,
      playCount: 0,
      skipCount: 0,
      lastPlayedAt: null,
      hidden: false,
      lyricOffsetMs: 0,
    };
    useStore.getState().addUserTrack(track);
    added += 1;
  }
  const locale = useStore.getState().settings.locale;
  if (added) {
    useStore.getState().toast(
      locale === "de" ? `${added} Titel hinzugefügt` : locale === "zh-TW" ? `已加入 ${added} 首` : `Added ${added}`,
    );
  }
  if (skipped) {
    useStore.getState().toast(
      locale === "de" ? "Kurze Aufnahmen übersprungen" : locale === "zh-TW" ? "已略過較短的錄音" : "Skipped short recordings",
    );
  }
  void pumpAnalysis();
}

function readDuration(file: File): Promise<number> {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(file);
    const audio = document.createElement("audio");
    audio.preload = "metadata";
    const done = (value: number) => {
      URL.revokeObjectURL(url);
      resolve(value);
    };
    audio.onloadedmetadata = () => done(Number.isFinite(audio.duration) ? audio.duration * 1000 : 0);
    audio.onerror = () => done(0);
    window.setTimeout(() => done(0), 8000);
    audio.src = url;
  });
}

let pumping = false;
export async function pumpAnalysis() {
  if (pumping) return;
  pumping = true;
  try {
    for (;;) {
      const track = useStore.getState().tracks.find((t) => t.source === "file" && t.analysis === "pending");
      if (!track) break;
      try {
        const blob = await idbGet(track.id);
        if (!blob) throw new Error("missing");
        const ctx = new AudioContext();
        const audio = await ctx.decodeAudioData(await blob.arrayBuffer());
        await ctx.close();
        const result = analyseBuffer(audio);
        const camelot = toCamelot(result.keyRoot, result.mode);
        engine.setUserBuffer(track.id, audio);
        useStore.getState().patchTrack(track.id, {
          bpm: result.bpm,
          bpmConfidence: result.bpmConfidence,
          keyRoot: result.keyRoot,
          mode: result.mode,
          camelot,
          hue: keyHue(camelot),
          energy: result.energy,
          brightness: result.brightness,
          danceability: result.danceability,
          loudnessLufs: result.loudnessLufs,
          mono: result.mono,
          peaks: peaksFromBuffer(audio),
          analysis: result.bpmConfidence > 0 ? "done" : "done",
          durationMs: Math.round(audio.duration * 1000),
        });
      } catch {
        useStore.getState().patchTrack(track.id, { analysis: "failed" });
      }
    }
  } finally {
    pumping = false;
  }
}

export function maybePrompt(): boolean {
  const state = useStore.getState();
  if (!state.onboarded || state.promptState === "never" || state.promptedSession || state.supportOpen) return false;
  const age = Date.now() - state.firstLaunch;
  if (age < 7 * 86_400_000) return false;
  const listened = state.events.reduce((sum, event) => sum + event.playedMs, 0);
  if (listened < 5 * 3_600_000) return false;
  const gap = state.promptDismissals >= 3 ? 20 : 10;
  if (state.lastPromptAt && Date.now() - state.lastPromptAt < gap * 86_400_000) return false;
  return true;
}

engine.setHandlers({
  onAdvance: (playedMs) => useStore.getState().onAdvance(playedMs, 0),
  onEnded: () => useStore.getState().onEnded(),
});
