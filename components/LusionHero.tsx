"use client";

import { siteConfig } from "@/site.config";
import { ArrowUpRight, MessageCircle, Sparkles, Terminal } from "lucide-react";
import { motion } from "motion/react";

export default function LusionHero() {
  const whatsappMessage = encodeURIComponent(
    "Hi Kaushal & Akhilesh! I saw the Sharma Web Studio digital experience and would like to consult on an ambitious website for my business."
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-36 sm:pt-44 pb-12 px-6 sm:px-12 select-none"
    >
      {/* 4 Technical Studio Crosshairs (Architectural Registration Marks) */}
      <div className="absolute top-28 left-6 sm:left-12 font-mono text-xs text-white/20 pointer-events-none">+</div>
      <div className="absolute top-28 right-6 sm:right-12 font-mono text-xs text-white/20 pointer-events-none">+</div>
      <div className="absolute bottom-14 left-6 sm:left-12 font-mono text-xs text-white/20 pointer-events-none">+</div>
      <div className="absolute bottom-14 right-6 sm:right-12 font-mono text-xs text-white/20 pointer-events-none">+</div>

      {/* Hero Content Container */}
      <div className="max-w-6xl mx-auto w-full my-auto text-left relative z-10">
        {/* Studio Subheading Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
            <span className="font-mono text-[11px] text-[#d4ff00] uppercase tracking-widest font-semibold">
              Creative Technology Studio
            </span>
          </div>
          <span className="font-mono text-xs text-slate-400">
            Moradabad &amp; Pan-India
          </span>
        </motion.div>

        {/* Monumental Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white tracking-[-0.04em] leading-[0.98] uppercase max-w-5xl mb-8"
        >
          We build digital experiences that{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#e6c687]">
            move businesses
          </span>{" "}
          forward.
        </motion.h1>

        {/* Supporting Narrative & Dual CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-6 border-t border-white/10"
        >
          <div className="md:col-span-7">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
              High-performance websites, immersive digital experiences and
              conversion-focused technology for ambitious businesses. Built by
              co-founders <strong className="text-white font-semibold">Kaushal Sharma</strong> &amp;{" "}
              <strong className="text-white font-semibold">Akhilesh Sharma</strong>.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-wrap items-center gap-4 md:justify-end">
            <a
              href="#work"
              data-cursor="WORK"
              className="px-7 py-3.5 rounded-full bg-white text-black font-display font-bold text-xs uppercase tracking-wider hover:bg-[#d4ff00] transition-colors shadow-2xl flex items-center gap-2"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="WHATSAPP"
              className="px-6 py-3.5 rounded-full border border-white/20 bg-white/[0.03] text-white font-display font-bold text-xs uppercase tracking-wider hover:bg-white/10 hover:border-white/40 transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#d4ff00]" />
              <span>Talk to Founders</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Technical Status Ticker (Digital Sculpture Engine Active) */}
      <div className="max-w-6xl mx-auto w-full pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[11px] text-slate-400 tracking-wider uppercase relative z-10 border-t border-white/5">
        <div className="flex items-center gap-3">
          <Terminal className="w-3.5 h-3.5 text-[#d4ff00]" />
          <span>The Digital Sculpture Engine • Three.js WebGL (Drag to interact)</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden sm:inline text-slate-500">Next.js 15 App Router</span>
          <span className="flex items-center gap-2 text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
            Scroll to explore ↓
          </span>
        </div>
      </div>
    </section>
  );
}
