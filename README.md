# Klangyu

**Local-first music player with intelligent automix.**

Klangyu is a privacy-respecting, offline-capable music app that analyses your local library, understands tempo and key, and creates smooth, harmonic transitions automatically. No cloud required. Your files stay on your device.

## Features

- **Local-first library** — Import folders of audio files. Everything is analysed and stored on-device (IndexedDB).
- **Smart Automix** — Beat-matched crossfades with harmonic awareness (Camelot wheel). Modes: Off · Smart Sessions · Always. Styles: Subtle · Club · Radio · Chill.
- **On-device analysis** — BPM, key, energy, brightness, loudness (LUFS), danceability, waveform peaks.
- **Dual-deck feel** — Crossfade, filter, echo, cut and bass techniques for transitions.
- **EQ & loudness** — 10-band graphic EQ with presets + loudness normalisation (track / album).
- **Personalisation** — Smart queues, play history, favourites, skip tracking, time-of-day mixes (Morning / Focus / Workout / Night / Discover).
- **Lyrics & karaoke** — Timed lyrics support with offset adjustment.
- **Themes & localisation** — Light / Dark / AMOLED · multiple colour palettes · English, German, Traditional Chinese.
- **Share cards** — Generate clean share images for mixes or tracks.
- **PWA-ready** — Installable, works offline after first load.

## Tech stack

- React 19 + TypeScript
- TanStack Start / Router / Query
- Vite 8 + Tailwind CSS 4
- Zustand for client state
- Web Audio API for playback, analysis and effects
- IndexedDB for local persistence

## Getting started

```bash
git clone https://github.com/ar-shenoy/klangyu.git
cd klangyu
npm install
npm run dev
```

Open `http://localhost:8080`.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run typecheck` | TypeScript check |
| `npm run lint` | ESLint |

## Project structure

```
src/
  components/klangyu/   # Main UI (app, browse, overlays, shared UI)
  klangyu/              # Core logic (audio engine, analysis, store, i18n, theory)
  routes/               # TanStack file-based routes
  lib/                  # Shared utilities
public/                 # Static assets & PWA icons
```

## Privacy

- No accounts required for core playback and library features.
- Audio files never leave your device.
- Analysis runs entirely in the browser.
- Optional cloud features (if enabled later) will be clearly opt-in.

## Roadmap toward Play Store

Klangyu is currently a high-quality Progressive Web App. To ship on Google Play:

1. **Capacitor (recommended)**  
   Wrap the web app in a native Android shell for full filesystem access, background audio, and Play Store distribution.

2. **Trusted Web Activity (TWA)**  
   Use Bubblewrap to package the existing PWA as an Android app with minimal native code.

3. **PWA enhancements**  
   Strengthen the service worker, add install prompts, offline library browsing, and media session controls.

Help with any of these paths is welcome — open an issue or PR.

## Contributing

1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Open a pull request

Please keep commits focused and include a short description of the change.

## License

MIT — see [LICENSE](LICENSE) (to be added).

---

Built with care for people who still own their music files.
