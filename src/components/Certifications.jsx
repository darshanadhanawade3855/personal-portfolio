import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  BookOpen, 
  Calendar, 
  Star, 
  Sparkles,
  ExternalLink,
  Cpu,
  GraduationCap
} from 'lucide-react';
import { certificationsList, workshopsList } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* SECTION 1: VERIFIED CERTIFICATIONS */}
        <div>
          <div className="space-y-4 max-w-3xl mb-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-widest text-purple-400 uppercase font-semibold inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20"
            >
              05 — CERTIFICATIONS & CREDENTIALS
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
            >
              Industry Credentials & Specializations.
            </motion.h2>
            <p className="text-base text-zinc-400 max-w-2xl font-normal">
              Accredited certifications spanning Software Quality Assurance (QSpiders), Generative AI Fluency (NASSCOM FutureSkills Prime), Relational Data Analytics, and NPTEL Software Engineering.
            </p>
          </div>

          {/* Certifications Grid (2x3 or 3x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsList.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] relative overflow-hidden"
              >
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/40 via-sky-500/40 to-transparent" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20">
                      {cert.tag}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-purple-200 transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-semibold text-purple-400 font-mono mb-3">
                    {cert.issuer}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="flex items-center gap-1.5 text-zinc-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{cert.badge || 'Verified Credential'}</span>
                  </span>
                  <span className="text-emerald-400/90 font-medium">Completed</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 2: WORKSHOPS & ADVANCED LABS */}
        <div className="space-y-8">
          <div className="flex items-center gap-2.5 pb-2 border-b border-white/[0.08]">
            <BookOpen className="w-5 h-5 text-purple-400" />
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
              Workshops Attended & Practical Labs
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshopsList.map((ws, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20">
                      {ws.focus}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-zinc-300 bg-white/[0.04] border border-white/[0.08] shrink-0">
                      <Calendar className="w-3 h-3 text-purple-400" />
                      <span>{ws.date}</span>
                    </span>
                  </div>

                  <h4 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                    "{ws.title}"
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 font-mono">
                    {ws.organization}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {ws.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Hands-on Implementation</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}