"use client";

import { motion } from "motion/react";
import { CheckCircle2, Shield, Zap, Compass, Users } from "lucide-react";

export default function StudioIntro() {
  const pillars = [
    {
      number: "01",
      title: "Custom Engineering",
      description:
        "Bespoke high-performance web architectures engineered from scratch with Next.js 15, Three.js, and clean semantic markup. Zero pre-packaged bloated themes.",
    },
    {
      number: "02",
      title: "Business-First Thinking",
      description:
        "Every headline, CTA placement, and visual interaction is designed around direct customer conversion and local inquiry generation.",
    },
    {
      number: "03",
      title: "Performance & Speed",
      description:
        "Sub-second loading speeds, semantic Schema.org architecture, and optimized asset delivery that Google crawlers understand and rank effortlessly.",
    },
    {
      number: "04",
      title: "Customer Conversion",
      description:
        "Streamlined 1-click WhatsApp inquiry paths and direct contact funnels that turn casual visitors into confirmed appointments and clients.",
    },
  ];

  return (
    <section id="studio" className="py-28 px-6 sm:px-12 relative z-10 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Section Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#C5F36A]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#C5F36A]">
                Section 03 // Studio Introduction
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F4F0] tracking-tight uppercase max-w-2xl">
              Engineering Digital Authority for Local Market Leaders
            </h2>
          </div>
          <p className="font-mono text-xs text-[#A5A5A0] max-w-sm uppercase tracking-wider">
            Sharma Web Studio is an independent creative technology practice founded by Kaushal Sharma &amp; Akhilesh Sharma.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 rounded-none bg-[#191B1D] border border-white/[0.08] hover:border-[#C5F36A] fast-ease group cursor-default"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#C5F36A] font-semibold tracking-wider">
                  [{pillar.number}]
                </span>
                <span className="w-2 h-2 bg-white/20 group-hover:bg-[#C5F36A] transition-colors" />
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F4F0] mb-3 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-sm sm:text-base text-[#A5A5A0] leading-relaxed font-normal">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Strategic Warm Ivory Editorial Panel for Visual Contrast */}
        <div className="p-8 sm:p-12 rounded-none bg-[#F2F0E9] text-[#101112] border border-[#101112]/20 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#101112]/15 mb-8">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#101112]/60 font-semibold">
                Operational Guarantee
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#101112] mt-1 tracking-tight">
                Crafted by Visionary Engineers. Dedicated to Local Growth.
              </h3>
            </div>
            <span className="font-mono text-xs text-[#101112]/70 shrink-0">
              Moradabad, UP &amp; Pan-India
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-r border-[#101112]/10 pr-4">
              <div className="font-display font-black text-2xl sm:text-3xl text-[#101112]">5-7 Days</div>
              <div className="font-mono text-[11px] text-[#101112]/70 uppercase tracking-wider mt-1">
                Average Turnaround
              </div>
            </div>
            <div className="border-r border-[#101112]/10 pr-4 pl-2 sm:pl-4">
              <div className="font-display font-black text-2xl sm:text-3xl text-[#101112]">100%</div>
              <div className="font-mono text-[11px] text-[#101112]/70 uppercase tracking-wider mt-1">
                Mobile &amp; Maps Ready
              </div>
            </div>
            <div className="border-r border-[#101112]/10 pr-4 pl-2 sm:pl-4">
              <div className="font-display font-black text-2xl sm:text-3xl text-[#101112]">Direct</div>
              <div className="font-mono text-[11px] text-[#101112]/70 uppercase tracking-wider mt-1">
                Founder Access
              </div>
            </div>
            <div className="pl-2 sm:pl-4">
              <div className="font-display font-black text-2xl sm:text-3xl text-[#101112]">Zero</div>
              <div className="font-mono text-[11px] text-[#101112]/70 uppercase tracking-wider mt-1">
                Generic Templates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
