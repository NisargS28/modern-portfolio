'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight, Github, LockKeyhole, MessageSquareText, ReceiptText, ShoppingBag } from 'lucide-react';

const projects = [
  {
    number: '01', title: 'Ledgerly', label: 'Secure bookkeeping platform',
    summary: 'A multi-book Cash In / Cash Out product with authentication, fast search and filters, PDF reports and WhatsApp-based entry creation.',
    impact: 'Privacy-first records with practical daily workflows',
    tags: ['Next.js', 'Supabase', 'PostgreSQL', 'Twilio'],
    link: 'https://book-keeping-nine.vercel.app/', github: 'https://github.com/NisargS28/book-keeping', icon: LockKeyhole,
    tone: 'bg-[#2855ff] text-white'
  },
  {
    number: '02', title: 'Sarthi Foundation', label: 'Production NGO platform',
    summary: 'A responsive, SEO-focused NGO website with secure donations and an AI chatbot that helps visitors find information quickly.',
    impact: '300+ monthly visitors · 150% search visibility growth',
    tags: ['Next.js', 'AI chatbot', 'Razorpay', 'SEO'],
    link: 'https://www.sarthifoundationngo.org/', github: null, icon: MessageSquareText,
    tone: 'bg-[#dfff55] text-[#111318]'
  },
  {
    number: '03', title: 'Prasang', label: 'Boutique commerce experience',
    summary: 'An end-to-end boutique storefront covering discovery, checkout, Razorpay payment verification, receipts and live admin notifications.',
    impact: 'Complete browse-to-order purchase journey',
    tags: ['Next.js', 'Tailwind CSS', 'Razorpay', 'Automation'],
    link: 'https://prasang-nu.vercel.app/', github: 'https://github.com/NisargS28/prasang', icon: ShoppingBag,
    tone: 'bg-[#ff6b35] text-white'
  },
  {
    number: '04', title: 'Restaurant POS', label: 'Operations management system',
    summary: 'A role-based restaurant POS for menu, tables, KOT generation, billing, transactions and daily sales reporting.',
    impact: 'Designed for fast cashier and admin workflows',
    tags: ['Next.js', 'SQL', 'Authentication', 'Analytics'],
    link: null, github: null, icon: ReceiptText,
    tone: 'bg-[#171923] text-white'
  }
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const filtered = projects.filter(project => filter === 'All' || (filter === 'AI' ? project.tags.includes('AI chatbot') : filter === 'Commerce' ? project.title === 'Prasang' : ['Ledgerly', 'Restaurant POS'].includes(project.title)));
  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><span className="section-kicker">02 / Selected work</span><h2 className="font-grotesk text-4xl font-bold tracking-tight md:text-6xl">Case studies, not just cards.</h2></div>
          <p className="max-w-md text-muted">Four projects that show how I think across product, backend, data and real users.</p>
        </div>
        <div className="project-filters" aria-label="Filter projects">{['All', 'AI', 'Commerce', 'Business tools'].map(item => <button type="button" key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div>
        <div className="grid gap-5 md:grid-cols-2" aria-live="polite">
          {filtered.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article layout key={project.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: index * .08 }} className="editorial-card project-interactive group overflow-hidden rounded-[2rem]">
                <div className={`relative min-h-56 p-7 ${project.tone}`}>
                  <div className="flex items-start justify-between"><span className="font-grotesk text-sm font-bold opacity-70">PROJECT / {project.number}</span><Icon size={36} strokeWidth={1.5} /></div>
                  <div className="absolute bottom-7 left-7 right-7"><p className="mb-2 text-sm font-semibold opacity-70">{project.label}</p><h3 className="font-grotesk text-4xl font-bold tracking-tight md:text-5xl">{project.title}</h3></div>
                </div>
                <div className="p-7">
                  <p className="text-base leading-relaxed text-muted">{project.summary}</p>
                  <p className="mt-5 border-l-2 border-primary pl-4 font-grotesk text-sm font-bold text-textMain">{project.impact}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-textMain/10 px-3 py-1.5 text-xs font-semibold text-muted">{tag}</span>)}</div>
                  <div className="mt-7 flex gap-3">
                    {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-grotesk text-sm font-bold text-primary hover:underline">Live product <ArrowUpRight size={16}/></a>}
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-grotesk text-sm font-bold text-muted hover:text-primary"><Github size={16}/> Source</a>}
                    {!project.link && <span className="font-grotesk text-sm font-bold text-muted">Private build</span>}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
