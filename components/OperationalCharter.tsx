"use client";

import { motion } from "motion/react";
import { MessageSquare, ShieldCheck, CheckCheck } from "lucide-react";

export default function OperationalCharter() {
  const charter = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Direct Founder Communication",
      principle: "No Account Managers. No Junior Intermediaries.",
      description:
        "From the first discovery call to Google Search Console indexing, you communicate directly with co-founders Kaushal Sharma and Akhilesh Sharma via personal WhatsApp and phone.",
    },
    {
      number: "02",
      icon: ShieldCheck,
      title: "100% Transparent Fixed Pricing",
      principle: "Zero Hidden Fees. What We Quote Is What You Pay.",
      description:
        "Every single deliverable, domain cost, hosting requirement, and maintenance scope is documented upfront. There are no sudden surprises, obscure technical bills, or hostage clauses.",
    },
    {
      number: "03",
      icon: CheckCheck,
      title: "Client Approval Before Final Payment",
      principle: "50% Advance. 50% Only When You Love The Result.",
      description:
        "We initiate the project with a 50% deposit to secure infrastructure and setup. The remaining 50% balance is payable only after you review the interactive staging site and approve it 100%.",
    },
  ];

  return (
    <section id="charter" className="py-28 px-6 sm:px-12 relative z-10 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#d4ff00] text-xs font-semibold mb-4 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
            <span>Section 10 // Operational Charter</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            Our Studio Operational Charter
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            The 3 non-negotiable operational principles that govern every client partnership at Sharma Web Studio.
          </p>
        </div>

        {/* 3 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {charter.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 sm:p-10 rounded-3xl bg-[#0c0e12]/80 border border-white/10 hover:border-white/25 transition-all backdrop-blur-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-[#d4ff00] font-bold">
                      [{item.number}]
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-[#d4ff00]/40 transition-colors">
                      <Icon className="w-5 h-5 text-[#d4ff00]" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <div className="font-mono text-xs text-[#e6c687] font-semibold mb-4">
                    {item.principle}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                  Guaranteed Operational Term
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
