import React from 'react';
import HeroSection from '../sections/HeroSection';
import TrustSection from '../sections/TrustSection';
import GoldRateBannerSection from '../sections/GoldRateBannerSection';
import CategoriesSection from '../sections/CategoriesSection';
import FeaturedSection from '../sections/FeaturedSection';
import BridalSection from '../sections/BridalSection';
import BrandStorySection from '../sections/BrandStorySection';
import ReviewsSection from '../sections/ReviewsSection';
import AssistanceSection from '../sections/AssistanceSection';
import NewsletterSection from '../sections/NewsletterSection';

export default function HomePage({
  onSelectCategory,
  selectedCategory,
  onQuickView,
  onEnquire,
  wishlist,
  onToggleWishlist,
  onOpenCalculator,
  lang = 'en',
}) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroExploreCollections = () => {
    onSelectCategory('all');
    scrollToSection('collections');
  };

  const handleHeroExploreBridal = () => {
    onSelectCategory('bridal');
    scrollToSection('collections');
  };

  const handleBridalExplore = () => {
    onSelectCategory('bridal');
    scrollToSection('collections');
  };

  const handleBridalEnquire = () => {
    onEnquire(null);
  };

  return (
    <main className="min-h-screen">
      {/* 1. Hero Section with Gold Ticker & Hallmark Badges */}
      <HeroSection
        onExploreCollections={handleHeroExploreCollections}
        onExploreBridal={handleHeroExploreBridal}
        lang={lang}
      />

      {/* 2. Live Palani Benchmark Gold & Silver Rates Strip */}
      <GoldRateBannerSection
        onOpenCalculator={onOpenCalculator}
        lang={lang}
      />

      {/* 3. Trust Highlights */}
      <TrustSection lang={lang} />

      {/* 4. Shop by Category (Bridal, Gold, Malas, Earrings, Minimal, Rings, Silver) */}
      <CategoriesSection
        onSelectCategory={(catId) => {
          onSelectCategory(catId);
          scrollToSection('collections');
        }}
        lang={lang}
      />

      {/* 5. Featured Collections Grid with 20 Authentic Designs */}
      <FeaturedSection
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
        onQuickView={onQuickView}
        onEnquire={onEnquire}
        wishlist={wishlist}
        onToggleWishlist={onToggleWishlist}
        lang={lang}
      />

      {/* 6. Bridal Feature with Real Bride & Gold Muhurtham Adornments */}
      <BridalSection
        onExploreBridal={handleBridalExplore}
        onEnquireBridal={handleBridalEnquire}
        lang={lang}
      />

      {/* 7. Brand Story & Temple Goldsmithing Philosophy */}
      <BrandStorySection lang={lang} />

      {/* 8. Customer Reviews & Tamil Nadu Family Testimonials */}
      <ReviewsSection lang={lang} />

      {/* 9. Customer Assistance / Consultation CTA */}
      <AssistanceSection onOpenEnquiry={() => onEnquire(null)} lang={lang} />

      {/* 10. Newsletter Subscription */}
      <NewsletterSection lang={lang} />
    </main>
  );
}
