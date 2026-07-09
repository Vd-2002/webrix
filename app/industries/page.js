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

export const metadata = {
  title: "Sectors We Solve & Industry Verticals",
  description: "Webrix designs tailor-made digital architectures for key industries: healthcare, real estate, retail, manufacturing, and financial systems.",
  alternates: {
    canonical: "https://webrix.co.in/industries",
  },
};

export default function IndustriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sectors We Solve",
    "description": "Custom digital engineering solutions across healthcare, real estate, retail, manufacturing, and financial compliance sectors.",
    "publisher": {
      "@type": "Organization",
      "name": "Webrix",
      "url": "https://webrix.co.in"
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header component */}
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 pt-8 pb-16 sm:pt-24 sm:pb-24 space-y-16 sm:space-y-24 flex-1 w-full">
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
