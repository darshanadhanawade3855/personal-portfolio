import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Milestone, Calendar, ArrowRight } from 'lucide-react';
import { journeyMilestones } from '../data/portfolioData';

export default function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest text-purple-400 uppercase font-semibold inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20"
          >
            03 — JOURNEY
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Learning, building, <br className="hidden sm:block" />
            <span className="text-zinc-400">and evolving.</span>
          </motion.h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500/80 via-sky-500/40 to-transparent sm:-translate-x-1/2 -z-0" />

          <div className="space-y-12 sm:space-y-16">
            {journeyMilestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node (Glowing Orb) */}
                  <div className="absolute left-4 sm:left-1/2 top-1.5 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#0A0A0A] border-2 border-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 sm:ml-0 w-full sm:w-[calc(50%-2.5rem)] ${
                      isEven ? 'sm:pr-4' : 'sm:pl-4'
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-card rounded-2xl p-6 border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 group relative"
                    >
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-2xl font-extrabold text-white group-hover:text-purple-300 transition-colors">
                          {item.year}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/20">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
