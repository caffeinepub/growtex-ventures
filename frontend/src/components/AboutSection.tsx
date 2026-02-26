import { CheckCircle2 } from 'lucide-react';
import AnimationWrapper from './AnimationWrapper';

const stats = [
  { value: '500+', label: 'Businesses Registered', sublabel: 'across India' },
  { value: '5+', label: 'Years of Experience', sublabel: 'in consulting & marketing' },
  { value: '98%', label: 'Client Success Rate', sublabel: 'measured by growth KPIs' },
];

const values = [
  'Results-first approach — we measure success by your growth',
  'Transparent communication and honest strategic advice',
  'Tailored solutions, never one-size-fits-all playbooks',
  'Long-term partnerships built on trust and accountability',
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-green-100/50 blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <AnimationWrapper animation="slide-left" className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-green-100 shadow-card">
                <img
                  src="/assets/generated/about-illustration-green.dim_800x600.png"
                  alt="GrowteX Ventures - Business Growth Illustration"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-white border border-green-200 rounded-2xl p-5 shadow-green-sm">
                <div className="font-display text-3xl font-bold text-green-600">1000+</div>
                <div className="text-sm text-neutral-500 mt-1">Happy Clients</div>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl border border-green-200 bg-green-50 backdrop-blur-sm" />
            </div>
          </AnimationWrapper>

          {/* Text Side */}
          <AnimationWrapper animation="slide-right" className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-300 bg-green-100 text-green-700 text-sm font-medium mb-6">
              About GrowteX Ventures
            </div>

            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Strategic Partner for{' '}
              <span className="text-gradient-green">Lasting Growth</span>
            </h2>

            <p className="text-neutral-500 text-lg leading-relaxed mb-6">
              GrowteX Ventures was founded on a simple belief: every ambitious business deserves
              world-class strategic guidance. We combine deep expertise in business registrations,
              digital marketing, and performance advertising to help companies break through plateaus
              and reach their next level.
            </p>

            <p className="text-neutral-500 leading-relaxed mb-8">
              Whether you're a startup seeking DPIIT recognition, an MSME looking for Udyam
              registration, or an established company wanting to dominate digital channels —
              our team brings the clarity, creativity, and execution power you need to win.
            </p>

            {/* Values list */}
            <ul className="space-y-3 mb-10">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-500 text-sm">{value}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-green-50 border border-green-100 rounded-xl p-4 text-center hover:border-green-300 transition-colors duration-300"
                >
                  <div className="font-display text-2xl font-bold text-green-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-foreground mb-0.5">{stat.label}</div>
                  <div className="text-xs text-neutral-400">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
