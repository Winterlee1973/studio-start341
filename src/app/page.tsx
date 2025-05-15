import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Portfolio } from '@/components/sections/Portfolio';
import { AboutUs } from '@/components/sections/AboutUs';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
