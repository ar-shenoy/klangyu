export type Locale = "en" | "de" | "zh-TW";
export type Tab = "home" | "library" | "search" | "mixes";
export type RepeatMode = "off" | "all" | "one";
export type AutomixMode = "OFF" | "SMART_SESSIONS" | "ALWAYS";
export type AutomixStyle = "SUBTLE" | "CLUB" | "RADIO" | "CHILL";
export type LoudnessMode = "OFF" | "TRACK" | "ALBUM";
export type ThemeName = "auto" | "light" | "dark" | "amoled";
export type PaletteName = "default" | "mist" | "brass" | "market" | "harbor";
export type TierName = "AUTO" | "CORE" | "ENHANCED" | "STUDIO";
export type SmartMode = "similar" | "up" | "down" | "discover";
export type MixId = "morning" | "focus" | "workout" | "night" | "discover";
export type Technique = "blend" | "filter" | "echo" | "cut" | "bass";
export type Mode = "major" | "minor";
export type SketchStyle = "indie" | "pop" | "club" | "ambient";
export type AnalysisState = "done" | "pending" | "failed";
export type Sheet =
  | null
  | "now"
  | "queue"
  | "lyrics"
  | "eq"
  | "karaoke"
  | "sleep"
  | "settings"
  | "support"
  | "about"
  | "klangbild"
  | "playlist"
  | "explain";

export type LyricLine = { t: number; text: string };

export type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  albumArtist: string;
  genre: string;
  year: number;
  trackNo: number;
  durationMs: number;
  folder: string;
  bpm: number;
  bpmConfidence: number;
  keyRoot: number;
  mode: Mode;
  camelot: string;
  energy: number;
  brightness: number;
  loudnessLufs: number;
  danceability: number;
  hue: number;
  peaks: number[];
  source: "sketch" | "file";
  style?: SketchStyle;
  seed?: number;
  analysis: AnalysisState;
  lyrics?: LyricLine[];
  pinyin?: string;
  zhuyin?: string;
  aliases?: string[];
  mono?: boolean;
  favourite: boolean;
  playCount: number;
  skipCount: number;
  lastPlayedAt: number | null;
  hidden: boolean;
  lyricOffsetMs: number;
};

export type Playlist = {
  id: string;
  name: string;
  trackIds: string[];
  createdAt: number;
};

export type PlayEvent = {
  id: string;
  trackId: string;
  startedAt: number;
  playedMs: number;
  completed: boolean;
  hourOfDay: number;
};

export type EqState = {
  bands: number[];
  preamp: number;
  bass: number;
};

export type Settings = {
  locale: Locale;
  theme: ThemeName;
  palette: PaletteName;
  gaplessAlbums: boolean;
  crossfadeSeconds: number;
  automixMode: AutomixMode;
  automixStyle: AutomixStyle;
  automixHarmonicOnly: boolean;
  loudnessMode: LoudnessMode;
  resumeOnLaunch: boolean;
  haptics: boolean;
  minTrackSeconds: number;
  ignoreArticles: boolean;
  tierOverride: TierName;
  personalisation: boolean;
  smartQueueLength: number;
  showSketches: boolean;
};

export type Probe = {
  tier: 0 | 1 | 2;
  ramGb: number | null;
  cores: number;
};

export const EQ_FREQS = [32, 64, 125, 250, 500, 1000, 2000, 4000, 8000, 16000];

export const EQ_PRESETS: Record<string, number[]> = {
  Flat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  Bass: [6, 5, 3, 1, 0, 0, 0, 0, 0, 0],
  Treble: [0, 0, 0, 0, 0, 1, 2, 4, 5, 4],
  Vocal: [-2, -1, 0, 2, 4, 3, 1, 0, -1, -1],
  Rock: [4, 3, 1, 0, -1, 0, 2, 3, 3, 2],
  Electronic: [5, 4, 1, 0, -1, 1, 2, 3, 4, 3],
  Acoustic: [2, 1, 0, 1, 2, 1, 2, 2, 1, 0],
  Classical: [0, 0, 0, 0, 0, 0, -1, -2, -2, -3],
  Podcast: [-3, -2, 0, 3, 4, 3, 1, 0, -2, -3],
};
