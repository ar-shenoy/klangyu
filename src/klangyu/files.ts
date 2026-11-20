let opener: (() => void) | null = null;

export function bindFileOpener(fn: () => void): () => void {
  opener = fn;
  return () => {
    if (opener === fn) opener = null;
  };
}

export function requestAudioFiles(): void {
  opener?.();
}
