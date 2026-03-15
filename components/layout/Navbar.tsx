'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech', href: '#tech' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveSection(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      className={`fixed top-5 md:top-8 left-0 right-0 z-50 mx-auto transition-all duration-500 ${
        scrolled
          ? 'max-w-5xl glass border border-transparent dark:border-transparent rounded-2xl shadow-glass px-4 sm:px-6 py-3'
          : 'max-w-6xl bg-transparent px-4 sm:px-6 py-4'
      }`}
    >
      {/* 3-column grid: LEFT=links  CENTER=logo  RIGHT=icons */}
      <div className="grid grid-cols-[76px_1fr_76px] md:grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-4">

        {/* ── LEFT: Nav Links ── */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`relative px-3 py-2 text-sm font-inter font-medium rounded-xl transition-all duration-300 ${
                  activeSection === link.href
                    ? 'text-primary bg-primary/10'
                    : 'text-muted hover:text-textMain hover:bg-gray-100/60 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
        {/* Mobile spacer (left) */}
        <span className="md:hidden w-[76px]" />

        {/* ── CENTER: Logo ── */}
        <Link
          href="#hero"
          onClick={() => handleNavClick('#hero')}
          className="flex items-center gap-2 group justify-self-center"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-grotesk font-bold text-sm shadow-glow-blue group-hover:scale-110 transition-transform duration-300">
            N
          </div>
          <span className="hidden sm:inline font-grotesk font-semibold text-textMain text-base tracking-tight">
            Nisarg<span className="text-primary">.</span>
          </span>
        </Link>

        {/* ── RIGHT: Socials + Theme Toggle + Mobile Hamburger ── */}
        <div className="flex items-center gap-1 justify-end">

          {/* Social Links – desktop only */}
          <div className="hidden md:flex items-center gap-1">
            <a
              href="https://github.com/NisargS28"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/nisarg-solanki-0970aa290"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://x.com/NisargS28"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200"
            >
              <Twitter size={18} />
            </a>
            <div className="w-px h-5 bg-gray-200 dark:bg-white/10 mx-1" />
          </div>

          {/* Theme Toggle – always visible */}
          <button
            onClick={(e) => {
              setDark((d) => !d);
              (e.currentTarget as HTMLButtonElement).blur();
            }}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-muted md:hover:text-primary md:hover:bg-primary/10 active:scale-95 transition-all duration-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={dark ? 'sun' : 'moon'}
                initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Hamburger – mobile only */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center text-muted md:hover:bg-gray-100 md:dark:hover:bg-white/5 active:scale-95 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-[60]"
          >
            <div
              className="absolute inset-0 bg-black/55"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
              className="absolute right-0 top-0 h-[100dvh] w-full bg-background dark:bg-[#0B1120] shadow-2xl px-6 pt-24 pb-8 flex flex-col"
            >
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="absolute top-5 right-5 w-10 h-10 rounded-xl flex items-center justify-center text-muted bg-gray-100/70 dark:bg-white/10"
              >
                <X size={20} />
              </button>

              <div className="flex-1 flex flex-col justify-center gap-2">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-center px-4 py-3 text-lg font-inter font-semibold text-textMain hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-gray-200 dark:border-white/10 flex items-center justify-center gap-3">
                <a href="https://github.com/NisargS28" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-all">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/nisarg-solanki-0970aa290" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="https://x.com/NisargS28" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-all">
                  <Twitter size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
