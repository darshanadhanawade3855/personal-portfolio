import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Layers, Terminal, ChevronRight, Info, CheckCircle2, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsList } from '../data/portfolioData';
import MathXProVisual from './ProjectVisuals/MathXProVisual';
import CloudEcommerceVisual from './ProjectVisuals/CloudEcommerceVisual';
import MockRoundAIVisual from './ProjectVisuals/MockRoundAIVisual';
import CareFlowVisual from './ProjectVisuals/CareFlowVisual';
import SmartTutorsVisual from './ProjectVisuals/SmartTutorsVisual';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const renderProjectVisual = (visualType) => {
    switch (visualType) {
      case 'mathx-qa':
        return <MathXProVisual />;
      case 'ecommerce-qa':
        return <CloudEcommerceVisual />;
      case 'ai-qa':
        return <MockRoundAIVisual />;
      case 'careflow-qa':
        return <CareFlowVisual />;
      case 'smarttutors-qa':
        return <SmartTutorsVisual />;
      default:
        return <MockRoundAIVisual />;
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono tracking-widest text-purple-400 uppercase font-semibold inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20"
          >
            04 — FEATURED PROJECTS & QA DELIVERABLES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Verified Systems & Test Suites.
          </motion.h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal">
            Real-world projects showcasing automated testing frameworks (Selenium, TestNG, POM), REST API assertion pipelines, boundary test design, and full-stack software development.
          </p>
        </div>

        {/* Editorial Project Cards Stack */}
        <div className="space-y-16 sm:space-y-24">
          {projectsList.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-[#0D0D0D]/90 border border-white/[0.08] hover:border-purple-500/30 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(139,92,246,0.15)]"
              >
                {/* Subtle Card Glow Effect */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/[0.04] rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/[0.08] transition-colors duration-500" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Text & Metadata Column */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {/* Eyebrow & Category */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-purple-300 bg-purple-500/15 border border-purple-500/30 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-zinc-500">
                        Project 0{index + 1}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-1.5">
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-purple-200 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-purple-400 font-mono">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                      {project.summary}
                    </p>

                    {/* Detailed Testing Deliverables Box */}
                    {project.testingDeliverables && (
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 sm:p-5 space-y-2.5">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          <span>Key Testing & QA Deliverables</span>
                        </div>
                        <ul className="space-y-2">
                          {project.testingDeliverables.map((del, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Key Technical Metric Chips */}
                    <div className="grid grid-cols-3 gap-2.5 pt-1">
                      {project.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-2.5"
                        >
                          <div className="text-[10px] font-mono text-zinc-400 uppercase">
                            {metric.label}
                          </div>
                          <div className="text-xs font-semibold text-zinc-200 mt-0.5 truncate">
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.slice(0, 7).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono text-zinc-300 bg-white/[0.04] border border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 7 && (
                        <span className="px-2 py-1 rounded-lg text-xs font-mono text-zinc-400 bg-white/[0.02] border border-white/[0.05]">
                          +{project.technologies.length - 7} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={() => handleOpenModal(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] hover:border-purple-400/40 transition-all duration-300 active:scale-95 shadow-sm"
                      >
                        <Info className="w-4 h-4 text-purple-400" />
                        <span>QA Specs & Architecture</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-zinc-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 active:scale-95"
                      >
                        <GithubIcon className="w-4 h-4 text-zinc-300" />
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                      </a>
                    </div>
                  </div>

                  {/* Dynamic Product Visual Column */}
                  <div
                    className={`lg:col-span-6 w-full ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="relative group/visual rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                      {renderProjectVisual(project.visualType)}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}