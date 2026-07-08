"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Shield, Globe } from "lucide-react";

const OFFICES = [
  {
    city: "Ahmedabad",
    role: "Webrix Headquarters",
    address: "Solitaire Superb, Behind Ganesh Vihar Flats, Opposite Somnath Party Plot, Sardar Patel Ring Road, New Nikol, Ahmedabad, Gujarat - 382350, India",
    phone: "+91 99983 42593",
    email: "heywebrix@gmail.com",
    hours: "09:00 - 18:00 IST",
    timezone: "UTC+5:30",
    color: "#60A5FA"
  }
];

export default function OfficeDetails() {
  return (
    <section id="office-details" className="relative z-10 scroll-mt-24 w-full space-y-12">
      
      {/* Section Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto px-6">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
          Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Headquarters
          </span>
        </h2>
        <p className="text-sm sm:text-base text-white/60 font-sans max-w-xl mx-auto">
          Visit or connect with our physical engineering and design hub.
        </p>
      </div>

      {/* Offices Grid */}
      <div className="grid grid-cols-1 max-w-[800px] mx-auto px-6">
        {OFFICES.map((office, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="border border-white/10 bg-[#070712] rounded-3xl p-6 sm:p-10 hover:border-white/15 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Custom glowing spotlights */}
            <div 
              className="absolute -right-24 -top-24 w-80 h-80 rounded-full opacity-[0.03] blur-[80px] pointer-events-none group-hover:opacity-[0.05] transition-opacity"
              style={{
                background: `radial-gradient(circle, ${office.color} 0%, transparent 70%)`
              }}
            />

            <div className="space-y-6 relative z-10">
              {/* Card Label tag */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-extrabold text-white font-display">
                    {office.city}
                  </h3>
                  <p className="text-xs text-white/40 font-mono">
                    {office.role}
                  </p>
                </div>
                
                <span 
                  className="text-[9px] font-mono font-bold px-2.5 py-1 rounded-md border"
                  style={{
                    borderColor: `${office.color}25`,
                    backgroundColor: `${office.color}05`,
                    color: office.color
                  }}
                >
                  {office.timezone}
                </span>
              </div>

              {/* Location parameters list */}
              <div className="space-y-4 text-left">
                {/* Address */}
                <div className="flex items-start gap-3.5 text-xs sm:text-sm text-white/70 font-sans">
                  <MapPin className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                  <span>{office.address}</span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3.5 text-xs sm:text-sm text-white/70 font-sans">
                  <Phone className="w-4 h-4 text-white/40 shrink-0" />
                  <a href={`tel:${office.phone.replace(/[\s()]/g, "")}`} className="hover:text-[#60A5FA] transition-colors">
                    {office.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5 text-xs sm:text-sm text-white/70 font-sans">
                  <Mail className="w-4 h-4 text-white/40 shrink-0" />
                  <a href={`mailto:${office.email}`} className="hover:text-[#60A5FA] transition-colors">
                    {office.email}
                  </a>
                </div>

                {/* Operating hours */}
                <div className="flex items-center gap-3.5 text-xs sm:text-sm text-white/70 font-sans">
                  <Clock className="w-4 h-4 text-white/40 shrink-0" />
                  <span>{office.hours}</span>
                </div>
              </div>

              {/* Small blueprint network parameters status */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/30">
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-[#34D399]" />
                  <span>Sub-millisecond route status</span>
                </span>
                <span className="text-[#34D399] font-bold">ACTIVE</span>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
