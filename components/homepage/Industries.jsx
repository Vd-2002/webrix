"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Factory, Building, GraduationCap, ShoppingBag, Truck, Hotel, Briefcase } from "lucide-react";

const INDUSTRIES = [
  {
    num: "01",
    title: "Healthcare",
    tag: "EHR & Telehealth",
    desc: "We build HIPAA-compliant portals, custom EHR systems, and secure virtual care solutions that optimize doctor-patient workflows.",
    deliverables: ["HIPAA Compliance", "Telehealth Systems", "Patient Portals"],
    accentColor: "#EF4444", // Red
    icon: Activity,
  },
  {
    num: "02",
    title: "Manufacturing",
    tag: "IoT & Supply Chain",
    desc: "Engineering IoT integrations and real-time inventory systems to help factories automate floor operations and monitor logistics.",
    deliverables: ["IoT Integrations", "Supply Chain Logs", "Predictive Analytics"],
    accentColor: "#F59E0B", // Amber
    icon: Factory,
  },
  {
    num: "03",
    title: "Real Estate",
    tag: "PropTech & CRM",
    desc: "Designing fast MLS listing database engines, brokerage portals, and interactive search systems that connect agents with buyers.",
    deliverables: ["MLS Listing Engines", "Interactive MLS Search", "Agent CRMs"],
    accentColor: "#3B82F6", // Blue
    icon: Building,
  },
  {
    num: "04",
    title: "Education",
    tag: "LMS & Virtual Class",
    desc: "Developing modern Learning Management Systems (LMS), student dashboard portals, and customized virtual classroom environments.",
    deliverables: ["LMS Platforms", "Virtual Classrooms", "Student Dashboards"],
    accentColor: "#10B981", // Green
    icon: GraduationCap,
  },
  {
    num: "05",
    title: "Retail",
    tag: "E-Commerce & POS",
    desc: "Architecting high-conversion headless e-commerce platforms and automated inventory synchronization models for retail operations.",
    deliverables: ["Headless E-commerce", "Omni-channel POS", "Inventory Sync"],
    accentColor: "#EC4899", // Pink
    icon: ShoppingBag,
  },
  {
    num: "06",
    title: "Logistics",
    tag: "Fleet & Warehouse",
    desc: "Building order-tracking pipelines, automated dispatch interfaces, and transport management solutions that increase delivery speeds.",
    deliverables: ["Fleet Management", "Automated Dispatch", "TMS Software"],
    accentColor: "#8B5CF6", // Purple
    icon: Truck,
  },
  {
    num: "07",
    title: "Hospitality",
    tag: "Booking & PMS",
    desc: "Designing responsive booking engines, property management sync utilities, and mobile guest access control pipelines.",
    deliverables: ["Booking Engines", "PMS Integrations", "Guest Portals"],
    accentColor: "#06B6D4", // Cyan
    icon: Hotel,
  },
  {
    num: "08",
    title: "Professional Services",
    tag: "Billing & ERP",
    desc: "Developing custom CRM platforms, automated invoicing pipelines, and integrated project resource planning tools.",
    deliverables: ["ERP Systems", "CRM Integrations", "Automated Billing"],
    accentColor: "#F43F5E", // Rose
    icon: Briefcase,
  }
];

