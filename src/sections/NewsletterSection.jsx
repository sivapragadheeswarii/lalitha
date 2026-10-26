import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (val) => {
    return String(val)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please provide an email address.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address (e.g., name@domain.com).');
      return;
    }

    setError('');
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setEmail('');
    setError('');
  };

  return (
    <section className="py-20 bg-ivory border-b border-charcoal-border/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-50 border border-gold-200 text-gold-dark text-[10px] uppercase tracking-[0.25em] font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Lalita Journal</span>
        </div>

        <div className="space-y-2">
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium">
            Be the First to Discover New Creations
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-lg mx-auto font-light leading-relaxed">
            Receive private notifications of new seasonal bridal sets, temple collection launches, and festive showcase dates in Palani.
          </p>
        </div>

        {isSuccess ? (
          <div className="p-6 bg-ivory-100 border border-gold/40 max-w-md mx-auto space-y-3 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-gold-50 border border-gold flex items-center justify-center mx-auto text-maroon">
              <CheckCircle2 className="w-6 h-6 text-gold-dark" />
            </div>
            <h4 className="font-serif text-xl text-charcoal font-medium">
              Demo Subscription Confirmed
            </h4>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              <span className="font-semibold text-charcoal">{email}</span> has been entered in this demo preview.
            </p>
            <p className="text-[11px] text-charcoal-muted/80 bg-white p-2 border border-charcoal-border/30">
              Note: This is a frontend demo interface. No real emails are collected or transmitted.
            </p>
            <button
              onClick={handleReset}
              className="text-xs font-semibold text-maroon hover:underline pt-2 block mx-auto"
            >
              Enter another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3" noValidate>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-charcoal-border focus:border-gold focus:outline-none text-xs text-charcoal placeholder:text-charcoal-muted/60 transition-colors"
                  aria-label="Email address for jewellery newsletter"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-maroon text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-maroon-light transition-all shadow-sm shrink-0"
              >
                Subscribe
              </button>
            </div>

            {error && (
              <div className="flex items-center justify-center gap-1.5 text-xs text-maroon font-medium pt-1">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <p className="text-[10px] text-charcoal-muted/70 tracking-wide">
              We respect your privacy • Only auspicious festival & bridal updates
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
