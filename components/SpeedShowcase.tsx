"use client";

import { motion } from "motion/react";
import { Zap, CheckCircle2, ShieldAlert, Cpu, Activity, Gauge } from "lucide-react";

export default function SpeedShowcase() {
  return (
    <section id="speed" className="py-28 px-6 sm:px-12 relative z-10 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#C5F36A]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#C5F36A]">
                Section 06 // Technical Architecture
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F4F0] tracking-tight uppercase max-w-2xl">
              Performance Engineering &amp; Core Web Vitals
            </h2>
          </div>
          <p className="font-mono text-xs text-[#A5A5A0] max-w-sm uppercase tracking-wider">
            Why custom Next.js engineering outperforms generic legacy CMS sites in user retention and Google search ranking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Bloated WordPress / Generic Builders */}
          <div className="p-8 sm:p-10 rounded-none bg-[#191B1D] border border-red-500/20 fast-ease">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase font-semibold">
                <ShieldAlert className="w-4 h-4" />
                <span>Typical Generic Website (WordPress / Wix)</span>
              </div>
              <span className="font-mono text-xs text-[#A5A5A0]">[ Legacy Arch ]</span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-400 shrink-0 mt-2" />
                <p className="text-sm text-[#A5A5A0]">
                  <strong className="text-[#F5F4F0] font-medium">Bloated Plugin Overhead:</strong> 30+ third-party PHP plugins that slow down mobile CPU execution.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-400 shrink-0 mt-2" />
                <p className="text-sm text-[#A5A5A0]">
                  <strong className="text-[#F5F4F0] font-medium">Poor Core Web Vitals:</strong> High Cumulative Layout Shift (CLS) causing buttons to jump while visitors tap.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-400 shrink-0 mt-2" />
                <p className="text-sm text-[#A5A5A0]">
                  <strong className="text-[#F5F4F0] font-medium">Security Vulnerabilities:</strong> Constant database hacking attempts and plugin update conflicts.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-400 shrink-0 mt-2" />
                <p className="text-sm text-[#A5A5A0]">
                  <strong className="text-[#F5F4F0] font-medium">High Mobile Bounce Rate:</strong> Mobile visitors abandon pages taking over 3 seconds to load.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-none bg-red-950/20 border border-red-900/30 font-mono text-xs text-red-300 flex items-center justify-between">
              <span>Average Mobile Load Time</span>
              <span className="font-bold">4.5s - 7.0s</span>
            </div>
          </div>

          {/* Sharma Web Studio Custom Architecture */}
          <div className="p-8 sm:p-10 rounded-none bg-[#191B1D] border border-[#C5F36A]/40 fast-ease relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10 relative z-10">
              <div className="flex items-center gap-2 text-[#C5F36A] font-mono text-xs uppercase font-semibold">
                <Zap className="w-4 h-4" />
                <span>Sharma Web Studio Engineering</span>
              </div>
              <span className="font-mono text-xs text-[#C5F36A] px-2 py-0.5 rounded-none bg-[#C5F36A]/10 border border-[#C5F36A]/30">
                Next.js 15
              </span>
            </div>

            <div className="space-y-4 mb-8 relative z-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C5F36A] shrink-0 mt-1" />
                <p className="text-sm text-[#A5A5A0]">
                  <strong className="text-[#F5F4F0] font-medium">Zero Bloatware:</strong> Hand-crafted React server components with minimal client JavaScript payload.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C5F36A] shrink-0 mt-1" />
                <p className="text-sm text-[#A5A5A0]">
                  <strong className="text-[#F5F4F0] font-medium">Sub-Second LCP Target:</strong> Largest Contentful Paint engineered under 1.2 seconds for rapid mobile render.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C5F36A] shrink-0 mt-1" />
                <p className="text-sm text-[#A5A5A0]">
                  <strong className="text-[#F5F4F0] font-medium">Global Cloud CDN Edge Delivery:</strong> Assets cached globally so local customers get instantaneous responses.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C5F36A] shrink-0 mt-1" />
                <p className="text-sm text-[#A5A5A0]">
                  <strong className="text-[#F5F4F0] font-medium">Built-In Google Structured Data:</strong> Semantic JSON-LD markup pre-configured for Google Knowledge Graph and Maps.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-none bg-[#C5F36A]/10 border border-[#C5F36A]/30 font-mono text-xs text-[#C5F36A] flex items-center justify-between relative z-10">
              <span>Engineered Mobile Render Target</span>
              <span className="font-bold text-[#F5F4F0]">&lt; 1.5s Worldwide</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-none bg-[#191B1D] border border-white/10 fast-ease">
            <Gauge className="w-6 h-6 text-[#C5F36A] mb-3" />
            <h4 className="font-display font-bold text-base text-[#F5F4F0] mb-1">Core Web Vitals</h4>
            <p className="text-xs text-[#A5A5A0]">Strict adherence to Google&apos;s LCP, FID, and CLS performance thresholds.</p>
          </div>
          <div className="p-6 rounded-none bg-[#191B1D] border border-white/10 fast-ease">
            <Cpu className="w-6 h-6 text-[#D1D5DB] mb-3" />
            <h4 className="font-display font-bold text-base text-[#F5F4F0] mb-1">Server Components</h4>
            <p className="text-xs text-[#A5A5A0]">Static generation and edge streaming minimize browser memory load.</p>
          </div>
          <div className="p-6 rounded-none bg-[#191B1D] border border-white/10 fast-ease">
            <Activity className="w-6 h-6 text-[#C5F36A] mb-3" />
            <h4 className="font-display font-bold text-base text-[#F5F4F0] mb-1">Image Pipelines</h4>
            <p className="text-xs text-[#A5A5A0]">Automatic WebP/AVIF formatting and responsive viewport delivery.</p>
          </div>
          <div className="p-6 rounded-none bg-[#191B1D] border border-white/10 fast-ease">
            <Zap className="w-6 h-6 text-[#D1D5DB] mb-3" />
            <h4 className="font-display font-bold text-base text-[#F5F4F0] mb-1">Conversion Architecture</h4>
            <p className="text-xs text-[#A5A5A0]">Faster speeds directly reduce cart abandonment and increase WhatsApp leads.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
