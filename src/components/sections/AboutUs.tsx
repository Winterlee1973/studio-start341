import Image from 'next/image';
import { TEAM_MEMBERS, MISSION_STATEMENT_LONG } from '@/lib/constants';
import { SectionLayout } from '@/components/shared/SectionLayout';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export function AboutUs() {
  return (
    <SectionLayout id="about" className="bg-secondary/50">
      <SectionTitle>About Start341</SectionTitle>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-lg text-muted-foreground">{MISSION_STATEMENT_LONG}</p>
      </div>
      
      <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">Meet Our Leadership</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {TEAM_MEMBERS.map((member) => (
          <Card key={member.id} className="text-center shadow-lg">
            <CardHeader className="items-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-primary">
                <Image src={member.imageUrl} alt={member.name} layout="fill" objectFit="cover" data-ai-hint={member.dataAiHint} />
              </div>
              <CardTitle className="text-xl text-primary">{member.name}</CardTitle>
              <CardDescription className="text-accent">{member.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">{member.bio}</p>
              <a href={`mailto:${member.email}`} className="inline-flex items-center text-sm text-primary hover:underline">
                <Mail className="mr-2 h-4 w-4" /> {member.email}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
}
