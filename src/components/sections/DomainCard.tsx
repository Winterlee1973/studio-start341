import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe2 } from 'lucide-react';
import Link from 'next/link';

interface DomainCardProps {
  name: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
}

export function DomainCard({ name, description, imageUrl, dataAiHint }: DomainCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" data-ai-hint={dataAiHint} />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold mb-2 text-primary">{name}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
          <Link href={`#strategy?domain=${encodeURIComponent(name)}`}>
            <Globe2 className="mr-2 h-4 w-4" /> View Strategy Ideas
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
