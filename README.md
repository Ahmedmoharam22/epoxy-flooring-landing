# خبراء الإيبوكسي | Epoxy Experts — Landing Page

<p align="center">
  <img src="./public/images/epoxy-hero.webp" alt="Epoxy Experts Hero" width="100%" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-38BDF8?logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel" alt="Vercel" />
</p>

Google Ads landing page for **خبراء الإيبوكسي (Epoxy Experts)** — a Saudi-based
contractor supplying and installing epoxy flooring for factories, hangars,
workshops, and warehouses. Built as a single, conversion-focused page whose
only goal is turning ad traffic into a **WhatsApp lead**.

```
Google Search Ad → Landing Page → Trust → Clear Offer → WhatsApp Click → Lead
```

---

## 📸 Preview

| Hero                                     | Services                                        | Projects                                          |
| ---------------------------------------- | ----------------------------------------------- | ------------------------------------------------- |
| ![Hero](./public/images/epoxy-hero.webp) | ![Services](./public/images/epoxy-factory.webp) | ![Projects](./public/images/epoxy-warehouse.webp) |

> استبدل الصور دي بسكرين شوت فعلي للصفحة بعد الرفع (Desktop + Mobile) لتوثيق أدق.

---

## ✨ Features

- **RTL Arabic-first UI** — `dir="rtl"`, `lang="ar"`, Tajawal font via `next/font`.
- **WhatsApp-driven conversion funnel** — every CTA opens WhatsApp with a
  pre-filled, context-aware message.
- **Dual sticky mobile CTA** — Call + WhatsApp, always visible on mobile.
- **UTM capture** — campaign source/medium/campaign persisted through the
  session and appended to the WhatsApp message.
- **GTM / GA4 / Google Ads tracking** — `whatsapp_click` and `phone_click`
  pushed to `dataLayer` as the primary conversion events.
- **Performance-first** — no heavy UI libraries, `next/image` everywhere,
  lazy-loaded sections, minimal JS.
- **SEO ready** — metadata, Open Graph, canonical, `robots.ts`, `sitemap.ts`.
- **Accessible** — semantic HTML, `aria-label`s, keyboard-navigable accordion.

---

## 🧱 Tech Stack

| الجزء     | التقنية                                  | السبب                                  |
| --------- | ---------------------------------------- | -------------------------------------- |
| Framework | Next.js 15 (App Router)                  | SSR/SSG سريع، جاهز للنشر على Vercel    |
| Language  | TypeScript                               | Type safety وأخطاء أقل وقت الـ build   |
| Styling   | Tailwind CSS 4                           | تحكم سريع بدون CSS منفصل، حجم صغير     |
| Fonts     | `next/font` (Tajawal)                    | Self-hosted، بدون طلب خارجي، أداء أفضل |
| Analytics | GTM + GA4 + Google Ads (via `dataLayer`) | تتبع مركزي بدون تعديل الكود لاحقًا     |
| icons     | lucide-react                             | lightweight and fast                   |

---

## 📁 Project Structure

```
epoxy-landing/
├── app/
│   ├── layout.tsx          # Fonts, metadata, GTM, RTL setup
│   ├── page.tsx             # Assembles all sections
│   ├── globals.css          # Tailwind + design tokens
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── sections/             # Hero, Services, WhyEpoxy, Projects, Faq, FinalCta, Footer
│   ├── ui/                   # WhatsAppButton, StickyMobileCta, Logo, ScrollToTop, AccordionItem
│   └── analytics/            # GoogleTagManager, UtmCapture, trackEvent
├── lib/
│   ├── constants.ts          # Single source of truth for company data
│   ├── whatsapp.ts           # WhatsApp/call link builders + CTA sources
│   └── utm.ts                # UTM capture & storage
└── public/images/            # Real project photos
```

## 📄 License

Private project — جميع الحقوق محفوظة لصاحب النشاط التجاري.
