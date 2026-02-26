import { Quote } from 'lucide-react';
import AnimationWrapper from './AnimationWrapper';

const testimonials = [
  {
    quote:
      "GrowteX Ventures handled our DPIIT registration seamlessly. Within weeks we had our Startup India certificate and could access government benefits. Their team is incredibly knowledgeable.",
    name: 'Rahul Sharma',
    title: 'Founder',
    company: 'TechNova Solutions',
    initials: 'RS',
    color: 'bg-green-100 text-green-700',
  },
  {
    quote:
      "The social media management team at GrowteX transformed our Instagram and LinkedIn presence. Our follower count tripled and leads from social media increased by 200% in 4 months.",
    name: 'Priya Mehta',
    title: 'CEO',
    company: 'StyleCraft India',
    initials: 'PM',
    color: 'bg-green-500 text-white',
  },
  {
    quote:
      "Our Shopify store built by GrowteX is stunning and converts brilliantly. Their SEO work pushed us to page 1 for our key terms within 3 months. Exceptional results!",
    name: 'Amit Patel',
    title: 'Director',
    company: 'HomeDecor Hub',
    initials: 'AP',
    color: 'bg-green-100 text-green-700',
  },
  {
    quote:
      "GrowteX's Google Ads and Meta Ads campaigns delivered a consistent 6x ROAS for our e-commerce brand. They truly understand performance marketing and ROI optimization.",
    name: 'Sneha Joshi',
    title: 'Head of Marketing',
    company: 'FreshCart Online',
    initials: 'SJ',
    color: 'bg-green-500 text-white',
  },
  {
    quote:
      "Getting our trademark registered was stress-free with GrowteX. They guided us through every step of the application process and kept us updated throughout. Highly recommended!",
    name: 'Vikram Singh',
    title: 'Managing Partner',
    company: 'LegalEdge Consultants',
    initials: 'VS',
    color: 'bg-green-100 text-green-700',
  },
  {
    quote:
      "Our MSME Udyam registration was completed in record time by GrowteX. Now we access priority lending and government tenders. Their expertise in compliance is unmatched.",
    name: 'Deepa Nair',
    title: 'Proprietor',
    company: 'Nair Enterprises',
    initials: 'DN',
    color: 'bg-green-500 text-white',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-green-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px section-divider" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-green-200/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimationWrapper className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-300 bg-green-100 text-green-700 text-sm font-medium mb-5">
            Client Stories
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Trusted by{' '}
            <span className="text-gradient-green">Growth Leaders</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            Don't take our word for it. Here's what our clients say about working with GrowteX Ventures.
          </p>
        </AnimationWrapper>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimationWrapper
              key={testimonial.name}
              delay={index * 80}
              animation="fade-up"
            >
              <div className="group bg-white border border-green-100 rounded-2xl p-7 hover:border-green-300 card-glow transition-all duration-300 h-full flex flex-col shadow-card">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-green-300 mb-4 flex-shrink-0" />

                {/* Quote text */}
                <p className="text-neutral-500 text-sm leading-relaxed flex-1 mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-green-100">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${testimonial.color}`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-neutral-400">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>

        {/* Trust indicators */}
        <AnimationWrapper className="mt-16 text-center">
          <p className="text-neutral-400 text-sm mb-6">Trusted by businesses across India</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {['TechNova', 'StyleCraft', 'HomeDecor Hub', 'FreshCart', 'LegalEdge', 'Nair Enterprises'].map(
              (company) => (
                <span key={company} className="font-display font-bold text-lg text-neutral-600 tracking-wide">
                  {company}
                </span>
              )
            )}
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
