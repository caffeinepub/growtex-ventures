import AnimationWrapper from './AnimationWrapper';

const steps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description: 'We deep-dive into your business, market, and current digital presence to identify opportunities and gaps.',
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    description: 'We craft a tailored growth strategy with clear KPIs, timelines, and resource allocation for maximum impact.',
  },
  {
    number: '03',
    title: 'Execute & Optimize',
    description: 'Our team executes with precision, continuously testing and optimizing every campaign and touchpoint.',
  },
  {
    number: '04',
    title: 'Scale & Grow',
    description: 'We double down on what works, scaling winning strategies to accelerate your growth trajectory.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-primary text-xs font-semibold tracking-wider uppercase">How We Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 sm:mb-4">
            Our Proven{' '}
            <span className="text-primary">Process</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
            A systematic approach to growth that delivers consistent, measurable results for every client.
          </p>
        </AnimationWrapper>

        {/* Steps: vertical on mobile/tablet, horizontal on desktop */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="flex lg:flex-col flex-1 relative">
              {/* Connector line - horizontal on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-primary/40 to-primary/10 z-0" />
              )}
              {/* Connector line - vertical on mobile */}
              {index < steps.length - 1 && (
                <div className="lg:hidden absolute left-8 top-16 w-px h-full bg-gradient-to-b from-primary/40 to-primary/10 z-0" />
              )}

              <AnimationWrapper delay={index * 150} className="flex-1">
                <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0 relative z-10 p-4 sm:p-5 lg:p-6 lg:text-center">
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 border-2 border-primary/40 rounded-full flex items-center justify-center lg:mb-4">
                    <span className="text-primary font-extrabold text-base sm:text-lg">{step.number}</span>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2">{step.title}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
