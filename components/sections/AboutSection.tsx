'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BrainCircuit, Code2, Workflow, DatabaseZap } from 'lucide-react';

const focus = [
  { icon: BrainCircuit, title: 'Applied AI', text: 'RAG, LLM integration and document intelligence.' },
  { icon: Workflow, title: 'Automation', text: 'Workflows that remove repetitive operational work.' },
  { icon: Code2, title: 'Product engineering', text: 'Responsive interfaces and reliable full-stack systems.' },
  { icon: DatabaseZap, title: 'Data + APIs', text: 'SQL, Supabase, REST APIs and business integrations.' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative z-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-stretch">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative min-h-[31rem] overflow-hidden rounded-[2rem] bg-[#151823]">
            <Image src="/profile.jpeg" alt="Nisarg Solanki" fill className="object-cover object-top opacity-90" sizes="(max-width: 1024px) 100vw, 40vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
              <p className="font-grotesk text-2xl font-bold">Builder first.</p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">Computer Engineering at PDEU · graduating 2027 · always translating ideas into working demos.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .1 }} className="editorial-card rounded-[2rem] p-7 md:p-10">
            <span className="section-kicker">01 / About</span>
            <h2 className="max-w-3xl font-grotesk text-4xl font-bold leading-tight tracking-tight md:text-6xl">I like software that earns its place in a workflow.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
              My work sits where full-stack engineering meets practical AI. I&apos;ve built organization-aware RAG chatbots, invoice extraction pipelines, logistics automation, payment-enabled platforms and responsive web products. The goal is always the same: make a complicated process feel simple.
            </p>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {focus.map(({ icon: Icon, title, text }, index) => (
                <motion.div key={title} initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="rounded-2xl border border-textMain/10 p-5 transition-colors hover:border-primary/50 hover:bg-primary/5">
                  <Icon className="mb-4 text-primary" size={24} />
                  <h3 className="font-grotesk text-lg font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
