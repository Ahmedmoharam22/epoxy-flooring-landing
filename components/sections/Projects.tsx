// import Image from 'next/image';
// import { ArrowLeft, ArrowUpIcon } from 'lucide-react';
// import { WhatsAppButton } from '../ui/WhatsAppButton';
// import { CTA_SOURCE } from '@/lib/whatsapp';
// import Link from 'next/link';

// export interface ProjectItem {
//   id: string;
//   title: string;
//   tag: string;
//   image: string;
// }

// const defaultProjects: ProjectItem[] = [
//   {
//     id: '1',
//     title: 'مساحة صناعية واسعة بأرضية إيبوكسي عالية التحمل',
//     tag: 'مساحة صناعية',
//     image: '/images/epoxy-factory-01.webp',
//   },
//   {
//     id: '2',
//     title: 'ورشة عمل بأرضية إيبوكسي وخطوط تحديد وتنظيم أمان',
//     tag: 'هنجر',
//     image: '/images/epoxy-factory-02.webp',
//   },
//   {
//     id: '3',
//     title: 'مستودع تخزين بأرضية إيبوكسي منظمة وسهلة التنظيف',
//     tag: 'مستودع',
//     image: '/images/epoxy-factory-03.webp',
//   },
// ];

// interface ProjectsProps {
//   projects?: ProjectItem[];
// }

// export default function Projects({ projects = defaultProjects }: ProjectsProps) {
//   return (
//     <section id="projects" dir="rtl" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
//       {/* Header Section */}
//       <div className="mb-12">
//         <p className="mb-3 text-xs font-black tracking-[0.18em] text-industrial-gold-dark">
//           مشاريع وصور توضيحية
//         </p>
//         <h2 className="text-3xl font-black text-industrial-dark sm:text-4xl lg:text-5xl">
//           نماذج من أعمالنا
//         </h2>
//         <p className="mt-4 max-w-xl text-sm leading-relaxed text-industrial-dark-card/70">
//           صور توضيحية لطبيعة المساحات والحلول التي يمكن تنفيذها. يُستبدل المعرض لاحقاً بصور مشاريع الشركة المعتمدة.
//         </p>
//       </div>

//       {/* Bento-style Portfolio Grid */}
//       <div className="grid gap-4 sm:grid-cols-12">
        
//         {/* Project 1 - Main Large Featured Image */}
//         <div className="group relative min-h-[380px] overflow-hidden rounded-xl bg-industrial-dark sm:col-span-7 sm:min-h-[420px]">
//           <Image
//             src={projects[0]?.image || '/epoxy-hero.png'}
//             alt={projects[0]?.title || 'مساحة صناعية بأرضية إيبوكسي'}
//             fill
//             loading="lazy"
//             className="object-cover object-center transition duration-700 group-hover:scale-105"
//             sizes="(max-width: 640px) 100vw, 58vw"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
          
//           <span className="absolute bottom-5 right-5 rounded-md bg-industrial-dark-card/90 px-4 py-2 text-xs font-bold text-white backdrop-blur-md border border-white/10 shadow-lg">
//             {projects[0]?.tag || 'مساحة صناعية'}
//           </span>
//         </div>

//         {/* Project 2 - Medium Image */}
//         <div className="group relative min-h-[260px] overflow-hidden rounded-xl bg-industrial-dark sm:col-span-5">
//           <Image
//             src={projects[1]?.image || '/epoxy-project-2.png'}
//             alt={projects[1]?.title || 'ورشة بأرضية إيبوكسي'}
//             fill
//             loading="lazy"
//             className="object-cover object-center transition duration-700 group-hover:scale-105"
//             sizes="(max-width: 640px) 100vw, 42vw"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

//           <span className="absolute bottom-5 right-5 rounded-md bg-industrial-dark-card/90 px-4 py-2 text-xs font-bold text-white backdrop-blur-md border border-white/10 shadow-lg">
//             {projects[1]?.tag || 'ورشة'}
//           </span>
//         </div>

//         {/* Project 3 - Medium Image */}
//         <div className="group relative min-h-[260px] overflow-hidden rounded-xl bg-industrial-dark sm:col-span-5">
//           <Image
//             src={projects[2]?.image || '/epoxy-project-3.png'}
//             alt={projects[2]?.title || 'مستودع بأرضية إيبوكسي'}
//             fill
//             loading="lazy"
//             className="object-cover object-center transition duration-700 group-hover:scale-105"
//             sizes="(max-width: 640px) 100vw, 42vw"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

//           <span className="absolute bottom-5 right-5 rounded-md bg-industrial-dark-card/90 px-4 py-2 text-xs font-bold text-white backdrop-blur-md border border-white/10 shadow-lg">
//             {projects[2]?.tag || 'مستودع'}
//           </span>
//         </div>

//         {/* Conversion Action Card (Replacing Image Slot) */}
//         <div className="flex min-h-[260px] flex-col justify-end rounded-xl bg-industrial-gold p-6 sm:col-span-7 sm:p-8 shadow-md">
//           <div>
//             <p className="text-xs font-black tracking-[0.16em] text-industrial-dark-card/70">
//               جاهزون لمناقشة مشروعك
//             </p>
//             <h3 className="mt-2 max-w-md text-2xl font-black leading-snug text-industrial-dark sm:text-3xl">
//               كل مشروع أرضيات يبدأ بفهم احتياجه الفعلي.
//             </h3>
            
//             <WhatsAppButton
//               message="السلام عليكم، أود الاستفسار عن أرضيات الإيبوكسي لمشروعي."
//               source={CTA_SOURCE.PROJECTS}
//               className="mt-6 inline-flex items-center gap-2 rounded-md bg-industrial-dark px-6 py-3 text-sm font-black text-white transition-all hover:bg-[#2e2f2b]"
//             >
//               <span>تواصل معنا عبر واتساب</span>
//               <ArrowLeft size={16} />
//             </WhatsAppButton>
//           </div>
//         </div>

