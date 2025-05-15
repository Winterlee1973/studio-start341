import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2 className={cn('text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-primary', className)}>
      {children}
    </h2>
  );
}
