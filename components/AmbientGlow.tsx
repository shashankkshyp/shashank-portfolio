"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function AmbientGlow() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024 && !("ontouchstart" in window));
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const handleMouseMove = (e: MouseEvent) => {
      if (isDesktop && !shouldReduceMotion) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDesktop, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Static ambient gradients */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-[140px] rounded-full" />
      <div className="absolute top-[40%] -left-40 w-[500px] h-[500px] bg-indigo-600/5 blur-[150px] rounded-full" />
      <div className="absolute top-[70%] -right-40 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] rounded-full" />

      {/* Mouse-following soft radial glow on desktop */}
      {isDesktop && mousePosition && (
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full pointer-events-none"
          animate={{
            x: mousePosition.x - 225,
            y: mousePosition.y - 225,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 150,
            mass: 0.6,
          }}
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.07) 0%, rgba(99, 102, 241, 0.02) 40%, transparent 70%)",
          }}
        />
      )}
    </div>
  );
}
