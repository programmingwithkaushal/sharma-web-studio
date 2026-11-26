"use client";

import { siteConfig } from "@/site.config";
import { Check, MessageCircle, Sparkles, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import MagneticButton from "./MagneticButton";
import LiquidCard from "./LiquidCard";

export default function Pricing() {
  const getWhatsAppForPlan = (planName: string, price: string) => {
    return encodeURIComponent(
      `Hi Kaushal & Akhilesh! I want to proceed with the "${planName}" package (${price}). Can you share what details you need from me to begin?`
    );
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 text-xs font-semibold mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Honest & Transparent Tiers</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Clear Pricing. Immediate ROI.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            A single new high-value patient, private catering booking, or recurring retail patron pays for your
            entire website. Choose the tier engineered for your phase of growth.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {siteConfig.pricingPlans.map((plan) => {
            const isPopular = plan.popular;
            return (
              <LiquidCard
                key={plan.id}
                glowColor={isPopular ? "rgba(245, 158, 11, 0.25)" : "rgba(59, 130, 246, 0.15)"}
                className={`p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? "liquid-glass-elevated border-amber-400/40 bg-[#090d1c]/95 lg:-translate-y-3 shadow-2xl shadow-amber-950/20"
                    : "liquid-glass border-white/10 bg-[#070a14]/80"
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-[10px] uppercase tracking-wider shadow-lg">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-xl font-bold text-white tracking-tight">{plan.name}</h3>
                    <span className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      {plan.deliveryTime}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-white/[0.08]">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/ one-time</span>
                    </div>
                    <span className="text-[11px] text-emerald-300 font-medium block mt-1.5">
                      Zero recurring platform taxes • 100% full digital ownership
                    </span>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Standard Inclusions:
                    </p>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isPopular
                              ? "bg-amber-400/20 text-amber-300"
                              : "bg-white/10 text-cyan-400"
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs text-slate-200 leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <MagneticButton strength={15} className="w-full">
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${getWhatsAppForPlan(plan.name, plan.price)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-all ${
                        isPopular
                          ? "bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/20"
                          : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Select {plan.name}</span>
                    </a>
                  </MagneticButton>

                  <p className="text-[10px] text-center text-slate-400 mt-2.5">
                    Or tailor features in our{" "}
                    <a href="#calculator" className="text-cyan-400 underline underline-offset-2">
                      Online Configurator
                    </a>
                  </p>
                </div>
              </LiquidCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
