import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialSection from '@/components/TestimonialSection';
import TrendyDesignsSection from '@/components/TrendyDesignsSection';
import ProductsSection from '@/components/ProductsSection';
import BannerSection from '@/components/BannerSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturesSection />
      <TestimonialSection />
      <TrendyDesignsSection />
      <ProductsSection />
      <BannerSection />
      <Footer />
    </div>
  );
}
