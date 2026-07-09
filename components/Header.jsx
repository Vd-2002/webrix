"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Cpu, Sparkles, Megaphone, Smartphone, ChevronDown } from "lucide-react";
import Button from "./ui/Button";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setMobileServicesOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const handleScrollDetect = () => {
      const scrollPosition = window.scrollY;
      
      // If close to top, active is Home (empty hash)
      if (scrollPosition < 100) {
        setActiveHash("");
        return;
      }

      const sections = ["services", "industries", "projects"];
      let currentSection = "";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            currentSection = `#${sectionId}`;
            break;
          }
        }
      }

      setActiveHash(currentSection);
    };

    // Check initial hash on load
    if (window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        setActiveHash(hash);
      }, 0);
    } else {
      handleScrollDetect();
    }

    window.addEventListener("scroll", handleScrollDetect, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollDetect);
  }, [pathname]);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  const submenuItems = [
    {
      name: "Website Development",
      desc: "Fast Next.js interfaces",
      href: "/services/website-development",
      icon: Monitor
    },
    {
      name: "Custom Software",
      desc: "Secure ERP & SaaS portals",
      href: "/services/custom-software-development",
      icon: Cpu
    },
    {
      name: "Mobile App Development",
      desc: "Cross-platform mobile apps",
      href: "/services/mobile-app-development",
      icon: Smartphone
    },
    {
      name: "AI & Automation",
      desc: "Serverless LLM pipelines",
      href: "/services/ai-automation",
      icon: Sparkles
    },
    {
      name: "Digital Marketing",
      desc: "Analytics & sitemaps audit",
      href: "/services/digital-marketing",
      icon: Megaphone
    }
  ];

  const isItemActive = (item) => {
    if (pathname.startsWith("/services")) {
      return item.href === "/services";
    }
    if (pathname.startsWith("/about")) {
      return item.href === "/about";
    }
    if (pathname.startsWith("/industries")) {
      return item.href === "/industries";
    }
    if (pathname.startsWith("/portfolio")) {
      return item.href === "/portfolio";
    }
    if (pathname === "/") {
      if (item.href === "/") {
        return activeHash === "";
      }
      return item.href === `/${activeHash}`;
    }
    return false;
  };

  return (
    <motion.header
      initial={false}
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
          <Link href="/" className="flex items-center">
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
                src="/logo2.png"
                alt="Webrix Logo"
                width={130}
                height={38}
                className="object-contain max-h-[38px] w-auto"
                priority
              />
            </motion.div>
          </Link>
        </div>

        {/* Desktop Navigation with sliding background pill */}
        <nav 
          className="hidden md:flex items-center gap-1.5 text-[14px] font-sans font-medium tracking-wide"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {menuItems.map((item, index) => {
            const isActive = isItemActive(item);
            const isServices = item.name === "Services";
            
            if (isServices) {
              return (
                <div key={item.name} className="relative group py-2">
                  <Link
                    href={item.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    className={`relative px-4 py-2 transition-colors duration-300 rounded-md ${
                      isActive ? "text-[#60A5FA] font-semibold" : "text-foreground/75 hover:text-foreground"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {hoveredIndex === index && (
                      <motion.span
                        layoutId="navHover"
                        className="absolute inset-0 bg-foreground/8 rounded-md z-0"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="navActiveDot"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#60A5FA] shadow-sm shadow-[#60A5FA]/80 z-20"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}
                  </Link>

                  {/* Submenu Dropdown Container */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[280px] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                    <div className="border border-white/10 bg-[#070712]/95 backdrop-blur-xl rounded-2xl p-3 shadow-2xl space-y-1">
                      {submenuItems.map((sub) => {
                        const SubIcon = sub.icon;
                        return (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="flex items-center gap-3 px-3.5 py-3 rounded-xl hover:bg-white/[0.04] transition-colors group/sub text-left text-xs text-white/60 hover:text-white"
                          >
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/5 bg-white/[0.01] group-hover/sub:border-white/10 group-hover/sub:bg-white/[0.03] transition-colors shrink-0 text-white/60 group-hover/sub:text-[#60A5FA]">
                              <SubIcon className="w-4 h-4" />
                            </div>
                            <div className="space-y-0.5">
                              <div className="font-semibold text-white tracking-tight leading-tight">{sub.name}</div>
                              <div className="text-[9px] text-white/40 leading-none">{sub.desc}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`relative px-4 py-2 transition-colors duration-300 rounded-md ${
                  isActive ? "text-[#60A5FA] font-semibold" : "text-foreground/75 hover:text-foreground"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="navHover"
                    className="absolute inset-0 bg-foreground/8 rounded-md z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                {isActive && (
                  <motion.span
                    layoutId="navActiveDot"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#60A5FA] shadow-sm shadow-[#60A5FA]/80 z-20"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA with premium shine sweep and glow hover, no scale */}
        <div className="hidden md:flex items-center">
          <Link href="/contact">
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
          </Link>
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

      {/* Mobile Menu Overlay - animated */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 w-full border-b border-border/40 bg-background/95 backdrop-blur-lg md:hidden overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 space-y-4">
              {menuItems.map((item) => {
                const isActive = isItemActive(item);
                const isServices = item.name === "Services";
                
                if (isServices) {
                  return (
                    <div key={item.name} className="flex flex-col gap-2">
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`w-full text-left font-sans text-base font-medium py-1 transition-colors duration-150 flex items-center justify-between cursor-pointer ${
                          isActive 
                            ? "text-[#60A5FA] font-semibold border-l-2 border-[#60A5FA] pl-3 pr-2" 
                            : "text-foreground/80 hover:text-foreground pl-3 pr-2"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-300 ${
                            mobileServicesOpen ? "rotate-180 text-[#60A5FA]" : "text-foreground/50"
                          }`}
                        />
                      </button>
                      
                      {/* Mobile Submenu Items - animated */}
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col gap-3 pl-6 border-l border-white/5 mt-1.5 overflow-hidden"
                          >
                            {submenuItems.map((sub) => {
                              const SubIcon = sub.icon;
                              return (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center gap-3 py-1 text-sm text-white/50 hover:text-white transition-colors"
                                >
                                  <SubIcon className="w-4 h-4 text-[#60A5FA]" />
                                  <span>{sub.name}</span>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-sans text-base font-medium py-1 transition-colors duration-150 ${
                      isActive ? "text-[#60A5FA] font-semibold border-l-2 border-[#60A5FA] pl-3" : "text-foreground/80 hover:text-foreground pl-3"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-border/40">
                <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full block">
                  <Button
                    variant="primary"
                    className="w-full py-3 text-sm tracking-wider"
                  >
                    Contact
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}
