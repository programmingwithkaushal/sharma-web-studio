"use client";

import { motion } from "motion/react";
import { Sparkles, Terminal, Cpu, Target, Compass, Zap } from "lucide-react";

export default function LusionReel() {
  const philosophies = [
    {
      icon: Terminal,
      title: "Zero Generic Templates",
      desc: "We never install cookie-cutter WordPress themes or pre-packaged website templates. Every line of markup and CSS is custom-engineered specifically for your brand.",
    },
    {
      icon: Cpu,
      title: "Custom Engineering",
      desc: "Built on modern Next.js App Router and React 19, delivering clean server-rendered architectures that Google crawlers understand and rank effortlessly.",
    },
    {
      icon: Target,
      title: "Business-First Design",
      desc: "Aesthetics must serve revenue. Every headline, button placement, and visual interaction is designed around direct customer conversion and local inquiry generation.",
    },
    {
      icon: Compass,
      title: "Conversion Psychology",
      desc: "We minimize customer friction with 1-tap WhatsApp routing, clear pricing transparency, and authentic local trust signals that make buying natural.",
    },
    {
      icon: Zap,
      title: "High-Performance Architecture",
      desc: "Optimized image pipelines, zero bloatware scripts, and lightweight WebGL rendering ensure immediate loading even on standard 4G mobile connections.",
    },
    {
      icon: Sparkles,
      title: "Thoughtful User Experience",
      desc: "Micro-interactions, accessible typography hierarchy, and effortless touch controls designed for 360px mobile viewports up to 1920px 4K displays.",
    },
  ];

  return (
    <section id="philosophy" className="py-28 px-6 sm:px-12 relative z-10 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#d4ff00]">
            Section 05 // Studio Philosophy
          </span>
        </div>

        {/* Monumental Headline */}
        <div className="mb-16">
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[1.05] max-w-4xl">
            Bold Ideas, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#d4ff00]">
              Brought To Life.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
            We reject the disposable, bloated templates that plague the local business web.
            Here is our operational philosophy for engineering digital superiority.
          </p>
        </div>

        {/* Philosophy Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {philosophies.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-8 rounded-2xl bg-[#0c0e12]/80 border border-white/[0.08] hover:border-white/20 transition-all group backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#d4ff00]/40 transition-colors">
                    <Icon className="w-5 h-5 text-[#d4ff00]" />
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                  Sharma Web Studio Standard
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
