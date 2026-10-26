import React from 'react';

export default function BrandLogo({ variant = 'default', className = '' }) {
  const isLight = variant === 'light';

  return (
    <a
      href="#hero"
      aria-label="LALITA JEWELLERS Home - Palani, Tamil Nadu"
      className={`group inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-90 ${className}`}
    >
      {/* Subtle Jewellery Emblem: Stylized Gold Lotus Diamond */}
      <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 shrink-0">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-gold group-hover:rotate-45 transition-transform duration-700 ease-out"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Diamond Octagon */}
          <polygon
            points="50,6 94,50 50,94 6,50"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-80"
          />
          {/* Inner Diamond */}
          <polygon
            points="50,18 82,50 50,82 18,50"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            className="opacity-60"
          />
          {/* Central Gemstone / Lotus Core */}
          <circle cx="50" cy="50" r="10" fill={isLight ? '#FAF7F0' : '#651D32'} />
          <circle cx="50" cy="50" r="4" fill="#C6A15B" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <span
          className={`font-serif text-lg xs:text-xl sm:text-2xl tracking-[0.16em] sm:tracking-[0.22em] font-medium leading-none ${
            isLight ? 'text-ivory' : 'text-charcoal'
          }`}
        >
          LALITA
        </span>
        <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 sm:mt-1">
          <span
            className={`text-[8px] sm:text-[9px] uppercase tracking-[0.28em] sm:tracking-[0.38em] font-medium ${
              isLight ? 'text-gold-light' : 'text-gold-dark'
            }`}
          >
            JEWELLERS
          </span>
          <span className="text-[6px] sm:text-[7px] text-gold opacity-60">•</span>
          <span
            className={`text-[7px] sm:text-[8px] uppercase tracking-[0.2em] sm:tracking-[0.25em] ${
              isLight ? 'text-ivory/70' : 'text-charcoal-muted'
            }`}
          >
            PALANI
          </span>
        </div>
      </div>
    </a>
  );
}
