# خبراء الإيبوكسي | Epoxy Experts — Landing Page

<p align="center">
<img width="1280" height="960" alt="epoxy-factory-03" src="https://github.com/user-attachments/assets/ed8e6093-6026-4f87-b490-5823f6a56aed" />
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
<img width="1376" height="768" alt="epoxy-project-3" src="https://github.com/user-attachments/assets/a73593a3-171e-468c-9b04-0acf2a262bdf" />
<img width="1408" height="768" alt="epoxy-project-2" src="https://github.com/user-attachments/assets/964d5d68-df0f-497b-b6ad-142468a059d2" />
<img width="1280" height="960" alt="epoxy-factory-02" src="https://github.com/user-attachments/assets/b94491a6-2359-4d73-b7f1-d8658a0ff57c" />






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

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)                                       

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
