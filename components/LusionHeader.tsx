"use client";

import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/site.config";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function LusionHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(true);
  const soundCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme, toggleTheme } = useTheme();

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
      const isLight = document.documentElement.classList.contains("light");

      bars.forEach((baseH, i) => {
        const h = soundActive
          ? Math.max(3, Math.sin(t + i * 1.2) * 8 + baseH * 10)
          : 2;
        const x = startX + i * (barWidth + gap);
        const y = (canvas.height - h) / 2;

        ctx.fillStyle = soundActive
          ? (isLight ? "#101112" : "#C5F36A")
          : (isLight ? "rgba(16,17,18,0.25)" : "rgba(245,244,240,0.3)");
        ctx.fillRect(x, y, barWidth, h);
      });

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [soundActive, theme]);

  const whatsappMessage = encodeURIComponent(
    "Hi Kaushal & Akhilesh! I want to consult on an ambitious website for my business with Sharma Web Studio."
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
            <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-[#101112] dark:text-[#F5F4F0] uppercase select-none group-hover:text-[#101112] dark:group-hover:text-[#C5F36A] transition-colors">
              SHARMA WEB STUDIO
            </span>
            <span className="font-mono text-[9px] text-[#646669] dark:text-[#A5A5A0] tracking-widest uppercase">
              Obscura Digital Atelier • Kaushal &amp; Akhilesh
            </span>
          </div>
        </a>

        {/* Right: Theme Toggle + Sound Wave + Let's Talk Magnetic Pill + Menu */}
        <div className="pointer-events-auto flex items-center gap-2.5 sm:gap-3">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-none border border-black/15 dark:border-white/20 bg-white/90 dark:bg-[#101112] text-[#101112] dark:text-[#F5F4F0] hover:border-[#101112] dark:hover:border-[#C5F36A] flex items-center gap-2 fast-ease group"
            data-cursor="THEME"
            aria-label="Toggle Theme"
          >
            <span className="w-1.5 h-1.5 bg-[#101112] dark:bg-[#C5F36A] group-hover:scale-125 transition-transform" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
              {theme === "dark" ? "Light ☼" : "Dark ☾"}
            </span>
          </button>

          {/* Sound Wave */}
          <button
            onClick={() => setSoundActive(!soundActive)}
            className="w-10 h-10 rounded-none border border-black/15 dark:border-white/15 bg-white/90 dark:bg-[#101112] flex items-center justify-center hover:border-[#101112] dark:hover:border-[#C5F36A] fast-ease"
            data-cursor={soundActive ? "MUTE" : "PLAY"}
            aria-label="Toggle Audio Visualizer"
          >
            <canvas ref={soundCanvasRef} width={28} height={20} className="w-6 h-4" />
          </button>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/919389463924?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="WHATSAPP"
            className="hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 rounded-none border border-black/20 dark:border-white/20 bg-black/[0.04] dark:bg-white/[0.04] hover:bg-[#101112] hover:text-white dark:hover:bg-[#C5F36A] text-[#101112] dark:text-[#F5F4F0] dark:hover:text-[#101112] fast-ease group"
          >
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="font-display font-bold text-xs uppercase tracking-wider">
              Start a Project
            </span>
            <span className="w-1.5 h-1.5 bg-[#101112] dark:bg-[#C5F36A] group-hover:bg-white dark:group-hover:bg-[#101112] animate-pulse ml-0.5" />
          </a>

          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            data-cursor={menuOpen ? "CLOSE" : "MENU"}
            className="px-4 py-2.5 rounded-none border border-black/15 dark:border-white/20 bg-white/90 dark:bg-[#101112] hover:border-[#101112] dark:hover:border-[#C5F36A] flex items-center gap-2.5 fast-ease group"
            aria-label="Toggle Navigation Directory"
          >
            <span className="font-display font-bold text-xs uppercase tracking-wider text-[#101112] dark:text-[#F5F4F0]">
              {menuOpen ? "Close" : "Menu"}
            </span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-[#101112] dark:bg-[#C5F36A] group-hover:scale-125 transition-transform" />
              <span className="w-1.5 h-1.5 bg-black/40 dark:bg-white/40 group-hover:bg-black dark:group-hover:bg-white group-hover:scale-125 transition-all" />
            </div>
          </button>
        </div>
      </header>

      {/* Full-Screen Directory Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#F7F8F9]/98 dark:bg-[#101112]/98 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-16 overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#646669] dark:text-[#A5A5A0] tracking-widest uppercase">
                Studio Directory // Obscura Atelier
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="px-5 py-2 rounded-none border border-black/20 dark:border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-[#101112] dark:text-[#F5F4F0] hover:bg-[#101112] hover:text-white dark:hover:bg-[#F2F0E9] dark:hover:text-[#101112] fast-ease"
              >
                Close ✕
              </button>
            </div>

            <nav className="flex flex-col gap-3 sm:gap-4 my-8">
              {[
                { title: "Atelier Hero", subtitle: "We build digital advantages", href: "#hero" },
                { title: "Introduction", subtitle: "Strategic digital ground", href: "#studio" },
                { title: "Selected Work", subtitle: "Prototype architectures", href: "#work" },
                { title: "Philosophy", subtitle: "Zero generic templates", href: "#philosophy" },
                { title: "Performance", subtitle: "Core Web Vitals engineering", href: "#speed" },
                { title: "The Paradigm", subtitle: "Rented social media vs owned web", href: "#why-website" },
                { title: "Configurator", subtitle: "Interactive project calculator", href: "#calculator" },
                { title: "Founders", subtitle: "Kaushal Sharma & Akhilesh Sharma", href: "#founders" },
                { title: "Charter", subtitle: "Direct founder terms", href: "#charter" },
                { title: "Process", subtitle: "4-stage customer roadmap", href: "#process" },
                { title: "Packages", subtitle: "Transparent investment tiers", href: "#pricing" },
                { title: "FAQ", subtitle: "Client knowledge base", href: "#faq" },
                { title: "Contact", subtitle: "Direct VIP access terminal", href: "#contact" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-baseline gap-4 text-[#101112] dark:text-[#F5F4F0] hover:text-[#101112] dark:hover:text-[#C5F36A] transition-colors"
                >
                  <span className="font-mono text-xs text-[#646669] dark:text-[#A5A5A0] group-hover:text-[#101112] dark:group-hover:text-[#C5F36A]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight">
                    {item.title}
                  </span>
                  <span className="hidden sm:inline font-mono text-xs text-[#646669] dark:text-[#A5A5A0] tracking-wider">
                    — {item.subtitle}
                  </span>
                </a>
              ))}
            </nav>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-black/10 dark:border-white/10 pt-6 font-mono text-xs text-[#646669] dark:text-[#A5A5A0]">
              <div>
                <span>Founders: </span>
                <strong className="text-[#101112] dark:text-[#F5F4F0]">Kaushal Sharma (+91 9389463924) &amp; Akhilesh Sharma (+91 7668614225)</strong>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href="https://wa.me/919389463924"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#101112] dark:text-[#C5F36A] hover:underline"
                >
                  WhatsApp: +91 9389463924
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
