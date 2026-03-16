'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'NGO Website',
    category: 'Web Development',
    description: 'A responsive website for a non-profit organization, built with Next.js and Tailwind CSS.',
    imageClass: 'bg-gradient-to-br from-blue-400 to-indigo-500',
    tags: ['Next.js', 'Tailwind CSS', 'Vercel'],
    link: 'www.sarthifoundationngo.org',
    github: '#'
  },
  {
    title: 'Cashbook',
    category: 'Expense Tracker',
    description: 'A simple and intuitive expense tracking app built with React and Supabase.',
    imageClass: 'bg-gradient-to-br from-emerald-400 to-teal-500',
    tags: ['Twillo', 'Next.js', 'Supabase'],
    link: 'https://book-keeping-nine.vercel.app/',
    github: 'https://github.com/NisargS28/book-keeping'
  },
  {
    title: 'Prasang',
    category: 'Ecommerce website',
    description: 'A modern e-commerce website for a local business, built with Next.js with Payment Gateway Integration.',
    imageClass: 'bg-gradient-to-br from-fuchsia-400 to-purple-500',
    tags: ['Next.js', 'E-commerce', 'Payment Gateway','FreeLance Project'],
    link: 'https://prasang-nu.vercel.app/',
    github: 'https://github.com/NisargS28/prasang'
  },
  {
    title: 'City Vadapav',
    category: 'Franchaise Website',
    description: 'A franchise website for a popular local food chain, built with Next.js and Tailwind CSS.',
    imageClass: 'bg-gradient-to-br from-orange-400 to-rose-500',
    tags: ['Next.js', 'Tailwind','FreeLance Project'],
    link: 'https://www.cityvadapav.in',
    github: 'https://github.com/NisargS28/city-vadapav'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 text-center md:text-left"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-textMain mb-4">
              Featured <span className="gradient-text-blue">Work</span>
            </h2>
            <p className="text-muted text-lg font-inter max-w-xl mx-auto md:mx-0">
              A selection of my recent projects. I love building things that look beautiful and work flawlessly.
            </p>
          </div>
          <button className="text-primary font-inter font-semibold hover:text-secondary transition-colors items-center gap-2 group hidden md:flex" data-cursor="hover">
            View full archive <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-[2.5rem] p-5 md:p-6 bg-background border border-gray-100 dark:border-white/10 shadow-card hover:shadow-card-hover transition-all duration-500 ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className={`relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 ${project.imageClass}`}>
                {/* Simulated Project Image/Graphics */}
                <div className="absolute inset-0 noise" />
                <div className="absolute inset-4 glass-dark rounded-[1.5rem] flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700 ease-out">
                  <span className="text-white/80 font-grotesk font-bold text-3xl tracking-widest uppercase">{project.title}</span>
                </div>
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-textMain/40 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a href={project.link} className="w-14 h-14 bg-background rounded-full flex items-center justify-center text-primary border border-gray-100 dark:border-white/10 hover:scale-110 transition-transform shadow-lg" data-cursor="hover">
                    <ArrowUpRight size={24} />
                  </a>
                  <a href={project.github} className="w-14 h-14 rounded-full flex items-center justify-center bg-white text-black dark:bg-black dark:text-white border border-black/10 dark:border-white/20 hover:scale-110 transition-transform shadow-lg" data-cursor="hover">
                    <Github size={24} />
                  </a>
                </div>
              </div>

              <div className="px-4 pb-4 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-between mb-3">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                </div>
                <h3 className="text-2xl font-grotesk font-bold text-textMain mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted font-inter mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-50 text-muted border border-gray-200 rounded-lg text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center md:hidden">
            <button className="text-primary font-inter font-semibold items-center gap-2 group flex" data-cursor="hover">
              View full archive <ArrowUpRight size={20} />
            </button>
        </div>
      </div>
    </section>
  );
}
