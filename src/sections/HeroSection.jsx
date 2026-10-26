import React from 'react';
import { ArrowRight, Sparkles, Award, Crown } from 'lucide-react';
import ImageWithFallback from '../components/common/ImageWithFallback';

export default function HeroSection({ onExploreCollections, onExploreBridal, lang = 'en' }) {
  const highlights = [
    { label: "22K 916", desc: lang === 'ta' ? "தூய தங்கம்" : "Heritage Purity" },
    { label: "Palani", desc: lang === 'ta' ? "பழனி பட்டறை" : "Tamil Nadu Showroom" },
    { label: "Bespoke", desc: lang === 'ta' ? "பாரம்பரிய கைவினை" : "Artisan Goldsmithing" },
    { label: "100%", desc: lang === 'ta' ? "நேர்மையான விலை" : "Authentic Designs" },
  ];

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-ivory-100 via-ivory to-ivory-200/50 pt-5 pb-14 sm:py-20 lg:py-24 border-b border-gold-200/40">
      {/* Background Animated Rings & Radial Shimmer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] border border-gold/15 rounded-full pointer-events-none animate-spin [animation-duration:120s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] sm:w-[1200px] h-[1000px] sm:h-[1200px] border border-gold/10 rounded-full pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Gold Ticker Banner */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <div className="bg-gradient-to-r from-charcoal via-maroon to-charcoal text-ivory py-1.5 sm:py-2 px-3 sm:px-4 border border-gold/40 shadow-sm flex items-center justify-between text-[10px] sm:text-[11px] overflow-hidden">
          <div className="flex items-center gap-1.5 font-medium tracking-wider text-gold-light shrink-0">
            <Crown className="w-3.5 h-3.5 text-gold animate-bounce" />
            <span className="uppercase font-semibold">{lang === 'ta' ? 'லலிதா காட்சி' : 'Lalita Showcase'}</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 overflow-hidden whitespace-nowrap text-ivory/90 font-light text-[10px] sm:text-xs">
            <span>✦ 22K 916 Hallmarked Temple Jewellery</span>
            <span className="hidden sm:inline">✦ Handcrafted Muhurtham Bridal Harams</span>
            <span className="hidden md:inline">✦ Palani Main Bazaar Showroom</span>
          </div>
          <div className="flex items-center gap-1 text-gold-light font-medium text-[9px] sm:text-[10px] uppercase tracking-wider shrink-0">
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold" />
            <span>Palani, TN</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-ivory border border-gold/40 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark animate-spin [animation-duration:8s]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-charcoal font-semibold">
                Lalita Jewellers • Palani, Tamil Nadu
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-charcoal tracking-tight leading-[1.12]">
              {lang === 'ta' ? (
                <>
                  பாரம்பரிய பொக்கிஷம், <br />
                  <span className="italic font-serif text-maroon drop-shadow-sm">காலம் போற்றும் கைவினை.</span>
                </>
              ) : (
                <>
                  Tradition, Crafted <br className="hidden sm:inline" />
                  <span className="italic font-serif text-maroon drop-shadow-sm">to Treasure.</span>
                </>
              )}
            </h1>

            {/* Subheading / Description */}
            <p className="text-xs sm:text-base md:text-lg text-charcoal-muted max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              {lang === 'ta'
                ? "பழனி திருத்தலத்தின் பாரம்பரிய கைவினை பொற்கொல்லர்களால் வடிக்கப்பட்ட தூய 22K தங்க அட்டிகை, காசு மாலை, மயில் ஹாரங்கள் மற்றும் திருமண மணப்பெண் நகைகள்."
                : "Discover timeless jewellery designed to celebrate your most precious moments. Handcrafted 22K gold, heirloom kasu malas, temple harams, and bridal suites in Palani."}
            </p>

            {/* CTA Buttons - Full width stacked on mobile, inline on sm */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={onExploreCollections}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-maroon text-ivory text-xs uppercase tracking-[0.2em] font-semibold hover:bg-maroon-light transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2.5 group active:scale-[0.99] border border-gold/30"
              >
                <span>{lang === 'ta' ? 'நகைத் தொகுப்புகள்' : 'Explore Collections'}</span>
                <ArrowRight className="w-4 h-4 text-gold-light group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onExploreBridal}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-ivory text-charcoal border-2 border-gold hover:border-gold-dark hover:bg-gold-50/70 text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2 shadow-xs active:scale-[0.99]"
              >
                <Crown className="w-4 h-4 text-gold-dark" />
                <span>{lang === 'ta' ? 'மணப்பெண் நகைகள்' : 'Discover Bridal Jewellery'}</span>
              </button>
            </div>

            {/* Editorial Heritage Highlights */}
            <div className="pt-4 sm:pt-6 border-t border-charcoal-border/40 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 text-left max-w-xl mx-auto lg:mx-0">
              {highlights.map((h, i) => (
                <div key={i} className="p-2 sm:p-2.5 bg-ivory-100/70 border-l-2 border-gold">
                  <span className="font-serif text-lg sm:text-2xl font-bold text-charcoal block">
                    {h.label}
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-charcoal-muted block">
                    {h.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Hero Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Outer Decorative Frames with Gold Borders */}
              <div className="absolute -inset-3 border-2 border-gold/50 -z-10 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 hidden sm:block" />

              {/* Main Image Container */}
              <div className="relative overflow-hidden bg-charcoal border-2 border-gold shadow-2xl group rounded-sm">
                <ImageWithFallback
                  src="/images/twin-peacock-royal-collar.png"
                  alt="Lalita Jewellers Heritage 22K Royal Twin Peacock Sculpted Gold Collar"
                  aspectRatio="aspect-[4/5]"
                  fallbackTitle="Royal Twin Peacock Collar"
                  priority={true}
                />

                {/* Ambient Golden Sheen Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top Hallmark Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-charcoal/90 backdrop-blur-md border border-gold/60 text-gold-light text-[9px] sm:text-[10px] uppercase tracking-widest px-2.5 py-1 shadow-lg flex items-center gap-1.5 font-semibold">
                  <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold animate-pulse" />
                  <span>22K BIS 916 Standard</span>
                </div>

                {/* Floating Editorial Bottom Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-ivory/95 backdrop-blur-md border border-gold/40 p-3 sm:p-4 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-gold-dark font-bold block">
                      Temple Signature Masterpiece
                    </span>
                    <span className="font-serif text-sm sm:text-lg text-charcoal font-semibold">
                      Royal Twin Peacock (Mayil) Collar
                    </span>
                    <p className="text-[9px] sm:text-[10px] text-charcoal-muted">
                      Handcrafted with 22K gold repoussé & radiant emerald plumage
                    </p>
                  </div>
                  <button
                    onClick={onExploreCollections}
                    className="w-full sm:w-auto px-3 py-1.5 bg-maroon text-ivory text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold hover:bg-maroon-light transition-all shrink-0 text-center"
                  >
                    View Piece
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
