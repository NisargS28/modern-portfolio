'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Palette, Database, Brain, Rocket, User } from 'lucide-react';
import Image from 'next/image';

const skills = [
  { name: 'React & Next.js', icon: <Code2 size={22} />, color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
  { name: 'Node & Express', icon: <Server size={22} />, color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  { name: 'UI/UX Design', icon: <Palette size={22} />, color: 'text-secondary', bg: 'bg-secondary/10', border: 'border-secondary/20' },
  { name: 'SQL / NoSQL', icon: <Database size={22} />, color: 'text-cyan-500', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  { name: 'Python & AI', icon: <Brain size={22} />, color: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/20' },
  { name: 'Performance', icon: <Rocket size={22} />, color: 'text-coral', bg: 'bg-coral/10', border: 'border-coral/20' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative z-10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-center"
        >
          {/* LEFT — Text + Skills */}
          <div className="flex-1 space-y-6 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-textMain">
              Beyond the <span className="gradient-text">Screen</span>
            </h2>
            <div className="space-y-4 text-lg text-muted font-inter leading-relaxed">
              <p>
                I'm a passionate Computer Science student who treats code as a creative medium. I bridge the gap between complex technical problems and beautiful, intuitive user experiences.
              </p>
              <p>
                When I'm not studying algorithms or building side projects, you'll find me analyzing UI/UX trends on Awwwards or exploring new generative AI tools.
              </p>
            </div>

            {/* Stats */}
            <div className="pt-2 flex gap-8 flex-wrap">
              <div>
                <div className="text-3xl font-grotesk font-bold text-textMain mb-1">3+</div>
                <div className="text-xs font-bold uppercase tracking-wider text-primary">Years Coding</div>
              </div>
              <div className="w-px bg-gray-200 self-stretch" />
              <div>
                <div className="text-3xl font-grotesk font-bold text-textMain mb-1">15+</div>
                <div className="text-xs font-bold uppercase tracking-wider text-secondary">Projects Built</div>
              </div>
              <div className="w-px bg-gray-200 self-stretch" />
              <div>
                <div className="text-3xl font-grotesk font-bold text-textMain mb-1">100%</div>
                <div className="text-xs font-bold uppercase tracking-wider text-accent">Passion</div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className={`p-4 rounded-2xl border border-gray-100 dark:border-white/10 bg-background shadow-card hover:shadow-card-hover transition-all flex items-center gap-3 cursor-default ${skill.border}`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${skill.bg} ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <span className="font-grotesk font-semibold text-textMain text-sm leading-tight">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex-shrink-0 order-1 lg:order-2 flex flex-col items-center gap-5"
          >
            {/* Photo Frame */}
            <div className="relative group">
              {/* Glow rings */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 rounded-[2.5rem] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary via-secondary to-accent rounded-[2rem] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Photo container */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-[2rem] overflow-hidden border-4 border-white shadow-[0_20px_60px_rgba(59,130,246,0.2)] group-hover:shadow-[0_24px_80px_rgba(139,92,246,0.3)] transition-shadow duration-500">
                {/* Try to load actual photo; fallback to gradient avatar */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow-blue">
                    <User size={40} className="text-white" />
                  </div>
                  <div className="text-center px-6">
                    <p className="font-grotesk font-bold text-textMain text-xl">Nisarg Solanki</p>
                    <p className="text-muted text-sm mt-1 font-inter">CS Student & Developer</p>
                    <p className="text-xs text-primary/70 mt-3 font-inter italic">
                      Replace with your actual photo in<br/><code className="bg-primary/10 px-1 rounded">public/profile.jpg</code>
                    </p>
                  </div>
                </div>

                {/* If you place public/profile.jpg, uncomment this: */}
                <Image src="/profile.jpeg" alt="Nisarg Solanki" fill className="object-cover object-center" priority />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 glass border border-white/70 shadow-glass rounded-2xl px-4 py-2 flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-inter font-semibold text-textMain whitespace-nowrap">Open to work</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
