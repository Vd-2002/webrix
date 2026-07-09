import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/homepage/Hero";
import Services from "@/components/homepage/Services";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import FeaturedProjects from "@/components/homepage/FeaturedProjects";
import Industries from "@/components/homepage/Industries";
import Process from "@/components/homepage/Process";
import Testimonials from "@/components/homepage/Testimonials";
import TechStack from "@/components/homepage/TechStack";
import Stats from "@/components/homepage/Stats";
import CTA from "@/components/homepage/CTA";

export const metadata = {
  title: "Premium Web Design & Custom Software Engineering",
  description: "Webrix is a professional digital engineering firm. We build headless websites, custom database applications, native mobile apps, and serverless AI automations.",
  alternates: {
    canonical: "https://webrix.co.in",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://webrix.co.in/#organization",
        "name": "Webrix",
        "url": "https://webrix.co.in",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://webrix.co.in/#logo",
          "url": "https://webrix.co.in/logo.png",
          "caption": "Webrix Logo"
        },
        "image": {
          "@id": "https://webrix.co.in/#logo"
        },
        "sameAs": [
          "https://linkedin.com/company/webrix",
          "https://twitter.com/webrix_co",
          "https://github.com/webrix-co"
        ],
        "email": "heywebrix@gmail.com",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "heywebrix@gmail.com",
          "contactType": "customer support"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://webrix.co.in/#website",
        "url": "https://webrix.co.in",
        "name": "Webrix",
        "description": "Premium Headless Websites, Custom ERP/SaaS Portals, Mobile Apps, & AI Automations.",
        "publisher": {
          "@id": "https://webrix.co.in/#organization"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://webrix.co.in/#localbusiness",
        "name": "Webrix",
        "image": "https://webrix.co.in/logo.png",
        "url": "https://webrix.co.in",
        "email": "heywebrix@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "New York City",
          "addressRegion": "NY",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "40.7128",
          "longitude": "-74.0060"
        },
        "priceRange": "$$",
        "areaServed": [
          {
            "@type": "Country",
            "name": "United States"
          },
          {
            "@type": "Country",
            "name": "United Kingdom"
          },
          {
            "@type": "Country",
            "name": "Canada"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header component */}
      <Header />

      <div className="-mt-[92px]">
        <Hero />
      </div>

      <main className="max-w-[1200px] mx-auto px-6 pt-16 pb-16 sm:pt-24 sm:pb-24 space-y-16 sm:space-y-24 flex-1 w-full">
        {/* Agency Impact Statistics */}
        <Stats />

        {/* Services Overview Section */}
        <Services />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Featured Projects Section */}
        <FeaturedProjects />

        {/* Industries We Serve Section */}
        <Industries />

        {/* Development Process Section */}
        <Process />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Technology Stack Section */}
        <TechStack />

        {/* CTA Section */}
        <CTA />
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
