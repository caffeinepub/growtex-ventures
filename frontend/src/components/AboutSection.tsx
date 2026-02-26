import { useRef, useState } from 'react';
import AnimationWrapper from './AnimationWrapper';
import { useParallax } from '@/hooks/useParallax';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { value: 200, suffix: '+', label: 'Clients Served' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: 'M+', label: 'Revenue Generated' },
];

const values = [
  'Data-driven decision making',
  'Transparent reporting & communication',
  'Results-oriented approach',
  'Long-term partnership mindset',
];

function StatCounter({ stat, start }: { stat: typeof stats[0]; start: boolean }) {
  const count = useCountUp(stat.value, 2000, start);
  return (
    <div className="text-center p-3 sm:p-4">
      <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary">
        {count}{stat.suffix}
      </div>
      <div className="text-xs sm:text-sm text-foreground/60 mt-1">{stat.label}</div>
    </div>
  );
}

export default function AboutSection() {
  const illustrationRef = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);

  // Parallax only on desktop
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const rawParallax = useParallax(0.3);
  const parallaxY = isMobile ? 0 : rawParallax;

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-primary text-xs font-semibold tracking-wider uppercase">About Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 sm:mb-4">
            Your Growth{' '}
            <span className="text-primary">Partner</span>
          </h2>
        </AnimationWrapper>

        {/* Split Layout */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          {/* Text Content */}
          <AnimationWrapper className="flex-1 w-full">
            <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed mb-6">
              GrowteX Ventures is a full-service digital growth agency dedicated to helping ambitious businesses achieve extraordinary results. We combine strategic thinking with tactical execution to deliver measurable growth across all digital channels.
            </p>
            <p className="text-sm sm:text-base text-foreground/60 leading-relaxed mb-6 sm:mb-8">
              Founded with the belief that every business deserves access to world-class digital marketing expertise, we've helped over 200 companies transform their online presence and accelerate revenue growth.
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {values.map((value) => (
                <li key={value} className="flex items-center gap-3 text-sm sm:text-base text-foreground/80">
                  <span className="w-5 h-5 flex-shrink-0 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                  </span>
                  {value}
                </li>
              ))}
            </ul>
          </AnimationWrapper>

          {/* Illustration */}
          <AnimationWrapper delay={200} className="flex-1 w-full">
            <div
              ref={illustrationRef}
              className="relative rounded-2xl overflow-hidden"
              style={{ transform: `translateY(${parallaxY}px)`, willChange: 'transform' }}
            >
              <img
                src="/assets/generated/about-illustration-green.dim_800x600.png"
                alt="About GrowteX Ventures"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-2xl" />
            </div>
          </AnimationWrapper>
        </div>

        {/* Stats Grid */}
        <AnimationWrapper onIntersect={() => setStatsStarted(true)}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 bg-card border border-border/50 rounded-2xl p-4 sm:p-6">
            {stats.map((stat) => (
              <StatCounter key={stat.label} stat={stat} start={statsStarted} />
            ))}
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
