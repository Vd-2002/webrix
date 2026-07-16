"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lock, Mail, ArrowRight, AlertCircle, ShieldAlert } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function AdminLoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Please fill in all credentials");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      if (data.success) {
        // Successful login, Next.js cookie middleware/cookie handles session
        router.push("/admin/dashboard");
      } else {
        setError(data.message || "Invalid authentication credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Failed to stream login payload");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Glow Backdrops */}
      <div className="absolute -left-48 -bottom-48 w-96 h-96 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute -right-48 -top-48 w-96 h-96 rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />
      
      {/* Decorative Grid Blueprint */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[420px] space-y-8"
      >
        {/* Brand Header */}
        <div className="text-center space-y-4">
          <Link href="/" className="inline-block">
            <Image
              src="/logo2.png"
              alt="Webrix"
              width={140}
              height={40}
              className="object-contain mx-auto"
              priority
            />
          </Link>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold font-display text-white tracking-tight">
              Admin Console Login
            </h1>
            <p className="text-xs text-white/40 font-mono tracking-wider uppercase">
              Webrix Central Management Engine
            </p>
          </div>
        </div>

        {/* Login Card */}
        <div className="border border-white/10 bg-[#070712] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          {/* Top glow border */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent" />

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Input */}
            <div className="space-y-1.5">
              <label className="text-[9px] font-mono font-bold text-white/40 uppercase tracking-widest block">
                Security Identity (Email)
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  suppressHydrationWarning
                  placeholder="admin@webrix.co"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-11 pl-11 pr-4 rounded-xl border border-white/10 bg-white/[0.02] text-xs text-white placeholder-white/20 focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all font-sans"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="text-[9px] font-mono font-bold text-white/40 uppercase tracking-widest block">
                Security Key (Password)
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full h-11 pl-11 pr-4 rounded-xl border border-white/10 bg-white/[0.02] text-xs text-white placeholder-white/20 focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all font-sans"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/[0.08] border border-red-500/20 p-3 rounded-xl flex items-start gap-2.5 text-[10px] text-red-400 font-mono"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              disabled={loading}
              className="w-full h-11 text-xs font-semibold tracking-wider font-display uppercase rounded-xl disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              {loading ? (
                <span>Authorizing Link...</span>
              ) : (
                <>
                  <span>Initialize Login</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </Button>
          </form>

        </div>

        {/* Back Link */}
        <div className="text-center font-mono text-[10px]">
          <Link href="/" className="text-white/30 hover:text-white transition-colors uppercase tracking-wider flex items-center justify-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5" />
            Return to Public Website
          </Link>
        </div>

      </motion.div>
    </div>
  );
}
