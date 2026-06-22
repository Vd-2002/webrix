"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Introduction from "@/components/about/Introduction";
import MissionVision from "@/components/about/MissionVision";
import WhyWeStarted from "@/components/about/WhyWeStarted";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";
import TechUsed from "@/components/about/TechUsed";
import WorkProcess from "@/components/about/WorkProcess";
import CTA from "@/components/homepage/CTA";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 flex flex-col justify-between">
      {/* Header component */}
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 pt-[100px] pb-[100px] space-y-[100px] flex-1 w-full">
        {/* Company Introduction */}
        <Introduction />

        {/* Mission & Vision */}
        <MissionVision />

        {/* Why We Started Webrix */}
        <WhyWeStarted />

        {/* Our Values */}
        <Values />

        {/* Team Members */}
        <Team />

        {/* Technologies We Use (Category-wise tabbed dashboard) */}
        <TechUsed />

        {/* Work Process (Vertical milestones timeline) */}
        <WorkProcess />

        {/* CTA (same as homepage) */}
        <CTA />
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
