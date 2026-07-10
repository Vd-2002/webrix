"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Database, Cloud, Terminal } from "lucide-react";

export default function ServicesTechnologies() {
const techSegments = [
    {
      title: "Frontend Engines",
      icon: Monitor,
      color: "#60A5FA",
      tag: "USER INTERFACE",
      items: [
        { name: "Next.js 16 (App Router)", spec: "Fast Server Loading" },
        { name: "React 19 Core Engine", spec: "Interactive Layouts" },
        { name: "Tailwind CSS v4", spec: "Custom Styling" },
        { name: "Framer Motion 12", spec: "Smooth Animations" }
      ]
    },
    {
      title: "Backend & Systems",
      icon: Server,
      color: "#A78BFA",
      tag: "API & SERVICES",
      items: [
        { name: "Node.js Core Engines", spec: "Fast Connections" },
        { name: "Rust Compiler Systems", spec: "Secure Core Code" },
        { name: "FastAPI / Python", spec: "Smart AI Models" },
        { name: "Express / NestJS", spec: "Custom Server Logic" }
      ]
    },
    {
      title: "Data & Relational",
      icon: Database,
      color: "#34D399",
      tag: "DATABASE STORAGE",
      items: [
        { name: "PostgreSQL Database", spec: "Secure Transactions" },
        { name: "Redis Memory Nodes", spec: "Fast Cache Storage" },
        { name: "pgvector Indexing", spec: "Smart Data Storage" },
        { name: "InfluxDB Time-Series", spec: "Live Sensor Records" }
      ]
    },
    {
      title: "Cloud & Pipelines",
      icon: Cloud,
      color: "#F472B6",
      tag: "HOSTING & CLOUD",
      items: [
        { name: "AWS Cloud ECS / VPC", spec: "Cloud Server Clusters" },
        { name: "Docker Platforms", spec: "Server Package Builds" },
        { name: "GitHub Actions CI/CD", spec: "Automated Deployments" },
        { name: "Cloudflare CDNs", spec: "Secure SSL Certificates" }
      ]
    }
  ];

  return (
    <section id="technologies" className="relative z-10 scroll-mt-24 w-full space-y-12">
      {/* Section Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
          Core{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Toolchains
          </span>
        </h2>
        <p className="text-sm text-white/50 font-sans max-w-xl mx-auto">
          We are experts in using the best programming languages, databases, and hosting servers.
        </p>
      </div>

      {/* Motherboard Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto items-stretch">
        {techSegments.map((segment, idx) => {
          const Icon = segment.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="group relative border border-white/10 bg-[#050510]/60 backdrop-blur-xl hover:border-white/20 transition-all duration-500 rounded-3xl p-6 flex flex-col justify-between"
            >
              {/* Circuit glowing dot */}
              <div 
                className="absolute top-4 right-4 w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: segment.color, boxShadow: `0 0 10px ${segment.color}` }}
              />

              <div className="space-y-6">
                {/* Header info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center border"
                      style={{
                        borderColor: `${segment.color}25`,
                        background: `linear-gradient(135deg, ${segment.color}08, transparent)`,
                        color: segment.color
                      }}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-widest text-white/30">{segment.tag}</span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-white tracking-tight pt-1">
                    {segment.title}
                  </h3>
                </div>

                {/* Tech list */}
                <div className="space-y-3.5 pt-4 border-t border-white/5">
                  {segment.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs text-white/80 font-sans font-medium">
                        <span>{item.name}</span>
                        <Terminal className="w-3 h-3 text-white/20" />
                      </div>
                      <div className="text-[9px] font-mono text-white/40 leading-none">
                        {item.spec}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status indicator bottom */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[8px] font-mono text-white/20">
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: segment.color }} />
                <span>TOOLCHAIN READY</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