export default function Industries() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  return (
    <section id="industries" className="relative z-10 space-y-16 py-0 scroll-mt-24">
      {/* Header aligned with Homepage layout */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Industries{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            We Serve
          </span>
        </h2>
        <p className="text-base text-white/60 font-sans max-w-xl mx-auto">
          Providing specialized digital engineering and automation architectures across key market sectors.
        </p>
      </div>

      {/* Industries Showcase Container */}
      <div className="max-w-[1200px] mx-auto w-full">
        
        {/* Desktop Layout: Horizontal Expanding Panels Accordion */}
        <div className="hidden lg:flex flex-row gap-4 h-[480px] w-full items-stretch">
          {INDUSTRIES.map((ind, index) => {
            const Icon = ind.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={index}
                layout
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#070712]/40 backdrop-blur-md transition-all duration-500 flex flex-col justify-between p-6 cursor-pointer select-none ${
                  isHovered 
                    ? "flex-[4] border-white/20 bg-[#070712]/60" 
                    : hoveredIndex !== null 
                      ? "flex-[0.8] opacity-40 border-white/5" 
                      : "flex-1"
                }`}
                style={{
                  boxShadow: isHovered ? `0 10px 40px -10px ${ind.accentColor}25` : "none"
                }}
              >
                {/* Dynamic Spotlight Glow visible on hover */}
                <div 
                  className="absolute -right-24 -top-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-10 blur-[80px] transition-all duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${ind.accentColor} 0%, transparent 70%)`,
                    opacity: isHovered ? 0.15 : 0
                  }}
                />

                {/* Content rendering using AnimatePresence for transitions */}
                <AnimatePresence mode="wait">
                  {!isHovered ? (
                    // Collapsed vertical text view
                    <motion.div 
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col items-center justify-between py-8 pointer-events-none"
                    >
                      {/* Icon */}
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/5 bg-white/[0.02]">
                        <Icon className="w-4.5 h-4.5 text-white/80" />
                      </div>
                      
                      {/* Vertical Rotated Title */}
                      <span 
                        className="text-white font-display text-base font-bold tracking-wide uppercase select-none whitespace-nowrap"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                      >
                        {ind.title}
                      </span>
                      
                      {/* Numeral */}
                      <span className="font-mono text-[10px] font-bold text-white/30">
                        {ind.num}
                      </span>
                    </motion.div>
                  ) : (
                    // Expanded horizontal full detail view
                    <motion.div 
                      key="expanded"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col justify-between relative z-10 w-full"
                    >
                      {/* Top row */}
                      <div className="flex justify-between items-start w-full">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center border"
                          style={{ 
                            borderColor: `${ind.accentColor}30`,
                            background: `linear-gradient(135deg, ${ind.accentColor}12, transparent)`
                          }}
                        >
                          <Icon className="w-5.5 h-5.5 animate-pulse" style={{ color: ind.accentColor }} />
                        </div>
                        <span className="font-mono text-xs font-bold text-white/20">
                          {ind.num}
                        </span>
                      </div>

                      {/* Content details bottom aligned */}
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <span className="text-xs font-mono font-bold tracking-widest uppercase" style={{ color: ind.accentColor }}>
                            {ind.tag}
                          </span>
                          <h3 className="text-2xl font-extrabold font-display text-white tracking-tight">
                            {ind.title}
                          </h3>
                          <p className="text-sm text-white/50 leading-relaxed font-sans max-w-sm">
                            {ind.desc}
                          </p>
                        </div>

                        {/* Deliverables capsule badges */}
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                          {ind.deliverables.map((tag, tagIdx) => (
                            <span 
                              key={tagIdx}
                              className="flex items-center gap-1.5 text-[10px] font-mono font-medium px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/5 text-white/70"
                            >
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ind.accentColor }} />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile/Tablet Layout: Vertical Accordion Expanders */}
        <div className="flex flex-col gap-4 lg:hidden w-full">
          {INDUSTRIES.map((ind, index) => {
            const Icon = ind.icon;
            const isOpen = activeMobileIndex === index;
            
            return (
              <motion.div
                key={index}
                onClick={() => setActiveMobileIndex(isOpen ? null : index)}
                className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#070712]/40 backdrop-blur-md transition-all duration-300 p-5 flex flex-col justify-between cursor-pointer ${
                  isOpen ? "border-white/20 bg-[#070712]/60" : "hover:bg-[#070712]/50"
                }`}
                style={{
                  boxShadow: isOpen ? `0 4px 20px -5px ${ind.accentColor}20` : "none"
                }}
              >
                {/* Mobile Header Row */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center border"
                      style={{ 
                        borderColor: `${ind.accentColor}30`,
                        background: `linear-gradient(135deg, ${ind.accentColor}12, transparent)`
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: ind.accentColor }} />
                    </div>
                    <h3 className="text-base font-bold font-display text-white tracking-tight">
                      {ind.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-white/20">
                    {ind.num}
                  </span>
                </div>

                {/* Mobile Details Panel */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden space-y-4 w-full"
                    >
                      <p className="text-xs text-white/50 leading-relaxed font-sans">
                        {ind.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                        {ind.deliverables.map((tag, tagIdx) => (
                          <span 
                            key={tagIdx}
                            className="flex items-center gap-1 text-[9px] font-mono font-medium px-2.5 py-1 rounded-full bg-white/[0.02] border border-white/5 text-white/60"
                          >
                            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: ind.accentColor }} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
