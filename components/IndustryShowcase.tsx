"use client";

import { useState } from "react";
import { siteConfig } from "@/site.config";
import {
  Stethoscope,
  Utensils,
  ShoppingBag,
  GraduationCap,
  Wrench,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Clock,
  MapPin,
  Star,
  Sparkles,
  Lock,
} from "lucide-react";
import MagneticButton from "./MagneticButton";
import LiquidCard from "./LiquidCard";
import { motion, AnimatePresence } from "motion/react";

export default function IndustryShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope":
        return <Stethoscope className="w-4 h-4" />;
      case "Utensils":
        return <Utensils className="w-4 h-4" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-4 h-4" />;
      case "GraduationCap":
        return <GraduationCap className="w-4 h-4" />;
      case "Wrench":
        return <Wrench className="w-4 h-4" />;
      default:
        return <CheckCircle2 className="w-4 h-4" />;
    }
  };

  const current = siteConfig.industries[activeTab];

  const getWhatsAppForNiche = (nicheName: string) => {
    return encodeURIComponent(
      `Hi Kaushal & Akhilesh! I saw your live demo for "${nicheName}". I want to build a similar website for my business. Can we discuss?`
    );
  };

  return (
    <section id="demos" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 text-xs font-semibold mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Industry Portfolio</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered For Your Specific Industry
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We reject one-size-fits-all generic templates. Every system is specifically crafted around
            how customers make purchasing decisions in your niche.
          </p>
        </div>

        {/* Liquid Glass Tab Switcher */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          <div className="p-1.5 rounded-2xl liquid-glass inline-flex gap-2">
            {siteConfig.industries.map((item, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "text-white shadow-lg"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 border border-white/20 shadow-md shadow-blue-600/30"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{getIcon(item.icon)}</span>
                  <span className="relative z-10">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <LiquidCard glowColor="rgba(59, 130, 246, 0.15)" className="p-6 sm:p-10 border-white/10 bg-[#070b14]/90">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left: Strategic breakdown */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20 mb-4 inline-block">
                      {current.name} Blueprint
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                      {current.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                      Engineered to establish immediate clinical or commercial credibility, rank on Google Maps for
                      high-intent queries, and facilitate frictionless 1-tap WhatsApp lead capture.
                    </p>

                    <div className="space-y-3 mb-8">
                      {current.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-200 font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <MagneticButton strength={15}>
                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${getWhatsAppForNiche(current.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/25 transition-all text-center"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Build My {current.name} Site</span>
                      </a>
                    </MagneticButton>

                    <MagneticButton strength={10}>
                      <a
                        href="#calculator"
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white font-semibold text-xs border border-white/10 transition-all text-center"
                      >
                        <span>Calculate Cost</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </MagneticButton>
                  </div>
                </div>

                {/* Right: Live Interactive Business Mockup */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl bg-[#04060c] border border-white/10 p-5 shadow-2xl relative overflow-hidden">
                    {/* Simulated Browser chrome */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06] text-xs text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                        <span className="ml-2 font-mono text-[10px] text-slate-400 flex items-center gap-1">
                          <Lock className="w-3 h-3 text-emerald-400" />
                          <span>yourbusiness.com</span>
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400 font-semibold">
                        SSL 256-Bit
                      </span>
                    </div>

                    {/* Business content */}
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-cyan-300 bg-cyan-400/10 px-2 py-0.5 rounded-full">
                          {current.name} Verified Demo
                        </span>
                        <span className="text-xs text-amber-400 font-bold flex items-center gap-1 font-mono">
                          <Star className="w-3 h-3 fill-amber-400" />
                          4.9 / 5.0
                        </span>
                      </div>

                      <h4 className="font-display text-lg font-bold text-white mb-1">
                        {current.mockupPreview.title}
                      </h4>
                      <p className="text-xs text-slate-300 mb-3">
                        {current.mockupPreview.subtitle}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-slate-400 py-2 border-y border-white/[0.06] mb-4">
                        <span className="flex items-center gap-1 text-[11px]">
                          <Clock className="w-3.5 h-3.5 text-blue-400" /> Mon - Sat: 9am - 8:30pm
                        </span>
                        <span className="flex items-center gap-1 text-[11px]">
                          <MapPin className="w-3.5 h-3.5 text-red-400" /> Prime Market Center
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5 mb-4">
                        <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                          <span className="text-[9px] text-slate-400 uppercase font-semibold block">Discovery</span>
                          <span className="text-xs font-bold text-emerald-400">Google Verified</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                          <span className="text-[9px] text-slate-400 uppercase font-semibold block">Performance</span>
                          <span className="text-xs font-bold text-white font-mono">{current.mockupPreview.stats}</span>
                        </div>
                      </div>

                      <div className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-center text-xs shadow-md flex items-center justify-center gap-2">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{current.mockupPreview.ctaText}</span>
                      </div>
                    </div>

                    <div className="mt-3.5 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                      <span>Tailored with your actual brand colors & photography</span>
                      <span className="text-cyan-400 font-mono font-semibold">5-Day Launch</span>
                    </div>
                  </div>
                </div>
              </div>
            </LiquidCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
