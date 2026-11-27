"use client";

import { siteConfig } from "@/site.config";
import { formatINR } from "@/lib/utils";
import { Check, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Pricing() {
  const plans = [
    {
      id: "starter",
      name: "Starter Online Presence",
      badge: "Quick Launch",
      price: 6999,
      deliveryTime: "3 to 4 Days",
      bestFor: "Solo clinics, advocates, neighborhood shops, and consultants.",
      description: "Essential Google search visibility and direct click-to-WhatsApp contact for single-location businesses.",
      support: "15 Days Post-Launch Support",
      milestone: "50% Advance • 50% on Client Approval",
      features: [
        "1-Page Fast Landing Website",
        "100% Mobile & Tablet Friendly",
        "Direct Click-to-Call & WhatsApp Chat",
        "Google Maps Location Integration",
        "Social Media Links & Business Hours",
        "Free 1 Year SSL Security Certificate",
        "Basic Google Search Indexing Setup",
      ],
      popular: false,
    },
    {
      id: "growth",
      name: "Complete Business Growth",
      badge: "Most Popular for Local Businesses",
      price: 14999,
      deliveryTime: "5 to 7 Days",
      bestFor: "Clinics, restaurants, coaching academies, and local contractors.",
      description: "The complete multi-page digital infrastructure engineered for local authority, leads, and customer bookings.",
      support: "1 Month Direct Founder Support & Updates",
      milestone: "50% Advance • 50% on Client Approval",
      features: [
        "Up to 5 Custom Pages (Home, About, Services, Gallery, Contact)",
        "Advanced Local SEO & Schema.org Setup",
        "Interactive Appointment / Inquiry Form",
        "Online Menu / Service Catalog Display",
        "Customer Reviews & Testimonial Showcase",
        "Google Business Profile Guidance",
        "Blazing Fast Sub-Second Mobile Performance",
        "1 Month Free Founder Support & Updates",
      ],
      popular: true,
    },
    {
      id: "premium",
      name: "Custom E-Commerce & Catalog",
      badge: "Full Retail & Checkout",
      price: 24999,
      deliveryTime: "10 to 14 Days",
      bestFor: "Boutiques, grocery stores, and brands wanting online product sales.",
      description: "Comprehensive product catalog with payment gateway integration, categories, and automated WhatsApp order routing.",
      support: "3 Months Priority Founder Support",
      milestone: "50% Advance • 50% on Client Approval",
      features: [
        "Full Multi-Page Website + Dynamic Product Catalog",
        "Online Order Management via WhatsApp / Email",
        "Payment Gateway Integration (UPI / Razorpay / QR)",
        "Dynamic Filtering, Search, & Categories",
        "Full Speed & Search Engine Optimization",
        "Google Analytics & Visitor Traffic Dashboard",
        "Priority 3 Months Direct Founder Support",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-28 px-6 sm:px-12 relative z-10 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#d4ff00] text-xs font-semibold mb-4 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00]" />
            <span>Section 12 // Investment Packages</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            Transparent Studio Pricing
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            No surprise add-ons. No monthly licensing traps. You own your code and domain 100%.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const planMessage = encodeURIComponent(
              `Hello Kaushal & Akhilesh! I would like to book the ${plan.name} (${formatINR(
                plan.price
              )}) package for my business.`
            );

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`p-8 sm:p-10 rounded-3xl flex flex-col justify-between transition-all backdrop-blur-xl relative ${
                  plan.popular
                    ? "bg-[#14171f]/95 border-2 border-[#d4ff00] shadow-[0_20px_60px_-15px_rgba(212,255,0,0.15)] lg:-translate-y-2"
                    : "bg-[#0c0e12]/80 border border-white/10 hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#d4ff00] text-black font-display font-bold text-[10px] uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 fill-black" />
                    <span>Recommended Choice</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                      {plan.badge}
                    </span>
                    <span className="font-mono text-[11px] text-[#e6c687]">
                      {plan.deliveryTime}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl text-white mb-2 tracking-tight">
                    {plan.name}
                  </h3>

                  <div className="mb-6">
                    <div className="font-display font-black text-4xl text-white tracking-tight">
                      {formatINR(plan.price)}
                    </div>
                    <div className="font-mono text-[11px] text-slate-400 mt-1">
                      {plan.milestone}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-6 pb-6 border-b border-white/10">
                    <strong className="text-white font-medium">Best for: </strong>
                    {plan.bestFor}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                      Included Deliverables:
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-[#d4ff00] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="py-3 px-4 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-[11px] text-slate-300 mb-6 text-center">
                    {plan.support}
                  </div>

                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${planMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-full font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-[#d4ff00] text-black hover:bg-white shadow-xl"
                        : "bg-white text-black hover:bg-[#d4ff00]"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Select {plan.name.split(" ")[0]} Package</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
