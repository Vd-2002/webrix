"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, 
  ArrowRight
} from "lucide-react";
import Button from "../ui/Button";

// Advanced High-Density SVG: Website & UI Construction Workstation
function SoftwareVisualizer() {
  return (
    <svg className="w-full h-full max-w-[420px] max-h-[420px]" viewBox="0 0 240 240">
      <defs>
        <radialGradient id="softBlueGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background Glow */}
      <circle cx="120" cy="115" r="100" fill="url(#softBlueGlow)" />

      {/* Orbiting background tech rings */}
      <motion.circle 
        cx="120" cy="110" r="105" 
        stroke="rgba(96,165,250,0.12)" strokeWidth="0.75" fill="none" strokeDasharray="3 9"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="origin-[120px_110px]"
      />

      {/* Floating HTML / CSS Technology Tags */}
      <g opacity="0.8">
        {/* JS Badge */}
        <rect x="22" y="12" width="18" height="9" rx="2" fill="rgba(96,165,250,0.1)" stroke="rgba(96,165,250,0.3)" strokeWidth="0.5" />
        <text x="31" y="18" textAnchor="middle" fill="#60A5FA" className="font-mono text-[5.5px] font-bold">JS</text>
        {/* CSS Badge */}
        <rect x="196" y="12" width="22" height="9" rx="2" fill="rgba(129,140,248,0.1)" stroke="rgba(129,140,248,0.3)" strokeWidth="0.5" />
        <text x="207" y="18" textAnchor="middle" fill="#818CF8" className="font-mono text-[5.5px] font-bold">CSS</text>
        {/* React Badge */}
        <rect x="202" y="105" width="24" height="9" rx="2" fill="rgba(96,165,250,0.1)" stroke="rgba(96,165,250,0.3)" strokeWidth="0.5" />
        <text x="214" y="111" textAnchor="middle" fill="#60A5FA" className="font-mono text-[5.5px] font-bold">REACT</text>
      </g>

      {/* Laptop Frame Mockup */}
      <g>
        {/* Screen housing */}
        <rect x="20" y="30" width="200" height="135" rx="6" fill="#080812" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        {/* Display Bezel */}
        <rect x="24" y="34" width="192" height="127" rx="4" fill="#030308" stroke="rgba(255,255,255,0.04)" />
        {/* Keyboard Base base */}
        <path d="M6 165 L234 165 L218 180 L22 180 Z" fill="#0A0A18" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        {/* Keyboard keys representation rows */}
        <line x1="28" y1="168" x2="212" y2="168" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="24" y1="171" x2="216" y2="171" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 2" />
        <line x1="20" y1="174" x2="220" y2="174" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="5 2" />
        {/* Keyboard Trackpad */}
        <rect x="105" y="176" width="30" height="3" rx="1" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      </g>

      {/* Left Column: Code Editor (IDE Dashboard) */}
      <g>
        {/* Editor Background */}
        <rect x="28" y="40" width="86" height="115" rx="2.5" fill="#040409" stroke="rgba(255,255,255,0.05)" />
        {/* File Tabs */}
        <rect x="28" y="40" width="28" height="8" rx="1.5" fill="rgba(96,165,250,0.12)" />
        <text x="42" y="46" textAnchor="middle" fill="#60A5FA" className="font-mono text-[4.5px] font-bold">index.js</text>
        <rect x="58" y="40" width="26" height="8" rx="1.5" fill="rgba(255,255,255,0.03)" />
        <text x="71" y="46" textAnchor="middle" fill="rgba(255,255,255,0.3)" className="font-mono text-[4.5px]">styles.css</text>
        
        {/* Directory Sidebar Tree */}
        <g opacity="0.6">
          <line x1="34" y1="52" x2="34" y2="145" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          <circle cx="38" cy="56" r="1.5" fill="#60A5FA" />
          <circle cx="38" cy="66" r="1.5" fill="#818CF8" />
          <circle cx="38" cy="76" r="1.5" fill="rgba(255,255,255,0.15)" />
          <circle cx="38" cy="86" r="1.5" fill="rgba(255,255,255,0.15)" />
        </g>

        {/* Code lines */}
        <motion.line x1="46" y1="56" x2="82" y2="56" stroke="#F472B6" strokeWidth="1.5" strokeLinecap="round"
          animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} />
        <motion.line x1="46" y1="66" x2="105" y2="66" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"
          animate={{ scaleX: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }} className="origin-left" />
        <motion.line x1="56" y1="76" x2="95" y2="76" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round"
          animate={{ scaleX: [0.8, 1, 0.8] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }} className="origin-left" />
        <line x1="56" y1="86" x2="108" y2="86" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        
        {/* Nested Function Block */}
        <line x1="46" y1="98" x2="80" y2="98" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" />
        <motion.line x1="56" y1="108" x2="102" y2="108" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"
          animate={{ scaleX: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity }} className="origin-left" />
        <line x1="56" y1="118" x2="92" y2="118" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="56" y1="128" x2="82" y2="128" stroke="#F472B6" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Blinking cursor */}
        <motion.line x1="84" y1="125" x2="84" y2="131" stroke="#60A5FA" strokeWidth="1"
          animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} />
      </g>

      {/* Right Column: Web Browser (Assembling Analytics Layout) */}
      <g>
        {/* Browser Outer */}
        <rect x="122" y="40" width="86" height="115" rx="3" fill="#040409" stroke="rgba(255,255,255,0.06)" />
        {/* Browser Header Bar */}
        <rect x="122" y="40" width="86" height="10" rx="3" fill="rgba(255,255,255,0.03)" />
        <circle cx="127" cy="45" r="1" fill="#EF4444" opacity="0.8" />
        <circle cx="131" cy="45" r="1" fill="#F59E0B" opacity="0.8" />
        <circle cx="135" cy="45" r="1" fill="#10B981" opacity="0.8" />
        {/* Search URL bar */}
        <rect x="144" y="42" width="46" height="6" rx="2" fill="rgba(255,255,255,0.05)" />
        {/* Profile Avatar indicator */}
        <circle cx="201" cy="45" r="2.5" fill="rgba(255,255,255,0.15)" />
        
        {/* Website Header */}
        <rect x="127" y="54" width="76" height="6" rx="1" fill="rgba(96,165,250,0.15)" />
        
        {/* Website Hero Block */}
        <motion.rect 
          x="127" y="64" width="76" height="22" rx="2" 
          fill="rgba(96,165,250,0.25)"
          animate={{ scaleY: [0.7, 1, 1, 0.7], opacity: [0.6, 1, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="origin-[127px_64px]"
        />

        {/* Website Columns Grid (4 items) */}
        <g>
          <motion.rect 
            x="127" y="90" width="35" height="14" rx="2" 
            fill="rgba(129,140,248,0.2)"
            animate={{ scaleY: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="origin-[127px_90px]"
          />
          <motion.rect 
            x="168" y="90" width="35" height="14" rx="2" 
            fill="rgba(129,140,248,0.2)"
            animate={{ scaleY: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="origin-[168px_90px]"
          />
          <motion.rect 
            x="127" y="108" width="35" height="14" rx="2" 
            fill="rgba(129,140,248,0.2)"
            animate={{ scaleY: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="origin-[127px_108px]"
          />
          <motion.rect 
            x="168" y="108" width="35" height="14" rx="2" 
            fill="rgba(129,140,248,0.2)"
            animate={{ scaleY: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="origin-[168px_108px]"
          />
        </g>

        {/* Inner dashboard line graph widget inside browser */}
        <g opacity="0.8">
          <rect x="127" y="126" width="76" height="24" rx="1.5" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
          <line x1="130" y1="142" x2="198" y2="142" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          <motion.path 
            d="M130 142 L140 134 L150 145 L160 132 L170 139 L180 131 L190 141" 
            stroke="#60A5FA" strokeWidth="1" fill="none"
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>
      </g>

      {/* Floating bracket ornaments */}
      <text x="25" y="24" fill="#60A5FA" className="font-mono text-[9px] font-bold opacity-60">{"{"}</text>
      <text x="208" y="24" fill="#818CF8" className="font-mono text-[9px] font-bold opacity-60">{"}"}</text>
      
      {/* Glowing Star Sparkle */}
      <motion.path 
        d="M216 56 L218 60 L222 61 L218 62 L216 66 L214 62 L210 61 L214 60 Z" 
        fill="#60A5FA"
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  );
}

// Advanced High-Density SVG: Cloud Server Cluster Rack with DB Silos
function CloudVisualizer() {
  return (
    <svg className="w-full h-full max-w-[420px] max-h-[420px]" viewBox="0 0 240 240">
      <defs>
        <radialGradient id="softPurpleGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Glow */}
      <circle cx="120" cy="115" r="100" fill="url(#softPurpleGlow)" />

      {/* Cloud SVG Header */}
      <g>
        <path
          d="M120 24 C109 24, 100 32, 99 42 C90 42, 83 49, 83 58 C83 67, 90 74, 99 74 L141 74 C150 74, 157 67, 157 58 C157 49, 150 42, 141 42 C140 32, 131 24, 120 24 Z"
          fill="#070712"
          stroke="#A78BFA"
          strokeWidth="1.5"
        />
        <circle cx="120" cy="48" r="3.5" fill="#A78BFA" className="animate-pulse" />
      </g>

      {/* Client Viewport wireframes (Desktop Monitor & Mobile Phone) connected to cloud */}
      <g opacity="0.7">
        {/* Desktop Client left */}
        <rect x="25" y="55" width="28" height="18" rx="2" fill="#040409" stroke="rgba(255,255,255,0.12)" strokeWidth="0.75" />
        <path d="M39 73 L39 79 L33 79 L45 79 Z" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.75" />
        
        {/* Mobile Client right */}
        <rect x="188" y="52" width="15" height="26" rx="3" fill="#040409" stroke="rgba(255,255,255,0.12)" strokeWidth="0.75" />
        <circle cx="195.5" cy="74" r="1" fill="rgba(255,255,255,0.3)" />
      </g>

      {/* Tiny active Cloud badges (AWS/GCP) floating */}
      <g opacity="0.8">
        <rect x="52" y="86" width="22" height="10" rx="2" fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" strokeWidth="0.5" />
        <text x="63" y="93" textAnchor="middle" fill="#A78BFA" className="font-mono text-[5.5px] font-bold">AWS</text>
        <rect x="166" y="86" width="22" height="10" rx="2" fill="rgba(129,140,248,0.12)" stroke="rgba(129,140,248,0.3)" strokeWidth="0.5" />
        <text x="177" y="93" textAnchor="middle" fill="#818CF8" className="font-mono text-[5.5px] font-bold">GCP</text>
      </g>

      {/* Left: Server Infrastructure Rack (4 servers) */}
      <g>
        {/* Rack Frame */}
        <rect x="22" y="115" width="76" height="102" rx="4" fill="#040409" stroke="rgba(255,255,255,0.06)" />
        
        {/* Server Slot 1 */}
        <g>
          <rect x="26" y="120" width="68" height="18" rx="2" fill="#0A0A16" stroke="rgba(255,255,255,0.04)" />
          <circle cx="34" cy="129" r="2.5" fill="#10B981" />
          <circle cx="41" cy="129" r="2" fill="#10B981" />
          <motion.circle cx="48" cy="129" r="2" fill="#A78BFA"
            animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity }} />
          <line x1="55" y1="129" x2="72" y2="129" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="1.5 1.5" />
          <motion.circle cx="82" cy="129" r="3.5" stroke="rgba(255,255,255,0.2)" strokeWidth="0.75" strokeDasharray="2 2" fill="none"
            animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="origin-[82px_129px]" />
        </g>

        {/* Server Slot 2 */}
        <g>
          <rect x="26" y="141" width="68" height="18" rx="2" fill="#0A0A16" stroke="rgba(255,255,255,0.04)" />
          <circle cx="34" cy="150" r="2.5" fill="#10B981" />
          <motion.circle cx="41" cy="150" r="2" fill="#A78BFA"
            animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }} />
          <circle cx="48" cy="150" r="2" fill="#10B981" />
          <line x1="55" y1="150" x2="72" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="1.5 1.5" />
          <motion.circle cx="82" cy="150" r="3.5" stroke="rgba(255,255,255,0.2)" strokeWidth="0.75" strokeDasharray="2 2" fill="none"
            animate={{ rotate: 360 }} transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }} className="origin-[82px_150px]" />
        </g>

        {/* Server Slot 3 */}
        <g>
          <rect x="26" y="162" width="68" height="18" rx="2" fill="#0A0A16" stroke="rgba(255,255,255,0.04)" />
          <motion.circle cx="34" cy="171" r="2.5" fill="#A78BFA"
            animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.4 }} />
          <circle cx="41" cy="171" r="2" fill="#10B981" />
          <circle cx="48" cy="171" r="2" fill="#10B981" />
          <line x1="55" y1="171" x2="72" y2="171" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="1.5 1.5" />
          <motion.circle cx="82" cy="171" r="3.5" stroke="rgba(255,255,255,0.2)" strokeWidth="0.75" strokeDasharray="2 2" fill="none"
            animate={{ rotate: 360 }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }} className="origin-[82px_171px]" />
        </g>

        {/* Server Slot 4 */}
        <g>
          <rect x="26" y="183" width="68" height="18" rx="2" fill="#0A0A16" stroke="rgba(255,255,255,0.04)" />
          <circle cx="34" cy="192" r="2.5" fill="#10B981" />
          <circle cx="41" cy="192" r="2" fill="#10B981" />
          <circle cx="48" cy="192" r="2" fill="#10B981" />
          <line x1="55" y1="192" x2="72" y2="192" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="1.5 1.5" />
          <motion.circle cx="82" cy="192" r="3.5" stroke="rgba(255,255,255,0.2)" strokeWidth="0.75" strokeDasharray="2 2" fill="none"
            animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="origin-[82px_192px]" />
        </g>
      </g>

      {/* Center Bottom: CPU & RAM gauge meter rings */}
      <g>
        {/* CPU Ring */}
        <circle cx="112" cy="142" r="11" stroke="rgba(255,255,255,0.06)" strokeWidth="2" fill="none" />
        <motion.circle cx="112" cy="142" r="11" stroke="#A78BFA" strokeWidth="2" fill="none" strokeDasharray="70" strokeDashoffset="20"
          animate={{ strokeDashoffset: [20, 45, 10, 20] }} transition={{ duration: 4, repeat: Infinity }} className="origin-[112px_142px]" />
        <text x="112" y="144" textAnchor="middle" fill="#A78BFA" className="font-mono text-[5px] font-bold">85%</text>
        <text x="112" y="157" textAnchor="middle" fill="rgba(255,255,255,0.3)" className="font-mono text-[4.5px] uppercase">CPU</text>

        {/* RAM Ring */}
        <circle cx="112" cy="180" r="11" stroke="rgba(255,255,255,0.06)" strokeWidth="2" fill="none" />
        <motion.circle cx="112" cy="180" r="11" stroke="#818CF8" strokeWidth="2" fill="none" strokeDasharray="70" strokeDashoffset="30"
          animate={{ strokeDashoffset: [30, 15, 45, 30] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="origin-[112px_180px]" />
        <text x="112" y="182" textAnchor="middle" fill="#818CF8" className="font-mono text-[5px] font-bold">62%</text>
        <text x="112" y="195" textAnchor="middle" fill="rgba(255,255,255,0.3)" className="font-mono text-[4.5px] uppercase">RAM</text>
      </g>

      {/* Right: 3 Database Cylinder Silos (Replicating Stack) */}
      <g>
        {/* Silo 1 (Large Center Database) */}
        <g>
          <path d="M132 122 A 13 5.5 0 0 0 158 122 V157 A 13 5.5 0 0 1 132 157 Z" fill="#06060F" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <ellipse cx="145" cy="122" rx="13" ry="5.5" fill="#080816" stroke="#A78BFA" strokeWidth="1" />
          <ellipse cx="145" cy="133" rx="13" ry="4.5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
          <ellipse cx="145" cy="145" rx="13" ry="4.5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
          <ellipse cx="145" cy="157" rx="13" ry="5.5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          
          <motion.ellipse
            cx="145" cy="122" rx="13" ry="5.5"
            stroke="#A78BFA" strokeWidth="1" fill="none"
            animate={{ rx: [13, 23], ry: [5.5, 9.5], opacity: [0.8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />
        </g>

        {/* Silo 2 (Back Right DB) */}
        <g>
          <path d="M166 132 A 11 4.5 0 0 0 188 132 V164 A 11 4.5 0 0 1 166 164 Z" fill="#06060F" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <ellipse cx="177" cy="132" rx="11" ry="4.5" fill="#080816" stroke="#818CF8" strokeWidth="1" />
          <ellipse cx="177" cy="142" rx="11" ry="4" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
          <ellipse cx="177" cy="153" rx="11" ry="4" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
          <ellipse cx="177" cy="164" rx="11" ry="4.5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          
          <motion.ellipse
            cx="177" cy="132" rx="11" ry="4.5"
            stroke="#818CF8" strokeWidth="1" fill="none"
            animate={{ rx: [11, 20], ry: [4.5, 8], opacity: [0.8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          />
        </g>

        {/* Silo 3 (Front Right DB) */}
        <g opacity="0.9">
          <path d="M148 148 A 12 5 0 0 0 172 148 V180 A 12 5 0 0 1 148 180 Z" fill="#06060F" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <ellipse cx="160" cy="148" rx="12" ry="5" fill="#080816" stroke="#60A5FA" strokeWidth="1.25" />
          <ellipse cx="160" cy="158" rx="12" ry="4.5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
          <ellipse cx="160" cy="169" rx="12" ry="4.5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
          <ellipse cx="160" cy="180" rx="12" ry="5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          
          <motion.ellipse
            cx="160" cy="148" rx="12" ry="5"
            stroke="#60A5FA" strokeWidth="1" fill="none"
            animate={{ rx: [12, 22], ry: [5, 9], opacity: [0.8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.9 }}
          />
        </g>
      </g>

      {/* Connecting Flow Lines */}
      <path d="M53 64 Q90 52 99 50" stroke="rgba(167,139,250,0.15)" strokeWidth="0.75" fill="none" strokeDasharray="2 2" />
      <path d="M188 65 Q150 52 141 50" stroke="rgba(167,139,250,0.15)" strokeWidth="0.75" fill="none" strokeDasharray="2 2" />
      
      <path d="M120 74 Q90 82 72 115" stroke="rgba(167,139,250,0.25)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
      <path d="M120 74 Q128 82 135 119" stroke="rgba(167,139,250,0.25)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
      <path d="M120 74 Q142 85 168 128" stroke="rgba(167,139,250,0.25)" strokeWidth="1" fill="none" strokeDasharray="3 3" />

      {/* Flowing Packets */}
      <motion.circle r="2" fill="#A78BFA"
        animate={{ cx: [120, 90, 72], cy: [74, 82, 115] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle r="2" fill="#818CF8"
        animate={{ cx: [120, 128, 135], cy: [74, 82, 119] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.8 }}
      />
      <motion.circle r="2" fill="#A78BFA"
        animate={{ cx: [120, 142, 168], cy: [74, 85, 128] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "linear", delay: 1.4 }}
      />
    </svg>
  );
}

// Advanced High-Density SVG: AI Cognitive Brain Funnel & Grow Charts
function AIVisualizer() {
  return (
    <svg className="w-full h-full max-w-[420px] max-h-[420px]" viewBox="0 0 240 240">
      <defs>
        <radialGradient id="softGreenGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#818CF8" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Glow */}
      <circle cx="120" cy="115" r="100" fill="url(#softGreenGlow)" />

      {/* Left Input Nodes (Raw business files/messages) */}
      {/* File Page Doc */}
      <g>
        <rect x="15" y="32" width="24" height="30" rx="3" fill="#06060F" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="20" y1="39" x2="34" y2="39" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="45" x2="34" y2="45" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="51" x2="27" y2="51" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Email envelope */}
      <g>
        <rect x="15" y="76" width="24" height="16" rx="2" fill="#06060F" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <path d="M15 78 L27 85 L39 78" stroke="#34D399" strokeWidth="1" fill="none" />
        <circle cx="34" cy="80" r="1.5" fill="#EF4444" />
      </g>

      {/* Terminal query input box */}
      <g>
        <rect x="15" y="112" width="24" height="18" rx="2" fill="#040408" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <text x="18" y="123" fill="#34D399" className="font-mono text-[8px] font-bold">&gt;_</text>
      </g>

      {/* Calendar Scheduling Card */}
      <g>
        <rect x="15" y="146" width="24" height="24" rx="3" fill="#06060F" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <rect x="15" y="146" width="24" height="6" rx="1.5" fill="rgba(255,255,255,0.05)" />
        <circle cx="21" cy="149" r="1" fill="#34D399" />
        <circle cx="33" cy="149" r="1" fill="#34D399" />
        <circle cx="21" cy="157" r="1" fill="rgba(255,255,255,0.3)" />
        <circle cx="27" cy="157" r="1" fill="rgba(255,255,255,0.3)" />
        <circle cx="27" cy="163" r="1" fill="#34D399" />
      </g>

      {/* Structured Database Spreadsheet Grid */}
      <g>
        <rect x="15" y="184" width="24" height="22" rx="2.5" fill="#06060F" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <line x1="15" y1="191" x2="39" y2="191" stroke="rgba(255,255,255,0.1)" strokeWidth="0.75" />
        <line x1="15" y1="198" x2="39" y2="198" stroke="rgba(255,255,255,0.1)" strokeWidth="0.75" />
        <line x1="23" y1="184" x2="23" y2="206" stroke="rgba(255,255,255,0.1)" strokeWidth="0.75" />
        <line x1="31" y1="184" x2="31" y2="206" stroke="rgba(255,255,255,0.1)" strokeWidth="0.75" />
        <rect x="25" y="193" width="4" height="3" fill="#34D399" opacity="0.8" />
        <rect x="17" y="200" width="4" height="3" fill="#34D399" opacity="0.8" />
      </g>

      {/* Center: Triple nested Cog cognitive gear systems (AI Brain Core) */}
      <g>
        {/* Large gear */}
        <motion.circle 
          cx="120" cy="116" r="28" 
          stroke="#34D399" strokeWidth="1.25" fill="none" strokeDasharray="8 6"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="origin-[120px_116px]"
        />
        {/* Medium gear (Interlocking) */}
        <motion.circle 
          cx="96" cy="140" r="18" 
          stroke="#818CF8" strokeWidth="1" fill="none" strokeDasharray="5 4"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="origin-[96px_140px]"
        />
        {/* Small gear (Interlocking) */}
        <motion.circle 
          cx="142" cy="94" r="14" 
          stroke="#A78BFA" strokeWidth="0.75" fill="none" strokeDasharray="3 3"
          animate={{ rotate: -360 }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          className="origin-[142px_94px]"
        />
        
        {/* Main Central Logic Node */}
        <circle cx="120" cy="116" r="15" fill="#080815" stroke="rgba(255,255,255,0.08)" />
        <path d="M120 109 L122 114 L127 116 L122 118 L120 123 L118 118 L113 116 L118 114 Z" fill="#34D399" />
      </g>

      {/* Right Outputs (Deliverables: Sparkline Growth Charts & Ticking Tasks) */}
      {/* 1. Growing analytics charts (Overlay 5 Bar Columns + Line Graph) */}
      <g>
        <rect x="180" y="24" width="46" height="46" rx="3.5" fill="#06060F" stroke="rgba(255,255,255,0.06)" />
        
        {/* Bar charts growing */}
        <motion.rect x="185" y="62" width="4" height="6" rx="0.5" fill="#34D399"
          animate={{ scaleY: [1, 2.5, 1], y: [0, -9, 0] }} transition={{ duration: 2, repeat: Infinity }} className="origin-bottom" />
        <motion.rect x="192" y="62" width="4" height="12" rx="0.5" fill="#818CF8"
          animate={{ scaleY: [1, 1.8, 1], y: [0, -9, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.35 }} className="origin-bottom" />
        <motion.rect x="199" y="62" width="4" height="18" rx="0.5" fill="#A78BFA"
          animate={{ scaleY: [1, 1.5, 1], y: [0, -9, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.7 }} className="origin-bottom" />
        <motion.rect x="206" y="62" width="4" height="22" rx="0.5" fill="#60A5FA"
          animate={{ scaleY: [1, 2.2, 1], y: [0, -12, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1.05 }} className="origin-bottom" />
        <motion.rect x="213" y="62" width="4" height="14" rx="0.5" fill="#34D399"
          animate={{ scaleY: [1, 1.9, 1], y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1.4 }} className="origin-bottom" />

        {/* Axes */}
        <line x1="183" y1="63" x2="221" y2="63" stroke="rgba(255,255,255,0.15)" strokeWidth="0.75" />

        {/* Superimposed sparkline line graph */}
        <motion.path 
          d="M185 46 L192 36 L199 44 L206 32 L213 38 L220 28" 
          stroke="#34D399" strokeWidth="1" fill="none"
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </g>

      {/* 2. Automated Checklist Tasks tickets */}
      <g>
        {/* Ticket 1 */}
        <g>
          <rect x="180" y="80" width="46" height="18" rx="3.5" fill="#06060F" stroke="rgba(255,255,255,0.06)" />
          <path d="M186 89 L189 91.5 L194 86" stroke="#10B981" strokeWidth="1.25" fill="none" strokeLinecap="round" />
          <line x1="199" y1="89" x2="219" y2="89" stroke="rgba(255,255,255,0.2)" strokeWidth="1.25" strokeLinecap="round" />
        </g>
        {/* Ticket 2 */}
        <g>
          <rect x="180" y="110" width="46" height="18" rx="3.5" fill="#06060F" stroke="rgba(255,255,255,0.06)" />
          <path d="M186 119 L189 121.5 L194 116" stroke="#10B981" strokeWidth="1.25" fill="none" strokeLinecap="round" />
          <line x1="199" y1="119" x2="219" y2="119" stroke="rgba(255,255,255,0.2)" strokeWidth="1.25" strokeLinecap="round" />
        </g>
        {/* Ticket 3 */}
        <g opacity="0.8">
          <rect x="180" y="140" width="46" height="18" rx="3.5" fill="#06060F" stroke="rgba(255,255,255,0.06)" />
          <path d="M186 149 L189 151.5 L194 146" stroke="#10B981" strokeWidth="1.25" fill="none" strokeLinecap="round" />
          <line x1="199" y1="149" x2="219" y2="149" stroke="rgba(255,255,255,0.2)" strokeWidth="1.25" strokeLinecap="round" />
        </g>
      </g>

      {/* 3. Circular success validation badge */}
      <g>
        <circle cx="203" cy="188" r="14" fill="rgba(16,185,129,0.08)" stroke="#10B981" strokeWidth="1.25" />
        <path d="M197 188 L201 192 L209 184" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Pipeline routes */}
      <path d="M39 47 Q80 52 93 90" stroke="url(#flowGrad)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
      <path d="M39 84 Q76 90 92 104" stroke="url(#flowGrad)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
      <path d="M39 121 Q80 120 92 120" stroke="url(#flowGrad)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
      <path d="M39 158 Q80 148 93 134" stroke="url(#flowGrad)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
      <path d="M39 195 Q80 185 96 148" stroke="url(#flowGrad)" strokeWidth="1" fill="none" strokeDasharray="3 3" />

      <path d="M147 98 Q160 55 179 49" stroke="url(#flowGrad)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
      <path d="M148 112 H179" stroke="url(#flowGrad)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
      <path d="M146 128 Q160 140 179 146" stroke="url(#flowGrad)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
      <path d="M140 138 Q165 178 188 184" stroke="url(#flowGrad)" strokeWidth="1" fill="none" strokeDasharray="3 3" />

      {/* Blinking communication packets */}
      <motion.circle r="2" fill="#34D399"
        animate={{ cx: [39, 80, 93], cy: [47, 52, 90] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle r="2" fill="#34D399"
        animate={{ cx: [39, 92], cy: [84, 104] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.4 }}
      />
      <motion.circle r="2" fill="#818CF8"
        animate={{ cx: [147, 160, 179], cy: [98, 55, 49] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.6 }}
      />
      <motion.circle r="2" fill="#818CF8"
        animate={{ cx: [148, 179], cy: [112, 112] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 1 }}
      />
    </svg>
  );
}


// Static configuration data defined outside of components
const SLIDES = [
  {
    badge: "Software Engineering",
    title: "Building Custom Websites & Software",
    desc: "We design and build fast websites and mobile apps using modern technology.",
    bullets: ["Dedicated Teams", "Modern & Secure Code", "Tested for Safety"],
    bg: "/software_engineering_bg.png",
    accentColor: "#60A5FA",
    visualizer: SoftwareVisualizer,
    metrics: [
      { label: "Requests/day", target: "10", suffix: "M+" },
      { label: "API Latency", target: "45", suffix: "ms" },
      { label: "Secure Endpoints", target: "100", suffix: "%" }
    ]
  },
  {
    badge: "Cloud & DevOps",
    title: "Hosting & Cloud Infrastructure",
    desc: "Move your existing systems to secure and reliable cloud servers like AWS, Google Cloud, or Microsoft Azure.",
    bullets: ["Easy Server Setups", "99.99% Uptime Guarantee", "Safe and Smooth Migration"],
    bg: "/cloud_systems_bg.png",
    accentColor: "#A78BFA",
    visualizer: CloudVisualizer,
    metrics: [
      { label: "Deployment Speed", target: "15", suffix: "x" },
      { label: "Uptime SLA", target: "99.99", suffix: "%" },
      { label: "Cloud Savings", target: "40", suffix: "%" }
    ]
  },
  {
    badge: "AI & Automation",
    title: "Smart AI & Automations",
    desc: "Make your business faster and automate daily tasks using smart AI and workflows.",
    bullets: ["Custom AI Solutions", "Automated Reporting", "Smart Workflow Integrations"],
    bg: "/ai_automation_bg.png",
    accentColor: "#34D399",
    visualizer: AIVisualizer,
    metrics: [
      { label: "Efficiency Gain", target: "5", suffix: "x" },
      { label: "Accuracy Rate", target: "98.4", suffix: "%" },
      { label: "Setup Time", target: "24", suffix: "h" }
    ]
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Auto-advance slides unless manually overriden
  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [current, isAutoplay]);

  const currentSlide = SLIDES[current];

  const handleNext = () => {
    setIsAutoplay(false);
    setDirection(1);
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setIsAutoplay(false);
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Motion variants for slide text contents (elegant vertical crossfade)
  const textVariants = {
    enter: {
      y: 8,
      opacity: 0
    },
    center: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 300, damping: 28 },
        opacity: { duration: 0.4 }
      }
    },
    exit: {
      y: -8,
      opacity: 0,
      transition: {
        opacity: { duration: 0.3 }
      }
    }
  };

  return (
    <section 
      className="relative w-full min-h-screen bg-transparent overflow-hidden flex flex-col items-center justify-center pt-[92px]"
    >
      {/* Background Image Slider with Fade Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        >
          <Image
            src={currentSlide.bg}
            alt={currentSlide.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#05050A]/95" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-16 w-full flex-1 flex flex-col justify-center relative z-10 py-16">
        
        {/* Center Split Screen Details */}
        <motion.div 
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(event, info) => {
            const swipeThreshold = 50; // pixels
            if (info.offset.x < -swipeThreshold) {
              handleNext();
            } else if (info.offset.x > swipeThreshold) {
              handlePrev();
            }
          }}
          className="grid lg:grid-cols-12 gap-12 items-center w-full cursor-grab active:cursor-grabbing select-none"
        >
          
          {/* Left Details (7 columns) - Crossfades vertically */}
          <div className="lg:col-span-7 space-y-6 text-left overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6"
              >

                {/* Heading with word-by-word highlight */}
                <h1 className="text-xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white font-display">
                  {currentSlide.title.split(" ").map((word, i, arr) => {
                    const isHighlight = i >= arr.length - 2;
                    if (isHighlight) {
                      return (
                        <span 
                          key={i} 
                          className="bg-clip-text text-transparent bg-gradient-to-r"
                          style={{
                            backgroundImage: `linear-gradient(to right, ${currentSlide.accentColor}, #818CF8)`
                          }}
                        >
                          {word}{" "}
                        </span>
                      );
                    }
                    return word + " ";
                  })}
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans max-w-xl">
                  {currentSlide.desc}
                </p>

                {/* Visual bullet points */}
                <div className="space-y-3 pt-2">
                  {currentSlide.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-sans text-white/80">
                      <div className="p-1 rounded-full bg-white/5 border border-white/10 flex-shrink-0">
                        <Check className="w-3.5 h-3.5" style={{ color: currentSlide.accentColor }} />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Call To Actions */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    variant="primary"
                    className="px-8 py-3.5 text-xs tracking-wider relative overflow-hidden group shadow-lg shadow-primary/20 hover:shadow-primary/45 transition-all duration-300 rounded-md animate-none"
                  >
                    <span className="relative z-10 inline-flex items-center gap-1.5 text-black font-bold">
                      Get Started <ArrowRight className="w-3.5 h-3.5 text-black" />
                    </span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="px-8 py-3.5 text-xs tracking-wider rounded-md border-white/20 text-white hover:bg-white/5 transition-all duration-300"
                  >
                    Case Studies
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Visualizer Panel (5 columns) - Borderless Floating SVGs */}
          <div className="lg:col-span-5 w-full flex items-center justify-center min-h-[300px] lg:min-h-[440px] relative">
            {/* Soft circular backdrop glow directly behind the active SVG */}
            <div 
              className="absolute w-[300px] h-[300px] rounded-full opacity-35 blur-[80px] transition-all duration-700 pointer-events-none z-0"
              style={{
                background: `radial-gradient(circle, ${currentSlide.accentColor} 0%, transparent 70%)`
              }}
            />
            
            {/* Internal visualizer transitions with simple opacity crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none"
                style={{
                  filter: `drop-shadow(0 0 28px ${currentSlide.accentColor}55)`
                }}
              >
                <div className="w-full h-full flex items-center justify-center pointer-events-auto">
                  <currentSlide.visualizer />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </motion.div>


        {/* Bottom Progress indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsAutoplay(false);
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              className="group relative flex items-center justify-center py-2 cursor-pointer"
            >
              <div 
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  current === idx ? "w-8 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
