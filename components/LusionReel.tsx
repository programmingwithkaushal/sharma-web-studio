"use client";

import { motion } from "motion/react";
import { Sparkles, Terminal, Cpu, Target, Compass, Zap } from "lucide-react";

export default function LusionReel() {
  const philosophies = [
    {
      icon: Terminal,
      title: "Zero Generic Templates",
      desc: "We reject bloated, cookie-cutter WordPress themes. Every line of markup and CSS is custom-engineered specifically for your brand.",
    },
    {
      icon: Cpu,
      title: "Handcrafted Engineering",
      desc: "Built on modern Next.js 15 App Router and React 19, delivering clean server-rendered architectures that Google crawlers understand and rank effortlessly.",
    },
    {
      icon: Target,
      title: "Conversion-Focused Design",
      desc: "Aesthetics must serve revenue. Every headline, button placement, and visual interaction is designed around direct customer conversion and local inquiry generation.",
    },
    {
      icon: Compass,
      title: "Modern Web Architecture",
      desc: "State-of-the-art component systems with clean TypeScript, accessible semantic markup, and hardware-accelerated 3D shaders.",
    },
    {
      icon: Zap,
      title: "Performance & Accessibility",
      desc: "Optimized image pipelines, zero bloatware scripts, and lightweight WebGL rendering ensure immediate loading and WCAG AA accessibility.",
    },
    {
      icon: Sparkles,
      title: "Thoughtful User Experience",
      desc: "Micro-interactions, accessible typography hierarchy, and effortless touch controls designed for 360px mobile viewports up to 1920px displays.",
    },
  ];

  return (
    <section id="philosophy" className="py-28 px-6 sm:px-12 relative z-10 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 bg-[#C5F36A]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#C5F36A]">
            Section 05 // Studio Philosophy
          </span>
        </div>

        <div className="mb-16">
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#F5F4F0] tracking-tight uppercase leading-[1.05] max-w-4xl">
            Bold Ideas, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F4F0] via-[#D1D5DB] to-[#C5F36A]">
              Brought To Life.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#A5A5A0] max-w-2xl font-normal leading-relaxed">
            We reject the disposable, bloated templates that plague the local business web.
            Here is our operational philosophy for engineering digital superiority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {philosophies.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 rounded-none bg-[#191B1D] border border-white/[0.08] hover:border-[#C5F36A] fast-ease cursor-default flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-none bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#C5F36A] transition-colors">
                    <Icon className="w-5 h-5 text-[#C5F36A]" />
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F4F0] mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#A5A5A0] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 font-mono text-[10px] text-[#A5A5A0] uppercase tracking-widest">
                  [ Obscura Standard ]
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
