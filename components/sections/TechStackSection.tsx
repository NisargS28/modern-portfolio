'use client';

import { motion } from 'framer-motion';

const capabilities = [
  { id: 'A', title: 'AI & automation', copy: 'Building context-aware tools and operational workflows.', items: ['RAG', 'LLMs', 'Prompt engineering', 'Python', 'Power Automate', 'Data extraction'] },
  { id: 'B', title: 'Full-stack products', copy: 'Taking an idea from interface to deployed application.', items: ['Next.js', 'React', 'Node.js', 'Express', 'REST APIs', 'Tailwind CSS'] },
  { id: 'C', title: 'Data & delivery', copy: 'Connecting applications to reliable data and infrastructure.', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Git/GitHub', 'Vercel'] },
];

export default function TechStackSection() {
  return (
    <section id="tech" className="section-padding relative z-10 bg-[#111318] text-white">
      <div className="mx-auto max-w-7xl px-6">
        <span className="section-kicker !text-[#dfff55]">03 / Capabilities</span>
        <div className="mb-14 grid gap-6 lg:grid-cols-2"><h2 className="font-grotesk text-4xl font-bold tracking-tight md:text-6xl">Tools change. The ability to ship stays.</h2><p className="max-w-xl self-end text-lg leading-relaxed text-white/60">I use the stack that fits the problem, with strongest hands-on experience across Next.js, Python, SQL, APIs and applied AI.</p></div>
        <div className="divide-y divide-white/15 border-y border-white/15">
          {capabilities.map((capability, index) => (
            <motion.div key={capability.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="grid gap-5 py-8 md:grid-cols-[70px_.7fr_1.3fr] md:items-center">
              <span className="font-grotesk text-sm font-bold text-[#dfff55]">{capability.id}</span>
              <div><h3 className="font-grotesk text-2xl font-bold">{capability.title}</h3><p className="mt-2 max-w-sm text-sm text-white/55">{capability.copy}</p></div>
              <div className="flex flex-wrap gap-2 md:justify-end">{capability.items.map(item => <span key={item} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/75 transition-colors hover:border-[#dfff55] hover:text-[#dfff55]">{item}</span>)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
