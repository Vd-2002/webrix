"use client";

import { useState, useEffect } from "react";

export default function GlobalBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, cursorX: -500, cursorY: -500 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePosition({
        x: x * 15,
        y: y * 15,
        cursorX: e.clientX,
        cursorY: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
      {/* Dynamic Cursor Glowing Ambient Light (Fixed relative to viewport) */}
      <div 
        className="fixed pointer-events-none opacity-25 transition-opacity duration-500 blur-[130px] hidden md:block"
        style={{
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(96, 165, 250, 0.7) 0%, rgba(129, 140, 248, 0.3) 40%, transparent 70%)",
          left: `${mousePosition.cursorX - 240}px`,
          top: `${mousePosition.cursorY - 240}px`,
          transform: "translate3d(0, 0, 0)",
        }}
      />

      {/* Global Static Glow Spots for Visual Richness */}
      <div className="absolute -left-48 top-12 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[150px]" />
      <div className="absolute -right-48 top-[60vh] w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[150px]" />
      <div className="absolute -left-48 top-[140vh] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[150px]" />

      {/* Parallax Grid Pattern (Absolute to cover the entire page height) */}
      <div 
        className="absolute inset-0 opacity-[0.15] transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
        }}
      />
    </div>
  );
}
