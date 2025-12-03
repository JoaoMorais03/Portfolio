"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FloatingShape {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll();

  // Create gradient color transitions based on scroll
  const gradientStart = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "rgba(99, 102, 241, 0.15)",   // Indigo - Hero
      "rgba(139, 92, 246, 0.12)",   // Violet - About
      "rgba(59, 130, 246, 0.12)",   // Blue - Projects
      "rgba(16, 185, 129, 0.12)",   // Emerald - Experience
      "rgba(99, 102, 241, 0.15)",   // Back to Indigo
    ]
  );

  const gradientEnd = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "rgba(236, 72, 153, 0.1)",    // Pink
      "rgba(99, 102, 241, 0.08)",   // Indigo
      "rgba(139, 92, 246, 0.08)",   // Violet
      "rgba(59, 130, 246, 0.08)",   // Blue
      "rgba(236, 72, 153, 0.1)",    // Pink
    ]
  );

  // Generate floating shapes
  const shapes: FloatingShape[] = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 300 + 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Main gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 20% 20%, var(--gradient-start) 0%, transparent 50%),
                       radial-gradient(ellipse at 80% 80%, var(--gradient-end) 0%, transparent 50%)`,
          // @ts-ignore
          "--gradient-start": gradientStart,
          "--gradient-end": gradientEnd,
        } as any}
      />

      {/* Animated mesh gradient blobs */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full blur-3xl opacity-30 dark:opacity-20"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
            background: `radial-gradient(circle, ${
              shape.id % 3 === 0
                ? "rgba(99, 102, 241, 0.4)"
                : shape.id % 3 === 1
                ? "rgba(139, 92, 246, 0.4)"
                : "rgba(236, 72, 153, 0.4)"
            } 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
