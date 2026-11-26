"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/site.config";
import { MessageCircle, Mail, MapPin, Heart, ShieldCheck, ArrowUp } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat("en-IN", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#020408] border-t border-white/[0.08] text-slate-400 text-xs sm:text-sm overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand & Studio Philosophy */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 p-[1px]">
                <div className="w-full h-full bg-[#04060d] rounded-[11px] flex items-center justify-center font-display font-bold text-sm text-cyan-300">
                  SW
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-base text-white block tracking-tight">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-semibold font-mono">
                  By Kaushal Sharma & Akhilesh Sharma
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-sm">
              We engineer cinematic, high-speed digital infrastructure for doctors, culinary creators,
              boutiques, and local market leaders, transforming Google searches into enduring enterprise value.
            </p>

            {/* Live Studio Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full liquid-glass border-white/10 text-[11px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Studio Active • Moradabad IST: {istTime || "Active"}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-[11px] uppercase tracking-widest mb-4">
              Architecture
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#why-website" className="hover:text-cyan-300 transition-colors">
                  The Strategic Divide
                </a>
              </li>
              <li>
                <a href="#demos" className="hover:text-cyan-300 transition-colors">
                  Live Industry Demos
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-cyan-300 transition-colors">
                  Project Configurator
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-300 transition-colors">
                  Transparent Packages
                </a>
              </li>
              <li>
                <a href="#founders" className="hover:text-cyan-300 transition-colors">
                  Founders&apos; Charter
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-300 transition-colors">
                  Executive FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Local Niches */}
          <div>
            <h4 className="font-display font-bold text-white text-[11px] uppercase tracking-widest mb-4">
              Niches Served
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#demos" className="hover:text-cyan-300 transition-colors">
                  Healthcare & Clinics
                </a>
              </li>
              <li>
                <a href="#demos" className="hover:text-cyan-300 transition-colors">
                  Culinary & Restaurants
                </a>
              </li>
              <li>
                <a href="#demos" className="hover:text-cyan-300 transition-colors">
                  Fashion & Retail Boutiques
                </a>
              </li>
              <li>
                <a href="#demos" className="hover:text-cyan-300 transition-colors">
                  Educational Academies
                </a>
              </li>
              <li>
                <a href="#demos" className="hover:text-cyan-300 transition-colors">
                  Interior & Contractors
                </a>
              </li>
              <li>
                <a href="#demos" className="hover:text-cyan-300 transition-colors">
                  Legal & Financial Advisory
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Founders Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-[11px] uppercase tracking-widest mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2 text-slate-300">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="font-mono">{siteConfig.contact.whatsapp}</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="font-mono">{siteConfig.contact.email}</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>{siteConfig.contact.city}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Local SEO keywords strip */}
        <div className="pt-8 pb-6 border-t border-white/[0.04] text-[10px] text-slate-400 leading-relaxed font-mono">
          <strong className="text-slate-300">Local SEO Schema Certification: </strong>
          Bespoke Local Business Web Development • Google Maps Citation Authority • Swiggy/Zomato Alternative
          Direct WhatsApp Ordering • Doctor Clinic Website Design India • Luxury Retail Digital Catalog • Moradabad Web
          Development Studio • Kaushal Sharma & Akhilesh Sharma Founders
        </div>

        {/* Bottom bar with Back to Top */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-slate-400 flex items-center gap-1.5">
              Conceived with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by{" "}
              <span className="text-white font-medium">Kaushal Sharma</span> &{" "}
              <span className="text-white font-medium">Akhilesh Sharma</span>
            </p>
            <MagneticButton strength={15}>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-xl liquid-glass text-slate-400 hover:text-white transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
