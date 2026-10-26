/**
 * LALITA JEWELLERS - Brand & Contact Configuration
 * 
 * Note: Placeholders are provided for unconfirmed contact details.
 * Do not invent real contact details or certifications.
 */

export const BRAND_CONFIG = {
  name: "LALITA JEWELLERS",
  legalName: "Lalita Jewellers",
  tagline: "Tradition, Crafted to Treasure.",
  location: {
    city: "Palani",
    state: "Tamil Nadu",
    country: "India",
    addressDisplay: "Palani, Tamil Nadu, India",
    // Configurable store address placeholder
    storeAddress: null, // e.g. "Main Bazaar Road, Palani, Tamil Nadu - 624601"
  },
  announcement: "Timeless Elegance. Jewellery for Every Celebration.",
  
  // Contact Configuration:
  // Enter a valid 10-12 digit WhatsApp number with country code (e.g. "919876543210") when ready to enable direct WhatsApp enquiries.
  whatsappNumber: null, // Set to string when configured e.g. "919000000000"
  phoneDisplay: null, // Set to display number e.g. "+91 (0) 4545 XXXXXX"
  emailContact: null, // Set to email e.g. "enquiry@lalitajewellers.com"
  
  // Social Media Links (Placeholders - update with real profiles when active)
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    pinterest: "https://pinterest.com",
    youtube: "https://youtube.com",
  },

  // Trust Highlights as specified in prompt (no unsupported factual claims)
  trustHighlights: [
    {
      id: "timeless",
      title: "Timeless Designs",
      description: "Rooted in South Indian heritage and enduring aesthetic appeal.",
      icon: "Sparkles",
    },
    {
      id: "care",
      title: "Crafted with Care",
      description: "Meticulously finished jewellery celebrating fine artisanship.",
      icon: "Gem",
    },
    {
      id: "occasions",
      title: "Elegance for Every Occasion",
      description: "From intimate festive rituals to grand bridal celebrations.",
      icon: "Crown",
    },
    {
      id: "assistance",
      title: "Personalised Assistance",
      description: "Dedicated guidance to help you select pieces you will cherish.",
      icon: "HeartHandshake",
    },
  ],

  // Store Hours / Visiting note
  visitingHours: "Mon – Sat: 10:00 AM – 8:30 PM | Sun: 10:00 AM – 7:30 PM",

  // Demo disclaimer
  demoDisclaimer: "This website is an illustrative design showcase and frontend demo for Lalita Jewellers, Palani. Displayed jewellery prices are illustrative demo indicators.",
};

/**
 * Helper to build a WhatsApp URL or return null if unconfigured
 */
export function getWhatsAppUrl(productName = null) {
  if (!BRAND_CONFIG.whatsappNumber) {
    return null;
  }
  const cleanNumber = BRAND_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const base = `https://wa.me/${cleanNumber}`;
  const text = productName
    ? `Hello Lalita Jewellers, I would like to enquire about the "${productName}" from your collection.`
    : `Hello Lalita Jewellers, I would like to enquire about your jewellery collections in Palani.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}
