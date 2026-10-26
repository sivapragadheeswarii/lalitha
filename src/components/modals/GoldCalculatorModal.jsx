import React, { useState } from 'react';
import Modal from '../common/Modal';
import { Calculator, Sparkles, MessageCircle, RefreshCw, CheckCircle, Info } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brandConfig';

export default function GoldCalculatorModal({ isOpen, onClose }) {
  const [metal, setMetal] = useState('22k'); // '22k' | '24k' | 'silver'
  const [weight, setWeight] = useState(8); // in grams (default 1 Pavun = 8g)
  const [customWastage, setCustomWastage] = useState(9); // VA %

  const rates = {
    '22k': 13085,
    '24k': 14085,
    'silver': 220,
  };

  const currentRate = rates[metal] || 13085;
  const baseValue = weight * currentRate;
  const wastageAmount = metal === 'silver' ? baseValue * 0.05 : baseValue * (customWastage / 100);
  const subtotal = baseValue + wastageAmount;
  const gst = subtotal * 0.03;
  const totalEstimate = Math.round(subtotal + gst);

  const presets = [
    { label: "1g", grams: 1, note: "Min Demo" },
    { label: "4g (½ Pavun)", grams: 4, note: "Light Ornament" },
    { label: "8g (1 Pavun)", grams: 8, note: "1 Sovereign" },
    { label: "16g (2 Pavun)", grams: 16, note: "Bangles / Chain" },
    { label: "24g (3 Pavun)", grams: 24, note: "Festive Haram" },
    { label: "40g (5 Pavun)", grams: 40, note: "Bridal Set" },
  ];

  const handleWhatsAppEnquiry = () => {
    const metalLabel = metal === '22k' ? '22K Hallmarked Gold' : metal === '24k' ? '24K Pure Gold' : 'Pure Silver';
    const msg = `Vanakkam Lalita Jewellers, I calculated an estimate for ${weight}g of ${metalLabel} (Est: ₹${totalEstimate.toLocaleString('en-IN')}) on your website. I would like to consult your Palani showroom for custom crafting.`;
    const cleanNumber = BRAND_CONFIG.whatsappNumber ? BRAND_CONFIG.whatsappNumber.replace(/[^0-9]/g, '') : '919443722255';
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Palani Gold Rate Calculator & Estimator"
      size="md"
    >
      <div className="space-y-6">
        {/* Rate Banner */}
        <div className="bg-gradient-to-r from-charcoal via-maroon to-charcoal p-4 border border-gold/30 text-ivory">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-gold-light uppercase tracking-wider font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              Benchmark Rate Today (Palani, TN)
            </span>
            <span className="text-[10px] text-ivory/70 bg-black/40 px-2 py-0.5 rounded">Demo Benchmark</span>
          </div>
          <div className="text-2xl font-serif text-ivory font-bold flex items-baseline gap-2">
            <span>₹ {currentRate.toLocaleString('en-IN')}</span>
            <span className="text-xs text-ivory/70 font-sans font-normal">/ gram ({metal === '22k' ? '22K 916' : metal === '24k' ? '24K 999' : 'Silver 925'})</span>
          </div>
        </div>

        {/* Metal Selector */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-medium text-charcoal mb-2">
            Select Metal Purity
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setMetal('22k')}
              className={`py-2 px-3 text-xs font-medium border text-center transition-all ${
                metal === '22k'
                  ? 'border-gold bg-gold/15 text-maroon font-bold shadow-sm'
                  : 'border-charcoal-border hover:border-gold/40 text-charcoal'
              }`}
            >
              22K 916 Gold
            </button>
            <button
              type="button"
              onClick={() => setMetal('24k')}
              className={`py-2 px-3 text-xs font-medium border text-center transition-all ${
                metal === '24k'
                  ? 'border-gold bg-gold/15 text-maroon font-bold shadow-sm'
                  : 'border-charcoal-border hover:border-gold/40 text-charcoal'
              }`}
            >
              24K Pure Gold
            </button>
            <button
              type="button"
              onClick={() => setMetal('silver')}
              className={`py-2 px-3 text-xs font-medium border text-center transition-all ${
                metal === 'silver'
                  ? 'border-gold bg-gold/15 text-maroon font-bold shadow-sm'
                  : 'border-charcoal-border hover:border-gold/40 text-charcoal'
              }`}
            >
              Pure Silver
            </button>
          </div>
        </div>

        {/* Weight Selector */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs uppercase tracking-wider font-medium text-charcoal">
              Jewellery Weight (Grams)
            </label>
            <span className="text-xs font-serif font-bold text-maroon">
              {weight} Grams {metal !== 'silver' && weight % 8 === 0 ? `(${weight / 8} Pavun / Sovereign)` : ''}
            </span>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <input
              type="number"
              min="0.5"
              step="0.5"
              value={weight}
              onChange={(e) => setWeight(Math.max(0.1, Number(e.target.value)))}
              className="flex-1 px-3 py-2 border border-charcoal-border focus:outline-none focus:border-gold text-sm bg-ivory font-serif font-bold text-charcoal"
            />
            <span className="text-xs text-charcoal-muted uppercase">Grams</span>
          </div>

          {/* Quick Presets */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
            {presets.map((p) => (
              <button
                key={p.grams}
                type="button"
                onClick={() => setWeight(p.grams)}
                className={`p-1.5 text-center border text-[11px] transition-all ${
                  weight === p.grams
                    ? 'border-maroon bg-maroon text-ivory font-bold'
                    : 'border-charcoal-border/60 hover:border-gold text-charcoal bg-white/60'
                }`}
              >
                <div className="font-medium">{p.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Calculation Breakdown */}
        <div className="bg-ivory-100 p-4 border border-gold/30 space-y-2.5 text-xs text-charcoal">
          <div className="flex justify-between">
            <span className="text-charcoal-muted">Base Metal Value ({weight}g × ₹{currentRate.toLocaleString('en-IN')})</span>
            <span className="font-medium">₹ {Math.round(baseValue).toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-charcoal-muted">Est. Wastage & Making (VA ~{customWastage}%)</span>
            <span className="font-medium">₹ {Math.round(wastageAmount).toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-charcoal-muted">GST (3%)</span>
            <span className="font-medium">₹ {Math.round(gst).toLocaleString('en-IN')}</span>
          </div>
          <div className="pt-2 border-t border-gold/40 flex justify-between items-baseline font-bold">
            <span className="text-maroon uppercase tracking-wider text-[11px]">Estimated Demo Price</span>
            <span className="text-xl font-serif text-maroon">₹ {totalEstimate.toLocaleString('en-IN')}*</span>
          </div>
        </div>

        <div className="text-[11px] text-charcoal-muted italic flex items-start gap-1.5">
          <Info className="w-3.5 h-3.5 text-gold-dark shrink-0 mt-0.5" />
          <span>*Indicative demo benchmark calculation for Palani showroom. Actual making charges vary based on handcrafted filigree and gemstone setting.</span>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={handleWhatsAppEnquiry}
            className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire This Weight on WhatsApp</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="py-3 px-6 bg-ivory border border-charcoal-border hover:bg-gold-50 text-xs uppercase tracking-wider font-semibold text-charcoal transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}
