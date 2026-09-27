import Image from 'next/image';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import { WHATSAPP_MESSAGES } from '@/lib/constants';
import { CTA_SOURCE } from '@/lib/whatsapp';
import { WhatsAppButton } from '../ui/WhatsAppButton';

export function CTA() {
  return (
    <section
      id="cta"
      dir="rtl"
      className="relative overflow-hidden bg-industrial-dark-deep px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background Image */}
      <Image
        src="/images/epoxy-project-2.png"
        alt="أرضية إيبوكسي احترافية في ورشة صناعية"
        fill
        loading="lazy"
        className="object-cover opacity-35 pointer-events-none"
        sizes="100vw"
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-industrial-dark-deep/75 pointer-events-none" />

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-black tracking-[0.18em] text-industrial-gold">
          خطوتك التالية
        </p>

        <h2 className="max-w-2xl text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
          لديك مصنع أو ورشة أو مستودع؟
        </h2>

        <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base lg:text-lg">
          تواصل معنا لمعرفة الحل المناسب لمشروعك والحصول على عرض سعر مخصص ومباشر.
        </p>

        <div className="mt-8">
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.default}
            source={CTA_SOURCE.CTA_SECTION}
            className="group inline-flex min-h-[52px] w-full sm:w-auto items-center justify-center gap-3 rounded-md bg-industrial-gold px-8 py-4 text-sm font-black text-industrial-dark transition-all hover:bg-industrial-gold-hover active:scale-[0.99]"
          >
            <MessageCircle size={20} className="fill-current" />
            <span>تواصل معنا عبر واتساب</span>
            <ArrowLeft
              size={18}
              className="transition-transform group-hover:-translate-x-1"
            />
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}