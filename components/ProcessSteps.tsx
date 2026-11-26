"use client";

import { MessageSquare, Palette, CheckCircle2, Rocket, Sparkles, ArrowRight } from "lucide-react";
import LiquidCard from "./LiquidCard";

export default function ProcessSteps() {
  const steps = [
    {
      num: "01",
      title: "Blueprint Strategy Session",
      desc: "Direct 15-minute consultation with Kaushal or Akhilesh. We extract your business goals, target customer profiles, and product/service menu.",
      icon: <MessageSquare className="w-5 h-5 text-cyan-400" />,
      timeline: "Day 1",
    },
    {
      num: "02",
      title: "Interactive Prototype in 48h",
      desc: "We engineer a live interactive preview. You open and test the real website directly on your personal smartphone to verify feel and speed.",
      icon: <Palette className="w-5 h-5 text-indigo-400" />,
      timeline: "Days 2 - 3",
    },
    {
      num: "03",
      title: "Precision Refinements",
      desc: "We integrate your real store photos, actual pricing list, credentials, and testimonials, refining every detail until you are completely thrilled.",
      icon: <CheckCircle2 className="w-5 h-5 text-teal-400" />,
      timeline: "Days 4 - 5",
    },
    {
      num: "04",
      title: "Google Indexing & Launch",
      desc: "We bind your custom domain, provision 256-bit SSL, inject Schema.org local business structured data, and submit your sitemap to Googlebot.",
      icon: <Rocket className="w-5 h-5 text-emerald-400" />,
      timeline: "Days 5 - 7",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 text-xs font-semibold mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>The White-Glove Journey</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Inception to Google in 5-7 Days
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We eliminate technical complexity. Getting your business website is as effortless as sending your
            photographs and pricing list over WhatsApp.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <LiquidCard
              key={idx}
              glowColor="rgba(56, 189, 248, 0.15)"
              className="p-6 border-white/10 bg-[#070b14]/70 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="font-mono text-2xl font-extrabold text-white/20">
                    {step.num}
                  </span>
                </div>

                <div className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  {step.timeline}
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>Phase {step.num}</span>
                <span className="text-emerald-400 font-semibold">100% Guided</span>
              </div>
            </LiquidCard>
          ))}
        </div>
      </div>
    </section>
  );
}
