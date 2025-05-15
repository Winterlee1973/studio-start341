
import { PORTFOLIO_ITEMS } from '@/lib/constants';
import { SectionLayout } from '@/components/shared/SectionLayout';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { DomainCard } from './DomainCard';

export function Portfolio() {
  return (
    <SectionLayout id="portfolio">
      <SectionTitle>Our Premium Web Properties</SectionTitle>
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto -mt-6 lg:-mt-10">
        Showcasing a selection of our prime digital real estate. Our complete portfolio includes these flagship domains and over 100 other valuable web properties.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PORTFOLIO_ITEMS.map((item) => (
          <DomainCard
            key={item.id}
            name={item.name}
            description={item.description}
            imageUrl={item.imageUrl}
            dataAiHint={item.dataAiHint}
          />
        ))}
      </div>
    </SectionLayout>
  );
}
