"use client";

import { useState } from "react";
import { formatINR } from "@/lib/utils";
import { siteConfig } from "@/site.config";
import {
  Calculator,
  Check,
  MessageCircle,
  Clock,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import MagneticButton from "./MagneticButton";
import LiquidCard from "./LiquidCard";
import { motion } from "motion/react";

export default function CostCalculator() {
  const [selectedTier, setSelectedTier] = useState<"starter" | "growth" | "premium">("growth");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "whatsapp-funnel",
    "google-maps",
  ]);

  const tiers = {
    starter: {
      name: "Starter Single-Page Presence",
      basePrice: 6999,
      days: "3 to 4 Days",
      bestFor: "Individual clinics, solo advocates, neighborhood boutiques",
    },
    growth: {
      name: "Complete 5-Page Multi-Section",
      basePrice: 14999,
      days: "5 to 7 Days",
      bestFor: "Clinics, fine dining cafes, coaching institutes, service contractors",
    },
    premium: {
      name: "Bespoke E-Commerce & Catalog",
      basePrice: 24999,
      days: "10 to 14 Days",
      bestFor: "High-volume retail, multi-service companies with online checkout",
    },
  };

  const addonsList = [
    {
      id: "google-maps",
      name: "Google Business Profile & Maps Architecture",
      price: 1000,
      badge: "HIGH ROI",
      desc: "Full Schema.org citation markup to rank in local 'Near Me' neighborhood searches.",
    },
    {
      id: "whatsapp-funnel",
      name: "1-Click Direct WhatsApp Lead & Booking Engine",
      price: 1500,
      badge: "CONVERSION",
      desc: "Instant pre-filled client inquiries and appointment bookings direct to your phone.",
    },
    {
      id: "domain-hosting",
      name: "1 Year Custom Domain (.com / .in) + Global Cloud CDN",
      price: 2500,
      desc: "Turnkey enterprise setup with automated SSL security and 99.9% uptime.",
    },
    {
      id: "express-launch",
      name: "Express 72-Hour Fast-Track Deployment",
      price: 3000,
      desc: "Dedicated priority build queue to launch your site on Google in under 3 days.",
    },
  ];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const currentTier = tiers[selectedTier];
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const item = addonsList.find((a) => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const totalPrice = currentTier.basePrice + addonsTotal;

  const selectedAddonNames = selectedAddons
    .map((id) => addonsList.find((a) => a.id === id)?.name)
    .filter(Boolean)
    .join(", ");

  const generatedMessage = encodeURIComponent(
    `Hello Kaushal & Akhilesh! I configured my website estimate via your online configurator:\n\n` +
      `• Architecture: ${currentTier.name} (${formatINR(currentTier.basePrice)})\n` +
      (selectedAddonNames ? `• Add-ons: ${selectedAddonNames}\n` : "") +
      `• Estimated Investment: ${formatINR(totalPrice)}\n\n` +
      `Can we start discussing this project? My business name is: `
  );

  return (
    <section id="calculator" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 text-xs font-semibold mb-4 backdrop-blur-md">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Project Configurator</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Transparent Investment Architecture
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Zero ambiguity. Zero hidden retainers. Select your desired specifications and receive an
            instant investment breakdown backed by our founders&apos; satisfaction pledge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Selectors */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Base Tier */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-mono font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <h3 className="font-display text-lg font-bold text-white">Select Base Architecture</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(Object.keys(tiers) as Array<keyof typeof tiers>).map((key) => {
                  const t = tiers[key];
                  const isSelected = selectedTier === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedTier(key)}
                      className={`p-4 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                        isSelected
                          ? "liquid-glass-elevated border-cyan-400/40 text-white shadow-xl shadow-blue-900/20"
                          : "liquid-glass border-white/5 text-slate-400 hover:border-white/20"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-400/20 to-transparent pointer-events-none rounded-bl-3xl" />
                      )}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`text-[9px] font-bold uppercase tracking-wider ${isSelected ? "text-cyan-300" : "text-slate-400"}`}>
                            {key === "growth" ? "Recommended" : key}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                        </div>
                        <h4 className="font-display text-sm font-bold text-white mb-2 leading-snug">{t.name}</h4>
                        <p className="text-[11px] text-slate-400 mb-3 leading-relaxed">{t.bestFor}</p>
                      </div>
                      <div className="text-sm font-bold text-white font-mono pt-2 border-t border-white/[0.06]">
                        {formatINR(t.basePrice)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-ons */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-mono font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <h3 className="font-display text-lg font-bold text-white">Enhance With Strategic Capabilities</h3>
              </div>

              <div className="space-y-3">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center justify-between ${
                        isChecked
                          ? "liquid-glass-elevated border-cyan-400/30 shadow-lg"
                          : "liquid-glass border-white/5 hover:border-white/15"
                      }`}
                    >
                      <div className="flex items-start gap-3.5 pr-4">
                        <div
                          className={`w-5 h-5 rounded-lg mt-0.5 flex items-center justify-center border transition-all duration-200 ${
                            isChecked
                              ? "bg-cyan-500 border-cyan-400 text-slate-950"
                              : "border-white/20 bg-white/5"
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-white">{addon.name}</span>
                            {addon.badge && (
                              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                                {addon.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 mt-1">{addon.desc}</p>
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-cyan-300 font-mono shrink-0">
                        +{formatINR(addon.price)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Live Investment Card */}
          <div className="lg:col-span-5 sticky top-28">
            <LiquidCard glowColor="rgba(56, 189, 248, 0.25)" className="p-7 sm:p-8 border-cyan-400/30 bg-[#070b16]/95 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 block">
                    Total Estimated Investment
                  </span>
                  <span className="text-xs text-slate-400">All deliverables included</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-300 text-xs font-semibold border border-emerald-400/20 font-mono">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{currentTier.days}</span>
                </div>
              </div>

              {/* Price Display */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    {formatINR(totalPrice)}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">one-time investment</span>
                </div>
                <p className="text-xs text-emerald-300 font-medium mt-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>50% milestone advance • 50% upon your final launch approval</span>
                </p>
              </div>

              {/* Breakdown list */}
              <div className="space-y-2 py-4 border-y border-white/[0.08] mb-6 text-xs text-slate-300 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400">{currentTier.name}:</span>
                  <span className="font-bold text-white">{formatINR(currentTier.basePrice)}</span>
                </div>
                {selectedAddons.map((id) => {
                  const item = addonsList.find((a) => a.id === id);
                  if (!item) return null;
                  return (
                    <div key={id} className="flex justify-between">
                      <span className="text-slate-400">{item.name}:</span>
                      <span className="font-bold text-cyan-300">+{formatINR(item.price)}</span>
                    </div>
                  );
                })}
              </div>

              {/* WhatsApp Action */}
              <MagneticButton strength={15} className="w-full">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${generatedMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-center text-xs sm:text-sm shadow-xl shadow-emerald-950/50 flex items-center justify-center gap-2.5 transition-all mb-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Claim This Configuration on WhatsApp</span>
                </a>
              </MagneticButton>

              <p className="text-[11px] text-center text-slate-400">
                Direct consultation with founders <span className="text-slate-200 font-semibold">Kaushal Sharma</span> &{" "}
                <span className="text-slate-200 font-semibold">Akhilesh Sharma</span>. Zero pushy sales.
              </p>
            </LiquidCard>
          </div>
        </div>
      </div>
    </section>
  );
}
