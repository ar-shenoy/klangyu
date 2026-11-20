# Klangyu: Product and Engineering Specification

Version 1.0 draft · 14 November 2026 · Name and brand: see 1.3 and 1.6 · Written for AI-assisted implementation (Grok) and for human developers

## 0. How to use this document

**Audience.** Two readers: an AI coding agent that builds from this literally, and human developers who review, maintain and extend it. Every requirement is therefore written to be testable and has an ID.

**Conventions**

- MUST, SHOULD, MAY follow RFC 2119 meaning.
- IDs: PB (playback), LB (library), SM (smart features), UI, PAY (payment), PRV (privacy), PERF (performance), ENG (engineering).
- Priority: **P0** blocks the v1.0 release. **P1** ships in v1.0 if on schedule, otherwise v1.1. **P2** comes after v1.0.
- Every commit and PR title starts with the requirement ID, for example `PB-03: add crossfade`.
- When this document is silent or ambiguous, use Appendix A (Default decisions), log the choice in `DECISIONS.md`, and keep going. Do not stop to ask. The only items that need a human are listed in section 17.3.

## 1. Product

### 1.1 One-liner

An Android music player for the music you already own. It understands your library: smart queues, Automix, karaoke, synced lyrics and Klangbild listening portraits, all on-device. Free to use, with an optional one-time supporter purchase.

### 1.2 Principles (tie-breakers when requirements conflict)

1. **Local-first.** Audio, analysis results and listening history never leave the phone.
2. **Nobody is left out.** Every phone gets every non-ML feature. ML features are upgrades, never prerequisites (section 2).
3. **The player comes first.** Playback must be rock solid before any smart feature ships. A smart feature that can endanger playback is off by default or removed.
4. **Fast and light.** The budgets in section 13 are release gates.
5. **Honest money.** Never block, delay or degrade playback to ask for payment (section 11).
6. **Works offline.** The only network uses are optional lyrics lookup and Play Billing.
7. **Great defaults, deep settings.** Zero configuration must already feel good.

### 1.3 Name and identifiers

**Klangyu** (stylised **Klangyü** in the logo only). Always spelled `Klangyu` in code, repositories, package names, store listings and filenames; the umlaut form is a logo treatment, never an identifier.

- **Meaning:** German *Klang* (sound, tone, resonance) plus Mandarin *yù*. The German ü and the pinyin *yu* are the same vowel, so the name is said KLANG-yü in both languages. The character 域 (yù, realm) gives the reading Realm of sound. 音域 (yīnyù) is an everyday Chinese word for the range of a voice or instrument and is the proposed Traditional Chinese display name for zh-TW (native-speaker review pending).
- **`applicationId`:** `app.klangyu.player`. It can never change after the first Play upload, so confirm it after the clearance checks below.
- **Single source of truth:** all brand strings live in `res/values/brand.xml`; `applicationId` lives in `gradle.properties`.
- **Clearance before the first public GitHub release:** search the Play Store, GitHub, the EUIPO, USPTO and Taiwan IPO trademark databases and the .com, .app, .de and .tw domains for Klangyu. The owner searched the Taiwan IPO, USPTO and EUIPO databases on 2026-11-14 and found no match for Klangyu. Still open: Play Store, GitHub handle and domain checks, and a look for similar-sounding Klang marks in music software, which matters more than exact matches.

### 1.4 Non-goals (v1)

No streaming catalogue, no downloading or ripping from any service, no user accounts, no cloud sync, no ads, no social features, no iOS. Do not add them even if they look easy.

### 1.5 Personas

- **Collector Lukas (Hamburg):** 20,000 FLAC and MP3 files from CD rips and Bandcamp purchases, across internal storage and an SD card. Wants fast scan, folder view, gapless, correct umlaut tags, ReplayGain.
- **Commuter Mei-Ling (Taipei):** rides the MRT with a mid-range phone and 4 GB RAM; Mandopop and Western playlists. Wants Automix mixes, lyrics with pinyin or zhuyin, low battery use, and search that finds songs by zhuyin or pinyin.
- **Tinkerer Jonas (Berlin):** flagship phone, loves electronic music and DJ sets. Wants Automix styles, stems, EQ and Klangbild stats.
- **Sharer Yu-Ting (Taichung):** posts music stories to LINE and Instagram. Wants Klangbild cards that look great and let her hide whatever she wants.

### 1.6 Brand and logo

**Positioning.** Hi-fi precision with playful craft. Voice: calm, precise, a little witty, never childish. Taglines: English Your realm of sound; German Dein Klangreich; Traditional Chinese 你的音域 (all three pending native review, 17.3).

**Logo concept: German letter and Chinese character in one mark**

- **Primary mark, the Seal K.** A rounded-square seal (like a 印章 stamp, familiar across Taiwan) built on an 8 by 8 grid in Bauhaus geometry (German design heritage). Inside it, a geometric uppercase K: a vertical bar for the stem and two diagonal bars for the arms, drawn as equaliser bars with rounded ends. In the lower-right corner sits the character 域 (realm) as a tiny vermilion stamp, set in Noto Sans TC Bold on the same grid. The Latin K and the Chinese 域 together carry the name.
- **Wordmark.** Klangyü in Jost Medium (open licence, Futura-like). The two dots of the ü are drawn as small vermilion circles that echo the seal. Optional second line: 音域 in Noto Sans TC.
- **Palette** (bilingual names): Tinte 墨 `#14161C` (ink), Papier `#F4F1EA`, Zinnober 朱 `#D8342C` (vermilion), Messing 銅 `#C9A24B` (brass), Nebelblau `#3C5A78`.
- **Rules:** legible at 48 px; no stroke thinner than 2 px at 48 px; works in one colour and in light and dark; no flags, national symbols or stereotypes (no dragons, pagodas, beer steins); Chinese characters in Traditional forms.
- **Assets:** adaptive icon (foreground inside the 66 dp safe circle of the 108 dp canvas, background Tinte), a monochrome layer for Android 13 themed icons, 512 px Play icon, 1024 by 500 feature graphic, 1280 by 640 GitHub social preview, SVG masters in `/branding`. The builder generates the masters as SVG from the grid; a designer may refine them before Play launch.
- **Splash:** Android 12 splash screen API with the seal; no custom animation longer than 400 ms.

## 2. Capability tiers: nobody is left out

The app classifies the phone once and enables features accordingly. A tier changes what is available, never whether the app works.

| Tier | Device | Unlocks |
| --- | --- | --- |
| Core (Tier 0) | Any device, minSdk 26 | All playback and library features, lyrics, DSP-based analysis (BPM, key, loudness, energy), smart queues built on those, beat-aware crossfade, auto-EQ, vocal-reduction karaoke, insights, themes |
| Enhanced (Tier 1) | 64-bit, 4 GB+ RAM, Android 10+ | Core plus a small audio embedding model (under 30 MB) for better mood and similarity, and personalised ranking |
| Studio (Tier 2) | 6 GB+ RAM and passes benchmark | Tier 1 plus stem separation (vocals, drums, bass, other) from an optional model pack |

Promise in the product copy: every phone gets the revolution; faster phones get more of it.

**Requirements**

- **ENG-01 (P0)** First launch runs a device probe: RAM, ABI, SoC, API level. Only Tier 1/2 candidates run a 10-second benchmark (dummy inference). Store the result as `DeviceProfile`.
- **ENG-02 (P0)** Settings > Smart features lets the user override the tier: Auto, Core only, Enhanced, Studio. Overriding upward shows a battery and heat warning.
- **ENG-03 (P0)** Every Tier 1/2 feature has a Core equivalent or a clear explanation. No dead-end screens. Example: on a Core device the Stems panel shows Vocal Reduction plus one line explaining what stems add.
- **ENG-04 (P0)** ML models are never inside the base APK. Deliver them as on-demand Play Asset Delivery packs (Tier 1 model under 30 MB, Tier 2 pack larger). Base download stays under 25 MB.
- **ENG-05 (P0)** If a model fails to load, crashes or times out, mark that feature unavailable, fall back to Core and never crash.
- **ENG-06 (P0)** Core devices analyse with DSP only. The ML module is optional at runtime behind interfaces with no-op implementations (section 4).

## 3. Feature catalogue

Each item: ID, priority, behaviour, acceptance criteria (AC).

### 3.1 Playback

