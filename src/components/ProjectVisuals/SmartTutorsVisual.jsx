import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  CheckCircle2, 
  ShieldCheck, 
  KeyRound, 
  FileCheck2, 
  Terminal, 
  Layers, 
  Cpu 
} from 'lucide-react';

export default function SmartTutorsVisual() {
  const [activeCheck, setActiveCheck] = useState(0);

  const deviceMatrix = [
    { device: 'Pixel 7 Pro (Physical)', os: 'Android 14', test: 'Smoke & Gestures', status: 'PASS' },
    { device: 'Samsung Galaxy S22', os: 'Android 13', test: 'Sanity & Video Call', status: 'PASS' },
    { device: 'Nexus 5 Emulator', os: 'Android 10', test: 'Breakpoint (< 480px)', status: 'PASS' },
    { device: 'Play Console Pre-Launch', os: 'Cloud Farm', test: '0 Crashes / 0 ANRs', status: 'PASS' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCheck((prev) => (prev + 1) % deviceMatrix.length);
    }, 1800);
    return () => clearInterval(timer);
  }, [deviceMatrix.length]);

  return (
    <div className="w-full h-full min-h-[360px] sm:min-h-[400px] bg-[#0A0A0A]/95 rounded-2xl p-5 sm:p-6 border border-white/[0.1] relative overflow-hidden flex flex-col justify-between select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
            <Smartphone className="w-4 h-4 text-emerald-300" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
              <span>Android Release Signing & Verification</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-[10px] font-mono text-zinc-400">SmartTutors App • Version 1.6.0 (Build 10)</div>
          </div>
        </div>

        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 font-semibold">
          Release Sign-off
        </span>
      </div>

      {/* Middle Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 my-auto">
        
        {/* Left: Device & Emulator Matrix */}
        <div className="sm:col-span-6 bg-white/[0.03] border border-white/[0.08] rounded-xl p-3.5 flex flex-col justify-between space-y-2.5">
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
            <span className="text-emerald-400 uppercase font-semibold">Device QA Matrix</span>
            <span>Regression Suite</span>
          </div>

          <div className="space-y-1.5">
            {deviceMatrix.map((item, idx) => {
              const isCurrent = activeCheck === idx;
              return (
                <div
                  key={idx}
                  className={`p-2 rounded-lg text-[10px] font-mono flex items-center justify-between transition-all ${
                    isCurrent
                      ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-200'
                      : 'bg-white/[0.02] text-zinc-400'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <div>
                      <div className="font-semibold text-zinc-200">{item.device}</div>
                      <div className="text-[9px] text-zinc-400">{item.os} • {item.test}</div>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-bold shrink-0">{item.status}</span>
                </div>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-zinc-400">
            <span>Breakpoint Analysis</span>
            <span className="text-emerald-400 font-semibold">Zero UI Clipping</span>
          </div>
        </div>

        {/* Right: Keystore Signing & AAB Verification */}
        <div className="sm:col-span-6 bg-[#050505] border border-white/[0.08] rounded-xl p-3.5 flex flex-col justify-between space-y-2.5">
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pb-1 border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <KeyRound className="w-3.5 h-3.5 text-emerald-400" />
              <span>Android Keystore Validation</span>
            </div>
            <span className="text-emerald-400">Signed .AAB</span>
          </div>

          <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono space-y-1 text-zinc-300">
            <div className="text-[10px] text-emerald-400">jarsigner / apksigner Certificate Check</div>
            <div className="text-zinc-400 text-[10px]">
              SHA-256 Digest: 8A:92:DF:31:C4:... (Verified)
            </div>
            <div className="text-zinc-400 text-[10px]">
              Target SDK: 34 (Android 14) • Min SDK: 24
            </div>
            <div className="text-emerald-400 text-[10px]">
              V1, V2, V3 Signing Schemes: OK
            </div>
          </div>

          {/* Release Artifact Card */}
          <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-500/20 space-y-1 text-[10px] font-mono">
            <div className="flex items-center justify-between text-emerald-300">
              <span className="flex items-center gap-1">
                <FileCheck2 className="w-3 h-3 text-emerald-400" />
                <span>Google Play Console Ready</span>
              </span>
              <span className="text-emerald-400 font-bold">100% READY</span>
            </div>
            <div className="text-zinc-400 truncate">
              app-release.aab (Build: 10, v1.6.0)
            </div>
            <div className="text-emerald-300 text-[9px]">
              Pre-launch diagnostics: 0 fatal exceptions, optimal APK size
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer Details */}
      <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-400">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Physical & Emulator Matrix Regression Tested</span>
        </span>
        <span className="text-zinc-400">Android Studio + Gradle</span>
      </div>
    </div>
  );
}
