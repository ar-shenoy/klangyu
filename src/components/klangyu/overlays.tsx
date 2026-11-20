import {
  Heart,
  ListMusic,
  Mic2,
  Pause,
  Play,
  Repeat,
  Repeat1,
  Share2,
  Shuffle,
  SkipBack,
  SkipForward,
  SlidersHorizontal,
  Timer,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { engine } from "@/klangyu/audio";
import { pumpAnalysis } from "@/klangyu/store";
import { countNoun, formatDuration, t } from "@/klangyu/i18n";
import { shareCanvas, sharePlain } from "@/klangyu/share";
import { buildReport, rangeFor, type ListeningReport } from "@/klangyu/stats";
import { useStore } from "@/klangyu/store";
import { energyLabel, formatClock, keyLabel } from "@/klangyu/theory";
import type { Locale, Technique, Track } from "@/klangyu/types";
import { EQ_FREQS, EQ_PRESETS } from "@/klangyu/types";
import { cn } from "@/lib/utils";
import {
  AlbumArt,
  GhostButton,
  IconButton,
  PrimaryButton,
  Seal,
  Segmented,
  SheetFrame,
  ToggleRow,
  TrackRow,
  usePlayback,
  Wordmark,
} from "./ui";

function techniqueCopy(locale: Locale, technique: Technique, reason: string): string {
  if (reason === "gapless") return t(locale, "gaplessOn");
  if (reason === "low-confidence") return t(locale, "lowConf");
  const table: Record<Technique, Record<Locale, string>> = {
    blend: { en: "Blend", de: "Überblendung", "zh-TW": "淡化" },
    bass: { en: "Bass swap", de: "Bass-Tausch", "zh-TW": "低音交換" },
    filter: { en: "Filter sweep", de: "Filterfahrt", "zh-TW": "濾波掃過" },
    echo: { en: "Echo out", de: "Echo-Out", "zh-TW": "回聲收尾" },
    cut: { en: "Cut", de: "Schnitt", "zh-TW": "切入" },
  };
  return table[technique][locale];
}

export function MiniPlayer() {
  const locale = useStore((s) => s.settings.locale);
  const track = useStore((s) => s.current());
  const toggle = useStore((s) => s.toggle);
  const next = useStore((s) => s.next);
  const setSheet = useStore((s) => s.setSheet);
  const sleep = useStore((s) => s.sleep);
  const snap = usePlayback();
  if (!track) return null;
  const dur = snap.durationMs || track.durationMs;
  const ratio = dur ? Math.min(1, snap.positionMs / dur) : 0;
  return (
    <div className="border-t border-line bg-surface">
      <div className="h-0.5 bg-line">
        <div className="h-full bg-accent" style={{ width: `${ratio * 100}%` }} />
      </div>
      <div className="flex items-center gap-2 px-2 py-1">
        <button type="button" onClick={() => setSheet("now")} className="flex min-w-0 flex-1 items-center gap-3 text-left">
          <AlbumArt track={track} playing={snap.playing} className="size-12 rounded-xl" />
          <span className="min-w-0">
            <span className="block truncate font-medium">{track.title}</span>
            <span className="block truncate text-sm text-muted">
              {track.artist}
              {sleep.kind !== "off" ? ` · ${t(locale, "sleep")}` : ""}
            </span>
          </span>
        </button>
        <IconButton label={snap.playing ? t(locale, "pause") : t(locale, "play")} onClick={() => toggle()}>
          {snap.playing ? <Pause className="size-5" /> : <Play className="size-5" />}
        </IconButton>
        <IconButton label={t(locale, "next")} onClick={() => next()}>
          <SkipForward className="size-5" />
        </IconButton>
      </div>
    </div>
  );
}

export function Toasts() {
  const toasts = useStore((s) => s.toasts);
  const undo = useStore((s) => s.undoToast);
  const locale = useStore((s) => s.settings.locale);
  if (toasts.length === 0) return null;
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-28 z-50 flex flex-col items-center gap-2 px-4">
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto flex w-full max-w-lg items-center justify-between gap-3 rounded-2xl bg-ink px-4 py-3 text-sm text-paper shadow-lg">
          <span>{toast.text}</span>
          {toast.undo ? (
            <button type="button" className="font-medium text-brass-ui" onClick={() => undo(toast.id)}>
              {t(locale, "undo")}
            </button>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function OverlayHost() {
  const sheet = useStore((s) => s.sheet);
  const setSheet = useStore((s) => s.setSheet);
  const close = () => setSheet(null);
  if (!sheet || sheet === "now") {
    return sheet === "now" ? <NowPlaying onClose={close} /> : null;
  }
  if (sheet === "queue") return <QueueSheet onClose={close} />;
  if (sheet === "lyrics") return <LyricsSheet onClose={close} />;
  if (sheet === "eq") return <EqSheet onClose={close} />;
  if (sheet === "karaoke") return <KaraokeSheet onClose={close} />;
  if (sheet === "sleep") return <SleepSheet onClose={close} />;
  if (sheet === "settings") return <SettingsSheet onClose={close} />;
  if (sheet === "support") return <SupportSheet onClose={close} />;
  if (sheet === "about") return <AboutSheet onClose={close} />;
  if (sheet === "klangbild") return <KlangbildSheet onClose={close} />;
  if (sheet === "explain") return <ExplainSheet onClose={close} />;
  return null;
}

function NowPlaying({ onClose }: { onClose: () => void }) {
  const locale = useStore((s) => s.settings.locale);
  const track = useStore((s) => s.current());
  const toggle = useStore((s) => s.toggle);
  const next = useStore((s) => s.next);
  const prev = useStore((s) => s.prev);
  const seek = useStore((s) => s.seek);
  const shuffle = useStore((s) => s.shuffle);
  const repeat = useStore((s) => s.repeat);
  const toggleShuffle = useStore((s) => s.toggleShuffle);
  const cycleRepeat = useStore((s) => s.cycleRepeat);
  const toggleFavourite = useStore((s) => s.toggleFavourite);
  const setSheet = useStore((s) => s.setSheet);
  const skipTransition = useStore((s) => s.skipTransition);
  const markBadMix = useStore((s) => s.markBadMix);
  const snap = usePlayback();
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  if (!track) return null;
  const dur = snap.durationMs || track.durationMs;
  const energy = energyLabel(track.energy);
  const energyText = energy === "low" ? t(locale, "energyLow") : energy === "high" ? t(locale, "energyHigh") : t(locale, "energyMid");
  const transition = snap.transition;
  return (
    <div className="absolute inset-0 z-40 overflow-y-auto bg-bg text-fg">
      <div className="mx-auto flex min-h-full max-w-lg flex-col px-4 pt-3 pb-8">
        <div className="flex items-center justify-between">
          <IconButton label={t(locale, "close")} onClick={onClose}>
            <span className="text-xl leading-none">×</span>
          </IconButton>
          <p className="text-sm text-muted">{t(locale, "nowPlaying")}</p>
          <IconButton
            label={t(locale, "share")}
            onClick={() => {
              void shareTrackCard(track, locale);
            }}
          >
            <Share2 className="size-5" />
          </IconButton>
        </div>
        <AlbumArt track={track} playing={snap.playing} className="mt-2 aspect-square w-full rounded-[2rem]" />
        <div className="mt-5 flex items-start gap-3">
          <div className="min-w-0 flex-1">
            <h2 className="truncate text-2xl font-medium">{track.title}</h2>
            <p className="truncate text-muted">{track.artist}</p>
          </div>
          <IconButton
            label={track.favourite ? t(locale, "unfavourite") : t(locale, "favourite")}
            onClick={() => toggleFavourite(track.id)}
            className={track.favourite ? "text-accent" : undefined}
          >
            <Heart className={cn("size-5", track.favourite && "fill-current")} />
          </IconButton>
        </div>
        <div className="mt-4">
          <Wave peaks={track.peaks} ratio={dur ? snap.positionMs / dur : 0} />
          <input
            type="range"
            aria-label={t(locale, "nowPlaying")}
            min={0}
            max={Math.max(1, dur)}
            value={Math.min(dur, snap.positionMs)}
            onChange={(event) => seek(Number(event.target.value))}
          />
          <div className="flex justify-between text-xs text-muted tabular-nums">
            <span>{formatClock(snap.positionMs)}</span>
            <span>{formatClock(dur)}</span>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <IconButton label={t(locale, "shuffle")} active={shuffle} onClick={() => toggleShuffle()}>
            <Shuffle className="size-5" />
          </IconButton>
          <IconButton label={t(locale, "previous")} onClick={() => prev()}>
            <SkipBack className="size-7" />
          </IconButton>
          <button
            type="button"
            aria-label={snap.playing ? t(locale, "pause") : t(locale, "play")}
            onClick={() => toggle()}
            className="inline-flex size-16 items-center justify-center rounded-full bg-accent text-accent-fg"
          >
            {snap.playing ? <Pause className="size-7" /> : <Play className="size-7" />}
          </button>
          <IconButton label={t(locale, "next")} onClick={() => next()}>
            <SkipForward className="size-7" />
          </IconButton>
          <IconButton label={t(locale, "repeat")} active={repeat !== "off"} onClick={() => cycleRepeat()}>
            {repeat === "one" ? <Repeat1 className="size-5" /> : <Repeat className="size-5" />}
          </IconButton>
        </div>
        <div className="mt-4 flex flex-wrap justify-between gap-1">
          <Tool label={t(locale, "lyrics")} onClick={() => setSheet("lyrics")} icon={<ListMusic className="size-5" />} />
          <Tool label={t(locale, "queue")} onClick={() => setSheet("queue")} icon={<ListMusic className="size-5" />} />
          <Tool label={t(locale, "eq")} onClick={() => setSheet("eq")} icon={<SlidersHorizontal className="size-5" />} />
          <Tool label={t(locale, "sleep")} onClick={() => setSheet("sleep")} icon={<Timer className="size-5" />} />
          <Tool label={t(locale, "karaoke")} onClick={() => setSheet("karaoke")} icon={<Mic2 className="size-5" />} />
        </div>
        <button type="button" onClick={() => setSheet("explain")} className="mt-4 rounded-full bg-surface-2 px-4 py-2 text-left text-sm ring-1 ring-line">
          {track.analysis === "done" && track.bpm
            ? `${Math.round(track.bpm)} BPM · ${track.camelot} · ${energyText}`
            : t(locale, "notAnalysed")}
        </button>
        {transition && transition.inMs <= 20_000 ? (
          <div className="mt-3 rounded-2xl bg-surface p-3 text-sm ring-1 ring-line">
            <p className="text-muted">{t(locale, "transition")}</p>
            <p className="mt-1">
              {t(locale, "coming")} {formatClock(transition.inMs)} · {techniqueCopy(locale, transition.technique, transition.reason)} {t(locale, "mixInto")}
            </p>
            <div className="mt-2 flex gap-2">
              <GhostButton className="h-10 px-3 text-sm" onClick={() => skipTransition()}>{t(locale, "skipMix")}</GhostButton>
              <GhostButton className="h-10 px-3 text-sm" onClick={() => markBadMix()}>{t(locale, "badMix")}</GhostButton>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Tool({ label, onClick, icon }: { label: string; onClick: () => void; icon: ReactNode }) {
  return (
    <button type="button" onClick={onClick} className="flex w-16 flex-col items-center gap-1 text-xs text-muted">
      <span className="inline-flex size-12 items-center justify-center rounded-full bg-surface-2 text-fg ring-1 ring-line">{icon}</span>
      {label}
    </button>
  );
}

function Wave({ peaks, ratio }: { peaks: number[]; ratio: number }) {
  const width = 100;
  const step = width / peaks.length;
  return (
    <svg viewBox="0 0 100 16" className="h-8 w-full" aria-hidden>
      {peaks.map((peak, i) => (
        <rect
          key={i}
          x={i * step + 0.15}
          y={8 - peak * 7}
          width={Math.max(0.4, step - 0.35)}
          height={Math.max(0.6, peak * 14)}
          rx="0.4"
          className={i / peaks.length < ratio ? "fill-accent" : "fill-line"}
        />
      ))}
    </svg>
  );
}

function QueueSheet({ onClose }: { onClose: () => void }) {
  const locale = useStore((s) => s.settings.locale);
  const order = useStore((s) => s.order);
  const index = useStore((s) => s.index);
  const playIds = useStore((s) => s.playIds);
  const remove = useStore((s) => s.removeFromOrder);
  const move = useStore((s) => s.moveOrder);
  const saveQueue = useStore((s) => s.saveQueue);
  const smart = useStore((s) => s.smartSession);
  const [name, setName] = useState("");
  const rows = order.map((id) => useStore.getState().track(id)).filter((track): track is Track => Boolean(track));
  return (
    <SheetFrame title={t(locale, "queue")} onClose={onClose}>
      {smart ? <p className="mb-2 text-sm text-muted">Automix</p> : null}
      {rows.length === 0 ? <p className="text-sm text-muted">{t(locale, "queueEmpty")}</p> : null}
      <ul>
        {rows.map((track, row) => (
          <li key={`${track.id}-${row}`} className="flex items-center gap-1">
            <div className={cn("min-w-0 flex-1", row === index && "rounded-2xl ring-1 ring-accent")}>
              <TrackRow
                track={track}
                onPlay={() => playIds(order, row, smart)}
              />
            </div>
            <IconButton label={t(locale, "moveUp")} onClick={() => move(row, -1)}>↑</IconButton>
            <IconButton label={t(locale, "moveDown")} onClick={() => move(row, 1)}>↓</IconButton>
            <IconButton label={t(locale, "delete")} onClick={() => remove(row)}>×</IconButton>
          </li>
        ))}
      </ul>
      <form
        className="mt-4 flex gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          saveQueue(name);
          setName("");
        }}
      >
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={t(locale, "playlistName")}
          className="h-12 min-w-0 flex-1 rounded-full bg-surface-2 px-4 ring-1 ring-line"
        />
        <PrimaryButton type="submit">{t(locale, "savePlaylist")}</PrimaryButton>
      </form>
    </SheetFrame>
  );
}

function LyricsSheet({ onClose }: { onClose: () => void }) {
  const locale = useStore((s) => s.settings.locale);
  const track = useStore((s) => s.current());
  const seek = useStore((s) => s.seek);
  const patchTrack = useStore((s) => s.patchTrack);
  const snap = usePlayback();
  const activeRef = useRef<HTMLButtonElement | null>(null);
  const lines = track?.lyrics ?? [];
  const offset = (track?.lyricOffsetMs ?? 0) / 1000;
  const seconds = snap.positionMs / 1000 - offset;
  let active = -1;
  lines.forEach((line, i) => {
    if (line.t <= seconds) active = i;
  });
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "center" });
  }, [active, track?.id]);
  return (
    <SheetFrame title={t(locale, "lyrics")} onClose={onClose}>
      {!track || lines.length === 0 ? <p className="text-sm text-muted">{t(locale, "noLyrics")}</p> : null}
      <div className="space-y-1">
        {lines.map((line, i) => (
          <button
            key={`${line.t}-${line.text}`}
            ref={i === active ? activeRef : undefined}
            type="button"
            onClick={() => seek(line.t * 1000)}
            className={cn("block w-full rounded-xl px-2 py-2 text-left text-lg", i === active ? "text-fg" : "text-muted")}
          >
            {line.text}
          </button>
        ))}
      </div>
      {track ? (
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-sm text-muted">{t(locale, "offset")}</span>
          <div className="flex items-center gap-2">
            <GhostButton
              className="h-11 px-3"
              onClick={() => patchTrack(track.id, { lyricOffsetMs: Math.max(-5000, track.lyricOffsetMs - 500) })}
            >
              −0.5s
            </GhostButton>
            <span className="w-14 text-center text-sm tabular-nums">{(track.lyricOffsetMs / 1000).toFixed(1)}</span>
            <GhostButton
              className="h-11 px-3"
              onClick={() => patchTrack(track.id, { lyricOffsetMs: Math.min(5000, track.lyricOffsetMs + 500) })}
            >
              +0.5s
            </GhostButton>
          </div>
        </div>
      ) : null}
      <p className="mt-4 text-sm text-muted">{t(locale, "lyricsNote")}</p>
    </SheetFrame>
  );
}

function EqSheet({ onClose }: { onClose: () => void }) {
  const locale = useStore((s) => s.settings.locale);
  const eq = useStore((s) => s.eq);
  const setEq = useStore((s) => s.setEq);
  const setBand = (index: number, value: number) => {
    const bands = eq.bands.slice();
    bands[index] = value;
    setEq({ ...eq, bands });
  };
  return (
    <SheetFrame title={t(locale, "eq")} onClose={onClose} wide>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {Object.keys(EQ_PRESETS).map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => setEq({ ...eq, bands: [...EQ_PRESETS[name]] })}
            className="h-11 shrink-0 rounded-full bg-surface-2 px-3 text-sm ring-1 ring-line"
          >
            {name}
          </button>
        ))}
      </div>
      <div className="mt-4 flex items-end justify-between gap-1">
        {eq.bands.map((gain, index) => (
          <label key={EQ_FREQS[index]} className="flex flex-col items-center gap-2 text-[10px] text-muted">
            <span className="tabular-nums">{gain > 0 ? `+${gain}` : gain}</span>
            <input
              className="eq-vert"
              type="range"
              min={-12}
              max={12}
              step={1}
              aria-label={`${EQ_FREQS[index]} Hz`}
              value={gain}
              onChange={(event) => setBand(index, Number(event.target.value))}
            />
            <span>{EQ_FREQS[index] >= 1000 ? `${EQ_FREQS[index] / 1000}k` : EQ_FREQS[index]}</span>
          </label>
        ))}
      </div>
      <label className="mt-4 block text-sm">
        {t(locale, "preamp")} {eq.preamp} dB
        <input type="range" min={-12} max={12} step={1} value={eq.preamp} onChange={(event) => setEq({ ...eq, preamp: Number(event.target.value) })} />
      </label>
      <label className="mt-2 block text-sm">
        {t(locale, "bass")} {eq.bass} dB
        <input type="range" min={0} max={12} step={1} value={eq.bass} onChange={(event) => setEq({ ...eq, bass: Number(event.target.value) })} />
      </label>
      <GhostButton className="mt-3" onClick={() => setEq({ bands: [...EQ_PRESETS.Flat], preamp: 0, bass: 0 })}>
        {t(locale, "resetEq")}
      </GhostButton>
      <p className="mt-3 text-sm text-muted">{t(locale, "outputNote")}</p>
    </SheetFrame>
  );
}

