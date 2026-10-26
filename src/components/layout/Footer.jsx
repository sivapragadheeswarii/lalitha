import React from 'react';
import BrandLogo from '../common/BrandLogo';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { CATEGORIES } from '../../data/categories';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck } from 'lucide-react';

export default function Footer({ onSelectCategory, onOpenEnquiry }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-charcoal text-ivory border-t-2 border-gold/40 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-ivory/10">
          {/* Column 1: Brand & Palani Context */}
          <div className="space-y-4">
            <BrandLogo variant="light" />
            <p className="text-xs text-ivory/70 leading-relaxed font-light mt-3 max-w-sm">
              Dedicated to traditional South Indian jewellery artistry, celebrating enduring beauty and family celebrations across Palani and Tamil Nadu.
            </p>
            <div className="pt-2 text-[11px] text-gold-light space-y-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <span>Palani, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>{BRAND_CONFIG.visitingHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Curated Collections */}
          <div>
            <h4 className="font-serif text-lg tracking-wider text-ivory font-medium mb-4 pb-1 border-b border-gold/30 inline-block">
              Jewellery Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory/70">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.id);
                      document.querySelector('#collections')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-gold-light transition-colors hover:translate-x-1 inline-block text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation & Assistance */}
          <div>
            <h4 className="font-serif text-lg tracking-wider text-ivory font-medium mb-4 pb-1 border-b border-gold/30 inline-block">
              Client Guidance
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory/70">
              <li>
                <a href="#hero" className="hover:text-gold-light transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#bridal" className="hover:text-gold-light transition-colors">
                  Bridal Ornaments
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-gold-light transition-colors">
                  Craftsmanship Highlights
                </a>
              </li>
              <li>
                <a href="#brand-story" className="hover:text-gold-light transition-colors">
                  Tradition & Values
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenEnquiry}
                  className="hover:text-gold-light transition-colors text-left"
                >
                  Request Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification Placeholders */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg tracking-wider text-ivory font-medium mb-4 pb-1 border-b border-gold/30 inline-block">
              Store Enquiries
            </h4>
            <p className="text-xs text-ivory/70 leading-relaxed font-light">
              Visit our boutique in Palani for personalized viewing of heritage gold jewellery and bridal collections.
            </p>

            <div className="bg-ivory/5 border border-gold/20 p-3 space-y-2 text-xs">
              <div className="text-[10px] uppercase tracking-wider text-gold-light font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <span>Contact Configuration</span>
              </div>
              <p className="text-[11px] text-ivory/60 leading-relaxed">
                Direct phone & WhatsApp contact details can be configured in <code className="text-gold-light">brandConfig.js</code>.
              </p>
              <button
                onClick={onOpenEnquiry}
                className="w-full py-2 bg-maroon text-ivory text-[10px] uppercase tracking-wider font-semibold hover:bg-maroon-light transition-colors"
              >
                Open Demo Enquiry Form
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Demo Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/60">
          <p className="text-center md:text-left">
            © {currentYear} {BRAND_CONFIG.legalName}. Palani, Tamil Nadu, India. All rights reserved.
          </p>
          <div className="text-[11px] text-center md:text-right text-ivory/50">
            <span>Illustrative Frontend Concept Demo • Not live e-commerce</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
