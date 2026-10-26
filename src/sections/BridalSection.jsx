import React from 'react';
import { ArrowRight, Sparkles, Crown, CheckCircle2 } from 'lucide-react';
import ImageWithFallback from '../components/common/ImageWithFallback';

export default function BridalSection({ onExploreBridal, onEnquireBridal, lang = 'en' }) {
  const bridalHighlights = [
    lang === 'ta' ? "பாரம்பரிய 22K 916 ஹால்மார்க் தங்கம்" : "Traditional 22K 916 Hallmarked Gold",
    lang === 'ta' ? "தஞ்சாவூர் & கோவில் நக்ஷி கைவினை கலை" : "Heirloom Thanjavur & Temple Nakshi Craft",
    lang === 'ta' ? "தனிப்பயன் எடை மற்றும் நீள வடிவமைப்பு" : "Bespoke Bridal Weight & Length Customisation",
    lang === 'ta' ? "பழனி கடையில் பிரத்யேக ஆலோசனை அறை" : "Private Consultation Room at Palani Store"
  ];

  return (
    <section id="bridal" className="py-14 sm:py-20 lg:py-28 bg-gradient-to-b from-ivory-200/80 via-ivory to-ivory-100 border-b border-charcoal-border/30 overflow-hidden relative">
      {/* Decorative Background Gold Glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gold-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-maroon/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Authentic Indian Bridal Image Composition */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative max-w-sm sm:max-w-lg mx-auto lg:max-w-none">
              {/* Outer Golden Border & Shadows */}
              <div className="absolute -inset-3 sm:-inset-4 border border-gold/50 rounded-none translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 hidden sm:block pointer-events-none" />
              
              <div className="relative bg-charcoal border-2 border-gold/60 shadow-xl overflow-hidden group rounded-sm">
                <ImageWithFallback
                  src="/images/bridal-feature.jpg"
                  alt="Traditional South Indian Bride in Lalita Jewellers Bridal Gold Jewellery"
                  aspectRatio="aspect-[3/4]"
                  fallbackTitle="Bridal Muhurtham Collection"
                  priority={true}
                />

                {/* Shimmer Ambient Sheen */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent pointer-events-none" />

                {/* Floating Bottom Card - Responsive column on mobile */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-5 bg-ivory/95 backdrop-blur-md border border-gold/50 shadow-xl rounded-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div>
                      <div className="flex items-center gap-1.5 text-gold-dark text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold">
                        <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-dark" />
                        <span>Auspicious Wedding Adornments</span>
                      </div>
                      <h4 className="font-serif text-sm sm:text-xl text-charcoal font-medium mt-0.5 sm:mt-1">
                        Palani Muhurtham Bridal Haram & Kasu Suite
                      </h4>
                      <p className="text-[9px] sm:text-[11px] text-charcoal-muted">
                        22K 916 Temple Antique Gold • Handcrafted Heritage
                      </p>
                    </div>

                    <button
                      onClick={onExploreBridal}
                      className="w-full sm:w-auto px-3.5 py-1.5 sm:py-2 bg-maroon text-ivory text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold hover:bg-maroon-light transition-all shrink-0 text-center"
                    >
                      View Suite
                    </button>
                  </div>
                </div>

                {/* Floating Top Pill Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-maroon/95 backdrop-blur-sm text-ivory px-2.5 sm:px-3.5 py-1 sm:py-1.5 border border-gold/40 text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3 h-3 text-gold-light animate-pulse" />
                  <span>Bridal Signature 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Highlights */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-maroon/10 border border-maroon/30 text-maroon text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span>{lang === 'ta' ? 'வாழ்நாள் நினைவுகளுக்கான ஆபரணங்கள்' : 'Made for Your Forever Moments'}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl text-charcoal font-normal leading-[1.15]">
              {lang === 'ta' ? (
                <>திருமண முகூர்த்த <br /><span className="italic text-maroon font-serif">வைபவ தங்க நகைகள்</span></>
              ) : (
                <>Bridal Grandeur, <br /><span className="italic text-maroon font-serif">Handcrafted for Eternity.</span></>
              )}
            </h2>

            <p className="text-xs sm:text-base text-charcoal-muted font-light leading-relaxed max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
              {lang === 'ta'
                ? "தென்னிந்திய திருமணங்களின் மங்கல நன்னாளில் மணப்பெண்ணுக்கு கம்பீரமும் அழகும் சேர்க்கும் பாரம்பரிய ஒட்டியாணம், மயில் ஹாரம், வங்கி மற்றும் 916 ஹால்மார்க் காசு மாலை தொகுப்புகள்."
                : "From auspicious muhurtham kasu malais to intricate Thanjavur peacock harams and temple oddiyanams, our bespoke bridal trousseaus celebrate the sacred solemnity of Tamil weddings."}
            </p>

            {/* Feature Checklist */}
            <div className="pt-1 sm:pt-2 space-y-2 max-w-md mx-auto lg:mx-0 text-left">
              {bridalHighlights.map((text, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={onExploreBridal}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-maroon text-ivory text-xs uppercase tracking-[0.2em] font-semibold hover:bg-maroon-light transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 group active:scale-[0.99] border border-gold/40"
              >
                <span>{lang === 'ta' ? 'மணப்பெண் தொகுப்பை பார்க்க' : 'Explore Bridal Collection'}</span>
                <ArrowRight className="w-4 h-4 text-gold-light group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onEnquireBridal}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white border border-charcoal-border hover:border-gold hover:bg-gold-50/50 text-charcoal text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2 shadow-xs active:scale-[0.99]"
              >
                <Crown className="w-4 h-4 text-gold-dark" />
                <span>{lang === 'ta' ? 'திருமண ஆலோசனை கோர' : 'Book Bridal Consultation'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