function KaraokeSheet({ onClose }: { onClose: () => void }) {
  const locale = useStore((s) => s.settings.locale);
  const vocal = useStore((s) => s.vocal);
  const setVocal = useStore((s) => s.setVocal);
  const track = useStore((s) => s.current());
  const tier = useStore((s) => s.effectiveTier());
  return (
    <SheetFrame title={t(locale, "karaoke")} onClose={onClose}>
      {track?.mono ? <p className="mb-3 rounded-2xl bg-surface px-3 py-2 text-sm">{t(locale, "monoWarn")}</p> : null}
      <label className="block text-sm">
        {t(locale, "vocal")} {Math.round(vocal * 100)}%
        <input type="range" min={0} max={100} value={Math.round(vocal * 100)} onChange={(event) => setVocal(Number(event.target.value) / 100)} />
      </label>
      <p className="mt-4 text-sm text-muted">{t(locale, "stemsNote")}</p>
      {tier < 2 ? <p className="mt-2 text-sm text-muted">{t(locale, "tierStudio")}</p> : null}
    </SheetFrame>
  );
}

function SleepSheet({ onClose }: { onClose: () => void }) {
  const locale = useStore((s) => s.settings.locale);
  const sleep = useStore((s) => s.sleep);
  const setSleep = useStore((s) => s.setSleep);
  const clearSleep = useStore((s) => s.clearSleep);
  const extendSleep = useStore((s) => s.extendSleep);
  const [, tick] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => tick((n) => n + 1), 1000);
    return () => window.clearInterval(id);
  }, []);
  const left = sleep.kind === "time" ? Math.max(0, sleep.until - Date.now()) : 0;
  const minutes = [15, 30, 45, 60, 90];
  return (
    <SheetFrame title={t(locale, "sleep")} onClose={onClose}>
      {sleep.kind === "time" ? (
        <p className="mb-3 text-sm">
          {t(locale, "sleepIn")} {formatClock(left)}
        </p>
      ) : null}
      <div className="flex flex-wrap gap-2">
        {minutes.map((minute) => (
          <GhostButton key={minute} onClick={() => setSleep({ kind: "time", until: Date.now() + minute * 60_000 })}>
            {minute} {t(locale, "minShort")}
          </GhostButton>
        ))}
        <GhostButton onClick={() => setSleep({ kind: "track" })}>{t(locale, "endTrack")}</GhostButton>
        <GhostButton onClick={() => setSleep({ kind: "album" })}>{t(locale, "endAlbum")}</GhostButton>
      </div>
      <div className="mt-4 flex gap-2">
        <GhostButton onClick={() => extendSleep()}>{t(locale, "extend")}</GhostButton>
        <GhostButton onClick={() => clearSleep()}>{t(locale, "cancel")}</GhostButton>
      </div>
    </SheetFrame>
  );
}

