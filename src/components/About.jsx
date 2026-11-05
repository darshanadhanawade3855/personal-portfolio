import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Database, 
  Sparkles, 
  Code2, 
  Terminal 
} from 'lucide-react';
import { personalInfo, statistics, educationList } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow & Heading */}
        <div className="space-y-4 max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest text-purple-400 uppercase font-semibold inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20"
          >
            01 — PROFILE & EDUCATION
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Quality-Driven Engineering. <br className="hidden sm:block" />
            <span className="text-zinc-400">Zero-Compromise Reliability.</span>
          </motion.h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Narrative & Statistics */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal"
            >
              <p>
                {personalInfo.aboutParagraph}
              </p>
              <p className="text-zinc-400 text-sm sm:text-base">
                {personalInfo.heroDescription}
              </p>
            </motion.div>

            {/* Core Competency Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2.5 pt-1"
            >
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Engineering Core Competencies
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Manual & Exploratory QA',
                  'Selenium WebDriver Automation',
                  'TestNG & Data-Driven POM',
                  'Postman REST API Assertions',
                  'SQL Database Validations',
                  'Flutter Mobile App QA',
                  'Android Keystore Signing & AAB',
                  'Generative AI Evaluation & BVA',
                  'Jira Defect Lifecycle & RCA',
                ].map((pill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-300 bg-white/[0.04] border border-white/[0.08] hover:border-purple-500/40 hover:text-white transition-colors"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Portfolio Highlight Statistics (4 cards) */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="glass-card rounded-2xl p-5 border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-purple-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mt-1.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 line-clamp-2">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Education Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 pb-2">
              <GraduationCap className="w-5 h-5 text-purple-400" />
              <h3 className="font-display text-xl font-bold text-white tracking-tight">
                Academic Qualifications
              </h3>
            </div>

            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="glass-card rounded-2xl p-6 border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Accent Top Border Bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/60 via-sky-500/50 to-transparent" />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 mb-2">
                        {edu.period}
                      </span>
                      <h4 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-medium text-zinc-300 mt-1">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {edu.university}
                      </p>
                    </div>

                    <div className="shrink-0 text-right">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
                        {edu.score}
                      </span>
                      <p className="text-[11px] text-zinc-400 mt-1 font-mono">
                        {edu.status}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-1.5">
                    {edu.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}