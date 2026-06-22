"use client";

import { motion } from "framer-motion";
import { Activity, Cpu, MapPin, ShoppingBag } from "lucide-react";

const OVERVIEWS = [
  {
    icon: Activity,
    color: "#EF4444",
    title: "Healthcare",
    desc: "Enforcing rigorous compliance regulations (HIPAA, GDPR) on telehealth systems, EHR integrations, and real-time medical vital tracker dashboards.",
    stat: "100% Audit Success"
  },
  {
    icon: Cpu,
    color: "#F59E0B",
    title: "Manufacturing",
    desc: "Connecting assemblies and production lines to live IoT sensory nodes, aggregating telemetry feeds to calculate operational equipment efficiency (OEE).",
    stat: "Sub-10ms Sensor Streams"
  },
  {
    icon: MapPin,
    color: "#3B82F6",
    title: "Real Estate",
    desc: "Optimizing database coordinate index grids to render listings instantaneously, with Mapbox visual map sweeps and bespoke agent CRM panels.",
    stat: "0.2s Map Search Speeds"
  },
  {
    icon: ShoppingBag,
    color: "#EC4899",
    title: "Retail & Commerce",
    desc: "Decoupling standard retail web structures to deliver high-performance Next.js headless storefronts, connecting Stripe APIs and syncing inventory logs.",
    stat: "+42% Conversion Rates"
  }
];

export default function IndustriesOverview() {
  return (
    <section id="industries-overview" className="relative z-10 scroll-mt-24 w-full space-y-12">
      
      {/* Header section */}
      <div className="space-y-4 text-center max-w-2xl mx-auto px-6">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/30">
          General Scope
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Deep Technical{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Specialization
          </span>
        </h2>
        <p className="text-sm sm:text-base text-white/60 font-sans max-w-xl mx-auto">
          We construct tailored database schema, socket structures, and access policies matching the strict requirements of your market segment.
        </p>
      </div>

      {/* Bento-style Columns Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
        {OVERVIEWS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="border border-white/5 bg-[#070712]/30 backdrop-blur-sm rounded-2xl p-6 hover:border-white/10 transition-colors flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4 text-left">
                {/* Icon box with customized borders */}
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center border"
                  style={{
                    borderColor: `${item.color}20`,
                    background: `linear-gradient(135deg, ${item.color}08, transparent)`,
                    color: item.color
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                
                <h3 className="text-lg font-bold text-white font-display">
                  {item.title}
                </h3>
                
                <p className="text-xs text-white/50 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              {/* Status bar in card */}
              <div className="border-t border-white/5 pt-4 text-[10px] font-mono text-left" style={{ color: item.color }}>
                {item.stat}
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
