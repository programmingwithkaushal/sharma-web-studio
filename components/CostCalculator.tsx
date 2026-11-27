"use client";

import { useState } from "react";
import { formatINR } from "@/lib/utils";
import { siteConfig } from "@/site.config";
import { Check, MessageCircle } from "lucide-react";

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
      desc: "Dedicated priority build queue to launch your site on Google in under 3 days (subject to content readiness).",
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#C5F36A]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#C5F36A]">
                Section 08 // Interactive Configurator
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F4F0] tracking-tight uppercase">
              Project Architecture &amp; Price Engine
            </h2>
          </div>
          <p className="font-mono text-xs text-[#A5A5A0] max-w-sm uppercase tracking-wider">
            100% transparent pricing. Select your required architectural tier and optional modular enhancements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-8">
            {/* Step 1: Base Tier */}
            <div className="p-6 sm:p-8 rounded-none bg-[#191B1D] border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#A5A5A0] uppercase tracking-widest">
                  Step 01: Select Base Architecture
                </span>
                <span className="font-mono text-xs text-[#C5F36A]">[ Fixed Upfront Quote ]</span>
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
                    className={`p-5 rounded-none text-left border fast-ease relative ${
                      selectedTier === t.key
                        ? "bg-white/[0.08] border-[#C5F36A] shadow-xl"
                        : "bg-white/[0.02] border-white/10 hover:border-white/25 hover:bg-white/[0.04]"
                    }`}
                  >
                    {t.popular && (
                      <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-none bg-[#C5F36A] text-[#101112] font-mono text-[9px] font-bold uppercase tracking-wider">
                        Popular
                      </span>
                    )}
                    <div className="font-display font-bold text-base text-[#F5F4F0] mb-1">
                      {t.title}
                    </div>
                    <div className="font-display font-extrabold text-2xl text-[#C5F36A] mb-2">
                      {formatINR(t.price)}
                    </div>
                    <div className="font-mono text-[11px] text-[#A5A5A0]">
                      Est: {tiers[t.key].days}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="font-mono text-xs text-[#A5A5A0] uppercase tracking-wider mb-2">
                  Included in {currentTier.name}:
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentTier.inclusions.map((inc, iIdx) => (
                    <span
                      key={iIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-white/[0.03] border border-white/10 text-xs text-slate-300"
                    >
                      <Check className="w-3 h-3 text-[#C5F36A]" />
                      <span>{inc}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2: Modular Enhancements */}
            <div className="p-6 sm:p-8 rounded-none bg-[#191B1D] border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#A5A5A0] uppercase tracking-widest">
                  Step 02: Optional Modular Enhancements
                </span>
                <span className="font-mono text-xs text-[#A5A5A0]">[ Modular Scope ]</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-5 rounded-none text-left border fast-ease flex flex-col justify-between ${
                        isChecked
                          ? "bg-white/[0.08] border-[#C5F36A]/60 shadow-lg"
                          : "bg-white/[0.02] border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-display font-semibold text-sm text-[#F5F4F0] leading-snug">
                            {addon.name}
                          </h4>
                          <div
                            className={`w-5 h-5 rounded-none border flex items-center justify-center shrink-0 transition-colors ${
                              isChecked
                                ? "bg-[#C5F36A] border-[#C5F36A] text-[#101112]"
                                : "border-white/20"
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>
                        <p className="text-xs text-[#A5A5A0] mb-4 leading-relaxed font-normal">
                          {addon.desc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-white/5 font-mono text-xs">
                        <span className="text-[#C5F36A] font-bold">
                          +{formatINR(addon.price)}
                        </span>
                        {addon.badge && (
                          <span className="px-1.5 py-0.5 rounded-none bg-white/5 text-[9px] text-[#A5A5A0]">
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

          {/* Right Column: Checkout Box */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="p-8 rounded-none bg-[#191B1D] border border-white/15 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 font-mono text-xs">
                <span className="text-[#A5A5A0] uppercase tracking-widest">Live Computation</span>
                <span className="text-[#C5F36A] font-semibold">[ Active Engine ]</span>
              </div>

              <div className="space-y-3 mb-6 font-mono text-xs">
                <div className="flex justify-between text-[#A5A5A0]">
                  <span>Base Architecture:</span>
                  <span className="text-[#F5F4F0] font-semibold">{formatINR(currentTier.basePrice)}</span>
                </div>
                <div className="flex justify-between text-[#A5A5A0]">
                  <span>Selected Enhancements:</span>
                  <span className="text-[#F5F4F0] font-semibold">{formatINR(addonsTotal)}</span>
                </div>
                <div className="flex justify-between text-[#A5A5A0]">
                  <span>Estimated Delivery:</span>
                  <span className="text-[#C5F36A] font-semibold">{currentTier.days}</span>
                </div>
              </div>

              <div className="py-6 border-y border-white/10 mb-6">
                <div className="font-mono text-[10px] text-[#A5A5A0] uppercase tracking-wider mb-1">
                  Total Investment Quote
                </div>
                <div className="font-display font-black text-4xl text-[#F5F4F0] tracking-tight">
                  {formatINR(totalPrice)}
                </div>
                <div className="font-mono text-[10px] text-[#A5A5A0] mt-1">
                  50% Advance • 50% Upon Client Approval
                </div>
              </div>

              <a
                href={`https://wa.me/919389463924?text=${generatedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sharp w-full py-4 rounded-none bg-[#C5F36A] hover:bg-[#F2F0E9] text-[#101112] font-display font-bold text-xs uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 mb-4"
              >
                <MessageCircle className="w-4 h-4 fill-[#101112]" />
                <span>Book This Build on WhatsApp</span>
              </a>

              <p className="font-mono text-[10px] text-[#A5A5A0] text-center leading-relaxed">
                Sends your configured architectural specifications directly to founders Kaushal Sharma &amp; Akhilesh Sharma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
