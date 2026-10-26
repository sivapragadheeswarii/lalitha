import React from 'react';
import Modal from '../common/Modal';
import ImageWithFallback from '../common/ImageWithFallback';
import { Heart, MessageCircle, ShoppingBag, ShieldCheck, Sparkles, Check } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../../config/brandConfig';

export default function ProductModal({
  product,
  isOpen,
  onClose,
  onEnquire,
  isWishlisted,
  onToggleWishlist,
  onAddToBag,
  isAddedToBag
}) {
  if (!product) return null;

  const whatsappLink = getWhatsAppUrl(product.name);

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: Product Image */}
        <div className="relative border border-gold-200/60 p-2 bg-ivory-50">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            aspectRatio="aspect-[4/5]"
            fallbackTitle={product.name}
            priority={true}
          />
          {product.tag && (
            <span className="absolute top-4 left-4 bg-maroon text-ivory text-[10px] tracking-widest uppercase font-medium px-3 py-1 shadow-sm">
              {product.tag}
            </span>
          )}
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col space-y-5">
          <div>
            <div className="flex items-center justify-between text-xs tracking-widest text-gold-dark uppercase font-medium">
              <span>{product.category}</span>
              {product.subCategory && (
                <span className="text-charcoal-muted">| {product.subCategory}</span>
              )}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium mt-1 leading-tight">
              {product.name}
            </h2>
            <div className="w-12 h-[1px] bg-gold mt-3" />
          </div>

          {/* Showroom Price Benchmark Notice */}
          <div className="bg-ivory-200/60 p-3.5 border-l-2 border-gold text-xs text-charcoal-muted space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-semibold text-charcoal font-serif">
                {product.demoPrice}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-charcoal-muted">
                (Showroom Benchmark)
              </span>
            </div>
            <p className="text-[11px] leading-relaxed text-charcoal-muted/90">
              Final pricing depends on gold weight, current purity benchmark, and custom artisan craft specifications at our Palani store.
            </p>
          </div>

          {/* Description */}
          <p className="text-charcoal text-sm leading-relaxed">
            {product.description}
          </p>

          {/* Specifications Grid */}
          {product.details && (
            <div className="grid grid-cols-2 gap-3 text-xs border-y border-charcoal-border/40 py-4 my-2">
              <div>
                <span className="text-charcoal-muted uppercase tracking-wider text-[10px] block">
                  Artisan Finish
                </span>
                <span className="font-medium text-charcoal mt-0.5 block">
                  {product.details.finish}
                </span>
              </div>
              <div>
                <span className="text-charcoal-muted uppercase tracking-wider text-[10px] block">
                  Motif Heritage
                </span>
                <span className="font-medium text-charcoal mt-0.5 block">
                  {product.details.motif}
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-charcoal-muted uppercase tracking-wider text-[10px] block">
                  Ideal Occasion
                </span>
                <span className="font-medium text-charcoal mt-0.5 block">
                  {product.details.occasion}
                </span>
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Primary Enquiry Button */}
              <button
                onClick={() => onEnquire(product)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-maroon text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-maroon-light transition-all shadow-md active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 text-gold-light" />
                Enquire for This Piece
              </button>

              {/* Add to Demo Bag */}
              <button
                onClick={() => onAddToBag(product)}
                className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 border text-xs uppercase tracking-widest font-medium transition-all ${
                  isAddedToBag
                    ? 'border-gold bg-gold-50 text-gold-dark'
                    : 'border-charcoal-border hover:border-gold hover:bg-gold-50/50 text-charcoal'
                }`}
              >
                {isAddedToBag ? (
                  <>
                    <Check className="w-4 h-4 text-gold-dark" />
                    In Demo Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    Add to Bag
                  </>
                )}
              </button>

              {/* Wishlist Toggle Button */}
              <button
                onClick={() => onToggleWishlist(product)}
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                className={`p-3.5 border transition-all flex items-center justify-center ${
                  isWishlisted
                    ? 'border-maroon bg-maroon/5 text-maroon'
                    : 'border-charcoal-border text-charcoal hover:border-gold hover:text-maroon'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-maroon text-maroon' : ''}`} />
              </button>
            </div>

            {/* Direct WhatsApp hint or assistance guidance */}
            <div className="flex items-center justify-between text-[11px] text-charcoal-muted pt-2">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                Bespoke sizing available upon consultation
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-dark" />
                Palani, Tamil Nadu
              </span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
