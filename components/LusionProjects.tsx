"use client";

import { useState } from "react";
import { siteConfig } from "@/site.config";
import { ArrowUpRight, MessageCircle, MapPin, Star, Clock, Lock, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function LusionProjects() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: "clinic",
      number: "01",
      title: "Dr. Sharma Specialty Clinic",
      niche: "Healthcare & Surgical OPD",
      deliverables: "concept • web • google seo • appointment engine • 3d",
      stats: "4.9 ★ (240+ Reviews)",
      location: "Civil Lines Main Market",
      timing: "9:00 AM - 8:30 PM",
      previewHeadline: "Painless Laser Care & Walk-In Appointments",
      offering1: "Comprehensive Dental & Health Checkup",
      offering2: "Direct Specialist Consultation",
      color: "#0a192f",
      accent: "#38bdf8",
      cta: "Book Appointment on WhatsApp",
    },
    {
      id: "restaurant",
      number: "02",
      title: "Royal Spice Tandoor & Lounge",
      niche: "Culinary & Fine Dining",
      deliverables: "web • digital menu • 0% commission delivery • whatsapp ordering",
      stats: "4.8 ★ (520+ Reviews)",
      location: "Station Road Central",
      timing: "11:00 AM - 11:00 PM",
      previewHeadline: "Authentic North Indian & Tandoori Delicacies",
      offering1: "Chef's Special Tandoor Platter",
      offering2: "Family Table & Party Hall Booking",
      color: "#1f1307",
      accent: "#f59e0b",
      cta: "Order Direct via WhatsApp",
    },
    {
      id: "boutique",
      number: "03",
      title: "Elegance Festive & Bridal Studio",
      niche: "Luxury Retail & Fashion",
      deliverables: "concept • brand • interactive catalog • in-store direction",
      stats: "4.9 ★ (310+ Reviews)",
      location: "Fashion Street Complex",
      timing: "10:30 AM - 9:00 PM",
      previewHeadline: "Exclusive Handcrafted Bridal Collection 2026",
      offering1: "Designer Silk & Zari Sarees",
      offering2: "Custom Fitting Consultation",
      color: "#1c0d1c",
      accent: "#e879f9",
      cta: "Inquire Collection on WhatsApp",
    },
    {
      id: "academy",
      number: "04",
      title: "Target IIT-JEE & Medical Academy",
      niche: "Education & Coaching",
      deliverables: "platform • results showcase • demo registrations • syllabus",
      stats: "5.0 ★ (180+ Reviews)",
      location: "Knowledge Park Sector",
      timing: "8:00 AM - 7:30 PM",
      previewHeadline: "10+ Years of Proven Top Rankers in JEE & NEET",
      offering1: "Class 11 & 12 Advanced Batch",
      offering2: "Free 3-Day Demo Class",
      color: "#091a18",
      accent: "#34d399",
      cta: "Register for Demo Class",
    },
    {
      id: "interiors",
      number: "05",
      title: "Sharma Modular & Interiors",
      niche: "Architecture & Home Trade",
      deliverables: "web • 3d layout • quote estimator • license verification",
      stats: "4.9 ★ (140+ Reviews)",
      location: "Citywide Service",
      timing: "Mon - Sat: 9:00 AM - 8:00 PM",
      previewHeadline: "Turnkey Modular Kitchens & Luxury Home Interiors",
      offering1: "Complete Kitchen Architecture",
      offering2: "Free On-Site Inspection",
      color: "#181414",
      accent: "#f97316",
      cta: "Schedule Free Site Inspection",
    },
  ];

  const current = projects[activeProject];

  return (
    <section id="demos" className="py-32 px-6 sm:px-12 relative z-10 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Section Header (Lusion Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <span className="font-mono text-xs text-white/40 tracking-widest uppercase block mb-3">
              Selected Deployments
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
              Featured Work
            </h2>
          </div>
          <p className="font-mono text-xs text-white/60 max-w-md uppercase tracking-wider leading-relaxed">
            A selection of high-converting digital storefronts engineered for ambitious local brands and businesses.
          </p>
        </div>

        {/* Project List */}
        <div className="flex flex-col border-t border-white/10">
          {projects.map((project, idx) => {
            const isActive = activeProject === idx;
            return (
              <div
                key={project.id}
                onMouseEnter={() => setActiveProject(idx)}
                onClick={() => setActiveProject(idx)}
                data-cursor="VIEW"
                className="group py-8 sm:py-12 border-b border-white/10 cursor-pointer transition-colors duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left: Deliverables & Title */}
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
                      {project.deliverables}
                    </span>
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-cyan-400 font-bold">
                        {project.number}
                      </span>
                      <h3 className={`font-display font-black text-2xl sm:text-4xl uppercase tracking-tight transition-colors ${
                        isActive ? "text-white" : "text-white/70 group-hover:text-white"
                      }`}>
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right: Niche Pill & Arrow */}
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-white/60 uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                      {project.niche}
                    </span>
                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isActive ? "bg-white text-black border-white" : "border-white/20 text-white group-hover:border-white"
                    }`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Live Mockup Drawer when active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden pt-8 mt-6"
                    >
                      <div className="rounded-3xl p-6 sm:p-8 border border-white/15 bg-black/60 backdrop-blur-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                          {/* Live Specs */}
                          <div className="lg:col-span-7 flex flex-col justify-between">
                            <div>
                              <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block mb-2">
                                Google Local SEO & Conversion Architecture
                              </span>
                              <h4 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                                {project.previewHeadline}
                              </h4>
                              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                                Fully synchronized with Google Maps citations and direct WhatsApp routing,
                                ensuring zero middleman commissions on every booking.
                              </p>

                              <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                                  <span className="text-[10px] text-white/40 block">PRIMARY OFFERING</span>
                                  <span className="text-white font-semibold">{project.offering1}</span>
                                </div>
                                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                                  <span className="text-[10px] text-white/40 block">CUSTOMER ACCESS</span>
                                  <span className="text-emerald-400 font-semibold">{project.offering2}</span>
                                </div>
                              </div>
                            </div>

                            <a
                              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(`Hi Kaushal & Akhilesh! I want to build a website similar to "${project.title}".`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-display font-bold text-xs uppercase tracking-wider transition-all w-fit"
                            >
                              <MessageCircle className="w-4 h-4 fill-black" />
                              <span>{project.cta}</span>
                            </a>
                          </div>

                          {/* Device Preview Capsule */}
                          <div className="lg:col-span-5">
                            <div className="rounded-2xl p-4 border border-white/15 bg-[#050811] text-left">
                              <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 font-mono text-[10px] text-white/40">
                                <span className="flex items-center gap-1.5 text-white/70">
                                  <Lock className="w-3 h-3 text-emerald-400" />
                                  <span>{project.id}.com</span>
                                </span>
                                <span className="text-cyan-400 font-bold">{project.stats}</span>
                              </div>
                              <h5 className="font-display font-bold text-sm text-white">{project.title}</h5>
                              <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-1">
                                <MapPin className="w-3 h-3 text-red-400" />
                                <span>{project.location} • {project.timing}</span>
                              </p>
                              <div className="mt-4 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                                <span className="text-xs font-bold text-emerald-300 font-mono">
                                  ⚡ Sub-Second Google PageSpeed Certified
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
