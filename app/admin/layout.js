"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  Mail, 
  FolderKanban, 
  LogOut, 
  Menu, 
  X, 
  ChevronRight,
  ShieldCheck
} from "lucide-react";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  // If we are on the login page, render children directly without sidebar
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const menuItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Contact Messages", href: "/admin/messages", icon: Mail },
    { name: "Projects CRUD", href: "/admin/projects", icon: FolderKanban }
  ];

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });
      const data = await response.json();
      if (data.success) {
        router.push("/admin/login");
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const SidebarContent = () => (
    <div className="h-full flex flex-col justify-between p-6 bg-[#03030c] text-white">
      <div className="space-y-8">
        {/* Brand Header */}
        <div className="flex items-center gap-3 pb-6 border-b border-white/5">
          <Link href="/" className="block">
            <Image
              src="/logo2.png"
              alt="Webrix"
              width={110}
              height={32}
              className="object-contain"
            />
          </Link>
          <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/5 text-emerald-400">
            Console
          </span>
        </div>

        {/* Navigation links */}
        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold font-display tracking-wide transition-all ${
                  isActive
                    ? "bg-[#60A5FA]/10 border border-[#60A5FA]/20 text-white"
                    : "border border-transparent text-white/50 hover:text-white hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4.5 h-4.5 ${isActive ? "text-[#60A5FA]" : "text-white/40"}`} />
                  <span>{item.name}</span>
                </div>
                {isActive && <ChevronRight className="w-3.5 h-3.5 text-[#60A5FA]" />}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer / Logout */}
      <div className="space-y-4 pt-6 border-t border-white/5">
        <div className="flex items-center gap-2 px-2 text-[10px] font-mono text-white/40">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>ADMIN SESSION SECURE</span>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 hover:border-red-500/20 hover:bg-red-500/5 text-xs font-semibold font-display tracking-wide text-white/60 hover:text-red-400 transition-all cursor-pointer"
        >
          <LogOut className="w-4.5 h-4.5 text-white/40 group-hover:text-red-400" />
          <span>Logout Session</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row font-sans">
      
      {/* Mobile Top Header Navigation */}
      <header className="lg:hidden flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#03030c]/90 backdrop-blur-md sticky top-0 z-40">
        <Image
          src="/logo2.png"
          alt="Webrix"
          width={100}
          height={30}
          className="object-contain"
        />
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-white/80 hover:text-white"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Desktop Sidebar drawer casing */}
      <aside className="hidden lg:block w-[260px] border-r border-white/10 shrink-0 sticky top-0 h-screen z-30">
        <SidebarContent />
      </aside>

      {/* Mobile Drawer Slide-out Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-[260px] z-50 lg:hidden shadow-2xl"
          >
            <SidebarContent />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer backdrop mask */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Main Content Pane */}
      <main className="flex-1 min-h-[calc(100vh-68px)] lg:min-h-screen relative p-6 sm:p-10 lg:p-12 overflow-x-hidden">
        {/* Glow Details */}
        <div className="absolute -left-48 -bottom-48 w-96 h-96 rounded-full bg-blue-500/[0.02] blur-[100px] pointer-events-none" />
        <div className="absolute -right-48 -top-48 w-96 h-96 rounded-full bg-purple-500/[0.02] blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        {children}
      </main>

    </div>
  );
}
