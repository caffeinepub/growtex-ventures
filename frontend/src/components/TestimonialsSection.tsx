import AnimationWrapper from './AnimationWrapper';

const testimonials = [
  {
    quote: "GrowteX transformed our digital presence completely. Our revenue grew 3x within 8 months of working with them.",
    author: "Priya Sharma",
    company: "TechStart India",
    role: "CEO & Founder",
  },
  {
    quote: "The team's data-driven approach and transparent communication made all the difference. Best investment we've made.",
    author: "Rahul Mehta",
    company: "RetailPro",
    role: "Marketing Director",
  },
  {
    quote: "From SEO to paid ads, GrowteX handles everything with expertise. Our organic traffic increased by 400% in 6 months.",
    author: "Anita Patel",
    company: "HealthFirst",
    role: "Co-Founder",
  },
  {
    quote: "Professional, results-oriented, and genuinely invested in our success. GrowteX is a true growth partner.",
    author: "Vikram Singh",
    company: "EduTech Solutions",
    role: "Managing Director",
  },
  {
    quote: "Their social media strategy helped us build a community of 50K+ engaged followers in just 4 months.",
    author: "Neha Gupta",
    company: "FashionForward",
    role: "Brand Manager",
  },
  {
    quote: "The ROI on our Google Ads campaigns improved by 280% after GrowteX took over. Exceptional performance.",
    author: "Arjun Kapoor",
    company: "FinanceFirst",
    role: "Growth Lead",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-primary text-xs font-semibold tracking-wider uppercase">Client Stories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 sm:mb-4">
            What Our{' '}
            <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
            Don't just take our word for it — hear from the businesses we've helped grow.
          </p>
        </AnimationWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimationWrapper key={testimonial.author} delay={index * 100}>
              <div className="h-full bg-card border border-border/50 rounded-2xl p-5 sm:p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-sm">★</span>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-4 sm:mb-6 flex-1">
                  "{testimonial.quote}"
                </p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-xs text-foreground/50">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
