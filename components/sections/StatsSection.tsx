'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const stats = [
  { label: 'Projects Completed', value: 15, suffix: '+', color: 'from-primary to-blue-400', shadow: 'shadow-glow-blue' },
  { label: 'Lines of Code', value: 100, suffix: 'k+', color: 'from-secondary to-purple-400', shadow: 'shadow-glow-violet' },
  { label: 'GitHub Commits', value: 850, suffix: '+', color: 'from-accent to-orange-400', shadow: 'shadow-glow-orange' },
  { label: 'Cups of Coffee', value: 404, suffix: '', color: 'from-cyan-500 to-teal-400', shadow: 'shadow-glow-cyan' },
];

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(Math.round(latest));
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
}

export default function StatsSection() {
  return (
    <section className="py-20 relative z-10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group p-6 sm:p-8 rounded-[2rem] bg-background dark:bg-white/5 border border-gray-200 dark:border-white/20 flex flex-col items-center justify-center text-center overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-[0.03] dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`} />
              
              <div className="font-grotesk font-bold text-4xl sm:text-5xl md:text-6xl text-textMain mb-2 group-hover:text-primary transition-colors flex items-center">
                <AnimatedCounter value={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              
              <div className="text-sm sm:text-base font-inter font-medium text-muted uppercase tracking-wider relative z-10">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
