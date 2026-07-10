"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Cpu, Sparkles, Megaphone, Smartphone, Terminal, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function DetailedServices() {
  const [selectedService, setSelectedService] = useState("web-dev");

  const servicesData = {
    "web-dev": {
      id: "website-development",
      title: "Website Development",
      icon: Monitor,
      color: "#60A5FA",
      subHeading: "Custom Website Development & Fast E-Commerce Systems",
      desc: "We build fast, custom websites from scratch. We skip website builders and heavy templates. Every page is built to load instantly, work on any mobile device, and help you get more customers.",
      features: [
        "Fast Loading Custom Websites",
        "Clean Styles & Layouts",
        "Fast E-Commerce Shop Setups",
        "Multi-language Website Support",
        "Global Hosting & Server Tuning"
      ],
      mockupType: "code",
      mockupTitle: "next-edge-routing.config.js",
      mockupContent: `// Webrix Edge Middleware Translation Router
export default async function middleware(req) {
  const { pathname, search } = req.nextUrl;
  const locale = getLocale(req); // Reads cookies/headers
  
  if (isStaticAsset(pathname)) return;
  
  // Rewrites connection to serverless edge page instance
  return NextResponse.rewrite(
    new URL(\`/\${locale}\${pathname}\${search}\`, req.url)
  );
}`
    },
    "custom-software": {
      id: "custom-software-development",
      title: "Custom Software Development",
      icon: Cpu,
      color: "#A78BFA",
      subHeading: "Secure Databases, Custom Business Software, & Admin Tools",
      desc: "We build systems tailored to your exact business needs, from employee portals to client dashboards. We focus on database speeds, data protection, and secure logins.",
      features: [
        "Secure Custom Databases",
        "GDPR & HIPAA Compliant Data",
        "Secure API Connections",
        "Automated Invoicing & Payments",
        "Scalable Customer Portals"
      ],
      mockupType: "schema",
      mockupTitle: "postgres-schema-pooling.sql",
      mockupContent: `-- Postgres Connection Pooling relational schema
CREATE TABLE IF NOT EXISTS tenants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
  email VARCHAR(255) UNIQUE NOT NULL,
  encrypted_pass VARCHAR(512) NOT NULL,
  role VARCHAR(64) DEFAULT 'read-only'
);`
    },
    "mobile-app": {
      id: "mobile-app-development",
      title: "Mobile App Development",
      icon: Smartphone,
      color: "#34D399",
      subHeading: "Custom Mobile Applications for iOS & Android",
      desc: "We build fast mobile apps for iPhone and Android. We package app code, secure local data, and design smooth interfaces to ensure great performance on any device.",
      features: [
        "iOS & Android App Store Ready",
        "Live Maps & Location Tracking",
        "Push Notification Setups",
        "Offline Storage & Cache",
        "Face ID & Touch ID Logins"
      ],
      mockupType: "code",
      mockupTitle: "App-native-navigation.tsx",
      mockupContent: `// React Native Navigation Bridge Routing
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
const Stack = createNativeStackNavigator();
 
export default function NativeAppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="MapTracking" component={MapTrackingScreen} />
    </Stack.Navigator>
  );
}`
    },
    "ai-automation": {
      id: "ai-automation",
      title: "AI & Workflow Automation",
      icon: Sparkles,
      color: "#F59E0B",
      subHeading: "Smart AI Automations & Custom Chat Bots",
      desc: "Our automations handle the heavy daily tasks. We connect smart AI models, store customer queries securely, and trigger automatic messages across Slack, email, and WhatsApp.",
      features: [
        "Smart AI Search Tools",
        "Automated Customer Qualification",
        "Custom WhatsApp Bots",
        "Automatic Event Alerts",
        "Automated PDF Reading & Data Entry"
      ],
      mockupType: "json",
      mockupTitle: "agent-webhook-qualify.json",
      mockupContent: `{
  "agent_id": "qualify-lead-bot-04",
  "trigger": "webhook_form_submitted",
  "actions": [
    {
      "step": 1,
      "tool": "openai_embedding_match",
      "vector_store": "pgvector_leads",
      "score_threshold": 0.82
    },
    {
      "step": 2,
      "tool": "whatsapp_dispatch",
      "template": "qualify_followup_lead"
    }
  ]
}`
    },
    "marketing": {
      id: "digital-marketing",
      title: "Digital Marketing & SEO Audit",
      icon: Megaphone,
      color: "#F472B6",
      subHeading: "SEO Audits, Search Engine Visibility, & Traffic Growth",
      desc: "We improve your marketing with clean code. We clean up website links, structure sitemaps, and build fast landing pages to lower ad costs and boost organic traffic.",
      features: [
        "Core Web Speed & Link Auditing",
        "Fast Loading Landing Pages",
        "Google & Facebook Ad Tracking",
        "Automated SEO Traffic Reports",
        "Structured Data for Search Engines"
      ],
      mockupType: "stats",
      mockupTitle: "campaign-performance-board",
      mockupContent: `[SEO CORE WEB VITALS REPORT]
Uptime Tracker: 99.99% OK
LCP Score:      0.8s (Excellent)
CLS Index:      0.01 (Excellent)
FID Latency:    11ms (Excellent)

[CONVERSION METRICS]
Landing Page Load:   Instant
Avg. Click-Through:  12.4% (+4.2% Boost)
Organic Visibility:  +140% YoY`
    }
  };

  const tabs = [
    { id: "web-dev", label: "Website Dev", icon: Monitor },
    { id: "custom-software", label: "Custom Software", icon: Cpu },
    { id: "mobile-app", label: "Mobile Apps", icon: Smartphone },
    { id: "ai-automation", label: "AI & Automation", icon: Sparkles },
    { id: "marketing", label: "Digital Marketing", icon: Megaphone }
  ];

  const current = servicesData[selectedService];

  return (
    <section id="detailed-services" className="relative z-10 scroll-mt-24 w-full space-y-12">
      {/* Section Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
          Bespoke{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#34D399]">
            Specifications
          </span>
        </h2>
        <p className="text-sm text-white/50 font-sans max-w-xl mx-auto">
          Click through the categories below to see our services, features, and mockups.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Sidebar Tab Selectors */}
        <div className="lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none w-full">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isTabActive = selectedService === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedService(tab.id)}
                className={`flex items-center gap-3 px-5 py-4 rounded-2xl border text-sm font-semibold font-display transition-all duration-300 shrink-0 text-left w-auto lg:w-full cursor-pointer ${
                  isTabActive
                    ? "border-[#60A5FA] bg-[#60A5FA]/10 text-white shadow-lg shadow-[#60A5FA]/10"
                    : "border-white/5 bg-[#070712]/30 text-white/50 hover:text-white hover:border-white/10"
                }`}
              >
                <Icon className="w-4.5 h-4.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Side: Detailed Panel Content */}
        <div className="lg:col-span-9 w-full min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-12 gap-8 items-stretch border border-white/10 bg-[#050510]/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl h-full"
            >
              {/* Detailed copy (Left Column) */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase" style={{ color: current.color }}>
                      SPECIFICATIONS
                    </span>
                    <h3 className="text-2xl font-bold font-display text-white tracking-tight">
                      {current.title}
                    </h3>
                  </div>
                  <h4 className="text-sm font-semibold font-sans text-white/80 leading-relaxed">
                    {current.subHeading}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-sans font-light">
                    {current.desc}
                  </p>
                </div>

                {/* Capabilities list */}
                <div className="space-y-2.5 pt-4 border-t border-white/5">
                  <span className="text-[10px] font-mono font-bold text-white/30 tracking-widest uppercase block">
                    Core Capabilities Include
                  </span>
                  <div className="space-y-2">
                    {current.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-white/70 font-sans">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: current.color }} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Link to detail page */}
                <div className="pt-6">
                  <Link href={`/services/${current.id}`}>
                    <Button
                      variant="primary"
                      className="px-6 py-2.5 text-xs font-semibold font-display tracking-wider uppercase rounded-xl shadow-md transition-all duration-300"
                      style={{
                        backgroundColor: current.color,
                        color: "#03030c",
                        shadowColor: current.color
                      }}
                    >
                      View Integration Details
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Console Mockup (Right Column) */}
              <div className="md:col-span-5 flex flex-col justify-center">
                <div className="w-full bg-[#030308] border border-white/10 rounded-2xl p-4 font-mono text-[9px] text-white/50 shadow-2xl h-full flex flex-col justify-between min-h-[300px]">
                  {/* Header bar */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                      <span className="text-[8px] text-white/30 ml-2">{current.mockupTitle}</span>
                    </div>
                    <Terminal className="w-3.5 h-3.5 text-white/30" />
                  </div>

                  {/* Mockup content */}
                  <pre className="flex-1 overflow-x-auto whitespace-pre leading-relaxed text-white/70 scrollbar-none font-mono py-1 select-all">
                    {current.mockupContent}
                  </pre>

                  {/* Footer status */}
                  <div className="border-t border-white/5 pt-2 mt-3 flex items-center justify-between text-[8px] text-white/30">
                    <span>CHARSET: UTF-8</span>
                    <span style={{ color: current.color }}>OK - SECURE COMPILING</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
