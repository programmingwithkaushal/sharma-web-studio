"use client";

import { siteConfig } from "@/site.config";
import { ArrowUpRight, MessageCircle, Play } from "lucide-react";
import { motion } from "motion/react";

export default function LusionHero() {
  const whatsappMessage = encodeURIComponent(
    "Hi Kaushal & Akhilesh! I saw your Lusion-grade studio website and want to build a website for my business."
  );

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-36 sm:pt-44 pb-12 px-6 sm:px-12 select-none">
      {/* 4 Technical Studio Crosshairs (Lusion Signature Registration Marks) */}
      <div className="absolute top-28 left-6 sm:left-12 font-mono text-xs text-white/30 pointer-events-none">+</div>
      <div className="absolute top-28 right-6 sm:right-12 font-mono text-xs text-white/30 pointer-events-none">+</div>
      <div className="absolute bottom-12 left-6 sm:left-12 font-mono text-xs text-white/30 pointer-events-none">+</div>
      <div className="absolute bottom-12 right-6 sm:right-12 font-mono text-xs text-white/30 pointer-events-none">+</div>

      {/* Hero Content Container */}
      <div className="max-w-6xl mx-auto w-full my-auto text-left relative z-10">
        {/* Studio Subheading Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-xs text-cyan-300 uppercase tracking-widest">
            Creative Real-Time Studio • Moradabad & Pan-India
          </span>
        </motion.div>

        {/* Monumental Lusion Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white tracking-[-0.04em] leading-[0.98] uppercase max-w-5xl mb-8"
        >
          We create high-performance websites & digital experiences that help{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-amber-200">
            local brands stand out
          </span>
          .
        </motion.h1>

        {/* Lead Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-4 border-t border-white/10"
        >
          <div className="md:col-span-7">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
              Led by <strong className="text-white font-semibold">Kaushal Sharma</strong> &{" "}
              <strong className="text-white font-semibold">Akhilesh Sharma</strong>. We combine
              design, speed, 3D interaction, and conversion psychology to transform clinics, restaurants,
              boutiques, and local businesses into Google-ranked market leaders.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-wrap items-center gap-4 md:justify-end">
            <a
              href="#calculator"
              data-cursor="CONFIG"
              className="px-7 py-3.5 rounded-full bg-white text-black font-display font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-colors shadow-2xl flex items-center gap-2"
            >
              <span>Explore Configurator</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="WHATSAPP"
              className="px-6 py-3.5 rounded-full border border-white/30 text-white font-display font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Talk to Founders</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Architectural Bar (Lusion "Scroll to explore") */}
      <div className="max-w-6xl mx-auto w-full pt-8 flex items-center justify-between font-mono text-[11px] text-white/40 tracking-widest uppercase relative z-10 border-t border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span>Interactive 3D Physics Mesh Active (Drag to Rotate)</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="animate-pulse">Scroll to explore</span>
          <span>↓</span>
        </div>
      </div>
    </section>
  );
}
