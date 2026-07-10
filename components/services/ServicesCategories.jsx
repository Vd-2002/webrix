"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Monitor, Cpu, Sparkles, Megaphone, Smartphone, ArrowRight } from "lucide-react";

export default function ServicesCategories() {
  const categories = [
    {
      id: "website-development",
      title: "Website Development",
      desc: "Designing custom business websites, fast online shops, and high-performance landing pages.",
      icon: Monitor,
      color: "#60A5FA",
      tag: "WEBSITES & ONLINE STORES"
    },
    {
      id: "custom-software-development",
      title: "Custom Software",
      desc: "Building secure databases, custom admin tools, and dashboard portals for your business.",
      icon: Cpu,
      color: "#A78BFA",
      tag: "BUSINESS SOFTWARE"
    },
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      desc: "Building fast mobile apps for iPhone and Android devices.",
      icon: Smartphone,
      color: "#34D399",
      tag: "MOBILE SOLUTIONS"
    },
    {
      id: "ai-automation",
      title: "AI & Workflow Automation",
      desc: "Setting up smart AI workflows, WhatsApp chat bots, and automated customer replies.",
      icon: Sparkles,
      color: "#F59E0B",
      tag: "AI WORKFLOWS & BOTS"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      desc: "Helping your business grow with SEO audits, traffic tracking, and custom campaigns.",
      icon: Megaphone,
      color: "#F472B6",
      tag: "SEO & GROWTH"
    }
  ];

  return (
    <section id="categories" className="relative z-10 scroll-mt-24 w-full space-y-12">
      {/* Section Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
          Service{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Verticals
          </span>
        </h2>
        <p className="text-sm text-white/50 font-sans max-w-xl mx-auto">
          We offer five core services, bringing years of custom development experience to each project.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto items-stretch">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <Link
              key={cat.id}
              href={`/services/${cat.id}`}
              className="block h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="group relative h-full border border-white/10 bg-[#070712]/40 backdrop-blur-md hover:border-white/20 transition-all duration-500 rounded-3xl p-6 overflow-hidden flex flex-col justify-between"
              >
                {/* Decorative aura */}
                <div 
                  className="absolute -right-20 -top-20 w-52 h-52 rounded-full opacity-0 group-hover:opacity-10 blur-[80px] transition-all duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${cat.color} 0%, transparent 70%)` }}
                />

                <div className="space-y-6 relative z-10">
                  {/* Header row */}
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-mono font-bold tracking-wider" style={{ color: cat.color }}>
                      {cat.tag}
                    </span>
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300"
                      style={{
                        borderColor: `${cat.color}25`,
                        background: `linear-gradient(135deg, ${cat.color}08, transparent)`,
                        color: cat.color
                      }}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-display text-white tracking-tight leading-none group-hover:text-[#60A5FA] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-white/50 leading-relaxed font-sans font-light">
                      {cat.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom anchor link bar */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/30 group-hover:text-white/60 transition-colors">
                  <span>VIEW DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
