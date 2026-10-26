import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, Sparkles, X } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brandConfig';

export default function FloatingContactHub({ onOpenEnquiry }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Auto-dismiss tooltip after 7s
    const timer = setTimeout(() => setShowTooltip(false), 7000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = BRAND_CONFIG.whatsappNumber
    ? `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Vanakkam Lalita Jewellers, I would like to enquire about your jewellery collections in Palani.')}`
    : `https://wa.me/919443722255?text=${encodeURIComponent('Vanakkam Lalita Jewellers, I would like to enquire about your jewellery designs in Palani.')}`;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-3 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto">
      {/* Interactive Floating Tooltip (Hidden on small mobile screens to prevent clutter) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-charcoal text-ivory text-xs px-3 py-1.5 rounded-full shadow-2xl border border-gold/40 animate-bounce">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>Chat with Palani Goldsmiths</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss tooltip"
            className="text-ivory/60 hover:text-ivory ml-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Buttons Column */}
      <div className="flex flex-col items-center gap-2 sm:gap-2.5">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-ivory text-charcoal border border-gold/40 shadow-lg hover:bg-gold-50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal" />
          </button>
        )}

        {/* Quick Enquiry / Call Button */}
        <button
          onClick={onOpenEnquiry}
          aria-label="Call or Book Consultation"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-maroon text-ivory border border-gold/50 shadow-xl hover:bg-maroon-light flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gold-light group-hover:rotate-12 transition-transform" />
          <span className="sr-only">Call or Consultation</span>
          <span className="absolute right-full mr-2.5 px-2 py-1 bg-charcoal text-ivory text-[10px] tracking-wider uppercase whitespace-nowrap rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md hidden sm:block">
            Consultation
          </span>
        </button>

        {/* WhatsApp Floating Action Button (with pulsing glow) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with Lalita Jewellers"
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 relative group"
        >
          {/* Pulsing ring indicator */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7 fill-white text-[#25D366]" />
          <span className="absolute right-full mr-2.5 px-2 py-1 bg-[#128C7E] text-white text-[10px] tracking-wider uppercase whitespace-nowrap rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md hidden sm:block">
            WhatsApp Us
          </span>
        </a>
      </div>
    </div>
  );
}
