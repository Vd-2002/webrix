"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Cpu, CheckCircle2, TrendingUp, Sparkles, Database, BarChart3, Clock, Zap } from "lucide-react";

const CATEGORIES = ["All", "Websites", "Software", "AI", "Marketing"];

const PROJECTS = [
  {
    id: "vanguard-headless-store",
    name: "Vanguard Headless Store",
    category: "Websites",
    desc: "A blazing fast headless retail checkout store integrated with Shopify Storefront APIs and Stripe Payment networks.",
    metric: "99.8% Core Web Vitals Score",
    tags: ["Next.js", "Stripe API", "Shopify Engine", "Serverless"],
    color: "#60A5FA", // Blue
    accentBg: "rgba(96, 165, 250, 0.05)",
  },
  {
    id: "oakridge-listings-crm",
    name: "Oakridge Listings CRM",
    category: "Websites",
    desc: "A custom real estate database with Mapbox geographic search arrays and high-conversion client follow-up CRM pipelines.",
    metric: "0.2s Interactive Map Load",
    tags: ["React", "PostgreSQL", "Prisma ORM", "Mapbox SDK"],
    color: "#34D399", // Emerald
    accentBg: "rgba(52, 211, 153, 0.05)",
  },
  {
    id: "apex-iot-operations",
    name: "Apex IoT Operations",
    category: "Software",
    desc: "Real-time assembly floor console connecting IoT sensory streams to aggregate machinery productivity data.",
    metric: "84.2% OEE Assembly Rate",
    tags: ["Node.js", "WebSockets", "InfluxDB", "Docker"],
    color: "#A78BFA", // Purple
    accentBg: "rgba(167, 139, 250, 0.05)",
  },
  {
    id: "nova-equity-portal",
    name: "Nova Equity Portal",
    category: "Software",
    desc: "High-performance trading interface streaming equity charts and transaction ledger logs with sub-10ms cache updates.",
    metric: "12ms Price Chart Refresh",
    tags: ["Next.js", "Redis Cache", "Apache Kafka", "WebSockets"],
    color: "#F472B6", // Pink
    accentBg: "rgba(244, 114, 182, 0.05)",
  },
  {
    id: "cognitive-vector-search",
    name: "Cognitive Vector Search",
    category: "AI",
    desc: "Enterprise file search cluster resolving document searches in natural language through vector embeddings.",
    metric: "94.6% Retrieval Relevance",
    tags: ["FastAPI", "Pinecone DB", "LangChain", "OpenAI LLM"],
    color: "#F59E0B", // Amber
    accentBg: "rgba(245, 158, 11, 0.05)",
  },
  {
    id: "scribe-clinician-dictation",
    name: "Scribe Clinician Dictation",
    category: "AI",
    desc: "Speech-to-text pipeline translating clinician logs into HIPAA-compliant structured databases.",
    metric: "98.9% Transcription Accuracy",
    tags: ["Python", "Whisper API", "HIPAA Vault", "S3 Storage"],
    color: "#10B981", // Teal
    accentBg: "rgba(16, 185, 129, 0.05)",
  },
  {
    id: "audience-attribution-engine",
    name: "Audience Attribution Engine",
    category: "Marketing",
    desc: "Attribution tool charting advertising conversion funnels and user acquisition channels with custom database pipelines.",
    metric: "+32.4% CAC Efficiency Lift",
    tags: ["ClickHouse", "Go Lang", "Vercel Edge", "GA4 API"],
    color: "#3B82F6", // Indigo
    accentBg: "rgba(59, 130, 246, 0.05)",
  },
  {
    id: "marketflow-pagespeed-audit",
    name: "MarketFlow PageSpeed Audit",
    category: "Marketing",
    desc: "A fully automated tracking monitor auditing mobile sitemaps and compiling Core Web Vitals reports.",
    metric: "99/100 Core Speed Index",
    tags: ["Puppeteer", "Node.js", "Vercel Analytics", "SEO Indexer"],
    color: "#EC4899", // Magenta
    accentBg: "rgba(236, 72, 153, 0.05)",
  }
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
    case "apex-iot-operations":
      return (
        <svg className="w-full h-full bg-[#050510]/50" viewBox="0 0 400 250" fill="none">
          {/* Dashboard dials */}
          <circle cx="100" cy="100" r="50" stroke="white" strokeWidth="2" strokeOpacity="0.05" />
          <path d="M 65 135 A 50 50 0 1 1 135 135" stroke={color} strokeWidth="6" strokeDasharray="180 50" strokeLinecap="round" />
          <text x="100" y="95" fill="white" fontSize="18" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">84.2%</text>
          <text x="100" y="112" fill="white" fillOpacity="0.4" fontSize="8" fontFamily="sans-serif" textAnchor="middle">OEE INDEX</text>

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
            <text x="35" y="28" fill="white" fontSize="9" fontWeight="bold" fontFamily="monospace">node-sensor-04: connected</text>
            <text x="35" y="42" fill="white" fillOpacity="0.4" fontSize="8" fontFamily="monospace">Broadcasting payload metrics to InfluxDB at 100hz</text>
          </g>
        </svg>
      );
    case "nova-equity-portal":
      return (
        <svg className="w-full h-full bg-[#050510]/50" viewBox="0 0 400 250" fill="none">
          {/* Candlestick / Line Chart */}
          <path d="M 30 180 L 370 180" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
          {/* Horizontal grid lines */}
          <path d="M 30 50 L 370 50 M 30 90 L 370 90 M 30 130 L 370 130" stroke="white" strokeWidth="0.5" strokeOpacity="0.03" />
          
          {/* Chart path line */}
          <path d="M 30 150 L 70 120 L 110 140 L 150 90 L 190 100 L 230 60 L 270 85 L 310 40 L 350 48" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Pulse target coordinate overlay */}
          <circle cx="310" cy="40" r="8" fill={color} fillOpacity="0.2" />
          <circle cx="310" cy="40" r="3" fill={color} />

          {/* Sparkline shading area */}
          <path d="M 30 150 L 70 120 L 110 140 L 150 90 L 190 100 L 230 60 L 270 85 L 310 40 L 350 48 L 350 180 L 30 180 Z" fill={`url(#gradient-${id})`} fillOpacity="0.08" />
          <defs>
            <linearGradient id={`gradient-${id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {/* Volume bars */}
          <rect x="50" y="150" width="10" height="30" rx="1" fill="#34D399" fillOpacity="0.3" />
          <rect x="90" y="160" width="10" height="20" rx="1" fill="#EF4444" fillOpacity="0.3" />
          <rect x="130" y="140" width="10" height="40" rx="1" fill="#34D399" fillOpacity="0.3" />
          <rect x="170" y="155" width="10" height="25" rx="1" fill="#34D399" fillOpacity="0.3" />
          <rect x="210" y="130" width="10" height="50" rx="1" fill="#34D399" fillOpacity="0.3" />
          <rect x="250" y="145" width="10" height="35" rx="1" fill="#EF4444" fillOpacity="0.3" />
          <rect x="290" y="110" width="10" height="70" rx="1" fill="#34D399" fillOpacity="0.3" />
          <rect x="330" y="125" width="10" height="55" rx="1" fill="#34D399" fillOpacity="0.3" />
        </svg>
      );
    case "cognitive-vector-search":
      return (
        <svg className="w-full h-full bg-[#050510]/50" viewBox="0 0 400 250" fill="none">
          {/* Nodes linking visual */}
          <line x1="200" y1="125" x2="100" y2="70" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
          <line x1="200" y1="125" x2="300" y2="70" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
          <line x1="200" y1="125" x2="150" y2="180" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
          <line x1="200" y1="125" x2="250" y2="180" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
          
          <line x1="100" y1="70" x2="150" y2="40" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
          <line x1="300" y1="70" x2="250" y2="40" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
          <line x1="150" y1="180" x2="80" y2="170" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
          <line x1="250" y1="180" x2="320" y2="170" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />

          {/* Central Query Node */}
          <circle cx="200" cy="125" r="24" fill="#070712" stroke={color} strokeWidth="1.5" />
          <circle cx="200" cy="125" r="14" fill={color} fillOpacity="0.15" />
          <text x="200" y="128" fill={color} fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">Query</text>

          {/* Neighbor Node 1 */}
          <circle cx="100" cy="70" r="16" fill="#070712" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
          <circle cx="100" cy="70" r="10" fill="white" fillOpacity="0.03" />
          <text x="100" y="73" fill="white" fillOpacity="0.6" fontSize="7" fontFamily="monospace" textAnchor="middle">doc_a</text>

          {/* Neighbor Node 2 */}
          <circle cx="300" cy="70" r="16" fill="#070712" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
          <circle cx="300" cy="70" r="10" fill="white" fillOpacity="0.03" />
          <text x="300" y="73" fill="white" fillOpacity="0.6" fontSize="7" fontFamily="monospace" textAnchor="middle">doc_b</text>

          {/* Neighbor Node 3 */}
          <circle cx="150" cy="180" r="16" fill="#070712" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
          <circle cx="150" cy="180" r="10" fill="white" fillOpacity="0.03" />
          <text x="150" y="183" fill="white" fillOpacity="0.6" fontSize="7" fontFamily="monospace" textAnchor="middle">doc_c</text>

          {/* Neighbor Node 4 */}
          <circle cx="250" cy="180" r="16" fill="#070712" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
          <circle cx="250" cy="180" r="10" fill="white" fillOpacity="0.03" />
          <text x="250" y="183" fill="white" fillOpacity="0.6" fontSize="7" fontFamily="monospace" textAnchor="middle">doc_d</text>

          {/* Similarity line marker */}
          <path d="M 120 70 A 80 80 0 0 1 280 70" stroke={color} strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />
        </svg>
      );
    case "scribe-clinician-dictation":
      return (
        <svg className="w-full h-full bg-[#050510]/50" viewBox="0 0 400 250" fill="none">
          {/* Audio Soundwaves */}
          <g transform="translate(50, 90)">
            <rect x="0" y="-10" width="4" height="20" rx="2" fill="white" fillOpacity="0.1" />
            <rect x="15" y="-18" width="4" height="36" rx="2" fill="white" fillOpacity="0.1" />
            <rect x="30" y="-35" width="4" height="70" rx="2" fill="white" fillOpacity="0.2" />
            <rect x="45" y="-45" width="4" height="90" rx="2" fill={color} fillOpacity="0.8" />
            <rect x="60" y="-20" width="4" height="40" rx="2" fill={color} fillOpacity="0.8" />
            <rect x="75" y="-35" width="4" height="70" rx="2" fill="white" fillOpacity="0.2" />
            <rect x="90" y="-12" width="4" height="24" rx="2" fill="white" fillOpacity="0.1" />
            <rect x="105" y="-5" width="4" height="10" rx="2" fill="white" fillOpacity="0.1" />
          </g>

          {/* Transcript structure */}
          <g transform="translate(180, 45)">
            <rect x="0" y="0" width="180" height="90" rx="8" fill="#070712" stroke="white" strokeOpacity="0.08" />
            <rect x="15" y="15" width="150" height="6" rx="2" fill="white" fillOpacity="0.2" />
            <rect x="15" y="30" width="120" height="6" rx="2" fill="white" fillOpacity="0.1" />
            
            <rect x="15" y="50" width="150" height="24" rx="4" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeOpacity="0.2" />
            <text x="25" y="65" fill="#10B981" fontSize="8" fontWeight="bold" fontFamily="monospace">JSON: EHR_OUTBOUND_OK</text>
          </g>

          {/* Sync timeline status */}
          <g transform="translate(30, 165)">
            <rect x="0" y="0" width="340" height="50" rx="8" fill="#070712" stroke="white" strokeOpacity="0.06" />
            <text x="20" y="28" fill="white" fontSize="9" fontWeight="bold" fontFamily="monospace">whisper-pipeline &gt;&gt; translate &gt;&gt; ehr_push</text>
            <text x="20" y="40" fill="white" fillOpacity="0.4" fontSize="8" fontFamily="monospace">Latency: 482ms total process time • HIPAA Vault logs ok</text>
          </g>
        </svg>
      );
    case "audience-attribution-engine":
      return (
        <svg className="w-full h-full bg-[#050510]/50" viewBox="0 0 400 250" fill="none">
          {/* Conversion Funnel */}
          <g transform="translate(50, 40)">
            {/* Level 1: Impressions */}
            <polygon points="40,0 260,0 240,30 60,30" fill="white" fillOpacity="0.02" stroke="white" strokeOpacity="0.1" />
            <text x="150" y="18" fill="white" fillOpacity="0.6" fontSize="8" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">100k Impressions (100%)</text>
            
            {/* Level 2: Clicks */}
            <polygon points="65,35 235,35 210,65 90,65" fill={color} fillOpacity="0.1" stroke={color} strokeOpacity="0.2" />
            <text x="150" y="53" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">12,400 Sessions (12.4%)</text>

            {/* Level 3: Leads */}
            <polygon points="95,70 205,70 185,100 115,100" fill={color} fillOpacity="0.2" stroke={color} strokeOpacity="0.4" />
            <text x="150" y="88" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">1,950 Leads (1.95%)</text>

            {/* Level 4: Conversions */}
            <polygon points="120,105 180,105 170,135 130,135" fill="#34D399" fillOpacity="0.2" stroke="#34D399" strokeOpacity="0.5" />
            <text x="150" y="123" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">482 Deals (0.48%)</text>
          </g>

          {/* Database attribution card */}
          <g transform="translate(40, 190)">
            <rect x="0" y="0" width="320" height="40" rx="6" fill="#070712" stroke="white" strokeOpacity="0.06" />
            <text x="15" y="24" fill="white" fontSize="9" fontWeight="bold" fontFamily="monospace">Attribution Query (ClickHouse DB): 4ms execute</text>
          </g>
        </svg>
      );
    case "marketflow-pagespeed-audit":
      return (
        <svg className="w-full h-full bg-[#050510]/50" viewBox="0 0 400 250" fill="none">
          {/* Radial score gauge */}
          <circle cx="200" cy="110" r="65" stroke="white" strokeWidth="2" strokeOpacity="0.05" />
          <circle cx="200" cy="110" r="65" stroke={color} strokeWidth="8" strokeDasharray="380 50" strokeDashoffset="45" strokeLinecap="round" />
          
          <text x="200" y="105" fill="white" fontSize="26" fontWeight="extrabold" fontFamily="sans-serif" textAnchor="middle">99</text>
          <text x="200" y="124" fill="#34D399" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">OPTIMAL</text>

          {/* Performance items */}
          <g transform="translate(40, 190)">
            <rect x="0" y="0" width="100" height="40" rx="6" fill="#070712" stroke="white" strokeOpacity="0.06" />
            <text x="10" y="24" fill="white" fontSize="8" fontWeight="bold" fontFamily="monospace">LCP: 0.8s</text>
          </g>
          <g transform="translate(150, 190)">
            <rect x="0" y="0" width="100" height="40" rx="6" fill="#070712" stroke="white" strokeOpacity="0.06" />
            <text x="10" y="24" fill="white" fontSize="8" fontWeight="bold" fontFamily="monospace">FID: 11ms</text>
          </g>
          <g transform="translate(260, 190)">
            <rect x="0" y="0" width="100" height="40" rx="6" fill="#070712" stroke="white" strokeOpacity="0.06" />
            <text x="10" y="24" fill="white" fontSize="8" fontWeight="bold" fontFamily="monospace">CLS: 0.01</text>
          </g>
        </svg>
      );
    default:
      return null;
  }
}

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = PROJECTS.filter((project) => {
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
                <span className="relative z-10">{cat}</span>
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
                <div className="relative aspect-[16/10] w-full border-b border-white/5 overflow-hidden bg-black/40">
                  <ProjectMockup id={project.id} color={project.color} />
                  
                  {/* Subtle color overlay spotlight on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${project.color}15 0%, transparent 70%)`
                    }}
                  />
                </div>

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
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-sans">
                      {project.desc}
                    </p>
                  </div>

                  {/* Tags and Action footer links */}
                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-white/[0.02] border border-white/5 text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between select-none">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/60 group-hover:text-[#60A5FA] transition-colors flex items-center gap-1">
                        <span>Project Spec Specs</span>
                      </span>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/5 bg-white/[0.01] group-hover:border-white/10 group-hover:bg-white/[0.03] group-hover:text-white transition-colors">
                        <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white" />
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
