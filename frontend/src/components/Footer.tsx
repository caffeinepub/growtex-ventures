import { SiLinkedin, SiInstagram, SiFacebook, SiX } from 'react-icons/si';
import { Heart } from 'lucide-react';

const footerLinks = {
  Services: [
    'Performance Marketing',
    'SEO & Content',
    'Brand Identity',
    'Web Development',
    'Social Media',
    'Email Marketing',
  ],
  Company: [
    'About Us',
    'Our Process',
    'Case Studies',
    'Testimonials',
    'Careers',
    'Blog',
  ],
  Contact: [
    'Book a Free Call',
    'info@growteX.com',
    '+91 7999866007',
    'Mon–Sat, 9AM–7PM IST',
  ],
};

const socialLinks = [
  { icon: SiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: SiInstagram, href: '#', label: 'Instagram' },
  { icon: SiFacebook, href: '#', label: 'Facebook' },
  { icon: SiX, href: '#', label: 'X (Twitter)' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'growtex-ventures');

  return (
    <footer className="bg-card border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-10 md:mb-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-1">
            <img
              src="/assets/generated/growtex-logo.dim_400x100.png"
              alt="GrowteX Ventures"
              className="h-8 w-auto mb-3 sm:mb-4"
            />
            <p className="text-sm text-foreground/60 leading-relaxed mb-4 sm:mb-5 max-w-xs">
              From Vision to Victory — your trusted partner for digital growth, performance marketing, and business transformation.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 flex items-center justify-center bg-foreground/5 hover:bg-primary/10 hover:text-primary rounded-xl text-foreground/60 transition-all duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-bold text-foreground mb-3 sm:mb-4 uppercase tracking-wider">{heading}</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={heading === 'Contact' && link.includes('@') ? `mailto:${link}` : heading === 'Contact' && link.startsWith('+') ? `tel:${link.replace(/\s/g, '')}` : '#'}
                      className="text-sm text-foreground/60 hover:text-primary transition-colors duration-200 block py-0.5 min-h-[28px]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-foreground/50 text-center sm:text-left">
            © {year} GrowteX Ventures. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-foreground/50 flex items-center gap-1.5">
            Built with{' '}
            <Heart size={13} className="text-primary fill-primary" />
            {' '}using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
