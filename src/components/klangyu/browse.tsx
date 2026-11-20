import { ChevronLeft, ChevronDown, ChevronUp, Plus, Search, Settings, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { requestAudioFiles } from "@/klangyu/files";
import { countNoun, formatDuration, intlLocale, t } from "@/klangyu/i18n";
import { trackMatches, sortTitle } from "@/klangyu/search";
import { useStore } from "@/klangyu/store";
import { formatClock } from "@/klangyu/theory";
import type { Locale, MixId, SmartMode, Track } from "@/klangyu/types";
import { cn } from "@/lib/utils";
import { AlbumArt, GhostButton, IconButton, PrimaryButton, Seal, TrackRow, Wordmark } from "./ui";

type LibTab = "songs" | "albums" | "artists" | "genres" | "folders" | "playlists";
type SortKey = "title" | "artist" | "recent";
type Detail =
  | { kind: "album" | "artist" | "genre" | "folder"; name: string }
  | { kind: "playlist"; id: string };

function greet(locale: Locale): string {
  const hour = new Date().getHours();
  if (hour < 5 || hour >= 22) return t(locale, "greetNight");
  if (hour < 12) return t(locale, "greetMorning");
  if (hour < 17) return t(locale, "greetAfternoon");
  return t(locale, "greetEvening");
}

function collator(locale: Locale) {
  return new Intl.Collator(intlLocale(locale), { sensitivity: "base" });
}

function sortedTracks(tracks: Track[], sort: SortKey, ignore: boolean, locale: Locale): Track[] {
  const cmp = collator(locale);
  const copy = tracks.slice();
  if (sort === "recent") return copy.sort((a, b) => b.year - a.year || cmp.compare(a.title, b.title));
  if (sort === "artist") return copy.sort((a, b) => cmp.compare(a.artist, b.artist) || cmp.compare(a.title, b.title));
  return copy.sort((a, b) => cmp.compare(sortTitle(a.title, ignore), sortTitle(b.title, ignore)));
}

function letterOf(title: string, ignore: boolean): string {
  const value = sortTitle(title, ignore).trim();
  const ch = value[0] ?? "#";
  return /[a-z]/i.test(ch) ? ch.toUpperCase() : ch;
}

export function HomeView() {
  const locale = useStore((s) => s.settings.locale);
  const visible = useStore((s) => s.visible());
  const order = useStore((s) => s.order);
  const index = useStore((s) => s.index);
  const playIds = useStore((s) => s.playIds);
  const resumePlayback = useStore((s) => s.resumePlayback);
  const mix = useStore((s) => s.mix);
  const setSheet = useStore((s) => s.setSheet);
  const currentId = order[index];
  const current = visible.find((track) => track.id === currentId) ?? useStore.getState().track(currentId);
  const recent = visible.slice(0, 8);
  const played = visible.filter((track) => track.playCount > 0).sort((a, b) => b.playCount - a.playCount).slice(0, 6);
  const favourites = visible.filter((track) => track.favourite).slice(0, 6);
  const mixes: MixId[] = ["morning", "focus", "workout", "night", "discover"];
  const mixKey: Record<MixId, "morning" | "focus" | "workout" | "night" | "discover"> = {
    morning: "morning",
    focus: "focus",
    workout: "workout",
    night: "night",
    discover: "discover",
  };

  return (
    <div className="space-y-8 px-4 pb-6 pt-4">
      <header className="flex items-center gap-3">
        <Seal className="size-11 rounded-2xl" />
        <div className="min-w-0 flex-1">
          <Wordmark className="text-xl" />
          <p className="truncate text-sm text-muted">{greet(locale)}</p>
        </div>
        <IconButton label={t(locale, "settings")} onClick={() => setSheet("settings")}>
          <Settings className="size-5" />
        </IconButton>
      </header>

      {visible.length === 0 ? (
        <EmptyLibrary />
      ) : (
        <>
          {current ? (
            <button
              type="button"
              onClick={() => resumePlayback()}
              className="flex w-full items-center gap-4 rounded-3xl bg-surface p-3 text-left ring-1 ring-line"
            >
              <AlbumArt track={current} className="size-16 rounded-2xl" />
              <span className="min-w-0 flex-1">
                <span className="block text-xs tracking-wide text-muted uppercase">{t(locale, "continue")}</span>
                <span className="mt-1 block truncate text-lg font-medium">{current.title}</span>
                <span className="block truncate text-sm text-muted">{current.artist}</span>
              </span>
            </button>
          ) : null}

          <section>
            <h2 className="mb-3 text-sm tracking-wide text-muted uppercase">{t(locale, "mixes")}</h2>
            <div className="flex gap-3 overflow-x-auto pb-1">
              {mixes.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => mix(id)}
                  className="h-28 w-36 shrink-0 rounded-3xl bg-surface-2 p-4 text-left ring-1 ring-line"
                >
                  <span className="block text-lg font-medium">{t(locale, mixKey[id])}</span>
                  <span className="mt-2 block text-sm text-muted">{t(locale, "smartQueue")}</span>
                </button>
              ))}
            </div>
          </section>

          <Rail title={t(locale, "recent")} tracks={recent} onPlay={(track) => playIds([track.id], 0, false)} />
          {played.length > 0 ? (
            <Rail title={t(locale, "mostPlayed")} tracks={played} onPlay={(track) => playIds([track.id], 0, false)} />
          ) : null}
          {favourites.length > 0 ? (
            <Rail title={t(locale, "favourites")} tracks={favourites} onPlay={(track) => playIds(favourites.map((item) => item.id), favourites.findIndex((item) => item.id === track.id), false)} />
          ) : null}
          <button type="button" onClick={() => setSheet("klangbild")} className="flex w-full items-center justify-between rounded-3xl bg-ink px-5 py-4 text-left text-paper">
            <span>
              <span className="block text-lg font-medium">{t(locale, "klangbild")}</span>
              <span className="text-sm text-paper/70">{t(locale, "closing")}</span>
            </span>
            <span className="text-brass-ui">{t(locale, "open")}</span>
          </button>
        </>
      )}
    </div>
  );
}

