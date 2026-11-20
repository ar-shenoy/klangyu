import { AudioLines, House, Library, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { bindFileOpener, requestAudioFiles } from "@/klangyu/files";
import { t } from "@/klangyu/i18n";
import { importAudioFiles, maybePrompt, probeDevice, useStore } from "@/klangyu/store";
import type { Tab } from "@/klangyu/types";
import { cn } from "@/lib/utils";
import { HomeView, LibraryView, MixesView, SearchView } from "./browse";
import { applyChrome, bootPlayer, MiniPlayer, OverlayHost, Toasts } from "./overlays";
import { GhostButton, PrimaryButton, Seal, Wordmark } from "./ui";

export function KlangyuApp() {
  const [ready, setReady] = useState(false);
  const [picker, setPicker] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const onboarded = useStore((s) => s.onboarded);
  const tab = useStore((s) => s.tab);
  const setTab = useStore((s) => s.setTab);
  const settings = useStore((s) => s.settings);
  const sheet = useStore((s) => s.sheet);

  useEffect(() => {
    let live = true;
    const finish = () => {
      if (!live) return;
      useStore.getState().setProbe(probeDevice());
      setReady(true);
      if (maybePrompt()) useStore.getState().setSheet("support");
    };
    const unsub = useStore.persist.onFinishHydration(finish);
    if (useStore.persist.hasHydrated()) finish();
    else void useStore.persist.rehydrate();
    setPicker(true);
    return () => {
      live = false;
      unsub();
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    applyChrome(settings.locale, settings.theme, settings.palette);
  }, [ready, settings.locale, settings.theme, settings.palette]);

  useEffect(() => bootPlayer(), []);

  useEffect(() => bindFileOpener(() => fileRef.current?.click()), []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const tag = (event.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (event.key === " ") {
        event.preventDefault();
        useStore.getState().toggle();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const items: { id: Tab; label: string; icon: typeof House }[] = [
    { id: "home", label: t(settings.locale, "navHome"), icon: House },
    { id: "library", label: t(settings.locale, "navLibrary"), icon: Library },
    { id: "search", label: t(settings.locale, "navSearch"), icon: Search },
    { id: "mixes", label: t(settings.locale, "navMixes"), icon: AudioLines },
  ];

  return (
    <div className="min-h-dvh bg-ink text-paper">
      <div className="mx-auto grid min-h-dvh max-w-6xl lg:grid-cols-[1fr_32rem]">
        <aside className="hidden flex-col justify-between px-10 py-12 lg:flex">
          <div>
            <Wordmark className="text-4xl text-paper" />
            <p className="mt-3 max-w-sm text-lg text-paper/80">{t(settings.locale, "tagline")}</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/60">{t(settings.locale, "privacy")}</p>
          </div>
          <p className="text-sm text-paper/50">{t(settings.locale, "taglineDe")} · {t(settings.locale, "taglineZh")}</p>
        </aside>
        <div className="relative mx-auto flex h-dvh w-full max-w-lg flex-col overflow-hidden bg-bg text-fg lg:my-4 lg:h-[calc(100dvh-2rem)] lg:rounded-[2rem] lg:ring-1 lg:ring-paper/15">
          {picker ? (
            <input
              ref={fileRef}
              type="file"
              accept="audio/*,.mp3,.m4a,.aac,.flac,.ogg,.opus,.wav"
              multiple
              className="hidden"
              onChange={(event) => {
                const files = [...(event.target.files ?? [])];
                event.target.value = "";
                if (files.length) void importAudioFiles(files);
              }}
            />
          ) : null}
          {!ready ? (
            <div className="grid flex-1 place-items-center gap-4">
              <Seal className="size-20 rounded-[1.6rem]" />
              <Wordmark className="text-2xl" />
            </div>
          ) : !onboarded ? (
            <Onboarding />
          ) : (
            <>
              <main className="min-h-0 flex-1 overflow-y-auto">
                {tab === "home" ? <HomeView /> : null}
                {tab === "library" ? <LibraryView /> : null}
                {tab === "search" ? <SearchView /> : null}
                {tab === "mixes" ? <MixesView /> : null}
              </main>
              <MiniPlayer />
              <nav className="grid grid-cols-4 border-t border-line bg-bg pb-[env(safe-area-inset-bottom)]" aria-label={t(settings.locale, "navHome")}>
                {items.map((item) => {
                  const Icon = item.icon;
                  const on = tab === item.id && sheet === null;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-current={on ? "page" : undefined}
                      onClick={() => setTab(item.id)}
                      className={cn("flex h-16 flex-col items-center justify-center gap-1 text-xs", on ? "text-accent" : "text-muted")}
                    >
                      <Icon className="size-5" />
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </>
          )}
          {ready && onboarded ? <OverlayHost /> : null}
          <Toasts />
        </div>
      </div>
    </div>
  );
}

function Onboarding() {
  const locale = useStore((s) => s.settings.locale);
  const probe = useStore((s) => s.probe);
  const tier = useStore((s) => s.effectiveTier());
  const setOnboarded = useStore((s) => s.setOnboarded);
  const playIds = useStore((s) => s.playIds);
  const visible = useStore((s) => s.visible());
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (step !== 3) return;
    let n = 0;
    const id = window.setInterval(() => {
      n += 1;
      setCount(Math.min(visible.length, n * 3));
      if (n * 3 >= visible.length) window.clearInterval(id);
    }, 50);
    return () => window.clearInterval(id);
  }, [step, visible.length]);

  const start = (play: boolean) => {
    setOnboarded();
    if (play && visible[0]) playIds(visible.map((track) => track.id), 0, false);
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col px-5 pt-8 pb-6">
      <div className="mb-6 flex items-center justify-between">
        <Seal className="size-12 rounded-2xl" />
        <button type="button" className="h-11 px-2 text-sm text-muted" onClick={() => start(false)}>
          {t(locale, "skip")}
        </button>
      </div>
      <p className="text-xs tracking-wide text-muted uppercase">
        {t(locale, "onboardingStep")} {step + 1} / 4
      </p>
      {step === 0 ? (
        <div className="mt-4 flex flex-1 flex-col">
          <h1 className="text-3xl font-medium">{t(locale, "obWelcome")}</h1>
          <p className="mt-2 text-muted">{t(locale, "tagline")}</p>
          <div className="mt-6 space-y-3">
            <Card title={t(locale, "obCard1t")} body={t(locale, "obCard1b")} />
            <Card title={t(locale, "obCard2t")} body={t(locale, "obCard2b")} />
            <Card title={t(locale, "obCard3t")} body={t(locale, "obCard3b")} />
          </div>
          <PrimaryButton className="mt-auto w-full" onClick={() => setStep(1)}>{t(locale, "next")}</PrimaryButton>
        </div>
      ) : null}
      {step === 1 ? (
        <div className="mt-4 flex flex-1 flex-col">
          <h1 className="text-3xl font-medium">{t(locale, "obMusic")}</h1>
          <p className="mt-2 text-muted">{t(locale, "obMusicB")}</p>
          <div className="mt-auto flex flex-col gap-2">
            <PrimaryButton onClick={() => start(true)}>{t(locale, "obDemo")}</PrimaryButton>
            <GhostButton onClick={() => { requestAudioFiles(); setStep(2); }}>{t(locale, "obFiles")}</GhostButton>
          </div>
        </div>
      ) : null}
      {step === 2 ? (
        <div className="mt-4 flex flex-1 flex-col">
          <h1 className="text-3xl font-medium">{t(locale, "obDevice")}</h1>
          <div className="mt-6 rounded-3xl bg-surface p-5 ring-1 ring-line">
            <p>{tier === 0 ? t(locale, "obCore") : tier === 1 ? t(locale, "obEnhanced") : t(locale, "obStudio")}</p>
            <p className="mt-3 text-sm text-muted">
              {probe.cores} cores{probe.ramGb ? ` · ${probe.ramGb} GB` : ""}
            </p>
          </div>
          <PrimaryButton className="mt-auto w-full" onClick={() => setStep(3)}>{t(locale, "next")}</PrimaryButton>
        </div>
      ) : null}
      {step === 3 ? (
        <div className="mt-4 flex flex-1 flex-col">
          <h1 className="text-3xl font-medium">{t(locale, "obScan")}</h1>
          <p className="mt-4 text-5xl font-medium tabular-nums">{count}</p>
          <p className="text-sm text-muted">{t(locale, "tracks")}</p>
          <PrimaryButton className="mt-auto w-full" onClick={() => start(false)}>{t(locale, "obStart")}</PrimaryButton>
        </div>
      ) : null}
    </div>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl bg-surface p-4 ring-1 ring-line">
      <p className="font-medium">{title}</p>
      <p className="mt-1 text-sm text-muted">{body}</p>
    </div>
  );
}
