"use client";

import { siteConfig } from "@/site.config";
import { MessageCircle, Mail, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Founders() {
  const whatsappKaushal = encodeURIComponent(
    "Hi Kaushal! I'd like to consult with you on the technical engineering and performance of my upcoming website project."
  );
  const whatsappAkhilesh = encodeURIComponent(
    "Hi Akhilesh! I'd like to consult with you on the business growth strategy and conversion funnel for my local business."
  );

  return (
    <section id="founders" className="py-28 px-6 sm:px-12 relative z-10 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#C5F36A]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#C5F36A]">
                Section 09 // Executive Leadership
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F4F0] tracking-tight uppercase">
              Meet The Founders
            </h2>
          </div>
          <p className="font-mono text-xs text-[#A5A5A0] max-w-sm uppercase tracking-wider">
            You partner directly with co-founders Kaushal Sharma &amp; Akhilesh Sharma. No junior temps, no automated ticket queues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kaushal Sharma */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-none bg-[#191B1D] border border-white/10 hover:border-[#C5F36A] fast-ease flex flex-col justify-between group cursor-default"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <div className="font-mono text-[10px] text-[#C5F36A] uppercase tracking-widest mb-1">
                    [ Technology &amp; Engineering ]
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F5F4F0] tracking-tight">
                    Kaushal Sharma
                  </h3>
                  <p className="font-mono text-xs text-slate-300 mt-1">
                    Co-Founder &amp; Technology / Engineering Lead
                  </p>
                </div>
                <div className="w-14 h-14 rounded-none bg-white/[0.04] border border-white/15 flex items-center justify-center font-display font-black text-xl text-[#C5F36A] shrink-0">
                  KS
                </div>
              </div>

              <blockquote className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-8 italic">
                &ldquo;A slow or broken website costs your business credibility within 3 seconds. I personally
                architect every project on modern Next.js 15, guaranteeing sub-second loading, clean Google Schema,
                and seamless mobile interactions.&rdquo;
              </blockquote>

              <div className="space-y-3 mb-8">
                <div className="font-mono text-xs text-[#A5A5A0] uppercase tracking-wider">
                  Core Technical Focus Areas:
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js 15 & React 19",
                    "High-Performance Code",
                    "Three.js 3D Shaders",
                    "Schema.org Local SEO",
                  ].map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-none bg-white/[0.03] border border-white/10 font-mono text-xs text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Authentic Contact Channels */}
              <div className="p-4 rounded-none bg-white/[0.02] border border-white/5 space-y-2 font-mono text-xs text-slate-300 mb-8">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C5F36A]" />
                  <a href="tel:+919389463924" className="hover:text-white font-semibold">
                    +91 9389463924
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#C5F36A]" />
                  <a href="mailto:kaushal.sharma.aiml@gmail.com" className="hover:text-white truncate">
                    kaushal.sharma.aiml@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <a
                href={`https://wa.me/919389463924?text=${whatsappKaushal}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sharp inline-flex items-center gap-2 font-mono text-xs text-[#C5F36A] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Kaushal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="font-mono text-[10px] text-[#A5A5A0]">[ Tech Lead ]</span>
            </div>
          </motion.div>

          {/* Akhilesh Sharma */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-none bg-[#191B1D] border border-white/10 hover:border-[#C5F36A] fast-ease flex flex-col justify-between group cursor-default"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <div className="font-mono text-[10px] text-[#D1D5DB] uppercase tracking-widest mb-1">
                    [ Strategy &amp; Client Growth ]
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F5F4F0] tracking-tight">
                    Akhilesh Sharma
                  </h3>
                  <p className="font-mono text-xs text-slate-300 mt-1">
                    Co-Founder &amp; Strategy / Growth Lead
                  </p>
                </div>
                <div className="w-14 h-14 rounded-none bg-white/[0.04] border border-white/15 flex items-center justify-center font-display font-black text-xl text-[#F2F0E9] shrink-0">
                  AS
                </div>
              </div>

              <blockquote className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-8 italic">
                &ldquo;A website is an investment designed to increase inquiries and walk-ins. I guide our clients
                on customer buying psychology, transparent local positioning, and streamlined WhatsApp funnels
                that convert casual visitors into confirmed appointments.&rdquo;
              </blockquote>

              <div className="space-y-3 mb-8">
                <div className="font-mono text-xs text-[#A5A5A0] uppercase tracking-wider">
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
                      className="px-3 py-1 rounded-none bg-white/[0.03] border border-white/10 font-mono text-xs text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Authentic Contact Channels */}
              <div className="p-4 rounded-none bg-white/[0.02] border border-white/5 space-y-2 font-mono text-xs text-slate-300 mb-8">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#F2F0E9]" />
                  <a href="tel:+917668614225" className="hover:text-white font-semibold">
                    +91 7668614225
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#F2F0E9]" />
                  <a href="mailto:sh2005.akhilesh@gmail.com" className="hover:text-white truncate">
                    sh2005.akhilesh@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <a
                href={`https://wa.me/917668614225?text=${whatsappAkhilesh}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sharp inline-flex items-center gap-2 font-mono text-xs text-[#F2F0E9] hover:text-[#C5F36A] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Akhilesh</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="font-mono text-[10px] text-[#A5A5A0]">[ Growth Lead ]</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
