"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, FileText, Calendar, Zap, MessageSquare } from "lucide-react";

const FAQS = [
  {
    question: "How quickly can we start a new project?",
    answer: "We will reply to your message in 24 to 48 hours. We can share a project plan in a week and start building your website or app in about two weeks.",
    icon: Calendar
  },
  {
    question: "Do you sign NDAs before reviewing project requirements?",
    answer: "Yes, we sign NDAs to protect your details, code, and project files.",
    icon: FileText
  },
  {
    question: "How do you scope pricing milestones?",
    answer: "We offer clear, fixed-price budgets based on the work needed for your project. You will know the price upfront with no surprise costs.",
    icon: Zap
  },
  {
    question: "Can we run a code audit on our current system first?",
    answer: "Yes, we can check your current website for speed, security, and bugs, and give you a report on how to improve it.",
    icon: MessageSquare
  }
];

function FAQItem({ faq, idx }) {
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
          <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/5 bg-white/[0.01] text-white/50 shrink-0">
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

export default function ContactFAQ() {
  return (
    <section id="contact-faq" className="relative z-10 scroll-mt-24 w-full space-y-12">
      
      {/* FAQ Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Contact{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            FAQs
          </span>
        </h2>
        <p className="text-sm sm:text-base text-white/60 font-sans max-w-xl mx-auto">
          Quick answers to common questions about starting a project with us.
        </p>
      </div>

      {/* Accordion List */}
      <div className="max-w-[800px] mx-auto px-6 space-y-4">
        {FAQS.map((faq, idx) => (
          <FAQItem key={idx} faq={faq} idx={idx} />
        ))}
      </div>

    </section>
  );
}
