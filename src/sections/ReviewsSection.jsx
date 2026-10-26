import React, { useState } from 'react';
import { Star, ShieldCheck, Heart, Sparkles, MessageSquare, CheckCircle, UserCheck } from 'lucide-react';

export default function ReviewsSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const [newReviewSubmitted, setNewReviewSubmitted] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    city: 'Palani',
    item: '',
    rating: 5,
    text: ''
  });

  const reviews = [
    {
      id: 1,
      name: "S. Meenakshi Sundaram",
      city: "Palani",
      category: "bridal",
      item: "Thanjavur Royal Peacock Haram & Kasu Suite",
      rating: 5,
      date: "September 2026",
      verified: true,
      text: "For my daughter's wedding in Palani, we wanted authentic temple craftsmanship that honors our ancestral roots. The Thanjavur peacock haram exceeded all expectations. The weight, the deep ruby kemp setting, and the traditional polish looked magnificent on her silk muhurtham saree."
    },
    {
      id: 2,
      name: "Priyadarshini K.",
      city: "Dindigul",
      category: "necklaces",
      item: "Lakshmi Heritage Kasu Mala",
      rating: 5,
      date: "October 2026",
      verified: true,
      text: "The coin detailing on the Lakshmi Kasu Mala is pristine. Every single coin has clear, reverent Lakshmi iconography. The team in Palani provided exact 916 hallmark verification and adjusted the length custom to my requirements. Highly recommend Lalita Jewellers!"
    },
    {
      id: 3,
      name: "Dr. Soundarya V.",
      city: "Coimbatore",
      category: "bridal",
      item: "Artisan Bridal Treasury Set & Kadas",
      rating: 5,
      date: "August 2026",
      verified: true,
      text: "We traveled from Coimbatore to Palani specifically for their bridal gold collection. The transparency in demo pricing, weight estimation, and hallmark certifications gave our whole family immense confidence. Truly exceptional goldsmithing artistry."
    },
    {
      id: 4,
      name: "Revathi Annamalai",
      city: "Madurai",
      category: "bangles",
      item: "Classic Twisted Gold Valayal Pair",
      rating: 5,
      date: "September 2026",
      verified: true,
      text: "I bought a pair of twisted gold valayal for my sister's seemantham. The weight feels substantial yet the finish is wonderfully smooth with no rough edges. The gleam is 100% pure 22K yellow gold. Five stars without hesitation."
    },
    {
      id: 5,
      name: "Kavitha Ramesh",
      city: "Tiruppur",
      category: "earrings",
      item: "Floral Diamond Gold Studs",
      rating: 5,
      date: "October 2026",
      verified: true,
      text: "The sparkle of the diamonds on the floral gold studs is breathtaking! It's so versatile—I wear it for temple poojas as well as family get-togethers. The staff took the time to show multiple setting options with genuine warmth."
    },
    {
      id: 6,
      name: "Ananya Karthik",
      city: "Pollachi",
      category: "temple",
      item: "Ruby Temple Choker Suite",
      rating: 5,
      date: "July 2026",
      verified: true,
      text: "The nakshi temple choker is a work of art. The red kemp stones gleam beautifully under wedding lights. Everyone at our family reception inquired where we purchased this piece. Thank you Lalita Jewellers!"
    }
  ];

  const filteredReviews = activeTab === 'all'
    ? reviews
    : reviews.filter(r => r.category === activeTab);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.text) return;
    setNewReviewSubmitted(true);
    setTimeout(() => {
      setNewReviewSubmitted(false);
      setIsWriteReviewOpen(false);
      setReviewForm({ name: '', city: 'Palani', item: '', rating: 5, text: '' });
    }, 2500);
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-gradient-to-b from-ivory via-ivory-100 to-ivory border-b border-charcoal-border/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-gold-50 border border-gold-200 text-gold-dark text-[10px] uppercase tracking-[0.25em] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Trusted Family Heritage</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-medium">
            Treasured by Families Across Tamil Nadu
          </h2>
          <div className="w-20 h-[2px] bg-gold-gradient mx-auto mt-2" />
          
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light pt-2">
            Read authentic experiences from brides and families in Palani, Dindigul, Madurai, and Coimbatore who celebrated life&apos;s grandest milestones with Lalita Jewellers.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 bg-white px-4 sm:px-5 py-2 sm:py-2.5 border border-gold/40 shadow-xs mt-2 sm:mt-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-gold text-gold" />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-sm sm:text-lg font-bold text-charcoal">4.9 / 5.0</span>
              <span className="text-[10px] sm:text-[11px] text-charcoal-muted border-l border-charcoal-border/40 pl-2 sm:pl-3">
                Over 450+ Verified Client Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Category Tabs - Swipable on mobile */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0 sm:flex-wrap sm:justify-center mb-6 sm:mb-10 px-1">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'bridal', label: 'Bridal Harams' },
            { id: 'necklaces', label: 'Kasu Malas' },
            { id: 'bangles', label: 'Traditional Valayal' },
            { id: 'earrings', label: 'Earrings & Studs' },
            { id: 'temple', label: 'Temple Suites' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs uppercase tracking-wider transition-all font-medium rounded-sm shrink-0 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-maroon text-ivory shadow-xs'
                  : 'bg-white hover:bg-gold-50 text-charcoal border border-charcoal-border/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-charcoal-border/50 hover:border-gold transition-all duration-300 p-4 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-md relative group rounded-sm"
            >
              {/* Gold Top Accent Line on Hover */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>

                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 font-medium">
                      <UserCheck className="w-3 h-3 text-emerald-700" />
                      Verified Client
                    </span>
                  )}
                </div>

                {/* Purchased Ornament Tag */}
                <div className="mb-3">
                  <span className="text-[10px] uppercase tracking-wider text-gold-dark font-semibold block">
                    Adornment Chosen:
                  </span>
                  <span className="font-serif text-sm font-semibold text-charcoal block line-clamp-1">
                    {rev.item}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs text-charcoal-muted leading-relaxed font-light italic mb-4">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author & City Footer */}
              <div className="pt-4 border-t border-charcoal-border/30 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-serif font-semibold text-charcoal">
                    {rev.name}
                  </h4>
                  <span className="text-[10px] text-charcoal-muted">
                    {rev.city}, Tamil Nadu
                  </span>
                </div>
                <span className="text-[10px] text-charcoal-muted/70">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Share Experience */}
        <div className="mt-12 text-center bg-white p-6 border border-gold/30 max-w-xl mx-auto shadow-sm">
          <h4 className="font-serif text-xl text-charcoal font-medium">
            Have You Visited Our Palani Boutique?
          </h4>
          <p className="text-xs text-charcoal-muted mt-1">
            We value your patronage and would be honored to hear about your experience.
          </p>
          <button
            onClick={() => setIsWriteReviewOpen(true)}
            className="mt-4 px-6 py-2.5 bg-maroon text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-maroon-light transition-all shadow-sm"
          >
            Share Your Experience
          </button>
        </div>

        {/* Demo Write Review Modal */}
        {isWriteReviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm animate-fade-in">
            <div className="bg-ivory max-w-md w-full border border-gold/40 shadow-2xl p-6 relative">
              <h3 className="font-serif text-2xl text-charcoal font-medium">
                Share Your Lalita Experience
              </h3>
              <p className="text-xs text-charcoal-muted mt-0.5">
                Palani, Tamil Nadu Store Feedback
              </p>

              {newReviewSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-700 mx-auto" />
                  <h4 className="font-serif text-xl text-charcoal">Thank You!</h4>
                  <p className="text-xs text-charcoal-muted">
                    Your review has been recorded in this demo showcase.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-3.5 mt-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-charcoal-muted mb-1 font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. S. Meenakshi"
                      value={reviewForm.name}
                      onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-charcoal-border focus:border-gold focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-charcoal-muted mb-1 font-semibold">
                        City / Town
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Palani / Dindigul"
                        value={reviewForm.city}
                        onChange={(e) => setReviewForm({ ...reviewForm, city: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white border border-charcoal-border focus:border-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-charcoal-muted mb-1 font-semibold">
                        Jewellery Item
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Bridal Haram"
                        value={reviewForm.item}
                        onChange={(e) => setReviewForm({ ...reviewForm, item: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white border border-charcoal-border focus:border-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-charcoal-muted mb-1 font-semibold">
                      Your Experience
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Share your thoughts on design, gold finish, and staff assistance..."
                      value={reviewForm.text}
                      onChange={(e) => setReviewForm({ ...reviewForm, text: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-charcoal-border focus:border-gold focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsWriteReviewOpen(false)}
                      className="px-4 py-2 text-xs text-charcoal-muted hover:text-charcoal"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-maroon text-ivory text-xs uppercase tracking-wider font-semibold hover:bg-maroon-light transition-all"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
