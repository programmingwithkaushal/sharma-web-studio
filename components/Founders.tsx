"use client";

import { siteConfig } from "@/site.config";
import { MessageCircle, Mail, Cpu, Target, Compass, Terminal, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Founders() {
  const whatsappKaushal = encodeURIComponent(
    "Hi Kaushal! I'd like to consult with you on the technical architecture and performance of my upcoming website project."
  );
  const whatsappAkhilesh = encodeURIComponent(
    "Hi Akhilesh! I'd like to consult with you on the client growth strategy and conversion funnel for my local business."
  );

  return (
    <section id="founders" className="py-28 px-6 sm:px-12 relative z-10 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#d4ff00]">
                Section 09 // Executive Leadership
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
              Meet The Founders
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 max-w-sm uppercase tracking-wider">
            You partner directly with co-founders Kaushal Sharma &amp; Akhilesh Sharma. No junior temps, no automated ticket queues.
          </p>
        </div>

        {/* 2 Founders Editorial Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kaushal Sharma */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-[#0c0e12]/90 border border-white/10 hover:border-[#d4ff00]/40 transition-all backdrop-blur-xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <div className="font-mono text-[10px] text-[#d4ff00] uppercase tracking-widest mb-1">
                    [Tech &amp; Systems]
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                    Kaushal Sharma
                  </h3>
                  <p className="font-mono text-xs text-slate-300 mt-1">
                    Co-Founder &amp; Lead Tech Architect
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/15 flex items-center justify-center font-display font-black text-xl text-[#d4ff00] shrink-0">
                  KS
                </div>
              </div>

              <blockquote className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-8 italic">
                &ldquo;A slow or broken website costs your business credibility within 3 seconds. I personally
                architect every project on modern Next.js, guaranteeing sub-second loading, clean Google Schema,
                and seamless mobile interactions.&rdquo;
              </blockquote>

              <div className="space-y-3 mb-8">
                <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  Core Technical Focus Areas:
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js 15 & React 19",
                    "High-Performance Engineering",
                    "Local SEO & Core Web Vitals",
                    "Technical Architecture",
                  ].map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/10 font-mono text-xs text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${whatsappKaushal}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs text-[#d4ff00] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Kaushal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="font-mono text-[10px] text-slate-500">Lead Architect</span>
            </div>
          </motion.div>

          {/* Akhilesh Sharma */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 sm:p-10 rounded-3xl bg-[#0c0e12]/90 border border-white/10 hover:border-[#e6c687]/40 transition-all backdrop-blur-xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <div className="font-mono text-[10px] text-[#e6c687] uppercase tracking-widest mb-1">
                    [Strategy &amp; Client Growth]
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                    Akhilesh Sharma
                  </h3>
                  <p className="font-mono text-xs text-slate-300 mt-1">
                    Co-Founder &amp; Growth Strategist
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/15 flex items-center justify-center font-display font-black text-xl text-[#e6c687] shrink-0">
                  AS
                </div>
              </div>

              <blockquote className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-8 italic">
                &ldquo;A website is an investment designed to increase inquiries and walk-ins. I guide our clients
                on customer buying psychology, transparent local positioning, and streamlined WhatsApp funnels
                that convert casual visitors into confirmed appointments.&rdquo;
              </blockquote>

              <div className="space-y-3 mb-8">
                <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  Core Strategic Focus Areas:
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Client Strategy & Positioning",
                    "Conversion Funnels",
                    "Local Market Trust",
                    "Business Growth Systems",
                  ].map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/10 font-mono text-xs text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${whatsappAkhilesh}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs text-[#e6c687] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Akhilesh</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="font-mono text-[10px] text-slate-500">Growth Strategist</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
