"use client";

import { motion } from "framer-motion";
import { Search, Compass, ShieldCheck, Rocket } from "lucide-react";

export default function WorkProcess() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Planning",
      desc: "We analyze your business targets, identify security requirements, plan features, and prepare a simple project roadmap.",
      icon: Search,
      deliverables: ["Product Roadmap", "Security Plan", "Feature List"],
      color: "#60A5FA"
    },
    {
      num: "02",
      title: "Database & Cloud Setup",
      desc: "Designing secure databases, setting up cloud servers, connecting backend APIs, and setting up security certificates.",
      icon: Compass,
      deliverables: ["API Connections", "Cloud Server Setup", "Security Rules"],
      color: "#818CF8"
    },
    {
      num: "03",
      title: "Development & Coding",
      desc: "Writing clean custom code in regular steps. Delivering working software modules with active code reviews and automated tests.",
      icon: ShieldCheck,
      deliverables: ["GitHub Repository", "Automated Tests", "Staging Website Deploy"],
      color: "#F472B6"
    },
    {
      num: "04",
      title: "Launch & Support",
      desc: "Deploying your site to production servers, configuring domain security settings, and running speed verification checks.",
      icon: Rocket,
      deliverables: ["Smooth Deployment", "Global Content Routing", "Loading Speed Report"],
      color: "#34D399"
    }
  ];

  return (
    <section id="work-process" className="relative z-10 scroll-mt-24 w-full space-y-12">
      {/* Section Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Our Work{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Process
          </span>
        </h2>
        <p className="text-base text-white/50 font-sans max-w-xl mx-auto">
          A simple step-by-step timeline of how we design, build, and launch your software.
        </p>
      </div>

      {/* Vertical Milestones Timeline container */}
      <div className="max-w-[850px] mx-auto px-6 relative">
        
        {/* Central timeline spine connector line */}
        <div className="absolute left-[39px] sm:left-1/2 top-4 bottom-4 w-[1px] bg-white/10 z-0 pointer-events-none transform sm:-translate-x-1/2" />

        <div className="space-y-10 w-full">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={idx} 
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between w-full relative z-10 gap-6 sm:gap-0 ${
                  isEven ? "" : "sm:flex-row-reverse"
                }`}
              >
                
                {/* Left/Right Card column */}
                <div className="w-full sm:w-[45%] pl-16 sm:pl-0">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -4 }}
                    className="group relative border border-white/5 bg-[#070712]/30 backdrop-blur-sm hover:border-white/10 p-6 rounded-3xl transition-all duration-500"
                  >
                    {/* Decorative aura */}
                    <div 
                      className="absolute -right-16 -top-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-5 blur-[60px] transition-all duration-700 pointer-events-none"
                      style={{ background: `radial-gradient(circle, ${step.color} 0%, transparent 70%)` }}
                    />

                    <div className="space-y-4">
                      {/* Title & Phase Indicator */}
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono font-bold tracking-widest uppercase block" style={{ color: step.color }}>
                          Step {step.num}
                        </span>
                        <h3 className="text-lg font-bold font-display text-white tracking-tight">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-xs text-white/50 leading-relaxed font-sans font-light">
                        {step.desc}
                      </p>

                      {/* Deliverables capsule list */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                        {step.deliverables.map((tag, tagIdx) => (
                          <span 
                            key={tagIdx} 
                            className="text-[9px] font-mono bg-white/[0.01] border border-white/5 px-2 py-0.5 rounded-full text-white/60 flex items-center gap-1"
                          >
                            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: step.color }} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Central Circle Spine Node */}
                <div className="absolute left-[39px] sm:left-1/2 top-4 sm:top-auto shrink-0 w-10 h-10 rounded-full bg-[#030308] border border-white/15 hover:border-white/30 transition-all flex items-center justify-center z-20 transform -translate-x-1/2 sm:-translate-x-1/2 text-white shadow-xl shadow-black">
                  <Icon className="w-4 h-4" style={{ color: step.color }} />
                </div>

                {/* Empty column (Visible on desktop spacing) */}
                <div className="hidden sm:block w-[45%]" />

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
