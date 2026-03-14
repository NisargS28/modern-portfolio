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
      className={`fixed top-4 left-0 right-0 z-50 mx-auto transition-all duration-500 ${
        scrolled
          ? 'max-w-5xl glass rounded-2xl shadow-glass px-6 py-3'
          : 'max-w-6xl bg-transparent px-6 py-4'
      }`}
    >
      {/* 3-column grid: LEFT=links  CENTER=logo  RIGHT=icons */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">

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
        <span className="md:hidden" />

        {/* ── CENTER: Logo ── */}
        <Link
          href="#hero"
          onClick={() => handleNavClick('#hero')}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-grotesk font-bold text-sm shadow-glow-blue group-hover:scale-110 transition-transform duration-300">
            N
          </div>
          <span className="font-grotesk font-semibold text-textMain text-base tracking-tight">
            Nisarg<span className="text-primary">.</span>
          </span>
        </Link>

        {/* ── RIGHT: Socials + Theme Toggle + Mobile Hamburger ── */}
        <div className="flex items-center gap-1 justify-end">

          {/* Social Links – desktop only */}
          <div className="hidden md:flex items-center gap-1">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://twitter.com/"
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
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-all duration-200"
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
            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center text-muted hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-4 pb-3 flex flex-col gap-1 border-t border-gray-100/60 dark:border-white/10 mt-3">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-inter font-medium text-muted hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="flex items-center gap-2 px-4 pt-3 mt-1 border-t border-gray-100/60 dark:border-white/10">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-all">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-all">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
