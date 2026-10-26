import React, { useState, useMemo, useEffect, useRef } from 'react';
import Modal from '../common/Modal';
import { Search, ArrowRight, Sparkles, X } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';
import { PRODUCTS } from '../../data/products';
import { CATEGORIES } from '../../data/categories';

export default function SearchModal({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectCategory,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCatFilter, setSelectedCatFilter] = useState('all');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setSearchQuery('');
      setSelectedCatFilter('all');
    }
  }, [isOpen]);

  const filteredResults = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return PRODUCTS.filter((p) => {
      const matchCat =
        selectedCatFilter === 'all' ||
        p.categoryId === selectedCatFilter ||
        (selectedCatFilter === 'bridal' && p.isBridal);

      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subCategory.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);

      return matchCat && matchQuery;
    });
  }, [searchQuery, selectedCatFilter]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-3xl">
      <div className="space-y-6">
        {/* Search Header */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold-dark font-medium block">
            Search The Lalita Catalogue
          </span>
          <div className="relative mt-2">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-muted" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search temple necklaces, bridal harams, jhumkas, bangles..."
              className="w-full pl-12 pr-10 py-3.5 bg-white border border-charcoal-border focus:border-gold focus:outline-none text-charcoal placeholder:text-charcoal-muted/60 text-sm transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal-muted hover:text-charcoal p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Quick Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-charcoal-muted uppercase tracking-wider text-[10px] shrink-0 font-medium">
            Category:
          </span>
          <button
            onClick={() => setSelectedCatFilter('all')}
            className={`px-3 py-1 text-xs transition-colors whitespace-nowrap ${
              selectedCatFilter === 'all'
                ? 'bg-maroon text-ivory font-medium'
                : 'bg-ivory-200 text-charcoal hover:bg-gold-100'
            }`}
          >
            All Pieces ({PRODUCTS.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCatFilter(cat.id)}
              className={`px-3 py-1 text-xs transition-colors whitespace-nowrap ${
                selectedCatFilter === cat.id
                  ? 'bg-maroon text-ivory font-medium'
                  : 'bg-ivory-200 text-charcoal hover:bg-gold-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="max-h-[50vh] overflow-y-auto space-y-3 pr-1">
          {filteredResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredResults.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onClose();
                    onSelectProduct(product);
                  }}
                  className="group flex items-center gap-3 p-2.5 bg-white border border-charcoal-border/50 hover:border-gold hover:shadow-sm cursor-pointer transition-all"
                >
                  <div className="w-16 h-16 shrink-0 bg-ivory-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-gold-dark font-medium block truncate">
                      {product.category}
                    </span>
                    <h5 className="font-serif text-base text-charcoal group-hover:text-maroon truncate font-medium">
                      {product.name}
                    </h5>
                    <span className="text-xs text-charcoal-muted block">
                      {product.demoPrice} <span className="text-[9px]">(Demo)</span>
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-charcoal-muted group-hover:text-gold shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-12 px-4 bg-ivory-100 border border-dashed border-charcoal-border">
              <Sparkles className="w-8 h-8 text-gold mx-auto mb-2 opacity-70" />
              <p className="font-serif text-lg text-charcoal font-medium">
                No jewellery matched your search
              </p>
              <p className="text-xs text-charcoal-muted mt-1 max-w-sm mx-auto">
                Try searching with broader terms like &quot;necklace&quot;, &quot;gold&quot;, &quot;bridal&quot;, or browse our curated categories.
              </p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
