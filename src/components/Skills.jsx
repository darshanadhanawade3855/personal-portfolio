import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Layers,
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Layers: Layers,
  CheckCircle2: CheckCircle2,
  Code2: Code2,
  Server: Server,
  Layout: Layout,
  Database: Database,
  Terminal: Terminal,
  Cpu: Cpu,
  Sparkles: Sparkles,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allSkills = skillCategories
    .filter((cat) => cat.id !== 'all')
    .flatMap((cat) =>
      cat.skills.map((skill) => ({
        name: skill,
        category: cat.name,
        categoryId: cat.id,
      }))
    );

  // Deduplicate skills by name
  const uniqueSkills = Array.from(
    new Map(allSkills.map((item) => [item.name, item])).values()
  );

  const displayedCategories =
    selectedCategory === 'all'
      ? skillCategories.filter((c) => c.id !== 'all')
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-widest text-purple-400 uppercase font-semibold inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20"
            >
              03 — TECHNICAL SKILLS MATRIX
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
            >
              QA Automation, APIs & <br className="hidden sm:block" />
              <span className="text-zinc-400">Full-Stack Engineering.</span>
            </motion.h2>
          </div>

          {/* Quick Counter Badges */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <div className="text-xs font-mono text-zinc-300 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-full">
              <span className="text-purple-400 font-semibold">{uniqueSkills.length}</span> Verified Competencies
            </div>
            <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-2 rounded-full flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>ATS-Aligned</span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none no-scrollbar">
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Layers;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/40 shadow-[0_0_15px_rgba(139,92,246,0.25)]'
                    : 'bg-white/[0.04] text-zinc-400 border border-white/[0.08] hover:text-zinc-200 hover:bg-white/[0.08]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-purple-400' : 'text-zinc-400'}`} />
                <span>{cat.name}</span>
                {cat.skills && (
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isSelected ? 'bg-purple-500/30 text-purple-200' : 'bg-white/[0.06] text-zinc-400'
                  }`}>
                    {cat.skills.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category, catIdx) => {
              const Icon = iconMap[category.icon] || Layers;
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: catIdx * 0.05 }}
                  className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
                >
                  <div>
                    {/* Category Title & Badge */}
                    <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-white/[0.06]">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-display text-sm font-bold tracking-wide uppercase text-zinc-200 group-hover:text-white transition-colors">
                            {category.name}
                          </h3>
                          <span className="text-[11px] font-mono text-purple-400">
                            {category.badge || 'Technical Pillar'}
                          </span>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.08]">
                        {category.skills.length} items
                      </span>
                    </div>

                    {/* Skill Badges / Pills */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-200 bg-white/[0.03] border border-white/[0.07] hover:border-purple-400/50 hover:bg-purple-500/15 hover:text-purple-200 transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="mt-6 pt-3.5 border-t border-white/[0.05] text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Certified & Applied</span>
                    </span>
                    <span className="text-purple-400/90 font-medium">Production-Ready</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}