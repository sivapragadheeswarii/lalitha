import React, { useState, useEffect } from 'react';
import BrandLogo from '../common/BrandLogo';
import { Search, Heart, ShoppingBag, Menu, Calculator, Globe } from 'lucide-react';

export default function Navbar({
  wishlistCount,
  cartCount,
  onOpenSearch,
  onOpenWishlist,
  onOpenCart,
  onOpenMobileNav,
  onOpenCalculator,
  lang = 'en',
  onToggleLang,
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: lang === 'ta' ? 'முகப்பு' : 'Home', href: '#hero' },
    { label: lang === 'ta' ? 'நகைத் தொகுப்புகள்' : 'Collections', href: '#collections' },
    { label: lang === 'ta' ? 'மணப்பெண் நகைகள்' : 'Bridal Jewellery', href: '#bridal' },
    { label: lang === 'ta' ? 'பாரம்பரிய வரலாறு' : 'About Us', href: '#brand-story' },
    { label: lang === 'ta' ? 'மதிப்புரைகள்' : 'Reviews', href: '#reviews' },
    { label: lang === 'ta' ? 'தொடர்பு' : 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-md border-b border-gold/30 py-2 sm:py-3'
          : 'bg-ivory border-b border-charcoal-border/40 py-2.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden shrink-0">
            <button
              onClick={onOpenMobileNav}
              aria-label="Open mobile navigation menu"
              className="p-1.5 text-charcoal hover:text-maroon transition-colors"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Brand Logo - Centered on mobile for symmetry */}
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <BrandLogo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] font-medium text-charcoal hover:text-maroon transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Right Action Cluster - Streamlined for mobile */}
          <div className="flex items-center space-x-1.5 sm:space-x-3 shrink-0">
            {/* Language Switcher Pill */}
            {onToggleLang && (
              <button
                onClick={onToggleLang}
                title={lang === 'en' ? 'தமிழில் மாற்றுக' : 'Switch to English'}
                className="px-2 py-1 text-[10px] sm:text-[11px] font-semibold border border-gold/40 bg-gold-50/70 hover:bg-gold-100 text-charcoal flex items-center gap-1 transition-all rounded shadow-xs"
              >
                <Globe className="w-3 h-3 text-gold-dark" />
                <span>{lang === 'en' ? 'தமிழ்' : 'EN'}</span>
              </button>
            )}

            {/* Gold Calculator Icon Button (desktop & tablet) */}
            {onOpenCalculator && (
              <button
                onClick={onOpenCalculator}
                title="Gold Rate Calculator"
                aria-label="Open Gold Rate Calculator"
                className="hidden sm:flex p-2 text-charcoal hover:text-maroon transition-colors hover:bg-gold-50 rounded-full"
              >
                <Calculator className="w-5 h-5 text-gold-dark" />
              </button>
            )}

            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              aria-label="Search collections"
              className="p-1.5 sm:p-2 text-charcoal hover:text-maroon transition-colors hover:bg-gold-50 rounded-full"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Wishlist Button (desktop only; on mobile it is in the fixed bottom nav) */}
            <button
              onClick={onOpenWishlist}
              aria-label={`Wishlist (${wishlistCount} items)`}
              className="hidden md:flex p-2 text-charcoal hover:text-maroon transition-colors hover:bg-gold-50 rounded-full relative"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-maroon text-ivory text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag Button (Demo) */}
            <button
              onClick={onOpenCart}
              aria-label={`Demo Enquiry Bag (${cartCount} items)`}
              className="p-1.5 sm:p-2 text-charcoal hover:text-maroon transition-colors hover:bg-gold-50 rounded-full relative"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold-dark text-ivory text-[9px] sm:text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
