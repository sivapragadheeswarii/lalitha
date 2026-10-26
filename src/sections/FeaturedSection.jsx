import React, { useState, useMemo } from 'react';
import ProductCard from '../components/product/ProductCard';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { Info, Sparkles, ArrowUpDown } from 'lucide-react';

export default function FeaturedSection({
  selectedCategory,
  onSelectCategory,
  onQuickView,
  onEnquire,
  wishlist,
  onToggleWishlist,
  lang = 'en',
}) {
  const [activeTab, setActiveTab] = useState(selectedCategory || 'all');
  const [sortBy, setSortBy] = useState('featured');

  React.useEffect(() => {
    if (selectedCategory) {
      setActiveTab(selectedCategory);
    }
  }, [selectedCategory]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = activeTab === 'all'
      ? [...PRODUCTS]
      : PRODUCTS.filter((p) => p.categoryId === activeTab || (activeTab === 'bridal' && p.isBridal));

    if (sortBy === 'price-asc') {
      result.sort((a, b) => {
        const pA = parseInt(a.demoPrice.replace(/[^\d]/g, ''), 10) || 0;
        const pB = parseInt(b.demoPrice.replace(/[^\d]/g, ''), 10) || 0;
        return pA - pB;
      });
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => {
        const pA = parseInt(a.demoPrice.replace(/[^\d]/g, ''), 10) || 0;
        const pB = parseInt(b.demoPrice.replace(/[^\d]/g, ''), 10) || 0;
        return pB - pA;
      });
    } else if (sortBy === 'rating') {
      result.sort((a, b) => (b.rating || 5) - (a.rating || 5));
    }

    return result;
  }, [activeTab, sortBy]);

  return (
    <section id="collections" className="py-12 sm:py-20 bg-ivory border-b border-charcoal-border/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2 sm:space-y-3">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-gold-dark font-semibold">
            {lang === 'ta' ? 'பாரம்பரிய நகைகள்' : 'Signature Ornaments'}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-charcoal font-medium">
            {lang === 'ta' ? 'நகைத் தொகுப்புகள் & வடிவமைப்புகள்' : 'Featured Collections & Designs'}
          </h2>
          <div className="w-12 sm:w-16 h-[1.5px] bg-gold mx-auto mt-1 sm:mt-2" />
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light pt-1 sm:pt-2 px-2">
            {lang === 'ta'
              ? 'பழனி லலிதா ஜூவல்லர்ஸின் 20+ பிரத்யேக பாரம்பரிய தங்க, வைர மற்றும் வெள்ளி நகை வடிவமைப்பு காட்சியகம்.'
              : 'Each ornament represents hours of meticulous goldsmithing, blending ancient motifs with enduring poise.'}
          </p>

          {/* Illustrative Demo Price Notice */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-ivory-200/80 border border-gold-200 text-[10px] sm:text-[11px] text-charcoal-muted mt-2">
            <Info className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-dark shrink-0" />
            <span>Prices displayed are illustrative demo guides. Final estimates are provided upon in-store consultation.</span>
          </div>
        </div>

        {/* Filter Navigation Tabs - Swipable Horizontal Pills on Mobile */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0 sm:flex-wrap sm:justify-center mb-6 sm:mb-8 px-1">
          <button
            onClick={() => {
              setActiveTab('all');
              onSelectCategory('all');
            }}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs uppercase tracking-wider transition-all font-medium rounded-sm shrink-0 whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-maroon text-ivory shadow-xs'
                : 'bg-ivory-100 hover:bg-gold-50 text-charcoal border border-charcoal-border/40'
            }`}
          >
            {lang === 'ta' ? 'அனைத்தும்' : 'All'} ({PRODUCTS.length})
          </button>

          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                onSelectCategory(cat.id);
              }}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs uppercase tracking-wider transition-all font-medium rounded-sm shrink-0 whitespace-nowrap ${
                activeTab === cat.id
                  ? 'bg-maroon text-ivory shadow-xs'
                  : 'bg-ivory-100 hover:bg-gold-50 text-charcoal border border-charcoal-border/40'
              }`}
            >
              {lang === 'ta' && cat.nameTa ? cat.nameTa : cat.name}
            </button>
          ))}
        </div>

        {/* Controls Bar: Count & Sort Dropdown */}
        <div className="flex flex-row items-center justify-between pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-charcoal-border/30 gap-2 text-xs text-charcoal-muted">
          <div className="flex items-center gap-1.5 truncate">
            <span className="font-semibold text-charcoal font-serif text-xs sm:text-sm">
              {filteredAndSortedProducts.length} Designs
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <ArrowUpDown className="w-3 h-3 text-gold-dark" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-ivory border border-charcoal-border/60 py-1 px-2 text-[11px] sm:text-xs text-charcoal focus:outline-none focus:border-gold rounded-xs"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated (5.0★)</option>
            </select>
          </div>
        </div>

        {/* Products Grid (2 columns on mobile, 4 columns on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onEnquire={onEnquire}
              isWishlisted={wishlist.some((item) => item.id === product.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>

        {/* Empty state if filtering yields no result */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12 px-4 bg-ivory-100 border border-dashed border-charcoal-border">
            <Sparkles className="w-7 h-7 text-gold mx-auto mb-2 opacity-70" />
            <h4 className="font-serif text-lg text-charcoal font-medium">
              No pieces found in this category
            </h4>
            <button
              onClick={() => {
                setActiveTab('all');
                onSelectCategory('all');
              }}
              className="mt-3 px-4 py-2 bg-maroon text-ivory text-xs uppercase tracking-wider"
            >
              Show All Collections
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
