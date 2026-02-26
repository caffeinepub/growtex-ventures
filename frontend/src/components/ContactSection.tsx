import { useState } from 'react';
import AnimationWrapper from './AnimationWrapper';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7999866007',
    href: 'tel:+917999866007',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@growteX.com',
    href: 'mailto:info@growteX.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India (Serving Globally)',
    href: null,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Sat, 9AM–7PM IST',
    href: null,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-primary text-xs font-semibold tracking-wider uppercase">Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 sm:mb-4">
            Ready to{' '}
            <span className="text-primary">Grow?</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
            Book a free strategy call and let's discuss how we can accelerate your business growth.
          </p>
        </AnimationWrapper>

        <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-16">
          {/* Info Panel */}
          <AnimationWrapper className="w-full md:w-2/5 lg:w-1/3">
            <div className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 h-full">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-5 sm:mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 min-w-[40px] bg-primary/10 rounded-xl flex items-center justify-center">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-foreground/50 mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm sm:text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm sm:text-base font-medium text-foreground">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/30">
                <p className="text-sm text-foreground/60 leading-relaxed">
                  We typically respond within 2 hours during business hours. Book a free 30-minute strategy call to get started.
                </p>
              </div>
            </div>
          </AnimationWrapper>

          {/* Form */}
          <AnimationWrapper delay={200} className="w-full md:w-3/5 lg:w-2/3">
            <div className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-8 sm:py-12 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl sm:text-3xl">✓</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-sm sm:text-base text-foreground/60">
                    Thank you for reaching out. We'll get back to you within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full bg-background border border-border/60 rounded-xl px-4 py-3 min-h-[44px] text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full bg-background border border-border/60 rounded-xl px-4 py-3 min-h-[44px] text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your company"
                      className="w-full bg-background border border-border/60 rounded-xl px-4 py-3 min-h-[44px] text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your business and goals..."
                      className="w-full bg-background border border-border/60 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3 min-h-[48px] rounded-full text-base font-bold hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
