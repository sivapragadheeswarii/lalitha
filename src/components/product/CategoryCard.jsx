import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

export default function CategoryCard({ category, onSelect, lang = 'en' }) {
  return (
    <div
      onClick={() => onSelect(category.id)}
      className="group relative cursor-pointer overflow-hidden border border-charcoal-border/50 hover:border-gold transition-all duration-300 bg-charcoal rounded-sm shadow-xs hover:shadow-lg"
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
      <div className="relative aspect-[3/4] overflow-hidden">
        <ImageWithFallback
          src={category.image}
          alt={category.name}
          aspectRatio="aspect-[3/4]"
          fallbackTitle={category.name}
          className="group-hover:scale-106 transition-transform duration-500 ease-out"
        />

        {/* Sophisticated Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent transition-opacity duration-300" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-2.5 sm:p-5 flex flex-col justify-end text-ivory z-10">
        <div className="transform transition-transform duration-300 group-hover:-translate-y-0.5">
          <span className="text-[8px] sm:text-[10px] tracking-[0.2em] uppercase text-gold-light font-medium block mb-0.5">
            {category.count}
          </span>
          <div className="flex items-center justify-between gap-1.5">
            <h3 className="font-serif text-sm sm:text-2xl text-ivory font-medium tracking-wide leading-tight line-clamp-1">
              {lang === 'ta' && category.nameTa ? category.nameTa : category.name}
            </h3>
            <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-ivory/20 backdrop-blur-sm border border-gold/40 flex items-center justify-center text-gold-light group-hover:bg-gold group-hover:text-charcoal transition-all duration-300 shrink-0">
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
          {category.nameTa && lang !== 'ta' && (
            <span className="text-[9px] sm:text-[11px] text-gold-light/90 block font-light mt-0.5 line-clamp-1">
              {category.nameTa}
            </span>
          )}
          <p className="text-[9px] sm:text-[11px] text-ivory/80 font-light mt-1 line-clamp-1 sm:line-clamp-2 opacity-90 group-hover:opacity-100 transition-opacity hidden sm:block">
            {category.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}