function SettingsSheet({ onClose }: { onClose: () => void }) {
  const settings = useStore((s) => s.settings);
  const patch = useStore((s) => s.patchSettings);
  const locale = settings.locale;
  const tracks = useStore((s) => s.tracks);
  const restoreTrack = useStore((s) => s.restoreTrack);
  const resetTaste = useStore((s) => s.resetTaste);
  const clearHistory = useStore((s) => s.clearHistory);
  const clearAll = useStore((s) => s.clearAll);
  const exportData = useStore((s) => s.exportData);
  const importData = useStore((s) => s.importData);
  const toast = useStore((s) => s.toast);
  const setSheet = useStore((s) => s.setSheet);
  const probe = useStore((s) => s.probe);
  const tier = useStore((s) => s.effectiveTier());
  const [confirm, setConfirm] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const hidden = tracks.filter((track) => track.hidden);
  const analysed = tracks.filter((track) => track.analysis === "done").length;
  const pending = tracks.filter((track) => track.analysis === "pending").length;
  return (
    <SheetFrame title={t(locale, "settings")} onClose={onClose}>
      <Group label={t(locale, "playback")}>
        <ToggleRow label={t(locale, "gapless")} checked={settings.gaplessAlbums} onChange={(gaplessAlbums) => patch({ gaplessAlbums })} />
        <label className="block py-2 text-sm">
          {t(locale, "crossfade")} {settings.crossfadeSeconds}
          {t(locale, "seconds")}
          <input type="range" min={0} max={12} step={1} value={settings.crossfadeSeconds} onChange={(event) => patch({ crossfadeSeconds: Number(event.target.value) })} />
        </label>
        <p className="pt-2 text-sm text-muted">{t(locale, "automix")}</p>
        <Segmented
          label={t(locale, "automix")}
          value={settings.automixMode}
          onChange={(automixMode) => patch({ automixMode })}
          options={[
            { id: "OFF", label: t(locale, "automixOff") },
            { id: "SMART_SESSIONS", label: t(locale, "automixSmart") },
            { id: "ALWAYS", label: t(locale, "automixAlways") },
          ]}
        />
        <p className="pt-3 text-sm text-muted">{t(locale, "style")}</p>
        <Segmented
          label={t(locale, "style")}
          value={settings.automixStyle}
          onChange={(automixStyle) => patch({ automixStyle })}
          options={[
            { id: "SUBTLE", label: t(locale, "subtle") },
            { id: "CLUB", label: t(locale, "club") },
            { id: "RADIO", label: t(locale, "radio") },
            { id: "CHILL", label: t(locale, "chill") },
          ]}
        />
        <ToggleRow label={t(locale, "harmonic")} checked={settings.automixHarmonicOnly} onChange={(automixHarmonicOnly) => patch({ automixHarmonicOnly })} />
        <p className="pt-2 text-sm text-muted">{t(locale, "loudness")}</p>
        <Segmented
          label={t(locale, "loudness")}
          value={settings.loudnessMode}
          onChange={(loudnessMode) => patch({ loudnessMode })}
          options={[
            { id: "OFF", label: t(locale, "loudOff") },
            { id: "TRACK", label: t(locale, "loudTrack") },
            { id: "ALBUM", label: t(locale, "loudAlbum") },
          ]}
        />
        <ToggleRow label={t(locale, "resume")} checked={settings.resumeOnLaunch} onChange={(resumeOnLaunch) => patch({ resumeOnLaunch })} />
        <ToggleRow label={t(locale, "haptics")} checked={settings.haptics} onChange={(haptics) => patch({ haptics })} />
      </Group>
      <Group label={t(locale, "library")}>
        <label className="block py-2 text-sm">
          {t(locale, "minLen")} {settings.minTrackSeconds}s
          <input type="range" min={0} max={60} step={5} value={settings.minTrackSeconds} onChange={(event) => patch({ minTrackSeconds: Number(event.target.value) })} />
        </label>
        <ToggleRow label={t(locale, "articles")} checked={settings.ignoreArticles} onChange={(ignoreArticles) => patch({ ignoreArticles })} />
        <ToggleRow label={t(locale, "sketches")} checked={settings.showSketches} onChange={(showSketches) => patch({ showSketches })} />
        <p className="text-sm text-muted">
          {t(locale, "analysed")} {analysed}/{tracks.length}
          {pending ? ` · ${pending}` : ""}
        </p>
        <GhostButton className="mt-2" onClick={() => void pumpAnalysis()}>{t(locale, "analyseNow")}</GhostButton>
        {hidden.length === 0 ? <p className="pt-2 text-sm text-muted">{t(locale, "noneHidden")}</p> : <p className="pt-2 text-sm">{t(locale, "hiddenBack")}</p>}
        {hidden.map((track) => (
          <div key={track.id} className="flex items-center justify-between py-1 text-sm">
            <span className="truncate">{track.title}</span>
            <button type="button" className="text-accent" onClick={() => restoreTrack(track.id)}>{t(locale, "restore")}</button>
          </div>
        ))}
      </Group>
      <Group label={t(locale, "smart")}>
        <p className="text-sm text-muted">
          {t(locale, "deviceNote")}: {probe.ramGb ? `${probe.ramGb} GB` : ""} · {probe.cores} · {t(locale, tier === 0 ? "tierCore" : tier === 1 ? "tierEnhanced" : "tierStudio")}
        </p>
        <div className="pt-2">
          <Segmented
            label={t(locale, "tier")}
            value={settings.tierOverride}
            onChange={(tierOverride) => patch({ tierOverride })}
            options={[
              { id: "AUTO", label: t(locale, "tierAuto") },
              { id: "CORE", label: t(locale, "tierCore") },
              { id: "ENHANCED", label: t(locale, "tierEnhanced") },
              { id: "STUDIO", label: t(locale, "tierStudio") },
            ]}
          />
        </div>
        {settings.tierOverride === "ENHANCED" || settings.tierOverride === "STUDIO" ? (
          <p className="pt-2 text-sm text-muted">{t(locale, "tierWarn")}</p>
        ) : null}
        <ToggleRow label={t(locale, "personal")} checked={settings.personalisation} onChange={(personalisation) => patch({ personalisation })} />
        <label className="block py-2 text-sm">
          {t(locale, "queueLen")} {settings.smartQueueLength}
          <input type="range" min={8} max={30} step={1} value={settings.smartQueueLength} onChange={(event) => patch({ smartQueueLength: Number(event.target.value) })} />
        </label>
        <GhostButton onClick={() => resetTaste()}>{t(locale, "resetTaste")}</GhostButton>
      </Group>
      <Group label={t(locale, "appearance")}>
        <Segmented
          label={t(locale, "language")}
          value={settings.locale}
          onChange={(next) => patch({ locale: next })}
          options={[
            { id: "en", label: "English" },
            { id: "de", label: "Deutsch" },
            { id: "zh-TW", label: "繁體中文" },
          ]}
        />
        <div className="pt-3">
          <Segmented
            label={t(locale, "theme")}
            value={settings.theme}
            onChange={(theme) => patch({ theme })}
            options={[
              { id: "auto", label: t(locale, "auto") },
              { id: "light", label: t(locale, "light") },
              { id: "dark", label: t(locale, "dark") },
              { id: "amoled", label: t(locale, "amoled") },
            ]}
          />
        </div>
        <p className="pt-3 text-sm text-muted">{t(locale, "palette")}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {(
            [
              ["default", "Klangyu"],
              ["mist", "Nebel"],
              ["brass", "Messing"],
              ["market", t(locale, "market")],
              ["harbor", t(locale, "harbor")],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              aria-pressed={settings.palette === id}
              onClick={() => patch({ palette: id })}
              className={cn("h-11 rounded-full px-4 text-sm ring-1", settings.palette === id ? "bg-accent text-accent-fg ring-accent" : "ring-line")}
            >
              {label}
            </button>
          ))}
        </div>
      </Group>
      <Group label={t(locale, "storage")}>
        <GhostButton onClick={() => clearHistory()}>{t(locale, "clearHistory")}</GhostButton>
        <div className="mt-2 flex flex-wrap gap-2">
          <GhostButton
            onClick={() => {
              const blob = new Blob([exportData()], { type: "application/json" });
              const url = URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.href = url;
              link.download = "klangyu-library.json";
              link.click();
              URL.revokeObjectURL(url);
            }}
          >
            {t(locale, "export")}
          </GhostButton>
          <GhostButton onClick={() => fileRef.current?.click()}>{t(locale, "import")}</GhostButton>
          <input
            ref={fileRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(event) => {
              const file = event.target.files?.[0];
              event.target.value = "";
              if (!file) return;
              void file.text().then((raw) => toast(importData(raw) ? t(locale, "importOk") : t(locale, "importBad")));
            }}
          />
        </div>
        {confirm ? (
          <div className="mt-3 rounded-2xl bg-surface-2 p-3 text-sm">
            <p>{t(locale, "clearConfirm")}</p>
            <div className="mt-2 flex gap-2">
              <PrimaryButton onClick={() => { void clearAll(); setConfirm(false); }}>{t(locale, "yesClear")}</PrimaryButton>
              <GhostButton onClick={() => setConfirm(false)}>{t(locale, "cancel")}</GhostButton>
            </div>
          </div>
        ) : (
          <button type="button" className="mt-3 text-sm text-accent" onClick={() => setConfirm(true)}>{t(locale, "clearData")}</button>
        )}
      </Group>
      <Group label={t(locale, "support")}>
        <GhostButton onClick={() => setSheet("support")}>{t(locale, "support")}</GhostButton>
        <GhostButton className="mt-2" onClick={() => setSheet("klangbild")}>{t(locale, "klangbild")}</GhostButton>
        <GhostButton className="mt-2" onClick={() => setSheet("about")}>{t(locale, "about")}</GhostButton>
      </Group>
    </SheetFrame>
  );
}

