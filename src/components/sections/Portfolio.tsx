import { PORTFOLIO_ITEMS } from '@/lib/constants';
import { SectionLayout } from '@/components/shared/SectionLayout';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { DomainCard } from './DomainCard';

export function Portfolio() {
  return (
    <SectionLayout id="portfolio">
      <SectionTitle>Our Premium Web Properties</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
