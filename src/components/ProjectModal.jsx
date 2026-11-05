import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Sparkles, AlertCircle, ArrowUpRight, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md -z-10"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0A0A0A] border border-white/[0.14] shadow-2xl p-6 sm:p-8 space-y-6"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.1] transition-all"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-2 pr-10">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20">
                {project.category}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h2>
              <p className="text-sm font-medium text-purple-400 font-mono">
                {project.subtitle}
              </p>
            </div>

            {/* Summary */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 sm:p-5 text-sm sm:text-base text-zinc-300 leading-relaxed">
              {project.summary}
            </div>

            {/* QA Testing Deliverables Highlight Box */}
            {project.testingDeliverables && (
              <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Quality Assurance & Automated Testing Deliverables</span>
                </div>
                <ul className="space-y-2.5">
                  {project.testingDeliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-300 font-semibold">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  <span>Quality & Engineering Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="bg-purple-950/20 border border-purple-500/20 rounded-2xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Testing & Architecture Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Metrics */}
            {project.metrics && (
              <div className="space-y-2">
                <h4 className="font-display text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Verification Metrics
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 text-center">
                      <div className="text-[10px] font-mono text-zinc-400">{m.label}</div>
                      <div className="text-xs sm:text-sm font-bold text-white font-mono mt-1">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Stack Badges */}
            <div className="space-y-2.5">
              <h4 className="font-display text-xs font-mono uppercase tracking-wider text-zinc-400">
                Technologies, Test Frameworks & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-200 bg-white/[0.04] border border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Footer */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500">
                Production-verified code & test specs
              </span>
              
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all transform active:scale-95"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}