function Group({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="mb-6">
      <h3 className="mb-1 text-xs tracking-wide text-muted uppercase">{label}</h3>
      {children}
    </section>
  );
}

function SupportSheet({ onClose }: { onClose: () => void }) {
  const locale = useStore((s) => s.settings.locale);
  const dismiss = useStore((s) => s.dismissPrompt);
  const toast = useStore((s) => s.toast);
  return (
    <SheetFrame title={t(locale, "supTitle")} onClose={onClose}>
      <Seal className="size-16 rounded-3xl" />
      <p className="mt-4 text-sm leading-relaxed">{t(locale, "supBody")}</p>
      <p className="mt-3 text-sm text-muted">{t(locale, "supScreen")}</p>
      <div className="mt-5 flex flex-col gap-2">
        <PrimaryButton
          onClick={() => {
            toast(locale === "de" ? "Danke. Hier wird nichts berechnet." : locale === "zh-TW" ? "謝謝。這裡不會收費。" : "Thank you. Nothing is charged here.");
            dismiss(true);
            onClose();
          }}
        >
          {t(locale, "supBtn")}
        </PrimaryButton>
        <GhostButton onClick={() => { dismiss(false); onClose(); }}>{t(locale, "notNow")}</GhostButton>
        <button type="button" className="h-11 text-sm text-muted" onClick={() => { dismiss(true); onClose(); }}>
          {t(locale, "dontAsk")}
        </button>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <GhostButton
          onClick={() => {
            void sharePlain("Klangyu", t(locale, "tagline"));
          }}
        >
          {t(locale, "shareApp")}
        </GhostButton>
        <GhostButton
          onClick={() => {
            window.location.href = "mailto:hello@klangyu.app?subject=Klangyu%20feedback";
          }}
        >
          {t(locale, "feedback")}
        </GhostButton>
      </div>
    </SheetFrame>
  );
}

