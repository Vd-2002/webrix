"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FolderKanban, 
  Mail, 
  Layers, 
  Activity, 
  Database,
  ArrowRight,
  Plus,
  MessageSquare,
  Clock
} from "lucide-react";
import { motion } from "framer-motion";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    projectsCount: 0,
    messagesCount: 0,
    servicesCount: 5,
    dbStatus: "Connecting..."
  });
  
  const [recentMessages, setRecentMessages] = useState([]);
  const [recentProjects, setRecentProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboardData() {
      try {
        const [projRes, msgRes] = await Promise.all([
          fetch("/api/projects"),
          fetch("/api/messages")
        ]);

        const projData = await projRes.json();
        const msgData = await msgRes.json();

        const pCount = projData.success ? projData.projects.length : 0;
        const mCount = msgData.success ? msgData.messages.length : 0;

        setStats({
          projectsCount: pCount,
          messagesCount: mCount,
          servicesCount: 5,
          dbStatus: projData.success ? "Connected" : "Offline"
        });

        if (projData.success) {
          setRecentProjects(projData.projects.slice(0, 3));
        }

        if (msgData.success) {
          setRecentMessages(msgData.messages.slice(0, 3));
        }
      } catch (err) {
        console.error("Dashboard load error:", err);
        setStats(prev => ({ ...prev, dbStatus: "Connection Error" }));
      } finally {
        setLoading(false);
      }
    }

    loadDashboardData();
  }, []);

  const statsCards = [
    {
      label: "Total Projects",
      value: stats.projectsCount,
      desc: "CMS-managed projects in portfolio",
      icon: FolderKanban,
      color: "#60A5FA",
      href: "/admin/projects"
    },
    {
      label: "Contact Submissions",
      value: stats.messagesCount,
      desc: "Incoming form project scope logs",
      icon: Mail,
      color: "#A78BFA",
      href: "/admin/messages"
    },
    {
      label: "Active Services",
      value: stats.servicesCount,
      desc: "Web, software, mobile, marketing, AI",
      icon: Layers,
      color: "#34D399",
      href: "/services"
    },
    {
      label: "Database Node",
      value: stats.dbStatus,
      desc: "MongoDB Atlas system status",
      icon: Database,
      color: stats.dbStatus === "Connected" ? "#10B981" : "#EF4444",
      href: "#"
    }
  ];

  return (
    <div className="space-y-10 relative z-10">
      
      {/* Page Title */}
      <div className="space-y-1.5 text-left">
        <h1 className="text-3xl font-extrabold tracking-tight text-white font-display">
          System Dashboard
        </h1>
        <p className="text-xs font-mono text-white/40 uppercase tracking-widest">
          Console Monitoring & Integrations Overview
        </p>
      </div>

      {/* Grid of Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card, idx) => {
          const CardIcon = card.icon;
          return (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="border border-white/10 bg-[#070712]/40 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative group"
            >
              {/* Highlight Aura */}
              <div 
                className="absolute -right-16 -top-16 w-36 h-36 rounded-full opacity-[0.03] group-hover:opacity-[0.05] blur-[50px] transition-all pointer-events-none"
                style={{ background: card.color }}
              />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest font-bold">
                    {card.label}
                  </span>
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/5 bg-white/[0.01]"
                    style={{ color: card.color }}
                  >
                    <CardIcon className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="text-3xl font-extrabold font-display text-white">
                  {loading ? (
                    <span className="text-white/20 animate-pulse">...</span>
                  ) : (
                    card.value
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 mt-6 flex items-center justify-between text-[10px] text-white/40">
                <span>{card.desc}</span>
                {card.href !== "#" && (
                  <Link href={card.href} className="hover:text-white flex items-center gap-1">
                    Manage <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Grid: Messages log & Projects overview */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left: Recent Messages */}
        <div className="lg:col-span-7 border border-white/10 bg-[#070712]/40 backdrop-blur-md rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold font-display text-white tracking-tight flex items-center gap-2">
                <MessageSquare className="w-4.5 h-4.5 text-[#A78BFA]" />
                Recent Scoping Inquiries
              </h2>
              <Link href="/admin/messages" className="text-[10px] font-mono text-[#A78BFA] hover:text-white uppercase tracking-wider">
                View All
              </Link>
            </div>

            {loading ? (
              <div className="space-y-3 py-6">
                {[1, 2].map(n => (
                  <div key={n} className="h-14 rounded-xl bg-white/[0.01] border border-white/5 animate-pulse" />
                ))}
              </div>
            ) : recentMessages.length === 0 ? (
              <div className="py-12 text-center text-xs text-white/30 font-mono">
                No scoping inquiries logged.
              </div>
            ) : (
              <div className="space-y-3.5">
                {recentMessages.map((msg) => (
                  <div 
                    key={msg._id}
                    className="border border-white/5 bg-[#050510]/60 p-4 rounded-xl hover:border-white/10 transition-colors flex justify-between items-start gap-4"
                  >
                    <div className="space-y-1.5 text-left flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-semibold text-white truncate max-w-[120px]">{msg.name}</span>
                        <span className="text-[8px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[#A78BFA]/20 bg-[#A78BFA]/5 text-[#A78BFA]">
                          {msg.category}
                        </span>
                      </div>
                      <p className="text-[10px] text-white/50 line-clamp-1 font-sans">{msg.message}</p>
                    </div>

                    <div className="text-[9px] font-mono text-white/30 flex items-center gap-1 shrink-0 mt-0.5">
                      <Clock className="w-3 h-3" />
                      <span>{new Date(msg.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-white/5 mt-6">
            <Link href="/admin/messages" className="w-full h-10 border border-white/10 hover:border-white/20 hover:bg-white/[0.02] rounded-xl flex items-center justify-center gap-2 text-xs font-semibold font-display tracking-wider uppercase text-white transition-all cursor-pointer">
              Open Messages Queue
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right: Recent Projects */}
        <div className="lg:col-span-5 border border-white/10 bg-[#070712]/40 backdrop-blur-md rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold font-display text-white tracking-tight flex items-center gap-2">
                <FolderKanban className="w-4.5 h-4.5 text-[#60A5FA]" />
                Recent Projects
              </h2>
              <Link href="/admin/projects" className="text-[10px] font-mono text-[#60A5FA] hover:text-white uppercase tracking-wider">
                Manage
              </Link>
            </div>

            {loading ? (
              <div className="space-y-3 py-6">
                {[1, 2].map(n => (
                  <div key={n} className="h-12 rounded-xl bg-white/[0.01] border border-white/5 animate-pulse" />
                ))}
              </div>
            ) : recentProjects.length === 0 ? (
              <div className="py-12 text-center text-xs text-white/30 font-mono">
                No projects found in database.
              </div>
            ) : (
              <div className="space-y-3">
                {recentProjects.map((proj) => (
                  <div 
                    key={proj.id}
                    className="border border-white/5 bg-[#050510]/60 p-3.5 rounded-xl flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3 text-left min-w-0">
                      <span 
                        className="w-1.5 h-8 shrink-0 rounded"
                        style={{ backgroundColor: proj.color || "#60A5FA" }}
                      />
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-white truncate">{proj.name}</div>
                        <div className="text-[9px] font-mono text-white/40">{proj.category}</div>
                      </div>
                    </div>
                    
                    <span className="text-[8px] font-mono font-bold text-[#34D399] tracking-wider shrink-0 bg-[#34D399]/5 border border-[#34D399]/15 px-2 py-0.5 rounded">
                      {proj.metric.split(" ")[0]}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-white/5 mt-6 flex gap-3">
            <Link href="/admin/projects" className="flex-1 h-10 border border-white/10 hover:border-white/20 hover:bg-white/[0.02] rounded-xl flex items-center justify-center gap-2 text-xs font-semibold font-display tracking-wider uppercase text-white transition-all cursor-pointer">
              List Projects
            </Link>
            <Link href="/admin/projects?action=new" className="h-10 px-4 bg-[#60A5FA] text-black hover:bg-[#60A5FA]/90 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold font-display tracking-wider uppercase transition-all cursor-pointer">
              <Plus className="w-4 h-4 text-black" />
              <span>Add</span>
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
