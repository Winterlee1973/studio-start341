
import { Button } from '@/components/ui/button';
import { MISSION_STATEMENT_SHORT } from '@/lib/constants';
import { SectionLayout } from '@/components/shared/SectionLayout';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <SectionLayout id="home" className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background min-h-[50vh] flex items-center">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px] bg-[position:-1px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px] bg-[position:-1px]" />
      </div>
      <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight gradient-text mb-8">
          Welcome to Start341
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          {MISSION_STATEMENT_SHORT} We transform valuable domains into thriving digital enterprises.
        </p>
        <div className="flex gap-6">
        </div>
      </div>
    </SectionLayout>
  );
}
