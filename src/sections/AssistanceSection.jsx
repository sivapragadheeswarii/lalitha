import React from 'react';
import { MessageCircle, Phone, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../config/brandConfig';

export default function AssistanceSection({ onOpenEnquiry }) {
  const hasWhatsApp = Boolean(BRAND_CONFIG.whatsappNumber);
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section id="assistance" className="py-20 bg-ivory-100 border-b border-charcoal-border/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-ivory border border-gold-200 text-gold-dark text-[10px] uppercase tracking-[0.25em] font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Personalised Guidance</span>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-medium">
            Looking for Something Special?
          </h2>
          <div className="w-16 h-[1.5px] bg-gold mx-auto mt-2" />
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-xl mx-auto leading-relaxed font-light">
            Whether you have a specific bridal weight requirement, desire custom temple motifs, or wish to schedule a viewing in Palani, our team is at your service.
          </p>
        </div>

        {/* Action Cards / CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto pt-4">
          {/* Card 1: WhatsApp Enquiry */}
          <div className="p-6 bg-white border border-charcoal-border/60 hover:border-gold transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-charcoal font-medium">
                WhatsApp Consultation
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Connect directly for instant sharing of design images, custom weight estimations, and video consultation.
              </p>
            </div>

            {hasWhatsApp ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-700 text-white text-xs uppercase tracking-wider font-semibold rounded hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            ) : (
              <div className="space-y-2">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full py-3 bg-maroon text-ivory text-xs uppercase tracking-wider font-semibold hover:bg-maroon-light transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-gold-light" />
                  Request Demo Enquiry
                </button>
                <div className="flex items-center gap-1.5 text-[10px] text-charcoal-muted bg-ivory-100 p-2 border border-charcoal-border/30">
                  <AlertCircle className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>WhatsApp direct link awaiting store phone configuration</span>
                </div>
              </div>
            )}
          </div>

          {/* Card 2: Boutique Visit in Palani */}
          <div className="p-6 bg-white border border-charcoal-border/60 hover:border-gold transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-gold-50 text-maroon flex items-center justify-center border border-gold-200">
                <MapPin className="w-5 h-5 text-gold-dark" />
              </div>
              <h3 className="font-serif text-xl text-charcoal font-medium">
                Palani Boutique Visit
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Experience our curated jewellery collection in person with dedicated guidance from our experienced staff.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-[11px] text-charcoal-muted bg-ivory-50 p-2.5 border border-charcoal-border/40 space-y-1">
                <div className="font-medium text-charcoal flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-gold-dark" />
                  Palani, Tamil Nadu, India
                </div>
                <div className="text-[10px] text-charcoal-muted/90">
                  {BRAND_CONFIG.visitingHours}
                </div>
              </div>

              <button
                onClick={onOpenEnquiry}
                className="w-full py-3 bg-ivory border border-gold hover:bg-gold-50 text-charcoal text-xs uppercase tracking-wider font-semibold transition-all"
              >
                Schedule Store Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
