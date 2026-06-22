import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/homepage/CTA";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";

const SERVICES_DETAILS = {
  "website-development": {
    title: "Website Development",
    tagline: "Ultra-fast headless interfaces engineered for high conversion rates.",
    themeColor: "#60A5FA",
    stats: [
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Conversion Lift", value: "+24%" },
      { label: "Average First Load", value: "0.4s" }
    ],
    overview: "We engineer custom web assets optimized for near-instant rendering. By removing bloat, visual page builders, and massive runtime scripts, we ensure your product loads instantly across any device, anywhere in the world.",
    features: [
      "Headless Frontend Architectures (Next.js App Router & SSR)",
      "Native Utility Stylings (Tailwind CSS v4)",
      "Headless eCommerce Integrations (Custom Shopify Storefronts)",
      "Global CDN Routing, Edge Caching, & Serverless Delivery",
      "Dynamic Multi-lingual Routing Systems & Localised Paths",
      "Structured SEO Schema Markups & Core Web Vitals Optimization"
    ],
    architecture: {
      title: "Headless Content & eCommerce Architecture Blueprint",
      steps: [
        { title: "Edge CDN Gateway", desc: "User request arrives at the nearest global CDN edge server node." },
        { title: "Edge Rendering Middleware", desc: "Serverless middleware parses headers, locale parameters, and user sessions instantly." },
        { title: "Static Pre-rendering pass", desc: "Page loads static HTML shells + lazy imports only the required scripts." },
        { title: "Dynamic API Hydration", desc: "React hydrates interactive sections (cart, search) via backend microservice routes." }
      ]
    },
    faqs: [
      { q: "Why choose custom headless web builds over WordPress or Webflow?", a: "Headless builds separate your content backend from your frontend presentation. This removes bloated plugins and template stylesheets, resulting in near-instant load speeds, superior security, and unlimited design flexibility." },
      { q: "How do you handle search engine optimization (SEO)?", a: "Every page is pre-rendered statically with structured JSON-LD schemas, customized meta titles, responsive images, and semantic HTML to guarantee crawlability and perfect Lighthouse scores." }
    ]
  },
  "custom-software-development": {
    title: "Custom Software Development",
    tagline: "Dedicated business frameworks and compliant relational database models.",
    themeColor: "#A78BFA",
    stats: [
      { label: "SLA Uptime Guarantee", value: "99.99%" },
      { label: "API Query Latency", value: "11ms" },
      { label: "Manual Hours Freed", value: "40+/wk" }
    ],
    overview: "We design and develop custom database-driven applications matching your exact business workflows. Whether you need a secure CRM, a custom HRMS portal, or a multi-tenant SaaS integration, we write secure, modular backend modules that scale.",
    features: [
      "Relational & Time-Series Database Schema Design (PostgreSQL, InfluxDB)",
      "Secure Multi-Role User Cryptography & JWT Token Session Pools",
      "GraphQL & REST API Gateways with Automatic Query Indexing",
      "Multi-Tenant SaaS Portal Layouts with Secure Org Separation",
      "Custom Enterprise ERP Logistics & Inventory Tracking Systems",
      "ISO & GDPR Compliance Architectures with Active Audit Logging"
    ],
    architecture: {
      title: "Secure Relational Multi-Tenant Architecture Blueprint",
      steps: [
        { title: "API Gateway Firewall", desc: "Validates incoming JWT session tokens and filters SQL injection queries." },
        { title: "Relational Query Router", desc: "Directs tenant requests to isolated logical schemas to prevent leakages." },
        { title: "Connection Pool Engine", desc: "Maintains active connection loops to PostgreSQL, minimizing handshake delays." },
        { title: "Audit Trail Logger", desc: "Automatically writes database mutational states into encrypted logs tables." }
      ]
    },
    faqs: [
      { q: "How do you secure tenant data in multi-tenant portals?", a: "We implement Row-Level Security (RLS) policies at the PostgreSQL level alongside isolated tenant schemas, ensuring that no user can run queries crossing tenant boundaries." },
      { q: "Can this system integrate with our existing database storage?", a: "Yes, we construct secure database wrapper APIs and sync scripts to connect and ingest data safely from your legacy systems." }
    ]
  },
  "ai-automation": {
    title: "AI & Workflow Automation",
    tagline: "Serverless LLM agents and automatic webhook pipelines that handle tasks 24/7.",
    themeColor: "#34D399",
    stats: [
      { label: "Uptime Sync Rate", value: "99.9%" },
      { label: "Task Processing Speed", value: "3.2x" },
      { label: "Data Accuracy", value: "99.8%" }
    ],
    overview: "Our automation grids connect your business services to intelligent LLM nodes. We configure serverless workflows that qualification-check incoming forms, process raw PDFs, and sync alerts directly to Slack, WhatsApp, and email.",
    features: [
      "Context Embeddings Syncing & Vector Databases (pgvector, Pinecone)",
      "Serverless Intelligent LLM Agents (OpenAI, Claude, custom models)",
      "Automated Lead Ingestion, Parsing, & Follow-up pipelines",
      "Dedicated WhatsApp Business & Slack Bot Integrations",
      "Trigger-Based Multi-Service Webhook Sync Orchestration",
      "Automatic PDF Invoice Parsing & ERP Database Insertion"
    ],
    architecture: {
      title: "AI Ingestion & Vector Ingress Architecture Blueprint",
      steps: [
        { title: "Webhook Ingestion Ingress", desc: "Receives raw customer actions or documents from active webhooks." },
        { title: "Vector Embedding Pass", desc: "Transforms text into numeric vectors using OpenAI embeddings models." },
        { title: "Similarity Match Index", desc: "Searches pgvector database to fetch context matching the user query." },
        { title: "LLM Completion Dispatch", desc: "Sends context to Claude/OpenAI and triggers follow-up WhatsApp notifications." }
      ]
    },
    faqs: [
      { q: "Will our data be used to train public LLM models?", a: "No. We routing all data through private enterprise APIs (OpenAI/Anthropic APIs) that guarantee your data is never used for model training under strict SLAs." },
      { q: "How do you prevent loops and runaway webhook charges?", a: "We build circuit-breaker loops and payload validation layers into our webhook triggers, ensuring workflows stop immediately if anomalies are flagged." }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing & SEO Audit",
    tagline: "Low-latency landing pages, analytics pipelines, and search engine visibility.",
    themeColor: "#F472B6",
    stats: [
      { label: "Organic Search Lift", value: "+140%" },
      { label: "Google PPC Spend Cut", value: "-30%" },
      { label: "Avg. Click-Through", value: "12.4%" }
    ],
    overview: "We optimize site content, headers, and performance factors from an engineering perspective. We build campaign landing pages that load instantly, lowering Google Ads bounce rates and boosting PPC conversion scores.",
    features: [
      "Core Web Vitals Site Performance & Layout Shift Audits",
      "Instant-Load Static Campaign Landing Pages (Next.js)",
      "Conversion Tracking Infrastructure (Google Tag Manager, Meta Pixel)",
      "Automated Competitor Link & Organic Keyword Trackers",
      "Structured SEO Markup Injection & Sitemaps Optimization",
      "Real-Time Marketing Metrics & ROI Logging Dashboards"
    ],
    architecture: {
      title: "Marketing Data & Tracking Architecture Blueprint",
      steps: [
        { title: "Campaign Landing Page", desc: "Next.js statically renders pages in under 0.5s to minimize click-drop rates." },
        { title: "Client Event Tracker", desc: "Tracks scroll depths, button triggers, and submits without blocking main render threads." },
        { title: "Server-Side Tagging Router", desc: "Forwards event tokens directly to Google/Meta APIs, bypassing ad blockers." },
        { title: "ROI Dashboard Collector", desc: "Gathers campaign metrics into a clean Postgres dashboard for ROI audits." }
      ]
    },
    faqs: [
      { q: "Why does landing page speed affect Google Ads campaign cost?", a: "Google rewards fast-loading, highly relevant landing pages with high Quality Scores. A higher Quality Score reduces your cost-per-click (CPC) and improves your ad placements." },
      { q: "Do you configure Google Tag Manager and conversion events?", a: "Yes, we handle the full tracking integration, mapping exact custom events (submits, clicks, video watches) directly into your analytics dashboard." }
    ]
  }
};

export async function generateStaticParams() {
  return [
    { id: "website-development" },
    { id: "custom-software-development" },
    { id: "ai-automation" },
    { id: "digital-marketing" }
  ];
}

export default async function ServiceDetailPage({ params }) {
  const { id } = await params;
  const service = SERVICES_DETAILS[id];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 flex flex-col justify-between">
      {/* Header component */}
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 pt-[100px] pb-[100px] space-y-[100px] flex-1 w-full">
        {/* Dynamic layout for current service */}
        <ServiceDetailLayout data={service} />

        {/* Call to Action control panel */}
        <CTA />
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
