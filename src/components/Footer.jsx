import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#050505] pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/[0.06]">
          
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-sky-500 flex items-center justify-center text-white font-mono text-xs font-bold">
              D
            </span>
            <span className="font-display font-bold text-lg text-white">
              Darshana<span className="text-purple-400">.</span>
            </span>
          </div>

          {/* Center Message */}
          <div className="text-sm font-medium text-zinc-400 text-center font-mono text-xs sm:text-sm">
            Software Quality Assurance Engineer • Full-Stack & Mobile Developer
          </div>

          {/* Right Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
              aria-label="Darshana Dhanawade GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
              aria-label="Darshana Dhanawade LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.contactEmail}`}
              className="p-2 rounded-xl text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-colors"
              aria-label="Send email to Darshana Dhanawade"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Sub-Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © 2026 {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Built with precision & high QA standards.</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-zinc-400 hover:text-purple-300 transition-colors"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}