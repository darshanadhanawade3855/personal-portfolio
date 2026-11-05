import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Network, Wifi, Monitor, Radio, Activity, Cpu, Share2 } from 'lucide-react';

export default function CampusNetworkVisual() {
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount((prev) => (prev + 1) % 5);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full min-h-[340px] sm:min-h-[380px] bg-[#0A0A0A]/90 rounded-2xl p-5 sm:p-6 border border-white/[0.1] relative overflow-hidden flex flex-col justify-between select-none">
      {/* Background Ambient Glow */}
      <div className="absolute -top-10 -right-10 w-60 h-60 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
            <Network className="w-4 h-4 text-emerald-300" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
              <span>NS-3 Network Simulation Engine</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-[10px] font-mono text-zinc-400">C++ Topology Script • NetAnim XML Trace</div>
          </div>
        </div>

        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
          CSMA + 802.11b/g
        </span>
      </div>

      {/* Simulated Topology Visual Canvas */}
      <div className="space-y-3.5 my-auto">
        {/* Core Router Node */}
        <div className="bg-[#121215] border border-white/[0.08] rounded-xl p-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Central Campus Core Router (Node 0)</div>
              <div className="text-[10px] font-mono text-zinc-400">PointToPoint Link • 10.1.1.0/24 Subnet</div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded">
            Routing Active
          </span>
        </div>

        {/* Two Hybrid Subnets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Subnet 1: CSMA Wired Backbone */}
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-3 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-sky-300 font-semibold flex items-center gap-1.5">
                <Monitor className="w-3.5 h-3.5" />
                <span>CSMA Wired LAN</span>
              </span>
              <span className="text-zinc-500 text-[10px]">100 Mbps Bus</span>
            </div>
            <div className="text-[11px] text-zinc-300">Computer Labs & Server Farm</div>
            <div className="flex items-center gap-1.5 pt-1">
              {['Node 1', 'Node 2', 'Node 3', 'Node 4'].map((node, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded text-[9px] font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                >
                  {node}
                </span>
              ))}
            </div>
          </div>

          {/* Subnet 2: Wireless 802.11 Mesh */}
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-3 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-emerald-300 font-semibold flex items-center gap-1.5">
                <Wifi className="w-3.5 h-3.5" />
                <span>802.11 Wi-Fi BSS</span>
              </span>
              <span className="text-zinc-500 text-[10px]">Mobility Model</span>
            </div>
            <div className="text-[11px] text-zinc-300">Campus AP & Mobile Devices</div>
            <div className="flex items-center gap-1.5 pt-1">
              {['AP Node', 'STA 1', 'STA 2', 'STA 3'].map((sta, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                >
                  {sta}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Network Telemetry Scorecard */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-[#0e0e11] border border-white/[0.06] rounded-lg p-2 text-center">
            <div className="text-[9px] font-mono text-zinc-400">Packet Delivery Ratio</div>
            <div className="text-xs font-bold text-emerald-300 font-mono mt-0.5">98.4%</div>
          </div>
          <div className="bg-[#0e0e11] border border-white/[0.06] rounded-lg p-2 text-center">
            <div className="text-[9px] font-mono text-zinc-400">Throughput</div>
            <div className="text-xs font-bold text-sky-300 font-mono mt-0.5">84.2 Mbps</div>
          </div>
          <div className="bg-[#0e0e11] border border-white/[0.06] rounded-lg p-2 text-center">
            <div className="text-[9px] font-mono text-zinc-400">Avg Jitter / Delay</div>
            <div className="text-xs font-bold text-purple-300 font-mono mt-0.5">3.8 ms</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-500">
        <span>NetAnim XML Animation Trace</span>
        <span className="text-emerald-400">NS-3.38 Simulation</span>
      </div>
    </div>
  );
}
