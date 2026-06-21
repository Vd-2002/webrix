"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Industries", href: "#" },
    { name: "Our Work", href: "#" },
  ];

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full border-b flex items-center transition-colors duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border/40 shadow-lg shadow-black/20"
          : "bg-transparent border-transparent"
      }`}
      animate={{
        height: scrolled ? 68 : 92,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 26,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 w-full flex items-center justify-between">
        {/* Logo with interactive spring scale */}
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <motion.div
              animate={{
                scale: scrolled ? 0.95 : 1.2,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 26,
              }}
              className="origin-left cursor-pointer"
            >
              <Image
                src="/logo.png"
                alt="Webrix Logo"
                width={130}
                height={38}
                className="object-contain max-h-[38px] w-auto"
                priority
              />
            </motion.div>
          </a>
        </div>

        {/* Desktop Navigation with sliding background pill */}
        <nav 
          className="hidden md:flex items-center gap-1.5 text-[14px] font-sans font-medium tracking-wide"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(index)}
              className="relative px-4 py-2 text-foreground/80 hover:text-foreground transition-colors duration-300 rounded-[5px]"
            >
              <span className="relative z-10">{item.name}</span>
              {hoveredIndex === index && (
                <motion.span
                  layoutId="navHover"
                  className="absolute inset-0 bg-foreground/8 rounded-[5px] z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA with premium shine sweep and glow hover, no scale */}
        <div className="hidden md:flex items-center">
          <Button
            variant="primary"
            className="px-6 py-2.5 text-xs tracking-wider relative overflow-hidden group shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 rounded-md"
          >
            <span className="relative z-10">Contact</span>
            {/* Hover gradient glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
            {/* Shine sweep animation */}
            <span className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-25 group-hover:left-[100%] transition-all duration-1000 ease-out z-0" />
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-foreground/80 hover:text-foreground p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay with AnimatePresence for smooth transitions */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full border-b border-border/40 bg-background/95 backdrop-blur-lg md:hidden overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-foreground font-sans text-base font-medium py-1 transition-colors duration-150"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border/40">
                <Button
                  variant="primary"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 text-sm tracking-wider"
                >
                  Contact
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
