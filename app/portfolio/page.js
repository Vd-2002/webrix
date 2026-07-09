import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import CaseStudies from "@/components/portfolio/CaseStudies";
import CTA from "@/components/homepage/CTA";

export const metadata = {
  title: "Our Engineering Portfolio & Case Studies",
  description: "Browse Webrix's completed projects, codebases, and systems architectures spanning enterprise cloud portals and high-speed web apps.",
  alternates: {
    canonical: "https://webrix.co.in/portfolio",
  },
};

export default function PortfolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Our Engineering Portfolio",
    "description": "Explore Webrix's catalog of custom software, enterprise platforms, and low-latency headless websites.",
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