- **PB-01 (P0) Gapless.** AC: no audible gap on gapless-encoded MP3 and FLAC test albums; uses encoder delay and padding metadata.
- **PB-02 (P0) Formats:** MP3, AAC/M4A, FLAC, Ogg Vorbis, Opus, WAV. AC: all play on Android 8.0 and up. (P2: ALAC, APE, WavPack via an optional FFmpeg module only if the licence check in ENG-09 passes.)
- **PB-03 (P0) Crossfade** 0 to 12 s, default off, equal-power curve. AC: never crossfades between consecutive tracks of the same album when Gapless albums is on.
- **PB-04 (P0) Audio focus.** Pause on headphone unplug, duck for notifications, pause for calls, resume only if the app paused itself.
- **PB-05 (P0) Background playback** via a MediaSession service with foreground type `mediaPlayback`; survives swiping the app away; media notification with previous, play/pause, next, seekable progress.
- **PB-06 (P0) Resume.** Restore queue, position, shuffle and repeat after process death or reboot (toggle in Settings). AC: kill the app mid-song, reopen, position within 1 s.
- **PB-07 (P0) Loudness normalisation:** off, track, album. Uses ReplayGain tags, falls back to computed LUFS from analysis (SM-01).
- **PB-08 (P1) Speed** 0.5x to 2.0x with a pitch-preserve toggle.
- **PB-09 (P0) Sleep timer:** 5 to 120 min, end of track, end of album; 10 s fade-out; notification action to cancel or extend.
- **PB-10 (P0) Hardware controls:** headset buttons, Bluetooth AVRCP metadata, lock-screen controls. **(P1)** Android Auto browse tree: Recent, Playlists, Albums, Artists.
- **PB-11 (P0) Equaliser:** 10-band graphic plus preamp and bass boost, implemented in our own DSP chain (platform AudioEffect behaves inconsistently across OEMs). Fallback to the platform equaliser if the DSP chain is disabled.
- **PB-12 (P1) Per-output EQ profiles:** speaker, wired, and each paired Bluetooth device, switched automatically.
- **PB-13 (P1) Skip silence**, off by default.

### 3.2 Library

- **LB-01 (P0) Scan** via MediaStore, plus optional folder add through the Storage Access Framework for SD cards. Incremental rescan on change. AC: 10,000 tracks indexed in under 30 s on a mid-range device; UI stays usable during the scan.
- **LB-02 (P0) Tags and art:** ID3v1/v2, Vorbis comments, MP4 atoms; multi-value artists, album artist, disc and track numbers, compilation flag; embedded art.
- **LB-03 (P0) Browse:** Songs, Albums, Artists, Genres, Folders, Playlists, Recently added. Sort options and A to Z fast scroller.
- **LB-04 (P0) Search:** instant, case and diacritic folding, prefix plus trigram matching, over title, artist, album, genre and folder. AC: results in under 100 ms on 20,000 tracks.
- **LB-05 (P0) Playlists:** create, rename, delete, drag to reorder, multi-select add, duplicates allowed. **(P1)** M3U8 import and export.
- **LB-06 (P0) Favourites** (heart), play count, last played.
- **LB-07 (P0) Queue:** play next, add to queue, reorder, remove with Undo snackbar, save as playlist.
- **LB-08 (P1) Exclusions:** hide folders; ignore tracks shorter than 30 s by default (configurable) to skip call recordings and voice notes.
- **LB-09 (P2) Tag editor** using scoped-storage write requests.
- **LB-10 (P1) Artwork:** embedded, then folder image, then a generated gradient from the album's dominant colour. No network art fetching.

### 3.3 Smart features

- **SM-01 (P0) Analysis pipeline** (section 7): BPM, beat grid, key, loudness, energy, intro and outro points.
- **SM-02 (P0) Smart Queue.** From any song, Start smart queue builds the next 30 tracks from analysis similarity plus tempo and key compatibility (Camelot wheel). Modes: Similar, Energy up, Energy down, Discover (less played). AC: never repeats a track within a queue; works with partially analysed libraries by using only analysed tracks and saying so.
- **SM-03 (P0) Automix (core).** Continuous, beat-aware mixing between tracks, the successor of plain crossfade; specified in 7.4. Core ships the Subtle style: a beat-aligned blend of about 6 s with automatic fallback to a plain short crossfade or no overlap when beat confidence is low. AC: on click-track fixtures at 120 and 124 BPM the beats align within 10 ms across the overlap; no glitch and no silence gap over 50 ms at the seam.
- **SM-03a (P1) Styles and techniques:** Club, Radio and Chill styles; bass swap, filter sweep, echo out, cut on downbeat.
- **SM-03b (P1) Phrase alignment:** transitions start and end on 8-bar phrase boundaries where detectable.
- **SM-03c (P1) Tempo ramp:** time-stretch the incoming track to the outgoing tempo, then ease back.
- **SM-03d (P1) Automix journey:** queue ordering that walks tempos and keys smoothly (Steady, Build, Wind-down).
- **SM-03e (P2) Transition preview and dual-deck view.**
- **SM-04 (P1) Context mixes:** Morning, Focus, Workout, Night. Inputs: time of day, audio output route, manual activity chips. No activity-recognition permission in v1.
- **SM-05 (P0) Karaoke.** Vocal Reduction on every tier (centre-channel cancellation with bass preserved; shows a quality hint on mixes with centred bass). **(P1, Tier 2)** Stems with per-stem volume sliders.
- **SM-06 (P0) Lyrics.** Source order: embedded USLT/SYLT, sidecar `.lrc`, then optional online lookup (LRCLIB), cached locally. Synced line highlight, tap a line to seek, offset adjust of plus or minus 5 s.
- **SM-07 (P1) Insights (the data behind Klangbild, see 3.5):** top tracks and artists, listening hours, time-of-day heatmap, streaks, all computed locally. Shareable image card generated on-device.
- **SM-08 (P1) Personalisation:** skips and completions update a small local ranking model. Settings has Reset personalisation.
- **SM-09 (P2) Mood map:** 2-D explorer of the library by energy and valence (Tier 1).
- **SM-10 (P2) Natural-language search** such as calm piano. R&D only; not in v1.

### 3.4 Extras

- **EX-01 (P1)** Home-screen widgets (2x2 and 4x1) with controls, built with Glance.
- **EX-02 (P1)** Share a track file via the system share sheet.
- **EX-03 (P1)** Themes: Material You dynamic colour, plus six bundled palettes (two are Supporter-only, see 11).

### 3.5 Klangbild: creative sharing (P1)

Klangbild (German for sound picture) turns a person's listening into shareable art and stories, computed entirely on-device. The term Wrapped belongs to another company and is never used in the app, the store listing or the code.

- **KB-01 (P1) Reports:** weekly, monthly, yearly (Jahresklang) and custom range, generated from `play_event` and `analysis_result`. The yearly report is available from 1 December and as year-to-date at any time. At least 20 plays in the period are needed. Keep `play_event` for at least 400 days; Settings > Storage can clear it.
- **KB-02 (P1) Story cards:** 8 to 10 swipeable 9:16 cards: total listening time; top artist; top 5 tracks; time-of-day ring (24 h); longest streak; new artists discovered; Klang signature (average BPM, favourite key and energy curve, which only a player with analysis data can show); Automix highlights (number of mixes and the best-matched pair); closing card with the Klangbild art.
- **KB-03 (P1) Generative art:** deterministic artwork from the user's data. Each track played becomes a mark: BPM sets its position, key sets its hue (24 hues mapped to the Camelot wheel), energy sets its size, play count sets its opacity. Four free styles: Ring (like a record), Wave, Seal (stamp-like, ties to the brand) and Constellation. Two extra styles are Supporter extras. The same data always gives the same image.
- **KB-04 (P1) Share:** export PNG at 1080x1920 (story), 1080x1350 (post) and 1080x1080 (square) through the system share sheet, so LINE, Instagram, WhatsApp, Telegram and others work with no SDKs. A small Klangyu mark sits in a corner and Supporters can switch it off. The share text carries a plain-language caption of the stats for accessibility. No tracking links.
- **KB-05 (P1) Privacy before sharing:** nothing leaves the device until the user taps Share after a live preview. Toggles: hide track titles, hide artist names, blur album art, stats only. Default: titles and artists shown, art not blurred.
- **KB-06 (P1) Single-track card:** from Now Playing, share a card with art, title, artist and BPM, key and energy chips. Lyrics and audio are never included.
- **KB-07 (P1) Widget:** Klangbild of the week on the home screen.
- **KB-08 (P2) Animated export:** a 15 s MP4 story (H.264 through MediaCodec), silent by design because music is copyrighted.
- **KB-09 (P2) Klang Duel:** compare with a friend without any server. A QR code or small file holds aggregate stats that the sender previewed and approved (top artists and genre mix, with a timestamp). The receiving app computes overlap and a compatibility score and renders a duel card.
- **KB-10 (P2) Poster export:** print-ready A3 and A2 PDF or PNG of the yearly Klangbild.
- **Implementation:** a `:feature:klangbild` module; rendering with Compose to bitmap using bundled open fonts (Jost, Noto Sans TC); a yearly report in at most 2 s on Mid; results cached in `klangbild_report` (id, period, generatedAt, json). Playful labels such as Night Owl come only from hour-of-day statistics, never from psychological inference.

### 3.6 Language and text handling (Germany and Taiwan first)

