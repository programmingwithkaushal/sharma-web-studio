"use client";

import { XCircle, CheckCircle2, Sparkles, ArrowRight, ShieldAlert, Zap, Globe, TrendingUp } from "lucide-react";
import LiquidCard from "./LiquidCard";

export default function WhyWebsite() {
  const socialPitfalls = [
    {
      title: "Zero Google Search & Maps Presence",
      desc: "When urgent customers search 'best clinic near me' or 'catering in civil lines', social media posts rarely index. You lose ready-to-pay clients directly to competitors.",
    },
    {
      title: "Vanishes into the Algorithm Void",
      desc: "Stories disappear in 24 hours. Organic posts reach only 5% of your followers unless you spend money on daily boosted ads.",
    },
    {
      title: "Extortionate Aggregator Commissions",
      desc: "Delivery apps and booking platforms quietly siphon 20% to 35% commission out of every customer you serve.",
    },
    {
      title: "Zero Ownership of Your Customer Base",
      desc: "You rent your audience on social platforms. An arbitrary algorithm tweak or account suspension can extinguish your reach overnight.",
    },
  ];

  const studioAdvantages = [
    {
      title: "Prime Digital Real Estate on Google",
      desc: "We engineer structured Schema.org data and local citation signals so nearby searchers find your direct phone, directions, and hours first.",
    },
    {
      title: "Direct WhatsApp Funnels (0% Commission)",
      desc: "Every appointment, table booking, or catalog inquiry routes instantly to your personal phone. You retain 100% of your earnings.",
    },
    {
      title: "24/7 Silent Sales Machine",
      desc: "Your digital showroom works through the night—educating potential clients, displaying transparent pricing, and capturing qualified leads.",
    },
    {
      title: "Compounding Brand Equity",
      desc: "Your custom domain is permanent business property. Over time, your Google domain authority and customer reviews continuously increase in value.",
    },
  ];

  return (
    <section id="why-website" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 text-xs font-semibold mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Strategic Perspective</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Social Media is Rented Ground. <br className="hidden sm:inline" />
            <span className="text-aurora">A Website is Your Digital Property.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Most local businesses operate under the illusion that an Instagram handle or WhatsApp status is
            sufficient. Here is why market leaders invest in permanent Google infrastructure.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: The Ephemeral Social Trap */}
          <LiquidCard glowColor="rgba(239, 68, 68, 0.12)" className="p-7 sm:p-9 border-red-500/20 bg-[#090b14]/70">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/25 flex items-center justify-center text-red-400 shrink-0">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block">The Rented Platform</span>
                    <h3 className="font-display text-xl font-bold text-white">Social Media Alone</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {socialPitfalls.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-red-500/15">
                      <div className="flex items-start gap-3">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-white mb-1">{item.title}</h4>
                          <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-red-500/20 text-xs text-red-300/80 italic font-medium">
                Consequence: Up to 70% of high-intent Google searchers land on your competitors&apos; websites.
              </div>
            </div>
          </LiquidCard>

          {/* Right: The Sharma Web Studio Standard */}
          <LiquidCard glowColor="rgba(56, 189, 248, 0.2)" className="p-7 sm:p-9 border-cyan-400/30 bg-[#080d1d]/80 shadow-2xl">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 block">The Owned Asset</span>
                    <h3 className="font-display text-xl font-bold text-white">Sharma Web Studio Platform</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {studioAdvantages.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-cyan-400/20 hover:border-cyan-400/40 transition-colors">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-white mb-1">{item.title}</h4>
                          <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-cyan-400/20 flex items-center justify-between">
                <span className="text-xs text-emerald-300 font-bold flex items-center gap-1.5 font-mono">
                  <TrendingUp className="w-4 h-4" /> 300% Avg Lead Multiplier
                </span>
                <a
                  href="#pricing"
                  className="text-xs font-bold text-cyan-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Explore Packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </LiquidCard>
        </div>
      </div>
    </section>
  );
}
