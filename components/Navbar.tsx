"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/site.config";
import { MessageCircle, ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "The Paradigm", href: "#why-website" },
    { label: "Industry Demos", href: "#demos" },
    { label: "Configurator", href: "#calculator" },
    { label: "Packages", href: "#pricing" },
    { label: "Founders", href: "#founders" },
    { label: "FAQ", href: "#faq" },
  ];

  const whatsappMessage = encodeURIComponent(
    "Hi Kaushal & Akhilesh! I want to discuss building an extraordinary website for my business."
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Floating Capsule Container */}
        <div
          className={`w-full rounded-full transition-all duration-500 flex items-center justify-between px-4 sm:px-6 py-2.5 ${
            scrolled
              ? "bg-[#060913]/90 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/80"
              : "bg-[#080d1a]/70 backdrop-blur-xl border border-white/10 shadow-xl"
          }`}
        >
          {/* Brand Mark */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-600 to-amber-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#05070d] rounded-full flex items-center justify-center">
                <span className="font-display font-black text-xs text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-amber-200">
                  SW
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  Sharma Web Studio
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide">
                Kaushal & Akhilesh Sharma
              </span>
            </div>
          </a>

          {/* Desktop Links with Elegant Pill Separation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <MagneticButton strength={12}>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </MagneticButton>

            <MagneticButton strength={15}>
              <a
                href="#calculator"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-300 via-white to-amber-200 hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all"
              >
                <span>Get Estimate</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="sm:hidden max-w-sm mx-auto mt-2 rounded-2xl bg-[#070b16]/95 backdrop-blur-2xl border border-white/10 p-4 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 mb-1 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider block">Founders Direct</span>
                  <span className="text-xs font-bold text-white">Kaushal & Akhilesh Sharma</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-medium text-slate-200 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  Direct WhatsApp Chat
                </a>
                <a
                  href="#calculator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs"
                >
                  Configure Website
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
