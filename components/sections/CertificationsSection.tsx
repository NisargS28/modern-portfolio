'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Dec 2024',
    icon: <Award className="text-[#FF9900]" size={32} />,
    color: 'from-[#FF9900] to-yellow-400',
    link: '#'
  },
  {
    name: 'Meta Front-End Developer',
    issuer: 'Coursera / Meta',
    date: 'Oct 2024',
    icon: <Award className="text-[#0668E1]" size={32} />,
    color: 'from-[#0668E1] to-blue-400',
    link: '#'
  },
  {
    name: 'Google Data Analytics Professional',
    issuer: 'Google',
    date: 'Aug 2024',
    icon: <Award className="text-[#0F9D58]" size={32} />,
    color: 'from-[#0F9D58] to-emerald-400',
    link: '#'
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding relative z-10 transition-colors duration-500 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-textMain mb-4">
            Licenses & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-muted font-inter max-w-2xl mx-auto md:mx-0">
            Professional credentials and continuous learning paths I've pursued to expand my technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-[2rem] bg-background dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-card hover:shadow-card-hover transition-all group overflow-hidden"
            >
              {/* Soft glow background on hover */}
              <div className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full`} />
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center shadow-sm">
                  {cert.icon}
                </div>
                
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-muted hover:text-primary transition-colors cursor-pointer"
                  aria-label="View Certificate"
                >
                  <ExternalLink size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              <div>
                <h3 className="font-grotesk font-bold text-xl text-textMain mb-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="font-inter text-muted font-medium text-sm mb-4">
                  {cert.issuer}
                </p>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-xs font-semibold text-textMain">
                  {cert.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