function AboutSheet({ onClose }: { onClose: () => void }) {
  const locale = useStore((s) => s.settings.locale);
  const [notices, setNotices] = useState(false);
  return (
    <SheetFrame title={t(locale, "about")} onClose={onClose}>
      <div className="flex items-center gap-3">
        <Seal className="size-14 rounded-2xl" />
        <div>
          <Wordmark className="text-xl" />
          <p className="text-sm text-muted">{t(locale, "tagline")}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed">{t(locale, "aboutBody")}</p>
      <p className="mt-3 text-sm leading-relaxed">{t(locale, "privacy")}</p>
      <p className="mt-4 text-sm text-muted">{t(locale, "version")} 0.9.0 · {t(locale, "browser")}</p>
      <button type="button" className="mt-4 text-sm text-accent" onClick={() => setNotices((value) => !value)}>
        {t(locale, "notices")}
      </button>
      {notices ? (
        <ul className="mt-2 space-y-1 text-sm text-muted">
          <li>Jost, SIL Open Font License</li>
          <li>Lucide, ISC</li>
          <li>Audio engine, analysis and Automix are part of Klangyu</li>
        </ul>
      ) : null}
    </SheetFrame>
  );
}

function ExplainSheet({ onClose }: { onClose: () => void }) {
  const locale = useStore((s) => s.settings.locale);
  const track = useStore((s) => s.current());
  return (
    <SheetFrame title={t(locale, "info")} onClose={onClose}>
      <p className="text-sm leading-relaxed">{t(locale, "explain")}</p>
      {track && track.bpm ? (
        <p className="mt-3 text-sm">
          {Math.round(track.bpm)} BPM · {track.camelot} · {keyLabel(track.keyRoot, track.mode)} · {Math.round(track.loudnessLufs)} LUFS
        </p>
      ) : null}
    </SheetFrame>
  );
}

