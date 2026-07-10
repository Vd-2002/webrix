"use client";

import { motion } from "framer-motion";
import { Zap, ShieldAlert, Rocket, Network } from "lucide-react";

export default function WhyWeStarted() {
  const milestones = [
    {
      num: "01",
      title: "The Slow Web",
      desc: "We saw websites using bloated templates that loaded slowly and cost too much to maintain.",
      icon: ShieldAlert,
      color: "#EF4444"
    },
    {
      num: "02",
      title: "Clean Custom Code",
      desc: "We decided to skip heavy templates and write clean, custom code that loads instantly.",
      icon: Network,
      color: "#60A5FA"
    },
    {
      num: "03",
      title: "First Client Launches",
      desc: "We launched our first 10 custom systems, improving website loading speeds and handling growing traffic easily.",
      icon: Zap,
      color: "#F59E0B"
    },
    {
      num: "04",
      title: "Full Custom Agency",
      desc: "Webrix now builds high-performance custom websites, mobile apps, and smart AI workflows.",
      icon: Rocket,
      color: "#34D399"
    }
  ];

  return (
    <section id="why-started" className="relative z-10 scroll-mt-24 w-full space-y-12">
      {/* Section Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Why We Started{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Webrix
          </span>
        </h2>
        <p className="text-base text-white/60 font-sans max-w-xl mx-auto">
          Built to fix slow websites and heavy page load times.
        </p>
      </div>

      {/* Storytelling Timeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto items-stretch relative">
        {milestones.map((milestone, idx) => {
          const Icon = milestone.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -4 }}
              className="group relative border border-white/5 bg-[#070712]/30 backdrop-blur-sm hover:border-white/10 transition-all duration-500 rounded-3xl p-6 overflow-hidden flex flex-col justify-between"
            >
              {/* Connector line (Visible on desktop grid) */}
              {idx < milestones.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent z-0 pointer-events-none" />
              )}

              <div className="space-y-6 relative z-10">
                {/* Header row */}
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs font-bold text-white/20 select-none">
                    PHASE {milestone.num}
                  </span>
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300"
                    style={{
                      borderColor: `${milestone.color}25`,
                      background: `linear-gradient(135deg, ${milestone.color}08, transparent)`,
                      color: milestone.color
                    }}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-display text-white tracking-tight">
                    {milestone.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed font-sans font-light">
                    {milestone.desc}
                  </p>
                </div>
              </div>

              {/* Dot marker bottom */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: milestone.color }} />
                <span className="text-[10px] font-mono text-white/30 font-semibold tracking-widest uppercase">Phase Completed</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
