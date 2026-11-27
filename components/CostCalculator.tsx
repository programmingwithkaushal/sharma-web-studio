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
  Layers,
} from "lucide-react";
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
      bestFor: "Solo clinics, advocates, neighborhood retail shops",
      inclusions: ["1-Page Fast Landing Website", "Mobile & Tablet Responsive", "Click-to-Call & WhatsApp", "SSL Security Certificate"],
    },
    growth: {
      name: "Complete Business Growth",
      basePrice: 14999,
      days: "5 to 7 Days",
      bestFor: "Clinics, fine dining cafes, coaching institutes, service contractors",
      inclusions: ["Up to 5 Custom Pages", "Local SEO & Schema.org Setup", "Appointment & Inquiry Form", "Digital Menu / Catalog", "Founder Support"],
    },
    premium: {
      name: "Custom E-Commerce & Catalog",
      basePrice: 24999,
      days: "10 to 14 Days",
      bestFor: "High-volume retail boutiques, multi-service companies with checkout",
      inclusions: ["Full Catalog Architecture", "Payment Gateway Integration", "Dynamic Search & Filters", "Google Analytics Dashboard", "Priority 3 Months Support"],
    },
  };

  const addonsList = [
    {
      id: "google-maps",
      name: "Google Business Profile & Maps Architecture",
      price: 1000,
      badge: "HIGH ROI",
      desc: "Full Schema.org local citation markup to rank in local 'Near Me' neighborhood searches.",
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
      `• Total Investment: ${formatINR(totalPrice)}\n` +
      `• Delivery Timeline: ${currentTier.days}\n\n` +
      `I would like to proceed with this configuration for my business.`
  );

  return (
    <section id="calculator" className="py-28 px-6 sm:px-12 relative z-10 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#d4ff00]">
                Section 08 // Interactive Configurator
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
              Project Architecture &amp; Price Engine
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 max-w-sm uppercase tracking-wider">
            100% transparent pricing. Select your required architectural tier and optional modular enhancements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Tier Selection & Addons (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. Base Architecture Tier */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0e12]/80 border border-white/10 backdrop-blur-md">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                  Step 01: Select Base Architecture
                </span>
                <span className="font-mono text-xs text-[#d4ff00]">Fixed Upfront Quote</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(
                  [
                    { key: "starter", title: "Starter", price: 6999, tag: "1-Page", popular: false },
                    { key: "growth", title: "Complete Growth", price: 14999, tag: "Recommended", popular: true },
                    { key: "premium", title: "Custom E-Commerce", price: 24999, tag: "Full Catalog", popular: false },
                  ] as const
                ).map((t) => (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setSelectedTier(t.key)}
                    className={`p-5 rounded-2xl text-left border transition-all relative ${
                      selectedTier === t.key
                        ? "bg-white/[0.08] border-[#d4ff00] shadow-xl"
                        : "bg-white/[0.02] border-white/10 hover:border-white/25 hover:bg-white/[0.04]"
                    }`}
                  >
                    {t.popular && (
                      <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-[#d4ff00] text-black font-mono text-[9px] font-bold uppercase tracking-wider">
                        Popular
                      </span>
                    )}
                    <div className="font-display font-bold text-base text-white mb-1">
                      {t.title}
                    </div>
                    <div className="font-display font-extrabold text-2xl text-[#d4ff00] mb-2">
                      {formatINR(t.price)}
                    </div>
                    <div className="font-mono text-[11px] text-slate-400">
                      Est: {tiers[t.key].days}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">
                  Included in {currentTier.name}:
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentTier.inclusions.map((inc, iIdx) => (
                    <span
                      key={iIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-slate-300"
                    >
                      <Check className="w-3 h-3 text-[#d4ff00]" />
                      <span>{inc}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Optional Modular Enhancements */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c0e12]/80 border border-white/10 backdrop-blur-md">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                  Step 02: Optional Modular Enhancements
                </span>
                <span className="font-mono text-xs text-slate-400">Select as required</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                        isChecked
                          ? "bg-white/[0.08] border-[#d4ff00]/60 shadow-lg"
                          : "bg-white/[0.02] border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-display font-semibold text-sm text-white leading-snug">
                            {addon.name}
                          </h4>
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                              isChecked
                                ? "bg-[#d4ff00] border-[#d4ff00] text-black"
                                : "border-white/20"
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>
                        <p className="text-xs text-slate-400 mb-4 leading-relaxed font-normal">
                          {addon.desc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-white/5 font-mono text-xs">
                        <span className="text-[#d4ff00] font-bold">
                          +{formatINR(addon.price)}
                        </span>
                        {addon.badge && (
                          <span className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] text-slate-400">
                            {addon.badge}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Computation & WhatsApp Checkout (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="p-8 rounded-3xl bg-[#14171f]/90 border border-white/15 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4ff00]/10 rounded-full blur-[60px] pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 font-mono text-xs">
                <span className="text-slate-400 uppercase tracking-widest">Live Computation</span>
                <span className="text-[#d4ff00] font-semibold">Active Session</span>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 font-mono text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Base Architecture:</span>
                  <span className="text-white font-semibold">{formatINR(currentTier.basePrice)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Selected Enhancements:</span>
                  <span className="text-white font-semibold">{formatINR(addonsTotal)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Estimated Delivery:</span>
                  <span className="text-[#e6c687] font-semibold">{currentTier.days}</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="py-6 border-y border-white/10 mb-6">
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                  Total Investment Quote
                </div>
                <div className="font-display font-black text-4xl text-white tracking-tight">
                  {formatINR(totalPrice)}
                </div>
                <div className="font-mono text-[10px] text-slate-400 mt-1">
                  50% Advance • 50% Upon Client Approval
                </div>
              </div>

              {/* Instant WhatsApp Checkout CTA */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${generatedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-[#d4ff00] hover:bg-white text-black font-display font-bold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 mb-4"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Book This Build on WhatsApp</span>
              </a>

              <p className="font-mono text-[10px] text-slate-400 text-center leading-relaxed">
                Sends your configured architectural specifications directly to founders Kaushal Sharma &amp; Akhilesh Sharma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
