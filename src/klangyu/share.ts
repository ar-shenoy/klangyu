export async function sharePlain(title: string, text: string): Promise<"shared" | "copied" | "dismissed"> {
  if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
    try {
      await navigator.share({ title, text });
      return "shared";
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") return "dismissed";
    }
  }
  try {
    await navigator.clipboard.writeText(`${title}\n${text}`);
    return "copied";
  } catch {
    return "dismissed";
  }
}

export async function shareCanvas(canvas: HTMLCanvasElement, filename: string, text: string): Promise<"shared" | "saved" | "dismissed"> {
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) return "dismissed";
  const file = new File([blob], filename, { type: "image/png" });
  if (typeof navigator.share === "function" && (!navigator.canShare || navigator.canShare({ files: [file] }))) {
    try {
      await navigator.share({ files: [file], text, title: "Klangyu" });
      return "shared";
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") return "dismissed";
    }
  }
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
  return "saved";
}
