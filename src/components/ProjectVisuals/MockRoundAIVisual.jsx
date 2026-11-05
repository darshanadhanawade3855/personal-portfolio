import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  AlertTriangle, 
  Lock, 
  Terminal, 
  BarChart3,
  FileCheck2
} from 'lucide-react';

export default function MockRoundAIVisual() {
  const [activeCheck, setActiveCheck] = useState(0);

  const evaluationMatrix = [
    { metric: 'AI Hallucination Rate', score: '< 0.8%', status: 'PASS', target: 'Threshold < 2%' },
    { metric: 'Feedback Consistency', score: '97.2%', status: 'PASS', target: 'Consistency Index' },
    { metric: 'Resume Rubric Accuracy', score: '96.5%', status: 'PASS', target: 'Ground-Truth Match' },
    { metric: 'JWT Token Lifecyle QA', score: '100% OK', status: 'PASS', target: 'Header & Bearer Auth' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCheck((prev) => (prev + 1) % evaluationMatrix.length);
    }, 1900);
    return () => clearInterval(timer);
  }, [evaluationMatrix.length]);

  return (
    <div className="w-full h-full min-h-[360px] sm:min-h-[400px] bg-[#0A0A0A]/95 rounded-2xl p-5 sm:p-6 border border-white/[0.1] relative overflow-hidden flex flex-col justify-between select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
            <Bot className="w-4 h-4 text-purple-300" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
              <span>AI Evaluation & QA Testing Harness</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-[10px] font-mono text-zinc-400">Selenium TestNG • Hallucination Benchmarks • Postman JWT</div>
          </div>
        </div>

        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20 font-semibold">
          AI QA Specialist
        </span>
      </div>

      {/* Middle Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 my-auto">
        
        {/* Left: AI Question Evaluation Dataset Verification */}
        <div className="sm:col-span-6 bg-white/[0.03] border border-white/[0.08] rounded-xl p-3.5 flex flex-col justify-between space-y-3">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
              <span className="text-purple-400 uppercase font-semibold">Evaluation Dataset Benchmark</span>
              <span>N=500 Prompts</span>
            </div>

            <div className="p-2.5 rounded-lg bg-black/60 border border-white/[0.08] space-y-1 text-xs font-mono">
              <div className="text-[10px] text-zinc-400 flex items-center justify-between">
                <span>Prompt: Java Spring Microservices</span>
                <span className="text-emerald-400">Valid</span>
              </div>
              <p className="text-[11px] text-zinc-200 line-clamp-2">
                "Verified rubric scoring consistency across 5 iterations without hallucinated API endpoints."
              </p>
            </div>
          </div>

          {/* Hallucination / Accuracy Gauges */}
          <div className="grid grid-cols-2 gap-2 text-center font-mono">
            <div className="p-2 rounded bg-purple-950/30 border border-purple-500/20">
              <div className="text-[9px] text-zinc-400">Accuracy Score</div>
              <div className="text-sm font-bold text-purple-300 mt-0.5">97.4%</div>
            </div>
            <div className="p-2 rounded bg-emerald-950/30 border border-emerald-500/20">
              <div className="text-[9px] text-zinc-400">Consistency Check</div>
              <div className="text-sm font-bold text-emerald-300 mt-0.5">98.1%</div>
            </div>
          </div>
        </div>

        {/* Right: Automated Selenium & Postman JWT Workflow */}
        <div className="sm:col-span-6 bg-[#050505] border border-white/[0.08] rounded-xl p-3.5 flex flex-col justify-between space-y-2.5">
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pb-1 border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <Lock className="w-3 h-3 text-purple-400" />
              <span>JWT & Selenium Session Suite</span>
            </div>
            <span className="text-emerald-400">Jira: All Resolved</span>
          </div>

          <div className="space-y-1.5">
            {evaluationMatrix.map((item, idx) => {
              const isCurrent = activeCheck === idx;
              return (
                <div
                  key={idx}
                  className={`p-2 rounded-lg text-[10px] font-mono flex items-center justify-between transition-all ${
                    isCurrent
                      ? 'bg-purple-500/20 border border-purple-500/40 text-purple-200'
                      : 'bg-white/[0.02] text-zinc-400'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>{item.metric}</span>
                  </div>
                  <span className="text-emerald-400 font-bold">{item.score}</span>
                </div>
              );
            })}
          </div>

          <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono flex items-center justify-between text-zinc-400">
            <span>Postman Auth Header:</span>
            <span className="text-purple-300 truncate max-w-[130px]">Bearer eyJhbGciOi...</span>
          </div>
        </div>

      </div>

      {/* Bottom Footer Details */}
      <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-400">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
          <span>Automated Selenium WebDriver Interview Flows</span>
        </span>
        <span className="text-zinc-400">Jira Defect Cycle Closed</span>
      </div>
    </div>
  );
}