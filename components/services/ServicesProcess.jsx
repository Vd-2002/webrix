"use client";

import { motion } from "framer-motion";
import { Search, Compass, ShieldCheck, Rocket } from "lucide-react";

export default function ServicesProcess() {
  const steps = [
    {
      num: "01",
      phase: "Week 1",
      title: "Discovery & Blueprint",
      desc: "Analyzing target metrics, compiling system requirements, and creating data mockups.",
      icon: Search,
      color: "#60A5FA",
      checks: ["Requirement Mapping", "System Dependency Sheet", "SLA Spec Document"]
    },
    {
      num: "02",
      phase: "Week 2-3",
      title: "Architecture & Setup",
      desc: "Configuring container clusters, designing relational schemas, and defining API routing.",
      icon: Compass,
      color: "#818CF8",
      checks: ["AWS ECS Cluster Spec", "Postgres Entity Maps", "API Schema Models"]
    },
    {
      num: "03",
      phase: "Week 4-6",
      title: "Custom Engineering",
      desc: "Writing modular source code under sprint tracking with continuous automated checks.",
      icon: ShieldCheck,
      color: "#F472B6",
      checks: ["Clean Git Commits", "Unit/Integration Logs", "Staging Environment Build"]
    },
    {
      num: "04",
      phase: "Week 7",
      title: "Launch & Reroute",
      desc: "Transitioning DNS routes, activating CDNs, and executing final load speed tests.",
      icon: Rocket,
      color: "#34D399",
      checks: ["Zero-Downtime Pipeline", "Edge Cache Warmup", "Speed Latency Audit"]
    }
  ];

  return (
    <section id="services-process" className="relative z-10 scroll-mt-24 w-full space-y-12">
      {/* Section Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
          Operational{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Workflow
          </span>
        </h2>
        <p className="text-sm text-white/50 font-sans max-w-xl mx-auto">
          We maintain an structured, time-bounded delivery timeline to ensure zero scope creep and clear progress logs.
        </p>
      </div>

      {/* Horizontal Steps Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto items-stretch">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -4 }}
              className="group relative border border-white/10 bg-[#070712]/40 backdrop-blur-md hover:border-white/20 transition-all duration-500 rounded-3xl p-6 overflow-hidden flex flex-col justify-between"
            >
              {/* Top Row: Phase & Step Number */}
              <div className="flex justify-between items-center relative z-10">
                <span className="text-[10px] font-mono font-bold tracking-widest text-white/30 uppercase">
                  PHASE {step.num}
                </span>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded border border-white/5 bg-white/[0.01]" style={{ color: step.color }}>
                  {step.phase}
                </span>
              </div>

              {/* Icon & Title */}
              <div className="space-y-4 pt-6 relative z-10">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300"
                  style={{
                    borderColor: `${step.color}25`,
                    background: `linear-gradient(135deg, ${step.color}08, transparent)`,
                    color: step.color
                  }}
                >
                  <Icon className="w-4.5 h-4.5" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold font-display text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed font-sans font-light">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Progress Line */}
              <div className="w-full h-0.5 bg-white/5 rounded-full my-6 relative overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: step.color }}
                />
              </div>

              {/* Deliverable Checks List */}
              <div className="space-y-2 relative z-10 pt-2">
                {step.checks.map((check, cIdx) => (
                  <div key={cIdx} className="flex items-center gap-2 text-[10px] text-white/60 font-sans">
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: step.color }} />
                    <span>{check}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
