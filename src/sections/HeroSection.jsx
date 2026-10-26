import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Award, Crown, ChevronLeft, ChevronRight } from 'lucide-react';
import ImageWithFallback from '../components/common/ImageWithFallback';

const HERO_SLIDES = [
  {
    image: "/images/golden-tissue-nakshi-bride.png",
    tag: "Muhurtham Masterpiece",
    tagTa: "முகூர்த்த பொக்கிஷம்",
    title: "Golden Muhurtham Lakshmi Nakshi Suite",
    titleTa: "தங்க முகூர்த்த லட்சுமி நக்ஷி அட்டிகை",
    desc: "Handcrafted 22K temple gold, divine Lakshmi relief & tiered jhumkas",
    descTa: "22K தூய கோவில் நக்ஷி வேலைப்பாடு மற்றும் அடுக்கு ஜிமிக்கிகள்",
  },
  {
    image: "/images/peacock-kemp-choker.jpg",
    tag: "Royal Antique Kemp",
    tagTa: "ராஜ கெம்ப் அட்டிகை",
    title: "Mayil Kemp Antique Gold Choker Suite",
    titleTa: "மயில் கெம்ப் பழங்கால தங்க அட்டிகை",
    desc: "Sculpted twin peacocks, ruby kemp drops & crescent emerald medallion",
    descTa: "இரட்டை மயில் உருவம், மாணிக்க கெம்ப் கற்கள் மற்றும் மரகத பதக்கம்",
  },
  {
    image: "/images/gaja-elephant-lakshmi-necklace.jpg",
    tag: "Heritage Temple Craft",
    tagTa: "பாரம்பரிய கோவில் கைவினை",
    title: "Gaja Elephant & Lakshmi Heritage Pearl Collar",
    titleTa: "கஜ லட்சுமி முத்து மாலை & ஜிமிக்கி",
    desc: "Auspicious royal elephants, sacred deities & lustrous natural seed pearls",
    descTa: "மங்கல கஜ யானைகள், தெய்வ உருவங்கள் மற்றும் இயற்கை முத்துக்கள்",
  },
];

