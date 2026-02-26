import { useState } from 'react';
import { Play, Film, TrendingUp, Users, MapPin } from 'lucide-react';
import AnimationWrapper from './AnimationWrapper';

const chapters = [
  {
    number: '01',
    title: 'The Beginning',
    description:
      'A common person with a dream — a small shop, a big vision. Every great business starts with a single courageous step. This is where the GrowteX story begins.',
    thumbnail: '/assets/generated/growtex-chapter1.dim_640x360.jpg',
    tag: 'Origin Story',
  },
  {
    number: '02',
    title: 'Going Digital',
    description:
      'The leap from offline to online. Building a digital storefront, making the first sale on the internet, and discovering the power of e-commerce for Indian entrepreneurs.',
    thumbnail: '/assets/generated/growtex-chapter2.dim_640x360.jpg',
    tag: 'Digital Shift',
  },
  {
    number: '03',
    title: 'Growing the Brand',
    description:
      'Social media, targeted ads, and a loyal customer base. The brand finds its voice and reaches thousands of new customers across India through smart digital marketing.',
    thumbnail: '/assets/generated/growtex-chapter3.dim_640x360.jpg',
    tag: 'Brand Building',
  },
  {
    number: '04',
    title: 'Scaling Up',
    description:
      'From one city to five. Revenue multiplied, operations expanded, and digital dominance achieved. This is what happens when strategy meets execution.',
    thumbnail: '/assets/generated/growtex-chapter4.dim_640x360.jpg',
    tag: 'Expansion',
  },
];

const stats = [
  { icon: TrendingUp, value: '3x', label: 'Revenue Growth', sublabel: 'average across clients' },
  { icon: Users, value: '10K+', label: 'Online Customers', sublabel: 'reached through digital' },
  { icon: MapPin, value: '5', label: 'Cities Reached', sublabel: 'and growing fast' },
];

