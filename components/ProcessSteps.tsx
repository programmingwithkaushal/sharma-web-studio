"use client";

import { motion } from "motion/react";
import { MessageSquare, LayoutTemplate, Sliders, Rocket, Check } from "lucide-react";

export default function ProcessSteps() {
  const steps = [
    {
      step: "01",
      timeline: "Day 1",
      title: "Blueprint Strategy Session",
      desc: "30-minute discovery consultation with Kaushal & Akhilesh to understand your local clientele, menu/catalog scope, phone/WhatsApp routes, and competitor positioning.",
      icon: MessageSquare,
      deliverable: "Custom Site Architecture & Content Outline",
    },
    {
      step: "02",
      timeline: "Days 2 - 3",
      title: "Interactive Prototype",
      desc: "We build your live private preview staging site with high-performance Next.js 15, responsive layouts, 3D interactions, and 1-tap WhatsApp booking buttons.",
      icon: LayoutTemplate,
      deliverable: "Private Cloud Demo Link for Your Review",
    },
    {
      step: "03",
      timeline: "Days 4 - 5",
      title: "Precision Refinements",
      desc: "You test the live staging link on your own phone and PC. We refine copy, menu items, high-res photos, and consultation forms until you approve it 100%.",
      icon: Sliders,
      deliverable: "100% Client-Approved Production Build",
    },
    {
      step: "04",
      timeline: "Days 6 - 7",
      title: "Google Indexing & Launch",
      desc: "We connect your custom domain, install SSL certificates, submit your XML sitemap to Google Search Console, and verify your LocalBusiness schema.",
      icon: Rocket,
      deliverable: "Live on Google Search & Google Maps",
    },
  ];

  return (
    <section id="process" className="py-28 px-6 sm:px-12 relative z-10 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#C5F36A]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#C5F36A]">
                Section 11 // The White-Glove Roadmap
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F4F0] tracking-tight uppercase">
              The 4-Stage Development Roadmap
            </h2>
          </div>
          <p className="font-mono text-xs text-[#A5A5A0] max-w-sm uppercase tracking-wider">
            From initial strategy to Google Search Console indexing in a reliable 5 to 7 day delivery window.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 rounded-none bg-[#191B1D] border border-white/10 hover:border-[#C5F36A] fast-ease flex flex-col justify-between group relative cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-[#C5F36A] font-bold">
                      [{item.step}]
                    </span>
                    <span className="font-mono text-xs text-[#A5A5A0] px-2 py-0.5 rounded-none bg-white/5 border border-white/10">
                      {item.timeline}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-none bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#C5F36A] transition-colors">
                    <Icon className="w-6 h-6 text-[#C5F36A]" />
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F4F0] mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A5A5A0] leading-relaxed font-normal mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="font-mono text-[10px] text-[#A5A5A0] uppercase tracking-wider mb-1">
                    Stage Deliverable:
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-200">
                    <Check className="w-3.5 h-3.5 text-[#C5F36A] shrink-0" />
                    <span>{item.deliverable}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
