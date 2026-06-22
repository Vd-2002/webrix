"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Activity, Terminal } from "lucide-react";

export default function Introduction() {
  const introStats = [
    { label: "Average API Latency", value: "12ms", icon: Cpu, color: "#60A5FA" },
    { label: "Core Infrastructure Uptime", value: "99.99%", icon: ShieldCheck, color: "#34D399" },
    { label: "Workflow Processing Speed", value: "3.2x", icon: Activity, color: "#A78BFA" },
  ];

  return (
    <section id="introduction" className="relative z-10 scroll-mt-24 w-full">
      <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Side: Copy and Stats */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#60A5FA] bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full select-none inline-block">
              Who We Are
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display leading-[1.15]">
              Engineering the Future of{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
                High-Performance Software
              </span>
            </h2>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed font-sans max-w-2xl">
              Webrix is a premium digital engineering agency. We partner with forward-thinking businesses and startups to design, build, and scale high-performance web systems, custom cloud architectures, and intelligent workflows.
            </p>
            <p className="text-sm sm:text-base text-white/50 leading-relaxed font-sans max-w-2xl">
              Our philosophy centers on precision engineering. We skip the bulk templates and bloated frameworks, delivering clean, custom-tailored code bases optimized for sub-millisecond execution, maximum security, and infinite horizontal scalability.
            </p>
          </div>

          {/* Intro Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
            {introStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="border border-white/5 bg-[#070712]/30 backdrop-blur-sm rounded-2xl p-5 space-y-3 hover:border-white/10 transition-colors"
                >
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center border"
                    style={{
                      borderColor: `${stat.color}20`,
                      background: `linear-gradient(135deg, ${stat.color}08, transparent)`,
                      color: stat.color
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-extrabold text-white font-display">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-white/40 font-sans leading-snug">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
 
        {/* Right Side: Interactive SVGs Debugger Workstation */}
        <div className="lg:col-span-5 w-full flex items-center justify-center relative min-h-[350px]">
          <div className="absolute w-[260px] h-[260px] rounded-full bg-blue-500/5 blur-[80px] pointer-events-none -z-10" />
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-[390px] bg-[#050510]/85 border border-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-2xl relative overflow-hidden flex flex-col justify-between aspect-square"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 relative z-10">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/60" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <span className="w-2 h-2 rounded-full bg-green-500/60" />
                <span className="text-[9px] text-white/40 ml-1.5 font-mono">webrix-debugger-sys</span>
              </div>
              <span className="text-[8px] font-mono font-bold text-[#60A5FA] bg-[#60A5FA]/10 border border-[#60A5FA]/20 px-2 py-0.5 rounded-full uppercase">
                Active
              </span>
            </div>

            {/* Simulated Debug Console Lines */}
            <div className="flex-1 space-y-3 font-mono text-[9px] text-white/50 z-10 pt-2">
              <div className="flex items-start gap-2">
                <span className="text-[#A78BFA] shrink-0">[08:24:12]</span>
                <span className="text-white/80">Initiating memory optimizer pass 1...</span>
              </div>
              <div className="flex items-start gap-2 pl-3">
                <Terminal className="w-3 h-3 text-[#34D399] shrink-0 mt-0.5" />
                <span className="text-[#34D399]">Garbage collection complete: +18.4MB freed.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#A78BFA] shrink-0">[08:24:13]</span>
                <span className="text-white/80">Checking connection latency check nodes...</span>
              </div>
              <div className="flex items-center justify-between bg-white/[0.02] border border-white/5 px-2.5 py-1.5 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white/70">Edge Node: Paris, FR</span>
                </div>
                <span className="text-emerald-400 font-bold">11ms</span>
              </div>
              <div className="flex items-center justify-between bg-white/[0.02] border border-white/5 px-2.5 py-1.5 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white/70">Edge Node: New York, US</span>
                </div>
                <span className="text-emerald-400 font-bold">14ms</span>
              </div>
            </div>

            {/* Sparkline overlay */}
            <div className="h-10 mt-2 z-10">
              <svg className="w-full h-full text-[#A78BFA]" viewBox="0 0 100 30" fill="none">
                <path d="M0 25 Q 15 23, 25 15 T 45 10 T 65 14 T 80 5 T 100 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path d="M0 25 Q 15 23, 25 15 T 45 10 T 65 14 T 80 5 T 100 2 L 100 30 L 0 30 Z" fill="rgba(167, 139, 250, 0.05)" />
              </svg>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
