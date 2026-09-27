"use client";

import { buildCallLink } from "@/lib/whatsapp";
import { WHATSAPP_MESSAGES } from "@/lib/constants";
import { WhatsAppButton } from "./WhatsAppButton";
import { CTA_SOURCE } from "@/lib/whatsapp";
import { trackEvent } from "@/components/analytics/trackEvent";

export function StickyMobileCta() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 flex gap-2 p-3 bg-white/95 backdrop-blur border-t border-gray-200 md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
        <a
        href={buildCallLink()}
        onClick={() => trackEvent("phone_click", CTA_SOURCE.STICKY_MOBILE)}
        className="flex-1 flex items-center justify-center gap-2 rounded-xl border-2 border-[#111418] text-[#111418] font-bold py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-industrial-gold focus-visible:ring-offset-2"
        aria-label="اتصل بنا عبر الهاتف"
      >
        اتصل الآن
      </a>

      <WhatsAppButton
        message={WHATSAPP_MESSAGES.default}
        source={CTA_SOURCE.STICKY_MOBILE}
        className="flex-[1.4]"
      >
        واتساب
      </WhatsAppButton>
    </div>
  );
}