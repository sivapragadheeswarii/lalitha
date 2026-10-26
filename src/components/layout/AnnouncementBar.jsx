import React from 'react';
import { Sparkles, MapPin, Calculator, ShieldCheck, TrendingUp } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brandConfig';

export default function AnnouncementBar({ onOpenCalculator }) {
  const rates = [
    { label: "22K GOLD (1g)", rate: "₹ 13,085", highlight: true },
    { label: "24K PURE (1g)", rate: "₹ 14,085" },
    { label: "1 PAVUN (8g)", rate: "₹ 1,04,680", highlight: true },
    { label: "PURE SILVER (1g)", rate: "₹ 220" },
    { label: "BIS 916 HALLMARK", rate: "100% Certified" },
    { label: "PALANI SHOWROOM", rate: "Main Bazaar Road" },
  ];

  return (
    <div className="bg-[#1A1615] text-ivory text-xs border-b border-gold/30">
      {/* 1. Main Gold Rate Scrolling Ticker */}
      <div className="bg-[#14100E] border-b border-gold/20 py-1.5 px-3 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Live Indicator Badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 bg-maroon/80 border border-gold/40 text-[10px] uppercase font-bold tracking-wider text-gold-light shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>Today's Rate (Demo)</span>
          </div>

          {/* Marquee Rate Strip */}
          <div className="flex-1 overflow-x-auto no-scrollbar flex items-center gap-5 sm:gap-8 text-[11px] whitespace-nowrap py-0.5">
            {rates.map((item, idx) => (
              <div key={idx} className="inline-flex items-center gap-1.5 shrink-0">
                <span className="text-ivory/70 text-[10px] tracking-wide font-medium">{item.label}:</span>
                <span className={`font-semibold tracking-wider ${item.highlight ? 'text-gold-light font-bold' : 'text-ivory'}`}>
                  {item.rate}
                </span>
                <span className="text-gold/30 text-xs ml-3">•</span>
              </div>
            ))}
          </div>

          {/* Quick Calculator Trigger */}
          {onOpenCalculator && (
            <button
              onClick={onOpenCalculator}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-0.5 bg-gold/15 hover:bg-gold/25 text-gold-light border border-gold/40 text-[10px] uppercase font-semibold tracking-wider transition-colors shrink-0"
            >
              <Calculator className="w-3 h-3 text-gold" />
              <span>Gold Calculator</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. Brand Value & Store Announcement Strip */}
      <div className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[11px] text-ivory/80">
        <div className="hidden md:flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-gold" />
          <span>Palani, Tamil Nadu</span>
          <span className="text-gold/40">•</span>
          <span className="text-[10px] text-ivory/60">Temple City Artisanship</span>
        </div>

        <div className="mx-auto md:mx-0 flex items-center gap-2 text-[11px] font-medium text-ivory">
          <Sparkles className="w-3 h-3 text-gold-light shrink-0" />
          <span>{BRAND_CONFIG.announcement}</span>
          <Sparkles className="w-3 h-3 text-gold-light shrink-0" />
        </div>

        <div className="hidden md:flex items-center gap-2 text-gold-light">
          <ShieldCheck className="w-3.5 h-3.5 text-gold" />
          <span className="text-[10px] uppercase tracking-wider">BIS 916 Certified Jeweller</span>
        </div>
      </div>
    </div>
  );
}
