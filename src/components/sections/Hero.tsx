import { Button } from '@/components/ui/button';
import { MISSION_STATEMENT_SHORT } from '@/lib/constants';
import { SectionLayout } from '@/components/shared/SectionLayout';
import Link from 'next/link';

export function Hero() {
  return (
    <SectionLayout id="home" className="bg-secondary/50 text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          Welcome to Start341
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-muted-foreground mb-8">
          {MISSION_STATEMENT_SHORT} We specialize in acquiring, developing, and monetizing premium web properties, turning valuable domain names into thriving digital assets.
        </p>
        <div className="space-x-4">
          {/* Buttons removed as per request */}
        </div>
      </div>
    </SectionLayout>
  );
}
