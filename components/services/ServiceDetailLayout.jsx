"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Terminal, ArrowLeft, HelpCircle, ChevronDown, Cpu } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ServiceDetailLayout({ data }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-[100px] w-full">
      
      {/* 1. Track Hero */}
      <section className="relative z-10 w-full pt-8 pb-12 text-left">
        {/* Glow spots */}
        <div 
          className="absolute w-[280px] h-[280px] rounded-full blur-[100px] top-0 right-1/4 pointer-events-none -z-10 opacity-10"
          style={{ background: `radial-gradient(circle, ${data.themeColor} 0%, transparent 70%)` }}
        />
        
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Link 
              href="/services" 
              className="flex items-center gap-1 text-xs font-mono text-white/40 hover:text-white transition-colors uppercase font-bold tracking-wider"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Services</span>
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full select-none inline-block" style={{ color: data.themeColor }}>
                SERVICE PROFILE
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
                {data.title}
              </h1>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans max-w-2xl">
                {data.tagline}
              </p>
            </div>
            
            <div className="lg:col-span-4 w-full">
              <div className="flex gap-2 justify-start lg:justify-end">
                <a href="#specification">
                  <Button variant="primary" className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-300" style={{ backgroundColor: data.themeColor, color: "#03030c" }}>
                    Configure Integration
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Core Stats counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-8 border-t border-white/5">
            {data.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="border border-white/5 bg-[#070712]/30 backdrop-blur-sm rounded-2xl p-5 hover:border-white/10 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {stat.value}
                </div>
                <div className="text-[10px] font-mono text-white/40 tracking-wider uppercase font-semibold mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Overview & Capabilities */}
      <section id="specification" className="relative z-10 scroll-mt-24 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Overview text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase block" style={{ color: data.themeColor }}>
              CAPABILITIES OVERVIEW
            </span>
            <h3 className="text-2xl font-bold font-display text-white tracking-tight">
              Modular Deliverables
            </h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans font-light">
              {data.overview}
            </p>
            <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-sans font-light">
              Our engineering standards dictate that every service operates with isolated state rules and zero unnecessary runtime dependencies. This ensures fast loads and secure, compliant operations.
            </p>
          </div>

          {/* Capabilities Checklist */}
          <div className="lg:col-span-6 border border-white/10 bg-[#050510]/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl space-y-6">
            <h4 className="text-sm font-bold font-mono tracking-widest text-white/40 uppercase">
              DELIVERABLE SPEC SHEET
            </h4>
            <div className="space-y-4">
              {data.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-white/80 font-sans">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: data.themeColor }} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Architecture Blueprint */}
      <section className="relative z-10 w-full space-y-12">
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-white font-display">
            Architecture{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
              Blueprint
            </span>
          </h2>
          <p className="text-sm text-white/50 font-sans max-w-xl mx-auto">
            {data.architecture.title}
          </p>
        </div>

        {/* Steps wiring layout */}
        <div className="max-w-[800px] mx-auto relative px-6">
          <div className="absolute left-[39px] sm:left-1/2 top-4 bottom-4 w-[1px] bg-white/10 z-0 pointer-events-none transform sm:-translate-x-1/2" />
          
          <div className="space-y-8 w-full">
            {data.architecture.steps.map((step, idx) => (
              <div 
                key={idx}
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between w-full relative z-10 gap-4 sm:gap-0 ${
                  idx % 2 === 0 ? "" : "sm:flex-row-reverse"
                }`}
              >
                {/* Info Card */}
                <div className="w-full sm:w-[45%] pl-16 sm:pl-0">
                  <div className="group border border-white/5 bg-[#070712]/30 backdrop-blur-sm p-5 rounded-2xl hover:border-white/10 transition-colors">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold tracking-widest uppercase block" style={{ color: data.themeColor }}>
                        NODE 0{idx + 1}
                      </span>
                      <h4 className="text-sm font-bold font-display text-white tracking-tight">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-xs text-white/50 leading-relaxed font-sans font-light pt-2">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Node Dot */}
                <div className="absolute left-[39px] sm:left-1/2 top-4 sm:top-auto shrink-0 w-8 h-8 rounded-full bg-[#030308] border border-white/10 flex items-center justify-center z-20 transform -translate-x-1/2 sm:-translate-x-1/2 text-white">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: data.themeColor }} />
                </div>

                <div className="hidden sm:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Track FAQs */}
      <section className="relative z-10 w-full space-y-12">
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-white font-display">
            Target{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
              FAQs
            </span>
          </h2>
          <p className="text-sm text-white/50 font-sans max-w-xl mx-auto">
            Frequently asked questions specifically tailored for our {data.title} track.
          </p>
        </div>

        <div className="max-w-[700px] mx-auto space-y-4 px-4 sm:px-0">
          {data.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="border border-white/5 bg-[#070712]/30 backdrop-blur-sm rounded-2xl overflow-hidden hover:border-white/10 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 shrink-0" style={{ color: data.themeColor }} />
                    <span className="text-xs sm:text-sm font-bold font-display text-white tracking-tight leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-4 h-4 text-white/40" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5">
                        <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-sans font-light">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
