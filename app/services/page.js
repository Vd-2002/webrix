import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesCategories from "@/components/services/ServicesCategories";
import DetailedServices from "@/components/services/DetailedServices";
import ServicesBenefits from "@/components/services/ServicesBenefits";
import ServicesTechnologies from "@/components/services/ServicesTechnologies";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesFAQs from "@/components/services/ServicesFAQs";
import CTA from "@/components/homepage/CTA";

export const metadata = {
  title: "Services | Web Design, Software & Digital Marketing",
  description: "Explore Webrix's expert services: custom website development, custom ERP/SaaS portals, mobile apps, serverless AI pipelines, and digital marketing & SEO strategies.",
  alternates: {
    canonical: "https://webrix.co.in/services",
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ServicePage",
    "provider": {
      "@type": "Organization",
      "name": "Webrix",
      "url": "https://webrix.co.in"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Webrix Digital Services Portfolio",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development",
            "description": "Ultra-fast headless interfaces engineered for high conversion rates using Next.js."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Dedicated business frameworks and compliant relational database models."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & Workflow Automation",
            "description": "Serverless LLM agents and automatic webhook pipelines."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Premium cross-platform native mobile applications built with React Native."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing & SEO Audit",
            "description": "Low-latency landing pages, analytics pipelines, and search engine visibility."
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header navigation */}
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 pt-8 pb-16 sm:pt-24 sm:pb-24 space-y-16 sm:space-y-24 flex-1 w-full">
        {/* Services Page Hero */}
        <ServicesHero />

        {/* Core Categories Grid */}
        <ServicesCategories />

        {/* Detailed Service Dashboard Specs */}
        <DetailedServices />

        {/* Engineering Performance Benefits */}
        <ServicesBenefits />

        {/* Core Specialization Toolchains */}
        <ServicesTechnologies />

        {/* Structured Timeline Delivery Workflow */}
        <ServicesProcess />

        {/* Operational FAQs */}
        <ServicesFAQs />

        {/* Shared Call-To-Action Control Board */}
        <CTA />
      </main>

      {/* Footer info & links */}
      <Footer />
    </div>
  );
}
