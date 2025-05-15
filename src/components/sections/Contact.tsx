import { SectionLayout } from '@/components/shared/SectionLayout';
import { SectionTitle } from '@/components/shared/SectionTitle';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming you might want a general contact button

export function Contact() {
  return (
    <SectionLayout id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-muted-foreground mb-6">
          We're always interested in new opportunities and collaborations.
        </p>
        <p className="text-muted-foreground mb-8">
          For inquiries, please reach out to our leadership. You can find their contact details in the{' '}
          <Link href="#about" className="text-primary hover:underline font-medium">
            About Us
          </Link>{' '}
          section.
        </p>
        {/* 
          Optionally, you could add a general contact method here if desired:
          <Button asChild size="lg">
            <a href="mailto:info@start341.com">Email Our Team</a>
          </Button> 
        */}
      </div>
    </SectionLayout>
  );
}
