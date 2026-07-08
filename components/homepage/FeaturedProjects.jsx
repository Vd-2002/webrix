"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

function StickyProjectCard({ project, idx }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="sticky border border-white/10 bg-[#070712] rounded-3xl p-6 md:p-10 lg:p-12 w-full min-h-[420px] flex flex-col md:flex-row items-center gap-8 lg:gap-12 transition-all duration-500 shadow-2xl overflow-hidden hover:border-white/15"
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
          background: `radial-gradient(circle, ${project.accentColor || project.color || "#60A5FA"} 0%, transparent 70%)`
        }}
      />

      {/* LEFT COLUMN: Realistic Browser Device Mockup Frame */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div 
          className="w-full border rounded-2xl overflow-hidden bg-black/60 shadow-xl transition-all duration-500"
          style={{
            borderColor: isHovered ? `${project.color || "#60A5FA"}30` : "rgba(255,255,255,0.06)",
            boxShadow: isHovered ? `0 12px 30px -10px ${project.color || "#60A5FA"}20` : "none"
          }}
        >
          {/* Browser Bar */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-white/[0.01]">
            <div className="flex gap-1.5 shrink-0">
              <div className="w-2 h-2 rounded-full bg-red-500/80" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <div className="w-2 h-2 rounded-full bg-green-500/80" />
            </div>
            {/* Simulated URL bar */}
            <div className="w-full max-w-[180px] h-4 rounded-md bg-white/[0.02] border border-white/5 text-[8px] text-white/30 flex items-center justify-center font-mono mx-auto select-none">
              webrix.dev/{project.name.toLowerCase().replace(/ /g, "-")}
            </div>
          </div>

          {/* Browser Viewport with Portfolio Mockup */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
            <Image 
              src={project.image || "/project_healthcare.png"} 
              alt={project.name}
              fill
              className="object-cover transition-transform duration-700 hover:scale-102"
              sizes="(max-w: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Project Text details & deliverables */}
      <div className="w-full md:w-1/2 flex flex-col justify-between h-full space-y-6">
        
        <div className="space-y-4">
          {/* Tag Header */}
          <div className="flex items-center gap-2">
            <span 
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: project.color || "#60A5FA" }}
            />
            <span 
              className="text-xs font-mono font-bold tracking-widest uppercase transition-colors duration-300"
              style={{ color: isHovered ? (project.color || "#60A5FA") : "rgba(255,255,255,0.4)" }}
            >
              {project.industry} &bull; {project.tag}
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

        {/* Interactive CTA Link */}
        <a href={`/portfolio/${project.id}`} className="flex items-center gap-2 pt-2 select-none">
          <span 
            className="text-xs font-mono font-bold uppercase tracking-wider transition-colors duration-300"
            style={{ color: isHovered ? (project.color || "#60A5FA") : "rgba(255,255,255,0.6)" }}
          >
            Explore Case Study
          </span>
          <ArrowRight 
            className="w-4 h-4 transition-transform duration-300"
            style={{ 
              color: isHovered ? (project.color || "#60A5FA") : "rgba(255,255,255,0.4)",
              transform: isHovered ? "translateX(4px) rotate(-45deg)" : "none"
            }}
          />
        </a>

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
        if (data.success) {
          // slice first 3 projects for homepage showcase
          setProjects(data.projects.slice(0, 3));
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
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Featured{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Projects
          </span>
        </h2>
        <p className="text-base text-white/60 font-sans max-w-xl mx-auto">
          Explore our recent digital products, engineered with clean code and high-fidelity interfaces.
        </p>
      </div>

      {/* Stacked Sticky Cards Container */}
      <div className="max-w-[1200px] mx-auto px-6 relative space-y-16">
        {projects.map((proj, idx) => (
          <StickyProjectCard 
            key={idx} 
            project={proj} 
            idx={idx} 
          />
        ))}
      </div>

      {/* View Portfolio Button */}
      <div className="text-center pt-8">
        <Button variant="outline" className="px-8 py-3.5 tracking-wider font-semibold rounded-md">
          View Portfolio
        </Button>
      </div>

    </section>
  );
}
