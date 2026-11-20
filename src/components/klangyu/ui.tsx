import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Heart, MoreHorizontal, Pause, Play } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { engine } from "@/klangyu/audio";
import { t } from "@/klangyu/i18n";
import { useStore } from "@/klangyu/store";
import { formatClock, hashString } from "@/klangyu/theory";
import type { Track } from "@/klangyu/types";
import { cn } from "@/lib/utils";
import mark from "@/klangyu/mark.svg?url";

export function Seal({ className }: { className?: string }) {
  return <img src={mark} alt="" className={cn("shrink-0", className)} />;
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-medium tracking-tight", className)}>
      Klangy
      <span className="relative inline-block">
        u
        <span className="absolute -top-1.5 left-1/2 flex -translate-x-1/2 gap-0.5" aria-hidden>
          <span className="size-1 rounded-full bg-accent" />
          <span className="size-1 rounded-full bg-accent" />
        </span>
      </span>
    </span>
  );
}

export function AlbumArt({
  track,
  className,
  playing,
}: {
  track: Pick<Track, "hue" | "title" | "album" | "seed">;
  className?: string;
  playing?: boolean;
}) {
  const seed = `${track.album}-${track.seed ?? track.title}`;
  const rings = 3 + Math.floor(hashString(seed) * 3);
  return (
    <svg viewBox="0 0 100 100" className={cn("bg-surface text-accent", className)} role="img" aria-label={track.title}>
      <rect width="100" height="100" fill={`hsl(${track.hue} 32% 14%)`} />
      {Array.from({ length: rings }, (_, i) => (
        <circle
          key={i}
          cx={50 + (hashString(seed + i) - 0.5) * 18}
          cy={48 + (hashString(seed + "y" + i) - 0.5) * 16}
          r={16 + i * 9}
          fill="none"
          stroke={`hsl(${track.hue + i * 16} 48% ${62 - i * 8}%)`}
          strokeWidth="1.6"
        />
      ))}
      <rect x="64" y="64" width="20" height="20" rx="3" fill="currentColor" />
      {playing ? (
        <g className="eq-bars" fill="hsl(40 30% 92%)">
          <rect x="18" y="70" width="3" height="12" rx="1.5" />
          <rect x="24" y="64" width="3" height="18" rx="1.5" />
          <rect x="30" y="68" width="3" height="14" rx="1.5" />
        </g>
      ) : null}
    </svg>
  );
}

export function IconButton({
  label,
  children,
  className,
  active,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { label: string; active?: boolean }) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-full text-fg hover:bg-surface-2 disabled:opacity-40",
        active && "text-accent",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function PrimaryButton({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full bg-accent px-5 font-medium text-accent-fg disabled:opacity-40",
        className,
      )}
      {...props}
    />
  );
}

export function GhostButton({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full bg-surface-2 px-5 font-medium text-fg ring-1 ring-line",
        className,
      )}
      {...props}
    />
  );
}

export function usePlayback() {
  const [snap, setSnap] = useState(() => engine.snapshot());
  useEffect(() => engine.subscribe(() => setSnap(engine.snapshot())), []);
  return snap;
}

