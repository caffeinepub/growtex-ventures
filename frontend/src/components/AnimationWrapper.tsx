import { useEffect, useRef, useState, ReactNode, Children } from 'react';

type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';

interface AnimationWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  animation?: AnimationType;
  /** If provided as a number, each direct child gets an incrementing delay (ms) */
  stagger?: number;
  /** Called once when the element enters the viewport */
  onIntersect?: () => void;
}

const animationStyles: Record<AnimationType, { hidden: React.CSSProperties; visible: React.CSSProperties }> = {
  'fade-up': {
    hidden: { opacity: 0, transform: 'translateY(24px)' },
    visible: { opacity: 1, transform: 'translateY(0)' },
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'slide-left': {
    hidden: { opacity: 0, transform: 'translateX(-24px)' },
    visible: { opacity: 1, transform: 'translateX(0)' },
  },
  'slide-right': {
    hidden: { opacity: 0, transform: 'translateX(24px)' },
    visible: { opacity: 1, transform: 'translateX(0)' },
  },
};

const TRANSITION = 'opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1), transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)';

export default function AnimationWrapper({
  children,
  delay = 0,
  className = '',
  animation = 'fade-up',
  stagger,
  onIntersect,
}: AnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsVisible(true);
      onIntersect?.();
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            onIntersect?.();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [onIntersect]);

  const styles = animationStyles[animation];

  // Stagger mode: wrap each child with its own delay
  if (stagger !== undefined) {
    const childArray = Children.toArray(children);
    return (
      <div ref={ref} className={className}>
        {childArray.map((child, index) => (
          <div
            key={index}
            style={{
              ...(isVisible ? styles.visible : styles.hidden),
              transitionDelay: isVisible ? `${delay + index * stagger}ms` : '0ms',
              transition: TRANSITION,
            }}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(isVisible ? styles.visible : styles.hidden),
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        transition: TRANSITION,
      }}
    >
      {children}
    </div>
  );
}
