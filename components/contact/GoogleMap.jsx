"use client";

import { motion } from "framer-motion";
import { MapPin, Globe, Compass, RefreshCw } from "lucide-react";

export default function GoogleMap() {
  return (
    <section id="google-map-section" className="relative z-10 scroll-mt-24 w-full space-y-8">
      
      {/* Container aligned to page limits */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="border border-white/10 bg-[#070712]/60 backdrop-blur-md rounded-3xl overflow-hidden relative shadow-2xl min-h-[400px] flex flex-col justify-between">
          
          {/* Header toolbar */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-black/40 z-10 relative">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#60A5FA]" />
              <span className="text-xs font-mono font-bold text-white/60 tracking-wider">
                global-office-network-map.vector
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-mono text-white/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Sync
              </span>
              <RefreshCw className="w-3 h-3 text-white/40 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Interactive World Grid SVG Map */}
          <div className="flex-1 w-full relative flex items-center justify-center min-h-[300px] overflow-hidden p-6">
            
            {/* World background map visual blueprint */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

            {/* Glowing connecting arc between SF and London */}
            <svg className="w-full max-w-[800px] aspect-[2/1] text-white/5 relative z-10" viewBox="0 0 800 400" fill="none">
              {/* World outline skeleton vectors (stylized curves) */}
              <path d="M 50 150 Q 150 120, 250 160 T 450 140 T 650 160 T 750 150" stroke="white" strokeWidth="0.5" strokeDasharray="3 3" />
              <path d="M 80 280 Q 200 240, 320 270 T 520 250 T 680 270" stroke="white" strokeWidth="0.5" strokeDasharray="3 3" />
              
              {/* Transatlantic Fiber Line Connection */}
              <motion.path 
                d="M 180 140 Q 320 60, 460 110" 
                stroke="#60A5FA" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                strokeDasharray="6 4"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -50 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              {/* San Francisco Node coordinate (180, 140) */}
              <g transform="translate(180, 140)">
                <circle cx="0" cy="0" r="14" fill="#60A5FA" fillOpacity="0.1" />
                <circle cx="0" cy="0" r="6" fill="#60A5FA" fillOpacity="0.3" />
                <motion.circle 
                  cx="0" cy="0" r="4" fill="#60A5FA"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Floating tooltip */}
                <foreignObject x="-70" y="-45" width="140" height="35">
                  <div className="bg-[#050510] border border-[#60A5FA]/30 rounded-lg p-1.5 px-2 text-center shadow-lg pointer-events-none">
                    <div className="text-[8px] font-mono font-bold text-white leading-none">San Francisco HQ</div>
                    <div className="text-[7px] font-mono text-white/40 leading-none mt-0.5">sf@webrix.co</div>
                  </div>
                </foreignObject>
              </g>

              {/* London Node coordinate (460, 110) */}
              <g transform="translate(460, 110)">
                <circle cx="0" cy="0" r="14" fill="#34D399" fillOpacity="0.1" />
                <circle cx="0" cy="0" r="6" fill="#34D399" fillOpacity="0.3" />
                <motion.circle 
                  cx="0" cy="0" r="4" fill="#34D399"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                
                {/* Floating tooltip */}
                <foreignObject x="-60" y="-45" width="120" height="35">
                  <div className="bg-[#050510] border border-[#34D399]/30 rounded-lg p-1.5 px-2 text-center shadow-lg pointer-events-none">
                    <div className="text-[8px] font-mono font-bold text-white leading-none">London Tech Hub</div>
                    <div className="text-[7px] font-mono text-white/40 leading-none mt-0.5">lon@webrix.co</div>
                  </div>
                </foreignObject>
              </g>

              {/* Coordinates grid marker labels */}
              <text x="30" y="380" fill="white" fillOpacity="0.2" fontSize="8" fontFamily="monospace">GRID COORDINATE INDEX: SF-37.7749/LN-51.5074</text>
              <text x="770" y="380" fill="white" fillOpacity="0.2" fontSize="8" fontFamily="monospace" textAnchor="end">SYS_STATUS: COMPLIANT</text>
            </svg>

          </div>

          {/* Footer details bar */}
          <div className="border-t border-white/10 px-5 py-3.5 bg-black/20 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-white/40 gap-3">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>Multi-node low-latency synchronization server active</span>
            </span>
            <div className="flex gap-4">
              <span>Ping (SF - LON): <strong className="text-white">68ms</strong></span>
              <span>Jitter: <strong className="text-white">0.4ms</strong></span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
