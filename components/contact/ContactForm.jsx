"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ChevronRight, AlertCircle, Info, ShieldCheck, Terminal, Cpu } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Dropdown from "@/components/ui/Dropdown";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "Website Development",
    message: ""
  });

  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [queueId, setQueueId] = useState(0);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid";
    }
    if (!formData.message.trim()) tempErrors.message = "Please describe your project or requirements";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        // Extract a clean string ID part from ObjectId or fallback
        const cleanId = data.messageId ? data.messageId.substring(data.messageId.length - 6).toUpperCase() : (Math.floor(Math.random() * 90000) + 10000).toString();
        setQueueId(cleanId);
        setFormData({
          name: "",
          email: "",
          company: "",
          category: "Website Development",
          message: ""
        });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Scoping submit error:", err);
      setStatus("error");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const categories = [
    "Website Development",
    "Custom Software Development",
    "Mobile App Development",
    "Digital Marketing",
    "AI Automation"
  ];

  return (
    <section id="contact-form-section" className="relative z-10 scroll-mt-24 w-full">
      <div className="grid lg:grid-cols-12 gap-12 items-start max-w-[1200px] mx-auto">
        
        {/* Left Side: Copy, specifications, and checklist guarantees */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
              Initiate Project{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60A5FA] to-[#A78BFA]">
                Scoping
              </span>
            </h2>
            <p className="text-sm sm:text-base text-white/50 leading-relaxed font-sans">
              Provide your details and custom software criteria. Our engineering leaders will analyze your specification constraints and layout a technical design roadmap.
            </p>
          </div>

          {/* Technical Specifications checklist */}
          <div className="space-y-4 pt-6 border-t border-white/5">
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-white/30 block">
              Consultation Deliverables
            </span>
            <ul className="space-y-3.5">
              {[
                "Architecture mapping detailing latency and nodes optimization.",
                "Custom horizontal scale blueprint proposals (Next.js, Serverless).",
                "Compliance scoping parameters (HIPAA, GDPR, secure database keys).",
                "Fixed pricing quotes and milestone timelines audited in 48 hours."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/70 font-sans">
                  <ShieldCheck className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core system status widget */}
          <div className="border border-white/5 bg-[#050510]/60 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2 border-b border-white/5 pb-2 text-[10px] font-mono text-white/40 uppercase tracking-wider font-semibold">
              <Terminal className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>Scoping Endpoint Monitor</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-white/50">HTTPS Route</span>
              <span className="text-white/80">/api/v2/scoping-requests</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-white/50">Encryption Status</span>
              <span className="text-emerald-400 font-bold">AES-256 Enabled</span>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form Card */}
        <div className="lg:col-span-7 w-full">
          <div className="border border-white/10 bg-[#070712] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-3 max-w-md">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                      Message Sent Successfully
                    </h3>
                    <p className="text-sm text-white/70 font-sans leading-relaxed">
                      Thank you for reaching out! We have successfully received your project scoping specifications. Our system engineering team will review the details and get back to you within 24 hours.
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider rounded-xl border border-white/10 hover:bg-white/5"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <Input
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      error={errors.name}
                      placeholder="John Doe"
                      className="border-white/10 bg-white/[0.02] text-xs text-white rounded-xl placeholder-white/30 h-11 focus:border-white/20 focus:bg-white/[0.04]"
                    />

                    {/* Email */}
                    <Input
                      label="Email Address"
                      type="email"
                      name="email"
                      suppressHydrationWarning
                      value={formData.email}
                      onChange={handleInputChange}
                      error={errors.email}
                      placeholder="john@company.com"
                      className="border-white/10 bg-white/[0.02] text-xs text-white rounded-xl placeholder-white/30 h-11 focus:border-white/20 focus:bg-white/[0.04]"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Company */}
                    <Input
                      label="Company Name (Optional)"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Acme Corp"
                      className="border-white/10 bg-white/[0.02] text-xs text-white rounded-xl placeholder-white/30 h-11 focus:border-white/20 focus:bg-white/[0.04]"
                    />

                    {/* Scope Category selection */}
                    <Dropdown
                      label="Project Category"
                      options={categories}
                      value={formData.category}
                      onChange={(val) => setFormData((prev) => ({ ...prev, category: val }))}
                      className="border-white/10 bg-white/[0.02] hover:bg-white/[0.04] text-xs text-white rounded-xl h-11"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-wider font-bold text-white/40 block">
                      Project Requirements Spec
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Outline your tech stack needs, target execution speeds, scalability requirements, or timeline goals..."
                      className={`w-full p-4 rounded-xl border bg-white/[0.02] text-xs text-white placeholder-white/30 focus:outline-none transition-all font-sans resize-none ${
                        errors.message ? "border-red-500/50 focus:border-red-500 bg-red-500/[0.01]" : "border-white/10 focus:border-white/20 focus:bg-white/[0.04]"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[10px] text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={status === "submitting"}
                      className="w-full py-3.5 text-xs font-semibold tracking-wider font-display uppercase rounded-xl shadow-[0_0_24px_rgba(96,165,250,0.15)] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <>
                          <Cpu className="w-4 h-4 animate-spin text-primary-foreground" />
                          <span>Streaming Scoping Payload...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Scoping Request</span>
                          <Send className="w-3.5 h-3.5 text-primary-foreground" />
                        </>
                      )}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
