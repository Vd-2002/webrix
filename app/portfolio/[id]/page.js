import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/homepage/CTA";
import { ArrowLeft, Zap, Cpu, Code, Shield } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Since it's a dynamic route fetching from MongoDB at runtime, we can enable SSR or dynamic rendering
export const revalidate = 0; // Fetch fresh data on every request

async function getProject(id) {
  try {
    // Call the local API endpoint (using absolute URL in SSR or relative if handled by Next routing)
    // In Next server component, we can import MongoClient and query directly to avoid external fetch overhead!
    const { getDb } = require("@/lib/db");
    const db = await getDb();
    const project = await db.collection("projects").findOne({ id });
    return project;
  } catch (error) {
    console.error("Error loading project server-side:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = await getProject(id);
  if (!project) return {};

  return {
    title: `${project.title} Case Study`,
    description: project.description || `Case study detailing our engineering work for ${project.title}.`,
    alternates: {
      canonical: `https://webrix.co.in/portfolio/${id}`,
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    notFound();
  }

  const themeColor = project.color || "#60A5FA";

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "creator": {
      "@type": "Organization",
      "name": "Webrix",
      "url": "https://webrix.co.in"
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      {/* Header component */}
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 pt-12 pb-16 sm:pt-[60px] sm:pb-24 space-y-12 sm:space-y-[60px] flex-1 w-full relative z-10">
        
        {/* Back Link */}
        <div>
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Portfolio
          </Link>
        </div>

        {/* Hero Spec Row */}
        <div 
          className="border border-white/10 bg-[#070712]/40 backdrop-blur-md rounded-3xl p-8 lg:p-12 relative overflow-hidden flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8"
        >
          {/* Spotlight aura */}
          <div 
            className="absolute -right-24 -top-24 w-96 h-96 rounded-full opacity-[0.08] blur-[90px] pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${themeColor} 0%, transparent 70%)`
            }}
          />

          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="flex items-center gap-2">
              <span 
                className="w-1.5 h-1.5 rounded-full" 
                style={{ backgroundColor: themeColor }}
              />
              <span className="text-xs font-mono font-bold tracking-widest text-white/40 uppercase">
                {project.industry} &bull; {project.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
              {project.name}
            </h1>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed font-sans font-light">
              {project.desc}
            </p>
          </div>

          {/* Metric Dashboard Box */}
          <div 
            className="border bg-black/40 p-6 rounded-2xl min-w-[200px] w-full lg:w-auto relative z-10"
            style={{ borderColor: `${themeColor}20` }}
          >
            <div className="space-y-1 text-left">
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest font-bold block">
                VERIFIED OUTCOME
              </span>
              <div 
                className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight"
                style={{ color: themeColor }}
              >
                {project.metric}
              </div>
              <div className="text-[9px] font-mono text-emerald-400 font-bold flex items-center gap-1 mt-1">
                <Zap className="w-3 h-3" />
                Active Deployment
              </div>
            </div>
          </div>

        </div>

        {/* In-depth Details & Architecture Spec */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Scope Specifications */}
          <div className="lg:col-span-7 border border-white/10 bg-[#070712]/40 rounded-3xl p-6 sm:p-10 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight flex items-center gap-2">
                <Cpu className="w-5 h-5 text-white/30" style={{ color: themeColor }} />
                Technical Overview
              </h2>
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-sans">
                This project was engineered to deliver scalable, secure execution states. Our design principles focused heavily on request optimizations, minified build payloads, database indices structuring, and low-latency API handshakes.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/5">
              <span className="text-[9px] font-mono uppercase tracking-widest font-bold text-white/30 block">
                Architectural Milestones
              </span>
              <ul className="space-y-3.5">
                {[
                  "Edge Gateway Cache verification loops.",
                  "AES-256 encrypted authentication keys handling.",
                  "State hydration matching user sessions dynamically.",
                  "High-concurrency data writes optimization."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/70 font-sans">
                    <Shield className="w-4 h-4 mt-0.5 shrink-0" style={{ color: themeColor }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Stack & File Registry */}
          <div className="lg:col-span-5 border border-white/10 bg-[#070712]/40 rounded-3xl p-6 sm:p-10 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight flex items-center gap-2">
              <Code className="w-5 h-5 text-white/30" style={{ color: themeColor }} />
              Technologies
            </h2>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies?.map((tag) => (
                <span 
                  key={tag}
                  className="text-xs font-mono font-medium px-3.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-white/60 hover:text-white transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Simulated Git Ingress */}
            <div className="border border-white/5 bg-black/40 rounded-xl p-4 space-y-2.5 font-mono text-[9px] text-white/40">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span>git clone webrix/{project.id}</span>
                <span className="text-emerald-400">READY</span>
              </div>
              <div className="space-y-1">
                <div>$ npm run build</div>
                <div className="text-white/60">&gt; Compiled successfully in 1.4s</div>
                <div className="text-white/60">&gt; First load JS: 72kB (optimal)</div>
              </div>
            </div>
          </div>

        </div>

        {/* CTA section */}
        <CTA />

      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
