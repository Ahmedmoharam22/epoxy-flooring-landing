import { getStoredUtm } from "@/lib/utm";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function trackEvent(eventName: "whatsapp_click" | "phone_click", source: string) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  const utm = getStoredUtm();

  window.dataLayer.push({
    event: eventName,
    event_category: "lead",
    lead_type: eventName === "whatsapp_click" ? "whatsapp" : "phone",
    cta_source: source,
    utm_source: utm?.utm_source || undefined,
    utm_medium: utm?.utm_medium || undefined,
    utm_campaign: utm?.utm_campaign || undefined,
    utm_term: utm?.utm_term || undefined,
    utm_content: utm?.utm_content || undefined,
  });
}