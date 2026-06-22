"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldAlert, Award } from "lucide-react";

export default function Team() {
  const members = [
    {
      name: "Arthur Pendelton",
      role: "Founder & CTO",
      desc: "Former database kernel engineer. Arthur leads Webrix core frameworks development and maps application architecture patterns.",
      badge: "Architecture Core",
      color: "#60A5FA",
      icon: Cpu,
      skills: ["Database Kernels", "Systems Scaling", "Rust", "Next.js"],
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Clara Sterling",
      role: "Principal Solutions Architect",
      desc: "Specializes in secure backend clouds, multi-region database routing, and HIPAA/GDPR enterprise compliance architectures.",
      badge: "Cloud Compliance",
      color: "#34D399",
      icon: ShieldAlert,
      skills: ["AWS / GCP", "compliance Engines", "Kubernetes", "PostgreSQL"],
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Marcus Wu",
      role: "Senior Automation Engineer",
      desc: "AI automation specialist. Focuses on custom LLM models integration, vector search models, and intelligent serverless agent nodes.",
      badge: "AI Automation",
      color: "#A78BFA",
      icon: Award,
      skills: ["LLM Syncing", "Vector Search", "Python API", "Node.js"],
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  ];

  return (
    <section id="team" className="relative z-10 scroll-mt-24 w-full space-y-12">
      {/* Section Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Team{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Members
          </span>
        </h2>
        <p className="text-base text-white/60 font-sans max-w-xl mx-auto">
          Our core squad of elite developers and database systems architects.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto items-stretch">
        {members.map((member, idx) => {
          const Icon = member.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -4 }}
              className="group relative border border-white/10 bg-[#070712]/40 backdrop-blur-md hover:border-white/20 transition-all duration-500 rounded-3xl p-6 overflow-hidden flex flex-col justify-between"
            >
              {/* Decorative top element */}
              <div 
                className="absolute -right-20 -top-20 w-52 h-52 rounded-full opacity-0 group-hover:opacity-10 blur-[80px] transition-all duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${member.color} 0%, transparent 70%)` }}
              />

              <div className="space-y-6 relative z-10">
                {/* Header row */}
                <div className="flex justify-between items-start">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300"
                    style={{
                      borderColor: `${member.color}25`,
                      background: `linear-gradient(135deg, ${member.color}08, transparent)`,
                      color: member.color
                    }}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <span 
                    className="text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border bg-white/[0.01]"
                    style={{
                      borderColor: `${member.color}25`,
                      color: member.color
                    }}
                  >
                    {member.badge}
                  </span>
                </div>

                {/* Info block */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-display text-white tracking-tight leading-none">
                    {member.name}
                  </h3>
                  <div className="text-[11px] text-white/40 font-mono font-semibold uppercase tracking-wider">
                    {member.role}
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed font-sans font-light pt-1">
                    {member.desc}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {member.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="text-[9px] font-mono bg-white/[0.02] border border-white/5 px-2 py-0.5 rounded-full text-white/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom socials */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
                <span className="text-[10px] font-mono text-white/20">ACTIVE STATUS</span>
                
                <div className="flex items-center gap-2">
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-7 h-7 rounded-lg border border-white/5 bg-white/[0.01] hover:bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-7 h-7 rounded-lg border border-white/5 bg-white/[0.01] hover:bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
