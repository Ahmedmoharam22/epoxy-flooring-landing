import { MessageCircle, Ruler, HardHat, LucideIcon } from 'lucide-react';
export interface ProcessStep {
  number: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

const defaultSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'تواصل معنا',
    desc: 'أرسل لنا تفاصيل مشروعك، المساحة، وطبيعة النشاط للحصول على استشارة أولية.',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'تحديد الاحتياج',
    desc: 'نقيّم طبيعة المساحة ونحدد النظام الإيبوكسي الأنسب لنوع وحجم استخدامك.',
    icon: Ruler,
  },
  {
    number: '03',
    title: 'التوريد والتركيب',
    desc: 'تنفيذ وتوريد أعمال الأرضيات بمهنية وفق نطاق العمل والمواصفات المتفق عليها.',
    icon: HardHat,
  },
];

interface ProcessProps {
  steps?: ProcessStep[];
}

export default function Process({ steps = defaultSteps }: ProcessProps) {
  return (
    <section id="process" dir="rtl" className="border-y border-industrial-dark-card/10 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        
        {/* Section Header */}
        <div className="mb-14 max-w-xl">
          <p className="mb-3 text-xs font-black tracking-[0.18em] text-industrial-gold-dark">
            خطوات واضحة
          </p>
          <h2 className="text-3xl font-black text-industrial-dark sm:text-4xl lg:text-5xl">
            من التواصل إلى تنفيذ المشروع
          </h2>
        </div>

        {/* Process Steps Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            
            return (
              <div
                key={step.number}
                className="group relative border-t-2 border-industrial-dark-card pt-6 transition-all duration-300 hover:border-industrial-gold-dark"
              >
                {/* Step Header Bar */}
                <div className="flex items-start justify-between">
                  <span className="text-4xl font-black tracking-tight text-industrial-gold transition-transform duration-300 group-hover:scale-110">
                    {step.number}
                  </span>
                  <div className="rounded-lg bg-[#f8f7f4] p-2.5 text-industrial-gold-dark transition-colors group-hover:bg-industrial-gold-dark group-hover:text-white">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="mt-8 text-xl font-black text-industrial-dark">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-industrial-dark-card/70">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}