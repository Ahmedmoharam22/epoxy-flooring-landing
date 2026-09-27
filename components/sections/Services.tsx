import Image from 'next/image';
import { ArrowLeft, Factory, Warehouse, Wrench, Building2, LucideIcon } from 'lucide-react';
import { CTA_SOURCE } from '@/lib/whatsapp';
import { WhatsAppButton } from '../ui/WhatsAppButton';

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

const defaultServices: ServiceItem[] = [
  {
    number: '01',
    title: 'أرضيات المصانع',
    description: 'تحمل ممتاز للأحمال الثقيلة، مقاومة المواد الكيميائية والزيوت، وسهولة تامة في التنظيف والصيانة.',
    image: '/images/epoxy-factory-01.jpg',
    icon: Factory,
  },
  {
    number: '02',
    title: 'أرضيات المستودعات',
    description: 'أرضيات مستوية ذات مقاومة عالية للتآكل وحركة الرافعات الشوكية المستمرة لضمان بيئة عمل آمنة.',
    image: '/images/epoxy-warehouse-01.jpg',
    icon: Warehouse,
  },
  {
    number: '03',
    title: 'أرضيات الورش',
    description: 'طلاء عالي الصلابة يحمي الأرضيات الخرسانية من الشحوم والصدمات ويمنع تراكم الأتربة.',
    image: '/images/epoxy-factory-02.jpg',
    icon: Wrench,
  },
  {
    number: '04',
    title: 'أرضيات الهناجر والمساحات التجارية',
    description: 'حلول إيبوكسي بمظهر احترافي ومنظم يعكس انطباعاً راقياً وعصرياً للمنشآت والمساحات الواسعة.',
    image: '/images/epoxy-factory-03.jpg',
    icon: Building2,
  },
];

interface ServicesProps {
  services?: ServiceItem[];
}

export default function Services({ services = defaultServices }: ServicesProps) {
  return (
    <section id="services" dir="rtl" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      {/* Header Section */}
      <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-xs font-black tracking-[0.18em] text-industrial-gold-dark">
            مجالات التنفيذ
          </p>
          <h2 className="max-w-xl text-3xl font-black leading-tight text-industrial-dark sm:text-4xl lg:text-5xl">
            خدمات أرضيات الإيبوكسي
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-industrial-dark-card/70">
          حلول عملية ومدروسة للمشاريع التي تحتاج أرضيات بمظهر منظم، تحمل عالي، وحضور مهني.
        </p>
      </div>

      {/* Services Cards Grid */}
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          const prefilledMessage = `السلام عليكم، أود الاستفسار عن خدمة ${service.title} وتفاصيل تنفيذها لمشروعي.`;

          return (
            <article
              key={service.number}
              className="group relative min-h-[360px] overflow-hidden rounded-xl bg-industrial-dark-card text-white shadow-md transition-all duration-300 hover:shadow-xl"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                loading="lazy"
                className="object-cover opacity-50 transition duration-700 group-hover:scale-105 group-hover:opacity-65"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark-deep via-[#171814]/60 to-transparent" />

              {/* Card Content */}
              <div className="relative flex min-h-[360px] flex-col justify-between p-6 sm:p-8">
                {/* Top Bar inside Card */}
                <div className="flex items-start justify-between">
                  <span className="text-3xl font-light tracking-wider text-industrial-gold">
                    {service.number}
                  </span>
                  <div className="rounded-lg bg-black/40 p-2.5 backdrop-blur-md transition-colors group-hover:bg-industrial-gold/20">
                    <Icon size={24} className="text-industrial-gold" strokeWidth={1.75} />
                  </div>
                </div>

                {/* Bottom Details */}
                <div>
                  <h3 className="text-2xl font-black text-white">{service.title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">
                    {service.description}
                  </p>

                  {/* CTA Link with Industrial Gold Border Alignment */}
                  <WhatsAppButton
                    message={prefilledMessage}
                    source={`${CTA_SOURCE.SERVICES}_${service.title}`}
                    variant="outline"
                    className="mt-5 inline-flex items-center gap-2 rounded-lg border border-industrial-gold/40 bg-black/30 px-4 py-2.5 text-xs font-bold text-industrial-gold backdrop-blur-sm transition-all hover:border-industrial-gold hover:bg-industrial-gold hover:text-industrial-dark group-hover:translate-x-[-4px] sm:opacity-90 sm:group-hover:opacity-100"
                  >
                    <span>استفسر عن هذا النوع عبر واتساب</span>
                    <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                  </WhatsAppButton>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}