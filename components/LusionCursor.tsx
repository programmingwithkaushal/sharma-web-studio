"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function LusionCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch desktop devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over an element with data-cursor attribute or interactive element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute("data-cursor") || "");
        setIsHovered(true);
      } else if (target.closest("button, a, input, select, textarea")) {
        setCursorText("");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Magnetic Ring / Text Capsule */}
      <motion.div
        animate={{
          x: mousePosition.x - (isHovered ? 40 : 16),
          y: mousePosition.y - (isHovered ? 40 : 16),
          width: isHovered ? 80 : 32,
          height: isHovered ? 80 : 32,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.1,
        }}
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center transition-colors duration-200 ${
          isHovered
            ? "bg-white text-black backdrop-blur-md"
            : "border border-white/60 bg-transparent"
        }`}
        style={{
          mixBlendMode: isHovered ? "normal" : "difference",
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-black tracking-widest uppercase font-mono select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Precision Dot */}
      {!isHovered && (
        <motion.div
          animate={{
            x: mousePosition.x - 2,
            y: mousePosition.y - 2,
          }}
          transition={{
            type: "spring",
            stiffness: 1000,
            damping: 50,
          }}
          className="fixed top-0 left-0 w-1 h-1 rounded-full bg-white"
          style={{ mixBlendMode: "difference" }}
        />
      )}
    </div>
  );
}