type ArtStyle = "ring" | "wave" | "seal" | "constellation";

function KlangbildSheet({ onClose }: { onClose: () => void }) {
  const locale = useStore((s) => s.settings.locale);
  const events = useStore((s) => s.events);
  const tracks = useStore((s) => s.tracks);
  const [period, setPeriod] = useState<"week" | "month" | "year">("month");
  const [style, setStyle] = useState<ArtStyle>("ring");
  const [hideTitles, setHideTitles] = useState(false);
  const [hideArtists, setHideArtists] = useState(false);
  const [statsOnly, setStatsOnly] = useState(false);
  const range = rangeFor(period);
  const report = useMemo(() => buildReport(events, tracks, range.from, range.to), [events, tracks, range.from, range.to]);
  const marks = useMemo(() => collectMarks(report, tracks), [report, tracks]);
  const caption = captionFor(report, locale, hideTitles, hideArtists);
  const ready = report.plays.length >= 20;
  return (
    <SheetFrame title={t(locale, "klangbild")} onClose={onClose} wide>
      <Segmented
        label={t(locale, "klangbild")}
        value={period}
        onChange={setPeriod}
        options={[
          { id: "week", label: t(locale, "week") },
          { id: "month", label: t(locale, "month") },
          { id: "year", label: t(locale, "year") },
        ]}
      />
      {!ready ? (
        <p className="mt-4 text-sm text-muted">
          {t(locale, "needPlays")} {countNoun(locale, report.plays.length)}
        </p>
      ) : (
        <>
          <div className="story-scroll mt-4 flex gap-3 overflow-x-auto pb-2">
            <Story title={t(locale, "listeningTime")}>
              <p className="text-3xl font-medium">{formatDuration(locale, report.totalMs)}</p>
              <p className="mt-2 text-sm text-paper/70">{countNoun(locale, report.plays.length)}</p>
            </Story>
            <Story title={t(locale, "topArtist")}>
              <p className="text-2xl font-medium">{hideArtists ? "···" : report.topArtists[0]?.name ?? "—"}</p>
            </Story>
            <Story title={t(locale, "topTracks")}>
              <ol className="space-y-1 text-sm">
                {report.topTracks.map((row, i) => (
                  <li key={row.track.id} className="truncate">
                    {i + 1}. {hideTitles ? "···" : row.track.title}
                    {hideArtists ? "" : ` · ${row.track.artist}`}
                  </li>
                ))}
              </ol>
            </Story>
            <Story title={t(locale, "timeOfDay")}>
              <HourRing hours={report.hours} />
              {report.label ? <p className="mt-2 text-sm">{report.label === "night" ? t(locale, "nightOwl") : t(locale, "earlyBird")}</p> : null}
            </Story>
            <Story title={t(locale, "streak")}>
              <p className="text-4xl font-medium">{report.streak}</p>
              <p className="text-sm text-paper/70">{t(locale, "days")}</p>
            </Story>
            <Story title={t(locale, "newArtists")}>
              <p className="text-4xl font-medium">{report.newArtists}</p>
            </Story>
            <Story title={t(locale, "signature")}>
              <p className="text-2xl font-medium">{report.avgBpm || "—"} BPM</p>
              <p className="text-sm text-paper/80">{report.favouriteKey}</p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-paper/20">
                <div className="h-full bg-brass-ui" style={{ width: `${Math.round(report.avgEnergy * 100)}%` }} />
              </div>
            </Story>
            <Story title={t(locale, "closing")}>
              {!statsOnly ? <KlangArt marks={marks} style={style} /> : <p className="text-sm">{caption}</p>}
              <Wordmark className="mt-3 text-paper" />
            </Story>
          </div>
          <div className="mt-3">
            <Segmented
              label={t(locale, "style")}
              value={style}
              onChange={setStyle}
              options={[
                { id: "ring", label: t(locale, "ring") },
                { id: "wave", label: t(locale, "wave") },
                { id: "seal", label: t(locale, "seal") },
                { id: "constellation", label: t(locale, "constellation") },
              ]}
            />
          </div>
          <div className="mt-2">
            <ToggleRow label={t(locale, "hideTitles")} checked={hideTitles} onChange={setHideTitles} />
            <ToggleRow label={t(locale, "hideArtists")} checked={hideArtists} onChange={setHideArtists} />
            <ToggleRow label={t(locale, "statsOnly")} checked={statsOnly} onChange={setStatsOnly} />
          </div>
          <PrimaryButton
            className="mt-3 w-full"
            onClick={() => {
              const canvas = paintCard(report, marks, style, caption, statsOnly, locale);
              void shareCanvas(canvas, "klangbild.png", caption);
            }}
          >
            {t(locale, "shareCard")}
          </PrimaryButton>
          <p className="mt-2 text-xs text-muted">{caption}</p>
        </>
      )}
    </SheetFrame>
  );
}

