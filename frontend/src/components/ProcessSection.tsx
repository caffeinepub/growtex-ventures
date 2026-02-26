import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react';
import AnimationWrapper from './AnimationWrapper';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description:
      'We start by deeply understanding your business, goals, and challenges through structured consultations and thorough analysis of your current position.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy',
    description:
      'Our team crafts a bespoke growth strategy with clear priorities, measurable milestones, and a roadmap tailored to your unique business context.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Execution',
    description:
      'We roll up our sleeves and execute alongside your team — from registrations and campaign launches to website builds — with precision and speed.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Growth',
    description:
      'We measure, optimize, and scale what works. Continuous iteration ensures compounding results and long-term sustainable growth for your business.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px section-divider" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-green-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimationWrapper className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-300 bg-green-100 text-green-700 text-sm font-medium mb-5">
            How It Works
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Our Proven{' '}
            <span className="text-gradient-green">4-Step Process</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            A structured, repeatable framework that delivers consistent results for every client,
            every time.
          </p>
        </AnimationWrapper>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-300/50 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimationWrapper
                  key={step.number}
                  delay={index * 120}
                  animation="fade-up"
                >
                  <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left group">
                    {/* Step number + icon */}
                    <div className="relative mb-6">
                      {/* Number badge */}
                      <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center z-10 shadow-green-sm">
                        {step.number}
                      </div>
                      {/* Icon circle */}
                      <div className="w-16 h-16 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center group-hover:border-green-400 group-hover:bg-green-100 transition-all duration-300">
                        <Icon className="w-7 h-7 text-green-600" strokeWidth={1.75} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-green-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Mobile connector */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden w-px h-8 bg-gradient-to-b from-green-300/50 to-transparent mt-6 mx-auto" />
                    )}
                  </div>
                </AnimationWrapper>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <AnimationWrapper className="text-center mt-16">
          <p className="text-neutral-500 mb-6">
            Ready to start your growth journey?
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-xl green-glow-btn transition-all duration-300"
          >
            Start Your Journey
          </button>
        </AnimationWrapper>
      </div>
    </section>
  );
}
