"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Key, ArrowRight, Gauge, Layers, RefreshCw } from "lucide-react";

const SOLUTIONS = [
  {
    title: "Secure Telehealth Systems",
    for: "Healthcare Compliance",
    solution: "We build secure databases that separate user details from medical files, use data encryption, and provide security reports.",
    metric: "100% HIPAA Compliant",
    accent: "#EF4444"
  },
  {
    title: "Live Machine Sensors",
    for: "Manufacturing IoT",
    solution: "We set up fast database pipelines that handle live updates from factory machines. The connections reconnect automatically to prevent data loss.",
    metric: "Fast Data Synchronization",
    accent: "#F59E0B"
  },
  {
    title: "Fast Real Estate Map Search",
    for: "Real Estate Spatial Indexing",
    solution: "We optimize databases to load property listings on maps instantly. Nearby search results load in a fraction of a second.",
    metric: "Instant Map Loading",
    accent: "#3B82F6"
  },
  {
    title: "Fast Online Store Checkout",
    for: "Retail & E-Commerce",
    solution: "We build fast online stores with custom layouts, secure Stripe checkout payments, and instant cart updates.",
    metric: "+42% More Sales",
    accent: "#EC4899"
  }
];

export default function SolutionsByIndustry() {
  return (
    <section id="solutions-by-industry" className="relative z-10 scroll-mt-24 w-full space-y-12">
      
      {/* Header section */}
      <div className="space-y-4 text-center max-w-2xl mx-auto px-6">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#34D399] bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full select-none inline-block">
          The Webrix Resolution
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Solutions by{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Vertical
          </span>
        </h2>
        <p className="text-sm sm:text-base text-white/60 font-sans max-w-xl mx-auto">
          How we build custom websites and software to help your business grow.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
        {SOLUTIONS.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="border border-white/5 bg-[#070712]/40 rounded-3xl p-6 sm:p-8 hover:border-white/10 transition-colors text-left flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    {item.title}
                  </h3>
                  <p className="text-[10px] font-mono text-white/40">
                    VERTICAL: {item.for.toUpperCase()}
                  </p>
                </div>
                
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center border text-[#34D399]"
                  style={{
                    borderColor: `${item.accent}20`,
                    background: `linear-gradient(135deg, ${item.accent}05, transparent)`
                  }}
                >
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-sans">
                {item.solution}
              </p>
            </div>

            {/* Resolved metrics gauge footer */}
            <div className="flex items-center gap-2 text-[10px] font-mono p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl text-emerald-400">
              <Zap className="w-4 h-4 shrink-0 animate-pulse" />
              <span>Resolved Metric: <strong>{item.metric}</strong></span>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
