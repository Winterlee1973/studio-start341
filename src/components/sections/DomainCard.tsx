import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DomainCardProps {
  name: string;
  imageUrl: string;
  dataAiHint: string;
}

export function DomainCard({ name, imageUrl, dataAiHint }: DomainCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative w-full h-48"> {/* Fixed height for image container */}
          <Image src={imageUrl} alt={`${name} logo`} layout="fill" objectFit="contain" className="p-4" data-ai-hint={dataAiHint} />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-semibold text-primary text-center">{name}</CardTitle>
      </CardContent>
    </Card>
  );
}