function ChapterCard({ chapter, index }: { chapter: typeof chapters[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 w-full sm:w-72 lg:w-auto lg:flex-1 group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card */}
      <div
        className="relative rounded-2xl overflow-hidden border transition-all duration-500"
        style={{
          borderColor: hovered
            ? 'oklch(0.55 0.18 145 / 0.7)'
            : 'oklch(0.55 0.18 145 / 0.2)',
          boxShadow: hovered
            ? '0 0 40px oklch(0.55 0.18 145 / 0.25), 0 20px 60px oklch(0 0 0 / 0.5)'
            : '0 4px 24px oklch(0 0 0 / 0.3)',
          background: 'oklch(0.12 0.015 145)',
        }}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={chapter.thumbnail}
            alt={`Chapter ${chapter.number}: ${chapter.title}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/30 to-transparent" />

          {/* Chapter number badge */}
          <div
            className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold tracking-widest uppercase"
            style={{
              background: 'oklch(0.55 0.18 145 / 0.15)',
              border: '1px solid oklch(0.55 0.18 145 / 0.5)',
              color: 'oklch(0.68 0.17 145)',
              backdropFilter: 'blur(8px)',
            }}
          >
            Chapter {chapter.number}
          </div>

          {/* Tag badge */}
          <div
            className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-xs font-medium"
            style={{
              background: 'oklch(0.10 0.01 145 / 0.7)',
              border: '1px solid oklch(0.30 0.05 145 / 0.5)',
              color: 'oklch(0.75 0.08 145)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {chapter.tag}
          </div>

          {/* Play button overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-all duration-300"
            style={{ opacity: hovered ? 1 : 0.7 }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: hovered
                  ? 'oklch(0.55 0.18 145)'
                  : 'oklch(0.55 0.18 145 / 0.8)',
                boxShadow: hovered
                  ? '0 0 30px oklch(0.55 0.18 145 / 0.6)'
                  : '0 0 15px oklch(0.55 0.18 145 / 0.3)',
                transform: hovered ? 'scale(1.1)' : 'scale(1)',
              }}
            >
              <Play className="w-5 h-5 fill-white text-white ml-0.5" />
            </div>
          </div>
        </div>

        {/* Card body */}
        <div className="p-5">
          <h3
            className="font-display text-base font-bold mb-2 transition-colors duration-300"
            style={{ color: hovered ? 'oklch(0.68 0.17 145)' : 'oklch(0.92 0.01 145)' }}
          >
            {chapter.title}
          </h3>
          <p className="text-xs leading-relaxed" style={{ color: 'oklch(0.60 0.015 145)' }}>
            {chapter.description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div
          className="h-0.5 transition-all duration-500"
          style={{
            background: hovered
              ? 'linear-gradient(90deg, oklch(0.55 0.18 145), oklch(0.68 0.20 155))'
              : 'oklch(0.55 0.18 145 / 0.15)',
          }}
        />
      </div>
    </div>
  );
}

export default function VideoPortfolioSection() {
  const [heroHovered, setHeroHovered] = useState(false);

  return (
    <section
      id="journey"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'oklch(0.09 0.012 145)' }}
    >
      {/* Background ambient glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.55 0.18 145 / 0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.55 0.18 145 / 0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <AnimationWrapper animation="fade-up" className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-5"
            style={{
              background: 'oklch(0.55 0.18 145 / 0.1)',
              border: '1px solid oklch(0.55 0.18 145 / 0.3)',
              color: 'oklch(0.68 0.17 145)',
            }}
          >
            <Film className="w-4 h-4" />
            Original Series
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{ color: 'oklch(0.95 0.01 145)' }}>
            The{' '}
            <span className="text-gradient-green">GrowteX Journey</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'oklch(0.58 0.015 145)' }}>
            A true story of Indian entrepreneurship — from humble beginnings to digital dominance.
            Four chapters. One unstoppable vision.
          </p>
        </AnimationWrapper>

        {/* ── HERO REEL ── */}
        <AnimationWrapper animation="fade-up" delay={100} className="mb-12">
          <div
            className="relative w-full rounded-3xl overflow-hidden cursor-pointer group"
            style={{ aspectRatio: '16/9' }}
            onMouseEnter={() => setHeroHovered(true)}
            onMouseLeave={() => setHeroHovered(false)}
          >
            {/* Hero thumbnail */}
            <img
              src="/assets/generated/growtex-journey-hero-reel.dim_1280x720.jpg"
              alt="The GrowteX Journey — Hero Reel"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Cinematic dark overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, oklch(0.06 0.01 145 / 0.92) 0%, oklch(0.06 0.01 145 / 0.45) 40%, oklch(0.06 0.01 145 / 0.25) 100%)',
              }}
            />

            {/* Film grain texture overlay */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
                backgroundSize: '200px 200px',
              }}
            />

            {/* Top bar — cinematic letterbox feel */}
            <div
              className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4"
              style={{ background: 'linear-gradient(to bottom, oklch(0.06 0.01 145 / 0.6), transparent)' }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: 'oklch(0.55 0.18 145)' }}
                />
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: 'oklch(0.68 0.17 145)' }}
                >
                  GrowteX Original
                </span>
              </div>
              <div
                className="text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full"
                style={{
                  background: 'oklch(0.55 0.18 145 / 0.15)',
                  border: '1px solid oklch(0.55 0.18 145 / 0.4)',
                  color: 'oklch(0.75 0.12 145)',
                }}
              >
                Full Series
              </div>
            </div>

            {/* Center play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="relative flex items-center justify-center transition-all duration-400"
                style={{ transform: heroHovered ? 'scale(1.08)' : 'scale(1)' }}
              >
                {/* Outer ring pulse */}
                <div
                  className="absolute w-28 h-28 rounded-full"
                  style={{
                    border: '1px solid oklch(0.55 0.18 145 / 0.3)',
                    animation: 'pulse-green 2.5s ease-in-out infinite',
                  }}
                />
                {/* Middle ring */}
                <div
                  className="absolute w-20 h-20 rounded-full"
                  style={{
                    border: '1px solid oklch(0.55 0.18 145 / 0.5)',
                  }}
                />
                {/* Play button core */}
                <div
                  className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: heroHovered
                      ? 'oklch(0.55 0.18 145)'
                      : 'oklch(0.55 0.18 145 / 0.85)',
                    boxShadow: heroHovered
                      ? '0 0 60px oklch(0.55 0.18 145 / 0.7), 0 0 120px oklch(0.55 0.18 145 / 0.3)'
                      : '0 0 30px oklch(0.55 0.18 145 / 0.4)',
                  }}
                >
                  <Play className="w-7 h-7 fill-white text-white ml-1" />
                </div>
              </div>
            </div>

            {/* Bottom content overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 pt-16"
              style={{ background: 'linear-gradient(to top, oklch(0.06 0.01 145 / 0.95), transparent)' }}
            >
              <div className="max-w-3xl">
                <div
                  className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: 'oklch(0.55 0.18 145)' }}
                >
                  Documentary Series · 4 Chapters
                </div>
                <h3
                  className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 leading-tight"
                  style={{ color: 'oklch(0.96 0.01 145)' }}
                >
                  The GrowteX Journey
                </h3>
                <p
                  className="text-sm sm:text-base leading-relaxed max-w-xl"
                  style={{ color: 'oklch(0.65 0.015 145)' }}
                >
                  How Indian entrepreneurs go from idea to digital dominance — a story of grit,
                  strategy, and unstoppable growth.
                </p>
              </div>
            </div>
          </div>
        </AnimationWrapper>

        {/* ── CHAPTER CARDS ── */}
        <AnimationWrapper
          animation="fade-up"
          stagger={120}
          delay={0}
          className="flex flex-col sm:flex-row gap-5 overflow-x-auto pb-2 mb-14 lg:overflow-x-visible"
        >
          {chapters.map((chapter, index) => (
            <ChapterCard key={chapter.number} chapter={chapter} index={index} />
          ))}
        </AnimationWrapper>

        {/* ── STATS ROW ── */}
        <AnimationWrapper animation="fade-up" delay={200}>
          <div
            className="rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-3 gap-8"
            style={{
              background: 'oklch(0.12 0.015 145)',
              border: '1px solid oklch(0.55 0.18 145 / 0.15)',
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  index < stats.length - 1
                    ? 'sm:border-r'
                    : ''
                }`}
                style={{ borderColor: 'oklch(0.55 0.18 145 / 0.15)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: 'oklch(0.55 0.18 145 / 0.12)',
                    border: '1px solid oklch(0.55 0.18 145 / 0.25)',
                  }}
                >
                  <stat.icon className="w-5 h-5" style={{ color: 'oklch(0.68 0.17 145)' }} />
                </div>
                <div
                  className="font-display text-4xl font-bold mb-1"
                  style={{ color: 'oklch(0.68 0.17 145)' }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-semibold text-sm mb-1"
                  style={{ color: 'oklch(0.88 0.01 145)' }}
                >
                  {stat.label}
                </div>
                <div className="text-xs" style={{ color: 'oklch(0.52 0.012 145)' }}>
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
