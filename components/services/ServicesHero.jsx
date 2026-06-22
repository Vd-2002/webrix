"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Cpu } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ServicesHero() {
  return (
    <section className="relative z-10 w-full min-h-[50vh] flex flex-col justify-center items-center text-center py-16 scroll-mt-24">
      {/* Glow spots */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[120px] top-10 left-1/4 pointer-events-none -z-10" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[120px] bottom-10 right-1/4 pointer-events-none -z-10" />

      {/* Blueprint background grid visual */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-20" />

      <div className="max-w-3xl mx-auto space-y-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#60A5FA] bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full select-none inline-block">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
            Architecting the Next Era of{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
              Digital Speed
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed font-sans max-w-2xl mx-auto pt-2">
            We bypass templates and heavy frameworks. We build production-ready platforms, custom software backends, and AI pipelines optimized for sub-millisecond execution.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#categories">
            <Button
              variant="primary"
              className="px-6 py-3 text-xs tracking-wider uppercase font-semibold font-display shadow-md shadow-primary/20 hover:shadow-primary/40 relative overflow-hidden group transition-all duration-300 rounded-xl"
            >
              Explore Capabilities
            </Button>
          </a>
          <a href="/about">
            <Button
              variant="secondary"
              className="px-6 py-3 text-xs tracking-wider uppercase font-semibold font-display transition-all duration-300 rounded-xl border border-white/10 bg-white/[0.02] text-white hover:bg-white/5"
            >
              How We Work
            </Button>
          </a>
        </motion.div>

        {/* Small stats inline bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 pt-12 border-t border-white/5 max-w-xl mx-auto text-left"
        >
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#60A5FA]" />
            <div>
              <div className="text-sm font-extrabold text-white font-display">100%</div>
              <div className="text-[9px] font-mono text-white/30 tracking-wider uppercase font-semibold">Custom Code</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#34D399]" />
            <div>
              <div className="text-sm font-extrabold text-white font-display">ISO/SLA</div>
              <div className="text-[9px] font-mono text-white/30 tracking-wider uppercase font-semibold">Enterprise Safe</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#A78BFA]" />
            <div>
              <div className="text-sm font-extrabold text-white font-display">&lt;15ms</div>
              <div className="text-[9px] font-mono text-white/30 tracking-wider uppercase font-semibold">API Latency</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
