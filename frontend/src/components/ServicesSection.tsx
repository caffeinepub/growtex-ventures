import { useRef } from 'react';
import AnimationWrapper from './AnimationWrapper';
import { useScrollDepth } from '@/hooks/useScrollDepth';

const services = [
  {
    icon: '📈',
    title: 'Performance Marketing',
    description: 'Data-driven paid campaigns across Google, Meta, and programmatic channels that maximize ROI and scale your customer acquisition.',
  },
  {
    icon: '🔍',
    title: 'SEO & Content Strategy',
    description: 'Dominate search rankings with technical SEO, strategic content creation, and authority-building link acquisition.',
  },
  {
    icon: '🎨',
    title: 'Brand Identity & Design',
    description: 'Craft a compelling visual identity that resonates with your audience and differentiates you from the competition.',
  },
  {
    icon: '💻',
    title: 'Web Development',
    description: 'High-performance websites and web applications built for conversion, speed, and seamless user experience.',
  },
  {
    icon: '📱',
    title: 'Social Media Marketing',
    description: 'Build engaged communities and drive brand awareness through strategic social media management and content creation.',
  },
  {
    icon: '✉️',
    title: 'Email Marketing',
    description: 'Automated email sequences and campaigns that nurture leads, retain customers, and drive repeat revenue.',
  },
  {
    icon: '📊',
    title: 'Analytics & Insights',
    description: 'Turn data into decisions with comprehensive analytics dashboards, attribution modeling, and actionable growth insights.',
  },
  {
    icon: '🚀',
    title: 'Growth Consulting',
    description: 'Strategic advisory and hands-on execution to identify growth levers, optimize funnels, and accelerate your business trajectory.',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const depth = useScrollDepth(cardRef);

  // Only apply scroll-depth transform on larger screens
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const translateY = isMobile ? 0 : (depth - 0.5) * -8;
  const scale = isMobile ? 1 : 1 + (depth - 0.5) * 0.02;

  return (
    <AnimationWrapper delay={index * 80} className="h-full">
      <div
        ref={cardRef}
        className="h-full bg-card border border-border/50 rounded-2xl p-5 sm:p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
          willChange: 'transform',
        }}
      >
        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
        <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">{service.title}</h3>
        <p className="text-sm text-foreground/60 leading-relaxed">{service.description}</p>
      </div>
    </AnimationWrapper>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-primary text-xs font-semibold tracking-wider uppercase">What We Do</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 sm:mb-4">
            Services That Drive{' '}
            <span className="text-primary">Real Growth</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
            From strategy to execution, we offer a full suite of digital growth services tailored to your business goals.
          </p>
        </AnimationWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
