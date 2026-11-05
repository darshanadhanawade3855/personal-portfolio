import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, Sparkles, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-lg font-bold tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-lg px-1"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-sky-500 flex items-center justify-center text-white font-mono text-sm font-semibold shadow-glow-violet group-hover:scale-105 transition-transform duration-300">
              D
            </span>
            <span className="font-display tracking-tight text-lg text-white group-hover:text-purple-300 transition-colors">
              Darshana<span className="text-purple-400">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full border border-white/[0.08]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-white/[0.1] rounded-full border border-white/[0.12] shadow-sm -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl || personalInfo.resumePath}
              download="Darshana_Dhanawade_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] hover:border-purple-500/50 rounded-full transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              <FileDown className="w-3.5 h-3.5 text-purple-400 group-hover:translate-y-0.5 transition-transform duration-200" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-xl text-zinc-300 hover:text-white bg-white/[0.05] border border-white/[0.08] focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[65px] z-40 p-4 md:hidden"
          >
            <div className="glass-card rounded-2xl p-5 border border-white/[0.12] bg-[#0A0A0A]/95 shadow-2xl space-y-4">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-purple-600/15 text-purple-300 border border-purple-500/30'
                          : 'text-zinc-300 hover:text-white hover:bg-white/[0.05]'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </nav>

              <div className="pt-2 border-t border-white/[0.08]">
                <a
                  href={personalInfo.resumeUrl || personalInfo.resumePath}
                  download="Darshana_Dhanawade_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-md"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}