- **LB-04a (P1) Search folding:** German ä, ö, ü and ß match a, o, u and ss, and also ae, oe and ue (Mueller finds Müller and the reverse). Chinese: search by Hanzi, toneless Hanyu Pinyin, Zhuyin initials, and Traditional and Simplified equivalence (周杰倫 matches 周杰伦). Use the ICU `Transliterator` built into Android; no extra dependency.
- **LB-03a (P1) Locale-aware sorting and index:** German collation (DIN 5007-1), Traditional Chinese (Taiwan) in Zhuyin order, with a setting for Zhuyin, Pinyin or stroke count. The fast scroller shows Zhuyin initials (ㄅ ㄆ ㄇ) for zh-TW and A to Z for German and English. Use ICU `AlphabeticIndex` and `Collator`.
- **LB-02a (P1) Tag encoding repair:** old MP3 tags often show garbled text because they were stored in legacy encodings (Big5, GBK, Windows-1252). Detect likely mojibake with heuristics, offer a per-track and per-folder Tag encoding override, and never write changes to the file.
- **SM-06a (P2) Lyrics reading aid:** optional pinyin or zhuyin above Chinese lyric lines. Pinyin through ICU; zhuyin needs a dictionary that passes the ENG-09 licence gate (verify any share-alike source first).
- **Typography:** system fonts by default; Noto Sans TC (OFL) bundled only for share cards. Test German compounds of 30 or more characters and mixed CJK and Latin titles for truncation and wrapping.
- **Dates and numbers:** follow the device locale (Gregorian calendar in zh-TW by default).
- **Store listings:** English, German and zh-TW, written natively and reviewed by native speakers (17.3).

## 4. Architecture

**Style:** single-activity, Jetpack Compose, unidirectional data flow (ViewModel exposes `StateFlow<UiState>`; UI sends events).

**Modules**

- `:app` wiring, navigation, Application class, DI root.
- `:core:model`, `:core:common`, `:core:database` (Room), `:core:datastore`, `:core:designsystem`, `:core:testing`.
- `:feature:onboarding`, `:library`, `:player`, `:search`, `:smart`, `:lyrics`, `:insights`, `:settings`, `:support`.
- `:audio:engine` (Media3 service, DSP chain), `:audio:analysis` (C++ library plus Kotlin API), `:audio:ml` (model runtime wrapper, model manager).
- `:billing` (Play Billing wrapper).

**Rules (enforced by a Gradle dependency check in CI)**

1. Feature modules depend on `:core:*` and audio **interfaces** only, never on each other.
2. `:audio:ml` is reached only through `FeatureExtractor` and `StemSeparator` interfaces. No-op implementations ship in Core, so Tier 0 never loads ML code.
3. Domain layer (use cases) is pure Kotlin with no Android imports.

**Processes and threads**

- One foreground `MediaLibraryService` hosts ExoPlayer and the DSP chain. The UI controls it through `MediaController`.
- Analysis runs in WorkManager workers on a background dispatcher, never in the player service.
- Room and DataStore are the single source of truth; the UI never reads MediaStore directly.

**Data flow:** MediaStore scan > `Track` rows > analysis queue > `AnalysisResult` rows > Smart Queue and Automix planners > player queue.

## 5. Tech stack (pin everything in `libs.versions.toml`; use latest stable at build time)

- Kotlin, Gradle Kotlin DSL with version catalog, JDK 17.
- minSdk 26. compileSdk and targetSdk: whatever Play currently requires for new apps (check Play Console; expected to be API 36 by late 2026).
- Jetpack Compose with Material 3, Navigation Compose (type-safe routes), Coil, Glance, Paging 3.
- Media3 (ExoPlayer, MediaSession, MediaLibraryService) with a custom `AudioProcessor` chain.
- Hilt, Room, DataStore, WorkManager, Kotlin Coroutines and Flow.
- Native: C++17 via CMake, KissFFT or pffft (permissive), own beat, tempo and key code. Native libraries MUST be built with 16 KB page-size alignment (NDK r28 or newer), required by Play for current targets.
- ML runtime: LiteRT (default) or ONNX Runtime Mobile; decide in M3 (Appendix A).
- Billing: Google Play Billing Library, latest.
- Test: JUnit, MockK, Turbine, Robolectric, Compose UI tests, Macrobenchmark, Baseline Profiles.
- Quality: ktlint, detekt, Android Lint, dependency licence report.
- **No third-party analytics, ads or attribution SDKs** in v1.
- **ENG-09 (P0) Licence gate.** Every library and model needs a licence entry in `docs/licences.md` before merge. Allowed: Apache-2.0, MIT, BSD, ISC, CC-BY. Banned: GPL, AGPL, and any non-commercial licence (CC-BY-NC), because the app has a paid unlock. LGPL only as a dynamically linked, replaceable library after human approval.

## 6. Data model (Room, schema exported and versioned)

**track**: id (PK, MediaStore id), uri, path, title, titleSort, artistId, albumId, albumArtist, genre, year, trackNo, discNo, durationMs, bitrate, sampleRate, format, sizeBytes, dateAdded, dateModified, folderId, isHidden, hasEmbeddedLyrics, replayGainTrack, replayGainAlbum, playCount, lastPlayedAt, isFavourite, analysisState (NONE, QUEUED, RUNNING, DONE, FAILED), analysisVersion.

**artist**: id, name, nameSort, trackCount. **album**: id, title, albumArtist, year, trackCount, artUri, dominantColor.

**folder**: id, path, treeUri, isExcluded.

**analysis\_result** (1:1 with track): trackId, bpm, bpmConfidence, beatGridOffsetMs, firstDownbeatMs, keyRoot (0 to 11), mode (MAJOR or MINOR), camelot (e.g. 8A), loudnessLufs, truePeakDb, energy (0 to 1), brightness (0 to 1), danceability (0 to 1, heuristic), introEndMs, outroStartMs, embedding (BLOB, nullable, Tier 1), source (DSP or ML), computedAt.

**playlist**: id, name, createdAt, updatedAt, isSmart. **playlist\_entry**: id, playlistId, trackId, position, addedAt.

**queue\_state** (single row): trackIds (ordered), currentIndex, positionMs, shuffle, repeatMode, savedAt.

**play\_event**: id, trackId, startedAt, playedMs, completed (bool), skippedAtMs (nullable), outputRoute, hourOfDay.

**lyrics\_cache**: trackId, source, isSynced, body, offsetMs, fetchedAt.

**eq\_profile**: id, routeKey (SPEAKER, WIRED, BT:\<address-hash>), bands (10 floats), preamp, bassBoost, enabled.

**device\_profile** (single row): tier, ramMb, abi, apiLevel, benchmarkMs, userOverride.

**Settings** live in DataStore (Appendix B), not Room.

**Migrations:** every schema change ships with a tested migration; destructive migration is forbidden for `playlist`, `playlist_entry`, `play_event` and `eq_profile` (user data).

**Indexes:** track(titleSort), track(artistId), track(albumId), track(folderId), track(dateAdded), play\_event(trackId), play\_event(startedAt). Full-text search table `track_fts` (title, artist, album, genre, folder) with a diacritic-folding tokenizer.

## 7. Audio engine and analysis

### 7.1 Playback engine

- **Two-deck design (default decision).** Two ExoPlayer instances (Deck A and Deck B) inside one `MediaLibraryService`. Gapless works inside each deck; crossfade and Automix are done by an `AutomixController` that ramps deck volumes. Only one `MediaSession` is exposed to the system and it reflects whichever deck is current.
- **DSP chain order:** decode > loudness gain (PB-07) > 10-band EQ (cascaded biquads) > bass boost (low shelf) > vocal reducer (optional) > stem mixer (optional, Tier 2) > lookahead limiter (5 ms, always on) > output. Internal format is 32-bit float stereo, 44.1 or 48 kHz.
- **Audio attributes:** usage media, content type music. Handle audio focus and becoming-noisy in the player. Wake mode local.
- **Error policy.** A corrupt or unsupported file: skip to the next track, show one snackbar, flag `track.isHidden` as unplayable. After 3 consecutive failures, pause and show a message. Never loop on a bad file.
- **Persistence.** Write `queue_state` every 5 s while playing and on every pause, seek and track change.
- **Output.** Bit-perfect USB DAC mode is P2; not in v1.

### 7.2 Analysis pipeline (SM-01)

1. **Trigger.** Every new or changed track is queued after a scan. One unique WorkManager chain named `analysis`. Constraint: battery not low. Setting Analyse only while charging is off by default. Order: current and next queued tracks first, then recently added, then the rest.
2. **Decode.** `MediaCodec` to PCM, downmix to mono, resample to 22,050 Hz. Analyse at most the first 8 minutes of a track.
3. **Features (native C++):**
   - Spectral flux onset envelope (STFT 2048 window, 512 hop, log-compressed).
   - Tempo from autocorrelation plus comb filtering with a prior around 120 BPM to reduce octave errors.
   - Beat tracking by dynamic programming (Ellis 2007 approach). `bpmConfidence` = peak-to-mean ratio of the tempo curve.
   - Downbeat: assume 4/4; choose the beat phase with the highest accumulated low-band energy.
   - Key: 12-bin chroma, Krumhansl-Schmuckler profiles, confidence from the correlation margin; map to Camelot notation.
   - Loudness: ITU-R BS.1770 K-weighting, integrated LUFS and true peak (4x oversampling).
   - Energy (0 to 1): blend of loudness, onset density and spectral centroid, normalised by percentile rank across the library, recomputed when the library changes by more than 10%.
   - Brightness: normalised spectral centroid. Danceability: beat strength times tempo stability (heuristic, labelled as such internally).
   - Intro end and outro start: first and last points where RMS exceeds minus 30 dBFS relative to the track's loudness.
