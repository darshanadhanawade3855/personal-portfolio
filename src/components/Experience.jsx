import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  CheckCircle2, 
  Bug, 
  Smartphone, 
  Calendar, 
  MapPin, 
  FileCheck2, 
  Sparkles, 
  Terminal, 
  ArrowUpRight,
  ShieldCheck,
  SearchCode
} from 'lucide-react';
import { experienceList } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative z-10">
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
            02 — WORK EXPERIENCE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Engineering Practice. <br className="hidden sm:block" />
            <span className="text-zinc-400">Industry Quality Verification.</span>
          </motion.h2>
          <p className="text-sm sm:text-base text-zinc-400 font-normal max-w-2xl">
            Hands-on software QA engineering, console root cause analysis, and mobile release signing in live enterprise environments.
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-8">
          {experienceList.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/[0.1] relative overflow-hidden group shadow-2xl hover:border-purple-500/40 transition-all duration-300"
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/[0.06] rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/[0.1] transition-all" />

              {/* Header Row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{exp.type}</span>
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20">
                      QA & Release Eng
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-purple-200 transition-colors">
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-300 font-medium">
                    <span className="text-white font-semibold">{exp.company}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="flex items-center gap-1 text-zinc-400 text-xs sm:text-sm">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3.5 py-1.5 rounded-full self-start lg:self-center">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-6 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                {exp.summary}
              </p>

              {/* 3 Core Deliverable Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
                {exp.deliverables.map((item, dIdx) => {
                  const icons = [
                    <Smartphone key="1" className="w-5 h-5 text-purple-400" />,
                    <SearchCode key="2" className="w-5 h-5 text-sky-400" />,
                    <FileCheck2 key="3" className="w-5 h-5 text-emerald-400" />,
                  ];

                  return (
                    <div
                      key={dIdx}
                      className="bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.07] hover:border-purple-500/30 rounded-2xl p-5 space-y-3 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center">
                            {icons[dIdx % icons.length]}
                          </div>
                          <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider">
                            Pillar 0{dIdx + 1}
                          </span>
                        </div>

                        <div>
                          <span className="text-xs font-mono font-semibold text-purple-300 block mb-1">
                            {item.tag}
                          </span>
                          <h4 className="font-display text-sm font-bold text-white leading-snug">
                            {item.title}
                          </h4>
                        </div>

                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verified In Production</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Tech Stack Pills in Experience */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-400 mr-2 uppercase tracking-wider">
                  Tools & Environment:
                </span>
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg text-xs font-mono text-zinc-200 bg-white/[0.04] border border-white/[0.08] hover:border-purple-400/40 hover:text-purple-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
