import {
  FileCheck,
  Building2,
  ShieldCheck,
  Share2,
  Globe,
  Search,
  Megaphone,
  BarChart2,
} from 'lucide-react';
import AnimationWrapper from './AnimationWrapper';

const services = [
  {
    icon: FileCheck,
    title: 'Startup India DPIIT Registration',
    description:
      'Complete assistance with Startup India DPIIT registration and certification application — from documentation to approval, we handle it all.',
  },
  {
    icon: Building2,
    title: 'MSME Udyam Aadhaar Registration',
    description:
      'Hassle-free MSME Udyam Aadhaar registration and certification services to help your business access government benefits and schemes.',
  },
  {
    icon: ShieldCheck,
    title: 'Trademark Registration',
    description:
      'Protect your brand with our end-to-end trademark registration and application services — search, filing, and follow-up included.',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description:
      'Strategic social media management for Instagram, Facebook, LinkedIn, and YouTube — content creation, scheduling, and community growth.',
  },
  {
    icon: Globe,
    title: 'Website Development',
    description:
      'Professional website development on WordPress, Shopify, and custom code — responsive, fast, and built to convert visitors into customers.',
  },
  {
    icon: Search,
    title: 'SEO Services',
    description:
      'Comprehensive on-page and off-page SEO strategies to boost your organic rankings, drive qualified traffic, and grow your online presence.',
  },
  {
    icon: Megaphone,
    title: 'Performance & Advertising',
    description:
      'High-ROI advertising campaigns across Meta Ads, Google Ads, LinkedIn Ads, and YouTube Ads — targeted, data-driven, and results-focused.',
  },
  {
    icon: BarChart2,
    title: 'Business Growth Consulting',
    description:
      'End-to-end growth consulting to help startups and SMEs scale — from market strategy and competitive analysis to execution and KPI tracking.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-green-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-green-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimationWrapper className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-300 bg-green-100 text-green-700 text-sm font-medium mb-5">
            What We Do
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Services Built for{' '}
            <span className="text-gradient-green">Real Growth</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            From business registrations to digital marketing and advertising — we offer
            comprehensive solutions tailored to help your business thrive.
          </p>
        </AnimationWrapper>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimationWrapper
                key={service.title}
                delay={index * 80}
                animation="fade-up"
              >
                <div className="group relative bg-white border border-green-100 rounded-2xl p-7 hover:border-green-300 card-glow transition-all duration-300 cursor-default h-full shadow-card hover:shadow-card-hover">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center mb-5 group-hover:bg-green-500 group-hover:border-green-500 transition-all duration-300">
                    <Icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-400/60 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </AnimationWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
