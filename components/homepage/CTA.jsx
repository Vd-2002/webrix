"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal, Activity, CheckCircle2, ArrowRight, TrendingUp, Calendar, Zap, ShieldCheck } from "lucide-react";
import Button from "../ui/Button";

// High-fidelity multi-layered developer dashboard and control room widget
function DashboardHub() {
  return (
    <div className="relative w-full max-w-[460px] h-[390px] flex items-center justify-center select-none perspective-1000 group">
      {/* Immersive radial blue/purple backlighting glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-emerald-500/5 rounded-3xl blur-[40px] pointer-events-none -z-10" />

      {/* Main Base Hub Window */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="w-full h-full bg-[#050510]/85 border border-white/10 backdrop-blur-xl rounded-2xl p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between"
      >
        {/* Background Blueprint Grid Line overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "16px 16px"
          }}
        />

        {/* Window Title Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="text-[10px] text-white/40 ml-2 font-mono tracking-wider font-semibold">webrix-core-v2.config</span>
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider font-sans">Live</span>
          </div>
        </div>

        {/* Dynamic Growth Grid & Charts */}
        <div className="flex-1 relative w-full h-[150px] mb-3 z-10 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 280 140" fill="none">
            <defs>
              <linearGradient id="chartBlueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="chartGreenGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34D399" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="lineBlueGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#A78BFA" />
              </linearGradient>
            </defs>

            {/* Coordinates Grid Lines */}
            <g opacity="0.08">
              <line x1="10" y1="120" x2="270" y2="120" stroke="#fff" strokeWidth="0.75" />
              <line x1="10" y1="90" x2="270" y2="90" stroke="#fff" strokeWidth="0.5" strokeDasharray="3 3" />
              <line x1="10" y1="60" x2="270" y2="60" stroke="#fff" strokeWidth="0.5" strokeDasharray="3 3" />
              <line x1="10" y1="30" x2="270" y2="30" stroke="#fff" strokeWidth="0.5" strokeDasharray="3 3" />
              
              <line x1="50" y1="10" x2="50" y2="130" stroke="#fff" strokeWidth="0.5" strokeDasharray="3 3" />
              <line x1="110" y1="10" x2="110" y2="130" stroke="#fff" strokeWidth="0.5" strokeDasharray="3 3" />
              <line x1="170" y1="10" x2="170" y2="130" stroke="#fff" strokeWidth="0.5" strokeDasharray="3 3" />
              <line x1="230" y1="10" x2="230" y2="130" stroke="#fff" strokeWidth="0.5" strokeDasharray="3 3" />
            </g>

            {/* Path 1: Blue Baseline Analytics (Stable Growth) */}
            <motion.path 
              d="M10 115 Q 60 100, 110 80 T 210 50 T 270 35" 
              stroke="url(#lineBlueGrad)" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />
            <path d="M10 115 Q 60 100, 110 80 T 210 50 T 270 35 L 270 120 L 10 120 Z" fill="url(#chartBlueGrad)" />

            {/* Path 2: Green Automation Analytics (Target Velocity) */}
            <motion.path 
              d="M10 105 Q 70 85, 130 55 T 230 25 T 270 10" 
              stroke="#34D399" 
              strokeWidth="1.8" 
              strokeDasharray="4 3" 
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.2, ease: "easeOut", delay: 0.3 }}
            />
            <path d="M10 105 Q 70 85, 130 55 T 230 25 T 270 10 L 270 120 L 10 120 Z" fill="url(#chartGreenGrad)" />

            {/* Node Dots & Pulse Indicators */}
            <motion.circle 
              cx="270" cy="35" r="4.5" 
              fill="#A78BFA" stroke="#fff" strokeWidth="1.5"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle 
              cx="270" cy="10" r="4" 
              fill="#34D399" stroke="#fff" strokeWidth="1"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
            <circle cx="130" cy="55" r="3" fill="#34D399" />
            <circle cx="110" cy="80" r="3" fill="#60A5FA" />
          </svg>
        </div>

        {/* Real-time Rolling Logs Feed Terminal */}
        <div className="bg-[#030308]/90 border border-white/5 rounded-xl p-3 h-[90px] overflow-hidden flex flex-col justify-start relative z-10">
          <div className="flex items-center gap-1.5 border-b border-white/5 pb-1.5 mb-1.5 text-[9px] font-mono text-white/30 uppercase tracking-widest font-semibold">
            <Terminal className="w-3 h-3 text-[#60A5FA]" />
            <span>Process Runner Logs</span>
          </div>
          <div className="relative overflow-hidden h-[50px] w-full">
            <motion.div 
              className="flex flex-col gap-1.5 font-mono text-[9.5px] text-white/50"
              animate={{ y: [0, -18, -36, -54, -72, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-blue-400">→</span>
                <span>Initializing automation sequence...</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                <span>Syncing database schema to edge nodes [OK]</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-purple-400">⚡</span>
                <span>Optimizing API core latency: <span className="text-white">12ms</span></span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                <span>Vercel Edge checks complete: <span className="text-white">SLA 100%</span></span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-blue-400">→</span>
                <span>Systems fully synchronized. Scaling instances.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 1: MRR Value Overlay */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute -top-4 -left-6 z-20 bg-[#070712]/95 border border-emerald-500/25 backdrop-blur-xl p-3 px-4 rounded-xl shadow-[0_12px_32px_-8px_rgba(16,185,129,0.22)] flex flex-col gap-1 w-[145px]"
      >
        <div className="flex items-center justify-between text-[8px] font-bold text-white/40 tracking-wider uppercase font-mono">
          <span>MRR Growth</span>
          <span className="text-emerald-400 font-sans flex items-center font-extrabold">+12.4%</span>
        </div>
        <div className="text-base font-extrabold font-display text-white leading-none">$52,480</div>
        
        {/* Sparkline curve */}
        <div className="h-6 mt-1 flex items-end">
          <svg className="w-full h-full text-emerald-400" viewBox="0 0 60 20" fill="none">
            <defs>
              <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M2 15 Q 15 13, 25 8 T 45 6 T 58 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M2 15 Q 15 13, 25 8 T 45 6 T 58 2 L 58 20 L 2 20 Z" fill="url(#sparklineGrad)" />
          </svg>
        </div>
      </motion.div>

      {/* Floating Card 2: SLA Circular Tracker */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute -bottom-4 -right-4 z-20 bg-[#070712]/95 border border-blue-500/25 backdrop-blur-xl p-3 px-4 rounded-xl shadow-[0_12px_32px_-8px_rgba(59,130,246,0.22)] flex items-center gap-3 w-[155px]"
      >
        <div className="relative w-9 h-9 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3.5" />
            <motion.circle 
              cx="18" cy="18" r="14" fill="none" stroke="#60A5FA" strokeWidth="3.5" 
              strokeDasharray="88 88"
              initial={{ strokeDashoffset: 88 }}
              whileInView={{ strokeDashoffset: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
              strokeLinecap="round"
            />
          </svg>
          <Activity className="w-3.5 h-3.5 text-[#60A5FA] absolute" />
        </div>
        <div className="flex flex-col">
          <span className="text-[8px] font-bold text-white/40 tracking-wider uppercase font-mono">Uptime SLA</span>
          <span className="text-xs font-extrabold font-display text-white">99.99%</span>
          <span className="text-[7.5px] text-blue-400 font-medium">Fully Operational</span>
        </div>
      </motion.div>

      {/* Floating Card 3: Lead Alert Pill */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.9, type: "spring", stiffness: 120 }}
        className="absolute top-[28%] -right-8 z-20 bg-[#070712]/95 border border-purple-500/25 backdrop-blur-xl py-2 px-3 rounded-full shadow-[0_10px_25px_-6px_rgba(167,139,250,0.22)] flex items-center gap-2"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <div className="flex items-center gap-1.5 text-[9px] font-sans font-semibold text-white">
          <span className="text-white/60">New Lead Captured</span>
          <span className="text-purple-400 font-extrabold">+$3,250</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function CTA() {
  return (
    <section id="cta" className="relative z-10 py-0 scroll-mt-24 w-full">
      {/* Aligned container limits matching the homepage bento grid container */}
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative rounded-3xl border border-white/10 bg-[#070712]/40 backdrop-blur-md px-8 py-14 md:p-16 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10 shadow-2xl text-left"
        >
          {/* Blueprint grid lines overlay */}
          <div 
            className="absolute inset-0 opacity-[0.015] pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px"
            }}
          />

          {/* Immersive ambient backlighting blobs */}
          <div className="absolute -left-36 -top-36 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "8s" }} />
          <div className="absolute -right-36 -bottom-36 w-96 h-96 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "12s" }} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none -z-10" />

          {/* Left Column: Context details and CTA Buttons */}
          <div className="space-y-7 max-w-xl z-10 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Tagline pill with pulsing radar indicator */}
            <div className="flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#60A5FA]">
                {"Let's build something extraordinary"}
              </span>
            </div>

            {/* Main Action Heading with neon gradient */}
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
              Ready To{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399] drop-shadow-[0_2px_10px_rgba(96,165,250,0.18)] block sm:inline">
                Grow Your Business?
              </span>
            </h2>

            {/* Description Subtitle */}
            <p className="text-sm sm:text-base text-white/60 font-sans leading-relaxed">
              {"Partner with Webrix to engineer high-performance web systems, automate workflows with custom AI agents, and build cloud-native software built to scale."}
            </p>

            {/* Features Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full pt-2">
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <div className="w-5 h-5 rounded-md flex items-center justify-center bg-blue-500/10 border border-blue-500/20 text-[#60A5FA]">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs text-white/80 font-medium font-sans">High-Performance Architectures</span>
              </div>
              
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <div className="w-5 h-5 rounded-md flex items-center justify-center bg-purple-500/10 border border-purple-500/20 text-[#A78BFA]">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs text-white/80 font-medium font-sans">Intelligent Automation Agents</span>
              </div>

              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <div className="w-5 h-5 rounded-md flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20 text-[#34D399]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs text-white/80 font-medium font-sans">Enterprise-Grade Security SLA</span>
              </div>

              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <div className="w-5 h-5 rounded-md flex items-center justify-center bg-white/5 border border-white/10 text-white/70">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs text-white/80 font-medium font-sans">Free Strategic Evaluation</span>
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3 w-full sm:w-auto">
              <Button 
                variant="primary" 
                className="w-full sm:w-auto shadow-[0_0_24px_rgba(96,165,250,0.25)] hover:shadow-[0_0_32px_rgba(96,165,250,0.45)] transition-all duration-300 rounded-xl py-3 px-6 cursor-pointer flex items-center justify-center gap-2 group"
              >
                {"Schedule Consultation"}
                <Calendar className="w-4 h-4 text-primary-foreground group-hover:scale-110 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full sm:w-auto hover:bg-white/5 transition-all duration-200 border-white/10 hover:border-white/20 rounded-xl py-3 px-6 cursor-pointer flex items-center justify-center gap-2 group"
              >
                {"Request Proposal"}
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Column: DashboardHub (interactive dynamic control room widgets) */}
          <div className="z-10 flex-1 flex justify-center items-center relative w-full lg:w-auto mt-6 lg:mt-0">
            <DashboardHub />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
