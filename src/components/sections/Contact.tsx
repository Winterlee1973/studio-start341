import { SectionLayout } from '@/components/shared/SectionLayout';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <SectionLayout id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-muted-foreground mb-8">
          Have a question, a project idea, or just want to learn more about our premium domains and services? We'd love to hear from you!
        </p>
        <Button asChild size="lg">
          <a href="mailto:support@start341.com">
            <Mail className="mr-2 h-5 w-5" /> Email Our Team
          </a>
        </Button>
      </div>
    </SectionLayout>
  );
}
