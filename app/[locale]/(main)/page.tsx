import HeroSection from '@/components/landing/HeroSection';
import StatsBar from '@/components/landing/StatsBar';
import AboutSnippet from '@/components/landing/AboutSnippet';
import FeatureGrid from '@/components/landing/FeatureGrid';
import SeasonalFruitBanner from '@/components/landing/SeasonalFruitBanner';
import CategoryScroller from '@/components/landing/CategoryScroller';
import FeaturedProducts from '@/components/landing/FeaturedProducts';
import SeedingCalendar from '@/components/landing/SeedingCalendar';
// import YouTubeSection from '@/components/landing/YouTubeSection';
import WhatsAppCTABanner from '@/components/landing/WhatsAppCTABanner';
import { getFeaturedProducts } from '@/sanity/lib/client';

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSnippet />
      <FeatureGrid />
      <SeasonalFruitBanner />
      <CategoryScroller />
      <FeaturedProducts products={featuredProducts} />
      <SeedingCalendar />
      {/* <YouTubeSection /> */}
      <WhatsAppCTABanner />
    </>
  );
}
