import React from 'react';
import { Sparkles, Gem, Crown, HeartHandshake } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brandConfig';

export default function TrustSection({ lang = 'en' }) {
  const iconMap = {
    Sparkles: Sparkles,
    Gem: Gem,
    Crown: Crown,
    HeartHandshake: HeartHandshake,
  };

  const tamilTitles = {
    timeless: "பாரம்பரிய அழகு",
    care: "அர்ப்பணிப்புடன் செய்தல்",
    occasions: "எல்லா நிகழ்வுகளுக்கும்",
    assistance: "தனிப்பயன் வழிகாட்டல்",
  };

  return (
    <section id="trust" className="py-8 sm:py-12 bg-ivory border-b border-charcoal-border/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {BRAND_CONFIG.trustHighlights.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.id}
                className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1.5 sm:space-y-2.5 p-3 sm:p-4 rounded-sm bg-white/60 sm:bg-transparent border border-charcoal-border/30 sm:border-0 hover:bg-gold-50/40 transition-colors"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center text-maroon shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold-dark" />
                </div>
                <div>
                  <h3 className="font-serif text-sm sm:text-lg text-charcoal font-medium">
                    {lang === 'ta' && tamilTitles[item.id] ? tamilTitles[item.id] : item.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-charcoal-muted leading-relaxed mt-0.5 sm:mt-1 line-clamp-2 sm:line-clamp-none">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