4. **Validation.** BPM outside 50 to 220 or any NaN: store with confidence 0 and do not use for transitions.
5. **Budget.** At most 0.1x realtime on a mid-range phone, at most 40 MB working memory, concurrency 1 (2 while charging).
6. **Versioning.** `analysisVersion` integer; bump it to re-analyse lazily in the background.
7. **Failures.** Two failures mark the track FAILED; retry only on version bump or manual Re-analyse.
8. **Progress UI.** Settings > Library shows N of M analysed with Pause, Resume and Analyse now.

**Accuracy targets (release gate, golden set of 50 tracks with known BPM and key):** BPM within 2% for at least 80% of tracks (counting half and double tempo as a miss); key exact or Camelot-adjacent for at least 65%. Fixtures are CC0 or generated (click tracks, tone sequences). Never commit copyrighted audio to the repo.

### 7.3 Smart Queue algorithm (SM-02)

For seed track *s* and candidate *c*, distance:

`d = 0.25*|dEnergy| + 0.10*|dBrightness| + 0.25*tempoDist + 0.20*keyDist + 0.10*genreMismatch + 0.10*embeddingDist`

- `tempoDist` = smallest of |log2(bpm\_c / bpm\_s)|, |log2(bpm\_c / (2*bpm\_s))|, |log2(bpm\_c / (0.5*bpm\_s))|, scaled to 0 to 1.
- `keyDist` = Camelot wheel steps divided by 6 (same key 0, adjacent 1/6 and so on).
- `genreMismatch` is 0 or 1. `embeddingDist` is cosine distance and exists only on Tier 1 and up; when absent, redistribute its weight proportionally to the others.
- **Modes.** Similar: as is. Energy up: target energy rises from the seed value by 0.3 across the queue. Energy down: falls by 0.3. Discover: multiply score by a penalty that grows with `playCount`.
- **Construction.** Greedy with randomness: take the 10 closest candidates, sample by softmax (temperature 0.3), exclude the last 50 played tracks, never the same artist twice in a row, at most 3 per artist in 30 tracks.
- **Personalisation (SM-08).** Multiply by a learned factor from online logistic regression over the same features. Labels: skip within 20 s negative, completion positive, favourite strongly positive. Cap its influence at 30% of the score so the cold start behaves.
- **Partial libraries.** Use analysed tracks only and show a banner: Analysing library, 62% done.

### 7.4 Automix (SM-03)

Automix turns playback into a continuous, DJ-style mix of the user's own library. It replaces and extends the earlier smart transitions: every transition is planned from the analysis data (7.2) and rendered by the two-deck engine (7.1).

**Modes** (Settings > Automix): Off; Smart sessions (default; applies in Smart Queue and Mixes sessions); Always.

**Styles**

- **Subtle** (default): beat-aligned blend of about 6 s.
- **Club (P1):** 16 to 32 beats, phrase-aligned, with bass swap.
- **Radio (P1):** 2 to 3 s, a quick blend or a cut on the downbeat.
- **Chill (P1):** 10 to 12 s soft blend with a low-pass sweep on the outgoing track.

**Techniques the planner can choose** (per-deck filters sit before the master mixer, after loudness gain):

| Technique | What happens | Used when |
| --- | --- | --- |
| Blend | Equal-power crossfade with downbeats aligned | Tempos within 8%, keys compatible |
| Bass swap | Incoming track starts with its low end cut; at a phrase boundary the lows swap between decks | Club style, tempos within 8%, keys within 1 Camelot step |
| Filter sweep | Outgoing low-pass sweep from 20 kHz to 300 Hz over the fade | Keys clash (3 or more steps) or Chill style |
| Echo out | Outgoing tail feeds a quarter-beat delay, three repeats, then cut | Tempo gap 8% to 20% with low confidence, or a key clash |
| Cut on downbeat | Hard cut on a bar line | Radio style, both beat grids confident |
| Tempo ramp (P1) | Incoming track is time-stretched from the outgoing tempo to its own over 8 beats | Tempo gap 8% to 20%, both confidences at least 0.7 |

**Planner, for outgoing track A and incoming track B**

1. Score compatibility from the tempo ratio (counting half and double tempo), Camelot key distance, energy difference and both beat confidences.
2. Choose technique and length from the table and the style. If both confidences are at least 0.6 and tempos differ by 8% or less, align B's first downbeat to a downbeat of A.
3. Exit point: the last phrase boundary at or after `outroStart` minus the fade length (before phrase detection ships, the nearest downbeat). Entry point: B's first downbeat; for Radio style, the end of B's intro.
4. Plan while the current track still has at least 30 s left; planning costs at most 50 ms of CPU.
5. If anything fails (low confidence, alignment off by more than one bar, decoder underrun), fall back to a plain crossfade of at most 3 s, or no overlap. A wrong mix is worse than none.

**Phrase detection (P1):** count bars from the first downbeat, set phrase boundaries every 8 bars, refine to the nearest low-band energy change.

**Never apply Automix to:** gapless albums played in album order, live albums, tracks tagged as DJ mixes or longer than 20 minutes, podcasts and audiobooks (genre or folder rules), tracks shorter than 60 s.

**Automix journey (SM-03d, P1):** in Automix sessions the Smart Queue (7.3) adds a flow constraint: tempo changes of at most 6% per step, key moves of one Camelot step or to the relative major or minor, and an arc of Steady, Build (energy up) or Wind-down (energy down).

**Controls:** the Now Playing Automix chip shows the next transition, for example: In 0:23, bass swap into the next track, 124 to 126 BPM, 8A to 9A. Actions: Skip transition (plain cut to the next track) and Not a good mix (stores a fallback to plain crossfade for that pair and feeds personalisation). Dual-deck view and transition preview are P2 (SM-03e).

**Settings keys (Appendix B):** `automixMode` (OFF, SMART\_SESSIONS, ALWAYS), `automixStyle` (SUBTLE, CLUB, RADIO, CHILL), `automixHarmonicOnly` (bool, false), `automixJourney` (STEADY, BUILD, WIND\_DOWN).

**Testing:** an offline `AutomixRenderer` renders any pair to WAV for review. Automated tests use click tracks at 120, 124 and 128 BPM and assert beat alignment within 10 ms across the overlap. Release gate: in a 100-pair listening set, testers flag at most 5 transitions as bad. Fallbacks are counted locally for a debug screen. The decks add at most 3% CPU on Mid.

Automix and plain crossfade share one controller. With Automix off, the crossfade length from PB-03 applies and no beat analysis is used.

### 7.5 Karaoke and lyrics

- **Vocal Reduction (all tiers).** Compute side = (L - R) / 2 and send it to both channels; mix back the original below 150 Hz to keep the bass. Strength slider 0 to 100%. If the track is effectively mono (correlation above 0.98), show: This song is mono, vocal reduction will not work.
- **Stems (Tier 2, P1).** Separation is done as a cancellable background job on demand (Prepare stems), not in real time. Process in 10 s chunks with 1 s overlap. Cache stems as Opus in app-private storage with an LRU limit (default 2 GB, adjustable). Player mixes cached stems with four sliders and Reset.
- **Lyrics parsing.** Support LRC `[mm:ss.xx]` lines and optional enhanced word tags `<mm:ss.xx>`; detect UTF-8 and UTF-16; read embedded USLT and SYLT frames.
- **Online lookup.** LRCLIB `GET /api/get` with track name, artist, album and duration. Send a descriptive User-Agent (app name and version). Timeout 5 s, no retry on 404, cache a miss for 7 days. Only title, artist, album and duration are sent. Ask for consent the first time lyrics are opened; the choice is stored and changeable in Settings.

## 8. ML and models

- **Scope decision for v1.** No supervised mood classifier. Mood-style labels (Calm, Energetic, Dark, Bright) come from DSP proxies: energy, brightness, mode and tempo. This avoids models trained on non-commercial datasets and keeps Core and Enhanced consistent.
- **Tier 1 embedding (v1.1).** A small audio embedding network (target under 30 MB) used only for similarity. Candidate: YAMNet (Apache-2.0) embeddings reduced to 64 dimensions by PCA, or a small model trained in-house on licensed data. Output stored in `analysis_result.embedding`.
- **Tier 2 stems (v1.2).** Candidates: Open-Unmix (MIT), Demucs (MIT code; verify the weights licence), Spleeter (MIT). Quantise to fp16 or int8. Acceptance: a 4-minute track separates in at most 3x its duration on benchmark-passing devices, with the app showing progress and a Cancel button.
- **Model manager.** On-demand Play Asset Delivery packs; SHA-256 manifest check; shows installed size; Delete model button; versioned so a new model triggers lazy re-analysis. With no model installed, ML features show a Get Enhanced pack button with the size. No dead ends (ENG-03).
- **Runtime.** CPU with XNNPACK by default. GPU and NNAPI delegates only for allow-listed device models after validation, because OEM drivers are a common crash source. Run inference in a separate worker, never in the player service.
- **Thermal and battery.** Pause heavy jobs at thermal status severe or battery below 15%; resume automatically.
- **Licence gate.** Section 5, ENG-09 applies to every model and to its training data statement.