//       </div>
//          <div className="flex justify-center mt-10">
//           <Link
//             href="/projects"
//             className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-bold border-2 border-[#111418] text-[#111418] hover:bg-[#111418] hover:text-white transition"
//           >
//             عرض كل الأعمال
//             <ArrowUpIcon />
//           </Link>
//         </div>
//     </section>
//   );
// }


import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { CTA_SOURCE } from '@/lib/whatsapp';
import Link from 'next/link';

export interface ProjectItem {
  id: string;
  title: string;
  tag: string;
  image: string;
}

const defaultProjects: ProjectItem[] = [
  {
    id: '1',
    title: 'مساحة صناعية واسعة بأرضية إيبوكسي عالية التحمل',
    tag: 'مساحة صناعية',
    image: '/images/epoxy-factory-01.webp',
  },
  {
    id: '2',
    title: 'ورشة عمل بأرضية إيبوكسي وخطوط تحديد وتنظيم أمان',
    tag: 'هنجر',
    image: '/images/epoxy-factory-02.webp',
  },
  {
    id: '3',
    title: 'مستودع تخزين بأرضية إيبوكسي منظمة وسهلة التنظيف',
    tag: 'مستودع',
    image: '/images/epoxy-factory-03.webp',
  },
];

interface ProjectsProps {
  projects?: ProjectItem[];
}

export default function Projects({ projects = defaultProjects }: ProjectsProps) {
  return (
    <section id="projects" dir="rtl" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      {/* Header Section */}
      <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-xs font-black tracking-[0.18em] text-industrial-gold-dark">
            مشاريع وصور توضيحية
          </p>
          <h2 className="text-3xl font-black text-industrial-dark sm:text-4xl lg:text-5xl">
            نماذج من أعمالنا
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-industrial-dark-card/70">
            صور توضيحية لطبيعة المساحات والحلول التي يمكن تنفيذها. يُستبدل المعرض لاحقاً بصور مشاريع الشركة المعتمدة.
          </p>
        </div>

        {/* زرار "عرض الكل" جنب العنوان بدل تحت الجريد */}
        <Link
          href="/projects"
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-md border-2 border-industrial-dark px-5 py-2.5 text-sm font-black text-industrial-dark transition-colors hover:bg-industrial-dark hover:text-white sm:self-auto"
        >
          <span>عرض كل الأعمال</span>
          <ArrowLeft size={16} />
        </Link>
      </div>

      {/* Bento-style Portfolio Grid */}
      <div className="grid gap-4 sm:grid-cols-12">
        {/* Project 1 - Main Large Featured Image */}
        <div className="group relative min-h-[380px] overflow-hidden rounded-xl bg-industrial-dark sm:col-span-7 sm:min-h-[420px]">
          <Image
            src={projects[0]?.image || '/epoxy-hero.png'}
            alt={projects[0]?.title || 'مساحة صناعية بأرضية إيبوكسي'}
            fill
            loading="lazy"
            className="object-cover object-center transition duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 58vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-60" />
          <span className="absolute bottom-5 right-5 rounded-md border border-white/10 bg-industrial-dark-card/90 px-4 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-md">
            {projects[0]?.tag || 'مساحة صناعية'}
          </span>
        </div>

        {/* Project 2 */}
        <div className="group relative min-h-[260px] overflow-hidden rounded-xl bg-industrial-dark sm:col-span-5">
          <Image
            src={projects[1]?.image || '/epoxy-project-2.png'}
            alt={projects[1]?.title || 'ورشة بأرضية إيبوكسي'}
            fill
            loading="lazy"
            className="object-cover object-center transition duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 42vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-60" />
          <span className="absolute bottom-5 right-5 rounded-md border border-white/10 bg-industrial-dark-card/90 px-4 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-md">
            {projects[1]?.tag || 'ورشة'}
          </span>
        </div>

        {/* Project 3 */}
        <div className="group relative min-h-[260px] overflow-hidden rounded-xl bg-industrial-dark sm:col-span-5">
          <Image
            src={projects[2]?.image || '/epoxy-project-3.png'}
            alt={projects[2]?.title || 'مستودع بأرضية إيبوكسي'}
            fill
            loading="lazy"
            className="object-cover object-center transition duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 42vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-60" />
          <span className="absolute bottom-5 right-5 rounded-md border border-white/10 bg-industrial-dark-card/90 px-4 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-md">
            {projects[2]?.tag || 'مستودع'}
          </span>
        </div>

        {/* Conversion Action Card */}
        <div className="flex min-h-[260px] flex-col justify-end rounded-xl bg-industrial-gold p-6 shadow-md sm:col-span-7 sm:p-8">
          <div>
            <p className="text-xs font-black tracking-[0.16em] text-industrial-dark-card/70">
              جاهزون لمناقشة مشروعك
            </p>
            <h3 className="mt-2 max-w-md text-2xl font-black leading-snug text-industrial-dark sm:text-3xl">
              كل مشروع أرضيات يبدأ بفهم احتياجه الفعلي.
            </h3>

            <WhatsAppButton
              message="السلام عليكم، أود الاستفسار عن أرضيات الإيبوكسي لمشروعي."
              source={CTA_SOURCE.PROJECTS}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-industrial-dark px-6 py-3 text-sm font-black text-white transition-all hover:bg-[#2e2f2b]"
            >
              <span>تواصل معنا عبر واتساب</span>
              <ArrowLeft size={16} />
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}