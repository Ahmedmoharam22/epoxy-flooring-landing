import Image from 'next/image';
import { MessageCircle, ArrowLeft, ArrowUpLeft, Check } from 'lucide-react';
import { WHATSAPP_MESSAGES } from '@/lib/constants';
import { CTA_SOURCE } from '@/lib/whatsapp';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import Link from 'next/link';

export function Hero() {
  return (
    <section
      id="top"
      dir="rtl"
      className="relative flex min-h-[100dvh] w-full items-center overflow-hidden bg-industrial-dark py-20 lg:py-24"
    >
      {/* Hero Background Image */}
      <Image
        src="/images/epoxy-hero.webp"
        alt="أرضية إيبوكسي احترافية في مساحة صناعية واسعة"
        fill
        priority
        className="object-cover object-center opacity-85 pointer-events-none"
        sizes="100vw"
      />

      {/* Industrial Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-industrial-dark-deep/95 via-[#181916]/80 to-[#181916]/40 pointer-events-none" />
      <div className="absolute inset-0 opacity-15 industrial-grid pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-0">
        <div className="mx-auto max-w-3xl text-center sm:mx-0 sm:text-right">
          
          {/* Brand Name — acts as the logo, no image logo exists */}
          <div className="mb-6 flex items-center justify-center gap-3 sm:mb-7 sm:justify-start">
            <span className="hidden h-px w-10 bg-industrial-gold sm:block" />
            <span className="text-3xl font-black tracking-tight text-industrial-gold sm:text-2xl lg:text-3xl">
              خبراء الإيبوكسي
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="max-w-3xl text-3xl font-black leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            حلول إيبوكسي احترافية
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:mx-0 sm:mt-6 sm:text-base lg:text-lg">
            توريد وتركيب حلول إيبوكسي متكاملة مصممة لتناسب احتياجات المصانع، الهناجر، الورش، والمستودعات بأعلى معايير الجودة والتحمل.
          </p>

          {/* Call To Actions */}
          <div className="mt-7 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <WhatsAppButton
              message={WHATSAPP_MESSAGES.default}
              source={CTA_SOURCE.HERO}
              className="group inline-flex min-h-[52px] w-full sm:w-auto items-center justify-center gap-3 rounded-md bg-industrial-gold px-7 py-3.5 text-sm font-black text-industrial-dark transition-all hover:bg-industrial-gold-hover active:scale-[0.99]"
            >
              <MessageCircle size={20} className="fill-current" />
              <span>اطلب عرض سعر عبر واتساب</span>
              <ArrowLeft
                size={18}
                className="transition-transform group-hover:-translate-x-1"
              />
            </WhatsAppButton>

            <Link
              href="/projects"
              className="group inline-flex min-h-[52px] w-full sm:w-auto items-center justify-center gap-2 rounded-md border-2 border-white/30 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              <span>شاهد أعمالنا</span>
              <ArrowUpLeft
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5"
              />
            </Link>
          </div>

          {/* Quick Trust Badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-xs font-semibold text-white/75 sm:mt-12 sm:justify-start sm:text-sm">
            <span className="flex items-center gap-2">
              <Check size={16} className="text-industrial-gold shrink-0" />
              توريد وتركيب متكامل
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-industrial-gold shrink-0" />
              حلول مخصصة للمشروعات الصناعية
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-industrial-gold shrink-0" />
              تنفيذ احترافي مطابق للمواصفات
            </span>
          </div>

        </div>
      </div>

      {/* Decorative Industrial Bottom Accent Stripe */}
      <div className="absolute bottom-0 left-0 hidden h-3 w-1/4 bg-industrial-gold lg:block pointer-events-none" />
    </section>
  );
}