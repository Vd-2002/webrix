"use client";

import { ShieldCheck, Zap, MessageSquare, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. Evelyn Chen",
    role: "CTO",
    company: "Aegis Health",
    quote: "Webrix delivered a HIPAA-compliant patient portal that completely modernized our clinical workflows. The speed and quality of their engineering is unparalleled.",
    metric: "100% HIPAA Secure",
    accentColor: "#EF4444", // Red
    icon: ShieldCheck
  },
  {
    id: 2,
    name: "Marcus Vance",
    role: "VP of Operations",
    company: "Apex Industries",
    quote: "Our manufacturing floor automation has achieved 99.9% uptime since migrating to the IoT dashboard built by Webrix. Highly recommended for complex integrations.",
    metric: "99.9% Uptime SLA",
    accentColor: "#F59E0B", // Amber
    icon: Zap
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "CEO",
    company: "Oakridge Realty",
    quote: "The custom PropTech listings database and CRM engine they built for us has increased lead conversions by 35%. Excellent design paired with exceptional backend speed.",
    metric: "+35% Lead Conversion",
    accentColor: "#3B82F6", // Blue
    icon: MessageSquare
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "VP of Clinical Tech",
    company: "Chronos Care",
    quote: "Their AI triage scheduling tool has reduced patient wait times by 40%. The backend is robust, compliant, and integrates cleanly with standard medical systems.",
    metric: "-40% Patient Wait Time",
    accentColor: "#EF4444", // Red
    icon: ShieldCheck
  },
  {
    id: 5,
    name: "Donald Sterling",
    role: "Director of Fleet",
    company: "Titan Logistics",
    quote: "Webrix designed our automated transport routing model. Warehouse dispatch times have cut down by half. Their developers are exceptionally skilled in high-concurrency systems.",
    metric: "50% Faster Dispatch",
    accentColor: "#F59E0B", // Amber
    icon: Zap
  },
  {
    id: 6,
    name: "Renée Dupuis",
    role: "VP of Growth",
    company: "Stellar Listings",
    quote: "Their custom MLS integration and fast database lookup allowed us to handle 10,000 queries per minute without any latency drops. Brilliant engineering team.",
    metric: "10K req/min Capacity",
    accentColor: "#3B82F6", // Blue
    icon: MessageSquare
  }
];

function TestimonialCard({ client }) {
  const ClientIcon = client.icon;
  return (
    <div
      className="group relative border border-white/10 bg-[#070712]/40 backdrop-blur-md hover:border-white/20 hover:bg-[#070712]/60 transition-all duration-500 rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[280px] w-[290px] sm:w-[360px] md:w-[400px] shrink-0"
      style={{
        boxShadow: `0 4px 30px rgba(0, 0, 0, 0.4)`
      }}
    >
      {/* Spotlight aura */}
      <div 
        className="absolute -right-20 -top-20 w-52 h-52 rounded-full opacity-0 group-hover:opacity-10 blur-[80px] transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${client.accentColor} 0%, transparent 70%)`
        }}
      />

      {/* Blueprint visual card lines on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px"
        }}
      />

      <div className="space-y-4 relative z-10">
        {/* Top Row: Quotes Icon and Client Sector Icon */}
        <div className="flex justify-between items-start">
          <Quote className="w-8 h-8 text-white/10 group-hover:text-white/25 transition-colors duration-500 rotate-180" />
          
          <div 
            className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-500"
            style={{
              borderColor: `${client.accentColor}30`,
              background: `linear-gradient(135deg, ${client.accentColor}12, transparent)`
            }}
          >
            <ClientIcon className="w-4 h-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" style={{ color: client.accentColor }} />
          </div>
        </div>

        {/* Testimonial Quote Text */}
        <p className="text-xs sm:text-sm text-white/70 italic leading-relaxed font-sans font-light">
          &ldquo;{client.quote}&rdquo;
        </p>
      </div>

      {/* Profile info and Outcomes badge at the bottom */}
      <div className="mt-6 pt-5 border-t border-white/5 space-y-3.5 relative z-10">
        {/* Dynamic Outcome Badge */}
        <div className="flex">
          <span 
            className="text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border bg-white/[0.01]"
            style={{
              borderColor: `${client.accentColor}25`,
              color: client.accentColor
            }}
          >
            {client.metric}
          </span>
        </div>

        {/* Client Identity details */}
        <div className="space-y-0.5">
          <h4 className="text-sm font-bold font-display text-white tracking-tight">
            {client.name}
          </h4>
          <p className="text-[11px] text-white/50 font-sans">
            {client.role}, <span className="text-white/80 font-medium">{client.company}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Replicate testimonials to guarantee seamless looping in a single row
  const row = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="relative z-10 py-0 overflow-hidden space-y-16">
      
      {/* Header Container */}
      <div className="space-y-4 text-center max-w-2xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Client{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Testimonials
          </span>
        </h2>
        <p className="text-base text-white/60 font-sans max-w-xl mx-auto">
          Read success stories from technical stakeholders and startup executives who scaled their operations.
        </p>
      </div>

      {/* Infinite Horizontal Carousel */}
      <div className="w-full relative">
        
        {/* Soft edge masks to fade out cards at sides of viewport */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        {/* Testimonials Marquee Row: Scrolling Left */}
        <div className="w-full overflow-hidden flex">
          <div className="flex gap-6 w-max animate-marquee-left">
            {row.map((client, idx) => (
              <TestimonialCard key={`testimonial-${client.id}-${idx}`} client={client} />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
