import { useRef } from 'react';
import { useParallax } from '@/hooks/useParallax';
import AnimationWrapper from './AnimationWrapper';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxY = useParallax(0.45);

  const handleScrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        <img
          src="/assets/generated/hero-bg-green.dim_1920x1080.png"
          alt=""
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/90" />
      </div>

      {/* Green accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-12">
        <AnimationWrapper>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6 md:mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Digital Growth Agency
            </span>
          </div>
        </AnimationWrapper>

        <AnimationWrapper delay={100}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-foreground mb-4 md:mb-6">
            From{' '}
            <span className="text-primary">Vision</span>
            {' '}to{' '}
            <span className="text-primary">Victory</span>
          </h1>
        </AnimationWrapper>

        <AnimationWrapper delay={200}>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
            We help ambitious businesses scale with data-driven digital marketing, cutting-edge web solutions, and strategic growth frameworks that deliver measurable results.
          </p>
        </AnimationWrapper>

        <AnimationWrapper delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 md:mb-16">
            <button
              onClick={handleScrollToContact}
              className="w-full sm:w-auto bg-primary text-primary-foreground px-7 py-3.5 min-h-[48px] rounded-full text-base font-bold hover:bg-primary/90 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Start Growing Today
            </button>
            <button
              onClick={handleScrollToServices}
              className="w-full sm:w-auto border border-foreground/30 text-foreground px-7 py-3.5 min-h-[48px] rounded-full text-base font-semibold hover:border-primary hover:text-primary transition-all duration-200"
            >
              Explore Services
            </button>
          </div>
        </AnimationWrapper>

        {/* Stats Row */}
        <AnimationWrapper delay={400}>
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
            {[
              { value: '200+', label: 'Clients Served' },
              { value: '3x', label: 'Avg. Revenue Growth' },
              { value: '5+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-primary">{stat.value}</div>
                <div className="text-xs sm:text-sm text-foreground/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimationWrapper>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span className="text-xs text-foreground/50 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-foreground/40 to-transparent" />
      </div>
    </section>
  );
}
