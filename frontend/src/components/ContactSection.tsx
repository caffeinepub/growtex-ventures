import { useState } from 'react';
import { Send, CheckCircle2, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import AnimationWrapper from './AnimationWrapper';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-green-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px section-divider" />
      <div className="absolute inset-0 hero-glow opacity-30" />
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-green-200/30 blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimationWrapper className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-300 bg-green-100 text-green-700 text-sm font-medium mb-5">
            Get In Touch
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Ready to{' '}
            <span className="text-gradient-green">Grow?</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Let's talk about your business goals. Book a free strategy call and discover
            how GrowteX Ventures can accelerate your growth.
          </p>
        </AnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <AnimationWrapper animation="slide-left" className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Let's Start a Conversation
                </h3>
                <p className="text-neutral-500 leading-relaxed">
                  Whether you're looking to register your startup, build your digital presence,
                  or run high-performance ad campaigns — we're here to help. Reach out and let's
                  explore what's possible together.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 mb-0.5">Call / WhatsApp</div>
                    <a
                      href="tel:7999866007"
                      className="text-sm font-medium text-foreground hover:text-green-600 transition-colors"
                    >
                      +91 7999866007
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 mb-0.5">Email Us</div>
                    <a
                      href="mailto:info@growteX.com"
                      className="text-sm font-medium text-foreground hover:text-green-600 transition-colors"
                    >
                      info@growteX.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Availability badge */}
              <div className="bg-white border border-green-200 rounded-2xl p-5 shadow-card">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-600 text-sm font-semibold">Currently Accepting Clients</span>
                </div>
                <p className="text-neutral-500 text-sm">
                  We typically respond within 24 hours. Free strategy calls are available
                  Monday–Saturday, 9am–7pm IST.
                </p>
              </div>
            </div>
          </AnimationWrapper>

          {/* Contact Form */}
          <AnimationWrapper animation="slide-right" className="lg:col-span-3">
            <div className="bg-white border border-green-100 rounded-3xl p-8 lg:p-10 shadow-card">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 border border-green-300 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-neutral-500 mb-6">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    variant="outline"
                    className="border-green-200 hover:bg-green-50 text-green-700"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name <span className="text-green-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="bg-green-50/50 border-green-200 focus:border-green-400 focus:ring-green-400/20 placeholder:text-neutral-400 rounded-xl h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address <span className="text-green-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className="bg-green-50/50 border-green-200 focus:border-green-400 focus:ring-green-400/20 placeholder:text-neutral-400 rounded-xl h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company / Business Name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Business Name"
                      className="bg-green-50/50 border-green-200 focus:border-green-400 focus:ring-green-400/20 placeholder:text-neutral-400 rounded-xl h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message <span className="text-green-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business goals and how we can help..."
                      required
                      rows={5}
                      className="bg-green-50/50 border-green-200 focus:border-green-400 focus:ring-green-400/20 placeholder:text-neutral-400 rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl green-glow-btn transition-all duration-300 text-base"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
