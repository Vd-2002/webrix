import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import OfficeDetails from "@/components/contact/OfficeDetails";
import GoogleMap from "@/components/contact/GoogleMap";
import ContactFAQ from "@/components/contact/ContactFAQ";
import CTA from "@/components/homepage/CTA";

export const metadata = {
  title: "Contact Webrix | Web Development & Digital Marketing Agency",
  description: "Get in touch with Webrix. Scope your web development, custom software, mobile apps, or digital marketing & SEO audit campaigns.",
  alternates: {
    canonical: "https://webrix.co.in/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Webrix",
    "description": "Contact our software engineering and design teams for custom project scoping, tech consulting, or digital architecture builds.",
    "publisher": {
      "@type": "Organization",
      "name": "Webrix",
      "url": "https://webrix.co.in",
      "logo": "https://webrix.co.in/logo.png"
    },
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "Webrix",
      "image": "https://webrix.co.in/logo.png",
      "url": "https://webrix.co.in",
      "email": "heywebrix@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New York City",
        "addressRegion": "NY",
        "addressCountry": "US"
      }
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
        {/* Contact Hero */}
        <ContactHero />

        {/* Dynamic Contact Form & Project Scoping Checklist */}
        <ContactForm />

        {/* Office Location Hub Details */}
        <OfficeDetails />

        {/* Interactive Google Map Visual Arc Layout */}
        <GoogleMap />

        {/* Structured scoping FAQs accordions */}
        <ContactFAQ />

        {/* CTA (same as homepage) */}
        <CTA />
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