function Story({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="flex aspect-[9/16] w-52 shrink-0 flex-col justify-between rounded-3xl bg-ink p-4 text-paper">
      <p className="text-xs tracking-wide text-paper/60 uppercase">{title}</p>
      <div>{children}</div>
    </article>
  );
}

type Mark = { bpm: number; hue: number; energy: number; plays: number; title: string };

function collectMarks(report: ListeningReport, tracks: Track[]): Mark[] {
  const counts = new Map<string, number>();
  for (const event of report.plays) counts.set(event.trackId, (counts.get(event.trackId) ?? 0) + 1);
  return [...counts.entries()].flatMap(([id, plays]) => {
    const track = tracks.find((item) => item.id === id);
    if (!track) return [];
    return [{ bpm: track.bpm || 100, hue: track.hue, energy: track.energy, plays, title: track.title }];
  });
}

function KlangArt({ marks, style }: { marks: Mark[]; style: ArtStyle }) {
  return (
    <svg viewBox="0 0 100 78" className="w-full">
      <rect width="100" height="78" rx="8" fill="#14161C" />
      {marks.map((mark, i) => {
        const point = place(mark, i, style, 100, 78);
        const r = 1.2 + mark.energy * 3.2;
        return <circle key={`${mark.title}-${i}`} cx={point.x} cy={point.y} r={r} fill={`hsl(${mark.hue} 62% 62%)`} opacity={0.35 + Math.min(0.65, mark.plays * 0.12)} />;
      })}
    </svg>
  );
}

function place(mark: Mark, index: number, style: ArtStyle, w: number, h: number): { x: number; y: number } {
  const bpm = mark.bpm || 100;
  if (style === "wave") {
    const x = ((bpm * 3 + index * 17) % 86) + 7;
    const y = h * 0.55 + Math.sin((bpm + index) / 7) * (8 + mark.energy * 16);
    return { x, y };
  }
  if (style === "seal") {
    const col = index % 5;
    const row = Math.floor(index / 5);
    return { x: 16 + col * 16, y: 16 + (row % 4) * 14 };
  }
  if (style === "constellation") {
    const x = 10 + ((bpm * 13 + index * 29) % 80);
    const y = 10 + ((mark.hue + index * 37) % 58);
    return { x, y };
  }
  const angle = ((bpm % 180) / 180) * Math.PI * 2 + index * 0.15;
  const radius = 10 + (bpm % 28) * 0.45;
  return { x: w / 2 + Math.cos(angle) * radius * (w / 100), y: h / 2 + Math.sin(angle) * radius * 0.7 };
}

