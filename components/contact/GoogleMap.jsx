"use client";

import { motion } from "framer-motion";
import { Compass, RefreshCw, MapPin, Globe } from "lucide-react";

export default function GoogleMap() {
  return (
    <section id="google-map-section" className="relative z-10 scroll-mt-24 w-full space-y-8">
      
      {/* Container aligned to page limits */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="border border-white/10 bg-[#070712]/60 backdrop-blur-md rounded-3xl overflow-hidden relative shadow-2xl flex flex-col justify-between">
          
          {/* Header toolbar */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 bg-black/40 z-10 relative">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#60A5FA]" />
              <span className="text-xs font-mono font-bold text-white/60 tracking-wider">
                hq-location-telemetry.vector
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-mono text-white/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse" />
                GPS Connected
              </span>
              <RefreshCw className="w-3 h-3 text-white/40 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Map Frame Casing */}
          <div className="w-full relative flex flex-col lg:flex-row items-stretch min-h-[450px]">
            
            {/* Left Column: Coordinates & Geographic Telemetry Readouts */}
            <div className="lg:w-1/4 border-r border-white/5 bg-black/20 p-6 flex flex-col justify-between font-mono text-[10px] text-white/50 space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[8px] font-bold text-[#60A5FA] tracking-widest uppercase">GEOGRAPHIC COORDS</span>
                  <div className="text-xs font-semibold text-white">23.062385° N, 72.676806° E</div>
                </div>

                <div className="space-y-1">
                  <span className="text-[8px] font-bold text-[#A78BFA] tracking-widest uppercase">LOCATION ADDRESS</span>
                  <div className="text-white/70 leading-relaxed font-sans">
                    Solitaire Superb, Opposite Somnath Party Plot, Sardar Patel Ring Road, New Nikol, Ahmedabad, Gujarat - 382350
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[8px] font-bold text-[#34D399] tracking-widest uppercase">SYS ROUTE META</span>
                  <div className="grid grid-cols-2 gap-2 text-[9px]">
                    <div>COUNTRY: <strong className="text-white">IND</strong></div>
                    <div>CITY: <strong className="text-white">AMD</strong></div>
                    <div>STATE: <strong className="text-white">GUJ</strong></div>
                    <div>STATUS: <strong className="text-[#34D399] font-bold">ONLINE</strong></div>
                  </div>
                </div>
              </div>

              {/* Decorative Tech Blueprint */}
              <div className="hidden lg:block border border-white/5 bg-white/[0.01] p-3.5 rounded-xl space-y-2">
                <div className="flex items-center gap-1.5 text-[8px] font-bold text-white/30 tracking-widest uppercase">
                  <Globe className="w-3 h-3 text-[#60A5FA]" />
                  <span>GIS Datastream</span>
                </div>
                <div className="h-10 bg-white/[0.01] border border-dashed border-white/10 rounded flex items-center justify-center text-[8px] text-white/20 select-none">
                  [SATELLITE SYNC OK]
                </div>
              </div>
            </div>

            {/* Right Column: Custom Styled Google Map Iframe */}
            <div className="lg:w-3/4 w-full h-[450px] relative overflow-hidden bg-black/40">
              
              {/* Overlay styling for custom map glow effect */}
              <div className="absolute inset-0 z-10 pointer-events-none border border-inset border-white/5" />
              
              {/* Premium dark mode filter mapped over standard Google Maps */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.3119942768!2d72.67680617509305!3d23.062385479145824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87e4bce6d27f%3A0x6332af5bfc80b579!2sSolitaire%20Superb!5e1!3m2!1sen!2sin!4v1783489437909!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ 
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(95%) grayscale(20%)"
                }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full relative z-0"
              />

            </div>
          </div>

          {/* Footer details bar */}
          <div className="border-t border-white/10 px-5 py-3.5 bg-black/20 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-white/40 gap-3">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>Webrix Solitaire Superb Hub &bull; Ahmedabad, India</span>
            </span>
            <div className="flex gap-4">
              <span>Ping (Main Node): <strong className="text-white">12ms</strong></span>
              <span>Jitter: <strong className="text-white">0.2ms</strong></span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
