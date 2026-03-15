'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';
import { ArrowRight, Eye, ChevronUp } from 'lucide-react';

const heroLines = [
  'I build digital experiences.',
  'I design accessible products.',
  'I craft polished interfaces.',
  'I build scalable web apps.',
];

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const [lineIndex, setLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = heroLines[lineIndex];
    const hasFinishedTyping = displayedText === currentLine;
    const hasFinishedDeleting = displayedText.length === 0;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && !hasFinishedTyping) {
        setDisplayedText(currentLine.slice(0, displayedText.length + 1));
        return;
      }

      if (!isDeleting && hasFinishedTyping) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && !hasFinishedDeleting) {
        setDisplayedText(currentLine.slice(0, displayedText.length - 1));
        return;
      }

      setIsDeleting(false);
      setLineIndex((currentIndex) => (currentIndex + 1) % heroLines.length);
    }, !isDeleting && hasFinishedTyping ? 1400 : isDeleting ? 45 : 85);

    return () => window.clearTimeout(timeout);
  }, [displayedText, isDeleting, lineIndex]);

  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-32 sm:pt-28 md:pt-24 pb-16 sm:pb-12">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/20 blur-[120px] rounded-full blob" style={{ animationDelay: '-5s' }} />
        <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-accent/20 blur-[80px] rounded-full blob" style={{ animationDelay: '-2s' }} />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="px-6 py-2 rounded-full glass mb-8 text-sm font-semibold text-primary/80 border border-primary/20 shadow-glow-blue"
        ><span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          Portfolio Overview
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-8xl font-grotesk font-bold tracking-tighter text-textMain leading-[1.1] mb-6">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="block"
          >
            Hi, I'm <span className="gradient-text">Nisarg</span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="mt-2 block min-h-[2.6rem] text-2xl sm:text-3xl text-muted/80 md:min-h-[4.5rem] md:text-5xl lg:text-6xl md:whitespace-nowrap"
          >
            <span>{displayedText}</span>
            <motion.span
              aria-hidden="true"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
              className="ml-1 inline-block text-primary"
            >
              |
            </motion.span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mb-10 sm:mb-12 font-inter"
        >
          Specializing in accessible, high-performance web applications using modern tech stacks. Actively seeking 2026 SWE opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <MagneticButton
            className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold text-base sm:text-lg hover:shadow-glow-blue transition-all group overflow-hidden"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </MagneticButton>
          <MagneticButton
            className="w-full sm:w-auto px-8 py-4 glass bg-white/60 dark:bg-white/10 text-textMain rounded-full font-bold text-base sm:text-lg hover:bg-white/80 dark:hover:bg-white/20 transition-all font-inter flex items-center justify-center gap-2 group border-2 border-primary/20 dark:border-white/40 shadow-sm"
            onClick={() => window.open('/Nisarg Solanki_Resume.pdf', '_blank')}
          >
            <Eye size={20} className="group-hover:-translate-y-1 transition-transform text-secondary" />
            View Resume
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 sm:bottom-8 inset-x-0 hidden sm:flex flex-col items-center gap-2 z-10 pointer-events-none text-primary"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-muted font-bold font-inter mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronUp size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
