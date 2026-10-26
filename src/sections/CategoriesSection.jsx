import React from 'react';
import CategoryCard from '../components/product/CategoryCard';
import { CATEGORIES } from '../data/categories';
import { Sparkles } from 'lucide-react';

export default function CategoriesSection({ onSelectCategory, lang = 'en' }) {
  // Find categories by id for deliberate, beautiful bento placement
  const getCat = (id) => CATEGORIES.find((c) => c.id === id);

  const bridal = getCat('bridal');
  const gold = getCat('gold');
  const necklaces = getCat('necklaces');
  const earrings = getCat('earrings');
  const minimal = getCat('minimal');
  const rings = getCat('rings');
  const silver = getCat('silver');

  return (
    <section id="categories" className="py-12 sm:py-20 bg-ivory-50 border-b border-charcoal-border/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 space-y-2 sm:space-y-3">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-gold-dark font-semibold">
            {lang === 'ta' ? 'அழகிய நகை பிரிவுகள்' : 'Curated Expressions'}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-charcoal font-medium">
            {lang === 'ta' ? 'பிரிவுகள் வாரியாக ஆராயுங்கள்' : 'Shop by Category'}
          </h2>
          <div className="w-12 sm:w-16 h-[1.5px] bg-gold mx-auto mt-1 sm:mt-2" />
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light pt-1 sm:pt-2 px-2">
            {lang === 'ta'
              ? 'பாரம்பரிய காசு மாலை, அட்டிகை, ஜிமிக்கி, மோதிரம் மற்றும் திருமண மணப்பெண் நகைத் தொகுப்புகள்.'
              : 'Explore heritage creations fashioned in 22K gold, reflecting the devotional grace and splendour of South Indian celebrations.'}
          </p>
        </div>

        {/* 1. Quick Story Avatars / Category Bubbles Strip (Mobile & Tablet) */}
        <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-3 mb-6 sm:mb-8 px-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="flex flex-col items-center gap-1.5 shrink-0 group focus:outline-hidden"
              aria-label={`Jump to ${cat.name}`}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-0.5 bg-gradient-to-tr from-gold to-maroon group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <div className="w-full h-full rounded-full overflow-hidden bg-charcoal border-2 border-ivory">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium text-charcoal group-hover:text-maroon whitespace-nowrap tracking-tight transition-colors">
                {lang === 'ta' && cat.nameTa ? cat.nameTa : cat.name.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* 2. Dynamic Asymmetrical Magazine Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {/* Tile 1: Bridal Feature (Wide cinematic card on mobile & desktop) */}
          {bridal && (
            <div className="col-span-2 lg:col-span-2">
              <CategoryCard
                category={bridal}
                onSelect={onSelectCategory}
                lang={lang}
                isFeatured={true}
                badge={lang === 'ta' ? 'மணப்பெண் முகூர்த்த சிறப்பு' : '👑 Signature Bridal Troussseau'}
                aspectRatio="aspect-[16/9] sm:aspect-[16/10]"
              />
            </div>
          )}

          {/* Tile 2: Gold Jewellery (Standard Portrait) */}
          {gold && (
            <div className="col-span-1 lg:col-span-1">
              <CategoryCard
                category={gold}
                onSelect={onSelectCategory}
                lang={lang}
                aspectRatio="aspect-[3/4]"
              />
            </div>
          )}

          {/* Tile 3: Necklaces & Malas (Standard Portrait) */}
          {necklaces && (
            <div className="col-span-1 lg:col-span-1">
              <CategoryCard
                category={necklaces}
                onSelect={onSelectCategory}
                lang={lang}
                aspectRatio="aspect-[3/4]"
              />
            </div>
          )}

          {/* Tile 4: Earrings & Jhumkas (Standard Portrait) */}
          {earrings && (
            <div className="col-span-1 lg:col-span-1">
              <CategoryCard
                category={earrings}
                onSelect={onSelectCategory}
                lang={lang}
                aspectRatio="aspect-[3/4]"
              />
            </div>
          )}

          {/* Tile 5: Minimal & Modern (Standard Portrait) */}
          {minimal && (
            <div className="col-span-1 lg:col-span-1">
              <CategoryCard
                category={minimal}
                onSelect={onSelectCategory}
                lang={lang}
                aspectRatio="aspect-[3/4]"
              />
            </div>
          )}

          {/* Tile 6: Rings & Solitaires */}
          {rings && (
            <div className="col-span-1 lg:col-span-1">
              <CategoryCard
                category={rings}
                onSelect={onSelectCategory}
                lang={lang}
                aspectRatio="aspect-[3/4]"
              />
            </div>
          )}

          {/* Tile 7: Silver & Pooja Heritage */}
          {silver && (
            <div className="col-span-1 lg:col-span-1">
              <CategoryCard
                category={silver}
                onSelect={onSelectCategory}
                lang={lang}
                aspectRatio="aspect-[3/4]"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
