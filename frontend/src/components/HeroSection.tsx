import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-bg-green.dim_1920x1080.png')" }}
      />

      {/* Overlay layers */}
      <div className="absolute inset-0 bg-white/70" />
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-green-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-green-300/15 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Logo in hero */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <img
            src="/assets/generated/growtex-logo.dim_400x100.png"
            alt="GrowteX Ventures"
            className="h-14 sm:h-16 w-auto object-contain"
          />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-400/40 bg-green-50 text-green-700 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Business Registration &amp; Digital Growth Experts
        </div>

        {/* Tagline */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 animate-fade-in-up text-foreground">
          From Vision
          <br />
          <span className="text-gradient-green">to Victory.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl lg:text-2xl text-neutral-600 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '150ms' }}
        >
          GrowteX Ventures is your end-to-end partner for business registrations, digital marketing,
          website development, and performance advertising — helping you grow smarter and scale faster.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up"
          style={{ animationDelay: '300ms' }}
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 text-base rounded-xl green-glow-btn transition-all duration-300 group"
          >
            Book a Free Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={scrollToServices}
            variant="outline"
            size="lg"
            className="border-green-300 bg-white/80 hover:bg-green-50 text-green-700 font-semibold px-8 py-4 text-base rounded-xl backdrop-blur-sm transition-all duration-300"
          >
            Explore Services
          </Button>
        </div>

        {/* Stats Row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '450ms' }}
        >
          {[
            { value: '500+', label: 'Businesses Registered' },
            { value: '5+', label: 'Years Experience' },
            { value: '98%', label: 'Success Rate' },
            { value: '1000+', label: 'Happy Clients' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/80 backdrop-blur-sm border border-green-200/60 rounded-2xl p-5 shadow-card"
            >
              <div className="font-display text-3xl font-bold text-green-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <button
            onClick={scrollToServices}
            className="flex flex-col items-center gap-1 text-neutral-400 hover:text-green-500 transition-colors group"
            aria-label="Scroll down"
          >
            <span className="text-xs font-medium">Discover More</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