function HourRing({ hours }: { hours: number[] }) {
  const max = Math.max(1, ...hours);
  return (
    <svg viewBox="0 0 100 100" className="mx-auto h-28 w-28">
      {hours.map((value, hour) => {
        const angle = (hour / 24) * Math.PI * 2 - Math.PI / 2;
        const len = 12 + (value / max) * 28;
        return (
          <line
            key={hour}
            x1={50 + Math.cos(angle) * 16}
            y1={50 + Math.sin(angle) * 16}
            x2={50 + Math.cos(angle) * (16 + len)}
            y2={50 + Math.sin(angle) * (16 + len)}
            stroke={value ? "#C9A24B" : "#3a3e4a"}
            strokeWidth="3"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

function captionFor(report: ListeningReport, locale: Locale, hideTitles: boolean, hideArtists: boolean): string {
  const time = formatDuration(locale, report.totalMs);
  const artist = hideArtists ? "" : report.topArtists[0]?.name;
  const song = hideTitles ? "" : report.topTracks[0]?.track.title;
  if (locale === "de") {
    return `Klangbild: ${time}${artist ? `, meist ${artist}` : ""}${song ? `, Titel ${song}` : ""}. ${report.avgBpm || "—"} BPM, ${report.favouriteKey}.`;
  }
  if (locale === "zh-TW") {
    return `音域圖：${time}${artist ? `，最常聽 ${artist}` : ""}${song ? `，${song}` : ""}。${report.avgBpm || "—"} BPM，${report.favouriteKey}。`;
  }
  return `Klangbild: ${time} listened${artist ? `, mostly ${artist}` : ""}${song ? `, including ${song}` : ""}. ${report.avgBpm || "—"} BPM, key ${report.favouriteKey}.`;
}

function paintCard(
  report: ListeningReport,
  marks: Mark[],
  style: ArtStyle,
  caption: string,
  statsOnly: boolean,
  locale: Locale,
): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;
  ctx.fillStyle = "#14161C";
  ctx.fillRect(0, 0, 1080, 1920);
  if (!statsOnly) {
    for (let i = 0; i < marks.length; i++) {
      const mark = marks[i];
      const point = place(mark, i, style, 100, 150);
      ctx.beginPath();
      ctx.fillStyle = `hsla(${mark.hue}, 62%, 62%, ${0.35 + Math.min(0.6, mark.plays * 0.1)})`;
      ctx.arc(point.x * 10.8, 280 + point.y * 8, 10 + mark.energy * 28, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.fillStyle = "#F4F1EA";
  ctx.font = "600 72px Jost, sans-serif";
  ctx.fillText(formatDuration(locale, report.totalMs), 80, 1500);
  ctx.font = "500 36px Jost, sans-serif";
  ctx.fillStyle = "#C9A24B";
  ctx.fillText(`${report.avgBpm || "—"} BPM · ${report.favouriteKey}`, 80, 1580);
  ctx.fillStyle = "#A39E93";
  ctx.font = "400 28px Jost, sans-serif";
  wrapText(ctx, caption, 80, 1660, 920, 40);
  ctx.fillStyle = "#D8342C";
  ctx.fillRect(80, 1760, 36, 36);
  ctx.fillStyle = "#F4F1EA";
  ctx.font = "500 32px Jost, sans-serif";
  ctx.fillText("Klangyu", 132, 1790);
  return canvas;
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, max: number, line: number) {
  const words = text.split(" ");
  let row = "";
  let yy = y;
  for (const word of words) {
    const trial = row ? `${row} ${word}` : word;
    if (ctx.measureText(trial).width > max) {
      ctx.fillText(row, x, yy);
      row = word;
      yy += line;
    } else row = trial;
  }
  if (row) ctx.fillText(row, x, yy);
}

async function shareTrackCard(track: Track, locale: Locale) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1080;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.fillStyle = `hsl(${track.hue} 32% 12%)`;
  ctx.fillRect(0, 0, 1080, 1080);
  ctx.strokeStyle = `hsl(${track.hue} 48% 62%)`;
  ctx.lineWidth = 8;
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.arc(540, 460, 120 + i * 70, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.fillStyle = "#D8342C";
  ctx.fillRect(860, 860, 120, 120);
  ctx.fillStyle = "#F4F1EA";
  ctx.font = "600 64px Jost, sans-serif";
  ctx.fillText(track.title.slice(0, 28), 80, 860);
  ctx.font = "400 36px Jost, sans-serif";
  ctx.fillStyle = "#C9C3B6";
  ctx.fillText(track.artist.slice(0, 36), 80, 920);
  const energy = energyLabel(track.energy);
  const chip = track.bpm ? `${Math.round(track.bpm)} BPM · ${track.camelot} · ${energy}` : t(locale, "notAnalysed");
  ctx.fillStyle = "#C9A24B";
  ctx.font = "500 32px Jost, sans-serif";
  ctx.fillText(chip, 80, 990);
  const text = `${track.title} — ${track.artist}. ${chip}.`;
  await shareCanvas(canvas, "klangyu-track.png", text);
}

export function applyChrome(locale: Locale, theme: "auto" | "light" | "dark" | "amoled", palette: string) {
  const root = document.documentElement;
  let next = theme;
  if (next === "auto") {
    next = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  root.dataset.theme = next;
  root.dataset.palette = palette;
  root.lang = locale === "zh-TW" ? "zh-Hant" : locale;
}

export function bootPlayer() {
  let fading = false;
  const onMedia = (event: Event) => {
    const detail = (event as CustomEvent<string>).detail;
    const state = useStore.getState();
    if (detail === "play" && !engine.snapshot().playing) state.toggle();
    if (detail === "pause" && engine.snapshot().playing) state.toggle();
    if (detail === "next") state.next();
    if (detail === "prev") state.prev();
  };
  document.addEventListener("klangyu-media", onMedia);
  const clock = window.setInterval(() => {
    const sleep = useStore.getState().sleep;
    if (sleep.kind === "time" && Date.now() >= sleep.until && !fading) {
      fading = true;
      engine.fadeOut(8);
      window.setTimeout(() => {
        const again = useStore.getState().sleep;
        if (again.kind === "time" && Date.now() >= again.until - 1000) {
          engine.pause();
          useStore.getState().clearSleep();
        } else {
          engine.restoreGain();
        }
        fading = false;
      }, 8200);
    }
    const snap = engine.snapshot();
    if (snap.playing) useStore.getState().notePosition(snap.positionMs);
  }, 1000);
  return () => {
    document.removeEventListener("klangyu-media", onMedia);
    window.clearInterval(clock);
  };
}