## 9. UI and UX specification

### 9.1 Design language

Material 3 with Material You dynamic colour by default; Now Playing takes its accent from album art. Themes: Light, Dark, Auto, AMOLED black. Shared-element transition from mini-player to Now Playing. Respect the system animation scale: at 0 there are no animations.

### 9.2 Navigation

Bottom bar with four items: **Home, Library, Search, Mixes**. Settings opens from the gear in the Home top bar. A persistent mini-player sits above the bottom bar; tap or swipe up expands Now Playing as a full-screen sheet; swipe down or Back collapses it. Back from a top-level tab exits the app only from Home.

### 9.3 Screens

**S01 Onboarding (4 steps, skippable except permission).**

1. Welcome: three value cards (Your music, smarter / Private on your phone / Free to use).
2. Permission: READ\_MEDIA\_AUDIO on Android 13 and up, READ\_EXTERNAL\_STORAGE on 12 and below, with a plain-language reason. POST\_NOTIFICATIONS is requested at first playback, not here. If denied: explain, offer Open settings and Add a folder instead (SAF).
3. Device check: friendly result card, for example: Your phone gets: smart queues, Automix, lyrics, karaoke. Extra with the Enhanced pack: smarter similarity. No jargon, no tier numbers.
4. Scan: progress and count; the user may continue once 100 tracks are found.

**S02 Home.** Sections: Continue listening (resume card), Mixes row (Morning, Focus, Workout, Night, Discover), Recently added, Most played this month, Favourites. Empty library: illustration, Add music and Add a folder buttons, and a one-line how-to.

**S03 Library.** Tabs: Songs, Albums, Artists, Genres, Folders, Playlists. App bar: sort, list or grid toggle. Fast scroller. Long-press starts multi-select with an action bar: Play, Play next, Add to queue, Add to playlist, Favourite, Share, Hide.

**S04 Album, Artist, Playlist detail.** Header with art and blurred backdrop; buttons Play, Shuffle, Smart queue; track list with overflow menu per row.

**S05 Now Playing.** Large art (swipe left or right to change track), title and artist (tap artist to open it), seek bar with timestamps (P1: waveform drawn from stored low-resolution peaks), primary controls (shuffle, previous, play or pause, next, repeat), secondary row: Lyrics, Queue, EQ, Sleep timer, Karaoke, More. An info chip shows, for example, 124 BPM, 8A, High energy, and opens a small explanation. Lyrics, Queue and Karaoke open as bottom sheets.

**S06 Search.** Field autofocused; recent searches stored locally with a Clear all; results grouped by Songs, Albums, Artists, Playlists, Folders; distinct empty and no-result states.

**S07 Mixes.** Cards for each context mix and for Smart Queue builder (seed picker, mode chips). Shows the analysis progress banner when relevant.

**S08 Insights (P1).** Cards: listening time, top artists, top tracks, time-of-day heatmap, streak; Share card button renders an image locally. Empty state until 20 plays are recorded.

**S09 Equaliser.** 10 sliders, preamp, bass boost, preset picker (Flat, Bass, Treble, Vocal, Rock, Electronic, Acoustic, Classical, Podcast), per-output profile toggle, Reset.

**S10 Settings.** Groups: Playback, Library, Smart features, Lyrics, Appearance, Storage, Support, About. Full catalogue in Appendix B.

**S11 Support screen.** See section 11.

**S12 About.** Version and build, Open-source notices screen, Privacy policy link, Send feedback (email intent with device info the user can review before sending), Rate on Play.

### 9.4 Required states

Every list or screen implements four states: Loading (skeleton, never a blank screen), Empty (explains why and what to do), Error (plain message with Retry) and Content. Pull-to-refresh on Library triggers a rescan.

### 9.5 Accessibility (release gate)

Content descriptions on every icon button; minimum touch target 48 dp; contrast at least 4.5:1; layouts survive font scale 200%; no meaning by colour alone; custom actions on the seek bar for TalkBack; logical focus order; light haptics with an off switch. Run the Accessibility Scanner and fix all errors before release.

### 9.6 Copy rules

Plain, friendly, short. No hardcoded strings: everything in `strings.xml` with plurals. Error messages say what happened and what to do next. Never blame the user.

### 9.7 Localisation

English, German (de) and Traditional Chinese for Taiwan (zh-TW) ship in v1.0 and are equally first-class. Layouts must cope with German strings that run about 30% longer and with CJK text (no italics, correct line breaking). RTL-safe layouts and locale-aware numbers and durations stay required. The builder drafts de and zh-TW strings; native speakers review them before release (HUMAN\_TODO.md). The product terms Automix and Klangbild are never translated. Text handling rules are in 3.6.

### 9.8 Notification, widgets, Android Auto

- **Notification:** art, title, artist, previous, play or pause, next, and a Close action; progress bar; works on lock screen.
- **Widgets (P1):** 2x2 (art, title, play or pause, next) and 4x1 (title, previous, play or pause, next). Tap opens the app.
- **Android Auto (P1):** media browse tree with Recent, Playlists, Albums, Artists, Mixes; large touch targets; no keyboard input; voice search through `onPlayFromSearch`.

## 10. Permissions, privacy and data handling

### 10.1 Permissions (nothing else may be added without a DECISIONS.md entry)

| Permission | Why | When requested |
| --- | --- | --- |
| READ\_MEDIA\_AUDIO (Android 13+), READ\_EXTERNAL\_STORAGE (maxSdk 32) | Find and play the user's music | Onboarding step 2 |
| POST\_NOTIFICATIONS (Android 13+) | Media notification | First playback |
| FOREGROUND\_SERVICE, FOREGROUND\_SERVICE\_MEDIA\_PLAYBACK | Background playback | Install-time |
| WAKE\_LOCK | Keep playing with screen off (ExoPlayer) | Install-time |
| INTERNET, ACCESS\_NETWORK\_STATE | Optional lyrics lookup, Play Billing | Install-time |
| BLUETOOTH\_CONNECT (Android 12+) | Per-device EQ profiles (PB-12) | Only when the user turns that feature on |

**Never request:** location, contacts, microphone, camera, `MANAGE_EXTERNAL_STORAGE`, usage-access, accessibility.

### 10.2 Privacy requirements

- **PRV-01 (P0)** Music files, analysis data, play history and lyrics cache never leave the device. The only outbound requests are the optional lyrics lookup (section 7.5) and Google Play Billing.
- **PRV-02 (P0)** No accounts, no sign-in, no advertising ID, no third-party SDKs that make network calls.
- **PRV-03 (P0)** Crash data comes from Play Console Android vitals only. A manual Send feedback email lets the user review what is attached.
- **PRV-04 (P0)** Data safety form: fill in honestly. Treat the lyrics lookup (artist, title, album, duration sent to a third party) as data shared unless Play's current guidance clearly says otherwise. A human verifies the final form (17.3).
- **PRV-05 (P0)** Privacy policy hosted at a public URL (GitHub Pages is fine). It must state what is stored locally, the lyrics lookup, billing by Google, contact email, and how to delete data (Settings > Storage > Clear all data, or uninstall).
- **PRV-06 (P1)** Auto Backup: include playlists, favourites, play history and settings. Exclude caches, lyrics cache, stems and models via `dataExtractionRules`. This gives users free restore on a new phone with no cloud sync of our own.
- **PRV-07 (P0)** Export and import playlists and settings as a JSON file.
- **PRV-08 (P0)** The app is for general audiences aged 13 and up, not directed at children. No content moderation features are needed because the app plays only the user's own files.
- **PRV-09 (P0)** The app has no download, ripping or piracy features, and store copy never suggests them.

## 11. Monetisation: free forever, support if you love it

Intent: the WinRAR model. The whole app works for everyone. A polite, rare prompt asks people who clearly use the app to support it once. Honest expectation for planning: only a small share of users will pay, so keep running costs near zero (which local-first already does).

### 11.1 Products (Play Console, one-time)

- `supporter` (non-consumable). Unlocks Supporter extras (below). Default price US$4.99 with Play regional pricing, confirmed by the owner (17.3).
- `tip_small`, `tip_medium`, `tip_large` (consumable). Pure thank-you tips; unlock nothing extra. Defaults US$1, US$3, US$7, custom rate and payment above $7.

### 11.2 Supporter extras (cosmetic and convenience only)

Two extra theme palettes, alternate launcher icons, a Supporter badge in About, extra Insights share-card styles, optional name in the credits list. **PAY-01 (P0): no core, smart, playback or ML feature is ever locked behind payment. No trial period, no expiry, no ads.**

