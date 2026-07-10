"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout, Server, Database, Cloud } from "lucide-react";

export default function TechUsed() {
  const [activeTab, setActiveTab] = useState("frontend");

  const categories = [
    { id: "frontend", name: "Frontend", icon: Layout },
    { id: "backend", name: "Backend & Systems", icon: Server },
    { id: "databases", name: "Databases", icon: Database },
    { id: "infra", name: "Infrastructure / DevOps", icon: Cloud }
  ];

  const techData = {
    frontend: [
      { name: "Next.js 16 (App Router)", score: 98, desc: "Used to build fast loading pages, secure servers, and smooth transitions.", color: "#60A5FA" },
      { name: "React 19 Core Engine", score: 95, desc: "Used to make the user interface fast, interactive, and responsive.", color: "#818CF8" },
      { name: "Tailwind CSS v4 Engine", score: 90, desc: "Used to style the website beautifully without slowing down page loads.", color: "#F472B6" }
    ],
    backend: [
      { name: "Node.js Core Systems", score: 94, desc: "Used to run fast databases, connect user accounts, and update data instantly.", color: "#34D399" },
      { name: "Rust Compiler Systems", score: 85, desc: "Used to write secure code for custom background tasks and databases.", color: "#60A5FA" },
      { name: "FastAPI / Python", score: 88, desc: "Used to connect smart AI models, automate data tasks, and track logs.", color: "#F59E0B" }
    ],
    databases: [
      { name: "PostgreSQL Database Engine", score: 92, desc: "Used to organize and store structured user records, payments, and accounts securely.", color: "#A78BFA" },
      { name: "Redis Memory Cache Node", score: 95, desc: "Used to store user sessions temporarily and make website searches instant.", color: "#F472B6" },
      { name: "InfluxDB Time-Series Engine", score: 82, desc: "Used to save live sensor signals and show logs on factory dashboards.", color: "#34D399" }
    ],
    infra: [
      { name: "AWS Cloud Architecture", score: 90, desc: "Used to host files on cloud servers, secure the site, and scale up for visitors.", color: "#60A5FA" },
      { name: "Docker Containers", score: 95, desc: "Used to package code so that it works perfectly on any server.", color: "#818CF8" },
      { name: "GitHub Actions CI/CD", score: 92, desc: "Used to automate tests and push code updates live without taking the site offline.", color: "#34D399" }
    ]
  };

  return (
    <section id="tech-used" className="relative z-10 scroll-mt-24 w-full space-y-12">
      {/* Section Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Technologies{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            We Use
          </span>
        </h2>
        <p className="text-base text-white/50 font-sans max-w-xl mx-auto">
          A breakdown of the programming languages and hosting tools we use.
        </p>
      </div>

      {/* Category Tab Selector */}
      <div className="max-w-[1200px] mx-auto w-full space-y-8">
        
        {/* Tab Headers */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-white/5 pb-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-xs font-semibold font-display transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? "border-[#60A5FA] bg-[#60A5FA]/10 text-white shadow-[0_0_15px_-4px_rgba(96,165,250,0.3)]" 
                    : "border-white/5 bg-[#070712]/30 text-white/50 hover:text-white hover:border-white/10"
                }`}
              >
                <Icon className="w-4.5 h-4.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panel Content (Crossfading grid lists) */}
        <div className="min-h-[220px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {techData[activeTab].map((tech, idx) => (
                <div
                  key={idx}
                  className="group relative border border-white/5 bg-[#070712]/30 backdrop-blur-sm rounded-3xl p-6 overflow-hidden flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Top row with progress bar */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-white/80 group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                      <span className="font-mono text-xs font-bold" style={{ color: tech.color }}>
                        {tech.score}%
                      </span>
                    </div>

                    {/* Progress slider track */}
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.score}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: tech.color }}
                      />
                    </div>

                    <p className="text-xs text-white/50 leading-relaxed font-sans font-light pt-2">
                      {tech.desc}
                    </p>
                  </div>

                  {/* Dot status bottom */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[9px] font-mono text-white/20">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tech.color }} />
                    <span>STABLE VERSION</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
