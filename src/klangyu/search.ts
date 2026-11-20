import type { Track } from "./types";

const TO_SIMP: Record<string, string> = {
  愛: "爱",
  與: "与",
  靜: "静",
  車: "车",
  臺: "台",
  燈: "灯",
  說: "说",
  過: "过",
  個: "个",
  樂: "乐",
  開: "开",
  門: "门",
  長: "长",
  東: "东",
  風: "风",
  為: "为",
  這: "这",
  麼: "么",
  會: "会",
  來: "来",
  時: "时",
  間: "间",
  聽: "听",
  書: "书",
  國: "国",
};

const TO_TRAD: Record<string, string> = Object.fromEntries(
  Object.entries(TO_SIMP).map(([trad, simp]) => [simp, trad]),
);

function mapChars(value: string, table: Record<string, string>): string {
  let out = "";
  for (const ch of value) out += table[ch] ?? ch;
  return out;
}

function foldForms(value: string): string[] {
  const lower = value.toLowerCase().trim();
  if (!lower) return [];
  const scripts = Array.from(
    new Set([lower, mapChars(lower, TO_SIMP), mapChars(lower, TO_TRAD)]),
  );
  const forms = new Set<string>();
  for (const text of scripts) {
    const ae = text
      .replaceAll("ä", "ae")
      .replaceAll("ö", "oe")
      .replaceAll("ü", "ue")
      .replaceAll("ß", "ss");
    const base = text
      .replaceAll("ä", "a")
      .replaceAll("ö", "o")
      .replaceAll("ü", "u")
      .replaceAll("ß", "ss")
      .normalize("NFD")
      .replace(/\p{M}/gu, "");
    const aeBase = ae.normalize("NFD").replace(/\p{M}/gu, "");
    for (const form of [text, ae, base, aeBase]) {
      forms.add(form);
      forms.add(form.replaceAll(" ", ""));
    }
  }
  return Array.from(forms).filter(Boolean);
}

export function trackMatches(track: Track, query: string): boolean {
  const needles = foldForms(query);
  if (needles.length === 0) return true;
  const hay = foldForms(
    [
      track.title,
      track.artist,
      track.album,
      track.genre,
      track.folder,
      track.pinyin ?? "",
      track.zhuyin ?? "",
      ...(track.aliases ?? []),
    ].join(" "),
  );
  return needles.some((needle) => hay.some((h) => h.includes(needle)));
}

export function sortTitle(title: string, ignoreArticles: boolean): string {
  if (!ignoreArticles) return title;
  return title.replace(/^(the|a|an)\s+/i, "");
}
