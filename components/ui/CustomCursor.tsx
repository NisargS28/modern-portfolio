'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const cursorOuter = useRef<HTMLDivElement>(null);
  const cursorInner = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const outerPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Disable custom cursor for touch and small screens to avoid sticky pointer artifacts.
    if (window.matchMedia('(hover: none)').matches || window.innerWidth < 768) {
      setIsVisible(false);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
      if (cursorInner.current) {
        cursorInner.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animate = () => {
      outerPos.current.x += (pos.current.x - outerPos.current.x) * 0.12;
      outerPos.current.y += (pos.current.y - outerPos.current.y) * 0.12;
      if (cursorOuter.current) {
        cursorOuter.current.style.transform = `translate(${outerPos.current.x - 20}px, ${outerPos.current.y - 20}px)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.cursor === 'hover'
      ) {
        setIsHovering(true);
      }
    };

    const onMouseOut = () => setIsHovering(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorOuter}
        className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-all duration-200 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovering ? 'scale-150' : 'scale-100'}`}
        style={{ width: 40, height: 40 }}
      >
        <div
          className={`w-full h-full rounded-full border-2 transition-all duration-200 ${
            isHovering
              ? 'border-accent bg-accent/10'
              : 'border-primary/60 bg-transparent'
          }`}
        />
      </div>
      {/* Inner dot */}
      <div
        ref={cursorInner}
        className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ width: 8, height: 8 }}
      >
        <div
          className={`w-full h-full rounded-full transition-all duration-200 ${
            isHovering ? 'bg-accent scale-150' : 'bg-primary'
          }`}
        />
      </div>
    </>
  );
}
