"use client";

import { motion } from "framer-motion";
import { Compass, Target, ArrowUpRight } from "lucide-react";

export default function MissionVision() {
  return (
    <section id="mission-vision" className="relative z-10 scroll-mt-24 w-full">
      <div className="grid md:grid-cols-2 gap-8 max-w-[1200px] mx-auto items-stretch">
        
        {/* Card 1: Our Mission */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: -4 }}
          className="group relative border border-white/10 bg-[#070712]/40 backdrop-blur-md hover:border-white/20 transition-all duration-500 rounded-3xl p-8 overflow-hidden flex flex-col justify-between"
        >
          {/* Spotlight aura */}
          <div 
            className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-0 group-hover:opacity-10 blur-[90px] transition-all duration-700 pointer-events-none"
            style={{ background: "radial-gradient(circle, #60A5FA 0%, transparent 70%)" }}
          />

          <div className="space-y-6">
            {/* Top row */}
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#60A5FA]/30 bg-gradient-to-br from-[#60A5FA]/10 to-transparent">
                <Target className="w-5.5 h-5.5 text-[#60A5FA] animate-pulse" />
              </div>
              <span className="font-mono text-xs font-bold text-white/20 select-none">
                01 / TARGET
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-display text-white tracking-tight">
                Our Mission
              </h3>
              <p className="text-sm text-white/60 leading-relaxed font-sans">
                To build high-performance software architectures that eliminate processing waste, empower operations, and enable businesses to launch scalable products with absolute engineering confidence.
              </p>
              <p className="text-sm text-white/50 leading-relaxed font-sans">
                We believe that software should be fast, transparent, and optimized at the metal. Our mission is to make high-fidelity developer practices accessible to organizations of all scales.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between text-xs text-white/30 group-hover:text-white/50 transition-colors">
            <span>Engineering Excellence</span>
            <Compass className="w-4 h-4 text-[#60A5FA]" />
          </div>
        </motion.div>

        {/* Card 2: Our Vision */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: -4 }}
          className="group relative border border-white/10 bg-[#070712]/40 backdrop-blur-md hover:border-white/20 transition-all duration-500 rounded-3xl p-8 overflow-hidden flex flex-col justify-between"
        >
          {/* Spotlight aura */}
          <div 
            className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-0 group-hover:opacity-10 blur-[90px] transition-all duration-700 pointer-events-none"
            style={{ background: "radial-gradient(circle, #34D399 0%, transparent 70%)" }}
          />

          <div className="space-y-6">
            {/* Top row */}
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#34D399]/30 bg-gradient-to-br from-[#34D399]/10 to-transparent">
                <Compass className="w-5.5 h-5.5 text-[#34D399] animate-pulse" />
              </div>
              <span className="font-mono text-xs font-bold text-white/20 select-none">
                02 / EXPLORE
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-display text-white tracking-tight">
                Our Vision
              </h3>
              <p className="text-sm text-white/60 leading-relaxed font-sans">
                To establish a global standard for clean-code development, where applications run with sub-millisecond lag, operations scale automatically via custom agent models, and software builds remain resilient.
              </p>
              <p className="text-sm text-white/50 leading-relaxed font-sans">
                We envision a future where digital infrastructure operates without bloated frameworks, allowing businesses to minimize server costs, optimize load speeds, and scale sustainably.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between text-xs text-white/30 group-hover:text-white/50 transition-colors">
            <span>Global Tech Integration</span>
            <ArrowUpRight className="w-4 h-4 text-[#34D399]" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
