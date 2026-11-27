"use client";

import { useState } from "react";
import { siteConfig } from "@/site.config";
import { ChevronDown, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-28 px-6 sm:px-12 relative z-10 border-t border-white/10 select-none">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-[#191B1D] border border-white/10 text-[#C5F36A] font-mono text-[10px] uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 bg-[#C5F36A]" />
            <span>Section 13 // Knowledge Base</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#F5F4F0] tracking-tight uppercase leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A5A5A0] leading-relaxed font-normal">
            Everything you need to know about timeline, Google indexing, pricing terms, and ongoing support.
          </p>
        </div>

        <div className="space-y-4">
          {siteConfig.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-none border border-white/10 bg-[#191B1D] fast-ease overflow-hidden hover:border-white/30"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#F5F4F0] tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-none border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-white/10 border-[#C5F36A]" : "bg-transparent"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-[#C5F36A]" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 sm:px-8 pb-6 text-sm text-[#A5A5A0] leading-relaxed font-normal border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-none bg-[#191B1D] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-display font-bold text-sm text-[#F5F4F0]">Have a specific question about your business?</div>
            <div className="font-mono text-xs text-[#A5A5A0] mt-0.5">Kaushal &amp; Akhilesh answer directly on WhatsApp within 1 hour.</div>
          </div>
          <a
            href="https://wa.me/919389463924?text=Hi%20Kaushal%20%26%20Akhilesh!%20I%20have%20a%20question%20regarding%20a%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sharp inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-[#F2F0E9] text-[#101112] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#C5F36A] shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Founders Directly</span>
          </a>
        </div>
      </div>
    </section>
  );
}
