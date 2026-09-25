"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, CheckCircle2, Globe, ExternalLink } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

function StickyProjectCard({ project, idx }) {
  const [isHovered, setIsHovered] = useState(false);
  const themeColor = project.color || "#60A5FA";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="sticky border border-white/10 bg-[#070712] rounded-3xl p-6 md:p-10 lg:p-12 w-full min-h-[400px] flex flex-col md:flex-row items-center gap-8 lg:gap-12 transition-all duration-500 shadow-2xl overflow-hidden hover:border-white/20"
      style={{
        // Staggered sticky top offsets so cards stack with top borders visible
        top: `${112 + idx * 24}px`,
        boxShadow: "0 -20px 40px -15px rgba(0,0,0,0.5)",
        zIndex: idx + 1
      }}
    >
      {/* Spotlight aura */}
      <div 
        className="absolute -right-24 -top-24 w-80 h-80 rounded-full opacity-[0.08] blur-[90px] transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${themeColor} 0%, transparent 70%)`
        }}
      />

      {/* LEFT COLUMN: Clean Architecture & Metrics Dashboard Panel (No Image) */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div 
          className="w-full border rounded-2xl overflow-hidden bg-gradient-to-b from-[#0b0b18] to-[#05050e] shadow-xl transition-all duration-500 p-6 sm:p-8 space-y-6"
          style={{
            borderColor: isHovered ? `${themeColor}40` : "rgba(255,255,255,0.08)",
            boxShadow: isHovered ? `0 16px 36px -12px ${themeColor}20` : "none"
          }}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: themeColor }} />
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                PRODUCTION DEPLOYMENT
              </span>
            </div>
            <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-bold">
              ACTIVE
            </span>
          </div>

          {/* Metric Highlight */}
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block font-bold">
              VERIFIED IMPACT
            </span>
            <div 
              className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight"
              style={{ color: themeColor }}
            >
              {project.metric}
            </div>
            <span className="text-xs text-white/50 font-sans block pt-1">
              Production SLA &bull; Optimized Architecture
            </span>
          </div>

          {/* Technical Specs checklist */}
          <div className="space-y-2.5 pt-4 border-t border-white/5">
            {[
              "High-Speed Serverless API Routes",
              "Database Indexing & Fast Caching",
              "100% Responsive Adaptive Layout"
            ].map((spec, sIdx) => (
              <div key={sIdx} className="flex items-center gap-2.5 text-xs text-white/70 font-sans">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: themeColor }} />
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Project Text details & deliverables */}
      <div className="w-full md:w-1/2 flex flex-col justify-between h-full space-y-6">
        
        <div className="space-y-4">
          {/* Tag Header */}
          <div className="flex items-center gap-2">
            <span 
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: themeColor }}
            />
            <span 
              className="text-xs font-mono font-bold tracking-widest uppercase transition-colors duration-300"
              style={{ color: isHovered ? themeColor : "rgba(255,255,255,0.4)" }}
            >
              {project.industry} &bull; {project.category.replace(" Development", "")}
            </span>
          </div>

          {/* Display Name */}
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight leading-tight">
            {project.name}
          </h3>

          {/* Detailed Description */}
          <p className="text-sm sm:text-base text-white/50 leading-relaxed font-sans">
            {project.desc}
          </p>
        </div>

        {/* Technologies List */}
        <div className="space-y-2.5 pt-6 border-t border-white/5">
          <span className="text-[9px] font-mono uppercase tracking-widest font-bold text-white/30 block">
            Core Technologies
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies?.map((tag, tagIdx) => (
              <span 
                key={tagIdx}
                className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/5 text-white/60 hover:text-white transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Links Row */}
        <div className="flex items-center gap-4 pt-2">
          <Link href={`/portfolio/${project.id}`} className="flex items-center gap-2 select-none group/link">
            <span 
              className="text-xs font-mono font-bold uppercase tracking-wider transition-colors duration-300"
              style={{ color: isHovered ? themeColor : "rgba(255,255,255,0.7)" }}
            >
              Explore Case Study
            </span>
            <ArrowRight 
              className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
              style={{ color: isHovered ? themeColor : "rgba(255,255,255,0.4)" }}
            />
          </Link>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono text-white/60 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-200"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>Live Site</span>
              <ExternalLink className="w-3 h-3 text-white/40" />
            </a>
          )}
        </div>

      </div>

    </div>
  );
}

export default function FeaturedProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.projects)) {
          // slice first 4 projects for homepage showcase
          setProjects(data.projects.slice(0, 4));
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="relative z-10 space-y-16 py-0 scroll-mt-24">
      
      {/* Header aligned with Homepage layout */}
      <div className="space-y-4 text-center max-w-2xl mx-auto px-6">
        <h2 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Featured{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Projects
          </span>
        </h2>
        <p className="text-base text-white/60 font-sans max-w-xl mx-auto">
          Explore our recent projects, built with clean code and high-performance architectures.
        </p>
      </div>

      {/* Stacked Sticky Cards Container */}
      <div className="max-w-[1200px] mx-auto px-6 relative space-y-16">
        {projects.map((proj, idx) => (
          <StickyProjectCard 
            key={proj.id || idx} 
            project={proj} 
            idx={idx} 
          />
        ))}
      </div>

      {/* View Portfolio Button */}
      <div className="text-center pt-8">
        <Link href="/portfolio">
          <Button variant="outline" className="px-8 py-3.5 tracking-wider font-semibold rounded-md">
            View All 45+ Projects
          </Button>
        </Link>
      </div>

    </section>
  );
}
