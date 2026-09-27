import { ProjectsPage } from '@/components/pages/projects-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'أعمالنا | خبراء الإيبوكسي',
  description:
    'شاهد نماذج من أعمال خبراء الإيبوكسي في توريد وتركيب أرضيات الإيبوكسي للمصانع والهناجر والورش والمستودعات.',
};

export const dynamic = 'force-static';

export default function Page() {
  return <ProjectsPage />;
}