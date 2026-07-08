"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Cpu, CheckCircle2, TrendingUp, Sparkles, Database, BarChart3, Clock, Zap } from "lucide-react";
import Link from "next/link";

const CATEGORIES = [
  "All",
  "Website Development",
  "Custom Software Development",
  "Mobile App Development",
  "Digital Marketing",
  "AI Automation"
];

function ProjectMockup({ id, color }) {
  // Renders a high-fidelity inline interactive SVG dashboard frame based on the project id
  switch (id) {
    case "vanguard-headless-store":
      return (
        <svg className="w-full h-full bg-[#050510]/50" viewBox="0 0 400 250" fill="none">
          {/* Grid lines */}
          <path d="M 0 50 L 400 50 M 0 100 L 400 100 M 0 150 L 400 150 M 0 200 L 400 200" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
          <path d="M 100 0 L 100 250 M 200 0 L 200 250 M 300 0 L 300 250" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
          {/* Store Layout */}
          <rect x="20" y="30" width="160" height="90" rx="6" fill="white" fillOpacity="0.02" stroke="white" strokeOpacity="0.1" />
          <rect x="200" y="30" width="180" height="90" rx="6" fill="white" fillOpacity="0.02" stroke="white" strokeOpacity="0.1" />
          {/* Small images skeletons */}
          <rect x="35" y="45" width="40" height="40" rx="4" fill={color} fillOpacity="0.15" />
          <rect x="90" y="50" width="70" height="8" rx="2" fill="white" fillOpacity="0.2" />
          <rect x="90" y="65" width="50" height="6" rx="2" fill="white" fillOpacity="0.1" />
          <rect x="90" y="80" width="30" height="10" rx="3" fill="#34D399" fillOpacity="0.2" />
          
          {/* Checkout transaction skeleton */}
          <rect x="220" y="45" width="140" height="12" rx="3" fill="white" fillOpacity="0.1" />
          <rect x="220" y="65" width="110" height="8" rx="3" fill="white" fillOpacity="0.08" />
          <rect x="220" y="85" width="140" height="20" rx="4" fill="#34D399" fillOpacity="0.15" stroke="#34D399" strokeOpacity="0.3" />
          {/* Success toast floating */}
          <g transform="translate(100, 140)">
            <rect x="0" y="0" width="200" height="50" rx="10" fill="#070712" stroke={color} strokeWidth="1" strokeOpacity="0.3" />
            <circle cx="25" cy="25" r="10" fill="#34D399" fillOpacity="0.2" />
            <path d="M 21 25 L 24 28 L 29 21" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <text x="45" y="22" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Transaction Verified</text>
            <text x="45" y="35" fill="white" fillOpacity="0.5" fontSize="8" fontFamily="sans-serif">Stripe API Node status: 200 OK</text>
          </g>
        </svg>
      );
    case "oakridge-listings-crm":
      return (
        <svg className="w-full h-full bg-[#050510]/50" viewBox="0 0 400 250" fill="none">
          {/* Map canvas */}
          <path d="M 0 0 L 400 250 M 400 0 L 0 250" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
          <circle cx="200" cy="125" r="110" stroke="white" strokeWidth="0.5" strokeOpacity="0.08" />
          <circle cx="200" cy="125" r="70" stroke="white" strokeWidth="0.5" strokeOpacity="0.08" />
          {/* Simulated streets / polygons */}
          <path d="M 40 30 L 120 70 L 160 20 M 250 40 L 320 120 L 290 190 M 80 180 L 140 220 L 210 180" stroke="white" strokeWidth="1" strokeOpacity="0.05" />
          {/* Active coordinate indicators with pulse circles */}
          <g transform="translate(150, 80)">
            <circle cx="0" cy="0" r="12" fill={color} fillOpacity="0.15" />
            <circle cx="0" cy="0" r="4" fill={color} />
          </g>
          <g transform="translate(240, 160)">
            <circle cx="0" cy="0" r="12" fill={color} fillOpacity="0.15" />
            <circle cx="0" cy="0" r="4" fill={color} />
          </g>
          {/* Floating property card overlay */}
          <g transform="translate(40, 110)">
            <rect x="0" y="0" width="140" height="90" rx="8" fill="#070712" stroke="white" strokeOpacity="0.1" />
            <rect x="10" y="10" width="120" height="40" rx="4" fill="white" fillOpacity="0.05" />
            <text x="15" y="65" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">$1,450,000</text>
            <text x="15" y="78" fill="white" fillOpacity="0.5" fontSize="7" fontFamily="sans-serif">3 Bed • 2.5 Bath • Active</text>
          </g>
        </svg>
      );
    case "apex-custom-erp":
      return (
        <svg className="w-full h-full bg-[#050510]/50" viewBox="0 0 400 250" fill="none">
          {/* Dashboard dials */}
          <circle cx="100" cy="100" r="50" stroke="white" strokeWidth="2" strokeOpacity="0.05" />
          <path d="M 65 135 A 50 50 0 1 1 135 135" stroke={color} strokeWidth="6" strokeDasharray="180 50" strokeLinecap="round" />
          <text x="100" y="95" fill="white" fontSize="18" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">99.9%</text>
          <text x="100" y="112" fill="white" fillOpacity="0.4" fontSize="8" fontFamily="sans-serif" textAnchor="middle">SLA UPTIME</text>

          {/* Bar chart nodes */}
          <g transform="translate(200, 50)">
            {/* Grid background lines */}
            <path d="M 0 0 L 160 0 M 0 30 L 160 30 M 0 60 L 160 60 M 0 90 L 160 90" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
            {/* Vertical bars */}
            <rect x="15" y="20" width="14" height="70" rx="2" fill="white" fillOpacity="0.05" />
            <rect x="15" y="35" width="14" height="55" rx="2" fill={color} fillOpacity="0.7" />
            
            <rect x="50" y="10" width="14" height="80" rx="2" fill="white" fillOpacity="0.05" />
            <rect x="50" y="25" width="14" height="65" rx="2" fill={color} fillOpacity="0.7" />

            <rect x="85" y="30" width="14" height="60" rx="2" fill="white" fillOpacity="0.05" />
            <rect x="85" y="40" width="14" height="50" rx="2" fill="#34D399" fillOpacity="0.7" />

            <rect x="120" y="5" width="14" height="85" rx="2" fill="white" fillOpacity="0.05" />
            <rect x="120" y="15" width="14" height="75" rx="2" fill={color} fillOpacity="0.7" />
          </g>

          {/* Status logs */}
          <g transform="translate(30, 170)">
            <rect x="0" y="0" width="340" height="60" rx="8" fill="#070712" stroke="white" strokeOpacity="0.06" />
            <circle cx="20" cy="30" r="4" fill="#34D399" className="animate-pulse" />
            <text x="35" y="28" fill="white" fontSize="9" fontWeight="bold" fontFamily="monospace">node-server-erp: secure_conn</text>
            <text x="35" y="42" fill="white" fillOpacity="0.4" fontSize="8" fontFamily="monospace">Active connection pooling with PostgreSQL cluster</text>
          </g>
        </svg>
      );
    case "webrix-rider-app":
      return (
        <svg className="w-full h-full bg-[#050510]/50" viewBox="0 0 400 250" fill="none">
          {/* Simulated Mobile Frame in SVG */}
          <rect x="140" y="20" width="120" height="210" rx="15" fill="#030308" stroke="white" strokeOpacity="0.15" strokeWidth="2" />
          <rect x="145" y="25" width="110" height="200" rx="12" fill="#070712" />
          <circle cx="200" cy="215" r="5" fill="white" fillOpacity="0.2" />
          
          {/* Map layout inside mobile */}
          <path d="M 155 80 Q 200 120, 245 70 T 210 160" stroke={color} strokeWidth="2" strokeDasharray="4 2" fill="none" />
          <g transform="translate(200, 120)">
            <circle cx="0" cy="0" r="8" fill={color} fillOpacity="0.3" />
            <circle cx="0" cy="0" r="3" fill={color} />
          </g>
          
          {/* GPS Telemetry */}
          <rect x="15" y="40" width="110" height="60" rx="6" fill="#070712" stroke="white" strokeOpacity="0.05" />
          <text x="25" y="58" fill="white" fontSize="8" fontWeight="bold" fontFamily="monospace">GPS_TRACKING</text>
          <text x="25" y="72" fill={color} fontSize="7" fontFamily="monospace">LAT: 23.0623</text>
          <text x="25" y="84" fill={color} fontSize="7" fontFamily="monospace">LON: 72.6768</text>

          <rect x="275" y="140" width="110" height="60" rx="6" fill="#070712" stroke="white" strokeOpacity="0.05" />
          <text x="285" y="158" fill="white" fontSize="8" fontWeight="bold" fontFamily="monospace">EXPO_NATIVE</text>
          <text x="285" y="172" fill="#34D399" fontSize="7" fontFamily="monospace">APP STORE: OK</text>
          <text x="285" y="184" fill="#34D399" fontSize="7" fontFamily="monospace">SYNC: ACTIVE</text>
        </svg>
      );
    case "cognitive-vector-assistant":
      return (
        <svg className="w-full h-full bg-[#050510]/50" viewBox="0 0 400 250" fill="none">
          {/* Nodes linking visual */}
          <line x1="200" y1="125" x2="100" y2="70" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
          <line x1="200" y1="125" x2="300" y2="70" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
          <line x1="200" y1="125" x2="150" y2="180" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
          <line x1="200" y1="125" x2="250" y2="180" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />

          {/* Central Query Node */}
          <circle cx="200" cy="125" r="24" fill="#070712" stroke={color} strokeWidth="1.5" />
          <circle cx="200" cy="125" r="14" fill={color} fillOpacity="0.15" />
          <text x="200" y="128" fill={color} fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">LLM Node</text>

          {/* Neighbor Node 1 */}
          <circle cx="100" cy="70" r="16" fill="#070712" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
          <text x="100" y="73" fill="white" fillOpacity="0.6" fontSize="7" fontFamily="monospace" textAnchor="middle">vector</text>

          {/* Neighbor Node 2 */}
          <circle cx="300" cy="70" r="16" fill="#070712" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
          <text x="300" y="73" fill="white" fillOpacity="0.6" fontSize="7" fontFamily="monospace" textAnchor="middle">context</text>

          {/* Neighbor Node 3 */}
          <circle cx="150" cy="180" r="16" fill="#070712" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
          <text x="150" y="183" fill="white" fillOpacity="0.6" fontSize="7" fontFamily="monospace" textAnchor="middle">prompt</text>

          {/* Neighbor Node 4 */}
          <circle cx="250" cy="180" r="16" fill="#070712" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
          <text x="250" y="183" fill="white" fillOpacity="0.6" fontSize="7" fontFamily="monospace" textAnchor="middle">response</text>
        </svg>
      );
    default:
      return (
        <svg className="w-full h-full bg-[#050510]/50" viewBox="0 0 400 250" fill="none">
          {/* Grid lines */}
          <path d="M 0 50 L 400 50 M 0 100 L 400 100 M 0 150 L 400 150 M 0 200 L 400 200" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
          <path d="M 100 0 L 100 250 M 200 0 L 200 250 M 300 0 L 300 250" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
          <rect x="20" y="20" width="360" height="210" rx="8" fill="white" fillOpacity="0.01" stroke="white" strokeOpacity="0.06" />
          <circle cx="200" cy="125" r="45" fill={color || "#60A5FA"} fillOpacity="0.05" stroke={color || "#60A5FA"} strokeWidth="1" strokeDasharray="4 3" />
          <text x="200" y="128" fill="white" fillOpacity="0.3" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">&lt; WEBRIX CMS PROJECT &gt;</text>
          <text x="35" y="45" fill="white" fillOpacity="0.2" fontSize="7" fontFamily="monospace">REF: CMS_DYN_LOAD</text>
          <text x="365" y="210" fill="white" fillOpacity="0.2" fontSize="7" fontFamily="monospace" textAnchor="end">STATUS: OK</text>
        </svg>
      );
  }
}

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProjects(data.projects);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load projects:", err);
        setLoading(false);
      });
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <section id="projects-grid" className="relative z-10 scroll-mt-24 w-full space-y-12">
      {/* Category Filter Tabs */}
      <div className="flex flex-col items-center gap-6">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/30">
          Filter Projects by Stack Category
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 border border-white/5 bg-[#070712]/50 backdrop-blur-md rounded-2xl">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wider font-display transition-colors duration-300 cursor-pointer ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                <span className="relative z-10">{cat === "All" ? "All" : cat.split(" ")[0]}</span>
                {isActive && (
                  <motion.span
                    layoutId="portfolioFilterBg"
                    className="absolute inset-0 bg-white/[0.04] border border-white/10 rounded-xl z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid Container with layout animations */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#60A5FA]"></div>
        </div>
      ) : (
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="border border-white/10 bg-[#070712] rounded-3xl overflow-hidden flex flex-col group hover:border-white/20 transition-colors shadow-2xl relative"
                >
                  {/* Visual Mockup Top Bar Container */}
                  <Link href={`/portfolio/${project.id}`} className="relative aspect-[16/10] w-full border-b border-white/5 overflow-hidden bg-black/40 block">
                    <ProjectMockup id={project.id} color={project.color} />
                    
                    {/* Subtle color overlay spotlight on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${project.color}15 0%, transparent 70%)`
                      }}
                    />
                  </Link>

                  {/* Info and Tags Details Content */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
                    <div className="space-y-4">
                      {/* Header line tag & stats */}
                      <div className="flex items-center justify-between">
                        <span 
                          className="font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border"
                          style={{
                            borderColor: `${project.color}25`,
                            backgroundColor: `${project.color}08`,
                            color: project.color
                          }}
                        >
                          {project.category}
                        </span>
                        <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-white/50">
                          <Zap className="w-3.5 h-3.5 text-[#34D399]" />
                          <span>{project.metric}</span>
                        </div>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white tracking-tight leading-tight group-hover:text-[#60A5FA] transition-colors">
                        <Link href={`/portfolio/${project.id}`}>
                          {project.name}
                        </Link>
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-sans">
                        {project.desc}
                      </p>
                    </div>

                    {/* Tags and Action footer links */}
                    <div className="space-y-4 pt-4 border-t border-white/5">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies?.map((tag) => (
                          <span 
                            key={tag}
                            className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-white/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between select-none">
                        <Link 
                          href={`/portfolio/${project.id}`}
                          className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/60 group-hover:text-[#60A5FA] transition-colors flex items-center gap-1"
                        >
                          <span>Explore Case Study</span>
                        </Link>
                        <Link href={`/portfolio/${project.id}`} className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/5 bg-white/[0.01] group-hover:border-white/10 group-hover:bg-white/[0.03] group-hover:text-white transition-colors cursor-pointer">
                          <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white" />
                        </Link>
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}

            {/* Coming Soon Card integrated directly at the end of the grid list */}
            <motion.div
              layout
              className="border border-dashed border-white/20 bg-white/[0.01] rounded-3xl p-6 sm:p-8 flex flex-col justify-center items-center text-center space-y-4 min-h-[300px] hover:border-white/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full border border-dashed border-white/10 flex items-center justify-center text-white/30 text-lg font-bold select-none">
                +
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold font-display text-white/80">CMS Projects Coming Soon</h3>
                <p className="text-xs text-white/40 max-w-[260px] mx-auto leading-relaxed font-sans font-light">
                  New projects are added live via the CMS. Check back shortly for more detailed case studies.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}
