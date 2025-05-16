
import Link from 'next/link';
import { Briefcase, Menu } from 'lucide-react';
import { APP_NAME, NAV_LINKS } from '@/lib/constants';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover-scale">
            <Briefcase className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold gradient-text">{APP_NAME}</span>
          </Link>
          <nav className="hidden md:flex gap-8 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-all hover:text-primary hover:scale-105"
              >
                {link.label === "Contact" ? null : link.label}
              </Link>
            ))}
            <Link href="mailto:support@start341.com" className="hover-scale">
              <Button>Contact Us</Button>
            </Link>
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover-scale">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="glass-effect">
                <nav className="grid gap-6 text-lg font-medium mt-8">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label === "Contact" ? null : link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
