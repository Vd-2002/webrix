"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesOverview from "@/components/industries/IndustriesOverview";
import IndustriesWeServe from "@/components/industries/IndustriesWeServe";
import IndustryChallenges from "@/components/industries/IndustryChallenges";
import SolutionsByIndustry from "@/components/industries/SolutionsByIndustry";
import FeaturedProjects from "@/components/homepage/FeaturedProjects";
import Testimonials from "@/components/homepage/Testimonials";
import IndustriesFAQ from "@/components/industries/IndustriesFAQ";
import CTA from "@/components/homepage/CTA";

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 flex flex-col justify-between">
      {/* Header component */}
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 pt-[100px] pb-[100px] space-y-[100px] flex-1 w-full">
        {/* Industries Hero */}
        <IndustriesHero />

        {/* Sectors Overview Cards */}
        <IndustriesOverview />

        {/* Dynamic Capabilities tabbed dashboard */}
        <IndustriesWeServe />

        {/* Technical bottlenecks & Friction points */}
        <IndustryChallenges />

        {/* Decoupled, socket, and PostGIS solutions */}
        <SolutionsByIndustry />

        {/* Reused homepage Featured Projects grid */}
        <FeaturedProjects />

        {/* Reused homepage Testimonials slider */}
        <Testimonials />

        {/* Sector compliance and audit FAQs */}
        <IndustriesFAQ />

        {/* Reused homepage CTA */}
        <CTA />
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
