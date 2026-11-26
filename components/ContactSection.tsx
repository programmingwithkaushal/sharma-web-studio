"use client";

import { useState } from "react";
import { siteConfig } from "@/site.config";
import {
  Send,
  MessageCircle,
  Mail,
  MapPin,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import MagneticButton from "./MagneticButton";
import LiquidCard from "./LiquidCard";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    category: "Clinic / Healthcare",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappInquiry = encodeURIComponent(
    `Hello Kaushal & Akhilesh! My name is ${formData.name || "a business owner"} from "${formData.businessName || "my business"}" (${formData.category}). I want to discuss a website project. Phone: ${formData.phone || "provided"}. Message: ${formData.message || "Please call me."}`
  );

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Founders Hotline */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 text-xs font-semibold mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Direct Consultation</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Initiate Your Digital Transformation
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              Complete the inquiry form or reach out directly to co-founders{" "}
              <strong className="text-white font-semibold">Kaushal Sharma</strong> &{" "}
              <strong className="text-white font-semibold">Akhilesh Sharma</strong>. We reply within
              30 minutes during active hours.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5 mb-8">
              <LiquidCard glowColor="rgba(16, 185, 129, 0.2)" className="p-4 border-emerald-500/25 bg-[#061214]/80">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent("Hi Kaushal & Akhilesh! I want to discuss a website for my business.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                        Fastest Channel (WhatsApp VIP)
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-white block mt-0.5 font-mono">
                      {siteConfig.contact.whatsapp}
                    </span>
                    <span className="text-xs text-slate-400">Tap for direct encrypted chat</span>
                  </div>
                </a>
              </LiquidCard>

              <LiquidCard glowColor="rgba(59, 130, 246, 0.15)" className="p-4 border-white/10 bg-[#070b16]/70">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Executive Email
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white block mt-0.5 font-mono">
                      {siteConfig.contact.email}
                    </span>
                    <span className="text-xs text-slate-400">For project briefs and formal proposals</span>
                  </div>
                </div>
              </LiquidCard>

              <LiquidCard glowColor="rgba(99, 102, 241, 0.15)" className="p-4 border-white/10 bg-[#070b16]/70">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] text-indigo-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Headquarters & Regional Reach
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white block mt-0.5">
                      {siteConfig.contact.city}
                    </span>
                    <span className="text-xs text-slate-400">Serving enterprise and local leaders</span>
                  </div>
                </div>
              </LiquidCard>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>{siteConfig.contact.workingHours}</span>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <LiquidCard glowColor="rgba(56, 189, 248, 0.2)" className="p-7 sm:p-10 border-white/15 bg-[#070b17]/95 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Inquiry Successfully Received
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Kaushal Sharma or
                    Akhilesh Sharma will review your requirements for{" "}
                    <strong className="text-white">{formData.businessName}</strong> and contact you directly.
                  </p>
                  <MagneticButton strength={15}>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${whatsappInquiry}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/40"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed Up: Message on WhatsApp</span>
                    </a>
                  </MagneticButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-2">
                    <h3 className="font-display text-lg font-bold text-white">
                      Request Strategic Website Consultation
                    </h3>
                    <span className="text-[11px] text-emerald-400 font-semibold font-mono">
                      100% Free • No Obligation
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Verma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Business / Brand Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Verma Sweets / Apex Clinic"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Business Domain / Industry
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#080d1a] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option value="Clinic / Healthcare">Clinic / Doctor / Dentist</option>
                        <option value="Restaurant / Cafe">Restaurant / Cafe / Culinary</option>
                        <option value="Retail Store / Boutique">Retail Store / Fashion Boutique</option>
                        <option value="Coaching / Academy">Coaching / Academy / School</option>
                        <option value="Home Services / Contractor">Contractor / Interiors / Trade</option>
                        <option value="Professional Services">Advocate / CA / Advisory</option>
                        <option value="Other Business">Other Local Business</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Objectives or Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. We want to display our catalog online with 0% commission WhatsApp orders and rank on Google Maps."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <MagneticButton strength={15} className="flex-1">
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Strategic Inquiry</span>
                      </button>
                    </MagneticButton>

                    <MagneticButton strength={10}>
                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${whatsappInquiry}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 text-emerald-400 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp Fast-Track</span>
                      </a>
                    </MagneticButton>
                  </div>

                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    🔒 Zero spam guarantee. Direct conversation with Kaushal Sharma & Akhilesh Sharma.
                  </p>
                </form>
              )}
            </LiquidCard>
          </div>
        </div>
      </div>
    </section>
  );
}