### 11.3 The support prompt (PAY-02, P0)

**Eligible when all are true:** at least 7 days since first launch, at least 5 hours of total play time, not a Supporter, user has not chosen Don't ask again.

**Frequency:** first prompt when eligible; then at most once every 10 days; after 3 dismissals, at most once every 20 days; never more than once per app session.

**Where and how:** a bottom sheet over Home, only after a cold start that lands on Home. It is dismissed by swipe, Back or tapping outside, and any of these counts as Not now.

**Never:** during or while starting playback, over Now Playing, in onboarding, in error states, in the Android Auto interface, in widgets or notifications, within 3 seconds of launch. No countdown or forced wait before a button works. No fake urgency, no guilt copy, no dark patterns, no reduced sound quality, no playback pauses.

**Copy (strings, editable):**

- Title: Enjoying Klangyu?
- Body: It is free and always will be. If it has earned a place on your phone, you can support its development with a one-time contribution. Supporters also get extra themes and app icons.
- Buttons: Support (primary), Not now, Don't ask again.

**The Support screen (S11)** is always reachable from Settings > Support, even for people who chose Don't ask again. It shows the products with local prices, a short honest note on what the money does, Restore purchases, and non-monetary ways to help: Rate on Play, Share the app, Report a bug.

### 11.4 Billing implementation (PAY-03, P0)

- Play Billing Library (latest). Query product details at app start and when S11 opens.
- **Acknowledge** every non-consumable purchase within 3 days (unacknowledged purchases are refunded automatically). **Consume** consumables after granting.
- Handle pending purchases; show Pending and grant only when the purchase state is purchased.
- Call `queryPurchasesAsync` at each app start to restore. Cache the entitlement in DataStore so Supporter extras work offline; re-check when online. A refunded or voided purchase removes the entitlement at the next check.
- No server-side verification in v1. The only things at stake are cosmetics, so this risk is accepted.
- **PAY-04 (P0)** If Billing is unavailable (no Play services, other app store, sideload), hide purchase UI entirely and show only the non-monetary support options. Everything else works.
- **PAY-05 (P0)** Do not link to outside payment methods (PayPal, Ko-fi, UPI links) inside the Play build. Play requires Play Billing for in-app digital items and the rules for linking out vary by region and change often. A human verifies current policy before any exception (17.3).
- Entitlement is a single `isSupporter` flag read through a `SupporterRepository`. It is the only place that knows about billing.

## 12. Play Store compliance and release

### 12.0 Release strategy: GitHub first, Play Store second

This section supersedes the order in 12.3 and 16. Phase 1 is the public GitHub release. Phase 2 is the Play Store submission, once the app is finished and stable.

**Phase 1: GitHub (v1.0.0 at the end of M5)**

- **Repository:** public `klangyu` repository; default branch main with branch protection (pull request and green CI required); Issues and Discussions on; issue templates (bug, feature, translation), pull request template, `CODEOWNERS`, `SECURITY.md` (private vulnerability reporting), `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`.
- **Licence:** a human decision before the first public push (17.3). Recommended default: GPL-3.0-or-later, so clones must stay open; the ENG-09 rules already allow Apache, MIT and BSD code, which is GPL-compatible. The licence does not cover the name and logo: add `TRADEMARKS.md` and keep logo files in `/branding` with their own all-rights-reserved notice.
- **Build flavours:** `github` and `play`, one `applicationId` (`app.klangyu.player`) so builds from both sources can upgrade each other when signed with the same key. The `play` flavour contains Play Billing and loads model packs through Play Asset Delivery. The `github` flavour contains no Play libraries, downloads model packs over HTTPS from GitHub Release assets with SHA-256 verification, shows a Sponsor link on the Support screen (allowed because it is not distributed through Play), and unlocks the Supporter extras for everyone (an honour system in the WinRAR spirit). PAY-04 and PAY-05 apply to the `play` flavour.
- **Signing:** one release keystore, generated on day 1 and kept offline. GitHub APKs are signed with it. At Play enrolment, upload the same key as the app signing key where Play allows it (verify at that time). If it is not allowed, say so in the README FAQ and rely on PRV-07 export and import to move between sources.
- **Release assets per version:** a universal APK and per-ABI APKs (arm64-v8a, armeabi-v7a, x86\_64), `SHA256SUMS`, a CycloneDX SBOM, the licence report, and release notes copied from `CHANGELOG.md`. A GitHub Actions workflow on tags `v*` builds, signs and uploads them. Tags such as `v1.0.0-rc.1` become pre-releases (the Beta channel).
- **Feedback loop:** Settings > About > Export diagnostics creates a local zip (app version, Android version, device tier, settings, recent non-personal logs) that the user can attach to an issue. Nothing is uploaded automatically.
- **P2:** Obtainium-friendly asset naming and an F-Droid submission (the `github` flavour has no proprietary libraries); an in-app, notify-only update check that never installs by itself.

**Phase 2: Google Play**

- **Entry gate:** all P0 requirements done; v1.0.0 stable on GitHub for two weeks with no S0 or S1 bug; privacy and Data safety items (10, 12.1) ready; native-speaker review of de and zh-TW done.
- **Steps:** follow 12.1 to 12.4. Recruit the closed testers from GitHub beta users; the 14-day closed test starts once the Play account is ready. Add the Play badge to the README only after the app is live.

### 12.1 Account and policy items

- **Developer account** with identity verification; one-time registration fee. New personal accounts may need a **closed test with a minimum number of testers (currently 12) opted in for 14 continuous days before production access**. Verify the current rule in Play Console and recruit testers from GitHub beta users while Phase 1 runs (12.0).
- **Target API level:** must meet Play's current requirement for new apps at upload time.
- **16 KB page size:** all native libraries aligned; verify with the Play pre-launch report and `zipalign -P 16 -c` in CI.
- **Foreground service declaration:** type `mediaPlayback`; Play Console asks for a short demo video (17.3).
- **Permissions declaration:** READ\_MEDIA\_AUDIO for a music player is permitted; do not request READ\_MEDIA\_IMAGES or READ\_MEDIA\_VIDEO.
- **Forms:** content rating (IARC), target audience 13+, Data safety (PRV-04), ads declaration (no ads), app access (no login needed).
- **Store listing rules:** no competitor names, no keyword stuffing, no ranking claims, no promise of free music. Describe AI features accurately as on-device analysis.

### 12.2 Build and signing

- Android App Bundle, R8 full mode, resource shrinking, Baseline Profiles generated in CI.
- Play App Signing enabled, using the same release keystore as the GitHub builds where Play allows uploading it as the app signing key (12.0). The keystore is kept offline and backed up in two places by the human owner.
- `versionCode = major*1_000_000 + minor*10_000 + patch*100 + build`; `versionName` follows SemVer.

### 12.3 Release path and gates

Internal testing > Closed testing > (optional Open testing) > Production with staged rollout 10%, 50%, 100%. Promotion requires all of: Play pre-launch report has no critical issues; crash-free sessions at least 99.5%; ANR rate at most 0.2%; no open P0 bug; performance budgets met (section 13); accessibility gate met (9.5). Halt the rollout if crash-free drops below 99.0%.

### 12.4 After launch

Patch release at least monthly for the first three months; reply to Play reviews within 7 days; keep a public `CHANGELOG.md`.

## 13. Performance budgets (release gates)

Measured on three reference classes: **Low** (Android 8 to 10, 3 GB RAM, entry SoC), **Mid** (6 GB RAM, mid-range SoC), **High** (current flagship).

| Metric | Budget |
| --- | --- |
| Cold start to Home content | Mid at most 1.2 s, Low at most 2.5 s (with Baseline Profile) |
| Tap Play to first audio (local file) | At most 300 ms |
| Scan 10,000 tracks | At most 30 s on Mid |
| Library scroll jank | At most 1% of frames over 16 ms on Mid |
| Search on 20,000 tracks | At most 100 ms |
| Memory (RSS) | At most 150 MB idle playback; at most 250 MB during analysis |
| Base download size | At most 25 MB |
| Screen-off playback battery | At most 3% per hour above a bare ExoPlayer sample on the same device |
| Analysis battery on Mid | Target at most 10% per 1,000 tracks while on battery |
| Database size | At most 30 MB for 10,000 tracks |
| Main-thread disk or network I/O | None; StrictMode with penaltyDeath in debug builds |

The Low class MUST complete a full playback, scan and Core analysis run without ANRs; that device is the proof of principle 2 (nobody is left out).

## 14. Testing and quality

