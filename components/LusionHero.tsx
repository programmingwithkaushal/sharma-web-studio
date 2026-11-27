"use client";

import { siteConfig } from "@/site.config";
import { ArrowUpRight, MessageCircle, Terminal } from "lucide-react";
import { motion } from "motion/react";

export default function LusionHero() {
  const whatsappMessage = encodeURIComponent(
    "Hi Kaushal & Akhilesh! I saw the Obscura Atelier experience on Sharma Web Studio and would like to start a project for my business."
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-36 sm:pt-44 pb-12 px-6 sm:px-12 select-none"
    >
      {/* 4 Technical Studio Crosshairs */}
      <div className="absolute top-28 left-6 sm:left-12 font-mono text-xs text-white/20 pointer-events-none">+</div>
      <div className="absolute top-28 right-6 sm:right-12 font-mono text-xs text-white/20 pointer-events-none">+</div>
      <div className="absolute bottom-14 left-6 sm:left-12 font-mono text-xs text-white/20 pointer-events-none">+</div>
      <div className="absolute bottom-14 right-6 sm:right-12 font-mono text-xs text-white/20 pointer-events-none">+</div>

      <div className="max-w-6xl mx-auto w-full my-auto text-left relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-[#191B1D] border border-white/15">
            <span className="w-1.5 h-1.5 bg-[#C5F36A] animate-pulse" />
            <span className="font-mono text-[10px] text-[#C5F36A] uppercase tracking-widest font-semibold">
              Obscura — Experimental Digital Atelier
            </span>
          </div>
          <span className="font-mono text-xs text-[#A5A5A0]">
            [ Moradabad &amp; Pan-India ]
          </span>
        </motion.div>

        {/* Hero Headline from Directive */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#F5F4F0] tracking-[-0.04em] leading-[0.98] uppercase max-w-5xl mb-8"
        >
          We don&apos;t just build websites. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F4F0] via-[#D1D5DB] to-[#C5F36A]">
            We build digital
          </span>{" "}
          advantages.
        </motion.h1>

        {/* Supporting Copy from Directive */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-6 border-t border-white/10"
        >
          <div className="md:col-span-7">
            <p className="text-base sm:text-lg text-[#A5A5A0] leading-relaxed font-normal max-w-xl">
              High-performance websites, immersive experiences and intelligent digital solutions
              for businesses ready to grow. Crafted by co-founders{" "}
              <strong className="text-[#F5F4F0] font-semibold">Kaushal Sharma</strong> &amp;{" "}
              <strong className="text-[#F5F4F0] font-semibold">Akhilesh Sharma</strong>.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-wrap items-center gap-4 md:justify-end">
            <a
              href="#work"
              data-cursor="WORK"
              className="btn-sharp px-7 py-3.5 rounded-none bg-[#F2F0E9] text-[#101112] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#C5F36A] shadow-2xl flex items-center gap-2"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={`https://wa.me/919389463924?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="WHATSAPP"
              className="btn-sharp px-6 py-3.5 rounded-none border border-white/20 bg-[#191B1D] text-[#F5F4F0] font-display font-bold text-xs uppercase tracking-wider hover:bg-white/10 hover:border-[#C5F36A] flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#C5F36A]" />
              <span>Start Your Project</span>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto w-full pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[11px] text-[#A5A5A0] tracking-wider uppercase relative z-10 border-t border-white/5">
        <div className="flex items-center gap-3">
          <Terminal className="w-3.5 h-3.5 text-[#C5F36A]" />
          <span>Obscura Sculpture Engine • Three.js WebGL (Drag to interact)</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden sm:inline text-white/40">Next.js 15 App Router</span>
          <span className="flex items-center gap-2 text-[#F5F4F0]">
            <span className="w-1.5 h-1.5 bg-[#C5F36A]" />
            Scroll to explore ↓
          </span>
        </div>
      </div>
    </section>
  );
}
