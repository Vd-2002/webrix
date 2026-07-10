"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Monitor, Cpu, Sparkles, Megaphone, Smartphone, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";

const SERVICES = [
  {
    num: "01",
    title: "Website Development",
    desc: "Custom business websites, online shops, and landing pages.",
    details: ["Fast Loading Pages", "Online Store Setup", "Google Search SEO"],
    accentColor: "#60A5FA",
    icon: Monitor,
  },
  {
    num: "02",
    title: "Custom Software Development",
    desc: "Secure database systems, custom business software, and admin tools.",
    details: ["Data Storage", "Secure User Logins", "Business Tool Sync"],
    accentColor: "#A78BFA",
    icon: Cpu,
  },
  {
    num: "03",
    title: "Mobile App Development",
    desc: "Fast mobile apps for both iPhone and Android devices.",
    details: ["Cross-Platform Apps", "Fast Development", "Interactive Maps"],
    accentColor: "#34D399",
    icon: Smartphone,
  },
  {
    num: "04",
    title: "Digital Marketing & SEO",
    desc: "Website speed checks, SEO audits, and tracking of customer clicks.",
    details: ["Speed Checks", "Visitor Analytics", "More Traffic"],
    accentColor: "#F472B6",
    icon: Megaphone,
  },
  {
    num: "05",
    title: "AI & Workflow Automation",
    desc: "Smart AI workflows, automated lead replies, and WhatsApp chat bots.",
    details: ["WhatsApp Chat Bots", "Smart AI Agents", "Automatic Notifications"],
    accentColor: "#F59E0B",
    icon: Sparkles,
  }
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 space-y-16 py-0 scroll-mt-24">
      {/* Header aligned with Hero section font styling */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Services{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Overview
          </span>
        </h2>
        <p className="text-base text-white/60 font-sans max-w-xl mx-auto">
          Building custom websites, secure business software, mobile apps, and smart AI solutions.
        </p>
      </div>

      {/* Grid Layout of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -8 }}
              className={`group relative border border-white/10 bg-[#070712]/40 backdrop-blur-md hover:border-white/20 transition-all duration-500 rounded-3xl p-8 lg:p-10 overflow-hidden flex flex-col justify-between ${
                index === 4 ? "md:col-span-2" : ""
              }`}
              style={{
                boxShadow: `0 4px 30px rgba(0, 0, 0, 0.4)`
              }}
            >
              {/* Dynamic Glow Spotlight in Card Background */}
              <div 
                className="absolute -right-24 -top-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-10 blur-[80px] transition-all duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${service.accentColor} 0%, transparent 70%)`
                }}
              />

              {/* Blueprint Grid Pattern visible on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: "24px 24px"
                }}
              />
              
              <div className="space-y-8 relative z-10">
                {/* Top Row: Icon and Number */}
                <div className="flex justify-between items-start">
                  {/* Icon Wrapper matching Hero visual elements */}
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 relative overflow-hidden"
                    style={{ 
                      borderColor: `${service.accentColor}30`,
                      background: `linear-gradient(135deg, ${service.accentColor}12, transparent)` 
                    }}
                  >
                    <Icon className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" style={{ color: service.accentColor }} />
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[8px]"
                      style={{
                        background: `radial-gradient(circle, ${service.accentColor}30 0%, transparent 70%)`
                      }}
                    />
                  </div>


                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold font-display text-white tracking-tight flex items-center gap-2">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/50 leading-relaxed font-sans">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Tag/Badge elements mirroring the main IDE/browser visual indicators */}
              <div className="mt-8 flex flex-wrap gap-2.5 relative z-10">
                {service.details.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="flex items-center gap-1.5 text-xs font-mono font-medium px-3.5 py-1.5 rounded-full bg-white/[0.02] border border-white/5 text-white/60 group-hover:text-white group-hover:border-white/10 transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.accentColor }} />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Top-Right Arrow Link (Only visible on hover) */}
              <div className="absolute top-8 right-8 opacity-0 translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 pointer-events-none">
                <ArrowUpRight className="w-6 h-6" style={{ color: service.accentColor }} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* View All Services Button */}
      <div className="flex justify-center pt-8">
        <Link href="/services">
          <Button
            variant="outline"
            className="px-10 py-4 text-xs tracking-wider rounded-md border-white/20 text-white hover:bg-white/5 transition-all duration-300 flex items-center gap-2.5 group"
          >
            View All Services
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
