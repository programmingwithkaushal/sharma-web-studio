"use client";

import { siteConfig } from "@/site.config";
import {
  Code2,
  Rocket,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  HeartHandshake,
  Cpu,
  Layers,
  Award,
} from "lucide-react";
import MagneticButton from "./MagneticButton";
import LiquidCard from "./LiquidCard";

export default function Founders() {
  const whatsappMessage = encodeURIComponent(
    "Hi Kaushal & Akhilesh! I read about your studio and want to schedule a brief consultation regarding my business website."
  );

  return (
    <section id="founders" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 text-xs font-semibold mb-4 backdrop-blur-md">
            <HeartHandshake className="w-3.5 h-3.5 text-cyan-400" />
            <span>Executive Leadership</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Crafted by Visionary Engineers, <br className="hidden sm:inline" />
            <span className="text-aurora">Dedicated to Local Growth</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            You will never be outsourced to automated ticket queues or junior offshore temps. You partner
            directly with co-founders <strong>Kaushal Sharma</strong> and <strong>Akhilesh Sharma</strong> from
            initial blueprint to Google indexing.
          </p>
        </div>

        {/* Founders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Kaushal Sharma */}
          <LiquidCard glowColor="rgba(56, 189, 248, 0.2)" className="p-8 border-cyan-400/20 bg-[#070c19]/80 flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl p-[2px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 shrink-0">
                  <div className="w-full h-full bg-[#050812] rounded-[14px] flex items-center justify-center font-display font-bold text-2xl text-cyan-300">
                    KS
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">Kaushal Sharma</h3>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 mt-0.5">
                    Co-Founder & Lead Tech Architect
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300 mt-2 border border-cyan-400/20">
                    <Cpu className="w-3 h-3" /> Next.js • High-Speed Code • Local SEO
                  </span>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic border-l-2 border-cyan-400/40 pl-3">
                &ldquo;A sluggish, generic template repels customers before they ever visit your business.
                I personally engineer the technical foundation, guaranteeing sub-second loading speeds,
                clean Schema.org semantic data, and effortless mobile responsiveness.&rdquo;
              </blockquote>

              <div className="space-y-2 mb-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Architectural Pillars:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Next.js App Router Architecture",
                    "Google Schema.org & Local Citations",
                    "Sub-Second Core Web Vitals",
                    "WhatsApp API & Conversion Funnels",
                  ].map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.03] text-slate-300 border border-white/[0.08]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-[11px]">System Integrity</span>
              <span className="text-cyan-300 font-semibold flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-cyan-400" /> 100% Code Inspection
              </span>
            </div>
          </LiquidCard>

          {/* Akhilesh Sharma */}
          <LiquidCard glowColor="rgba(129, 140, 248, 0.2)" className="p-8 border-indigo-400/20 bg-[#080b18]/80 flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl p-[2px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shrink-0">
                  <div className="w-full h-full bg-[#050812] rounded-[14px] flex items-center justify-center font-display font-bold text-2xl text-indigo-300">
                    AS
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">Akhilesh Sharma</h3>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 mt-0.5">
                    Co-Founder & Growth Strategist
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-400/10 text-indigo-300 mt-2 border border-indigo-400/20">
                    <Rocket className="w-3 h-3" /> Client Strategy • Funnels • Local Trust
                  </span>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic border-l-2 border-indigo-400/40 pl-3">
                &ldquo;An aesthetic website without qualified calls and walk-ins is wasted investment.
                My mission is to structure clear conversion psychology, irresistible local trust signals, and
                smooth inquiry paths that transform visitors into committed, paying patrons.&rdquo;
              </blockquote>

              <div className="space-y-2 mb-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Strategic Pillars:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Local Customer Psychology",
                    "High-Intent Lead Routing",
                    "Reputation & Review Systems",
                    "Direct 24/7 Founder Advocacy",
                  ].map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.03] text-slate-300 border border-white/[0.08]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-[11px]">Client Partnership</span>
              <span className="text-indigo-300 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" /> Direct Founder Line
              </span>
            </div>
          </LiquidCard>
        </div>

        {/* The Founders' Personal Charter */}
        <LiquidCard glowColor="rgba(245, 158, 11, 0.15)" className="p-8 sm:p-10 border-amber-400/25 bg-[#0a0c16]/90 max-w-4xl mx-auto text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-bold mb-3 border border-amber-400/20">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>The Sharma Web Studio Operational Charter</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
            &ldquo;We Build Every Website As If Our Own Family Brand Depended On It.&rdquo;
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mb-8">
            Our three ironclad principles ensure you get maximum value with complete peace of mind.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mb-8">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="font-display font-bold text-sm text-white block mb-1">1. Direct Hotline</span>
              <span className="text-xs text-slate-400 leading-relaxed">
                You receive our personal mobile and WhatsApp lines. We answer questions directly.
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="font-display font-bold text-sm text-white block mb-1">2. Upfront Pricing</span>
              <span className="text-xs text-slate-400 leading-relaxed">
                Zero arbitrary add-ons or hidden annual surprises. You own your code and domain 100%.
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="font-display font-bold text-sm text-white block mb-1">3. Approval Guarantee</span>
              <span className="text-xs text-slate-400 leading-relaxed">
                Final payment is released only after you test and thoroughly approve the live preview.
              </span>
            </div>
          </div>

          <MagneticButton strength={20}>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-950/40 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect Personally with Kaushal & Akhilesh</span>
            </a>
          </MagneticButton>
        </LiquidCard>
      </div>
    </section>
  );
}
