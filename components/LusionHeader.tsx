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

        ctx.fillStyle = soundActive ? "#ffffff" : "rgba(255,255,255,0.3)";
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
      <header className="fixed top-0 left-0 right-0 z-40 px-6 sm:px-10 py-6 sm:py-8 flex items-center justify-between pointer-events-none">
        {/* Left: Monumental Geometric Wordmark with Exclusion Blend */}
        <a
          href="#"
          className="pointer-events-auto flex items-center gap-3 group"
          data-cursor="STUDIO"
        >
          <div className="flex flex-col">
            <span className="font-display font-black text-xl sm:text-2xl tracking-[-0.05em] text-white uppercase select-none group-hover:text-cyan-300 transition-colors">
              SHARMA
            </span>
            <span className="font-mono text-[9px] text-white/50 tracking-widest uppercase">
              Real-Time Web Studio • Kaushal & Akhilesh
            </span>
          </div>
        </a>

        {/* Right: Sound Wave + Let's Talk Magnetic Pill + Minimal Menu */}
        <div className="pointer-events-auto flex items-center gap-3 sm:gap-4">
          {/* Sound Wave Canvas Button */}
          <button
            onClick={() => setSoundActive(!soundActive)}
            className="w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center hover:border-white/50 transition-colors group"
            data-cursor={soundActive ? "MUTE" : "PLAY"}
            aria-label="Toggle Sound"
          >
            <canvas ref={soundCanvasRef} width={28} height={20} className="w-6 h-4" />
          </button>

          {/* Let's Talk CTA */}
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="WHATSAPP"
            className="hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/25 bg-white/5 hover:bg-white text-white hover:text-black backdrop-blur-md transition-all duration-300 group"
          >
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="font-display font-bold text-xs uppercase tracking-wider">
              Let&apos;s talk
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping ml-0.5" />
          </a>

          {/* Menu Toggle with 2 Dots */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            data-cursor={menuOpen ? "CLOSE" : "MENU"}
            className="px-4 py-2.5 rounded-full border border-white/20 bg-black/60 hover:border-white/50 backdrop-blur-md flex items-center gap-2.5 transition-colors group"
            aria-label="Toggle Menu"
          >
            <span className="font-display font-bold text-xs uppercase tracking-wider text-white">
              {menuOpen ? "Close" : "Menu"}
            </span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:scale-125 transition-transform" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white group-hover:scale-125 transition-all" />
            </div>
          </button>
        </div>
      </header>

      {/* Full-Screen Lusion Style Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-[#020306]/95 backdrop-blur-3xl flex flex-col justify-between p-8 sm:p-16"
          >
            {/* Top Bar of Menu */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
                Navigation Directory
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="px-5 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all"
              >
                Close ✕
              </button>
            </div>

            {/* Giant Architectural Nav Links */}
            <nav className="flex flex-col gap-4 sm:gap-6 my-auto">
              {[
                { title: "The Studio", subtitle: "Defying the ordinary", href: "#hero" },
                { title: "Featured Work", subtitle: "Real local business showcases", href: "#demos" },
                { title: "The Paradigm", subtitle: "Why websites defeat social media", href: "#why-website" },
                { title: "Configurator", subtitle: "Interactive project calculator", href: "#calculator" },
                { title: "Packages", subtitle: "Transparent investment tiers", href: "#pricing" },
                { title: "Founders", subtitle: "Kaushal Sharma & Akhilesh Sharma", href: "#founders" },
                { title: "Contact", subtitle: "Direct VIP access terminal", href: "#contact" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-baseline gap-4 text-white hover:text-cyan-300 transition-colors"
                >
                  <span className="font-mono text-xs text-white/30 group-hover:text-cyan-400">
                    0{idx + 1}
                  </span>
                  <span className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight">
                    {item.title}
                  </span>
                  <span className="hidden sm:inline font-mono text-xs text-white/40 tracking-wider">
                    — {item.subtitle}
                  </span>
                </a>
              ))}
            </nav>

            {/* Bottom info of Menu */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6 font-mono text-xs text-white/50">
              <div>
                <span>Founders: </span>
                <strong className="text-white">Kaushal Sharma & Akhilesh Sharma</strong>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-white transition-colors"
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
