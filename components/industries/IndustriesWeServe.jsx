"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Cpu, Map, ShoppingBag, ShieldCheck, Terminal, Server, Clock } from "lucide-react";

const DATA = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Activity,
    color: "#EF4444",
    client: "Telehealth Networks, EHR Software Providers, Bio-Tech Labs",
    desc: "We build secure systems that coordinate patient consultations, encrypt medical charts, and stream live vitals telemetry with high safety standards.",
    capabilities: [
      "HIPAA & GDPR compliance framework vaults.",
      "WebSocket streams mapping vital sensor signals in real time.",
      "Secure doctor-patient communication nodes with end-to-end encryption.",
      "Automated electronic health record (EHR) payload sync pipelines."
    ],
    codeBlock: `{
  "system": "Aegis_Clinical_V3",
  "compliance": {
    "hipaa_pass": true,
    "encryption": "AES-256-GCM"
  },
  "websocket_pipeline": {
    "heartrate_ms": 10,
    "active_connections": 1420
  },
  "ehr_outbound": "REST_JSON_SECURE"
}`
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Cpu,
    color: "#F59E0B",
    client: "IoT Hardware Manufacturers, Factory Floors, Supply Chain Networks",
    desc: "We connect physical assembly floor monitors to centralized servers, translating raw hardware streams into OEE dials and supply chain logistics records.",
    capabilities: [
      "InfluxDB time-series database optimizations for massive metrics logs.",
      "Hardware sensors handshake configurations using low-latency WebSockets.",
      "OEE computation dashboard terminals with live OEE statistics.",
      "Supply chain transit logs synchronization under strict offline-safety rules."
    ],
    codeBlock: `{
  "system": "Apex_Assembly_Control",
  "iot_node": "sensor-04",
  "telemetry": {
    "broadcasting_hz": 100,
    "influx_write_ms": 1.2
  },
  "metrics": {
    "oee_index": 0.842,
    "runtime_sec": 86400
  }
}`
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: Map,
    color: "#3B82F6",
    client: "PropTech Platforms, Real Estate CRM Providers, MLS Listing Databases",
    desc: "We build search index database clusters that load properties instantly, linking Mapbox geographic boundaries and custom agency workflow pipelines.",
    capabilities: [
      "PostgreSQL coordinate indexing (PostGIS) for sub-second spatial queries.",
      "Interactive Mapbox map overlays with custom markers clusters.",
      "Bespoke real estate agent pipelines mapping customer leads.",
      "Automated daily sync scripts parsing regional MLS XML databases."
    ],
    codeBlock: `{
  "system": "Oakridge_Spatial_API",
  "database": "PostgreSQL_PostGIS",
  "query_parameters": {
    "coordinates": [37.7749, -122.4194],
    "radius_meters": 1500
  },
  "execute_time": "0.04s"
}`
  },
  {
    id: "retail",
    name: "Retail & Commerce",
    icon: ShoppingBag,
    color: "#EC4899",
    client: "Headless E-Commerce Brands, POS Platforms, Payment Gateways",
    desc: "We engineer Next.js decoupled commerce frontends streaming checkout payloads, Stripe credit transactions, and live store inventory updates.",
    capabilities: [
      "Next.js headless frontends with 99+ Lighthouse performance ratings.",
      "Stripe transaction routing systems with automated fallback loops.",
      "Real-time inventory synchronization via Edge servers.",
      "Optimized cart checkouts mitigating conversion speed bottlenecks."
    ],
    codeBlock: `{
  "system": "Vanguard_Storefront_POS",
  "rendering": "Next.js_Edge_SSR",
  "checkout_network": {
    "stripe_latency_ms": 185,
    "cart_ttl_sec": 1200
  },
  "inventory_status": "synced_global"
}`
  }
];

export default function IndustriesWeServe() {
  const [activeTab, setActiveTab] = useState("healthcare");

  const currentData = DATA.find((item) => item.id === activeTab);

  return (
    <section id="industries-we-serve" className="relative z-10 scroll-mt-24 w-full space-y-12">
      
      {/* Title */}
      <div className="space-y-4 text-center max-w-2xl mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Capabilities by{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Sector
          </span>
        </h2>
        <p className="text-sm sm:text-base text-white/60 font-sans max-w-xl mx-auto">
          Click below to explore our specific capability checklists, clients, and schema outputs.
        </p>
      </div>

      {/* Tabs list */}
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 border border-white/5 bg-[#070712]/50 backdrop-blur-md rounded-2xl">
          {DATA.map((item) => {
            const isActive = activeTab === item.id;
            const TabIcon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wider font-display transition-colors duration-300 cursor-pointer flex items-center gap-2 ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                <TabIcon className="w-4 h-4 shrink-0" style={{ color: item.color }} />
                <span className="relative z-10">{item.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="industriesFilterBg"
                    className="absolute inset-0 bg-white/[0.04] border border-white/10 rounded-xl z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Tab Dashboard Content */}
      <div className="max-w-[1200px] mx-auto px-6">
        <AnimatePresence mode="wait">
          {currentData && (
            <motion.div
              key={currentData.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="border border-white/10 bg-[#070712] rounded-3xl p-6 sm:p-10 lg:p-12 grid lg:grid-cols-12 gap-8 lg:gap-12 relative overflow-hidden"
            >
              {/* Decorative radial glow */}
              <div 
                className="absolute -right-32 -top-32 w-96 h-96 rounded-full opacity-[0.04] blur-[90px] pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${currentData.color} 0%, transparent 70%)`
                }}
              />

              {/* Left Details block */}
              <div className="lg:col-span-7 space-y-6 text-left relative z-10">
                <div className="space-y-2">
                  <span 
                    className="text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border"
                    style={{
                      borderColor: `${currentData.color}25`,
                      backgroundColor: `${currentData.color}05`,
                      color: currentData.color
                    }}
                  >
                    {currentData.name} Architecture
                  </span>
                  
                  <div className="text-xs text-white/40 pt-2 font-mono flex items-center gap-2">
                    <Server className="w-3.5 h-3.5 shrink-0" style={{ color: currentData.color }} />
                    <span>Target Clients: {currentData.client}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans">
                  {currentData.desc}
                </p>

                {/* Capabilities list */}
                <div className="space-y-3.5 pt-4 border-t border-white/5">
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-white/30 block">
                    Tailored Capabilities
                  </span>
                  <ul className="space-y-3">
                    {currentData.capabilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/60 font-sans">
                        <ShieldCheck className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Code/JSON block */}
              <div className="lg:col-span-5 w-full space-y-4 relative z-10">
                <div className="bg-[#030308]/90 border border-white/10 rounded-2xl p-5 font-mono text-[10.5px] text-white/50 text-left relative overflow-hidden h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-3 text-[9px] text-white/30 uppercase tracking-widest font-semibold">
                    <div className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" style={{ color: currentData.color }} />
                      <span>scoping-payload.json</span>
                    </div>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </span>
                  </div>

                  <pre className="flex-1 overflow-x-auto select-none pt-2 text-white/70 leading-relaxed">
                    {currentData.codeBlock}
                  </pre>

                  <div className="border-t border-white/5 pt-3 mt-3 flex items-center justify-between text-[8px] text-white/20">
                    <span>SLA: 99.99%</span>
                    <span>LATENCY: &lt;15ms</span>
                  </div>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
}
