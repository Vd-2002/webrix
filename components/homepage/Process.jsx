"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, GitFork, Palette, Code, ShieldCheck, Rocket, LifeBuoy } from "lucide-react";

const STEPS = [
  {
    num: "01",
    phase: "Discovery",
    title: "Discovery & Alignment",
    desc: "We align on stakeholder vision, run business requirement analysis, map project constraints, and draft the initial product strategy roadmap.",
    deliverables: ["Product Roadmap", "Stakeholder Brief", "Feature Checklist"],
    accentColor: "#60A5FA", // Blue
    icon: Search,
  },
  {
    num: "02",
    phase: "Planning",
    title: "Planning & Architecture",
    desc: "Defining application schemas, microservice API integrations, tech stack selections, database models, and target sprint schedules.",
    deliverables: ["API Documentation", "Data Schema Models", "Sprint Schedule"],
    accentColor: "#818CF8", // Indigo
    icon: GitFork,
  },
  {
    num: "03",
    phase: "Design",
    title: "UI/UX & Prototyping",
    desc: "Creating wireframes, crafting a high-fidelity modern design system, and building interactive screen prototypes for stakeholder review.",
    deliverables: ["Figma Prototypes", "Design System Kit", "Interactive Mockups"],
    accentColor: "#F472B6", // Pink
    icon: Palette,
  },
  {
    num: "04",
    phase: "Development",
    title: "Engineering & Integration",
    desc: "Writing clean, optimized, and scalable code. Developing frontends with Next.js and linking backend business APIs and services.",
    deliverables: ["Modular Codebase", "API Integration", "Staging Server Deploy"],
    accentColor: "#34D399", // Green
    icon: Code,
  },
  {
    num: "05",
    phase: "Testing",
    title: "QA & Performance Auditing",
    desc: "Executing automated unit tests, security penetration screening, usability checks, and rigorous performance lighthouse auditing.",
    deliverables: ["Lighthouse Audit Report", "QA Pass Logs", "Security Certificate"],
    accentColor: "#F59E0B", // Amber
    icon: ShieldCheck,
  },
  {
    num: "06",
    phase: "Launch",
    title: "Production Deployment",
    desc: "Configuring CDN edge routing, launching production server instances, mapping SSL endpoints, and running live verification passes.",
    deliverables: ["Production Live URL", "CDN Edge Routing", "Zero-Downtime CI/CD"],
    accentColor: "#06B6D4", // Cyan
    icon: Rocket,
  },
  {
    num: "07",
    phase: "Support",
    title: "Support & Optimization",
    desc: "24/7 uptime monitoring, server updates, regular database backups, monthly performance checks, and continuous sprint iteration releases.",
    deliverables: ["Uptime Status Logs", "Maintenance Retainer", "Sprint Backlog"],
    accentColor: "#F43F5E", // Rose
    icon: LifeBuoy,
  }
];

// Desktop Semicircle coordinates (Center = 30, 200 | Radius = 160)
const DESKTOP_RADIUS = 160;
const DESKTOP_CENTER_X = 30;
const DESKTOP_CENTER_Y = 200;
const DESKTOP_ANGLES = [-Math.PI/2, -Math.PI/3, -Math.PI/6, 0, Math.PI/6, Math.PI/3, Math.PI/2];

