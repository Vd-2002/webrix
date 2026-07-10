"use client";

import { motion } from "framer-motion";
import { Users, Zap, TrendingUp, DollarSign, LifeBuoy, Cpu } from "lucide-react";

const TECHS = [
  "Next.js 16",
  "Tailwind v4",
  "React 19",
  "Framer Motion",
  "Node.js",
  "Python Backend",
  "AWS Cloud",
  "Google Cloud",
  "FastAPI",
  "TypeScript",
  "Docker Containers",
  "PostgreSQL"
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative z-10 space-y-16 py-0 scroll-mt-24">
      {/* Header Aligned with Homepage Styling */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Why Choose{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A78BFA] via-[#60A5FA] to-[#34D399]">
            Webrix
          </span>
        </h2>
        <p className="text-base text-white/60 font-sans max-w-xl mx-auto">
          We combine great design, fast work, and your business goals to build websites and software that grow with you.
        </p>
      </div>

      {/* Asymmetric Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1200px] mx-auto">
        
        {/* Card 1: Experienced Team (Spans 2 columns on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: -6 }}
          className="group relative md:col-span-2 border border-white/10 bg-[#070712]/40 backdrop-blur-md hover:border-white/20 transition-all duration-500 rounded-3xl p-8 overflow-hidden flex flex-col justify-between"
        >
          <div 
            className="absolute -right-20 -top-20 w-56 h-56 rounded-full opacity-0 group-hover:opacity-10 blur-[80px] transition-all duration-700 pointer-events-none"
            style={{ background: "radial-gradient(circle, #60A5FA 0%, transparent 70%)" }}
          />

          <div className="grid sm:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#60A5FA]/30 bg-gradient-to-br from-[#60A5FA]/10 to-transparent">
                <Users className="w-5.5 h-5.5 text-[#60A5FA]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                Experienced Team
              </h3>
              <p className="text-sm text-white/50 leading-relaxed font-sans">
                Our team of designers, developers, and AI experts have years of experience building real-world products.
              </p>
            </div>

            {/* Visualizer Mockup */}
            <div className="flex flex-col gap-3 sm:pl-4">
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3.5 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 text-[#60A5FA] flex items-center justify-center font-mono text-[9px] font-bold">DEV</div>
                  <div>
                    <div className="text-[11px] font-bold text-white leading-none">Engineering</div>
                    <div className="text-[9px] text-white/40">Active sprints</div>
                  </div>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[85%]" />
                </div>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3.5 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-pink-500/20 text-[#F472B6] flex items-center justify-center font-mono text-[9px] font-bold">UX</div>
                  <div>
                    <div className="text-[11px] font-bold text-white leading-none">Design UI/UX</div>
                    <div className="text-[9px] text-white/40">Design system synced</div>
                  </div>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-pink-500 w-[95%]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Fast Delivery (Spans 1 column) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: -6 }}
          className="group relative border border-white/10 bg-[#070712]/40 backdrop-blur-md hover:border-white/20 transition-all duration-500 rounded-3xl p-8 overflow-hidden flex flex-col justify-between"
        >
          <div 
            className="absolute -right-20 -top-20 w-52 h-52 rounded-full opacity-0 group-hover:opacity-10 blur-[60px] transition-all duration-700 pointer-events-none"
            style={{ background: "radial-gradient(circle, #F472B6 0%, transparent 70%)" }}
          />

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#F472B6]/30 bg-gradient-to-br from-[#F472B6]/10 to-transparent">
              <Zap className="w-5.5 h-5.5 text-[#F472B6]" />
            </div>
            <h3 className="text-xl font-bold font-display text-white tracking-tight">
              Fast Delivery
            </h3>
            <p className="text-sm text-white/50 leading-relaxed font-sans">
              We create fast prototypes and work in quick steps to launch your software on time without delays.
            </p>
          </div>

          {/* Visual Progress Dial */}
          <div className="mt-6 flex justify-center items-center">
            <div className="w-20 h-20 rounded-full border-4 border-white/5 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 border-4 border-[#F472B6] border-t-transparent border-r-transparent rounded-full animate-[spin_4s_linear_infinite]" />
              <span className="text-xs font-mono text-[#F472B6] font-bold">100% SLA</span>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Scalable Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: -6 }}
          className="group relative border border-white/10 bg-[#070712]/40 backdrop-blur-md hover:border-white/20 transition-all duration-500 rounded-3xl p-8 overflow-hidden flex flex-col justify-between"
        >
          <div 
            className="absolute -right-20 -top-20 w-52 h-52 rounded-full opacity-0 group-hover:opacity-10 blur-[60px] transition-all duration-700 pointer-events-none"
            style={{ background: "radial-gradient(circle, #34D399 0%, transparent 70%)" }}
          />

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#34D399]/30 bg-gradient-to-br from-[#34D399]/10 to-transparent">
              <TrendingUp className="w-5.5 h-5.5 text-[#34D399]" />
            </div>
            <h3 className="text-xl font-bold font-display text-white tracking-tight">
              Scalable Solutions
            </h3>
            <p className="text-sm text-white/50 leading-relaxed font-sans">
              Websites and apps designed to handle many visitors smoothly without slowing down.
            </p>
          </div>

          {/* Sparkline Graph */}
          <div className="mt-6 h-14 flex items-end gap-1.5 justify-between">
            {[40, 55, 45, 60, 75, 70, 95].map((h, i) => (
              <motion.div 
                key={i} 
                className="w-full bg-[#34D399]/10 border-t-2 border-[#34D399] rounded-t-sm"
                style={{ height: `${h}%` }}
                animate={{ height: [`${h-15}%`, `${h}%`, `${h-15}%`] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Card 4: Affordable Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: -6 }}
          className="group relative border border-white/10 bg-[#070712]/40 backdrop-blur-md hover:border-white/20 transition-all duration-500 rounded-3xl p-8 overflow-hidden flex flex-col justify-between"
        >
          <div 
            className="absolute -right-20 -top-20 w-52 h-52 rounded-full opacity-0 group-hover:opacity-10 blur-[60px] transition-all duration-700 pointer-events-none"
            style={{ background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)" }}
          />

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#F59E0B]/30 bg-gradient-to-br from-[#F59E0B]/10 to-transparent">
              <DollarSign className="w-5.5 h-5.5 text-[#F59E0B]" />
            </div>
            <h3 className="text-xl font-bold font-display text-white tracking-tight">
              Affordable Pricing
            </h3>
            <p className="text-sm text-white/50 leading-relaxed font-sans">
              Top-quality software development with flexible options that fit your budget.
            </p>
          </div>

          {/* Pricing Badges */}
          <div className="mt-6 space-y-2">
            <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 px-3 py-2 rounded-xl">
              <span className="text-[11px] text-white/60 font-sans">Retainer Model</span>
              <span className="text-[9px] font-mono text-[#F59E0B] font-bold uppercase">Flexible</span>
            </div>
            <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 px-3 py-2 rounded-xl">
              <span className="text-[11px] text-white/60 font-sans">Fixed Budget</span>
              <span className="text-[9px] font-mono text-[#F59E0B] font-bold uppercase">Capped</span>
            </div>
          </div>
        </motion.div>

        {/* Card 5: Ongoing Support */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: -6 }}
          className="group relative border border-white/10 bg-[#070712]/40 backdrop-blur-md hover:border-white/20 transition-all duration-500 rounded-3xl p-8 overflow-hidden flex flex-col justify-between"
        >
          <div 
            className="absolute -right-20 -top-20 w-52 h-52 rounded-full opacity-0 group-hover:opacity-10 blur-[60px] transition-all duration-700 pointer-events-none"
            style={{ background: "radial-gradient(circle, #A78BFA 0%, transparent 70%)" }}
          />

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#A78BFA]/30 bg-gradient-to-br from-[#A78BFA]/10 to-transparent">
              <LifeBuoy className="w-5.5 h-5.5 text-[#A78BFA]" />
            </div>
            <h3 className="text-xl font-bold font-display text-white tracking-tight">
              Ongoing Support
            </h3>
            <p className="text-sm text-white/50 leading-relaxed font-sans">
              Ongoing support, security updates, and performance checks after launch.
            </p>
          </div>

          {/* Heartbeat SLA banner */}
          <div className="mt-6 flex items-center justify-center gap-2.5 bg-white/[0.02] border border-white/5 py-2.5 rounded-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A78BFA] animate-pulse" />
            <span className="text-[11px] font-mono text-white/70 font-semibold tracking-wider uppercase">99.9% Uptime Support</span>
          </div>
        </motion.div>

        {/* Card 6: Latest Technologies (Spans all 3 columns on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: -6 }}
          className="group relative md:col-span-3 border border-white/10 bg-[#070712]/40 backdrop-blur-md hover:border-white/20 transition-all duration-500 rounded-3xl p-8 overflow-hidden flex flex-col justify-between"
        >
          <div 
            className="absolute -right-24 -top-24 w-60 h-60 rounded-full opacity-0 group-hover:opacity-10 blur-[80px] transition-all duration-700 pointer-events-none"
            style={{ background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)" }}
          />

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#06B6D4]/30 bg-gradient-to-br from-[#06B6D4]/10 to-transparent">
              <Cpu className="w-5.5 h-5.5 text-[#06B6D4]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
              Latest Technologies
            </h3>
            <p className="text-sm text-white/50 leading-relaxed font-sans max-w-2xl">
              We use the latest tools and tech to make sure your website is easy to manage, fast, and secure.
            </p>
          </div>

          {/* Infinite tech tag marquee */}
          <div 
            className="relative mt-8 w-full overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)"
            }}
          >
            <motion.div 
              className="flex gap-4 whitespace-nowrap w-max"
              animate={{ x: [0, -900] }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            >
              {[...TECHS, ...TECHS].map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2.5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs font-mono text-white/70 hover:text-white hover:border-white/20 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#06B6D4" }} />
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