- **Pyramid:** unit tests (domain, DSP math, smart-queue scoring) > integration tests (Room migrations, repositories, WorkManager) > instrumented tests (player service, MediaSession) > Compose UI tests > Macrobenchmarks (startup, scroll, search).
- **Coverage gate:** domain and analysis-core at least 80% line coverage. Every P0 requirement ID has at least one test; `docs/traceability.csv` maps ID to test names and CI fails if a P0 ID is missing.
- **Fixtures:** generated by `tools/gen-fixtures` (click tracks at known BPM, tone sequences at known keys, gapless sine pairs, corrupt files) plus a small CC0 set. No copyrighted audio in the repo.
- **Device matrix:** one physical Low, Mid and High device plus emulators for API 26, 29, 33 and the current target.
- **Manual test plan (run before every release candidate):** incoming call and alarm during playback; Bluetooth connect and disconnect; Doze after 30 minutes screen-off; swipe-away and process death restore; 20,000-track library; SD card removed mid-playback; corrupt file in the middle of a queue; low storage; airplane mode with lyrics on; permission revoked from system settings while running; RTL locale; TalkBack walkthrough of every screen; OEM battery managers (Xiaomi, Oppo, Vivo, Samsung) with 1-hour screen-off playback.
- **8-hour soak test:** continuous playback with random seeks and skips; no memory growth beyond 20 MB, no crashes.
- **Severity:** S0 crash, data loss or broken playback. S1 major feature broken with no workaround. S2 minor. S3 cosmetic. S0 and S1 block any release.

## 15. Repository, CI/CD and README

### 15.1 Repository layout

```
/app
/core/{model,common,database,datastore,designsystem,testing}
/feature/{onboarding,library,player,search,smart,lyrics,insights,settings,support}
/audio/{engine,analysis,ml}
/billing
/tools/gen-fixtures
/docs  ARCHITECTURE.md BUILD.md CONTRIBUTING.md SPEC.md traceability.csv
       licences.md privacy-policy.md store-listing.md release-checklist.md STATUS.md
README.md  CHANGELOG.md  DECISIONS.md  HUMAN_TODO.md  LICENSE
```

`docs/SPEC.md` is this document exported as Markdown, kept in sync.

### 15.2 Workflow

Trunk-based: short-lived branches, PR required, squash merge. Commit and PR titles start with the requirement ID. Main always builds a release candidate (17.1 rule 6).

### 15.3 CI (GitHub Actions)

