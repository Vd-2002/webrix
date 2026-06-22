"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, ShieldCheck, Zap, Activity, Cpu } from "lucide-react";
import Button from "@/components/ui/Button";

const CASE_STUDIES = [
  {
    num: "01",
    client: "Vanguard Headless Store",
    title: "How we achieved +42% in checkout conversions and reduced load speeds to 0.4s",
    tag: "E-Commerce Performance Engineering",
    challenge: "The client's legacy Shopify liquid template monolith suffered from slow load times, bloated layouts, and rigid product filters. Long loading speeds caused a significant drop-off in user checkouts, especially during high-traffic sales periods.",
    solution: "We engineered a clean headless architecture utilizing Next.js, decoupling the frontend layout from the commerce backend. The store streams cart modifications and pricing via edge endpoints, utilizing Stripe for secure transactions and Vercel for zero-latency hosting.",
    metricValue: "+42%",
    metricLabel: "Checkout Conversion Lift",
    submetrics: [
      { name: "Time to First Byte", value: "45ms" },
      { name: "First Contentful Paint", value: "0.4s" },
      { name: "Mobile PageSpeed Score", value: "99/100" }
    ],
    color: "#60A5FA",
    icon: Zap
  },
  {
    num: "02",
    client: "Aegis Clinical Infrastructure",
    title: "Architecting a HIPAA-compliant clinical teleconsultation dashboard with zero downtime",
    tag: "Secure Health Systems Architecture",
    challenge: "Aegis required an enterprise dashboard mapping active doctor-patient consult slots and aggregating vital medical sensor feeds. The system had to pass stringent audits, enforce encryption, and prevent data leak outages.",
    solution: "We built an ISO/HIPAA compliant dashboard powered by real-time WebSockets and secure telemetry database arrays. The system operates on a containerized edge grid, separating medical logs from user accounts, and is backed by real-time security scanning pipelines.",
    metricValue: "100%",
    metricLabel: "Audit Security Pass Rate",
    submetrics: [
      { name: "API Stream Latency", value: "12ms" },
      { name: "Database Encryption", value: "AES-256" },
      { name: "System SLA Uptime", value: "99.99%" }
    ],
    color: "#34D399",
    icon: ShieldCheck
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative z-10 scroll-mt-24 w-full space-y-16">
      
      {/* Header section */}
      <div className="space-y-4 text-center max-w-2xl mx-auto px-6">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#A78BFA] bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-full select-none inline-block">
          Deep Dives
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Real World{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Case Studies
          </span>
        </h2>
        <p className="text-sm sm:text-base text-white/60 font-sans max-w-xl mx-auto">
          Read the concrete engineering challenges, system architectures, and metrics behind our successful deployments.
        </p>
      </div>

      {/* Case studies list */}
      <div className="space-y-16 max-w-[1200px] mx-auto">
        {CASE_STUDIES.map((study, idx) => {
          const StudyIcon = study.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="border border-white/10 bg-[#070712] rounded-3xl p-6 md:p-10 lg:p-12 relative overflow-hidden hover:border-white/15 transition-all duration-300"
            >
              {/* Radial gradient spotlight background glow */}
              <div 
                className="absolute -right-32 -top-32 w-96 h-96 rounded-full opacity-[0.04] blur-[90px] pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${study.color} 0%, transparent 70%)`
                }}
              />

              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                {/* Left Side: Summary text & deliverables */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Top tags */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-white/40">
                      CASE STUDY {study.num}
                    </span>
                    <span 
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: study.color }}
                    />
                    <span 
                      className="text-xs font-mono font-bold tracking-widest uppercase"
                      style={{ color: study.color }}
                    >
                      {study.tag}
                    </span>
                  </div>

                  {/* Main title */}
                  <h3 className="text-xl sm:text-3xl font-extrabold font-display text-white tracking-tight leading-tight">
                    {study.title}
                  </h3>

                  {/* Challenge & Solution details */}
                  <div className="grid sm:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-2">
                      <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        The Challenge
                      </h4>
                      <p className="text-xs text-white/50 leading-relaxed font-sans">
                        {study.challenge}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                        The Solution
                      </h4>
                      <p className="text-xs text-white/50 leading-relaxed font-sans">
                        {study.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Large metrics dashboard widget */}
                <div className="lg:col-span-5 w-full space-y-6">
                  {/* Large metric container card */}
                  <div className="border border-white/5 bg-[#050510]/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 space-y-4 flex flex-col justify-center items-center text-center">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center border"
                      style={{
                        borderColor: `${study.color}20`,
                        background: `linear-gradient(135deg, ${study.color}08, transparent)`,
                        color: study.color
                      }}
                    >
                      <StudyIcon className="w-6 h-6" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
                        {study.metricValue}
                      </div>
                      <div className="text-xs text-white/50 font-sans tracking-wide uppercase font-semibold">
                        {study.metricLabel}
                      </div>
                    </div>
                  </div>

                  {/* Submetrics list */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {study.submetrics.map((sub, subIdx) => (
                      <div 
                        key={subIdx}
                        className="border border-white/5 bg-white/[0.01] rounded-xl p-4 text-center space-y-1"
                      >
                        <div className="text-xs font-mono font-bold text-white">
                          {sub.value}
                        </div>
                        <div className="text-[9px] text-white/40 font-sans leading-none uppercase tracking-wide">
                          {sub.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
