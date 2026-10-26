import React from 'react';
import { Heart, Eye, MessageCircle, Star, Sparkles, Award } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';

export default function ProductCard({
  product,
  onQuickView,
  onEnquire,
  isWishlisted,
  onToggleWishlist,
}) {
  return (
    <div className="group relative bg-white border border-charcoal-border/50 hover:border-gold transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl rounded-sm">
      {/* Top Gold Accent Bar on Card Hover */}
      <div className="h-0.5 bg-gold-gradient w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Product Image Container */}
      <div
        onClick={() => onQuickView(product)}
        className="relative overflow-hidden bg-ivory-100 cursor-pointer img-shine"
      >
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          aspectRatio="aspect-[4/5]"
          fallbackTitle={product.name}
          className="group-hover:scale-108 transition-transform duration-700 ease-out"
        />

        {/* Tag Pill */}
        {product.tag && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
            <span className="inline-flex items-center gap-0.5 sm:gap-1 bg-maroon/95 backdrop-blur-sm text-ivory text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 sm:px-2.5 sm:py-1 shadow-xs border border-gold/30">
              <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-gold-light" />
              <span>{product.tag}</span>
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          className={`absolute top-2 right-2 sm:top-3 sm:right-3 z-10 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
            isWishlisted
              ? 'bg-maroon text-ivory shadow-md scale-105'
              : 'bg-ivory/90 backdrop-blur-sm text-charcoal hover:text-maroon hover:bg-white border border-charcoal-border/50'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Hover Overlay Button (Desktop & Tablet) */}
        <div className="hidden sm:flex absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 items-center justify-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="w-full py-2 px-3 bg-ivory text-charcoal text-[10px] uppercase tracking-widest font-semibold hover:bg-gold-50 transition-colors flex items-center justify-center gap-1.5 shadow-md"
          >
            <Eye className="w-3.5 h-3.5 text-gold-dark" />
            Quick View
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-2 xs:p-2.5 sm:p-5 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-[8px] xs:text-[9px] sm:text-[10px] uppercase tracking-wider text-gold-dark font-medium mb-1">
            <span className="truncate max-w-[75px] xs:max-w-[90px] sm:max-w-none">{product.category}</span>
            <div className="flex items-center gap-0.5 text-gold-dark shrink-0">
              <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-gold text-gold" />
              <span className="font-semibold text-charcoal text-[9px] xs:text-[10px] sm:text-[11px]">{product.rating || 5.0}</span>
            </div>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif text-[11px] xs:text-xs sm:text-base text-charcoal group-hover:text-maroon font-medium cursor-pointer transition-colors line-clamp-1 leading-snug"
          >
            {product.name}
          </h3>

          {/* Description (Hidden on mobile 2-col to keep cards perfectly aligned) */}
          <p className="hidden sm:block text-xs text-charcoal-muted mt-1.5 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Hallmark Badge */}
          <div className="mt-1 xs:mt-1.5 sm:mt-2.5 inline-flex items-center gap-0.5 xs:gap-1 text-[7px] xs:text-[8px] sm:text-[10px] text-charcoal-muted/90 bg-ivory-100 px-1 xs:px-1.5 sm:px-2 py-0.5 border border-charcoal-border/40">
            <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold-dark shrink-0" />
            <span className="truncate">22K 916 Hallmark</span>
          </div>
        </div>

        {/* Demo Price & Enquiry CTA */}
        <div className="pt-1.5 xs:pt-2 sm:pt-4 mt-1.5 xs:mt-2 sm:mt-3 border-t border-charcoal-border/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 xs:gap-1.5 sm:gap-2">
          <div className="min-w-0">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-[11px] xs:text-xs sm:text-base font-semibold text-charcoal truncate">
                {product.demoPrice}
              </span>
            </div>
          </div>

          <button
            onClick={() => onEnquire(product)}
            aria-label={`Enquire about ${product.name}`}
            className="w-full sm:w-auto px-1.5 xs:px-2 sm:px-3 py-1 sm:py-1.5 border border-maroon text-maroon hover:bg-maroon hover:text-ivory text-[8px] xs:text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold transition-all inline-flex items-center justify-center gap-1 shadow-2xs active:scale-95 shrink-0"
          >
            <MessageCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold-dark" />
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </div>
  );
}