export function TrackMenu({ track }: { track: Track }) {
  const locale = useStore((s) => s.settings.locale);
  const playlists = useStore((s) => s.playlists);
  const playNext = useStore((s) => s.playNext);
  const enqueue = useStore((s) => s.enqueue);
  const toggleFavourite = useStore((s) => s.toggleFavourite);
  const hideTrack = useStore((s) => s.hideTrack);
  const addToPlaylist = useStore((s) => s.addToPlaylist);
  const createPlaylist = useStore((s) => s.createPlaylist);
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button type="button" aria-label={t(locale, "more")} className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-surface-2">
          <MoreHorizontal className="size-5" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="z-50 min-w-48 rounded-2xl bg-surface p-1 text-sm text-fg shadow-xl ring-1 ring-line" sideOffset={6}>
          <Item onSelect={() => playNext(track.id)}>{t(locale, "playNext")}</Item>
          <Item onSelect={() => enqueue([track.id])}>{t(locale, "addQueue")}</Item>
          <Item onSelect={() => toggleFavourite(track.id)}>{track.favourite ? t(locale, "unfavourite") : t(locale, "favourite")}</Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="rounded-xl px-3 py-2 outline-none data-[highlighted]:bg-surface-2">
              {t(locale, "addPlaylist")}
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent className="z-50 min-w-44 rounded-2xl bg-surface p-1 text-sm ring-1 ring-line">
                <Item
                  onSelect={() => createPlaylist(`${t(locale, "newPlaylist")} ${playlists.length + 1}`, [track.id])}
                >
                  {t(locale, "newPlaylist")}
                </Item>
                {playlists.map((playlist) => (
                  <Item key={playlist.id} onSelect={() => addToPlaylist(playlist.id, [track.id])}>
                    {playlist.name}
                  </Item>
                ))}
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <Item onSelect={() => hideTrack(track.id)}>{t(locale, "hide")}</Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function Item({ children, onSelect }: { children: ReactNode; onSelect: () => void }) {
  return (
    <DropdownMenu.Item className="rounded-xl px-3 py-2 outline-none data-[highlighted]:bg-surface-2" onSelect={onSelect}>
      {children}
    </DropdownMenu.Item>
  );
}

export function TrackRow({ track, onPlay }: { track: Track; onPlay: () => void }) {
  const locale = useStore((s) => s.settings.locale);
  const toggleFavourite = useStore((s) => s.toggleFavourite);
  const snap = usePlayback();
  const active = snap.currentId === track.id;
  return (
    <div className={cn("flex items-center gap-3 rounded-2xl px-2 py-1.5", active && "bg-surface")}>
      <button type="button" onClick={onPlay} className="flex min-w-0 flex-1 items-center gap-3 text-left">
        <AlbumArt track={track} playing={active && snap.playing} className="size-12 rounded-xl" />
        <span className="min-w-0">
          <span className="block truncate font-medium">{track.title}</span>
          <span className="block truncate text-sm text-muted">
            {track.artist} · {formatClock(track.durationMs)}
          </span>
        </span>
      </button>
      <button
        type="button"
        aria-label={track.favourite ? t(locale, "unfavourite") : t(locale, "favourite")}
        onClick={() => toggleFavourite(track.id)}
        className={cn("inline-flex h-11 w-11 items-center justify-center rounded-full", track.favourite ? "text-accent" : "text-muted")}
      >
        <Heart className={cn("size-5", track.favourite && "fill-current")} />
      </button>
      <span className="text-muted" aria-hidden>
        {active && snap.playing ? <Pause className="size-4" /> : active ? <Play className="size-4" /> : null}
      </span>
      <TrackMenu track={track} />
    </div>
  );
}

export function SheetFrame({
  title,
  onClose,
  children,
  wide,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
  wide?: boolean;
}) {
  const locale = useStore((s) => s.settings.locale);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div className="absolute inset-0 z-40 flex items-end justify-center">
      <button type="button" className="absolute inset-0 bg-scrim" aria-label={t(locale, "close")} onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "relative z-10 flex max-h-[92%] w-full flex-col rounded-t-3xl bg-bg ring-1 ring-line",
          wide ? "max-w-3xl" : "max-w-lg",
        )}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <h2 className="text-lg font-medium">{title}</h2>
          <IconButton label={t(locale, "close")} onClick={onClose}>
            <span aria-hidden className="text-xl leading-none">
              ×
            </span>
          </IconButton>
        </div>
        <div className="min-h-0 overflow-y-auto px-4 pb-8">{children}</div>
      </div>
    </div>
  );
}

export function Segmented<T extends string>({
  value,
  options,
  onChange,
  label,
}: {
  value: T;
  options: { id: T; label: string }[];
  onChange: (id: T) => void;
  label: string;
}) {
  return (
    <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          role="radio"
          aria-checked={value === option.id}
          onClick={() => onChange(option.id)}
          className={cn(
            "h-11 rounded-full px-4 text-sm",
            value === option.id ? "bg-accent text-accent-fg" : "bg-surface-2 text-fg ring-1 ring-line",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function ToggleRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-2">
      <span>{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={cn("relative h-8 w-14 rounded-full", checked ? "bg-accent" : "bg-surface-2 ring-1 ring-line")}
      >
        <span className={cn("absolute top-1 size-6 rounded-full bg-paper transition-all", checked ? "left-7" : "left-1")} />
      </button>
    </div>
  );
}
