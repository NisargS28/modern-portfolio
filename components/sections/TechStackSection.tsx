'use client';

import { motion } from 'framer-motion';

const techCategories = [
  {
    name: 'Frontend',
    color: 'text-primary',
    border: 'border-primary/30',
    bg: 'bg-primary/5',
    items: ['React', 'Next.js 15', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Three.js']
  },
  {
    name: 'Backend',
    color: 'text-emerald-500',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/5',
    items: ['Node.js', 'Express', 'Python (FastAPI)', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    name: 'Tools & DevOps',
    color: 'text-accent',
    border: 'border-accent/30',
    bg: 'bg-accent/5',
    items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'Jest']
  }
];

export default function TechStackSection() {
  return (
    <section id="tech" className="section-padding relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 dark:from-primary/10 to-transparent skew-x-12 transform origin-top-right -z-10" />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-grotesk font-bold text-textMain mb-6"
          >
            My Tech <span className="gradient-text">Arsenal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted font-inter max-w-2xl mx-auto"
          >
            I always choose the right tool for the job. Here are the technologies I work with to bring ideas to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`p-8 rounded-[2rem] border ${category.border} dark:bg-white/5 ${category.bg} shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group`}
            >
              <div className={`absolute -right-10 -top-10 w-40 h-40 ${category.bg} rounded-full blur-3xl group-hover:bg-opacity-80 transition-all duration-700`} />
              
              <h3 className={`text-2xl font-grotesk font-bold ${category.color} mb-8 relative z-10`}>
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="px-4 py-2 bg-background dark:bg-white/5 rounded-xl text-textMain font-medium font-inter shadow-sm border border-gray-100 dark:border-white/10 hover:border-primary/30 dark:hover:border-primary/50 transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
