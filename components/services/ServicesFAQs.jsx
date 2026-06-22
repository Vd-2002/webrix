"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function ServicesFAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Does Webrix construct projects on default templates?",
      a: "No. We write all codebases from scratch (Next.js, Node.js, Rust). By avoiding heavy generic templates and visual page builder plugins, we prevent code bloat, reduce server computing costs, and achieve sub-millisecond execution speeds."
    },
    {
      q: "How are compliance guidelines like HIPAA/GDPR managed?",
      a: "During the blueprint stage, we identify the exact legal and security requirements of your operations. We then construct dedicated relational models with field-level encryption, isolated database instances, secure JWT authentication patterns, and audited logs."
    },
    {
      q: "What is the average latency for a custom database API?",
      a: "Our core API endpoints average a latency of 12ms under typical loads. We achieve this by optimizing PostgreSQL indexes, structuring Redis cache layers, and deploying server container nodes within proximity of the edge network."
    },
    {
      q: "How is post-launch operational support managed?",
      a: "We offer dedicated operational SLAs (Service Level Agreements) that include priority bug fixes, server metrics monitoring, and regular backups. You will have direct access to our core systems engineers via a dedicated Slack workspace."
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="relative z-10 scroll-mt-24 w-full space-y-12">
      {/* Section Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
          Frequently Asked{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Questions
          </span>
        </h2>
        <p className="text-sm text-white/50 font-sans max-w-xl mx-auto">
          Clear answers to common questions regarding our deliverables, tech choices, and SLAs.
        </p>
      </div>

      {/* Accordion container */}
      <div className="max-w-[700px] mx-auto space-y-4 px-4 sm:px-0">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx}
              className="border border-white/5 bg-[#070712]/30 backdrop-blur-sm rounded-2xl overflow-hidden hover:border-white/10 transition-colors"
            >
              {/* Question Row */}
              <button
                onClick={() => toggle(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold font-display text-white tracking-tight leading-snug">
                    {faq.q}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-4 h-4 text-white/40 group-hover:text-white" />
                </motion.div>
              </button>

              {/* Answer Content */}
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
  );
}
