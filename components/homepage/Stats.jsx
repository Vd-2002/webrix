"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function CountUp({ end, suffix = "", duration = 1200 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const STATS_DATA = [
  {
    id: "projects",
    endValue: 30,
    suffix: "+",
    label: "Projects Delivered",
    description: "Online shops, custom business software, and mobile apps.",
    accentColor: "#60A5FA", // Blue
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    )
  },
  {
    id: "clients",
    endValue: 20,
    suffix: "+",
    label: "Happy Clients",
    description: "Working with startups and local businesses.",
    accentColor: "#818CF8", // Indigo
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    id: "services",
    endValue: 5,
    suffix: "",
    label: "Core Services",
    description: "Custom work in websites, apps, marketing, and AI.",
    accentColor: "#34D399", // Emerald
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    )
  },
  {
    id: "satisfaction",
    endValue: 99,
    suffix: "%",
    label: "Satisfaction Rate",
    description: "Driven by clean code, quick updates, and high quality.",
    accentColor: "#A78BFA", // Violet
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    )
  }
];

export default function Stats() {
  return (
    <section id="stats" className="relative z-10 scroll-mt-24">
      {/* Grid Container matching standard max-w layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
        {STATS_DATA.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -6 }}
            className="group relative border border-white/10 bg-[#070712]/40 backdrop-blur-md hover:border-white/20 transition-all duration-500 rounded-3xl p-8 overflow-hidden flex flex-col justify-between"
          >
            {/* Blueprint grid layout backdrop inside card */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: "24px 24px"
              }}
            />

            {/* Glowing spot background inside card */}
            <div 
              className="absolute -right-20 -top-20 w-52 h-52 rounded-full opacity-0 group-hover:opacity-10 blur-[80px] transition-all duration-700 pointer-events-none -z-10"
              style={{
                background: `radial-gradient(circle, ${item.accentColor} 0%, transparent 70%)`
              }}
            />

            {/* Vertical Stack: Icon -> Value -> Title -> Description */}
            <div className="space-y-6 relative z-10 flex flex-col h-full">
              {/* Icon Container matching WhyChooseUs styling */}
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300"
                style={{
                  borderColor: `${item.accentColor}30`,
                  background: `linear-gradient(135deg, ${item.accentColor}12 0%, transparent 100%)`,
                  color: item.accentColor
                }}
              >
                {item.icon}
              </div>

              {/* Textual Metrics Block */}
              <div className="space-y-2">
                <div 
                  className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display"
                  style={{ color: item.accentColor }}
                >
                  <CountUp end={item.endValue} suffix={item.suffix} />
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold font-display text-white tracking-tight leading-snug">
                    {item.label}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed font-sans group-hover:text-white/60 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
