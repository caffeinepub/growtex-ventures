import { useEffect, useRef, useState, useCallback, type RefObject } from 'react';

/**
 * Returns a normalized depth value (0–1) representing how close the element
 * is to the viewport center. 1 = perfectly centered, 0 = at edge.
 */
export function useScrollDepth(elementRef: RefObject<HTMLElement | null>) {
  const [depth, setDepth] = useState(0);
  const rafRef = useRef<number | null>(null);

  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const isMobile =
    typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  const calculate = useCallback(() => {
    if (prefersReducedMotion || isMobile || !elementRef.current) return;
    const rect = elementRef.current.getBoundingClientRect();
    const viewportCenter = window.innerHeight / 2;
    const elementCenter = rect.top + rect.height / 2;
    const distance = Math.abs(elementCenter - viewportCenter);
    const maxDistance = window.innerHeight / 2 + rect.height / 2;
    const normalized = Math.max(0, 1 - distance / maxDistance);
    setDepth(normalized);
  }, [elementRef, prefersReducedMotion, isMobile]);

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      calculate();
      rafRef.current = null;
    });
  }, [calculate]);

  useEffect(() => {
    if (prefersReducedMotion || isMobile) return;
    calculate();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll, calculate, prefersReducedMotion, isMobile]);

  return depth;
}
