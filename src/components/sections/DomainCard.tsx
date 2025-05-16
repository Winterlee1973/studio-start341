
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface DomainCardProps {
  name: string;
  imageUrl: string;
  dataAiHint: string;
}

export function DomainCard({ name, imageUrl, dataAiHint }: DomainCardProps) {
  return (
    <Card className="overflow-hidden hover-scale card-shadow group">
      <CardContent className="p-0">
        <div className="relative w-full aspect-[4/3] bg-secondary/30 group-hover:bg-secondary/50 transition-colors">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="p-6 object-contain"
            data-ai-hint={dataAiHint}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-primary text-center tracking-tight">
            {name}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
}
