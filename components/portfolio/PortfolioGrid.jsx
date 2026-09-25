"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Search, 
  Globe, 
  ExternalLink, 
  Zap, 
  Code2,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
  X
} from "lucide-react";
import Link from "next/link";

const CATEGORIES = [
  "All",
  "Website Development",
  "Custom Software Development",
  "AI Automation",
  "Mobile App Development",
  "Digital Marketing"
];

const INDUSTRIES = [
  "All",
  "Real Estate",
  "Healthcare & Medical",
  "Manufacturing & Logistics",
  "Retail & E-Commerce",
  "Finance & FinTech",
  "Education & Academia",
  "Chemical & Energy",
  "Security Services"
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.projects)) {
          setProjects(data.projects);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load projects:", err);
        setLoading(false);
      });
  }, []);

  // Filter projects by category, industry, and search input
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      if (activeFilter !== "All" && project.category.toLowerCase() !== activeFilter.toLowerCase()) {
        return false;
      }
      // Industry filter
      if (selectedIndustry !== "All" && project.industry !== selectedIndustry) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const nameMatch = (project.name || "").toLowerCase().includes(query);
        const descMatch = (project.desc || "").toLowerCase().includes(query);
        const indMatch = (project.industry || "").toLowerCase().includes(query);
        const techMatch = Array.isArray(project.technologies) && project.technologies.some(t => t.toLowerCase().includes(query));
        return nameMatch || descMatch || indMatch || techMatch;
      }
      return true;
    });
  }, [projects, activeFilter, selectedIndustry, searchQuery]);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(9);
  }, [activeFilter, selectedIndustry, searchQuery]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const remainingCount = filteredProjects.length - visibleCount;

  return (
    <section id="projects-grid" className="relative z-10 scroll-mt-24 w-full space-y-12">
      
      {/* Search & Category Filter Header */}
      <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto w-full">
        
        {/* Search Bar */}
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by name, stack (Next.js, WordPress, PHP...), or industry..."
            className="w-full bg-[#070714]/90 border border-white/10 rounded-2xl pl-11 pr-10 py-3.5 text-sm text-white placeholder-white/40 backdrop-blur-md focus:outline-none focus:border-cyan-400/50 transition-colors shadow-lg shadow-black/40"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-white/40 hover:text-white rounded-full bg-white/5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Primary Service Categories Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 border border-white/10 bg-[#070712]/70 backdrop-blur-md rounded-2xl">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-semibold tracking-wider font-display transition-colors duration-300 cursor-pointer ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                <span className="relative z-10">
                  {cat === "All" ? `All Projects (${projects.length})` : cat.replace(" Development", "")}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="portfolioFilterBg"
                    className="absolute inset-0 bg-white/[0.08] border border-white/15 rounded-xl z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Industry Filter Quick Chips */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-3xl">
          {INDUSTRIES.map((ind) => {
            const isActive = selectedIndustry === ind;
            return (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`text-[11px] font-mono px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  isActive 
                    ? "bg-cyan-500/10 border-cyan-400 text-cyan-300 shadow-sm shadow-cyan-500/10" 
                    : "bg-white/[0.02] border-white/5 text-white/50 hover:text-white hover:border-white/15"
                }`}
              >
                {ind}
              </button>
            );
          })}
        </div>

        {/* Results Counter Summary */}
        <div className="flex items-center justify-between w-full text-xs font-mono text-white/40 px-2 pt-2 border-t border-white/5">
          <span>
            Showing <strong className="text-white">{Math.min(visibleCount, filteredProjects.length)}</strong> of <strong className="text-white">{filteredProjects.length}</strong> projects
          </span>
          {(activeFilter !== "All" || selectedIndustry !== "All" || searchQuery) && (
            <button
              onClick={() => {
                setActiveFilter("All");
                setSelectedIndustry("All");
                setSearchQuery("");
              }}
              className="text-cyan-400 hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          )}
        </div>

      </div>

      {/* Projects Grid Container */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-24 space-y-4">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-cyan-400"></div>
          <span className="font-mono text-xs text-white/40">Loading engineering portfolio catalog...</span>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="border border-dashed border-white/10 rounded-3xl p-16 text-center space-y-4 max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto text-white/40">
            <Search className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">No projects found</h3>
          <p className="text-xs text-white/50">
            No projects matched your active filters or search terms. Try searching for other technologies like Next.js, WordPress, PHP, or selecting another category.
          </p>
          <button
            onClick={() => {
              setActiveFilter("All");
              setSelectedIndustry("All");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-colors cursor-pointer"
          >
            Clear Search &amp; Filters
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          {/* Pure Typography & Code Badges Grid - No Images */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          >
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((project, idx) => {
                const themeColor = project.color || "#38BDF8";
                const indexFormatted = String(idx + 1).padStart(2, "0");

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="group relative border border-white/10 hover:border-white/20 bg-gradient-to-b from-[#0a0a14] to-[#05050c] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 overflow-hidden"
                  >
                    {/* Top ambient color glow accent */}
                    <div 
                      className="absolute -top-20 -right-20 w-44 h-44 rounded-full opacity-10 group-hover:opacity-25 blur-3xl transition-opacity duration-500 pointer-events-none"
                      style={{ background: themeColor }}
                    />

                    {/* Top border accent line */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-20 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(90deg, transparent, ${themeColor}, transparent)` }}
                    />

                    {/* CARD CONTENT */}
                    <div className="space-y-5 relative z-10">
                      
                      {/* Top Meta Header: Index + Industry Badge + Metric */}
                      <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-white/30">
                            #{indexFormatted}
                          </span>
                          <span 
                            className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border"
                            style={{
                              borderColor: `${themeColor}30`,
                              backgroundColor: `${themeColor}0a`,
                              color: themeColor
                            }}
                          >
                            {project.industry || project.category}
                          </span>
                        </div>

                        {/* Verified Metric Badge */}
                        <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 px-2 py-0.5 rounded">
                          <Zap className="w-3 h-3 text-emerald-400" />
                          <span>{project.metric}</span>
                        </div>
                      </div>

                      {/* Project Title & Category */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">
                          {project.category.replace(" Development", "")}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold font-display text-white tracking-tight leading-snug group-hover:text-cyan-400 transition-colors">
                          <Link href={`/portfolio/${project.id}`}>
                            {project.name}
                          </Link>
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-white/55 leading-relaxed font-sans line-clamp-3">
                        {project.desc}
                      </p>

                      {/* Technologies Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies?.slice(0, 4).map((tag) => (
                          <span 
                            key={tag}
                            className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-white/60 group-hover:border-white/10 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.technologies && project.technologies.length > 4 && (
                          <span className="text-[10px] font-mono text-white/30 px-1 py-0.5">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                    </div>

                    {/* CARD FOOTER: Actions */}
                    <div className="flex items-center justify-between pt-5 mt-5 border-t border-white/5 relative z-10">
                      <Link 
                        href={`/portfolio/${project.id}`}
                        className="text-xs font-mono font-bold uppercase tracking-wider text-white/70 group-hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02] text-[10px] font-mono text-white/60 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-200"
                          title="Visit live website"
                        >
                          <Globe className="w-3 h-3 text-cyan-400" />
                          <span>Live Site</span>
                          <ExternalLink className="w-2.5 h-2.5 text-white/40" />
                        </a>
                      )}
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Load More Button */}
          {remainingCount > 0 && (
            <div className="flex flex-col items-center justify-center pt-6 space-y-3">
              <button
                onClick={() => setVisibleCount((prev) => prev + 9)}
                className="group relative px-8 py-3.5 rounded-2xl font-mono text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-400/30 bg-cyan-400/5 hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 cursor-pointer"
              >
                <span>Load More ({remainingCount} remaining)</span>
              </button>
              <span className="text-[10px] font-mono text-white/30">
                Showing {displayedProjects.length} of {filteredProjects.length} projects
              </span>
            </div>
          )}

          {/* All projects loaded indicator */}
          {remainingCount <= 0 && filteredProjects.length > 9 && (
            <div className="text-center pt-4">
              <span className="font-mono text-xs text-white/30 tracking-wider uppercase">
                All {filteredProjects.length} projects loaded
              </span>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
