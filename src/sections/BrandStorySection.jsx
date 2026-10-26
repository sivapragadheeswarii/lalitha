import React from 'react';
import { Sparkles, MapPin, Feather } from 'lucide-react';
import ImageWithFallback from '../components/common/ImageWithFallback';

export default function BrandStorySection() {
  return (
    <section id="brand-story" className="py-20 lg:py-28 bg-ivory border-b border-charcoal-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Tasteful Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-50 border border-gold-200 text-gold-dark text-[10px] uppercase tracking-[0.25em] font-medium">
              <Feather className="w-3.5 h-3.5" />
              <span>Our Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-medium leading-tight">
              Elegance Rooted in Tradition
            </h2>

            <div className="w-16 h-[1.5px] bg-gold mx-auto lg:mx-0" />

            <div className="space-y-4 text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                In the temple town of Palani, jewellery is more than personal ornamentation—it is a cherished cultural emblem, passed across generations as a blessing for life&apos;s most meaningful milestones.
              </p>
              <p>
                At Lalita Jewellers, our aesthetic honours the profound motifs of South Indian goldsmithing: the grace of the sacred lotus, the regal poise of the peacock, and the intricate harmony of antique coin malas. Every design is curated to balance traditional reverence with contemporary wearability.
              </p>
              <p>
                Whether you seek an heirloom bridal haram or an everyday ornament of understated elegance, our approach is centered on personal care, thoughtful attention to detail, and enduring artistry.
              </p>
            </div>

            {/* Values Points */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="p-4 bg-ivory-100 border-l-2 border-gold">
                <span className="font-serif text-base font-semibold text-charcoal block">
                  Artisanal Integrity
                </span>
                <span className="text-xs text-charcoal-muted mt-1 block">
                  Preserving traditional goldsmithing techniques with meticulous finishing.
                </span>
              </div>
              <div className="p-4 bg-ivory-100 border-l-2 border-maroon">
                <span className="font-serif text-base font-semibold text-charcoal block">
                  Palani Hospitality
                </span>
                <span className="text-xs text-charcoal-muted mt-1 block">
                  Attentive personal consultation to assist your family in choosing pieces of lasting value.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Atmosphere Image */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden bg-ivory-200 border border-gold/40 shadow-xl">
                <ImageWithFallback
                  src="/images/bridal-chest.jpg"
                  alt="Jewellery Artisanship and Detailing"
                  aspectRatio="aspect-[4/5]"
                  fallbackTitle="Artisan Goldsmithing"
                />
              </div>

              {/* Floating Quote Box */}
              <div className="mt-4 p-4 bg-ivory-50 border border-charcoal-border/50 text-center">
                <p className="font-serif italic text-charcoal text-sm">
                  &ldquo;Jewellery crafted not merely for today, but to be treasured as an heirloom for tomorrow.&rdquo;
                </p>
                <span className="text-[10px] uppercase tracking-widest text-gold-dark mt-1 block">
                  Lalita Jewellers • Palani
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
