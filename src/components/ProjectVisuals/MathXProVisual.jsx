import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Play, ShieldCheck, Smartphone, Zap, Sparkles, Database } from 'lucide-react';

export default function MathXProVisual() {
  const [activeTestIndex, setActiveTestIndex] = useState(0);

  const tests = [
    { name: 'testWidgets("Rapid-tap boundary score calculation")', status: 'PASS', duration: '28ms' },
    { name: 'test("Riverpod practice state timer expiration at 0s")', status: 'PASS', duration: '14ms' },
    { name: 'test("Razorpay subscription flow payload assertion (₹19/mo)")', status: 'PASS', duration: '64ms' },
    { name: 'test("Supabase PostgreSQL leaderboard sync assertion")', status: 'PASS', duration: '42ms' },
    { name: 'testWidgets("GoRouter auth guard redirection test")', status: 'PASS', duration: '31ms' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestIndex((prev) => (prev + 1) % tests.length);
    }, 1800);
    return () => clearInterval(timer);
  }, [tests.length]);

  return (
    <div className="w-full h-full min-h-[360px] sm:min-h-[400px] bg-[#0A0A0A]/95 rounded-2xl p-5 sm:p-6 border border-white/[0.1] relative overflow-hidden flex flex-col justify-between select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
            <Smartphone className="w-4 h-4 text-purple-300" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
              <span>Flutter Widget & Riverpod Test Suite</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-[10px] font-mono text-zinc-400">130+ Automated Tests • 100% Passing</div>
          </div>
        </div>

        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 font-semibold">
          QA Verified
        </span>
      </div>

      {/* Simulated Flutter Device & Test Harness */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 my-auto">
        
        {/* Left: Mini Flutter UI Card */}
        <div className="sm:col-span-5 bg-white/[0.03] border border-white/[0.08] rounded-xl p-3.5 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
              <span>MathX Pro Mobile</span>
              <span className="text-purple-400">Timer: 00:15</span>
            </div>
            
            {/* Speed Math Problem Card */}
            <div className="bg-purple-950/30 border border-purple-500/30 rounded-lg p-3 text-center">
              <div className="text-[10px] font-mono text-purple-300">Question 18 / 20</div>
              <div className="text-lg font-bold font-mono text-white mt-0.5">84 ÷ 7 + 19 = ?</div>
              <div className="grid grid-cols-2 gap-1.5 mt-2.5">
                <button className="px-2 py-1 rounded bg-white/[0.06] text-xs font-mono text-zinc-300 border border-white/[0.08]">29</button>
                <button className="px-2 py-1 rounded bg-emerald-500/20 text-xs font-mono text-emerald-300 border border-emerald-500/40 font-bold">31 ✓</button>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-400">
            <span>LLM BVA Prompts</span>
            <span className="text-emerald-400 font-semibold">Boundary Edge Cases</span>
          </div>
        </div>

        {/* Right: Automated Test Execution Runner */}
        <div className="sm:col-span-7 bg-[#050505] border border-white/[0.08] rounded-xl p-3.5 space-y-2 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pb-1 border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <Play className="w-3 h-3 text-purple-400" />
              <span>flutter test test/widget_test.dart</span>
            </div>
            <span className="text-emerald-400 font-bold">130/130 Passed</span>
          </div>

          <div className="space-y-1.5">
            {tests.map((t, idx) => {
              const isCurrent = activeTestIndex === idx;
              return (
                <div
                  key={idx}
                  className={`p-1.5 rounded-lg text-[10px] font-mono flex items-center justify-between transition-all ${
                    isCurrent
                      ? 'bg-purple-500/20 border border-purple-500/40 text-purple-200'
                      : 'bg-white/[0.02] text-zinc-400'
                  }`}
                >
                  <div className="flex items-center gap-1.5 truncate pr-2">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{t.name}</span>
                  </div>
                  <span className="text-zinc-500 shrink-0">{t.duration}</span>
                </div>
              );
            })}
          </div>

          {/* Test Coverage Bar */}
          <div className="pt-2 border-t border-white/[0.06] space-y-1">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-zinc-400">Widget & State Coverage</span>
              <span className="text-emerald-400 font-semibold">97.8%</span>
            </div>
            <div className="h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-emerald-400 w-[97.8%]" />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer Details */}
      <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-400">
        <span className="flex items-center gap-1.5">
          <Database className="w-3.5 h-3.5 text-purple-400" />
          <span>Supabase DB Assertion: Leaderboard Synced</span>
        </span>
        <span className="text-zinc-400">Razorpay Webhooks (₹19/mo)</span>
      </div>
    </div>
  );
}
