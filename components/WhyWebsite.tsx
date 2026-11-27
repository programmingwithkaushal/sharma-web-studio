"use client";

import { motion } from "motion/react";
import { AlertCircle, CheckCircle } from "lucide-react";

export default function WhyWebsite() {
  const comparisons = [
    {
      dimension: "Search Visibility",
      social: "Hidden behind walled apps. Invisible to high-intent Google searches for local services.",
      website: "Indexed on Google Search & Google Maps. Visible to neighborhood buyers actively ready to purchase.",
    },
    {
      dimension: "Customer Ownership",
      social: "The platform owns your followers. You must pay increasing ad fees to reach your own audience.",
      website: "100% direct customer database. Direct WhatsApp chats, phone calls, and client relationships belong to you.",
    },
    {
      dimension: "Direct Inquiries",
      social: "Buried in unorganized Instagram DMs with spammers, bots, and distractions.",
      website: "Streamlined 1-click WhatsApp booking with pre-filled customer details and service requirements.",
    },
    {
      dimension: "Digital Brand Identity",
      social: "Constrained to identical template grids with competing ads displayed right beneath your products.",
      website: "Bespoke, distraction-free digital experience reflecting premium craftsmanship and exclusive authority.",
    },
    {
      dimension: "Business Independence",
      social: "Vulnerable to sudden algorithm updates, policy shifts, account suspensions, or shadowbans.",
      website: "Permanent digital real estate hosted on global cloud infrastructure that you control completely.",
    },
    {
      dimension: "Long-Term Value",
      social: "Posts expire in 24-48 hours. Requires continuous daily content creation just to remain visible.",
      website: "An enduring commercial asset that compounds domain authority and generates inquiries 24/7.",
    },
  ];

  return (
    <section id="why-website" className="py-28 px-6 sm:px-12 relative z-10 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-[#191B1D] border border-white/10 text-[#C5F36A] font-mono text-[10px] uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 bg-[#C5F36A]" />
            <span>Section 07 // Strategic Comparison</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#F5F4F0] tracking-tight uppercase leading-tight">
            Social Media is Rented Ground. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F4F0] via-[#D1D5DB] to-[#C5F36A]">
              A Website is Your Digital Property.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A5A5A0] leading-relaxed max-w-2xl mx-auto font-normal">
            Building your entire commercial presence solely on Instagram or WhatsApp status is like constructing
            a luxury showroom on leased land where the landlord controls the locks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Rented Social Media Platform */}
          <div className="p-8 sm:p-10 rounded-none bg-[#191B1D] border border-red-500/20 fast-ease">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-none bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-[#F5F4F0]">Rented Social Media</h3>
                <p className="font-mono text-xs text-red-400">[ Instagram, Facebook &amp; Third-Party Apps ]</p>
              </div>
            </div>

            <div className="space-y-6">
              {comparisons.map((item, idx) => (
                <div key={idx} className="pb-4 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="font-mono text-xs text-[#A5A5A0] uppercase tracking-wider mb-1">
                    {item.dimension}
                  </div>
                  <p className="text-sm text-[#A5A5A0] leading-relaxed">
                    {item.social}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Owned Digital Infrastructure */}
          <div className="p-8 sm:p-10 rounded-none bg-[#191B1D] border border-[#C5F36A]/40 fast-ease relative overflow-hidden shadow-2xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10 relative z-10">
              <div className="w-10 h-10 rounded-none bg-[#C5F36A]/10 border border-[#C5F36A]/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#C5F36A]" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-[#F5F4F0]">Owned Digital Property</h3>
                <p className="font-mono text-xs text-[#C5F36A]">[ Your Dedicated Domain &amp; Infrastructure ]</p>
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              {comparisons.map((item, idx) => (
                <div key={idx} className="pb-4 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="font-mono text-xs text-[#C5F36A] uppercase tracking-wider mb-1 font-semibold">
                    {item.dimension}
                  </div>
                  <p className="text-sm text-[#F5F4F0] leading-relaxed font-normal">
                    {item.website}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
