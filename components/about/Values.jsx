"use client";

import { motion } from "framer-motion";
import { Hammer, Eye, Zap, ShieldCheck } from "lucide-react";

export default function Values() {
const values = [
    {
      title: "Precision Engineering",
      desc: "We write clean, fast code designed to load quickly. We skip templates and unnecessary packages.",
      icon: Hammer,
      color: "#60A5FA"
    },
    {
      title: "High Transparency",
      desc: "You get clear updates on active tasks, project progress, and server status.",
      icon: Eye,
      color: "#818CF8"
    },
    {
      title: "Rapid Acceleration",
      desc: "Our development process ensures your features are built and launched on time without delays.",
      icon: Zap,
      color: "#F472B6"
    },
    {
      title: "Ironclad Compliance",
      desc: "Building databases and security systems that protect patient data and keep your site running.",
      icon: ShieldCheck,
      color: "#34D399"
    }
  ];

  return (
    <section id="values" className="relative z-10 scroll-mt-24 w-full space-y-12">
      {/* Section Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Our Core{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Values
          </span>
        </h2>
        <p className="text-base text-white/60 font-sans max-w-xl mx-auto">
          The engineering standards and operational principles guiding everything we build.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto items-stretch">
        {values.map((val, idx) => {
          const Icon = val.icon;
          return (
            <motion.div
              key={idx}
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
                style={{ background: `radial-gradient(circle, ${val.color} 0%, transparent 70%)` }}
              />

              <div className="space-y-6">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500"
                  style={{
                    borderColor: `${val.color}30`,
                    background: `linear-gradient(135deg, ${val.color}12, transparent)`,
                    color: val.color
                  }}
                >
                  <Icon className="w-5.5 h-5.5" />
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-xl font-bold font-display text-white tracking-tight">
                    {val.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed font-sans font-light">
                    {val.desc}
                  </p>
                </div>
              </div>

              {/* Bottom tag indicator */}
              <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/20 group-hover:text-white/40 transition-colors">
                <span>QUALITY CHECK</span>
                <span className="font-bold" style={{ color: val.color }}>OK</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
