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

    const dispatchMessage = encodeURIComponent(
      `New Consultation Request from Sharma Web Studio Website:\n\n` +
        `• Name: ${formData.fullName.trim()}\n` +
        `• Phone/WhatsApp: ${formData.phone.trim()}\n` +
        `• Business: ${formData.businessName.trim()}\n` +
        `• Category: ${formData.category}\n` +
        `• Project Objectives: ${formData.objectives.trim()}\n\n` +
        `Submitted via sharma-web-studio.vercel.app`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const waUrl = `https://wa.me/919389463924?text=${dispatchMessage}`;
      window.open(waUrl, "_blank");
    }, 600);
  };

  return (
    <section id="contact" className="py-28 px-6 sm:px-12 relative z-10 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#C5F36A]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#C5F36A]">
                Section 14 // Consultation Terminal
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F4F0] tracking-tight uppercase">
              Initiate Your Project
            </h2>
          </div>
          <p className="font-mono text-xs text-[#A5A5A0] max-w-sm uppercase tracking-wider">
            Direct access to founders Kaushal Sharma &amp; Akhilesh Sharma. Receive an architectural proposal within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Touchpoint Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary WhatsApp Card */}
            <a
              href="https://wa.me/919389463924?text=Hi%20Kaushal%20%26%20Akhilesh!%20I%20would%20like%20to%20schedule%20an%20introductory%20consultation%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-none bg-[#191B1D] border border-[#C5F36A]/40 hover:border-[#C5F36A] fast-ease flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-none bg-[#C5F36A]/10 border border-[#C5F36A]/30 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#C5F36A]" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#C5F36A] uppercase tracking-wider font-semibold">
                    [ Official WhatsApp Hotline ]
                  </div>
                  <div className="font-display font-bold text-base text-[#F5F4F0]">+91 9389463924</div>
                  <div className="font-mono text-xs text-[#A5A5A0]">Direct Founder Response</div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#C5F36A] transition-colors" />
            </a>

            {/* Both Founder Telephone Numbers */}
            <div className="p-6 rounded-none bg-[#191B1D] border border-white/10 fast-ease space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                <Phone className="w-4 h-4 text-[#C5F36A]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#A5A5A0]">
                  [ Direct Founder Telephones ]
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#A5A5A0]">Kaushal Sharma (Tech Lead):</div>
                  <a href="tel:+919389463924" className="font-display font-bold text-sm text-[#F5F4F0] hover:text-[#C5F36A]">
                    +91 9389463924
                  </a>
                </div>
                <span className="font-mono text-[10px] text-[#A5A5A0]">[ Engineering ]</span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <div>
                  <div className="text-xs text-[#A5A5A0]">Akhilesh Sharma (Growth Lead):</div>
                  <a href="tel:+917668614225" className="font-display font-bold text-sm text-[#F5F4F0] hover:text-[#C5F36A]">
                    +91 7668614225
                  </a>
                </div>
                <span className="font-mono text-[10px] text-[#A5A5A0]">[ Strategy ]</span>
              </div>
            </div>

            {/* Official Founder Emails */}
            <div className="p-6 rounded-none bg-[#191B1D] border border-white/10 fast-ease space-y-3">
              <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                <Mail className="w-4 h-4 text-[#C5F36A]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#A5A5A0]">
                  [ Official Email Channels ]
                </span>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div>
                  <div className="text-[10px] text-[#A5A5A0]">Technical Proposals:</div>
                  <a href="mailto:kaushal.sharma.aiml@gmail.com" className="text-[#F5F4F0] hover:text-[#C5F36A]">
                    kaushal.sharma.aiml@gmail.com
                  </a>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <div className="text-[10px] text-[#A5A5A0]">Strategy &amp; Inquiries:</div>
                  <a href="mailto:sh2005.akhilesh@gmail.com" className="text-[#F5F4F0] hover:text-[#C5F36A]">
                    sh2005.akhilesh@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Hours */}
            <div className="p-6 rounded-none bg-[#191B1D] border border-white/10 fast-ease space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#C5F36A]" />
                <span className="font-mono text-xs text-slate-300">{siteConfig.contact.city}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#D1D5DB]" />
                <span className="font-mono text-xs text-slate-300">{siteConfig.contact.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-none bg-[#191B1D] border border-white/15 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-none bg-[#C5F36A]/10 border border-[#C5F36A]/30 flex items-center justify-center mx-auto text-[#C5F36A]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-[#F5F4F0]">
                    Consultation Request Formatted
                  </h3>
                  <p className="text-sm text-[#A5A5A0] max-w-md mx-auto">
                    Your request has been routed directly to founders Kaushal Sharma &amp; Akhilesh Sharma on WhatsApp (+91 9389463924).
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
                    className="mt-4 px-6 py-2.5 rounded-none border border-white/20 text-xs font-mono uppercase tracking-wider text-[#A5A5A0] hover:text-[#F5F4F0] hover:border-white fast-ease"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 font-mono text-xs">
                    <span className="text-[#A5A5A0] uppercase tracking-widest">[ Consultation Blueprint Form ]</span>
                    <span className="text-[#C5F36A]">Response Within 24h</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-[#A5A5A0] uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dr. Ramesh Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-none bg-[#101112] border text-[#F5F4F0] text-sm focus:outline-none fast-ease ${
                          errors.fullName ? "border-red-500" : "border-white/15 focus:border-[#C5F36A]"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-red-400 font-mono text-[10px] mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-[#A5A5A0] uppercase tracking-wider mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 9389463924"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-none bg-[#101112] border text-[#F5F4F0] text-sm focus:outline-none fast-ease ${
                          errors.phone ? "border-red-500" : "border-white/15 focus:border-[#C5F36A]"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-400 font-mono text-[10px] mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-[#A5A5A0] uppercase tracking-wider mb-2">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. City Laser Dental Clinic"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-none bg-[#101112] border text-[#F5F4F0] text-sm focus:outline-none fast-ease ${
                          errors.businessName ? "border-red-500" : "border-white/15 focus:border-[#C5F36A]"
                        }`}
                      />
                      {errors.businessName && (
                        <p className="text-red-400 font-mono text-[10px] mt-1">{errors.businessName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-[#A5A5A0] uppercase tracking-wider mb-2">
                        Industry Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-none bg-[#101112] border border-white/15 text-[#F5F4F0] text-sm focus:outline-none focus:border-[#C5F36A] fast-ease"
                      >
                        {categories.map((cat, cIdx) => (
                          <option key={cIdx} value={cat} className="bg-[#101112] text-white">
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#A5A5A0] uppercase tracking-wider mb-2">
                      Project Objectives &amp; Requirements *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="e.g. We need a 5-page website with online appointment booking on WhatsApp and Google Maps ranking in Civil Lines."
                      value={formData.objectives}
                      onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
                      className={`w-full px-4 py-3 rounded-none bg-[#101112] border text-[#F5F4F0] text-sm focus:outline-none fast-ease ${
                        errors.objectives ? "border-red-500" : "border-white/15 focus:border-[#C5F36A]"
                      }`}
                    />
                    {errors.objectives && (
                      <p className="text-red-400 font-mono text-[10px] mt-1">{errors.objectives}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-sharp w-full py-4 rounded-none bg-[#C5F36A] hover:bg-[#F2F0E9] text-[#101112] font-display font-bold text-xs uppercase tracking-wider shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 fill-[#101112]" />
                    <span>{isSubmitting ? "Dispatching..." : "Transmit Consultation Request"}</span>
                  </button>

                  <p className="font-mono text-[10px] text-[#A5A5A0] text-center leading-relaxed">
                    Direct 1-on-1 strategy session with founders Kaushal Sharma (+91 9389463924) &amp; Akhilesh Sharma (+91 7668614225).
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
