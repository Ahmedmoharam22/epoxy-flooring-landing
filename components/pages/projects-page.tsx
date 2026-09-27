'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';
import { ArrowLeft, ArrowUpLeft } from 'lucide-react';
import { FinalCTA } from '../sections/FinalCta';

const projects = [
  {
    number: '01',
    image: '/images/projects/project-4.webp',
    alt: 'مشروع أرضيات إيبوكسي في مساحة صناعية واسعة',
  },
  {
    number: '02',
    image: '/images/projects/project-2.webp',
    alt: 'تفاصيل أرضية إيبوكسي بتشطيب احترافي',
  },
  {
    number: '03',
    image: '/images/projects/project-3.webp',
    alt: 'أرضية إيبوكسي في ورشة صناعية',
  },
  {
    number: '04',
    image: '/images/projects/project-1.webp',
    alt: 'أرضية إيبوكسي في مستودع منظم',
  },
  {
    number: '05',
    image: '/images/projects/project-5.webp',
    alt: 'تشطيب أرضيات إيبوكسي لمساحة تشغيلية',
  },
  {
    number: '06',
    image: '/images/projects/project-6.webp',
    alt: 'سطح إيبوكسي صناعي متين',
  },
];

export function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    setActiveProject((current) =>
      current === null ? 0 : (current + 1) % projects.length
    );
  }, []);

  const handlePrev = useCallback(() => {
    setActiveProject((current) =>
      current === null ? 0 : (current - 1 + projects.length) % projects.length
    );
  }, []);

  useEffect(() => {
    if (activeProject === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveProject(null);
      if (event.key === 'ArrowLeft') handleNext();
      if (event.key === 'ArrowRight') handlePrev();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeProject, handleNext, handlePrev]);

  return (
    <main dir="rtl" className="min-h-screen bg-[#f3f1ed] text-[#20211e]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-industrial-dark px-5 py-12 text-white sm:py-16 lg:px-8 lg:py-20">
        <div className="relative mx-auto max-w-7xl">
          {/* Back to Home Action Link */}
          <div className="mb-8 flex items-center justify-end">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm font-bold text-white/85 backdrop-blur-sm transition-all hover:border-industrial-gold/50 hover:text-industrial-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-industrial-gold focus-visible:ring-offset-2 focus-visible:ring-offset-industrial-dark"
            >
              <span>العودة للرئيسية</span>
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>

          <p className="mb-5 flex items-center gap-3 text-xs font-black tracking-[0.2em] text-industrial-gold">
            <span className="h-px w-10 bg-industrial-gold" /> أعمالنا
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
            نماذج من مشاريعنا
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
            استكشف مجموعة من أعمال أرضيات الإيبوكسي التي تعكس جودة التنفيذ والاهتمام بالتفاصيل.
          </p>
        </div>
      </section>

      {/* Gallery Bento Grid */}
      <section
        className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"
        aria-labelledby="gallery-title"
      >
    <div className="grid gap-4 sm:grid-cols-12">
          {projects.map((project, index) => (
            <button
              key={`${project.number}-${index}`}
              type="button"
              onClick={() => setActiveProject(index)}
              className={`group relative min-h-[300px] overflow-hidden bg-industrial-dark text-right focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-industrial-gold ${
                index === 0
                  ? 'sm:col-span-7 sm:min-h-[470px]'
                  : index === 1
                  ? 'sm:col-span-5 sm:min-h-[470px]'
                  : 'sm:col-span-4 sm:min-h-[300px]'
              }`}
              aria-label={`فتح صورة مشروع ${project.number}`}
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                priority={index < 2}
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes={
                  index < 2
                    ? '(max-width: 640px) 100vw, 58vw'
                    : '(max-width: 640px) 100vw, 33vw'
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark/90 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
                <span className="text-3xl font-light text-industrial-gold">
                  {project.number}
                </span>
                <span className="translate-y-2 text-sm font-bold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 flex items-center">
                  مشروع {project.number} <ArrowUpLeft className="mr-1 inline" size={15} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <FinalCTA />
    </main>
  );
}