// Mobile Dome Arch coordinates (Center = 160, 130 | Radius = 100)
const MOBILE_RADIUS = 100;
const MOBILE_CENTER_X = 160;
const MOBILE_CENTER_Y = 130;
const MOBILE_ANGLES = [150, 130, 110, 90, 70, 50, 30]; // Degrees

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const currentStep = STEPS[activeStep];
  const ActiveIcon = currentStep.icon;

  // Auto-play timer to automatically cycle steps and fill the semicircle progress
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 4000); // Cycles every 4 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="process" className="relative z-10 space-y-12 py-20 scroll-mt-24">
      {/* Header aligned with Homepage layout */}
      <div className="space-y-4 text-center max-w-2xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Development{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Process
          </span>
        </h2>
        <p className="text-base text-white/60 font-sans max-w-xl mx-auto">
          An agile, transparent workflow designed to take your ideas from research to a robust, scalable launch.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto w-full px-6">
        {/* Unified Dashboard Panel */}
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="border border-white/10 bg-[#070712]/40 backdrop-blur-md rounded-3xl p-8 lg:p-12 relative overflow-hidden min-h-[440px] w-full flex flex-col md:flex-row items-center gap-12 transition-colors duration-500 hover:border-white/15"
        >
          
          {/* Spotlight aura */}
          <div 
            className="absolute -right-24 -top-24 w-80 h-80 rounded-full opacity-[0.08] blur-[90px] transition-all duration-700 pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${currentStep.accentColor} 0%, transparent 70%)`
            }}
          />

          {/* LEFT SIDE: Interactive Semicircle Timeline Dial */}
          
          {/* Desktop Dial (Hidden on Mobile) */}
          <div className="hidden md:block relative w-[220px] h-[400px] shrink-0">
            {/* SVG Track */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 220 400">
              {/* Static Background Path */}
              <path 
                d="M 30 40 A 160 160 0 0 1 30 360" 
                fill="none" 
                stroke="rgba(255,255,255,0.04)" 
                strokeWidth="2" 
              />
              {/* Glowing Active Trail (Length is ~502.6) */}
              <path 
                d="M 30 40 A 160 160 0 0 1 30 360" 
                fill="none" 
                stroke={currentStep.accentColor} 
                strokeWidth="2.5" 
                strokeDasharray="502.6"
                style={{
                  strokeDashoffset: 502.6 - (activeStep / 6) * 502.6,
                  transition: "stroke-dashoffset 0.6s cubic-bezier(0.16, 1, 0.3, 1), stroke 0.3s"
                }}
              />
            </svg>

            {/* Step Nodes */}
            {STEPS.map((step, idx) => {
              const angle = DESKTOP_ANGLES[idx];
              const x = DESKTOP_CENTER_X + DESKTOP_RADIUS * Math.cos(angle);
              const y = DESKTOP_CENTER_Y + DESKTOP_RADIUS * Math.sin(angle);
              const left = x - 16;
              const top = y - 16;
              const isActive = activeStep === idx;

              return (
                <button
                  key={idx}
                  onMouseEnter={() => setActiveStep(idx)}
                  onClick={() => setActiveStep(idx)}
                  className="absolute w-8 h-8 rounded-full border-2 flex items-center justify-center font-mono text-[10px] font-bold transition-all duration-300 bg-[#070712] cursor-pointer z-10"
                  style={{
                    left: `${left}px`,
                    top: `${top}px`,
                    borderColor: isActive ? step.accentColor : "rgba(255,255,255,0.15)",
                    color: isActive ? step.accentColor : "rgba(255,255,255,0.4)",
                    boxShadow: isActive ? `0 0 15px -2px ${step.accentColor}` : "none"
                  }}
                >
                  {/* Pulsing glow ring on active */}
                  {isActive && (
                    <motion.div 
                      className="absolute -inset-1.5 rounded-full border opacity-20"
                      style={{ borderColor: step.accentColor }}
                      animate={{ scale: [1, 1.25, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  )}
                  {step.num}
                </button>
              );
            })}
          </div>

          {/* Mobile Dial (Hidden on Desktop) */}
          <div className="md:hidden relative w-[320px] h-[100px] shrink-0 mt-4">
            {/* SVG Track */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 100">
              {/* Static Background Path */}
              <path 
                d="M 73.4 80 A 100 100 0 0 1 246.6 80" 
                fill="none" 
                stroke="rgba(255,255,255,0.04)" 
                strokeWidth="2" 
              />
              {/* Glowing Active Trail (Length is ~209.4) */}
              <path 
                d="M 73.4 80 A 100 100 0 0 1 246.6 80" 
                fill="none" 
                stroke={currentStep.accentColor} 
                strokeWidth="2.5" 
                strokeDasharray="209.4"
                style={{
                  strokeDashoffset: 209.4 - (activeStep / 6) * 209.4,
                  transition: "stroke-dashoffset 0.6s cubic-bezier(0.16, 1, 0.3, 1), stroke 0.3s"
                }}
              />
            </svg>

            {/* Step Nodes */}
            {STEPS.map((step, idx) => {
              const angleDeg = MOBILE_ANGLES[idx];
              const angleRad = angleDeg * Math.PI / 180;
              const x = MOBILE_CENTER_X + MOBILE_RADIUS * Math.cos(angleRad);
              const y = MOBILE_CENTER_Y - MOBILE_RADIUS * Math.sin(angleRad);
              const left = x - 14;
              const top = y - 14;
              const isActive = activeStep === idx;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className="absolute w-7 h-7 rounded-full border-2 flex items-center justify-center font-mono text-[9px] font-bold transition-all duration-300 bg-[#070712] cursor-pointer z-10"
                  style={{
                    left: `${left}px`,
                    top: `${top}px`,
                    borderColor: isActive ? step.accentColor : "rgba(255,255,255,0.15)",
                    color: isActive ? step.accentColor : "rgba(255,255,255,0.4)",
                    boxShadow: isActive ? `0 0 15px -2px ${step.accentColor}` : "none"
                  }}
                >
                  {isActive && (
                    <motion.div 
                      className="absolute -inset-1 rounded-full border opacity-20"
                      style={{ borderColor: step.accentColor }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  )}
                  {step.num}
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: Dynamic Info Cards Showcase */}
          <div className="flex-1 w-full relative min-h-[280px]">
            {/* Background watermarked large icon */}
            <ActiveIcon className="absolute right-0 bottom-0 w-36 h-36 opacity-[0.02] text-white/50 pointer-events-none z-0" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="relative z-10 h-full flex flex-col justify-between space-y-6"
              >
                {/* Header details */}
                <div className="space-y-3.5">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300"
                      style={{
                        borderColor: `${currentStep.accentColor}30`,
                        background: `${currentStep.accentColor}08`
                      }}
                    >
                      <ActiveIcon className="w-5 h-5 animate-pulse" style={{ color: currentStep.accentColor }} />
                    </div>
                    <div>
                      <span 
                        className="text-[10px] font-mono font-bold tracking-widest uppercase block"
                        style={{ color: currentStep.accentColor }}
                      >
                        Phase {currentStep.num} &bull; {currentStep.phase}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight leading-tight mt-0.5">
                        {currentStep.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-sm sm:text-base text-white/50 leading-relaxed font-sans max-w-xl">
                    {currentStep.desc}
                  </p>
                </div>

                {/* Outcomes tag list */}
                <div className="space-y-3 pt-6 border-t border-white/5">
                  <span className="text-[9px] font-mono uppercase tracking-widest font-bold text-white/30 block">
                    Outcomes &amp; Deliverables
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentStep.deliverables.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx}
                        className="flex items-center gap-2 text-xs font-mono font-medium px-3.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-white/60 hover:text-white transition-colors duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: currentStep.accentColor }} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
