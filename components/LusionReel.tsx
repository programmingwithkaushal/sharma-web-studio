"use client";

import { useState } from "react";
import { siteConfig } from "@/site.config";
import { Play, Sparkles, CheckCircle2, ArrowUpRight, Zap, Shield, Globe } from "lucide-react";

export default function LusionReel() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-28 px-6 sm:px-12 relative z-10 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Section Top Header (Lusion Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs text-white/40 tracking-widest uppercase block mb-3">
              The Studio Philosophy
            </span>
            <h3 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight leading-[1.05]">
              Bold Ideas, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-amber-200">
                Brought To Life
              </span>
            </h3>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <p className="font-display text-lg sm:text-xl text-slate-200 leading-relaxed mb-6 font-normal">
              We combine design, motion, 3D, and local consumer psychology to build digital experiences
              that feel visually striking and technically seamless. We build work that captures attention
              and invites interaction.
            </p>

            <div className="flex items-center gap-6 font-mono text-xs text-white/60">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Zero Generic Templates
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                100% Handcrafted Code
              </span>
            </div>
          </div>
        </div>

        {/* Lusion Technical Video / Interactive Frame */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-black/80 backdrop-blur-3xl p-6 sm:p-10 shadow-2xl">
          {/* Top Crosshair Row */}
          <div className="flex items-center justify-between font-mono text-[10px] text-white/30 border-b border-white/10 pb-4 mb-8">
            <div className="flex items-center gap-4">
              <span>+ REC [00:05:24]</span>
              <span>• REAL-TIME WEBGL</span>
            </div>
            <div className="flex items-center gap-4">
              <span>SHARMA_STUDIO_REEL_2026.MP4</span>
              <span>100% QUALITY</span>
            </div>
          </div>

          {/* Center Interactive Reel Stage */}
          <div className="py-12 sm:py-20 flex flex-col items-center justify-center text-center relative z-10">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              data-cursor="PLAY"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 hover:bg-cyan-300 transition-all duration-300 shadow-2xl shadow-cyan-500/20 mb-6 group"
              aria-label="Play Reel"
            >
              <Play className="w-8 h-8 fill-black translate-x-0.5 group-hover:scale-110 transition-transform" />
            </button>

            <h4 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight mb-2">
              {isPlaying ? "Live Interactive Demonstration" : "Experience The Speed Difference"}
            </h4>
            <p className="font-mono text-xs text-white/50 max-w-md uppercase tracking-wider">
              {isPlaying
                ? "Click any interactive demo card above to inspect real-time response times."
                : "Watch how our websites load in under 0.7s and generate instant WhatsApp leads."}
            </p>
          </div>

          {/* Bottom Technical Indicators */}
          <div className="flex items-center justify-between font-mono text-[10px] text-white/30 border-t border-white/10 pt-4 mt-8">
            <div className="flex items-center gap-2 text-cyan-400">
              <Zap className="w-3.5 h-3.5" />
              <span>CORE WEB VITALS: 99/100</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <Globe className="w-3.5 h-3.5" />
              <span>GOOGLE SEARCH CONSOLE READY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
