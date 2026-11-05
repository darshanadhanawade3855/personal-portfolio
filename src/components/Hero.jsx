import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  Sparkles, 
  ChevronDown, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Terminal, 
  Cpu 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Headline & Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7"
          >
            {/* Top Eyebrow Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase text-purple-300 bg-purple-500/10 border border-purple-500/25 backdrop-blur-md shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>{personalInfo.eyebrow}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-zinc-300 bg-white/[0.04] border border-white/[0.1] backdrop-blur-md"
              >
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{personalInfo.location}</span>
              </motion.div>
            </div>

            {/* Introduction & Name */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-sm sm:text-base font-semibold tracking-wide text-zinc-400 font-mono"
              >
                Hi, I'm <span className="text-white font-bold">{personalInfo.name}</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-extrabold tracking-tight text-white leading-[1.08]"
              >
                Engineering <br className="hidden sm:inline" />
                <span className="accent-gradient-text">High-Reliability</span> <br className="hidden sm:inline" />
                Software & Test Automation.
              </motion.h1>
            </div>

            {/* Sub-role description / ATS Keywords */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="inline-block px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm font-mono text-purple-200"
            >
              {personalInfo.role}
            </motion.div>

            {/* Description Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-2xl"
            >
              {personalInfo.supportingText}
            </motion.p>

            {/* Core Competency Micro-Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {[
                'Selenium WebDriver',
                'TestNG & POM',
                'Manual Testing & STLC',
                'Postman REST Validation',
                'SQL Assertions',
                'Flutter & Mobile QA',
                'Jira Defect Lifecycle',
              ].map((pill, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-300 bg-white/[0.03] border border-white/[0.07]"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 hover:from-purple-500 hover:via-indigo-500 hover:to-sky-500 shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300 transform active:scale-95"
              >
                <span>Explore QA Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <a
                href={personalInfo.resumeUrl || personalInfo.resumePath}
                download="Darshana_Dhanawade_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-sm font-medium text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] hover:border-white/[0.25] transition-all duration-300 backdrop-blur-md active:scale-95 shadow-sm"
              >
                <FileDown className="w-4 h-4 text-purple-400 group-hover:translate-y-0.5 transition-transform duration-200" />
                <span>Download Resume</span>
              </a>

              {/* Quick Social Icons */}
              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.1] transition-all"
                  aria-label="Darshana Dhanawade LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.1] transition-all"
                  aria-label="Darshana Dhanawade GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Authentic Portrait Card with QA Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            {/* Ambient Radial Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-sky-500/25 rounded-3xl blur-3xl -z-10 transform scale-95" />

            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Outer Glass Card Border */}
              <div className="relative rounded-3xl p-3 sm:p-3.5 bg-gradient-to-b from-white/[0.16] via-white/[0.06] to-transparent border border-white/[0.14] shadow-2xl backdrop-blur-md transition-all duration-500 group-hover:border-purple-500/40 group-hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)]">
                
                {/* Photo Container */}
                <div className="relative aspect-[4/4.7] w-full overflow-hidden rounded-2xl bg-zinc-900">
                  <img
                    src={personalInfo.photoPath}
                    alt="Darshana Dhanawade Software QA Engineer profile photo"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Overlays on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80" />

                  {/* Top-Right Floating QA Tag */}
                  <div className="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium text-emerald-300 bg-black/60 border border-emerald-500/30 backdrop-blur-md shadow-lg">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>QSpiders QA Certified</span>
                  </div>

                  {/* In-Image Bottom Metric Pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/[0.1] text-xs space-y-1">
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="text-zinc-300">Automated Test Suites</span>
                      <span className="text-emerald-400 font-bold">130+ Passed</span>
                    </div>
                    <div className="w-full bg-white/[0.1] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-purple-500 to-emerald-400 h-full w-[98%]" />
                    </div>
                  </div>
                </div>

                {/* Floating "Available for Opportunities" Status Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-medium text-white bg-[#0D0D0D]/95 border border-white/[0.16] shadow-xl backdrop-blur-xl transition-transform duration-300 group-hover:scale-105 whitespace-nowrap">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="tracking-wide text-zinc-200">{personalInfo.availabilityBadge}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 sm:mt-20 flex justify-center"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center gap-2 text-xs font-mono tracking-widest text-zinc-500 hover:text-zinc-300 transition-colors uppercase"
            aria-label="Scroll to explore"
          >
            <span>Explore Experience & QA Deliverables</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-purple-400" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}