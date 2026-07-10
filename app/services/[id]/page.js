import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/homepage/CTA";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";

const SERVICES_DETAILS = {
  "website-development": {
    title: "Website Development",
    tagline: "Fast custom websites built to load quickly and get more customers.",
    themeColor: "#60A5FA",
    stats: [
      { label: "Page Speed Score", value: "99/100" },
      { label: "Visitor Conversion", value: "+24%" },
      { label: "Average Load Time", value: "0.4s" }
    ],
    overview: "We build custom websites that load instantly. By avoiding heavy templates and website builders, we make sure your pages load quickly on any device, helping your business grow.",
    features: [
      "Fast Loading Custom Websites (using Next.js)",
      "Clean CSS Styles & Responsive Layouts",
      "Fast Online Store Setup (using Shopify)",
      "Global Server Hosting & Cache Settings",
      "Multi-language Website Support",
      "Optimized Google Search SEO Settings"
    ],
    architecture: {
      title: "How Your Website Loads Fast",
      steps: [
        { title: "User Request", desc: "A visitor clicks on your website link." },
        { title: "Smart Server Routing", desc: "Our hosting server loads the site files from the nearest location." },
        { title: "Fast Page Loading", desc: "The website loads a fast HTML layout and loads heavy scripts only when needed." },
        { title: "Interactive Features", desc: "Interactive features like search or shopping carts load instantly." }
      ]
    },
    faqs: [
      { q: "Why choose custom websites over templates?", a: "Custom websites are built from scratch, meaning they have no bloated code or unnecessary plugins. This makes them load much faster and remain far more secure than template-based sites." },
      { q: "How do you help with Google Search (SEO)?", a: "We build sitemaps, optimize loading speeds, and write clean HTML tags to make sure search engine spiders can read and index your site pages easily." }
    ]
  },
  "custom-software-development": {
    title: "Custom Software Development",
    tagline: "Secure databases, custom business software, and admin tools.",
    themeColor: "#A78BFA",
    stats: [
      { label: "Guaranteed Uptime", value: "99.99%" },
      { label: "Database Speed", value: "11ms" },
      { label: "Weekly Hours Saved", value: "40+" }
    ],
    overview: "We design and build custom software to fit your exact business needs. Whether you need a customer portal, an admin dashboard, or custom payment tracking, we write clean and secure code.",
    features: [
      "Secure Custom Databases",
      "GDPR & HIPAA Compliant Data Systems",
      "Secure API Connection Links",
      "Scalable Customer Dashboard Portals",
      "Custom Business Admin Software",
      "Automated Invoices & Payments"
    ],
    architecture: {
      title: "How We Keep Your Data Secure",
      steps: [
        { title: "Security Check", desc: "Our system checks user logins and blocks bad requests." },
        { title: "Private Databases", desc: "User records are stored in isolated databases to prevent data leaks." },
        { title: "Fast Query Routing", desc: "The server fetches database records instantly to avoid any lag." },
        { title: "Activity Logs", desc: "Changes to records are written to encrypted logs tables for safety." }
      ]
    },
    faqs: [
      { q: "How do you secure customer data?", a: "We write strict database rules and use encryption. This ensures only authorized users can view or edit private business information." },
      { q: "Can you connect with our existing software?", a: "Yes, we can build custom connectors to sync data between your old software and your new dashboard." }
    ]
  },
  "ai-automation": {
    title: "AI & Workflow Automation",
    tagline: "Smart AI workflows and automated tasks that work for you 24/7.",
    themeColor: "#F59E0B",
    stats: [
      { label: "Uptime Sync Rate", value: "99.9%" },
      { label: "Task Speedup", value: "3.2x" },
      { label: "Data Accuracy", value: "99.8%" }
    ],
    overview: "Our automations handle your heavy daily tasks. We connect smart AI models, store customer queries securely, and trigger automatic messages across Slack, email, and WhatsApp.",
    features: [
      "Smart AI Search Tools",
      "Automated Customer Qualification",
      "Custom WhatsApp Bots",
      "Automatic Event Alerts",
      "Automated PDF Reading & Data Entry",
      "Trigger-Based Multi-Service Webhook Sync"
    ],
    architecture: {
      title: "How Our AI Automation Works",
      steps: [
        { title: "Trigger Event", desc: "A user submits a form or uploads a document on your website." },
        { title: "Smart Data Reading", desc: "Our system reads the text and extracts key details instantly." },
        { title: "AI Search Check", desc: "The system searches the database to find matching info." },
        { title: "Automated Dispatch", desc: "The system replies to the customer or sends an alert to your team." }
      ]
    },
    faqs: [
      { q: "Is our private data safe with AI?", a: "Yes. We route all queries through private business accounts, ensuring your data is never used to train public AI models." },
      { q: "How do you prevent loops and unwanted charges?", a: "We build automatic safety shut-offs into our workflows, stopping any task instantly if it runs repeatedly." }
    ]
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    tagline: "Fast mobile apps for both iPhone and Android devices.",
    themeColor: "#34D399",
    stats: [
      { label: "App Load Time", value: "0.8s" },
      { label: "Crash-free Rate", value: "99.9%" },
      { label: "Code Shared", value: "90%" }
    ],
    overview: "We build fast, native mobile apps for both iOS and Android. By writing clean code and optimizing database storage, we ensure your app loads instantly and works smoothly on any device.",
    features: [
      "iPhone & Android App Store Ready",
      "Live Maps & Location Tracking",
      "Push Notification Setups",
      "Offline Storage & Cache",
      "Face ID & Touch ID Logins",
      "Automated App Store Publishing"
    ],
    architecture: {
      title: "How Our App Syncs Data",
      steps: [
        { title: "User Action", desc: "A user taps a button or opens a page in the app." },
        { title: "Local Cache Check", desc: "The app checks local storage first to load page details instantly." },
        { title: "Biometric Login", desc: "Verifies the user secure session using Face ID or Touch ID." },
        { title: "Cloud Database Sync", desc: "Sends and receives updates from our secure cloud servers." }
      ]
    },
    faqs: [
      { q: "Why build one app instead of two separate ones?", a: "We write one codebase that works for both iPhone and Android. This reduces development cost and lets us publish updates to both app stores at the same time." },
      { q: "Do push notifications work when the app is closed?", a: "Yes, we integrate cloud notification services so your users receive alerts even when the app is closed." }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing & SEO Audit",
    tagline: "SEO audits, search engine visibility, and fast landing pages.",
    themeColor: "#F472B6",
    stats: [
      { label: "Google Search Lift", value: "+140%" },
      { label: "Google Ads CPC Cut", value: "-30%" },
      { label: "Avg. Click-Through", value: "12.4%" }
    ],
    overview: "We check and improve your website speed and search ranking. We build fast loading landing pages that keep visitors on your site longer, lowering ad costs and boosting conversions.",
    features: [
      "Core Web Speed & Link Auditing",
      "Fast Loading Landing Pages",
      "Google & Facebook Ad Tracking",
      "Automated SEO Traffic Reports",
      "Structured Data for Search Engines",
      "Real-Time Marketing Metrics"
    ],
    architecture: {
      title: "How We Track Campaign Success",
      steps: [
        { title: "Fast Landing Page", desc: "The campaign page loads in under half a second to keep visitors." },
        { title: "Visitor Tracking", desc: "Tracks clicks and form submits without slowing down the page." },
        { title: "Secure Data Router", desc: "Sends conversion data directly to Google and Facebook servers." },
        { title: "Report Dashboard", desc: "Aggregates ad performance details into a simple client report." }
      ]
    },
    faqs: [
      { q: "Why does website speed affect Google Ad costs?", a: "Google rewards fast websites with higher quality scores. A higher score reduces the amount you pay per click and improves where your ads show up." },
      { q: "Do you set up Google Tag Manager and conversion events?", a: "Yes, we handle the full setup, mapping custom clicks and form submits directly to your dashboard." }
    ]
  }
};

export async function generateStaticParams() {
  return [
    { id: "website-development" },
    { id: "custom-software-development" },
    { id: "mobile-app-development" },
    { id: "ai-automation" },
    { id: "digital-marketing" }
  ];
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const service = SERVICES_DETAILS[id];

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} Services`,
    description: service.tagline || service.overview,
    alternates: {
      canonical: `https://webrix.co.in/services/${id}`,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { id } = await params;
  const service = SERVICES_DETAILS[id];

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.tagline || service.overview,
    "provider": {
      "@type": "Organization",
      "name": "Webrix",
      "url": "https://webrix.co.in"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Header component */}
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 pt-8 pb-16 sm:pt-24 sm:pb-24 space-y-16 sm:space-y-24 flex-1 w-full">
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
