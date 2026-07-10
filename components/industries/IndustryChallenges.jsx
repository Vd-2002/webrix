"use client";

import { motion } from "framer-motion";
import { AlertCircle, AlertTriangle, ShieldCheck, Activity, Database, ShoppingCart, Ban } from "lucide-react";

const CHALLENGES = [
  {
    icon: Activity,
    title: "Healthcare Compliance Hurdles",
    challenge: "Telehealth platforms and medical databases often struggle with old integrations. Slow backend systems can fail security audits, expose data, or delay patient updates.",
    impact: "Security Failures & Data Leaks",
    accent: "#EF4444"
  },
  {
    icon: Database,
    title: "High-Frequency IoT Outages",
    challenge: "Factory machine dashboards can crash under heavy data loads. Slow connections drop sensor signals, causing delays and inaccurate efficiency calculations.",
    impact: "Lost Connections & Lost Data",
    accent: "#F59E0B"
  },
  {
    icon: Ban,
    title: "Spatial Search Index Bloat",
    challenge: "Real estate map searches can slow down when loading large areas. Heavy database queries block server responses and delay property map updates.",
    impact: "Slow Map Loading",
    accent: "#3B82F6"
  },
  {
    icon: ShoppingCart,
    title: "Monolith Checkout Drop-Offs",
    challenge: "Many online stores use heavy templates and slow checkout systems. Slow loading times cause customers to leave before purchasing.",
    impact: "Lost Sales & Slow Checkouts",
    accent: "#EC4899"
  }
];

export default function IndustryChallenges() {
  return (
    <section id="industry-challenges" className="relative z-10 scroll-mt-24 w-full space-y-12">
      
      {/* Header section */}
      <div className="space-y-4 text-center max-w-2xl mx-auto px-6">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#EF4444] bg-red-500/10 border border-red-500/20 px-3 py-1.5 rounded-full select-none inline-block">
          Technical Challenges
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Industry{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Challenges
          </span>
        </h2>
        <p className="text-sm sm:text-base text-white/60 font-sans max-w-xl mx-auto">
          Common software issues and bottlenecks that slow down standard websites.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
        {CHALLENGES.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="border border-white/5 bg-[#070712]/40 rounded-3xl p-6 sm:p-8 hover:border-white/10 transition-colors text-left flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3.5 border-b border-white/5 pb-4">
                  <div 
                    className="w-9 h-9 rounded-lg flex items-center justify-center border"
                    style={{
                      borderColor: `${item.accent}20`,
                      background: `linear-gradient(135deg, ${item.accent}05, transparent)`,
                      color: item.accent
                    }}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-sans">
                  {item.challenge}
                </p>
              </div>

              {/* Friction metrics tracker block */}
              <div className="flex items-center gap-2 text-[10px] font-mono p-3 bg-red-500/5 border border-red-500/10 rounded-xl text-red-400">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Primary Friction: <strong>{item.impact}</strong></span>
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
