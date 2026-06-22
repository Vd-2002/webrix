"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ShieldAlert, Cpu, Database, ShoppingBag } from "lucide-react";

const FAQS = [
  {
    question: "Do you sign Business Associate Agreements (BAAs) for healthcare builds?",
    answer: "Yes, absolutely. We sign BAAs with telehealth platforms and clinic providers, guaranteeing strict HIPAA compliance, AES-256 database encryption at rest, and secure access audits.",
    icon: ShieldAlert,
    color: "#EF4444"
  },
  {
    question: "Can factory Floor sensors run offline safely during sync drops?",
    answer: "Yes. Our IoT systems utilize an offline-first storage model that logs assembly statistics locally. Sockets sync raw datasets back to InfluxDB as soon as connections re-establish.",
    icon: Cpu,
    color: "#F59E0B"
  },
  {
    question: "How do PostGIS databases improve listing coordinate searches?",
    answer: "Standard SQL spatial indexing lags when indexing coordinates in real time. We optimize query planners using PostGIS spatial indexing bounding queries to sub-100m zones in 0.04s.",
    icon: Database,
    color: "#3B82F6"
  },
  {
    question: "How does edge rendering improve cart checkouts?",
    answer: "We render commerce frontends close to users on Vercel edge networks, streaming payments to Stripe. This bypasses legacy database threadlocks, increasing checkout conversion by +42%.",
    icon: ShoppingBag,
    color: "#EC4899"
  }
];

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = faq.icon;

  return (
    <div 
      className="border border-white/5 bg-[#070712]/40 rounded-2xl overflow-hidden transition-colors hover:border-white/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
      >
        <div className="flex items-center gap-3.5 pr-4">
          <div 
            className="w-8 h-8 rounded-lg flex items-center justify-center border shrink-0"
            style={{
              borderColor: `${faq.color}20`,
              background: `linear-gradient(135deg, ${faq.color}05, transparent)`,
              color: faq.color
            }}
          >
            <Icon className="w-4 h-4" />
          </div>
          <span className="text-sm sm:text-base font-semibold text-white tracking-tight leading-snug">
            {faq.question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-white/40 shrink-0"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 pt-1 border-t border-white/5 text-xs sm:text-sm text-white/50 leading-relaxed pl-[48px] font-sans">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function IndustriesFAQ() {
  return (
    <section id="industries-faq" className="relative z-10 scroll-mt-24 w-full space-y-12">
      
      {/* FAQ Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Compliance & Technical{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            FAQs
          </span>
        </h2>
        <p className="text-sm sm:text-base text-white/60 font-sans max-w-xl mx-auto">
          Common queries regarding industry certifications, edge pipelines, and data sync procedures.
        </p>
      </div>

      {/* Accordion List */}
      <div className="max-w-[800px] mx-auto px-6 space-y-4">
        {FAQS.map((faq, idx) => (
          <FAQItem key={idx} faq={faq} />
        ))}
      </div>

    </section>
  );
}
