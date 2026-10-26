import React from 'react';
import { Calculator } from 'lucide-react';

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
    <div className="bg-[#14100E] text-ivory text-xs border-b border-gold/30">
      {/* Live Gold Rate Scrolling Ticker */}
      <div className="py-1.5 px-3 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Live Indicator Badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 bg-maroon/80 border border-gold/40 text-[10px] uppercase font-bold tracking-wider text-gold-light shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>Today's Rate</span>
          </div>

          {/* Continuous Running Marquee Rate Strip */}
          <div className="flex-1 overflow-hidden relative">
            <div className="animate-ticker flex items-center py-0.5">
              {[...rates, ...rates].map((item, idx) => (
                <div key={idx} className="inline-flex items-center gap-1.5 shrink-0 px-3 sm:px-4">
                  <span className="text-ivory/70 text-[10px] tracking-wide font-medium">{item.label}:</span>
                  <span className={`font-semibold tracking-wider ${item.highlight ? 'text-gold-light font-bold' : 'text-ivory'}`}>
                    {item.rate}
                  </span>
                  <span className="text-gold/40 text-xs ml-3">•</span>
                </div>
              ))}
            </div>
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
    </div>
  );
}
