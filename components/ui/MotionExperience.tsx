'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

export default function MotionExperience() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  const reduced = useReducedMotion();
  return <><motion.div aria-hidden="true" className="reading-progress" style={{ scaleX: reduced ? scrollYProgress : scaleX }} /><div className="ambient-field" aria-hidden="true"><span/><span/><span/></div></>;
}

const modes = [
  { label: 'AI', title: 'Knowledge → answers', steps: ['Internal documents', 'Retrieve relevant context', 'Generate grounded response'], note: 'Organization-specific RAG chatbot · SKAPS' },
  { label: 'Automation', title: 'Repetition → time saved', steps: ['Invoice PDF', 'Extract 10 predefined fields', 'Structured Excel output'], note: '15–20 invoices daily · ~90% less manual entry' },
  { label: 'Full stack', title: 'Idea → working product', steps: ['Responsive Next.js interface', 'Authenticated application logic', 'Persistent SQL data'], note: 'Interfaces, APIs and data working together' },
];

export function InteractiveSystem() {
  const [selected, setSelected] = useState(0);
  const panel = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const el = panel.current;
    if (!el || reduced || !window.matchMedia('(pointer:fine)').matches) return;
    const move = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--tilt-x', `${-(event.clientY - rect.top - rect.height / 2) / 45}deg`);
      el.style.setProperty('--tilt-y', `${(event.clientX - rect.left - rect.width / 2) / 45}deg`);
    };
    const reset = () => { el.style.setProperty('--tilt-x', '0deg'); el.style.setProperty('--tilt-y', '0deg'); };
    el.addEventListener('pointermove', move); el.addEventListener('pointerleave', reset);
    return () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', reset); };
  }, [reduced]);
  return <div ref={panel} className="system-panel">
    <div className="system-tabs" aria-label="Explore my work">
      {modes.map((mode, index) => <button key={mode.label} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>{mode.label}</button>)}
    </div>
    <div aria-live="polite">
      <motion.div key={selected} initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3 }}>
        <h3 className="system-title">{modes[selected].title}</h3>
        <ol className="system-steps">{modes[selected].steps.map((step, index) => <li key={step}><span className="step-number">0{index + 1}</span><span>{step}</span><span className="step-pulse" style={{ animationDelay: `${index * .6}s` }} /></li>)}</ol>
        <p className="system-note">{modes[selected].note}</p>
      </motion.div>
    </div>
  </div>;
}
