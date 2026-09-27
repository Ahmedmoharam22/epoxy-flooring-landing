import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import Script from "next/script";
import { COMPANY } from "@/lib/constants";
import { GoogleTagManagerNoScript } from "@/components/analytics/GoogleTagManager";
import { UtmCapture } from "@/components/analytics/UtmCapture";
import { StickyMobileCta } from "@/components/ui/StickyMobileCta";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://epoxy-experts.vercel.app"), // حدّثه لما يبقى فيه دومين حقيقي
  title: "خبراء الإيبوكسي | تركيب أرضيات إيبوكسي للمصانع والمستودعات",
  description:
    "توريد وتركيب أرضيات إيبوكسي احترافية للمصانع والهناجر والورش والمستودعات في المملكة العربية السعودية. تواصل معنا عبر واتساب للحصول على عرض سعر.",
  alternates: {
    canonical: "/",
  },
  keywords: ['أرضيات ايبوكسي', 'تركيب أرضيات ايبوكسي', 'أرضيات ايبوكسي مصانع', 'أرضيات ايبوكسي مستودعات', 'أرضيات ايبوكسي ورش'],
  openGraph: {
    title: "خبراء الإيبوكسي | أرضيات إيبوكسي صناعية",
    description:
      "توريد وتركيب أرضيات إيبوكسي احترافية للمصانع والهناجر والورش والمستودعات.",
    url: "https://epoxy-experts.vercel.app",
    siteName: COMPANY.name,
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "خبراء الإيبوكسي | أرضيات إيبوكسي صناعية",
    description:
      "توريد وتركيب أرضيات إيبوكسي احترافية للمصانع والهناجر والورش والمستودعات.",
    images: ["/images/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className="font-sans antialiased bg-white text-[#111418]">
        <GoogleTagManagerNoScript />
        <UtmCapture />
        {children}
        <StickyMobileCta />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXXX');`,
          }}
        />
      </body>
    </html>
  );
}