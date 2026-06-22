"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Server, Cpu } from "lucide-react";

export default function IndustriesHero() {
  return (
    <section className="relative z-10 w-full min-h-[40vh] flex flex-col justify-center items-center text-center py-16 scroll-mt-24">
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
            Sectors We Solve
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
            Architecting for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
              Scale and Compliance
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed font-sans max-w-2xl mx-auto pt-2">
            Generic software is not enough for complex verticals. We engineer bespoke platforms, telemetry dashboards, database search indexes, and decoupled checkouts optimized for your sector&apos;s requirements.
          </p>
        </motion.div>

        {/* Small stats inline bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 border-t border-white/5 max-w-xl mx-auto text-left"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-[#60A5FA]/20 bg-[#60A5FA]/5 text-[#60A5FA] shrink-0">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-white font-display">100% Pass</div>
              <div className="text-[9px] font-mono text-white/30 tracking-wider uppercase font-semibold">Security Compliance</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-[#34D399]/20 bg-[#34D399]/5 text-[#34D399] shrink-0">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-white font-display">Sub-15ms</div>
              <div className="text-[9px] font-mono text-white/30 tracking-wider uppercase font-semibold">Telemetry Streams</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-[#A78BFA]/20 bg-[#A78BFA]/5 text-[#A78BFA] shrink-0">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-white font-display">Millions</div>
              <div className="text-[9px] font-mono text-white/30 tracking-wider uppercase font-semibold">Concurrent Queries</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
