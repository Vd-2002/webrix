"use client";

import { motion } from "framer-motion";
import { Gauge, ShieldAlert, Layers, HeartHandshake } from "lucide-react";

export default function ServicesBenefits() {
  const benefits = [
    {
      title: "Microsecond Execution",
      desc: "By removing boilerplate layouts and template structures, our assets load within milliseconds, boosting conversion rates and user engagement scores.",
      icon: Gauge,
      color: "#60A5FA"
    },
    {
      title: "Compliance & Security",
      desc: "Every API pathway, server instance, and database relational schema we construct is built with active SSL routes and audited compliance rules.",
      icon: ShieldAlert,
      color: "#34D399"
    },
    {
      title: "Infinite Scalability",
      desc: "Our AWS ECS and Docker container templates are mapped to automatically scale horizontally to handle traffic surges with zero database lockouts.",
      icon: Layers,
      color: "#A78BFA"
    },
    {
      title: "Active Dev Support",
      desc: "We assign dedicated systems architects and senior developers directly to your operations Slack workspace for continuous deployment cycles.",
      icon: HeartHandshake,
      color: "#F472B6"
    }
  ];

  return (
    <section id="benefits" className="relative z-10 scroll-mt-24 w-full space-y-12">
      {/* Section Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
          Key{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Benefits
          </span>
        </h2>
        <p className="text-sm text-white/50 font-sans max-w-xl mx-auto">
          How our precision engineering model directly upgrades your digital performance and operational safety.
        </p>
      </div>

      {/* Benefits Grid (Asymmetrical cards layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto items-stretch">
        {benefits.map((benefit, idx) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -4 }}
              className="group relative border border-white/10 bg-[#070712]/40 backdrop-blur-md hover:border-white/20 transition-all duration-500 rounded-3xl p-6 sm:p-8 overflow-hidden flex flex-col justify-between"
            >
              {/* Spotlight aura */}
              <div 
                className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-0 group-hover:opacity-10 blur-[90px] transition-all duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${benefit.color} 0%, transparent 70%)` }}
              />

              <div className="grid sm:grid-cols-12 gap-6 items-start relative z-10">
                {/* Icon Column */}
                <div className="sm:col-span-2">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500"
                    style={{
                      borderColor: `${benefit.color}30`,
                      background: `linear-gradient(135deg, ${benefit.color}12, transparent)`,
                      color: benefit.color
                    }}
                  >
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                </div>

                {/* Content Column */}
                <div className="sm:col-span-10 space-y-2">
                  <h3 className="text-xl font-bold font-display text-white tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-sans font-light">
                    {benefit.desc}
                  </p>
                </div>
              </div>

              {/* Bottom footer status */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-white/20">
                <span>BENEFIT VERIFICATION SECURE</span>
                <span style={{ color: benefit.color }}>ACTIVE</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
