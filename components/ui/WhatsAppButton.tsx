"use client";

import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/components/analytics/trackEvent";

type Props = {
  message: string;
  source: string;
  variant?: "primary" | "outline";
  className?: string;
  children: React.ReactNode;
};

export function WhatsAppButton({
  message,
  source,
  variant = "primary",
  className = "",
  children,
}: Props) {
  const href = buildWhatsAppLink(message, source);

  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold transition-transform active:scale-95";
  const styles =
    variant === "primary"
      ? "bg-[#25D366] text-white shadow-md hover:brightness-95"
      : "border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", source)}
      className={`${base} ${styles} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-industrial-gold focus-visible:ring-offset-2 focus-visible:ring-offset-industrial-dark ${className}`}
      aria-label="تواصل عبر واتساب (يفتح في نافذة جديدة)"
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2zm5.77 14.03c-.24.68-1.4 1.31-1.93 1.35-.5.05-1.05.25-3.53-.74-2.98-1.18-4.9-4.18-5.05-4.38-.15-.2-1.2-1.6-1.2-3.06 0-1.46.77-2.17 1.04-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.6.83 2.06.9 2.21.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.38-.44.5-.15.15-.3.3-.13.6.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.47.13.65-.08.17-.2.74-.86.94-1.16.2-.3.4-.25.65-.15.27.1 1.7.8 1.99.94.3.15.5.22.57.35.07.13.07.75-.17 1.43z" />
    </svg>
  );
}