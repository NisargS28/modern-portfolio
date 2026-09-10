'use client';

import { motion } from 'framer-motion';
import { InteractiveSystem } from '../ui/MotionExperience';
import { ArrowDownRight, ArrowUpRight, FileText, Github, Linkedin, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden pt-32 pb-16 md:pt-40">
      <div className="pointer-events-none absolute -right-40 top-16 h-[34rem] w-[34rem] rounded-full bg-primary/15 blur-[110px]" />
      <div className="mx-auto grid min-h-[calc(100svh-12rem)] max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.35fr_.65fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="mb-8 flex flex-wrap items-center gap-3 font-grotesk text-xs font-bold uppercase tracking-[.16em]">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-600 dark:text-emerald-400"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />Open to 2027 opportunities</span>
            <span className="text-muted">Ahmedabad, India</span>
          </div>
          <p className="mb-5 flex items-center gap-2 font-grotesk text-sm font-semibold text-primary"><Sparkles size={16} /> AI solutions + full-stack engineering</p>
          <h1 className="max-w-5xl font-grotesk text-[clamp(3.4rem,8vw,7.8rem)] font-bold leading-[.88] tracking-[-.07em] text-textMain">
            I turn messy workflows into <span className="text-primary">working products.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            I&apos;m Nisarg Solanki, a Computer Engineering student building AI-enabled web apps, RAG systems and practical automation that teams can use every day.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="group inline-flex items-center justify-center gap-2 rounded-full bg-textMain px-7 py-4 font-grotesk font-bold text-background transition-transform hover:-translate-y-1">Explore case studies <ArrowDownRight size={19} className="transition-transform group-hover:rotate-45" /></a>
            <a href="/Nisarg%20Solanki_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-textMain/20 px-7 py-4 font-grotesk font-bold text-textMain transition-colors hover:border-primary hover:text-primary"><FileText size={18} /> View resume</a>
          </div>
        </motion.div>

        <motion.aside initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: .15 }} className="editorial-card relative rounded-[2rem] p-5 md:p-7">
          <div className="mb-6 flex items-center justify-between border-b border-textMain/10 pb-5">
            <span className="font-grotesk text-xs font-bold uppercase tracking-[.18em] text-muted">Current signal</span>
            <span className="rounded-full bg-primary px-3 py-1 font-grotesk text-xs font-bold text-white">AI × Web</span>
          </div>
          <div className="space-y-5">
            <InteractiveSystem />
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-primary p-4 text-white"><p className="text-3xl font-grotesk font-bold">90%</p><p className="mt-1 text-xs text-white/75">less invoice data entry</p></div>
              <div className="rounded-2xl bg-[#dfff55] p-4 text-[#111318]"><p className="text-3xl font-grotesk font-bold">150</p><p className="mt-1 text-xs text-black/65">containers tracked / day</p></div>
            </div>
            <div className="flex gap-2">
              <a href="https://github.com/NisargS28" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-textMain/10 font-semibold hover:border-primary hover:text-primary"><Github size={18}/> GitHub</a>
              <a href="https://www.linkedin.com/in/nisarg-solanki-0970aa290" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-textMain/10 font-semibold hover:border-primary hover:text-primary"><Linkedin size={18}/> LinkedIn</a>
            </div>
          </div>
          <ArrowUpRight className="absolute -right-3 -top-3 h-12 w-12 rounded-full bg-accent p-3 text-white" />
        </motion.aside>
      </div>
    </section>
  );
}
