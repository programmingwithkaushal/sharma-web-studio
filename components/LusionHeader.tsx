"use client";

import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/site.config";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function LusionHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(true);
  const soundCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Sound Visualizer Canvas Animation
  useEffect(() => {
    const canvas = soundCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;
    const bars = [0.4, 0.8, 0.3, 0.9, 0.5];

    const render = () => {
      t += 0.08;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = 2;
      const gap = 2;
      const startX = 4;

      bars.forEach((baseH, i) => {
        const h = soundActive
          ? Math.max(3, Math.sin(t + i * 1.2) * 8 + baseH * 10)
          : 2;
        const x = startX + i * (barWidth + gap);
        const y = (canvas.height - h) / 2;

        ctx.fillStyle = soundActive ? "#d4ff00" : "rgba(255,255,255,0.3)";
        ctx.fillRect(x, y, barWidth, h);
      });

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [soundActive]);

  const whatsappMessage = encodeURIComponent(
    "Hi Kaushal & Akhilesh! I want to build a website for my business with Sharma Web Studio."
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-6 sm:px-12 py-6 sm:py-7 flex items-center justify-between pointer-events-none">
        {/* Left: Minimal Studio Wordmark */}
        <a
          href="#"
          className="pointer-events-auto flex items-center gap-3 group"
          data-cursor="STUDIO"
        >
          <div className="flex flex-col">
            <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white uppercase select-none group-hover:text-[#d4ff00] transition-colors">
              SHARMA WEB STUDIO
            </span>
            <span className="font-mono text-[9px] text-slate-400 tracking-widest uppercase">
              Creative Technology • Kaushal &amp; Akhilesh
            </span>
          </div>
        </a>

        {/* Right: Sound Wave + Let's Talk Magnetic Pill + Minimal Menu */}
        <div className="pointer-events-auto flex items-center gap-3 sm:gap-4">
          {/* Sound Wave Canvas Button */}
          <button
            onClick={() => setSoundActive(!soundActive)}
            className="w-10 h-10 rounded-full border border-white/15 bg-black/60 backdrop-blur-md flex items-center justify-center hover:border-white/40 transition-colors group"
            data-cursor={soundActive ? "MUTE" : "PLAY"}
            aria-label="Toggle Audio Visualizer"
          >
            <canvas ref={soundCanvasRef} width={28} height={20} className="w-6 h-4" />
          </button>

          {/* Let's Talk CTA */}
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="WHATSAPP"
            className="hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/20 bg-white/[0.04] hover:bg-[#d4ff00] text-white hover:text-black backdrop-blur-md transition-all duration-300 group"
          >
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="font-display font-bold text-xs uppercase tracking-wider">
              Let&apos;s talk
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] group-hover:bg-black animate-pulse ml-0.5" />
          </a>

          {/* Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            data-cursor={menuOpen ? "CLOSE" : "MENU"}
            className="px-4 py-2.5 rounded-full border border-white/20 bg-black/60 hover:border-white/40 backdrop-blur-md flex items-center gap-2.5 transition-colors group"
            aria-label="Toggle Navigation Directory"
          >
            <span className="font-display font-bold text-xs uppercase tracking-wider text-white">
              {menuOpen ? "Close" : "Menu"}
            </span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] group-hover:scale-125 transition-transform" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white group-hover:scale-125 transition-all" />
            </div>
          </button>
        </div>
      </header>

      {/* Full-Screen Overlay Directory Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-[#060709]/95 backdrop-blur-3xl flex flex-col justify-between p-8 sm:p-16 overflow-y-auto"
          >
            {/* Top Bar of Menu */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-slate-400 tracking-widest uppercase">
                Studio Directory // Sharma Web Studio
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="px-5 py-2 rounded-full border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all"
              >
                Close ✕
              </button>
            </div>

            {/* Giant Architectural Nav Links */}
            <nav className="flex flex-col gap-3 sm:gap-4 my-8">
              {[
                { title: "The Studio", subtitle: "Defying the ordinary", href: "#hero" },
                { title: "Introduction", subtitle: "Engineering digital authority", href: "#studio" },
                { title: "Selected Work", subtitle: "Real local business prototypes", href: "#work" },
                { title: "Philosophy", subtitle: "Zero generic templates", href: "#philosophy" },
                { title: "Speed Architecture", subtitle: "Core Web Vitals engineering", href: "#speed" },
                { title: "The Paradigm", subtitle: "Rented social media vs owned web", href: "#why-website" },
                { title: "Configurator", subtitle: "Interactive project calculator", href: "#calculator" },
                { title: "Founders", subtitle: "Kaushal Sharma & Akhilesh Sharma", href: "#founders" },
                { title: "Operational Charter", subtitle: "Direct founder terms", href: "#charter" },
                { title: "Customer Journey", subtitle: "4-stage white glove roadmap", href: "#process" },
                { title: "Packages", subtitle: "Transparent investment tiers", href: "#pricing" },
                { title: "FAQ", subtitle: "Client knowledge base", href: "#faq" },
                { title: "Contact", subtitle: "Direct VIP access terminal", href: "#contact" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-baseline gap-4 text-white hover:text-[#d4ff00] transition-colors"
                >
                  <span className="font-mono text-xs text-slate-500 group-hover:text-[#d4ff00]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight">
                    {item.title}
                  </span>
                  <span className="hidden sm:inline font-mono text-xs text-slate-500 tracking-wider">
                    — {item.subtitle}
                  </span>
                </a>
              ))}
            </nav>

            {/* Bottom info of Menu */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6 font-mono text-xs text-slate-400">
              <div>
                <span>Founders: </span>
                <strong className="text-white">Kaushal Sharma &amp; Akhilesh Sharma</strong>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4ff00] hover:text-white transition-colors"
                >
                  WhatsApp: {siteConfig.contact.whatsapp}
                </a>
                <span>{siteConfig.contact.city}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
