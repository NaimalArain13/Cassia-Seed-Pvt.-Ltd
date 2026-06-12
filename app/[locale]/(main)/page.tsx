import HeroSection from '@/components/landing/HeroSection';
import StatsBar from '@/components/landing/StatsBar';
import AboutSnippet from '@/components/landing/AboutSnippet';
import FeatureGrid from '@/components/landing/FeatureGrid';
import FieldBanner from '@/components/landing/FieldBanner';
import CategoryScroller from '@/components/landing/CategoryScroller';
import FeaturedProducts from '@/components/landing/FeaturedProducts';
import SeedingCalendar from '@/components/landing/SeedingCalendar';
// import YouTubeSection from '@/components/landing/YouTubeSection';
import WhatsAppCTABanner from '@/components/landing/WhatsAppCTABanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSnippet />
      <FeatureGrid />
      <FieldBanner />
      <CategoryScroller />
      <FeaturedProducts />
      <SeedingCalendar />
      {/* <YouTubeSection /> */}
      <WhatsAppCTABanner />
    </>
  );
}
