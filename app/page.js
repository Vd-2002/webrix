"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Dropdown from "@/components/ui/Dropdown";
import Hero from "@/components/homepage/Hero";
import Services from "@/components/homepage/Services";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import Industries from "@/components/homepage/Industries";
import Process from "@/components/homepage/Process";

export default function Home() {
  const [inputText, setInputText] = useState("Configure your brand, build with speed.");
  const [demoInput, setDemoInput] = useState("Design Token");
  const [demoSelect, setDemoSelect] = useState("dev");

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 flex flex-col justify-between">
      {/* Header component */}
      <Header />

      <div className="-mt-[92px]">
        <Hero />
      </div>

      <main className="max-w-[1200px] mx-auto px-6 py-24 space-y-24 flex-1 w-full">
        {/* Services Overview Section */}
        <Services />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Industries We Serve Section */}
        <Industries />

        {/* Development Process Section */}
        <Process />

        {/* Color Palette Grid */}
        <section id="colors" className="space-y-6 scroll-mt-24">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-display tracking-tight">Active Color Palette</h2>
            <p className="text-foreground/70">
              These colors automatically adjust to system preferences for Light Mode and Dark Mode.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* BG Swatch */}
            <div className="border border-border rounded-2xl overflow-hidden bg-background/50 backdrop-blur">
              <div className="h-24 w-full bg-background border-b border-border"></div>
              <div className="p-4 space-y-1">
                <span className="text-xs text-foreground/60 block uppercase font-bold tracking-wider">Background</span>
                <span className="font-semibold block font-display">bg-background</span>
                <span className="text-xs text-foreground/50 font-mono">#F8F9FC / #0F172A</span>
              </div>
            </div>

            {/* Text Swatch */}
            <div className="border border-border rounded-2xl overflow-hidden bg-background/50 backdrop-blur">
              <div className="h-24 w-full bg-foreground border-b border-border"></div>
              <div className="p-4 space-y-1">
                <span className="text-xs text-foreground/60 block uppercase font-bold tracking-wider">Text / Foreground</span>
                <span className="font-semibold block font-display">text-foreground</span>
                <span className="text-xs text-foreground/50 font-mono">#1F2937 / #F1F5F9</span>
              </div>
            </div>

            {/* Primary Swatch */}
            <div className="border border-border rounded-2xl overflow-hidden bg-background/50 backdrop-blur">
              <div className="h-24 w-full bg-primary"></div>
              <div className="p-4 space-y-1">
                <span className="text-xs text-foreground/60 block uppercase font-bold tracking-wider">Primary</span>
                <span className="font-semibold block font-display">bg-primary</span>
                <span className="text-xs text-foreground/50 font-mono">#003D99 / #60A5FA</span>
              </div>
            </div>

            {/* Accent Swatch */}
            <div className="border border-border rounded-2xl overflow-hidden bg-background/50 backdrop-blur">
              <div className="h-24 w-full bg-accent"></div>
              <div className="p-4 space-y-1">
                <span className="text-xs text-foreground/60 block uppercase font-bold tracking-wider">Accent</span>
                <span className="font-semibold block font-display">bg-accent</span>
                <span className="text-xs text-foreground/50 font-mono">#6366F1 / #818CF8</span>
              </div>
            </div>

            {/* Secondary Swatch */}
            <div className="border border-border rounded-2xl overflow-hidden bg-background/50 backdrop-blur">
              <div className="h-24 w-full bg-secondary"></div>
              <div className="p-4 space-y-1">
                <span className="text-xs text-foreground/60 block uppercase font-bold tracking-wider">Secondary</span>
                <span className="font-semibold block font-display">bg-secondary</span>
                <span className="text-xs text-foreground/50 font-mono">#000000 / #FFFFFF</span>
              </div>
            </div>

            {/* Border Swatch */}
            <div className="border border-border rounded-2xl overflow-hidden bg-background/50 backdrop-blur">
              <div className="h-24 w-full bg-border border-b border-border"></div>
              <div className="p-4 space-y-1">
                <span className="text-xs text-foreground/60 block uppercase font-bold tracking-wider">Border</span>
                <span className="font-semibold block font-display">border-border</span>
                <span className="text-xs text-foreground/50 font-mono">#E2E8F0 / #1E293B</span>
              </div>
            </div>
          </div>
        </section>

        {/* Showcase Components & Interactive playground split */}
        <div id="components" className="grid md:grid-cols-2 gap-8">
          {/* Component Showcase */}
          <section className="space-y-6 border border-border rounded-3xl p-6 md:p-8 bg-background/30">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-display">Interactive UI Components</h3>
              <p className="text-sm text-foreground/70">
                A showcase of standard UI components rendered using the new variables.
              </p>
            </div>

            <div className="space-y-6">
              {/* Buttons */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-bold tracking-wider text-foreground/50 block">Buttons</span>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="accent">Accent</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                </div>
              </div>

              {/* Form Controls */}
              <div className="space-y-4 pt-4 border-t border-border/60">
                <span className="text-xs uppercase font-bold tracking-wider text-foreground/50 block">Form Controls</span>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Username"
                    placeholder="Enter your username"
                    value={demoInput}
                    onChange={(e) => setDemoInput(e.target.value)}
                  />
                  <Dropdown
                    label="Select Role"
                    options={[
                      { label: "Administrator", value: "admin" },
                      { label: "Developer", value: "dev" },
                      { label: "Guest User", value: "guest" }
                    ]}
                    value={demoSelect}
                    onChange={setDemoSelect}
                  />
                </div>
              </div>

              {/* Badges */}
              <div className="space-y-3 pt-4 border-t border-border/60">
                <span className="text-xs uppercase font-bold tracking-wider text-foreground/50 block">Badges</span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20 text-xs font-semibold">
                    Primary
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-accent/10 text-accent border border-accent/20 text-xs font-semibold">
                    Accent
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-secondary/15 text-secondary border border-secondary/25 text-xs font-semibold">
                    Secondary
                  </span>
                </div>
              </div>

              {/* Card Example */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-bold tracking-wider text-foreground/50 block">Information Card</span>
                <div className="border border-border rounded-2xl p-5 bg-background space-y-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold font-display text-base">New Analytics Project</h4>
                    <span className="text-xs px-2 py-0.5 rounded-lg bg-accent/15 text-accent border border-accent/10 font-medium">
                      In Progress
                    </span>
                  </div>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    Designed with Bricolage Grotesque display headers and Plus Jakarta Sans text inputs for an optimized editing view.
                  </p>
                  <div className="pt-2 border-t border-border flex items-center justify-between text-xs text-foreground/60">
                    <span>Updated 2 mins ago</span>
                    <span className="font-semibold text-primary hover:underline cursor-pointer">View Details &rarr;</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Live Playground */}
          <section id="playground" className="space-y-6 border border-border rounded-3xl p-6 md:p-8 bg-background/30 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-display">Typography Playground</h3>
                <p className="text-sm text-foreground/70">
                  Type below to see Bricolage Grotesque (headings) and Plus Jakarta Sans (body) pair dynamically.
                </p>
              </div>

              <div className="space-y-4">
                <Input
                  label="Playground Input"
                  placeholder="Enter text..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>

              <div className="pt-6 border-t border-border space-y-6">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-mono text-foreground/40 block">H1 — Heading (Bricolage 800 / 48px / -0.02em)</span>
                  <h1 className="leading-tight">{inputText || "Type something..."}</h1>
                </div>

                <div className="space-y-1">
                  <span className="text-xs uppercase font-mono text-foreground/40 block">H2 — Subheading (Bricolage 700 / 30px / -0.01em)</span>
                  <h2 className="leading-snug">{inputText || "Type something..."}</h2>
                </div>

                <div className="space-y-1">
                  <span className="text-xs uppercase font-mono text-foreground/40 block">P — Paragraph (Plus Jakarta 400 / 16px / 1.7 leading)</span>
                  <p>{inputText || "Type something..."}</p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase font-mono text-foreground/40 block">Button Text (Bricolage 700 / 15px / uppercase)</span>
                  <div>
                    <Button variant="primary">
                      {inputText || "Button Action"}
                    </Button>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-xs uppercase font-mono text-foreground/40 block">Code / Mono (IBM Plex Mono 400 / 13px / 0.5px spacing)</span>
                  <pre className="p-3 bg-foreground/5 rounded-xl border border-border overflow-x-auto">
                    <code>{inputText || "console.log('webrix styles initialized');"}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="text-center text-xs text-foreground/40 mt-6 md:mt-0 pt-4 border-t border-border/40">
              Webrix UI Design Engine &bull; Ready for deployment
            </div>
          </section>
        </div>
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
