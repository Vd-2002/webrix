"use client";

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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 flex flex-col justify-between">
      {/* Header navigation */}
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 pt-[100px] pb-[100px] space-y-[100px] flex-1 w-full">
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
