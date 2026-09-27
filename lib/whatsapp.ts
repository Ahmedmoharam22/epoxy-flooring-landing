import { COMPANY } from "./constants";
import { getStoredUtm } from "./utm";

export function buildWhatsAppLink(message: string, source: string): string {
  const utm = getStoredUtm();
  const utmSuffix = utm
    ? ` [مصدر: ${utm.utm_source ?? "-"} / ${utm.utm_campaign ?? "-"}]`
    : "";

  const fullMessage = `${message}${utmSuffix}`;
  const encoded = encodeURIComponent(fullMessage);

  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encoded}`;
}

export function buildCallLink(): string {
  return `tel:+${COMPANY.phoneNumber}`;
}

export const CTA_SOURCE = {
  HERO: "hero",
  SERVICES: "services",
  PROJECTS: "projects",
  CTA_SECTION: "cta_section",
  FINAL_CTA: "final_cta",
  STICKY_MOBILE: "sticky_mobile",
} as const;