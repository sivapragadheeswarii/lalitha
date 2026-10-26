import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useScrollLock } from '../../hooks/useScrollLock';

export default function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'max-w-3xl',
}) {
  const modalRef = useRef(null);
  useScrollLock(isOpen);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        ref={modalRef}
        className={`relative w-full ${maxWidth} bg-ivory rounded-none border border-gold/30 shadow-2xl z-10 overflow-hidden transform transition-all animate-slide-up`}
      >
        {/* Subtle Top Gold Bar */}
        <div className="h-1 bg-gold-gradient w-full" />

        {/* Header if title provided */}
        {(title || subtitle) && (
          <div className="flex items-start justify-between px-3.5 xs:px-5 sm:px-6 py-3.5 sm:py-5 border-b border-charcoal-border/50">
            <div>
              {title && (
                <h3 id="modal-title" className="font-serif text-lg xs:text-xl sm:text-2xl text-charcoal font-medium">
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="text-[10px] xs:text-xs text-charcoal-muted tracking-wider uppercase mt-1">
                  {subtitle}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="p-1.5 text-charcoal-muted hover:text-maroon transition-colors hover:bg-gold-50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* If no header, floating close button */}
        {!title && !subtitle && (
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-2.5 right-2.5 xs:top-4 xs:right-4 z-20 p-1.5 xs:p-2 text-charcoal bg-ivory/90 backdrop-blur-md rounded-full hover:bg-ivory hover:text-maroon border border-charcoal-border shadow-sm transition-all"
          >
            <X className="w-4 h-4 xs:w-5 xs:h-5" />
          </button>
        )}

        {/* Content */}
        <div className="p-3 xs:p-4.5 sm:p-6 max-h-[82vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
