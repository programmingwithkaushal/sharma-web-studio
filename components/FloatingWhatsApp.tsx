"use client";

import { siteConfig } from "@/site.config";
import { MessageCircle } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function FloatingWhatsApp() {
  const whatsappMessage = encodeURIComponent(
    "Hi Kaushal & Akhilesh! I saw your studio website and want to build a website for my local business. Are you free to chat?"
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip message */}
      <div className="hidden sm:flex items-center px-3.5 py-1.5 rounded-full liquid-glass-elevated text-white text-xs font-medium border-emerald-500/25 shadow-xl backdrop-blur-xl">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" />
        <span>Chat with Kaushal & Akhilesh</span>
      </div>

      {/* Floating Action Button */}
      <MagneticButton strength={15}>
        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp VIP Consultation"
          className="relative group p-3.5 sm:p-4 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-emerald-400 text-slate-950 font-bold shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all flex items-center justify-center border border-white/20"
        >
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#03050a] animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#03050a]" />
          <MessageCircle className="w-5 h-5 fill-slate-950 stroke-slate-950" />
        </a>
      </MagneticButton>
    </div>
  );
}
