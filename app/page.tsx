import { ArtistSection } from '@/components/sections/artist-section/artist-section';
import { BookingSection } from '@/components/sections/booking-section/booking-section';
import { CultureSection } from '@/components/sections/culture-section/culture-section';
import { FooterSection } from '@/components/sections/footer-section/footer-section';
import { HeroSection } from '@/components/sections/hero-section/hero-section';
import { ServicesSection } from '@/components/sections/services-section/services-section';
import { SiteNav } from '@/components/sections/site-nav/site-nav';
import { TestimonialsSection } from '@/components/sections/testimonials-section/testimonials-section';
import { TickerSection } from '@/components/sections/ticker-section/ticker-section';
import { WorkSection } from '@/components/sections/work-section/work-section';
import { CustomCursor } from '@/components/custom-cursor/custom-cursor';
import {
  HeroParallaxEffect,
  ScrollRevealEffects,
} from '@/components/sco-barber-effects/sco-barber-effects';

export default function Home(): React.ReactNode {
  return (
    <>
      <CustomCursor />
      <ScrollRevealEffects />
      <HeroParallaxEffect />
      <SiteNav />
      <main>
        <HeroSection />
        <TickerSection />
        <WorkSection />
        <ArtistSection />
        <CultureSection />
        <ServicesSection />
        <TestimonialsSection />
        <BookingSection />
      </main>
      <FooterSection />
    </>
  );
}