function Rail({ title, tracks, onPlay }: { title: string; tracks: Track[]; onPlay: (track: Track) => void }) {
  return (
    <section>
      <h2 className="mb-3 text-sm tracking-wide text-muted uppercase">{title}</h2>
      <div className="flex gap-3 overflow-x-auto pb-1">
        {tracks.map((track) => (
          <button key={track.id} type="button" onClick={() => onPlay(track)} className="w-32 shrink-0 text-left">
            <AlbumArt track={track} className="aspect-square w-full rounded-2xl" />
            <span className="mt-2 block truncate text-sm font-medium">{track.title}</span>
            <span className="block truncate text-xs text-muted">{track.artist}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export function EmptyLibrary() {
  const locale = useStore((s) => s.settings.locale);
  const patchSettings = useStore((s) => s.patchSettings);
  return (
    <div className="rounded-3xl bg-surface px-5 py-8 text-center ring-1 ring-line">
      <Seal className="mx-auto size-16 rounded-3xl" />
      <h2 className="mt-4 text-xl font-medium">{t(locale, "emptyTitle")}</h2>
      <p className="mt-2 text-sm text-muted">{t(locale, "emptyBody")}</p>
      <div className="mt-5 flex flex-col gap-2">
        <PrimaryButton onClick={() => patchSettings({ showSketches: true })}>{t(locale, "obDemo")}</PrimaryButton>
        <GhostButton onClick={() => requestAudioFiles()}>{t(locale, "addMusic")}</GhostButton>
      </div>
    </div>
  );
}

export function LibraryView() {
  const locale = useStore((s) => s.settings.locale);
  const ignore = useStore((s) => s.settings.ignoreArticles);
  const visible = useStore((s) => s.visible());
  const tracks = useStore((s) => s.tracks);
  const playlists = useStore((s) => s.playlists);
  const playIds = useStore((s) => s.playIds);
  const smartFrom = useStore((s) => s.smartFrom);
  const createPlaylist = useStore((s) => s.createPlaylist);
  const deletePlaylist = useStore((s) => s.deletePlaylist);
  const renamePlaylist = useStore((s) => s.renamePlaylist);
  const movePlaylistTrack = useStore((s) => s.movePlaylistTrack);
  const removePlaylistTrack = useStore((s) => s.removePlaylistTrack);
  const [tab, setTab] = useState<LibTab>("songs");
  const [sort, setSort] = useState<SortKey>("title");
  const [detail, setDetail] = useState<Detail | null>(null);
  const [naming, setNaming] = useState(false);
  const [name, setName] = useState("");
  const [selecting, setSelecting] = useState(false);
  const [picked, setPicked] = useState<string[]>([]);
  const [mode, setMode] = useState<SmartMode>("similar");

  const songs = useMemo(() => sortedTracks(visible, sort, ignore, locale), [visible, sort, ignore, locale]);
  const tabs: { id: LibTab; label: string }[] = [
    { id: "songs", label: t(locale, "songs") },
    { id: "albums", label: t(locale, "albums") },
    { id: "artists", label: t(locale, "artists") },
    { id: "genres", label: t(locale, "genres") },
    { id: "folders", label: t(locale, "folders") },
    { id: "playlists", label: t(locale, "playlists") },
  ];

  if (detail?.kind === "playlist") {
    const playlist = playlists.find((item) => item.id === detail.id);
    if (!playlist) {
      return (
        <div className="px-4 pt-6">
          <button type="button" onClick={() => setDetail(null)} className="inline-flex h-11 items-center gap-1 text-sm text-muted">
            <ChevronLeft className="size-4" /> {t(locale, "back")}
          </button>
          <p className="mt-4 text-sm text-muted">{t(locale, "emptyPlaylist")}</p>
        </div>
      );
    }
    const rows = playlist.trackIds
      .map((id) => tracks.find((track) => track.id === id))
      .filter((track): track is Track => Boolean(track));
      return (
        <div className="px-4 pb-6 pt-3">
          <button type="button" onClick={() => setDetail(null)} className="mb-3 inline-flex h-11 items-center gap-1 text-sm text-muted">
            <ChevronLeft className="size-4" /> {t(locale, "back")}
          </button>
          <h2 className="text-2xl font-medium">{playlist.name}</h2>
          <p className="mt-1 text-sm text-muted">{countNoun(locale, rows.length)}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <PrimaryButton disabled={rows.length === 0} onClick={() => playIds(rows.map((track) => track.id), 0, false)}>
              {t(locale, "playAll")}
            </PrimaryButton>
            <GhostButton disabled={rows.length === 0} onClick={() => smartFrom(rows[0].id, mode)}>
              {t(locale, "smartQueue")}
            </GhostButton>
          </div>
          <div className="mt-3">
            <ModeChips value={mode} onChange={setMode} locale={locale} />
          </div>
          {rows.length === 0 ? <p className="mt-6 text-sm text-muted">{t(locale, "emptyPlaylist")}</p> : null}
          <ul className="mt-2">
            {rows.map((track, row) => (
              <li key={`${track.id}-${row}`} className="flex items-center gap-1">
                <div className="min-w-0 flex-1">
                  <TrackRow track={track} onPlay={() => playIds(rows.map((item) => item.id), row, false)} />
                </div>
                <IconButton label={t(locale, "moveUp")} onClick={() => movePlaylistTrack(playlist.id, row, -1)}>
                  <ChevronUp className="size-4" />
                </IconButton>
                <IconButton label={t(locale, "moveDown")} onClick={() => movePlaylistTrack(playlist.id, row, 1)}>
                  <ChevronDown className="size-4" />
                </IconButton>
                <IconButton label={t(locale, "delete")} onClick={() => removePlaylistTrack(playlist.id, row)}>
                  <Trash2 className="size-4" />
                </IconButton>
              </li>
            ))}
          </ul>
          <GhostButton className="mt-4" onClick={() => {
            const next = window.prompt(t(locale, "rename"), playlist.name);
            if (next?.trim()) renamePlaylist(playlist.id, next.trim());
          }}>
            {t(locale, "rename")}
          </GhostButton>
          <button type="button" className="mt-3 block text-sm text-accent" onClick={() => { deletePlaylist(playlist.id); setDetail(null); }}>
            {t(locale, "delete")}
          </button>
        </div>
      );
  }

  if (detail) {
    const nameKey = detail.name;
    const rows = visible
      .filter((track) => {
        if (detail.kind === "album") return track.album === nameKey;
        if (detail.kind === "artist") return track.artist === nameKey || track.albumArtist === nameKey;
        if (detail.kind === "genre") return track.genre === nameKey;
        return track.folder === nameKey;
      })
      .sort((a, b) => a.trackNo - b.trackNo || a.title.localeCompare(b.title));
    const cover = rows[0];
    return (
      <div className="px-4 pb-6 pt-3">
        <button type="button" onClick={() => setDetail(null)} className="mb-3 inline-flex h-11 items-center gap-1 text-sm text-muted">
          <ChevronLeft className="size-4" /> {t(locale, "back")}
        </button>
        {cover ? <AlbumArt track={cover} className="aspect-square w-full rounded-3xl" /> : null}
        <h2 className="mt-4 text-2xl font-medium">{nameKey}</h2>
        <p className="text-sm text-muted">
          {detail.kind === "album" ? cover?.albumArtist : t(locale, detail.kind === "artist" ? "artist" : detail.kind === "genre" ? "genre" : "folder")}
          {" · "}
          {countNoun(locale, rows.length)}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <PrimaryButton disabled={!cover} onClick={() => playIds(rows.map((track) => track.id), 0, false)}>
            {t(locale, "playAll")}
          </PrimaryButton>
          <GhostButton
            disabled={!cover}
            onClick={() => {
              const bag = rows.slice();
              for (let i = bag.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [bag[i], bag[j]] = [bag[j], bag[i]];
              }
              playIds(bag.map((track) => track.id), 0, false);
            }}
          >
            {t(locale, "shufflePlay")}
          </GhostButton>
          <GhostButton disabled={!cover} onClick={() => smartFrom(rows[0].id, mode)}>
            {t(locale, "smartQueue")}
          </GhostButton>
        </div>
        <div className="mt-3">
          <ModeChips value={mode} onChange={setMode} locale={locale} />
        </div>
        <ul className="mt-3">
          {rows.map((track, row) => (
            <li key={track.id}>
              <TrackRow track={track} onPlay={() => playIds(rows.map((item) => item.id), row, false)} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const groups = new Map<string, Track[]>();
  for (const track of visible) {
    const key =
      tab === "albums" ? track.album : tab === "artists" ? track.artist : tab === "genres" ? track.genre : track.folder;
    const list = groups.get(key) ?? [];
    list.push(track);
    groups.set(key, list);
  }
  const cards = [...groups.entries()].sort((a, b) => collator(locale).compare(a[0], b[0]));
  const letters = [...new Set(songs.map((track) => letterOf(track.title, ignore)))];

  return (
    <div className="px-4 pb-6 pt-4">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-medium">{t(locale, "navLibrary")}</h1>
        <button type="button" className="text-sm text-accent" onClick={() => requestAudioFiles()}>
          {t(locale, "addMusic")}
        </button>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-3">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => { setTab(item.id); setSelecting(false); setPicked([]); }}
            className={cn("h-11 shrink-0 rounded-full px-4 text-sm", tab === item.id ? "bg-accent text-accent-fg" : "bg-surface-2 ring-1 ring-line")}
          >
            {item.label}
          </button>
        ))}
      </div>

      {tab === "songs" ? (
        <>
          <div className="mb-2 flex items-center justify-between gap-2">
            <label className="text-sm text-muted">
              {t(locale, "sort")}
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
                className="ml-2 h-11 rounded-full bg-surface-2 px-3 text-fg ring-1 ring-line"
              >
                <option value="title">{t(locale, "titleAz")}</option>
                <option value="artist">{t(locale, "artistAz")}</option>
                <option value="recent">{t(locale, "recently")}</option>
              </select>
            </label>
            <button
              type="button"
              className="h-11 rounded-full px-3 text-sm"
              onClick={() => { setSelecting((value) => !value); setPicked([]); }}
            >
              {selecting ? t(locale, "done") : t(locale, "select")}
            </button>
          </div>
          <div className="relative">
            <ul>
              {songs.map((track, row) => {
                const letter = letterOf(track.title, ignore);
                const show = row === 0 || letter !== letterOf(songs[row - 1].title, ignore);
                const on = picked.includes(track.id);
                return (
                  <li key={track.id} id={show ? `letter-${letter}` : undefined}>
                    {show ? <p className="px-2 pt-3 text-xs tracking-wide text-brass-ui uppercase">{letter}</p> : null}
                    {selecting ? (
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="size-5 accent-current"
                          checked={on}
                          onChange={() => setPicked((ids) => (on ? ids.filter((id) => id !== track.id) : [...ids, track.id]))}
                        />
                        <div className="min-w-0 flex-1">
                          <TrackRow track={track} onPlay={() => playIds(songs.map((item) => item.id), row, false)} />
                        </div>
                      </label>
                    ) : (
                      <TrackRow track={track} onPlay={() => playIds(songs.map((item) => item.id), row, false)} />
                    )}
                  </li>
                );
              })}
            </ul>
            {letters.length > 1 && letters.length < 24 ? (
              <div className="sticky top-2 float-right -mt-[100%] flex w-6 flex-col items-center text-[10px] text-muted">
                {letters.map((letter) => (
                  <button key={letter} type="button" className="h-5 w-6" onClick={() => document.getElementById(`letter-${letter}`)?.scrollIntoView({ block: "start" })}>
                    {letter}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          {selecting && picked.length > 0 ? (
            <div className="sticky bottom-2 mt-3 flex gap-2 rounded-2xl bg-surface p-2 ring-1 ring-line">
              <PrimaryButton className="flex-1" onClick={() => playIds(picked, 0, false)}>{t(locale, "play")}</PrimaryButton>
              <GhostButton className="flex-1" onClick={() => useStore.getState().enqueue(picked)}>{t(locale, "addQueue")}</GhostButton>
            </div>
          ) : null}
        </>
      ) : null}

      {tab !== "songs" && tab !== "playlists" ? (
        <div className="grid grid-cols-2 gap-3">
          {cards.map(([key, rows]) => (
            <button key={key} type="button" onClick={() => setDetail({ kind: tab === "albums" ? "album" : tab === "artists" ? "artist" : tab === "genres" ? "genre" : "folder", name: key })} className="text-left">
              <AlbumArt track={rows[0]} className="aspect-square w-full rounded-2xl" />
              <span className="mt-2 block truncate font-medium">{key}</span>
              <span className="block text-xs text-muted">{countNoun(locale, rows.length)}</span>
            </button>
          ))}
        </div>
      ) : null}

      {tab === "playlists" ? (
        <div className="space-y-2">
          {naming ? (
            <form
              className="flex gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                if (name.trim()) createPlaylist(name.trim());
                setName("");
                setNaming(false);
              }}
            >
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={t(locale, "playlistName")}
                className="h-12 min-w-0 flex-1 rounded-full bg-surface-2 px-4 ring-1 ring-line"
                autoFocus
              />
              <PrimaryButton type="submit">{t(locale, "create")}</PrimaryButton>
            </form>
          ) : (
            <GhostButton onClick={() => setNaming(true)}>
              <Plus className="mr-2 size-4" /> {t(locale, "newPlaylist")}
            </GhostButton>
          )}
          {playlists.length === 0 ? <p className="pt-4 text-sm text-muted">{t(locale, "emptyPlaylist")}</p> : null}
          {playlists.map((playlist) => (
            <button key={playlist.id} type="button" onClick={() => setDetail({ kind: "playlist", id: playlist.id })} className="flex w-full items-center justify-between rounded-2xl bg-surface px-4 py-3 text-left ring-1 ring-line">
              <span>
                <span className="block font-medium">{playlist.name}</span>
                <span className="text-sm text-muted">{countNoun(locale, playlist.trackIds.length)}</span>
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function ModeChips({ value, onChange, locale }: { value: SmartMode; onChange: (mode: SmartMode) => void; locale: Locale }) {
  const options: { id: SmartMode; label: string }[] = [
    { id: "similar", label: t(locale, "similar") },
    { id: "up", label: t(locale, "energyUp") },
    { id: "down", label: t(locale, "energyDown") },
    { id: "discover", label: t(locale, "discover") },
  ];
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={t(locale, "smartQueue")}>
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          role="radio"
          aria-checked={value === option.id}
          onClick={() => onChange(option.id)}
          className={cn("h-10 rounded-full px-3 text-sm", value === option.id ? "bg-fg text-bg" : "bg-surface-2 ring-1 ring-line")}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function SearchView() {
  const locale = useStore((s) => s.settings.locale);
  const visible = useStore((s) => s.visible());
  const recent = useStore((s) => s.recentSearches);
  const rememberSearch = useStore((s) => s.rememberSearch);
  const clearSearches = useStore((s) => s.clearSearches);
  const playIds = useStore((s) => s.playIds);
  const [query, setQuery] = useState("");
  const q = query.trim();
  const hits = q ? visible.filter((track) => trackMatches(track, q)) : [];
  const albums = [...new Set(hits.map((track) => track.album))];
  const artists = [...new Set(hits.map((track) => track.artist))];

  return (
    <div className="px-4 pb-6 pt-4">
      <div className="relative">
        <Search className="pointer-events-none absolute top-3.5 left-4 size-5 text-muted" />
        <input
          value={query}
          autoFocus
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => { if (q) rememberSearch(q); }}
          placeholder={t(locale, "searchPh")}
          aria-label={t(locale, "navSearch")}
          className="h-12 w-full rounded-full bg-surface-2 pr-4 pl-12 ring-1 ring-line"
        />
      </div>
      {!q ? (
        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm tracking-wide text-muted uppercase">{t(locale, "recentSearches")}</h2>
            {recent.length > 0 ? (
              <button type="button" className="text-sm text-accent" onClick={() => clearSearches()}>{t(locale, "clearAll")}</button>
            ) : null}
          </div>
          {recent.length === 0 ? <p className="text-sm text-muted">{t(locale, "searchEmpty")}</p> : null}
          <div className="flex flex-wrap gap-2">
            {recent.map((item) => (
              <button key={item} type="button" onClick={() => setQuery(item)} className="h-11 rounded-full bg-surface px-4 text-sm ring-1 ring-line">
                {item}
              </button>
            ))}
          </div>
        </div>
      ) : hits.length === 0 ? (
        <p className="mt-8 text-sm text-muted">{t(locale, "noResults")}</p>
      ) : (
        <div className="mt-4 space-y-6">
          <section>
            <h2 className="mb-1 text-sm text-muted">{t(locale, "songs")}</h2>
            {hits.slice(0, 20).map((track) => (
              <TrackRow key={track.id} track={track} onPlay={() => { rememberSearch(q); playIds(hits.map((item) => item.id), hits.findIndex((item) => item.id === track.id), false); }} />
            ))}
          </section>
          {artists.length > 0 ? (
            <section>
              <h2 className="mb-2 text-sm text-muted">{t(locale, "artists")}</h2>
              <p className="text-sm">{artists.slice(0, 6).join(" · ")}</p>
            </section>
          ) : null}
          {albums.length > 0 ? (
            <section>
              <h2 className="mb-2 text-sm text-muted">{t(locale, "albums")}</h2>
              <p className="text-sm">{albums.slice(0, 6).join(" · ")}</p>
            </section>
          ) : null}
        </div>
      )}
    </div>
  );
}

export function MixesView() {
  const locale = useStore((s) => s.settings.locale);
  const visible = useStore((s) => s.visible());
  const mix = useStore((s) => s.mix);
  const smartFrom = useStore((s) => s.smartFrom);
  const [seed, setSeed] = useState(visible[0]?.id ?? "");
  const [mode, setMode] = useState<SmartMode>("similar");
  const pending = useStore((s) => s.tracks.filter((track) => track.analysis === "pending").length);
  const done = useStore((s) => s.tracks.filter((track) => track.analysis === "done").length);
  const total = useStore((s) => s.tracks.filter((track) => !track.hidden).length);
  const mixes: { id: MixId; key: "morning" | "focus" | "workout" | "night" | "discover" }[] = [
    { id: "morning", key: "morning" },
    { id: "focus", key: "focus" },
    { id: "workout", key: "workout" },
    { id: "night", key: "night" },
    { id: "discover", key: "discover" },
  ];

  return (
    <div className="space-y-6 px-4 pb-6 pt-4">
      <h1 className="text-2xl font-medium">{t(locale, "navMixes")}</h1>
      {pending > 0 ? (
        <p className="rounded-2xl bg-surface px-4 py-3 text-sm ring-1 ring-line">
          {t(locale, "analysisBanner")} · {done}/{total}
        </p>
      ) : null}
      <div className="grid grid-cols-2 gap-3">
        {mixes.map((item) => (
          <button key={item.id} type="button" onClick={() => mix(item.id)} className="h-32 rounded-3xl bg-surface p-4 text-left ring-1 ring-line">
            <span className="text-lg font-medium">{t(locale, item.key)}</span>
            <span className="mt-2 block text-sm text-muted">{countNoun(locale, Math.min(18, visible.length))}</span>
          </button>
        ))}
      </div>
      <section className="rounded-3xl bg-surface p-4 ring-1 ring-line">
        <h2 className="text-lg font-medium">{t(locale, "smartQueue")}</h2>
        <label className="mt-3 block text-sm text-muted">
          {t(locale, "songs")}
          <select value={seed} onChange={(event) => setSeed(event.target.value)} className="mt-1 h-12 w-full rounded-2xl bg-surface-2 px-3 text-fg ring-1 ring-line">
            {visible.map((track) => (
              <option key={track.id} value={track.id}>{track.title} — {track.artist}</option>
            ))}
          </select>
        </label>
        <div className="mt-3">
          <ModeChips value={mode} onChange={setMode} locale={locale} />
        </div>
        <PrimaryButton className="mt-4 w-full" disabled={!seed} onClick={() => smartFrom(seed, mode)}>
          {t(locale, "smartQueue")}
        </PrimaryButton>
        <p className="mt-3 text-sm text-muted">{formatDuration(locale, visible.reduce((sum, track) => sum + track.durationMs, 0))}</p>
      </section>
    </div>
  );
}
