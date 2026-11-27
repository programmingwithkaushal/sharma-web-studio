"use client";

import { motion } from "motion/react";
import { Zap, CheckCircle2, ShieldAlert, Cpu, Activity, Gauge } from "lucide-react";

export default function SpeedShowcase() {
  return (
    <section id="speed" className="py-28 px-6 sm:px-12 relative z-10 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#d4ff00]">
                Section 06 // Technical Architecture
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase max-w-2xl">
              Experience The Speed Difference
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 max-w-sm uppercase tracking-wider">
            Why custom Next.js engineering outperforms generic legacy CMS sites in user retention and Google search ranking.
          </p>
        </div>

        {/* Technical Side-by-Side Architectural Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Bloated WordPress / Generic Builders */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0c0e12]/80 border border-red-500/20 backdrop-blur-md">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase font-semibold">
                <ShieldAlert className="w-4 h-4" />
                <span>Typical Generic Website (WordPress / Wix)</span>
              </div>
              <span className="font-mono text-xs text-slate-400">Legacy Architecture</span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-2" />
                <p className="text-sm text-slate-300">
                  <strong className="text-white font-medium">Bloated Plugin Overhead:</strong> 30+ third-party PHP plugins that slow down mobile CPU execution.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-2" />
                <p className="text-sm text-slate-300">
                  <strong className="text-white font-medium">Poor Core Web Vitals:</strong> High Cumulative Layout Shift (CLS) causing buttons to jump while visitors tap.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-2" />
                <p className="text-sm text-slate-300">
                  <strong className="text-white font-medium">Frequent Security Vulnerabilities:</strong> Constant database hacking attempts and plugin update conflicts.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-2" />
                <p className="text-sm text-slate-300">
                  <strong className="text-white font-medium">High Mobile Bounce Rate:</strong> 53% of mobile shoppers abandon pages taking over 3 seconds to load.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30 font-mono text-xs text-red-300 flex items-center justify-between">
              <span>Average Mobile Load Time</span>
              <span className="font-bold">4.5s - 7.0s</span>
            </div>
          </div>

          {/* Sharma Web Studio Custom Architecture */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0c0e12]/80 border border-[#d4ff00]/30 backdrop-blur-md relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4ff00]/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10 relative z-10">
              <div className="flex items-center gap-2 text-[#d4ff00] font-mono text-xs uppercase font-semibold">
                <Zap className="w-4 h-4" />
                <span>Sharma Web Studio Engineering</span>
              </div>
              <span className="font-mono text-xs text-[#d4ff00] px-2 py-0.5 rounded bg-[#d4ff00]/10 border border-[#d4ff00]/20">
                Next.js 15
              </span>
            </div>

            <div className="space-y-4 mb-8 relative z-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#d4ff00] shrink-0 mt-1" />
                <p className="text-sm text-slate-300">
                  <strong className="text-white font-medium">Zero Bloatware:</strong> Hand-crafted React server components with minimal client JavaScript payload.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#d4ff00] shrink-0 mt-1" />
                <p className="text-sm text-slate-300">
                  <strong className="text-white font-medium">Sub-Second LCP Target:</strong> Largest Contentful Paint engineered under 1.2 seconds for rapid mobile render.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#d4ff00] shrink-0 mt-1" />
                <p className="text-sm text-slate-300">
                  <strong className="text-white font-medium">Global Cloud CDN Edge Delivery:</strong> Assets cached globally so local customers in Moradabad get instantaneous responses.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#d4ff00] shrink-0 mt-1" />
                <p className="text-sm text-slate-300">
                  <strong className="text-white font-medium">Built-In Google Structured Data:</strong> Semantic JSON-LD markup pre-configured for Google Knowledge Graph and Maps.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#d4ff00]/10 border border-[#d4ff00]/30 font-mono text-xs text-[#d4ff00] flex items-center justify-between relative z-10">
              <span>Engineered Mobile Render Target</span>
              <span className="font-bold text-white">&lt; 1.5s Worldwide</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Performance Engineering */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#14171f]/60 border border-white/5">
            <Gauge className="w-6 h-6 text-[#d4ff00] mb-3" />
            <h4 className="font-display font-bold text-base text-white mb-1">Core Web Vitals</h4>
            <p className="text-xs text-slate-400">Strict adherence to Google&apos;s LCP, FID, and CLS performance thresholds.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#14171f]/60 border border-white/5">
            <Cpu className="w-6 h-6 text-[#e6c687] mb-3" />
            <h4 className="font-display font-bold text-base text-white mb-1">Server Components</h4>
            <p className="text-xs text-slate-400">Static generation and edge streaming minimize browser memory load.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#14171f]/60 border border-white/5">
            <Activity className="w-6 h-6 text-cyan-400 mb-3" />
            <h4 className="font-display font-bold text-base text-white mb-1">Image Pipelines</h4>
            <p className="text-xs text-slate-400">Automatic WebP/AVIF formatting and responsive srcset viewport delivery.</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#14171f]/60 border border-white/5">
            <Zap className="w-6 h-6 text-emerald-400 mb-3" />
            <h4 className="font-display font-bold text-base text-white mb-1">Conversion Architecture</h4>
            <p className="text-xs text-slate-400">Faster speeds directly reduce cart abandonment and increase WhatsApp leads.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
