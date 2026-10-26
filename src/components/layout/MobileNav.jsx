import React from 'react';
import { X, Heart, ShoppingBag, Search, MapPin, Phone, MessageCircle } from 'lucide-react';
import BrandLogo from '../common/BrandLogo';
import { useScrollLock } from '../../hooks/useScrollLock';
import { BRAND_CONFIG } from '../../config/brandConfig';

export default function MobileNav({
  isOpen,
  onClose,
  wishlistCount,
  cartCount,
  onOpenSearch,
  onOpenWishlist,
  onOpenCart,
  onOpenEnquiry,
}) {
  useScrollLock(isOpen);

  if (!isOpen) return null;

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Collections', href: '#collections' },
    { label: 'Bridal Jewellery', href: '#bridal' },
    { label: 'Shop by Category', href: '#categories' },
    { label: 'About Us', href: '#brand-story' },
    { label: 'Customer Reviews', href: '#reviews' },
    { label: 'Contact & Store', href: '#contact' },
  ];

  const handleLinkClick = (href) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden md:hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-ivory shadow-2xl flex flex-col border-r border-gold/30">
        <div className="h-1 bg-gold-gradient w-full" />

        {/* Drawer Header */}
        <div className="p-5 border-b border-charcoal-border/50 flex items-center justify-between">
          <BrandLogo />
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-1.5 text-charcoal-muted hover:text-maroon transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Action Badges */}
        <div className="grid grid-cols-3 border-b border-charcoal-border/50 bg-ivory-100 text-center text-xs py-3">
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="flex flex-col items-center gap-1 text-charcoal hover:text-maroon transition-colors"
          >
            <Search className="w-4 h-4 text-gold-dark" />
            <span className="text-[10px] uppercase font-medium">Search</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenWishlist();
            }}
            className="flex flex-col items-center gap-1 text-charcoal hover:text-maroon transition-colors relative"
          >
            <div className="relative">
              <Heart className="w-4 h-4 text-maroon" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-maroon text-ivory text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </div>
            <span className="text-[10px] uppercase font-medium">Wishlist</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenCart();
            }}
            className="flex flex-col items-center gap-1 text-charcoal hover:text-maroon transition-colors relative"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4 text-gold-dark" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-gold-600 text-ivory text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="text-[10px] uppercase font-medium">Demo Bag</span>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-6 py-6 overflow-y-auto space-y-4">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleLinkClick(link.href)}
                  className="w-full text-left font-serif text-xl text-charcoal hover:text-maroon hover:translate-x-1 transition-all py-1.5 block font-medium border-b border-charcoal-border/30"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="pt-6">
            <button
              onClick={() => {
                onClose();
                onOpenEnquiry();
              }}
              className="w-full py-3 bg-maroon text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-maroon-light transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-gold-light" />
              Request Jewellery Enquiry
            </button>
          </div>
        </nav>

        {/* Mobile Footer Info */}
        <div className="p-5 bg-ivory-100 border-t border-charcoal-border/50 text-[11px] text-charcoal-muted space-y-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-gold-dark shrink-0" />
            <span>Palani, Tamil Nadu, India</span>
          </div>
          <p className="text-[10px] text-charcoal-muted/80">
            {BRAND_CONFIG.visitingHours}
          </p>
        </div>
      </div>
    </div>
  );
}
