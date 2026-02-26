# Specification

## Summary
**Goal:** Make the entire GrowteX Ventures website fully responsive across mobile, tablet, and desktop breakpoints.

**Planned changes:**
- Header: Add hamburger menu for mobile with collapsible full-width dropdown nav, hide desktop nav on small screens, ensure 44×44px touch targets
- Hero section: Scale headline/subheadline text down on mobile, stack CTA buttons vertically on small screens, disable parallax on mobile
- Services section: Display 1-column on mobile, 2-column on tablet, 3-column on desktop; reduce scroll animations on mobile
- About section: Stack illustration below text on mobile, use 2-column grid for stat counters on mobile, disable parallax on mobile
- Process section: Horizontal timeline on desktop, vertical stacked steps on mobile/tablet, hide connector lines in vertical layout
- Testimonials section: 1-column on mobile, 2-column on tablet, 3-column on desktop, no horizontal overflow
- Contact section: Stack info panel above form on mobile, side-by-side on desktop, full-width touch-friendly form fields
- Footer: Single-column vertical stack on mobile, multi-column horizontal layout on desktop, 44×44px social icon tap targets
- Global: Apply responsive Tailwind prefixes for padding, heading sizes, and body text; prevent horizontal overflow site-wide; ensure ScrollProgressBar works on mobile

**User-visible outcome:** The GrowteX Ventures site is fully usable and visually consistent on all screen sizes, from 320px mobile up to large desktop, with no horizontal overflow and accessible touch targets throughout.
