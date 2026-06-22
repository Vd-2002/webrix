"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import CaseStudies from "@/components/portfolio/CaseStudies";
import CTA from "@/components/homepage/CTA";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 flex flex-col justify-between">
      {/* Header component */}
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 pt-[100px] pb-[100px] space-y-[100px] flex-1 w-full">
        {/* Hero Section */}
        <PortfolioHero />

        {/* Filter and Projects Grid Section */}
        <PortfolioGrid />

        {/* In-depth Case Studies Section */}
        <CaseStudies />

        {/* CTA (same as homepage) */}
        <CTA />
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
