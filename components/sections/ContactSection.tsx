'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

const socialLinks = [
  { name: 'GitHub', icon: <Github size={24} />, href: '#', color: 'hover:text-[#333]' },
  { name: 'LinkedIn', icon: <Linkedin size={24} />, href: '#', color: 'hover:text-[#0077b5]' },
  { name: 'Twitter', icon: <Twitter size={24} />, href: '#', color: 'hover:text-[#1DA1F2]' },
  { name: 'Email', icon: <Mail size={24} />, href: 'mailto:hello@example.com', color: 'hover:text-primary' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding relative z-10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
          
          {/* Contact Info */}
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-grotesk font-bold text-textMain mb-6 leading-tight"
            >
              Let's build <br className="hidden md:block" />
              something <span className="gradient-text">great.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted font-inter mb-12 max-w-md"
            >
              Currently looking for new opportunities in 2026. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              {socialLinks.map((link) => (
                <MagneticButton key={link.name}>
                  <a
                    href={link.href}
                    className={`w-14 h-14 rounded-full bg-background border border-gray-100 dark:border-white/10 shadow-sm flex items-center justify-center text-muted transition-colors ${link.color}`}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                </MagneticButton>
              ))}
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full max-w-md mx-auto lg:mx-0"
          >
            <form className="p-8 rounded-[2.5rem] bg-background border border-gray-100 dark:border-white/10 shadow-card flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-2xl font-grotesk font-bold text-textMain mb-2">Send a message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-textMain font-inter focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-textMain font-inter focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-textMain font-inter resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <MagneticButton className="w-full py-4 rounded-2xl bg-primary text-white font-bold font-inter text-lg flex items-center justify-center gap-2 hover:bg-secondary transition-colors group">
                Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </MagneticButton>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-muted font-inter text-sm font-medium">
          <p>© {new Date().getFullYear()} Nisarg Solanki. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-red-500">♥</span> using Next.js & Framer Motion
          </p>
        </div>
      </div>
    </section>
  );
}
