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
        "From the first discovery call to Google Search Console indexing, you communicate directly with co-founders Kaushal Sharma (+91 9389463924) and Akhilesh Sharma (+91 7668614225).",
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-[#191B1D] border border-white/10 text-[#C5F36A] font-mono text-[10px] uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 bg-[#C5F36A]" />
            <span>Section 10 // Operational Charter</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#F5F4F0] tracking-tight uppercase leading-tight">
            Our Studio Operational Charter
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A5A5A0] leading-relaxed font-normal">
            The 3 non-negotiable operational principles that govern every client partnership at Sharma Web Studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {charter.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-10 rounded-none bg-[#191B1D] border border-white/10 hover:border-[#C5F36A] fast-ease flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-[#C5F36A] font-bold">
                      [{item.number}]
                    </span>
                    <div className="w-10 h-10 rounded-none bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-[#C5F36A] transition-colors">
                      <Icon className="w-5 h-5 text-[#C5F36A]" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#F5F4F0] mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <div className="font-mono text-xs text-[#D1D5DB] font-semibold mb-4">
                    {item.principle}
                  </div>
                  <p className="text-sm text-[#A5A5A0] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 font-mono text-[10px] text-[#A5A5A0] uppercase tracking-widest">
                  [ Guaranteed Term ]
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
