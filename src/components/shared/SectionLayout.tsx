import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionLayoutProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionLayout({ children, className, id }: SectionLayoutProps) {
  return (
    <section id={id} className={cn('py-12 md:py-16 lg:py-20', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
