"use client";

import { useState } from "react";
import { siteConfig } from "@/site.config";
import {
  ArrowRight,
  MessageCircle,
  MapPin,
  Sparkles,
  Zap,
  ShieldCheck,
  Star,
  CheckCircle2,
  Clock,
  Lock,
  Stethoscope,
  Utensils,
  ShoppingBag,
  GraduationCap,
  Wrench,
  TrendingUp,
} from "lucide-react";
import MagneticButton from "./MagneticButton";
import { motion, AnimatePresence } from "motion/react";

export default function Hero() {
  const [activeNiche, setActiveNiche] = useState(0);

  const niches = [
    {
      id: "clinic",
      label: "Doctor & Clinic",
      icon: Stethoscope,
      brand: "Dr. Sharma Specialty Clinic",
      category: "Healthcare & Surgery",
      location: "Civil Lines Main Market",
      timing: "9:00 AM - 8:30 PM",
      rating: "4.9 / 5.0 (240+ Reviews)",
      service1: "Comprehensive Health Checkup",
      price1: "₹999",
      service2: "Direct Specialist OPD Consultation",
      tag: "Priority Booking",
      cta: "Book Appointment on WhatsApp",
      benefit: "Eliminates patient waiting queues & captures Google Search walk-ins",
    },
    {
      id: "restaurant",
      label: "Restaurant & Cafe",
      icon: Utensils,
      brand: "Royal Spice Kitchen & Lounge",
      category: "Fine Dining & Tandoor",
      location: "Station Road Central",
      timing: "11:00 AM - 11:00 PM",
      rating: "4.8 / 5.0 (520+ Reviews)",
      service1: "Chef's Signature Tandoori Platter",
      price1: "₹450",
      service2: "Family Table & Party Hall Reservation",
      tag: "0% Commission",
      cta: "Order Direct on WhatsApp",
      benefit: "Saves 25-35% Swiggy/Zomato commission with direct WhatsApp delivery",
    },
    {
      id: "retail",
      label: "Boutique & Retail",
      icon: ShoppingBag,
      brand: "Elegance Fashion & Sarees",
      category: "Bridal & Festive Wear",
      location: "Fashion Street Complex",
      timing: "10:30 AM - 9:00 PM",
      rating: "4.9 / 5.0 (310+ Reviews)",
      service1: "Handcrafted Bridal Collection 2026",
      price1: "New Arrival",
      service2: "Custom Tailoring & Fitting Consultation",
      tag: "In-Store Offer",
      cta: "Inquire Collection on WhatsApp",
      benefit: "Turns local foot traffic into year-round repeat buyers",
    },
    {
      id: "coaching",
      label: "Academy & Tuition",
      icon: GraduationCap,
      brand: "Target IIT-JEE & Medical Academy",
      category: "Foundation & Entrance Prep",
      location: "Knowledge Park Sector",
      timing: "8:00 AM - 7:30 PM",
      rating: "5.0 / 5.0 (180+ Reviews)",
      service1: "Class 11 & 12 Advanced Batch",
      price1: "Admissions Open",
      service2: "Free 3-Day Demo Class Registration",
      tag: "Limited Seats",
      cta: "Register for Demo Class",
      benefit: "Builds instant parent trust with verified student rank results",
    },
    {
      id: "contractor",
      label: "Home & Interior",
      icon: Wrench,
      brand: "Sharma Modular & Interiors",
      category: "Turnkey Home Renovation",
      location: "Service Area: Citywide",
      timing: "Mon - Sat: 9:00 AM - 8:00 PM",
      rating: "4.9 / 5.0 (140+ Reviews)",
      service1: "Luxury Modular Kitchen Design",
      price1: "Free 3D Layout",
      service2: "Complete False Ceiling & Electrical",
      tag: "Site Inspection",
      cta: "Book Free Site Inspection",
      benefit: "Positions you as the #1 trusted contractor over casual laborers",
    },
  ];

  const currentNiche = niches[activeNiche];

  const whatsappMessage = encodeURIComponent(
    "Hello Kaushal & Akhilesh! I want to transform my local business with a dedicated website."
  );

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden text-center">
      {/* Volumetric Aurora Glow Beams */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-600/20 via-cyan-500/15 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        {/* Top Status Capsule */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 text-xs font-semibold mb-6 backdrop-blur-xl shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Sharma Web Studio • Co-Founded by Kaushal Sharma & Akhilesh Sharma</span>
        </motion.div>

        {/* Center Stage Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] max-w-4xl mx-auto mb-6"
        >
          Transform Your Local Business <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-amber-200">
            Into A Digital Empire.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8 font-normal"
        >
          We engineer high-performance web systems that dominate Google Search, attract ready-to-pay
          local clients, and route confirmed inquiries straight to your personal WhatsApp with{" "}
          <strong className="text-white font-semibold">0% aggregator commission</strong>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
        >
          <MagneticButton strength={18}>
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-300 via-white to-amber-200 text-slate-950 font-display font-bold text-sm shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-[1.02]"
            >
              <span>Configure Your Website</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </MagneticButton>

          <MagneticButton strength={12}>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full liquid-glass hover:bg-white/[0.08] text-slate-200 hover:text-white font-semibold text-sm transition-all border border-white/10"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp with Founders</span>
            </a>
          </MagneticButton>
        </motion.div>

        {/* THE INTERACTIVE HOLOGRAPHIC SHOWCASE STAGE */}
        <div className="w-full max-w-4xl mx-auto relative mb-16">
          {/* Interactive Niche Selector Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            <div className="p-1.5 rounded-full liquid-glass border border-white/10 inline-flex gap-1.5">
              {niches.map((niche, idx) => {
                const Icon = niche.icon;
                const isActive = activeNiche === idx;
                return (
                  <button
                    key={niche.id}
                    onClick={() => setActiveNiche(idx)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{niche.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Central Interactive Smartphone Container */}
          <div className="relative mx-auto max-w-[440px]">
            {/* Holographic Specular Frame */}
            <div className="rounded-[40px] p-4 liquid-glass-elevated border border-white/15 shadow-2xl relative">
              {/* Internal Screen */}
              <div className="rounded-[32px] bg-[#050811] border border-white/10 p-5 text-left overflow-hidden relative">
                {/* Device Status Bar */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08] text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-[10px] text-slate-400 flex items-center gap-1">
                      <Lock className="w-3 h-3 text-emerald-400" />
                      <span>{currentNiche.id}.sharmawebstudio.com</span>
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-cyan-400 font-mono tracking-wider">LIVE MOCKUP</span>
                </div>

                {/* Animated Screen Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentNiche.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Brand Banner */}
                    <div className="mb-3.5">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-cyan-300 bg-cyan-400/10 px-2.5 py-0.5 rounded-full border border-cyan-400/20">
                        {currentNiche.category}
                      </span>
                      <h3 className="font-display text-lg font-bold text-white mt-1.5 leading-snug">
                        {currentNiche.brand}
                      </h3>
                      <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                        <span>{currentNiche.location} • {currentNiche.timing}</span>
                      </p>
                    </div>

                    {/* Verified Review Bar */}
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-3">
                      <div className="flex items-center gap-1.5">
                        <div className="flex text-amber-400 text-xs">
                          {"★".repeat(5)}
                        </div>
                        <span className="text-xs font-bold text-white font-mono">{currentNiche.rating}</span>
                      </div>
                      <span className="text-[10px] text-cyan-400 font-bold">Google Verified</span>
                    </div>

                    {/* Products / Offerings */}
                    <div className="space-y-2 mb-3.5">
                      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold text-white">{currentNiche.service1}</p>
                          <p className="text-[10px] text-slate-400">{currentNiche.tag}</p>
                        </div>
                        <span className="text-xs font-bold text-cyan-300 font-mono">{currentNiche.price1}</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold text-white">{currentNiche.service2}</p>
                          <p className="text-[10px] text-slate-400">Direct Online Scheduling</p>
                        </div>
                        <span className="text-xs font-bold text-emerald-400">Instant</span>
                      </div>
                    </div>

                    {/* WhatsApp Action */}
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(`Hi Kaushal & Akhilesh! I saw the "${currentNiche.label}" demo on your website and want to build a similar website.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 text-white font-bold text-center text-xs shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{currentNiche.cta}</span>
                    </a>

                    <p className="text-[10px] text-center text-slate-400 mt-2 italic">
                      ✨ {currentNiche.benefit}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Floating Widget 1: Google Maps Top Rank */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 sm:-left-10 px-4 py-3 rounded-2xl liquid-glass-elevated border border-blue-400/30 flex items-center gap-3 backdrop-blur-2xl shadow-2xl"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 text-white flex items-center justify-center font-display font-extrabold text-sm shadow-md">
                  #1
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-white block">Google Maps Dominance</span>
                  <span className="text-[10px] text-cyan-300 font-mono">Local SEO Schema.org</span>
                </div>
              </motion.div>

              {/* Floating Widget 2: 0% Commission Funnels */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 sm:-right-10 px-4 py-2.5 rounded-2xl liquid-glass-elevated border border-emerald-400/30 flex items-center gap-2.5 backdrop-blur-2xl shadow-2xl"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <div className="text-left">
                  <span className="text-xs font-bold text-emerald-300 font-mono">0% Commission</span>
                  <span className="text-[10px] text-slate-400 block">Direct WhatsApp Orders</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Live Metrics Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto pt-8 border-t border-white/[0.08]">
          {[
            { value: "5-7 Days", label: "Full Turnkey Delivery", icon: Clock },
            { value: "0.68s", label: "Ultra-Fast PageSpeed", icon: Zap },
            { value: "0%", label: "Third-Party Platform Tax", icon: ShieldCheck },
            { value: "100%", label: "Direct Founder Support", icon: CheckCircle2 },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-4 rounded-2xl liquid-glass border-white/5 text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span className="font-display font-extrabold text-xl text-white font-mono tracking-tight">
                    {item.value}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-medium">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
