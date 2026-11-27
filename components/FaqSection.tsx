"use client";

import { useState } from "react";
import { siteConfig } from "@/site.config";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-28 px-6 sm:px-12 relative z-10 border-t border-white/10 select-none">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#d4ff00] text-xs font-semibold mb-4 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
            <span>Section 13 // Knowledge Base</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Everything you need to know about timeline, Google indexing, pricing terms, and ongoing support.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#0c0e12]/80 backdrop-blur-md overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-white/10 border-[#d4ff00]" : "bg-transparent"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-[#d4ff00]" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 sm:px-8 pb-6 text-sm text-slate-300 leading-relaxed font-normal border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Assistance Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#14171f]/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-display font-bold text-sm text-white">Have a specific question about your business?</div>
            <div className="font-mono text-xs text-slate-400 mt-0.5">Kaushal &amp; Akhilesh answer directly on WhatsApp within 1 hour.</div>
          </div>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(
              "Hi Kaushal & Akhilesh! I have a question regarding a website for my business."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-display font-bold text-xs uppercase tracking-wider hover:bg-[#d4ff00] transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Founders Directly</span>
          </a>
        </div>
      </div>
    </section>
  );
}
