import React, { useState } from 'react';
import Modal from '../common/Modal';
import { MessageCircle, CheckCircle, AlertCircle, Sparkles, Send } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppUrl } from '../../config/brandConfig';

export default function EnquiryModal({ isOpen, onClose, selectedProduct = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    occasion: 'Bridal & Wedding',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const hasWhatsAppConfigured = Boolean(BRAND_CONFIG.whatsappNumber);
  const whatsappUrl = getWhatsAppUrl(selectedProduct ? selectedProduct.name : null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number to submit your enquiry.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', phone: '', occasion: 'Bridal & Wedding', notes: '' });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={selectedProduct ? `Enquire About ${selectedProduct.name}` : "Jewellery Consultation & Enquiry"}
      subtitle="Lalita Jewellers • Palani, Tamil Nadu"
      maxWidth="max-w-xl"
    >
      {submitted ? (
        <div className="py-6 text-center space-y-3">
          <div className="w-14 h-14 mx-auto rounded-full bg-gold-50 border border-gold/40 flex items-center justify-center text-maroon">
            <CheckCircle className="w-7 h-7 text-gold-dark" />
          </div>
          <h4 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">
            Enquiry Received
          </h4>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-charcoal">{formData.name}</span>. Your enquiry for {selectedProduct ? selectedProduct.name : 'custom jewellery guidance'} has been recorded with reference <span className="font-mono text-xs bg-ivory-200 px-2 py-0.5 text-maroon font-bold">#LJ-{Math.floor(100000 + Math.random() * 900000)}</span>.
          </p>
          <div className="p-2.5 bg-ivory-100 border border-gold-200 text-[11px] text-charcoal-muted max-w-md mx-auto">
            Our Palani showroom goldsmiths and sales associates will contact you shortly via WhatsApp / Phone.
          </div>
          <div className="pt-2">
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-maroon text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-maroon-light transition-all"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Palani Showroom WhatsApp Direct Strip */}
          <div className="p-2.5 xs:p-3 bg-emerald-50 border border-emerald-200/80 rounded-xs flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                <MessageCircle className="w-3.5 h-3.5 fill-white text-[#25D366]" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] xs:text-xs font-semibold text-emerald-950 block truncate">
                  Palani Showroom WhatsApp
                </span>
                <span className="text-[9px] xs:text-[10px] text-emerald-800 block truncate">
                  Chat directly for instant design photos & weights
                </span>
              </div>
            </div>
            <a
              href={whatsappUrl || 'https://wa.me/919443722255?text=Vanakkam%20Lalita%20Jewellers'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-2.5 xs:px-3 py-1.5 bg-[#25D366] hover:bg-[#1ebe5b] text-white text-[10px] xs:text-xs font-semibold transition-all shrink-0 rounded-xs shadow-xs"
            >
              <span>Chat Now</span>
            </a>
          </div>

          {/* Enquiry Form */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
            {selectedProduct && (
              <div className="flex items-center gap-3 p-2.5 bg-ivory-100 border border-charcoal-border/50">
                <div className="w-11 h-11 bg-ivory-200 shrink-0 overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs min-w-0">
                  <span className="text-gold-dark uppercase tracking-wider text-[9px] block">
                    Selected Ornament
                  </span>
                  <span className="font-serif text-xs sm:text-sm font-medium text-charcoal block truncate">
                    {selectedProduct.name}
                  </span>
                  <span className="text-charcoal-muted text-[10px] xs:text-[11px] block truncate">
                    {selectedProduct.category} • {selectedProduct.demoPrice}
                  </span>
                </div>
              </div>
            )}

            <div>
              <label className="block text-[11px] xs:text-xs uppercase tracking-wider text-charcoal-muted mb-1 font-medium">
                Your Full Name <span className="text-maroon">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. S. Meenakshi"
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-charcoal-border focus:border-gold focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] xs:text-xs uppercase tracking-wider text-charcoal-muted mb-1 font-medium">
                Mobile / WhatsApp Number <span className="text-maroon">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. +91 98765 43210"
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-charcoal-border focus:border-gold focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] xs:text-xs uppercase tracking-wider text-charcoal-muted mb-1 font-medium">
                Occasion / Requirement
              </label>
              <select
                value={formData.occasion}
                onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-charcoal-border focus:border-gold focus:outline-none transition-colors"
              >
                <option value="Bridal & Wedding">Bridal & Wedding Muhurtham</option>
                <option value="Temple Festival & Pooja">Temple Festival & Pooja</option>
                <option value="Milestone & Anniversary">Milestone & Anniversary</option>
                <option value="Custom Bespoke Commission">Custom Bespoke Commission</option>
                <option value="General Store Consultation">General Store Consultation in Palani</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] xs:text-xs uppercase tracking-wider text-charcoal-muted mb-1 font-medium">
                Specific Customizations or Notes
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Preferred gold weight, length adjustments, or visit timing..."
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-charcoal-border focus:border-gold focus:outline-none transition-colors resize-none"
              />
            </div>

            {errorMsg && (
              <p className="text-xs text-maroon font-medium">{errorMsg}</p>
            )}

            <div className="pt-1.5 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 text-xs uppercase tracking-wider text-charcoal-muted hover:text-charcoal transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2 bg-maroon text-ivory text-xs uppercase tracking-wider font-semibold hover:bg-maroon-light transition-all shadow-sm active:scale-95"
              >
                <Send className="w-3.5 h-3.5 text-gold-light" />
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      )}
    </Modal>
  );
}
