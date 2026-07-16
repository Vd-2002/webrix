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

export const metadata = {
  title: "About Webrix | Web Development & Digital Marketing Agency",
  description: "Learn about Webrix, our team of developers and digital marketing strategists, and our commitment to building high-performance websites and ROI-focused marketing campaigns.",
  alternates: {
    canonical: "https://webrix.co.in/about",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Webrix",
      "url": "https://webrix.co.in",
      "logo": "https://webrix.co.in/logo.png",
      "description": "Webrix engineers premium headless websites, custom multi-tenant software platforms, serverless AI workflows, and digital marketing strategies."
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
