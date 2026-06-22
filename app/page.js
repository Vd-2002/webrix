"use client";

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

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 flex flex-col justify-between">
      {/* Header component */}
      <Header />

      <div className="-mt-[92px]">
        <Hero />
      </div>

      <main className="max-w-[1200px] mx-auto px-6 pt-[100px] pb-[100px] space-y-[100px] flex-1 w-full">
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
