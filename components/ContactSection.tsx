"use client";

import { useState } from "react";
import { siteConfig } from "@/site.config";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    businessName: "",
    category: "Clinic / Healthcare",
    objectives: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    "Clinic / Healthcare",
    "Restaurant / Cafe / Food",
    "Retail / Boutique / Fashion",
    "Coaching / Academy / Education",
    "Contractor / Home Interiors",
    "Professional Services / Other",
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone or WhatsApp number is required";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 10) {
      errs.phone = "Please enter a valid 10-digit number";
    }
    if (!formData.businessName.trim()) errs.businessName = "Business name is required";
    if (!formData.objectives.trim()) errs.objectives = "Please briefly state your website objectives";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Format consultation dispatch payload for founders
    const dispatchMessage = encodeURIComponent(
      `New Consultation Request from Sharma Web Studio Website:\n\n` +
        `• Name: ${formData.fullName.trim()}\n` +
        `• Phone/WhatsApp: ${formData.phone.trim()}\n` +
        `• Business: ${formData.businessName.trim()}\n` +
        `• Category: ${formData.category}\n` +
        `• Project Objectives: ${formData.objectives.trim()}\n\n` +
        `Submitted via sharma-web-studio.vercel.app`
    );

    // Simulate reliable dispatch state & trigger direct WhatsApp routing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const waUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${dispatchMessage}`;
      window.open(waUrl, "_blank");
    }, 600);
  };

  return (
    <section id="contact" className="py-28 px-6 sm:px-12 relative z-10 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#d4ff00]">
                Section 14 // Consultation Terminal
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
              Initiate Your Project
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 max-w-sm uppercase tracking-wider">
            Direct access to founders Kaushal Sharma &amp; Akhilesh Sharma. Receive an architectural proposal within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Touchpoint Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Direct Card */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(
                "Hi Kaushal & Akhilesh! I would like to schedule an introductory consultation for my business."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-[#0c0e12]/80 border border-[#d4ff00]/40 hover:border-[#d4ff00] transition-all backdrop-blur-md flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#d4ff00]/10 border border-[#d4ff00]/30 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#d4ff00]" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#d4ff00] uppercase tracking-wider">
                    Instant 1-Click Priority
                  </div>
                  <div className="font-display font-bold text-base text-white">Direct WhatsApp Hotline</div>
                  <div className="font-mono text-xs text-slate-400">{siteConfig.contact.whatsapp}</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#d4ff00] transition-colors" />
            </a>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-[#0c0e12]/80 border border-white/10 backdrop-blur-md flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                  Direct Founder Phone
                </div>
                <div className="font-display font-bold text-base text-white">{siteConfig.contact.phone}</div>
                <div className="font-mono text-xs text-slate-400">Available Mon - Sat</div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-[#0c0e12]/80 border border-white/10 backdrop-blur-md flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                  Official Studio Email
                </div>
                <div className="font-display font-bold text-base text-white">{siteConfig.contact.email}</div>
                <div className="font-mono text-xs text-slate-400">Proposals &amp; Contracts</div>
              </div>
            </div>

            {/* Location & Hours Card */}
            <div className="p-6 rounded-3xl bg-[#0c0e12]/80 border border-white/10 backdrop-blur-md space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#d4ff00]" />
                <span className="font-mono text-xs text-slate-300">{siteConfig.contact.city}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#e6c687]" />
                <span className="font-mono text-xs text-slate-300">{siteConfig.contact.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Consultation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0c0e12]/90 border border-white/15 backdrop-blur-xl shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#d4ff00]/10 border border-[#d4ff00]/30 flex items-center justify-center mx-auto text-[#d4ff00]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-white">
                    Consultation Request Formatted
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your request has been routed directly to founders Kaushal Sharma &amp; Akhilesh Sharma on WhatsApp.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        phone: "",
                        businessName: "",
                        category: "Clinic / Healthcare",
                        objectives: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full border border-white/20 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white hover:border-white transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 font-mono text-xs">
                    <span className="text-slate-400 uppercase tracking-widest">Consultation Blueprint Form</span>
                    <span className="text-[#d4ff00]">Response Within 24h</span>
                  </div>

                  {/* Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dr. Ramesh Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-sm focus:outline-none transition-colors ${
                          errors.fullName ? "border-red-500" : "border-white/10 focus:border-[#d4ff00]"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-red-400 font-mono text-[10px] mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-sm focus:outline-none transition-colors ${
                          errors.phone ? "border-red-500" : "border-white/10 focus:border-[#d4ff00]"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-400 font-mono text-[10px] mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Business Name & Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider mb-2">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. City Laser Dental Clinic"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-sm focus:outline-none transition-colors ${
                          errors.businessName ? "border-red-500" : "border-white/10 focus:border-[#d4ff00]"
                        }`}
                      />
                      {errors.businessName && (
                        <p className="text-red-400 font-mono text-[10px] mt-1">{errors.businessName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider mb-2">
                        Industry Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#14171f] border border-white/10 text-white text-sm focus:outline-none focus:border-[#d4ff00] transition-colors"
                      >
                        {categories.map((cat, cIdx) => (
                          <option key={cIdx} value={cat} className="bg-[#14171f] text-white">
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Objectives */}
                  <div>
                    <label className="block font-mono text-xs text-slate-300 uppercase tracking-wider mb-2">
                      Project Objectives &amp; Requirements *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="e.g. We need a 5-page website with online appointment booking on WhatsApp and Google Maps ranking in Civil Lines."
                      value={formData.objectives}
                      onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-sm focus:outline-none transition-colors ${
                        errors.objectives ? "border-red-500" : "border-white/10 focus:border-[#d4ff00]"
                      }`}
                    />
                    {errors.objectives && (
                      <p className="text-red-400 font-mono text-[10px] mt-1">{errors.objectives}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#d4ff00] hover:bg-white text-black font-display font-bold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 fill-black" />
                    <span>{isSubmitting ? "Dispatching..." : "Transmit Consultation Request"}</span>
                  </button>

                  <p className="font-mono text-[10px] text-slate-400 text-center leading-relaxed">
                    Direct 1-on-1 strategy session with founders Kaushal Sharma &amp; Akhilesh Sharma. 100% confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
