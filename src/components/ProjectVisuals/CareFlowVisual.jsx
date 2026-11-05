import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  CheckCircle2, 
  Database, 
  Clock, 
  FileCheck2, 
  AlertCircle, 
  ShieldCheck, 
  Calendar 
} from 'lucide-react';

export default function CareFlowVisual() {
  const [activeSlot, setActiveSlot] = useState(0);

  const testMatrix = [
    { type: 'BVA Boundary Min', slot: '08:00 AM', result: 'VALID', status: 'PASS', detail: 'Earliest clinic start time' },
    { type: 'BVA Boundary Max', slot: '08:00 PM', result: 'VALID', status: 'PASS', detail: 'Latest evening slot' },
    { type: 'Invalid Boundary', slot: '07:59 AM', result: 'REJECTED', status: 'PASS', detail: 'Clinic closed, edge defect caught' },
    { type: 'EP Invalid Overlap', slot: '10:30 AM', result: 'CONFLICT', status: 'PASS', detail: 'Double-booking prevention' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlot((prev) => (prev + 1) % testMatrix.length);
    }, 1800);
    return () => clearInterval(timer);
  }, [testMatrix.length]);

  return (
    <div className="w-full h-full min-h-[360px] sm:min-h-[400px] bg-[#0A0A0A]/95 rounded-2xl p-5 sm:p-6 border border-white/[0.1] relative overflow-hidden flex flex-col justify-between select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center">
            <Activity className="w-4 h-4 text-teal-300" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
              <span>BVA & Equivalence Partitioning Test Harness</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-[10px] font-mono text-zinc-400">CareFlow Hospital ERP • Selenium + MySQL Assertions</div>
          </div>
        </div>

        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono text-teal-300 bg-teal-500/10 border border-teal-500/20 font-semibold">
          QA Analyst
        </span>
      </div>

      {/* Middle Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 my-auto">
        
        {/* Left: BVA & EP Matrix Table */}
        <div className="sm:col-span-6 bg-white/[0.03] border border-white/[0.08] rounded-xl p-3.5 flex flex-col justify-between space-y-2.5">
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
            <span className="text-teal-300 font-semibold uppercase">Appointment Slot Test Design</span>
            <span>BVA & EP Logic</span>
          </div>

          <div className="space-y-1.5">
            {testMatrix.map((item, idx) => {
              const isCurrent = activeSlot === idx;
              return (
                <div
                  key={idx}
                  className={`p-2 rounded-lg text-[10px] font-mono flex items-center justify-between transition-all ${
                    isCurrent
                      ? 'bg-teal-500/20 border border-teal-500/40 text-teal-200'
                      : 'bg-white/[0.02] text-zinc-400'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <div>
                      <div className="font-semibold text-zinc-200">{item.slot} — {item.type}</div>
                      <div className="text-[9px] text-zinc-400">{item.detail}</div>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-bold shrink-0">{item.result}</span>
                </div>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-zinc-400">
            <span>Schedule Conflict Engine</span>
            <span className="text-emerald-400 font-semibold">Zero Overlap</span>
          </div>
        </div>

        {/* Right: Selenium Automated Flow + Database Assertion */}
        <div className="sm:col-span-6 bg-[#050505] border border-white/[0.08] rounded-xl p-3.5 flex flex-col justify-between space-y-2.5">
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pb-1 border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>Selenium UI Automation</span>
            </div>
            <span className="text-teal-400">E2E Flow PASS</span>
          </div>

          <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono space-y-1.5 text-zinc-300">
            <div className="text-[10px] text-teal-400">Automated Patient Registration</div>
            <div className="text-zinc-400 text-[10px]">
              driver.findElement(By.id("patient_dob")).sendKeys("1998-05-14");
            </div>
            <div className="text-zinc-400 text-[10px]">
              driver.findElement(By.id("book_slot")).click();
            </div>
            <div className="text-emerald-400 text-[10px]">
              assert appointmentConfirmationModal.isDisplayed();
            </div>
          </div>

          {/* MySQL Assertion Box */}
          <div className="p-2.5 rounded-lg bg-teal-950/20 border border-teal-500/20 space-y-1 text-[10px] font-mono">
            <div className="flex items-center justify-between text-teal-300">
              <span className="flex items-center gap-1">
                <Database className="w-3 h-3 text-teal-400" />
                <span>Backend Database Assertion</span>
              </span>
              <span className="text-emerald-400 font-bold">MATCH</span>
            </div>
            <div className="text-zinc-400 truncate">
              SELECT status, doctor_id FROM appointments WHERE id = 7820;
            </div>
            <div className="text-emerald-300 text-[9px]">
              Output: status='CONFIRMED', doctor_id='DR-104' (100% Data Integrity)
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer Details */}
      <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-400">
        <span className="flex items-center gap-1.5">
          <FileCheck2 className="w-3.5 h-3.5 text-teal-400" />
          <span>Requirement Traceability Matrix (RTM) Covered</span>
        </span>
        <span className="text-zinc-400">Spring Boot + React + MySQL</span>
      </div>
    </div>
  );
}
