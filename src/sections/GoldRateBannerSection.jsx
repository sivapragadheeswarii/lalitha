import React from 'react';
import { Calculator, Sparkles, TrendingUp, ShieldCheck, Award, MapPin } from 'lucide-react';

export default function GoldRateBannerSection({ onOpenCalculator, lang = 'en' }) {
  const rates = [
    { purity: '22K Gold', sub: '916 Hallmark (1g)', rate: '₹ 13,085', delta: '+₹35 today', highlight: true },
    { purity: '24K Gold', sub: '999 Pure (1g)', rate: '₹ 14,085', delta: '+₹40 today', highlight: false },
    { purity: '1 Pavun', sub: '8g 22K Sovereign', rate: '₹ 1,04,680', delta: '+₹280 today', highlight: true },
    { purity: 'Pure Silver', sub: 'Sterling 925 (1g)', rate: '₹ 220', delta: 'Steady', highlight: false },
  ];

  return (
    <section className="bg-gradient-to-r from-[#171312] via-[#221B19] to-[#171312] text-ivory py-8 sm:py-10 px-3 sm:px-6 lg:px-8 border-y-2 border-gold/40 shadow-inner">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Column: Live Gold Rate Hub Info */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-maroon/90 border border-gold/40 text-gold-light text-[9px] sm:text-[10px] uppercase font-bold tracking-widest shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>{lang === 'ta' ? 'இன்றைய தங்கம் மற்றும் வெள்ளி விலை' : "Palani Live Benchmark Rates"}</span>
            </div>

            <h3 className="font-serif text-xl sm:text-3xl text-ivory font-normal leading-tight">
              {lang === 'ta' ? (
                <>தூய 22K 916 ஹால்மார்க் <br /><span className="italic text-gold-light font-serif">நம்பகமான தரம் & நேர்மை.</span></>
              ) : (
                <>Transparent Rates, <br /><span className="italic text-gold-light font-serif">Heirloom Trust in Every Gram.</span></>
              )}
            </h3>

            <p className="text-xs text-ivory/70 font-light leading-relaxed max-w-md mx-auto lg:mx-0 px-2 sm:px-0">
              {lang === 'ta'
                ? "பழனி லலிதா ஜூவல்லர்ஸில் 100% BIS 916 ஹால்மார்க் முத்திரையிடப்பட்ட தூய தங்கம் மற்றும் பாரம்பரிய கைவினை ஆபரணங்கள் கிடைக்கின்றன."
                : "Honoring Palani's sacred goldsmithing lineage. All gold ornaments are BIS 916 Hallmarked with transparent pricing and verified weights."}
            </p>

            {/* Quick Action Button */}
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              <button
                onClick={onOpenCalculator}
                className="w-full sm:w-auto px-4 sm:px-5 py-2.5 bg-gold-dark hover:bg-gold text-charcoal font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
              >
                <Calculator className="w-4 h-4 text-charcoal" />
                <span>{lang === 'ta' ? 'தங்க விலை கணக்கிடுக' : 'Calculate Gold Rate'}</span>
              </button>

              <div className="text-[10px] sm:text-[11px] text-ivory/60 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Palani Main Bazaar Road</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Rate Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 xs:gap-2.5 sm:gap-4">
              {rates.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-2 xs:p-2.5 sm:p-4 rounded border transition-all duration-300 relative overflow-hidden group ${
                    item.highlight
                      ? 'bg-gradient-to-b from-[#2c2220] to-[#1c1615] border-gold/60 shadow-md'
                      : 'bg-[#1b1716] border-charcoal-border/50'
                  }`}
                >
                  <div className="text-[8px] xs:text-[9px] sm:text-[10px] uppercase tracking-wider text-ivory/60 font-medium">
                    {item.purity}
                  </div>
                  <div className="text-[7px] xs:text-[8px] sm:text-[9px] text-gold-light/90 mb-1 sm:mb-2 truncate">
                    {item.sub}
                  </div>
                  <div className={`font-serif text-sm xs:text-base sm:text-xl font-bold tracking-tight truncate ${item.highlight ? 'text-gold-light' : 'text-ivory'}`}>
                    {item.rate}
                  </div>
                  <div className="mt-1 sm:mt-2 text-[8px] sm:text-[9px] text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="w-2.5 h-2.5 shrink-0" />
                    <span className="truncate">{item.delta}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Certification Strip below cards */}
            <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-3 text-[8px] xs:text-[9px] sm:text-[10px] text-ivory/60 text-center sm:text-left">
              <div className="flex items-center gap-1">
                <Award className="w-3 h-3 text-gold" />
                <span>BIS 916 Hallmark Certified</span>
              </div>
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-gold" />
                <span>ISO 9001:2015 Quality Standards</span>
              </div>
              <div className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-gold" />
                <span>Handcrafted by Palani Artisans</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
