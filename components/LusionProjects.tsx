"use client";

import { useState } from "react";
import { siteConfig } from "@/site.config";
import { ArrowUpRight, MessageCircle, Layers, Check, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function LusionProjects() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: "clinic",
      number: "01",
      title: "Dr. Sharma Specialty Clinic",
      niche: "Healthcare & Surgical OPD",
      status: "Studio Prototype Architecture",
      description:
        "Engineered for multi-specialty practices needing direct patient appointment triage, OPD doctor schedules, Google Maps directions, and 1-click WhatsApp patient confirmations.",
      deliverables: ["Appointment Triage", "OPD Timetable", "Google Maps Schema", "Laser Treatment Catalog"],
      stack: "Next.js 15 • Tailwind CSS • Schema.org MedicalBusiness",
      color: "#0a131f",
      accent: "#38bdf8",
      cta: "Inquire for Clinic Architecture",
      previewData: {
        heading: "Painless Laser Care & Walk-In Consultation",
        badge: "Civil Lines Clinic Model",
        features: ["OPD Hours: 9:00 AM - 8:30 PM", "Direct Doctor WhatsApp Triage", "Instant Treatment Estimates"],
      },
    },
    {
      id: "restaurant",
      number: "02",
      title: "Royal Spice Tandoor & Lounge",
      niche: "Culinary & Fine Dining",
      status: "Studio Prototype Architecture",
      description:
        "Designed to liberate local restaurants from predatory 30% Swiggy and Zomato commissions through visual digital photo menus, direct WhatsApp table reservations, and party orders.",
      deliverables: ["Visual Photo Menu", "Direct WhatsApp Orders", "Table Reservation Funnel", "Event Booking"],
      stack: "Next.js 15 • Framer Motion • Dynamic Cart Engine",
      color: "#1a1208",
      accent: "#e6c687",
      cta: "Inquire for Restaurant Architecture",
      previewData: {
        heading: "Authentic North Indian & Tandoori Delicacies",
        badge: "0% Commission Direct Ordering",
        features: ["Chef's Special Platter Menu", "Table Booking with Time Slot", "Instant WhatsApp Order Routing"],
      },
    },
    {
      id: "boutique",
      number: "03",
      title: "Elegance Festive & Bridal Studio",
      niche: "Luxury Retail & Boutique",
      status: "Studio Prototype Architecture",
      description:
        "Transforms high-end boutiques and bridal shops into a 24/7 interactive lookbook with category filtering, bridal appointment scheduling, and real-time stock inquiries.",
      deliverables: ["Editorial Lookbook", "Bridal Appointment Engine", "WhatsApp Product Inquiries", "High-Res Gallery"],
      stack: "Next.js 15 • Responsive Grid • WhatsApp Catalog API",
      color: "#180f1d",
      accent: "#d4ff00",
      cta: "Inquire for Boutique Architecture",
      previewData: {
        heading: "Exclusive Handcrafted Festive & Bridal Collection",
        badge: "Interactive Digital Catalog",
        features: ["Zari & Silk Saree Lookbook", "Custom Fitting Appointments", "Instant Stock Verification"],
      },
    },
    {
      id: "academy",
      number: "04",
      title: "Target IIT-JEE & Medical Academy",
      niche: "Education & Coaching",
      status: "Studio Prototype Architecture",
      description:
        "Builds immediate parental trust for competitive institutes with verified topper galleries, downloadable syllabus previews, fee structures, and free demo class enrollments.",
      deliverables: ["Topper Wall of Fame", "Demo Class Registration", "Downloadable Syllabus", "Batch Timetables"],
      stack: "Next.js 15 • Automated Registration Form • SEO Ranking",
      color: "#0a1914",
      accent: "#34d399",
      cta: "Inquire for Academy Architecture",
      previewData: {
        heading: "Engineering & Medical Competitive Coaching",
        badge: "Batch Enrollment Platform",
        features: ["New Batches Starting Monday", "Download Syllabus & Fee Plan", "3-Day Free Demo Pass Form"],
      },
    },
    {
      id: "interiors",
      number: "05",
      title: "Sharma Modular & Interiors",
      niche: "Architecture & Home Trade",
      status: "Studio Prototype Architecture",
      description:
        "A heavy-duty architectural showcase for contractors, modular kitchen builders, and interior designers with before/after project sliders and on-site inspection requests.",
      deliverables: ["Before/After Sliders", "Material Specification", "Cost Estimator", "On-Site Inspection Form"],
      stack: "Next.js 15 • Three.js 3D Models • Lead Funnel",
      color: "#161616",
      accent: "#f97316",
      cta: "Inquire for Interiors Architecture",
      previewData: {
        heading: "Turnkey Modular Kitchens & Luxury Interiors",
        badge: "On-Site Inspection Model",
        features: ["Full Material Specifications", "3D Layout Visualizer", "Instant Site Visit Booking"],
      },
    },
  ];

  const current = projects[activeProject];

  return (
    <section id="work" className="py-32 px-6 sm:px-12 relative z-10 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#d4ff00]">
                Section 04 // Selected Work &amp; Prototypes
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
              Bespoke Digital Prototypes
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 max-w-sm uppercase tracking-wider">
            Engineered models for high-impact local industries. Honestly documented as studio architecture prototypes.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 rounded-2xl bg-[#0c0e12] border border-white/10 mb-12">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveProject(idx)}
              className={`py-3 px-4 rounded-xl text-left transition-all ${
                activeProject === idx
                  ? "bg-white/[0.08] border border-white/20 text-white shadow-lg"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.03]"
              }`}
            >
              <div className="font-mono text-[10px] text-slate-400 mb-1">
                [{proj.number}]
              </div>
              <div className="font-display font-bold text-xs sm:text-sm truncate">
                {proj.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Project Full Showcase Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-white/10 bg-[#0c0e12]/90 overflow-hidden shadow-2xl backdrop-blur-xl"
          >
            {/* Top Bar with Honest Prototype Status */}
            <div className="flex flex-wrap items-center justify-between px-6 sm:px-8 py-4 border-b border-white/10 bg-[#14171f]/60 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: current.accent }} />
                <span className="text-white font-semibold uppercase">{current.niche}</span>
                <span className="px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-[10px] text-slate-400">
                  {current.status}
                </span>
              </div>
              <div className="text-slate-400 text-[11px] hidden sm:block">
                {current.stack}
              </div>
            </div>

            <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Project Scope & Deliverables */}
              <div className="lg:col-span-7">
                <h3 className="font-display font-black text-2xl sm:text-4xl text-white mb-4 tracking-tight">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-8 max-w-xl">
                  {current.description}
                </p>

                {/* Key Deliverables Chips */}
                <div className="mb-8">
                  <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3">
                    Architectural Inclusions:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {current.deliverables.map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-200"
                      >
                        <Check className="w-3.5 h-3.5 text-[#d4ff00]" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(
                    `Hi Kaushal & Akhilesh! I am interested in the ${current.title} (${current.niche}) prototype architecture for my business.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-display font-bold text-xs uppercase tracking-wider hover:bg-[#d4ff00] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{current.cta}</span>
                </a>
              </div>

              {/* Right Column: Simulated Interactive UI Preview Frame */}
              <div className="lg:col-span-5">
                <div
                  className="rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden shadow-inner"
                  style={{ backgroundColor: current.color }}
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <span className="font-mono text-[10px] text-white/60 uppercase tracking-widest">
                      Live Wireframe Preview
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-[#d4ff00]">
                      {current.previewData.badge}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-display font-bold text-lg text-white leading-snug">
                      {current.previewData.heading}
                    </h4>

                    <div className="space-y-2 pt-2">
                      {current.previewData.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2 text-xs text-slate-300 font-mono"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                      <span>Google Maps Schema</span>
                      <span className="text-[#d4ff00] font-mono text-[11px]">Sub-Second LCP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
