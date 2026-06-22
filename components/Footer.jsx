"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Send,
  CheckCircle2
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const socialLinks = [
    { 
      name: "GitHub", 
      href: "https://github.com", 
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com", 
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    { 
      name: "Twitter", 
      href: "https://twitter.com", 
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    { 
      name: "Discord", 
      href: "https://discord.com", 
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0-.084.028c-.462-.63-.874-1.295-1.226-1.994a.076.076 0 0 0-.041-.106 13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
        </svg>
      )
    }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Industries", href: "/#industries" },
    { name: "Our Work", href: "/#projects" },
  ];

  const servicesLinks = [
    { name: "Website Development", href: "/#services" },
    { name: "Custom Software", href: "/#services" },
    { name: "AI Automation", href: "/#services" },
    { name: "Digital Marketing", href: "/#services" },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#03030c] pt-20 pb-10 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute -left-48 -bottom-48 w-96 h-96 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute -right-48 -top-48 w-96 h-96 rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      {/* Aligned Max Width Container */}
      <div className="max-w-[1200px] mx-auto px-6 space-y-16">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="lg:col-span-2 space-y-6">
            <span className="font-display font-extrabold text-xl tracking-tight text-white block">
              About Webrix
            </span>
            <p className="text-sm text-white/50 leading-relaxed font-sans max-w-sm">
              We design and engineer high-performance web systems, custom automation pipelines, and intelligence tools built to scale your business operations.
            </p>
            {/* Social Handles with custom hover glow */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.02] text-white/60 hover:text-white hover:border-white/20 transition-colors shadow-sm"
                  aria-label={social.name}
                >
                  {social.svg}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold tracking-wider text-white uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-white/50 hover:text-[#60A5FA] transition-colors duration-200 font-sans block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold tracking-wider text-white uppercase">
              Services
            </h4>
            <ul className="space-y-2.5">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-white/50 hover:text-[#A78BFA] transition-colors duration-200 font-sans block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold tracking-wider text-white uppercase">
              Contact Info
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-sm text-white/50 font-sans">
                <Mail className="w-4 h-4 text-[#34D399] mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@webrix.co" className="hover:text-white transition-colors break-all">
                  hello@webrix.co
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/50 font-sans">
                <Phone className="w-4 h-4 text-[#60A5FA] mt-0.5 flex-shrink-0" />
                <a href="tel:+15550192834" className="hover:text-white transition-colors">
                  +1 (555) 019-2834
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/50 font-sans">
                <MapPin className="w-4 h-4 text-[#A78BFA] mt-0.5 flex-shrink-0" />
                <span>100 Pine Street,<br />San Francisco, CA 94111</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Newsletter Section */}
        <div className="border-t border-b border-white/5 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left max-w-md">
            <h4 className="font-display text-base font-bold text-white">
              Subscribe to our developer newsletter
            </h4>
            <p className="text-xs text-white/50 font-sans">
              Get the latest updates on performance engineering, web frameworks, and custom AI tooling.
            </p>
          </div>
          
          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row items-stretch gap-3 max-w-md">
            <div className="relative flex-1 min-w-[260px]">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                suppressHydrationWarning={true}
                className="w-full h-11 px-4 rounded-xl border border-white/10 bg-white/[0.02] text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all font-sans"
              />
              {submitted && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold bg-[#03030c] px-2 py-0.5 rounded border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Subscribed!</span>
                </div>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="h-11 px-5 rounded-xl bg-white text-black hover:bg-white/90 disabled:opacity-50 text-xs font-semibold font-display tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isSubmitting ? "Syncing..." : "Subscribe"}</span>
              {!isSubmitting && <Send className="w-3 h-3" />}
            </button>
          </form>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30 font-sans">
          <p suppressHydrationWarning={true}>
            &copy; {new Date().getFullYear()} Webrix Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
