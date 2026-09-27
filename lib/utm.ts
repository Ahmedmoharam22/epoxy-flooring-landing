export type UtmParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

const STORAGE_KEY = "epoxy_utm_params";

export function captureUtmFromUrl(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const keys: (keyof UtmParams)[] = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];

  const found: UtmParams = {};
  let hasAny = false;

  keys.forEach((key) => {
    const value = params.get(key);
    if (value) {
      found[key] = value;
      hasAny = true;
    }
  });

  if (hasAny) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
  }
}

export function getStoredUtm(): UtmParams | null {
  if (typeof window === "undefined") return null;

  const raw = sessionStorage.getItem(STORAGE_KEY);
  return raw ? (JSON.parse(raw) as UtmParams) : null;
}