export default function HeroSection({ onExploreCollections, onExploreBridal, lang = 'en' }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides every 3.8 seconds unless hovered/paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const currentSlide = HERO_SLIDES[activeSlide];

  const highlights = [
    { label: "22K 916", desc: lang === 'ta' ? "தூய தங்கம்" : "Heritage Purity" },
    { label: "Palani", desc: lang === 'ta' ? "பழனி பட்டறை" : "Tamil Nadu Showroom" },
    { label: "Bespoke", desc: lang === 'ta' ? "பாரம்பரிய கைவினை" : "Artisan Goldsmithing" },
    { label: "100%", desc: lang === 'ta' ? "நேர்மையான விலை" : "Authentic Designs" },
  ];

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-ivory-100 via-ivory to-ivory-200/50 pt-3 pb-10 sm:py-20 lg:py-24 border-b border-gold-200/40">
      {/* Background Animated Rings & Radial Shimmer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] border border-gold/15 rounded-full pointer-events-none animate-spin [animation-duration:120s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] sm:w-[1200px] h-[1000px] sm:h-[1200px] border border-gold/10 rounded-full pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Gold Showcase Running Marquee Ticker Banner (Hidden on mobile, visible on desktop/tablet) */}
      <div className="hidden sm:block max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mb-4 sm:mb-8">
        <div className="bg-gradient-to-r from-[#171312] via-maroon to-[#171312] text-ivory py-1 sm:py-2 px-2.5 sm:px-4 border border-gold/40 shadow-sm flex items-center justify-between text-[10px] sm:text-[11px] overflow-hidden rounded-xs">
          {/* Left badge */}
          <div className="flex items-center gap-1.5 font-medium tracking-wider text-gold-light shrink-0 z-10 bg-gradient-to-r from-[#171312] via-[#171312] to-transparent pr-2">
            <Crown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold animate-bounce" />
            <span className="uppercase font-semibold tracking-wider">{lang === 'ta' ? 'லலிதா காட்சி' : 'Lalita Showcase'}</span>
          </div>

          {/* Running Continuous Marquee Strip */}
          <div className="flex-1 overflow-hidden relative mx-2">
            <div className="animate-ticker flex items-center whitespace-nowrap text-ivory/90 font-light text-[10px] sm:text-xs">
              {[1, 2].map((loop) => (
                <div key={loop} className="flex items-center gap-4 sm:gap-6 shrink-0 pr-4 sm:pr-6">
                  <span>✦ 22K 916 Hallmarked Temple Jewellery</span>
                  <span>✦ Handcrafted Muhurtham Bridal Harams</span>
                  <span>✦ Palani Main Bazaar Showroom</span>
                  <span>✦ 100% Purity & Transparent Weight</span>
                  <span>✦ Sacred South Indian Goldsmithing</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right badge */}
          <div className="flex items-center gap-1 text-gold-light font-medium text-[9px] sm:text-[10px] uppercase tracking-wider shrink-0 z-10 bg-gradient-to-l from-[#171312] via-[#171312] to-transparent pl-2">
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold" />
            <span>Palani, TN</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-6 text-center lg:text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-0.5 sm:py-1.5 bg-ivory border border-gold/40 shadow-xs">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-dark animate-spin [animation-duration:8s]" />
              <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-charcoal font-semibold">
                Lalita Jewellers • Palani, Tamil Nadu
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-2.5xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-charcoal tracking-tight leading-[1.15]">
              {lang === 'ta' ? (
                <>
                  பாரம்பரிய பொக்கிஷம், <br />
                  <span className="italic font-serif text-maroon drop-shadow-xs">காலம் போற்றும் கைவினை.</span>
                </>
              ) : (
                <>
                  Tradition, Crafted <br className="hidden sm:inline" />
                  <span className="italic font-serif text-maroon drop-shadow-xs">to Treasure.</span>
                </>
              )}
            </h1>

            {/* Subheading / Description: Desktop full, Mobile 1-line crisp */}
            <p className="hidden sm:block text-base md:text-lg text-charcoal-muted max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              {lang === 'ta'
                ? "பழனி திருத்தலத்தின் பாரம்பரிய கைவினை பொற்கொல்லர்களால் வடிக்கப்பட்ட தூய 22K தங்க அட்டிகை, காசு மாலை, மயில் ஹாரங்கள் மற்றும் திருமண மணப்பெண் நகைகள்."
                : "Discover timeless jewellery designed to celebrate your most precious moments. Handcrafted 22K gold, heirloom kasu malas, temple harams, and bridal suites in Palani."}
            </p>
            <p className="sm:hidden text-xs text-charcoal-muted font-light leading-snug px-1">
              {lang === 'ta'
                ? "பழனியின் பாரம்பரிய தூய 22K 916 ஹால்மார்க் திருமண & கோவில் நகைகள்."
                : "Handcrafted 22K 916 hallmarked bridal and temple jewellery in Palani."}
            </p>

            {/* CTA Buttons - Compact side-by-side on mobile */}
            <div className="pt-1 sm:pt-2 flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4">
              <button
                onClick={onExploreCollections}
                className="flex-1 sm:flex-initial px-3 sm:px-8 py-2.5 sm:py-4 bg-maroon text-ivory text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold hover:bg-maroon-light transition-all shadow-sm hover:shadow-xl flex items-center justify-center gap-1.5 sm:gap-2.5 group active:scale-[0.98] border border-gold/30 rounded-xs"
              >
                <span>{lang === 'ta' ? 'நகைத் தொகுப்புகள்' : 'Collections'}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-light group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onExploreBridal}
                className="flex-1 sm:flex-initial px-3 sm:px-8 py-2.5 sm:py-4 bg-ivory text-charcoal border-2 border-gold hover:border-gold-dark hover:bg-gold-50/70 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-1.5 sm:gap-2 shadow-2xs active:scale-[0.98] rounded-xs"
              >
                <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-dark" />
                <span>{lang === 'ta' ? 'மணப்பெண் நகைகள்' : 'Bridal'}</span>
              </button>
            </div>

            {/* Heritage Highlights: Desktop 4-box grid, Mobile clean 1-line badge strip */}
            <div className="hidden sm:grid pt-4 sm:pt-6 border-t border-charcoal-border/40 grid-cols-4 gap-4 text-left max-w-xl mx-auto lg:mx-0">
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

            {/* Mobile Minimal Trust Strip */}
            <div className="sm:hidden flex items-center justify-around py-2 px-3 bg-ivory-100/90 border border-gold/30 rounded-xs text-[10px] text-charcoal font-medium shadow-2xs">
              <span className="text-charcoal font-semibold">✦ 22K 916 Pure</span>
              <span className="text-gold/60">•</span>
              <span className="text-charcoal font-semibold">✦ Palani Heritage</span>
              <span className="text-gold/60">•</span>
              <span className="text-charcoal font-semibold">✦ 100% Certified</span>
            </div>
          </div>

          {/* Right Column: 3-Image Auto-swap Carousel Animation */}
          <div
            className="lg:col-span-5 relative mt-2 lg:mt-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative mx-auto max-w-xs sm:max-w-md lg:max-w-none">
              {/* Outer Decorative Frames with Gold Borders */}
              <div className="absolute -inset-3 border-2 border-gold/50 -z-10 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 hidden sm:block" />

              {/* Main Carousel Frame */}
              <div className="relative overflow-hidden bg-charcoal border-2 border-gold shadow-2xl group rounded-sm img-shine">
                {/* 3 Slides with Smooth Cross-fade Animation */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  {HERO_SLIDES.map((slide, idx) => (
                    <div
                      key={slide.image}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        activeSlide === idx
                          ? 'opacity-100 scale-100 z-10'
                          : 'opacity-0 scale-105 pointer-events-none z-0'
                      }`}
                    >
                      <ImageWithFallback
                        src={slide.image}
                        alt={slide.title}
                        aspectRatio="aspect-[4/5]"
                        fallbackTitle={slide.title}
                        priority={idx === 0}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  ))}

                  {/* Ambient Golden Sheen Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent pointer-events-none z-20" />

                  {/* Floating Top Hallmark Badge */}
                  <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 bg-charcoal/90 backdrop-blur-md border border-gold/60 text-gold-light text-[8px] sm:text-[10px] uppercase tracking-widest px-2 sm:px-2.5 py-0.5 sm:py-1 shadow-lg flex items-center gap-1 sm:gap-1.5 font-semibold z-30">
                    <Award className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-gold animate-pulse" />
                    <span>22K BIS 916 Standard</span>
                  </div>

                  {/* Carousel Manual Controls (Prev/Next Arrows) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevSlide();
                    }}
                    aria-label="Previous jewel slide"
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-charcoal/70 hover:bg-charcoal text-gold-light border border-gold/50 flex items-center justify-center opacity-80 hover:opacity-100 transition-all active:scale-95 shadow-md"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextSlide();
                    }}
                    aria-label="Next jewel slide"
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-charcoal/70 hover:bg-charcoal text-gold-light border border-gold/50 flex items-center justify-center opacity-80 hover:opacity-100 transition-all active:scale-95 shadow-md"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Slide Indicators / Dots */}
                  <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-30 flex items-center gap-1.5 bg-charcoal/80 backdrop-blur-xs px-2 py-1 rounded-full border border-gold/30">
                    {HERO_SLIDES.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setActiveSlide(dotIdx)}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                        className={`transition-all duration-300 rounded-full ${
                          activeSlide === dotIdx
                            ? 'w-4 sm:w-5 h-1.5 bg-gold shadow-xs'
                            : 'w-1.5 h-1.5 bg-ivory/50 hover:bg-ivory'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Floating Editorial Bottom Badge with Active Slide Info */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 bg-ivory/95 backdrop-blur-md border border-gold/50 p-2.5 sm:p-4 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 z-30 rounded-xs">
                    <div className="flex-1 min-w-0">
                      <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-gold-dark font-bold block truncate">
                        {lang === 'ta' ? currentSlide.tagTa : currentSlide.tag}
                      </span>
                      <h4 className="font-serif text-xs sm:text-lg text-charcoal font-semibold truncate leading-tight mt-0.5">
                        {lang === 'ta' ? currentSlide.titleTa : currentSlide.title}
                      </h4>
                      <p className="text-[8px] sm:text-[10px] text-charcoal-muted line-clamp-1">
                        {lang === 'ta' ? currentSlide.descTa : currentSlide.desc}
                      </p>
                    </div>
                    <button
                      onClick={onExploreCollections}
                      className="w-full sm:w-auto px-2.5 sm:px-3 py-1 sm:py-1.5 bg-maroon text-ivory text-[8px] sm:text-[10px] uppercase tracking-wider font-semibold hover:bg-maroon-light transition-all shrink-0 text-center rounded-2xs"
                    >
                      {lang === 'ta' ? 'பார்க்க' : 'View Piece'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
