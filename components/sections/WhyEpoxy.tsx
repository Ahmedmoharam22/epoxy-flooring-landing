import Image from 'next/image';
import { Check } from 'lucide-react';

export interface EpoxyFeature {
  title: string;
  desc: string;
}

const defaultFeatures: EpoxyFeature[] = [
  {
    title: 'متانة مناسبة للاستخدامات المختلفة',
    desc: 'حلول قابلة للتكييف مع طبيعة الحركة والأحمال في منشأتك.',
  },
  {
    title: 'سهولة التنظيف والعناية',
    desc: 'سطح أملس وعملي يمنع تراكم الأتربة والزيوت ويساعد على الحفاظ على مظهر مرتب.',
  },
  {
    title: 'مظهر احترافي ومنظم',
    desc: 'تشطيب هندسي ممتاز يرفع جودة حضور المساحة أمام العملاء والزوار.',
  },
  {
    title: 'حلول تناسب احتياجات المشروع',
    desc: 'نبدأ بفهم طبيعة المساحة ونوع النشاط قبل اختيار وتحديد النظام الإيبوكسي المناسب.',
  },
];

interface WhyEpoxyProps {
  features?: EpoxyFeature[];
  imageSrc?: string;
}

export default function WhyEpoxy({
  features = defaultFeatures,
  imageSrc = '/images/epoxy-project-1.png',
}: WhyEpoxyProps) {
  return (
    <section id="why-epoxy" dir="rtl" className="bg-industrial-dark-card text-white overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        
        {/* Visual / Image Side */}
        <div className="relative min-h-[380px] sm:min-h-[460px] overflow-hidden rounded-xl bg-[#171814] shadow-2xl">
          <Image
            src={imageSrc}
            alt="تفاصيل أرضية إيبوكسي بتشطيب احترافي عالي التحمل"
            fill
            loading="lazy"
            className="object-cover object-center transition duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          
          {/* Subtle Industrial Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Floating Badge */}
          <div className="absolute bottom-0 right-0 bg-industrial-gold px-6 py-4 text-xs sm:text-sm font-black text-industrial-dark-card shadow-lg">
            أرضيات مخصصة للمشاريع الصناعية
          </div>
        </div>

        {/* Content Side */}
        <div>
          <p className="mb-3 text-xs font-black tracking-[0.18em] text-industrial-gold">
            أداء ومظهر
          </p>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            لماذا أرضيات الإيبوكسي؟
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
            حلول تجمع بين المظهر المنظم المشرّف والاحتياج العملي الفعلي للمساحات الصناعية والتجارية.
          </p>

          {/* Feature List */}
          <div className="mt-8 space-y-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group flex gap-4 border-t border-white/10 pt-5 transition-colors hover:border-white/20"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-industrial-gold text-industrial-dark-card transition-transform group-hover:scale-110">
                  <Check size={16} strokeWidth={3} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-industrial-gold transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}