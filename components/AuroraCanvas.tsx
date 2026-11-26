"use client";

import { useEffect, useRef } from "react";

export default function AuroraCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smooth lerp
    let mouse = { x: width * 0.5, y: height * 0.3, targetX: width * 0.5, targetY: height * 0.3 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Fluid Orbs definition
    const orbs = [
      { x: width * 0.25, y: height * 0.2, r: 380, color: "rgba(37, 99, 235, 0.12)", speed: 0.0008, offset: 0 },
      { x: width * 0.75, y: height * 0.35, r: 440, color: "rgba(14, 165, 233, 0.09)", speed: 0.0006, offset: 2 },
      { x: width * 0.5, y: height * 0.75, r: 420, color: "rgba(99, 102, 241, 0.08)", speed: 0.0007, offset: 4 },
      { x: width * 0.8, y: height * 0.8, r: 350, color: "rgba(16, 185, 129, 0.07)", speed: 0.0009, offset: 5 },
    ];

    let t = 0;

    const render = () => {
      t += 0.015;

      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.03;
      mouse.y += (mouse.targetY - mouse.y) * 0.03;

      ctx.clearRect(0, 0, width, height);

      // Render ambient fluid orbs
      for (let i = 0; i < orbs.length; i++) {
        const orb = orbs[i];
        const motionFactor = prefersReducedMotion ? 0 : Math.sin(t * orb.speed * 100 + orb.offset) * 45;
        const currentX = orb.x + motionFactor + (mouse.x - width * 0.5) * (0.04 * (i + 1));
        const currentY = orb.y + Math.cos(t * orb.speed * 100 + orb.offset) * 35 + (mouse.y - height * 0.5) * (0.03 * (i + 1));

        const gradient = ctx.createRadialGradient(
          currentX,
          currentY,
          0,
          currentX,
          currentY,
          orb.r
        );

        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, "rgba(3, 5, 10, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(currentX, currentY, orb.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full opacity-90 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
