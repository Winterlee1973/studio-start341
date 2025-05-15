
import { PORTFOLIO_ITEMS } from '@/lib/constants';
import { SectionLayout } from '@/components/shared/SectionLayout';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { DomainCard } from './DomainCard';

export function Portfolio() {
  return (
    <SectionLayout id="portfolio">
      <SectionTitle>Our Premium Web Properties</SectionTitle>
      <p className="text-center text-lg text-muted-foreground mb-6 max-w-3xl mx-auto -mt-6 lg:-mt-10">
        Showcasing a selection of our flagship domains. Our complete portfolio includes these and over 100 other valuable web properties.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {PORTFOLIO_ITEMS.map((item) => (
          <DomainCard
            key={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            dataAiHint={item.dataAiHint}
          />
        ))}
      </div>
    </SectionLayout>
  );
}
