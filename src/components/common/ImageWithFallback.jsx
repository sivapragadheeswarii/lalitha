import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function ImageWithFallback({
  src,
  alt = "Indian Jewellery Craftsmanship",
  className = "",
  aspectRatio = "aspect-[4/5]",
  fallbackTitle = "Lalita Jewellers",
  priority = false
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-ivory-200 ${aspectRatio} ${className}`}>
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-ivory-200 via-ivory-300 to-ivory-200 animate-pulse" />
      )}

      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
      ) : (
        /* Graceful Luxury Fallback Card if Remote Image is Offline */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-ivory-100 to-ivory-200 border border-gold/20">
          <div className="w-14 h-14 rounded-full bg-ivory-50 border border-gold/40 flex items-center justify-center mb-3 shadow-inner">
            <Sparkles className="w-6 h-6 text-gold animate-pulse" />
          </div>
          <span className="font-serif text-lg text-charcoal font-medium">
            {fallbackTitle}
          </span>
          <span className="text-[11px] text-charcoal-muted tracking-wider uppercase mt-1">
            Palani Heritage Design
          </span>
          <div className="w-8 h-[1px] bg-gold mt-3" />
        </div>
      )}
    </div>
  );
}
