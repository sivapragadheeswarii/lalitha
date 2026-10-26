import React from 'react';
import CategoryCard from '../components/product/CategoryCard';
import { CATEGORIES } from '../data/categories';

export default function CategoriesSection({ onSelectCategory, lang = 'en' }) {
  return (
    <section id="categories" className="py-12 sm:py-20 bg-ivory-50 border-b border-charcoal-border/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14 space-y-2 sm:space-y-3">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-gold-dark font-semibold">
            {lang === 'ta' ? 'அழகிய நகை பிரிவுகள்' : 'Curated Expressions'}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-charcoal font-medium">
            {lang === 'ta' ? 'பிரிவுகள் வாரியாக ஆராயுங்கள்' : 'Shop by Category'}
          </h2>
          <div className="w-12 sm:w-16 h-[1.5px] bg-gold mx-auto mt-1 sm:mt-2" />
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light pt-1 sm:pt-2 px-2">
            {lang === 'ta'
              ? 'பழனி முருகனின் புனித வேல் டாலர்கள், பாரம்பரிய காசு மாலை, அட்டிகை, ஜிமிக்கி மற்றும் திருமண மணப்பெண் நகைத் தொகுப்புகள்.'
              : 'Explore heritage creations fashioned in 22K gold, reflecting the devotional grace and splendour of South Indian celebrations.'}
          </p>
        </div>

        {/* Categories Grid (2 columns on mobile, 4 on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {CATEGORIES.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onSelect={onSelectCategory}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
