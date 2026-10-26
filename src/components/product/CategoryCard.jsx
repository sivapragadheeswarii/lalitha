import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

export default function CategoryCard({
  category,
  onSelect,
  lang = 'en',
  isFeatured = false,
  badge = null,
  aspectRatio = 'aspect-[3/4]',
  className = '',
}) {
  return (
    <div
      onClick={() => onSelect(category.id)}
      className={`group relative cursor-pointer overflow-hidden border border-charcoal-border/50 hover:border-gold transition-all duration-300 bg-charcoal rounded-sm shadow-xs hover:shadow-xl ${
        isFeatured ? 'border-gold/60 shadow-md ring-1 ring-gold/20' : ''
      } ${className}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(category.id);
        }
      }}
      aria-label={`Browse ${category.name} collection`}
    >
      {/* Category Image with Zoom on Hover */}
      <div className={`relative ${aspectRatio} w-full overflow-hidden img-shine`}>
        <ImageWithFallback
          src={category.image}
          alt={category.name}
          aspectRatio={aspectRatio}
          fallbackTitle={category.name}
          className="group-hover:scale-108 transition-transform duration-700 ease-out"
        />

        {/* Sophisticated Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent transition-opacity duration-300 pointer-events-none" />

        {/* Optional Top Badge for Featured Cards */}
        {badge && (
          <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-20">
            <span className="inline-flex items-center gap-1 bg-maroon/95 backdrop-blur-xs text-gold-light text-[8px] sm:text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 shadow-md border border-gold/40">
              <Sparkles className="w-2.5 h-2.5 text-gold-light" />
              <span>{badge}</span>
            </span>
          </div>
        )}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-3 sm:p-5 flex flex-col justify-end text-ivory z-10 pointer-events-none">
        <div className="transform transition-transform duration-300 group-hover:-translate-y-0.5">
          <div className="flex items-center justify-between text-[8px] sm:text-[10px] tracking-[0.2em] uppercase text-gold-light font-medium mb-0.5">
            <span>{category.count}</span>
            {isFeatured && (
              <span className="hidden sm:inline-block text-[9px] text-ivory/70 tracking-widest font-light">
                {lang === 'ta' ? 'சிறப்பு தொகுப்பு' : 'Featured Collection'}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between gap-1.5">
            <h3 className={`font-serif text-ivory font-medium tracking-wide leading-tight line-clamp-1 ${
              isFeatured ? 'text-base sm:text-2xl md:text-3xl' : 'text-sm sm:text-xl md:text-2xl'
            }`}>
              {lang === 'ta' && category.nameTa ? category.nameTa : category.name}
            </h3>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-ivory/20 backdrop-blur-sm border border-gold/40 flex items-center justify-center text-gold-light group-hover:bg-gold group-hover:text-charcoal transition-all duration-300 shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {category.nameTa && lang !== 'ta' && (
            <span className="text-[9px] sm:text-[11px] text-gold-light/90 block font-light mt-0.5 line-clamp-1">
              {category.nameTa}
            </span>
          )}

          <p className={`text-[9px] sm:text-[11px] text-ivory/80 font-light mt-1 opacity-90 group-hover:opacity-100 transition-opacity ${
            isFeatured ? 'line-clamp-1 sm:line-clamp-2 block' : 'line-clamp-1 hidden sm:block'
          }`}>
            {category.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}
