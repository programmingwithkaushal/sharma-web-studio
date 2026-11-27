"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/site.config";
import { ArrowUp, Heart, MapPin, Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
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
      setIstTime(now.toLocaleTimeString("en-IN", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#040507] text-white pt-24 pb-12 px-6 sm:px-12 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Top Studio Identity & Live Clock Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-display font-black text-2xl sm:text-3xl tracking-tight uppercase">
                SHARMA WEB STUDIO
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-[10px] font-mono text-[#d4ff00]">
                Creative Technology Practice
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md font-normal leading-relaxed">
              Founded by <strong className="text-white">Kaushal Sharma</strong> &amp;{" "}
              <strong className="text-white">Akhilesh Sharma</strong>. We engineer high-performance web applications,
              bespoke digital experiences, and local search systems for ambitious businesses.
            </p>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse" />
              <span>Moradabad, IN (IST): </span>
              <span className="text-white font-bold">{istTime || "Active"}</span>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white hover:text-black transition-colors flex items-center justify-center shrink-0"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Multi-Column Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-white/10">
          {/* Column 1: Directory */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#d4ff00] mb-4">
              Directory
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li><a href="#hero" className="hover:text-white transition-colors">The Studio</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Selected Work</a></li>
              <li><a href="#philosophy" className="hover:text-white transition-colors">Studio Philosophy</a></li>
              <li><a href="#speed" className="hover:text-white transition-colors">Speed Difference</a></li>
              <li><a href="#why-website" className="hover:text-white transition-colors">Strategic Paradigm</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Cost Configurator</a></li>
              <li><a href="#founders" className="hover:text-white transition-colors">Founders</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Packages</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 2: Core Architecture */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>Next.js Web Applications</li>
              <li>Google Maps &amp; Local SEO</li>
              <li>1-Click WhatsApp Booking</li>
              <li>High-Resolution Digital Catalogs</li>
              <li>Sub-Second Core Web Vitals</li>
              <li>Custom Domain &amp; Cloud CDN</li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4">
              Industry Prototypes
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>Specialty Medical Clinics</li>
              <li>Fine Dining &amp; Cafes</li>
              <li>Luxury Fashion &amp; Boutiques</li>
              <li>IIT-JEE &amp; NEET Academies</li>
              <li>Architects &amp; Contractors</li>
              <li>Professional Service Firms</li>
            </ul>
          </div>

          {/* Column 4: Studio Touchpoints */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4">
              Touchpoints
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-mono">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4ff00]" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#d4ff00]" />
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {siteConfig.contact.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4ff00]" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white truncate">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-slate-400 text-xs">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.city}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Attribution & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <div>
            &copy; {currentYear} Sharma Web Studio. All rights reserved.
          </div>
          <div>
            Engineered by <strong className="text-white">Kaushal Sharma</strong> &amp;{" "}
            <strong className="text-white">Akhilesh Sharma</strong>
          </div>
          <div>
            Moradabad, Uttar Pradesh &amp; Pan-India
          </div>
        </div>
      </div>
    </footer>
  );
}
