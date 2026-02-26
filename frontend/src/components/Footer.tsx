import { Heart } from 'lucide-react';
import { SiLinkedin, SiX, SiInstagram, SiFacebook, SiYoutube } from 'react-icons/si';
import { Phone, Mail } from 'lucide-react';

const footerLinks = {
  Services: [
    'DPIIT Registration',
    'MSME Udyam Registration',
    'Trademark Registration',
    'Social Media Management',
    'Website Development',
    'SEO Services',
    'Performance Advertising',
  ],
  Company: [
    'About Us',
    'Our Process',
    'Case Studies',
    'Careers',
    'Blog',
  ],
};

const socialLinks = [
  { icon: SiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: SiX, href: '#', label: 'X (Twitter)' },
  { icon: SiInstagram, href: '#', label: 'Instagram' },
  { icon: SiFacebook, href: '#', label: 'Facebook' },
  { icon: SiYoutube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = typeof window !== 'undefined' ? window.location.hostname : 'growtex-ventures';
  const utmLink = `https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-green-900 border-t border-green-800/60 relative overflow-hidden">
      {/* Top decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-green-700/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-5">
              <img
                src="/assets/generated/growtex-logo.dim_400x100.png"
                alt="GrowteX Ventures"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>

            <p className="text-green-200 text-sm font-semibold italic mb-2">
              From Vision to Victory.
            </p>

            <p className="text-green-300/70 text-sm leading-relaxed mb-6 max-w-xs">
              Your end-to-end partner for business registrations, digital marketing,
              website development, and performance advertising.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-green-800 border border-green-700/60 flex items-center justify-center text-green-300 hover:text-white hover:border-green-400 hover:bg-green-700 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.Services.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-green-300/70 text-sm hover:text-green-300 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.Company.map((item) => (
                <li key={item}>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-green-300/70 text-sm hover:text-green-300 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:7999866007"
                  className="flex items-center gap-2.5 text-green-300/70 text-sm hover:text-green-300 transition-colors duration-200 group"
                >
                  <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                  +91 7999866007
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@growteX.com"
                  className="flex items-center gap-2.5 text-green-300/70 text-sm hover:text-green-300 transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                  info@growteX.com
                </a>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-2 inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Book a Free Call
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-green-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-green-400/60 text-xs">
            © {year} GrowteX Ventures. All rights reserved.
          </p>
          <p className="text-green-400/60 text-xs flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-green-400 fill-green-400" /> using{' '}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
