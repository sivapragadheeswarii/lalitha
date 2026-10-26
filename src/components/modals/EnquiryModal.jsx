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
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-gold-50 border border-gold/40 flex items-center justify-center text-maroon">
            <CheckCircle className="w-8 h-8 text-gold-dark" />
          </div>
          <h4 className="font-serif text-2xl text-charcoal font-medium">
            Enquiry Received
          </h4>
          <p className="text-sm text-charcoal-muted max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-charcoal">{formData.name}</span>. Your enquiry for {selectedProduct ? selectedProduct.name : 'custom jewellery guidance'} has been noted with reference <span className="font-mono text-xs bg-ivory-200 px-2 py-0.5 text-maroon font-bold">#LJ-{Math.floor(100000 + Math.random() * 900000)}</span>.
          </p>
          <div className="p-3 bg-ivory-100 border border-gold-200 text-xs text-charcoal-muted max-w-md mx-auto">
            (Demo Mode Note: In live deployment, notifications are forwarded directly to the shop’s sales team in Palani.)
          </div>
          <div className="pt-4">
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-maroon text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-maroon-light transition-all"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Status of Direct WhatsApp Contact */}
          {hasWhatsAppConfigured ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 rounded-none space-y-2">
              <div className="flex items-center gap-2 font-medium">
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>Instant WhatsApp Enquiry Active</span>
              </div>
              <p className="text-emerald-800">
                You can connect directly with our store associates on WhatsApp for prompt assistance with design photos and custom weights.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 text-white font-medium text-xs rounded hover:bg-emerald-800 transition-colors mt-1"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Chat via WhatsApp Now
              </a>
            </div>
          ) : (
            <div className="p-4 bg-ivory-200/80 border-l-2 border-gold text-xs space-y-1.5 text-charcoal-muted">
              <div className="flex items-center gap-2 font-medium text-charcoal">
                <AlertCircle className="w-4 h-4 text-gold-dark" />
                <span>Direct WhatsApp Contact Configuration</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Direct WhatsApp redirection is pending configuration in <code className="bg-ivory-300 px-1 py-0.5 text-maroon text-[10px]">brandConfig.js</code> (phone number placeholder). You can test the demo consultation request below.
              </p>
            </div>
          )}

          {/* Enquiry Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {selectedProduct && (
              <div className="flex items-center gap-3 p-3 bg-ivory-100 border border-charcoal-border/50">
                <div className="w-12 h-12 bg-ivory-200 shrink-0 overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs">
                  <span className="text-gold-dark uppercase tracking-wider text-[10px] block">
                    Selected Ornament
                  </span>
                  <span className="font-serif text-sm font-medium text-charcoal block">
                    {selectedProduct.name}
                  </span>
                  <span className="text-charcoal-muted text-[11px]">
                    {selectedProduct.category} • {selectedProduct.demoPrice} (Demo)
                  </span>
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-1 font-medium">
                Your Full Name <span className="text-maroon">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. S. Meenakshi"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-charcoal-border focus:border-gold focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-1 font-medium">
                Mobile / WhatsApp Number <span className="text-maroon">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. +91 98765 43210"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-charcoal-border focus:border-gold focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-1 font-medium">
                Occasion / Requirement
              </label>
              <select
                value={formData.occasion}
                onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-charcoal-border focus:border-gold focus:outline-none transition-colors"
              >
                <option value="Bridal & Wedding">Bridal & Wedding Muhurtham</option>
                <option value="Temple Festival & Pooja">Temple Festival & Pooja</option>
                <option value="Milestone & Anniversary">Milestone & Anniversary</option>
                <option value="Custom Bespoke Commission">Custom Bespoke Commission</option>
                <option value="General Store Consultation">General Store Consultation in Palani</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-charcoal-muted mb-1 font-medium">
                Specific Customizations or Notes
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Share your preferred gold weight, design adjustments, or visit timing..."
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-charcoal-border focus:border-gold focus:outline-none transition-colors resize-none"
              />
            </div>

            {errorMsg && (
              <p className="text-xs text-maroon font-medium">{errorMsg}</p>
            )}

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2.5 text-xs uppercase tracking-wider text-charcoal-muted hover:text-charcoal transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-maroon text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-maroon-light transition-all shadow-sm"
              >
                <Send className="w-3.5 h-3.5 text-gold-light" />
                Submit Demo Enquiry
              </button>
            </div>
          </form>
        </div>
      )}
    </Modal>
  );
}
