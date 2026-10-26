import React from 'react';
import { Home, Sparkles, Search, Heart, ShoppingBag } from 'lucide-react';

export default function BottomNav({
  wishlistCount,
  cartCount,
  onOpenSearch,
  onOpenWishlist,
  onOpenCart,
}) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Mobile Bottom App Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-ivory/95 backdrop-blur-md border-t border-gold/30 shadow-2xl pt-1.5 pb-2.5 px-3"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* Home Tab */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col items-center justify-center p-1 text-charcoal hover:text-maroon transition-colors min-w-[54px] active:scale-95"
        >
          <Home className="w-5 h-5 text-charcoal transition-colors" />
          <span className="text-[10px] tracking-wide mt-0.5 font-medium">Home</span>
        </button>

        {/* Collections Tab */}
        <button
          onClick={() => scrollToSection('collections')}
          className="flex flex-col items-center justify-center p-1 text-charcoal hover:text-maroon transition-colors min-w-[54px] active:scale-95"
        >
          <Sparkles className="w-5 h-5 text-gold-dark transition-colors" />
          <span className="text-[10px] tracking-wide mt-0.5 font-medium">Designs</span>
        </button>

        {/* Search Tab */}
        <button
          onClick={onOpenSearch}
          className="flex flex-col items-center justify-center p-1 text-charcoal hover:text-maroon transition-colors min-w-[54px] active:scale-95"
        >
          <Search className="w-5 h-5 text-charcoal transition-colors" />
          <span className="text-[10px] tracking-wide mt-0.5 font-medium">Search</span>
        </button>

        {/* Wishlist Tab */}
        <button
          onClick={onOpenWishlist}
          className="flex flex-col items-center justify-center p-1 text-charcoal hover:text-maroon transition-colors relative min-w-[54px] active:scale-95"
        >
          <div className="relative">
            <Heart className="w-5 h-5 text-charcoal transition-colors" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-maroon text-ivory text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-xs">
                {wishlistCount}
              </span>
            )}
          </div>
          <span className="text-[10px] tracking-wide mt-0.5 font-medium">Saved</span>
        </button>

        {/* Enquiry Bag Tab */}
        <button
          onClick={onOpenCart}
          className="flex flex-col items-center justify-center p-1 text-charcoal hover:text-maroon transition-colors relative min-w-[54px] active:scale-95"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-gold-dark transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-gold-dark text-ivory text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-xs">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] tracking-wide mt-0.5 font-medium">Enquiry Bag</span>
        </button>
      </div>
    </nav>
  );
}
