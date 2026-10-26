import React, { useEffect } from 'react';
import { X, Heart, Trash2, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useScrollLock } from '../../hooks/useScrollLock';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlist,
  onRemove,
  onClear,
  onSelectProduct,
  onEnquireAll,
}) {
  useScrollLock(isOpen);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-over Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-ivory shadow-2xl flex flex-col border-l border-gold/30">
          <div className="h-1 bg-gold-gradient w-full" />

          {/* Drawer Header */}
          <div className="px-6 py-5 border-b border-charcoal-border/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-maroon fill-maroon" />
              <div>
                <h3 className="font-serif text-2xl text-charcoal font-medium">
                  Saved Pieces
                </h3>
                <span className="text-[10px] uppercase tracking-widest text-charcoal-muted">
                  {wishlist.length} {wishlist.length === 1 ? 'Design' : 'Designs'} Curated
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close wishlist drawer"
              className="p-1.5 text-charcoal-muted hover:text-maroon transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {wishlist.length > 0 ? (
              <div className="space-y-3">
                {wishlist.map((product) => (
                  <div
                    key={product.id}
                    className="flex gap-4 p-3 bg-white border border-charcoal-border/50 hover:border-gold/60 transition-all"
                  >
                    <div
                      onClick={() => {
                        onClose();
                        onSelectProduct(product);
                      }}
                      className="w-20 h-20 bg-ivory-100 shrink-0 cursor-pointer overflow-hidden"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] uppercase tracking-wider text-gold-dark font-medium">
                            {product.category}
                          </span>
                          <button
                            onClick={() => onRemove(product.id)}
                            aria-label={`Remove ${product.name} from wishlist`}
                            className="text-charcoal-muted hover:text-maroon transition-colors p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <h5
                          onClick={() => {
                            onClose();
                            onSelectProduct(product);
                          }}
                          className="font-serif text-base text-charcoal hover:text-maroon cursor-pointer truncate font-medium mt-0.5"
                        >
                          {product.name}
                        </h5>
                        <span className="text-xs text-charcoal-muted block">
                          {product.demoPrice} (Demo)
                        </span>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => {
                            onClose();
                            onSelectProduct(product);
                          }}
                          className="text-[11px] font-medium text-maroon hover:underline inline-flex items-center gap-1"
                        >
                          View Details <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty Wishlist State */
              <div className="py-20 text-center px-4">
                <div className="w-16 h-16 rounded-full bg-ivory-100 border border-gold-200/50 flex items-center justify-center mx-auto mb-4 text-charcoal-muted">
                  <Heart className="w-7 h-7 text-gold" />
                </div>
                <h4 className="font-serif text-2xl text-charcoal font-medium">
                  Your Wishlist is Empty
                </h4>
                <p className="text-xs text-charcoal-muted mt-2 leading-relaxed max-w-xs mx-auto">
                  Browse our heritage collections and click the heart icon on any piece you wish to save for future consultations.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2.5 bg-maroon text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-maroon-light transition-all shadow-sm"
                >
                  Explore Collections
                </button>
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          {wishlist.length > 0 && (
            <div className="p-6 border-t border-charcoal-border/50 bg-ivory-50 space-y-3">
              <button
                onClick={() => {
                  onClose();
                  onEnquireAll(wishlist);
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-maroon text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-maroon-light transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-gold-light" />
                Enquire for Wishlisted Designs
              </button>
              <div className="flex items-center justify-between text-xs text-charcoal-muted pt-1">
                <button
                  onClick={onClear}
                  className="text-[11px] hover:text-maroon transition-colors"
                >
                  Clear Wishlist
                </button>
                <span className="text-[10px]">Lalita Jewellers • Palani</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
