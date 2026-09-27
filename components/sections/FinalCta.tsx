import { MessageCircle } from 'lucide-react';
import { WHATSAPP_MESSAGES } from '@/lib/constants';
import { CTA_SOURCE } from '@/lib/whatsapp';
import { WhatsAppButton } from '../ui/WhatsAppButton';

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      dir="rtl"
      className="bg-industrial-gold px-5 py-16 text-center sm:px-6 lg:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-black text-industrial-dark sm:text-4xl lg:text-5xl">
          جاهز لبدء مشروع أرضيات الإيبوكسي؟
        </h2>
        
        <p className="mt-3 text-sm sm:text-base font-bold text-industrial-dark/80">
          تواصل معنا الآن للحصول على استشارة وعرض سعر لمشروعك.
        </p>

        <div className="mt-7 flex justify-center">
          <WhatsAppButton
            message={WHATSAPP_MESSAGES.finalCta}
            source={CTA_SOURCE.FINAL_CTA}
            className="group inline-flex min-h-[52px] w-full sm:w-auto items-center justify-center gap-3 rounded-md bg-industrial-dark-card px-8 py-4 text-sm font-black text-white shadow-lg transition-all hover:bg-industrial-dark active:scale-[0.99]"
          >
            <MessageCircle size={20} className="fill-current text-industrial-gold" />
            <span>اطلب عرض سعر عبر واتساب</span>
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
