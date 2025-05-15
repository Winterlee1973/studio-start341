import { TEAM_MEMBERS } from '@/lib/constants';
import { SectionLayout } from '@/components/shared/SectionLayout';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, UserCircle } from 'lucide-react';

export function Contact() {
  return (
    <SectionLayout id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        We're always interested in new opportunities and collaborations. Feel free to reach out to our team.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {TEAM_MEMBERS.map((member) => (
          <Card key={member.id} className="shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
              <UserCircle className="h-12 w-12 text-accent" />
              <div>
                <CardTitle className="text-xl text-primary">{member.name}</CardTitle>
                <CardDescription>{member.title}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <a href={`mailto:${member.email}`} className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Mail className="mr-2 h-5 w-5" />
                <span>{member.email}</span>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
}
