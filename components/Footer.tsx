"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/site.config";
import { ArrowUp, MapPin, Mail, Phone, MessageCircle } from "lucide-react";

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
    <footer className="relative bg-[#0c0d0e] text-[#F5F4F0] pt-24 pb-12 px-6 sm:px-12 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Top Studio Identity & Live Clock Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-display font-black text-2xl sm:text-3xl tracking-tight uppercase">
                SHARMA WEB STUDIO
              </span>
              <span className="px-2.5 py-0.5 rounded-none bg-white/[0.05] border border-white/10 text-[9px] font-mono uppercase tracking-widest text-[#C5F36A]">
                [ Obscura Digital Atelier ]
              </span>
            </div>
            <p className="text-sm text-[#A5A5A0] max-w-md font-normal leading-relaxed">
              Founded by <strong className="text-[#F5F4F0]">Kaushal Sharma</strong> &amp;{" "}
              <strong className="text-[#F5F4F0]">Akhilesh Sharma</strong>. We engineer high-performance web applications,
              bespoke digital experiences, and local search systems for ambitious businesses.
            </p>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-[#A5A5A0]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C5F36A] animate-pulse" />
              <span>Moradabad, IN (IST): </span>
              <span className="text-[#F5F4F0] font-bold">{istTime || "Active"}</span>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-none border border-white/20 bg-white/[0.03] hover:bg-[#C5F36A] hover:text-[#101112] fast-ease flex items-center justify-center shrink-0"
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
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#C5F36A] mb-4">
              Directory
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li><a href="#hero" className="hover:text-white transition-colors">Atelier Hero</a></li>
              <li><a href="#studio" className="hover:text-white transition-colors">Studio Intro</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Selected Work</a></li>
              <li><a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a></li>
              <li><a href="#speed" className="hover:text-white transition-colors">Performance</a></li>
              <li><a href="#why-website" className="hover:text-white transition-colors">The Paradigm</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Configurator</a></li>
              <li><a href="#founders" className="hover:text-white transition-colors">Founders</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Packages</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 2: Capabilities */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#A5A5A0] mb-4">
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

          {/* Column 3: Industry Prototypes */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#A5A5A0] mb-4">
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
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#A5A5A0] mb-4">
              Touchpoints
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-mono">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5F36A]" />
                <a href="tel:+919389463924" className="hover:text-white">
                  +91 9389463924
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D1D5DB]" />
                <a href="tel:+917668614225" className="hover:text-white">
                  +91 7668614225
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#C5F36A]" />
                <a
                  href="https://wa.me/919389463924"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: +91 9389463924
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5F36A]" />
                <a href="mailto:kaushal.sharma.aiml@gmail.com" className="hover:text-white truncate">
                  kaushal.sharma.aiml@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D1D5DB]" />
                <a href="mailto:sh2005.akhilesh@gmail.com" className="hover:text-white truncate">
                  sh2005.akhilesh@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-[#A5A5A0] text-xs">
                <MapPin className="w-3.5 h-3.5 text-[#A5A5A0] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.city}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Attribution & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#A5A5A0]">
          <div>
            &copy; {currentYear} Sharma Web Studio. All rights reserved.
          </div>
          <div>
            Engineered by <strong className="text-[#F5F4F0]">Kaushal Sharma</strong> &amp;{" "}
            <strong className="text-[#F5F4F0]">Akhilesh Sharma</strong>
          </div>
          <div>
            Moradabad, Uttar Pradesh &amp; Pan-India
          </div>
        </div>
      </div>
    </footer>
  );
}
