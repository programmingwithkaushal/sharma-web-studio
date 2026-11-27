"use client";

import { motion } from "motion/react";
import { CheckCircle2, Shield, Zap, Compass, Users } from "lucide-react";

export default function StudioIntro() {
  const pillars = [
    {
      number: "01",
      title: "What We Build",
      description:
        "Bespoke high-performance web applications, fluid 3D digital experiences, high-converting retail catalogs, and local SEO engines engineered from scratch with Next.js.",
    },
    {
      number: "02",
      title: "Who We Build For",
      description:
        "Ambitious local business owners, specialty medical clinics, boutique luxury brands, fine dining establishments, and educational academies across Moradabad and India.",
    },
    {
      number: "03",
      title: "Why Independent Digital Ground",
      description:
        "Social media platforms change algorithms overnight and hike ad fees. A Google-indexed web property provides permanent organic authority, verified trust, and direct client access.",
    },
    {
      number: "04",
      title: "Performance & Conversion",
      description:
        "We unite visual grandeur with sub-second loading speeds, semantic Schema.org architecture, and 1-click WhatsApp conversion funnels that transform visitors into paying clients.",
    },
  ];

  return (
    <section id="studio" className="py-28 px-6 sm:px-12 relative z-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Editorial Subheading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#d4ff00]">
                Section 03 // Studio Introduction
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase max-w-2xl">
              Engineering Digital Authority for Local Market Leaders
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 max-w-sm uppercase tracking-wider">
            Sharma Web Studio is an independent creative technology practice founded by Kaushal Sharma &amp; Akhilesh Sharma.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-2xl bg-[#0c0e12]/80 border border-white/[0.08] hover:border-white/20 transition-all group backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#d4ff00] font-semibold tracking-wider">
                  [{pillar.number}]
                </span>
                <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#d4ff00] transition-colors" />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 4 Live Operational Metrics (Honest, verified metrics) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-[#14171f]/60 border border-white/[0.06] backdrop-blur-md">
          <div className="border-r border-white/5 pr-4">
            <div className="font-display font-black text-2xl sm:text-3xl text-white">5-7 Days</div>
            <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mt-1">Average Turnaround</div>
          </div>
          <div className="border-r border-white/5 pr-4 pl-2 sm:pl-4">
            <div className="font-display font-black text-2xl sm:text-3xl text-[#d4ff00]">100%</div>
            <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mt-1">Mobile &amp; Maps Ready</div>
          </div>
          <div className="border-r border-white/5 pr-4 pl-2 sm:pl-4">
            <div className="font-display font-black text-2xl sm:text-3xl text-white">Direct</div>
            <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mt-1">Founder Access</div>
          </div>
          <div className="pl-2 sm:pl-4">
            <div className="font-display font-black text-2xl sm:text-3xl text-[#e6c687]">Zero</div>
            <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mt-1">Unnecessary Jargon</div>
          </div>
        </div>
      </div>
    </section>
  );
}
