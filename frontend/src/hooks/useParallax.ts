import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Returns a parallax translateY offset (in px) based on scroll position.
 * @param speed - multiplier (0–1). Lower = slower background movement.
 */
export function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number | null>(null);
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const isMobile =
    typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  const handleScroll = useCallback(() => {
    if (prefersReducedMotion || isMobile) return;
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      setOffset(window.scrollY * speed);
      rafRef.current = null;
    });
  }, [speed, prefersReducedMotion, isMobile]);

  useEffect(() => {
    if (prefersReducedMotion || isMobile) return;
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll, prefersReducedMotion, isMobile]);

  return offset;
}
