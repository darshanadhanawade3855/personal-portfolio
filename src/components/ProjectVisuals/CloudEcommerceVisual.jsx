import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Server, Database, CheckCircle2, Play, Terminal, Shield, Zap, Activity } from 'lucide-react';

export default function CloudEcommerceVisual() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { name: 'LoginPage.loginAsUser("darshana@qa.test")', tool: 'Selenium POM', result: '200 OK', time: '1.1s' },
    { name: 'ProductCatalogPage.searchAndFilter("Headphones")', tool: 'Selenium POM', result: 'DOM Verified', time: '0.8s' },
    { name: 'CartPage.addItemAndVerifyState()', tool: 'Selenium POM', result: 'State Sync', time: '0.9s' },
    { name: 'POST /api/v1/orders/checkout [Postman REST]', tool: 'Postman API', result: '201 Created', time: '142ms' },
    { name: 'JMeter Load: 50 concurrent threads', tool: 'Apache JMeter', result: 'Avg 98ms / 0% err', time: '5.0s' },
    { name: 'SELECT status FROM orders WHERE id=4081 [SQL]', tool: 'MySQL Query', result: 'PLACED (1 row)', time: '12ms' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1700);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="w-full h-full min-h-[360px] sm:min-h-[400px] bg-[#0A0A0A]/95 rounded-2xl p-5 sm:p-6 border border-white/[0.1] relative overflow-hidden flex flex-col justify-between select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center">
            <Server className="w-4 h-4 text-sky-300" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
              <span>Selenium WebDriver + TestNG Automation Engine</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <div className="text-[10px] font-mono text-zinc-400">Page Object Model (POM) • 50+ E2E Test Cases</div>
          </div>
        </div>

        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono text-sky-300 bg-sky-500/10 border border-sky-500/20 font-semibold">
          Maven TestNG
        </span>
      </div>

      {/* Main Grid: POM Architecture & Test Execution Console */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 my-auto">
        
        {/* Left: POM Architecture Hierarchy */}
        <div className="sm:col-span-5 bg-white/[0.03] border border-white/[0.08] rounded-xl p-3.5 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="text-[10px] font-mono uppercase text-zinc-400 flex items-center justify-between">
              <span>POM Class Hierarchy</span>
              <span className="text-sky-400">Design Pattern</span>
            </div>

            <div className="space-y-1.5 font-mono text-[11px]">
              <div className="p-1.5 rounded bg-sky-950/30 border border-sky-500/20 text-sky-200 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>BaseTest.java (Driver Setup)</span>
              </div>
              <div className="p-1.5 rounded bg-white/[0.02] border border-white/[0.05] text-zinc-300 pl-3">
                <span>↳ LoginPage.java</span>
              </div>
              <div className="p-1.5 rounded bg-white/[0.02] border border-white/[0.05] text-zinc-300 pl-3">
                <span>↳ ProductCatalogPage.java</span>
              </div>
              <div className="p-1.5 rounded bg-white/[0.02] border border-white/[0.05] text-zinc-300 pl-3">
                <span>↳ CheckoutE2ETest.java</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-400">
            <span>Data-Driven Provider</span>
            <span className="text-emerald-400">@DataProvider (Excel/JSON)</span>
          </div>
        </div>

        {/* Right: Live Automated Assertion Execution */}
        <div className="sm:col-span-7 bg-[#050505] border border-white/[0.08] rounded-xl p-3.5 flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pb-1 border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              <span>mvn test -DsuiteXmlFile=testng.xml</span>
            </div>
            <span className="text-emerald-400 font-bold">50 Tests PASS</span>
          </div>

          <div className="space-y-1.5">
            {steps.map((st, idx) => {
              const isCurrent = activeStep === idx;
              return (
                <div
                  key={idx}
                  className={`p-1.5 rounded-lg text-[10px] font-mono flex items-center justify-between transition-all ${
                    isCurrent
                      ? 'bg-sky-500/20 border border-sky-500/40 text-sky-200'
                      : 'bg-white/[0.02] text-zinc-400'
                  }`}
                >
                  <div className="flex items-center gap-1.5 truncate pr-2">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{st.name}</span>
                  </div>
                  <span className="text-zinc-500 shrink-0">{st.time}</span>
                </div>
              );
            })}
          </div>

          {/* JMeter & MySQL Metric Badges */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.06] text-[10px] font-mono">
            <div className="p-1.5 rounded bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
              <span className="text-zinc-400">JMeter Concurrency</span>
              <span className="text-sky-300 font-bold">50 Users</span>
            </div>
            <div className="p-1.5 rounded bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
              <span className="text-zinc-400">MySQL Assertion</span>
              <span className="text-emerald-300 font-bold">100% Verified</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer Details */}
      <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-400">
        <span className="flex items-center gap-1.5">
          <Database className="w-3.5 h-3.5 text-sky-400" />
          <span>Postman REST APIs Verified (Status Codes, Payloads)</span>
        </span>
        <span className="text-zinc-400">Spring Boot Microservices</span>
      </div>
    </div>
  );
}