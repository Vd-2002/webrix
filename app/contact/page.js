"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import OfficeDetails from "@/components/contact/OfficeDetails";
import GoogleMap from "@/components/contact/GoogleMap";
import ContactFAQ from "@/components/contact/ContactFAQ";
import CTA from "@/components/homepage/CTA";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 flex flex-col justify-between">
      {/* Header component */}
      <Header />

      <main className="max-w-[1200px] mx-auto px-6 pt-[100px] pb-[100px] space-y-[100px] flex-1 w-full">
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
