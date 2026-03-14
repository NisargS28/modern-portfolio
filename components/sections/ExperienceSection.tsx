'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'Tech Innovators Inc.',
    date: 'Summer 2025',
    description: 'Developed and shipped full-stack features using Next.js and Go. Improved API response times by 30% through database query optimization and Redis caching.',
    color: 'from-primary to-blue-400'
  },
  {
    role: 'Frontend Developer (Contract)',
    company: 'Creative Digital Agency',
    date: 'Jan 2024 - Present',
    description: 'Collaborate with designers to build highly interactive, accessible web experiences for clients using React, GSAP, and Tailwind CSS.',
    color: 'from-secondary to-purple-400'
  },
  {
    role: 'Open Source Contributor',
    company: 'Various Projects',
    date: '2023 - Present',
    description: 'Actively contributing to popular open-source React libraries. Mentoring junior developers and helping maintain community documentation.',
    color: 'from-accent to-orange-400'
  },
  {
    role: 'Computer Science B.S.',
    company: 'University of Technology',
    date: 'Expected Graduation: 2026',
    description: 'Relevant Coursework: Data Structures & Algorithms, Web Architecture, Artificial Intelligence, Database Systems, Computer Networks.',
    color: 'from-emerald-500 to-teal-400'
  }
];

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-textMain mb-6">
            Journey & <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              style={{ height: lineHeight }} 
              className="w-full bg-gradient-to-b from-primary via-secondary to-accent" 
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-background rounded-full border-[3px] border-primary z-10 hidden md:block shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  
                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
                    className={`w-full md:w-5/12 ml-[60px] md:ml-0 p-6 rounded-[2rem] bg-background border border-gray-100 dark:border-white/10 shadow-card hover:shadow-card-hover transition-all relative group overflow-hidden`}
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                    
                    <div className="flex flex-col gap-2 mb-4">
                      <span className="text-sm font-bold text-primary tracking-wider uppercase">{exp.date}</span>
                      <h3 className="text-2xl font-grotesk font-bold text-textMain">{exp.role}</h3>
                      <span className="text-muted font-inter font-medium">{exp.company}</span>
                    </div>
                    <p className="text-muted font-inter leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
