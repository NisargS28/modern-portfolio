'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.25,
      syncTouch: false,
      infinite: false,
    });

    let animationFrame = 0;
    function raf(time: number) {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }
    animationFrame = requestAnimationFrame(raf);

    const scrollToSection = (event: Event) => {
      const target = (event as CustomEvent<string>).detail;
      const element = typeof target === 'string' ? document.querySelector<HTMLElement>(target) : null;
      if (element) lenis.scrollTo(element, { offset: -96, duration: 1.15 });
    };
    window.addEventListener('portfolio:scroll-to', scrollToSection);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('portfolio:scroll-to', scrollToSection);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