- **On every PR:** build, ktlint, detekt, Android Lint, unit tests, module dependency-rule check (section 4), licence report check (ENG-09), README lint (15.4), traceability check.
- **On main:** the above plus instrumented tests on Gradle Managed Devices and a Macrobenchmark smoke run; upload debug APK as artifact.
- **On a version tag:** build signed AAB (secrets from the repo's encrypted secrets, never committed), verify 16 KB alignment, upload to the Play internal track through a service account (set up by the human, 17.3).

### 15.4 README is a landing page, not a progress tracker

The README is the product's front door, written for users first, like a SaaS landing page. **Progress never goes in the README.**

**Structure (in this order):**

1. **Hero:** name, one-line promise, download badge (GitHub Releases; the Play badge is added in the release PR once it is live), one screenshot or short GIF.
2. **What it does:** three short value statements.
3. **Feature grid:** six features with icon, title and one sentence (Smart queues, Automix, Karaoke, Synced lyrics, Klangbild, Studio-grade EQ).
4. **Screenshots:** gallery of four to six.
5. **Works on every phone:** friendly explanation that smart features scale with the device and nobody loses the basics.
6. **Privacy promise:** local-first, no ads, no accounts, no tracking.
7. **Pricing:** Free. Optional one-time Supporter.
8. **FAQ:** five to eight questions (Does it stream music? Does it need internet? Which formats? Why is it free?).
9. **For developers:** links to Build, Architecture, Contributing in `/docs`.
10. **Licence and credits:** short.

**Rules:**

- No checkboxes, task lists, TODO, WIP, status words, roadmap tables, milestone dates or coming-soon lists.
- CI fails the PR if `README.md` matches the case-insensitive pattern `\[ \]|\[x\]|TODO|WIP|FIXME|coming soon|status:|progress`.
- Badges allowed: version, licence, Play rating.
- Edited only in release PRs for user-facing changes, reviewed by the human owner.
- **Where progress lives instead:** `CHANGELOG.md` (Keep a Changelog format), `docs/STATUS.md` (generated weekly from the project board), the GitHub Projects board, `DECISIONS.md` for choices, `HUMAN_TODO.md` for things only a person can do.

## 16. Milestones and exit criteria

Durations are rough one-developer estimates; an AI-assisted team may be faster. Exit criteria matter, dates do not.

| Milestone | Scope | Exit criteria |
| --- | --- | --- |
| **M0 Foundations** (about 1 week) | Repo, modules, CI, theme, DI, Room skeleton, README landing page, docs skeleton | CI green; app launches to an empty-state Home; README passes lint |
| **M1 Player core** (about 3 weeks) | Service, two-deck engine, queue, notification, focus, resume, gapless, formats, mini-player, basic Now Playing | PB-01 to PB-07, PB-09, PB-10 (P0 parts) pass; 8-hour soak test passes |
| **M2 Library** (about 3 weeks) | Scan, tags, browse, search, playlists, favourites, queue UI | All P0 LB items pass; scan, search and scroll budgets met on Mid |
| **M3 Core smart** (about 4 weeks) | Native analysis, accuracy gate, Smart Queue, Automix (core), vocal reduction, lyrics, EQ | SM-01 to SM-03, SM-05 (Vocal Reduction), SM-06, PB-11 pass; accuracy gate met; Low device runs it without ANR |
| **M4 Polish and closed test** (about 3 weeks) | Onboarding, Settings, themes, accessibility, support prompt and billing, localisation scaffolding, Baseline Profiles | All P0 done; budgets and accessibility gates met; GitHub beta releases published |
| **M5 GitHub launch** (about 2 weeks) | GitHub public release (signed APKs, release notes, README landing page); Play assets prepared in parallel | GitHub v1.0.0 published with all release gates met; Play submission follows (12.0) |
| **M6 Enhanced, v1.1** | Embedding model and pack, Android Auto, widgets, context mixes, insights, personalisation, M3U, per-output EQ | P1 items pass; Tier 1 pack optional and removable |
| **M7 Studio, v1.2** | Stem separation pack, Prepare stems flow, stems mixer | SM-05 stems pass; benchmark acceptance met |

M1 and M2 can run in parallel after M0. Play closed testing (12.1) starts after the GitHub v1.0.0 release (12.0).

**Definition of Ready (task):** has requirement ID, acceptance criteria, test approach, estimate of at most 2 days.

**Definition of Done (task):** acceptance criteria met; tests added and passing; strings externalised; accessibility labels set; no new lint warnings; behaviour docs updated (not README progress); traceability row added; performance checked if it touches a hot path (scan, scroll, search, playback, analysis).

## 17. Delivery protocol: no blocking

### 17.1 Rules that keep work moving

1. **Default and log.** Ambiguity or a missing decision: use Appendix A, record in `DECISIONS.md` (date, question, choice, reason), continue.
2. **Stub behind an interface.** If a dependency is not ready (a model, a Play product, a server), build against an interface with a fake implementation and a feature flag. The real one slots in later. The app must build and run at every commit.
3. **Vertical slices.** Each task delivers something a user can see and test, not a layer.
4. **Timebox.** A task that passes 2x its estimate is split: ship the smaller part, file the rest as a new task. A spike lasts at most one day and ends in a written decision.
5. **WIP limit of 2** tasks in progress per developer or agent.
6. **Main is always shippable.** Unfinished features sit behind flags that default to off.
7. **Humans only for the list in 17.3.** When one is needed, add the exact steps to `HUMAN_TODO.md` and continue with other work.
8. **Weekly rhythm.** Every Friday: a release candidate to the internal track, `docs/STATUS.md` refreshed, top three risks reviewed.
9. **Blocked is never an end state.** Every blocker must end as a default, a stub or a dated `HUMAN_TODO` entry within the same working day.

### 17.2 Instructions for the AI builder (Grok)

- Read sections 0 to 5 first, then build strictly in milestone order.
- One requirement ID per PR; small diffs; tests in the same PR.
- Do not invent features, screens, permissions or libraries. If a requirement seems wrong, implement the default, log the concern in `DECISIONS.md` and continue.
- Verify every dependency exists, is current, and passes the licence gate before adding it. Check official Android documentation for API behaviour instead of guessing signatures.
- No placeholder code in main. A TODO comment is allowed only if it contains a task ID.
- At the end of each milestone, write a report: requirement IDs done, tests passing, known gaps, risks.
- Never commit secrets, keystores or copyrighted media.

### 17.3 Needs-human list (start on day 1; several have multi-day lead times)

1. **Day 1:** finish the name clearance for Klangyu (Play Store, GitHub handle, domains, similar-sounding Klang marks; the Taiwan IPO, USPTO and EUIPO searches found no match) and confirm `app.klangyu.player` (1.3).
2. **Day 1:** choose the repository licence (recommended default GPL-3.0-or-later, see 12.0) and create the GitHub owner account or organisation and the repository.
3. **Day 1:** generate the release keystore and back it up in two places. It signs GitHub releases and, where Play allows, is uploaded as the Play app signing key.
4. **Before the GitHub release:** host the privacy policy at a public URL (GitHub Pages is fine) and create a support email address.
5. **Before the GitHub release:** native-speaker review of the German and Traditional Chinese (zh-TW) strings, the taglines and the Chinese display name 音域.
6. **Before the GitHub release:** approve the final logo. The builder produces SVG masters from 1.6; a designer may refine them.
7. **During Phase 1:** create the Google Play developer account (identity verification takes days) and complete the payments profile.
8. **Before Phase 2:** create the in-app products in Play Console and confirm prices.
9. **Before Phase 2:** recruit at least 12 closed testers (current requirement, verify), ideally from GitHub beta users.
10. **Before Phase 2:** record the foreground-service demo video; produce screenshots and the feature graphic.
11. **Before Phase 2:** verify the Data safety form and current Play policies: external payment links, closed-test rule, target API level, key-upload option.
12. **Any time:** approve any licence exception (for example an LGPL library).
13. **Before M1:** provide a Low-class and a Mid-class physical test device and a personal test library of at least 2,000 files, including German and Chinese titles.

## 18. Risks

| Risk | Mitigation |
| --- | --- |
| Play closed-test requirement delays launch | Verify the rule on day 1; recruit testers early; start the 14-day clock right after the GitHub v1.0.0 release |
| OEM battery managers kill background playback (Xiaomi, Oppo, Vivo, Samsung) | Foreground service; in-app help card with per-brand steps; test on those OEMs |
| Analysis accuracy is poor on some genres | Confidence gates; features fall back to plain behaviour; golden-set release gate |
| Native analysis crash takes down playback | Analysis runs in a separate `:analysis` process; the player never loads native analysis code |
| ML licence or size problems | ML is deferred to v1.1 and v1.2; Core does not depend on it |
| Low conversion on the support prompt | Keep running costs near zero; never build revenue dependence into the plan |
| Lyrics source objections | User consent, local cache only, embedded and sidecar lyrics preferred; remove lookup quickly if asked |
| Scope creep | Priority labels, non-goals (1.4), one requirement ID per PR |
| AI-generated code errors | Small PRs, tests required, licence and dependency gates, milestone reports |
| Crowded market | Differentiate on Core-for-everyone smart features and an honest, quiet monetisation model |

## Appendix A. Default decisions (use when the spec is silent)

1. Kotlin, Jetpack Compose, minSdk 26, Hilt, Room, type-safe Navigation.
2. Two-deck engine for crossfade; ML runtime LiteRT unless a benchmark in M3 shows ONNX Runtime is clearly better.
3. Analysis runs in a separate `:analysis` process.
4. Crossfade is off by default. Automix applies in Smart Queue and Mixes sessions only (setting: Off, Smart sessions, Always; default Smart sessions), style Subtle, about 6 s.
5. Don't ask again on the support prompt is permanent (owner may change this).
6. Minimum track length 30 s. Library sort: title A to Z, ignoring a leading The, A or An; Recently added by date descending.
7. Shuffle uses a shuffle bag (every track once before repeats).
8. Repeat modes: off, all, one. Previous restarts the track if more than 3 s have played, otherwise goes to the previous track.
9. Artist tags split on `;` and `/` and the word feat.; album artist wins for album grouping.
10. Dynamic colour on Android 12 and up; teal fallback palette on older versions. Theme default Auto.
11. Equaliser default flat; limiter always on.
12. Coil disk cache 100 MB; album art thumbnails 512 px.
13. Logging through a thin wrapper that is a no-op in release builds; no remote logging.
14. Database file `klangyu.db`; schema exports checked into the repo.
15. Dates, times and numbers follow the device locale.

## Appendix B. Settings catalogue (DataStore keys, types, defaults)

| Group | Key | Type | Default |
| --- | --- | --- | --- |
| Playback | gaplessAlbums | bool | true |
| Playback | crossfadeSeconds | int 0 to 12 | 0 |
| Playback | automixMode | OFF, SMART\_SESSIONS, ALWAYS | SMART\_SESSIONS |
| Playback | loudnessMode | OFF, TRACK, ALBUM | TRACK |
| Playback | resumeOnLaunch | bool | true |
| Playback | pauseOnUnplug | bool | true |
| Playback | resumeAfterFocusLoss | bool | true |
| Playback | skipSilence | bool | false |
| Playback | sleepFadeSeconds | int | 10 |
| Library | minTrackSeconds | int | 30 |
| Library | excludedFolders | list | empty |
| Library | scanOnLaunch | bool | true |
| Library | ignoreLeadingArticles | bool | true |
| Library | splitArtists | bool | true |
| Smart | tierOverride | AUTO, CORE, ENHANCED, STUDIO | AUTO |
| Smart | analysisChargingOnly | bool | false |
| Smart | personalisation | bool | true |
| Smart | smartQueueLength | int | 30 |
| Smart | modelDownloadWifiOnly | bool | true |
| Lyrics | onlineLookup | ASK, ON, OFF | ASK |
| Lyrics | keepScreenOn | bool | false |
| Lyrics | textScale | float | 1.0 |
| Appearance | theme | AUTO, LIGHT, DARK | AUTO |
| Appearance | dynamicColor | bool | true |
| Appearance | amoledBlack | bool | false |
| Appearance | palette | enum | DEFAULT |
| Appearance | haptics | bool | true |
| Storage | stemCacheLimitGb | int | 2 |
| Support | supportPromptState | enum, counters, timestamps | ELIGIBLE\_LATER |
| Support | isSupporterCached | bool | false |

## Appendix C. Glossary

- **BPM:** beats per minute. **Camelot wheel:** DJ notation for musical keys (for example 8A) that shows which keys mix well.
- **LUFS:** perceived loudness unit. **ReplayGain:** tag-based loudness normalisation.
- **Gapless:** playing consecutive tracks with no silence between them.
- **Stem:** one isolated part of a mix (vocals, drums, bass, other).
- **WSOLA:** a time-stretching algorithm that changes tempo without changing pitch.
- **SAF:** Storage Access Framework, Android's folder-access permission system.
- **PAD:** Play Asset Delivery, Play's way to deliver large assets after install.
- **FGS:** foreground service. **Tier:** a device capability class (section 2).

## Appendix D. Release checklist

1. All P0 requirements for the version done; traceability check green.
2. Budgets (13), accessibility (9.5) and accuracy (7.2) gates passed on Low, Mid, High devices.
3. Manual test plan (14) executed; no open S0 or S1 bug.
4. `CHANGELOG.md` updated; README reviewed by the owner for user-facing accuracy.
5. Store listing, screenshots, Data safety and privacy policy match the build.
6. Signed AAB uploaded; pre-launch report clean; staged rollout 10%, then 50%, then 100% with the 12.3 halt rule.

## Appendix E. Initial log files (seed contents)

### DECISIONS.md

| ID | Date | Decision | Reason |
| --- | --- | --- | --- |
| D-001 | 2026-11-14 | App name Klangyu; spelled Klangyu in all identifiers, Klangyü only in the logo | Owner choice; memorable and phonetic; German ü equals pinyin yu |
| D-002 | 2026-11-14 | applicationId `app.klangyu.player` | Owner proposal; confirm after clearance checks |
| D-003 | 2026-11-14 | Smart transitions renamed and expanded into Automix (SM-03 series) | Owner request: DJ-style mixing |
| D-004 | 2026-11-14 | Sharing feature named Klangbild, not Wrapped (3.5) | Avoids another company's trademark; owner asked for creative sharing |
| D-005 | 2026-11-14 | Release order: GitHub first, Play Store after the app is finished (12.0) | Owner plan |
| D-006 | 2026-11-14 | Two build flavours, github and play, one applicationId | Keeps billing and Play Asset Delivery out of the GitHub build |
| D-007 | 2026-11-14 | English, German and zh-TW are first-class locales in v1.0 (3.6, 9.7) | Brand identity |
| D-008 | 2026-11-14 | Personas, logo and microcopy draw on German and Taiwanese references (1.5, 1.6) | Owner request |
| D-009 | 2026-11-14 | Proposed licence GPL-3.0-or-later, pending the owner (12.0) | Keeps clones open |
| D-010 | 2026-11-14 | Proposed Chinese display name 音域, native review pending | Everyday word for tonal range; pairs with Klang |
| D-011 | 2026-11-14 | PRV-07 export and import raised to P0 | Needed to move between GitHub and Play builds |
| D-012 | 2026-11-14 | Support prompt thresholds in 11.3 were edited by the owner; the text in 11.3 is authoritative | Owner edit |

### CHANGELOG.md

```markdown
# Changelog
All notable changes are documented here.
Format: Keep a Changelog. Versioning: SemVer.

## [Unreleased]
- Specification written (docs/SPEC.md).
```

### HUMAN\_TODO.md and STATUS.md

`HUMAN_TODO.md` starts as a copy of the 17.3 list with owner, due milestone and status per row; items 1 to 3 are due on day 1. `docs/STATUS.md` starts with one line, M0 Foundations: not started, and is refreshed every Friday (17.1, rule 8).
