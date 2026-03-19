import React from "react";
import { motion } from "framer-motion";

const STARS = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${(i * 73 + 11) % 97}%`,
  top: `${(i * 47 + 23) % 93}%`,
  dur: 2.5 + (i % 4) * 0.8,
  delay: (i * 0.41) % 5,
  size: i % 3 === 0 ? "w-2 h-2" : "w-1.5 h-1.5",
}));

const HeroBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    {/* Grid */}
    <div
      className="absolute inset-0"
      style={{
        backgroundSize: "40px 40px",
        backgroundImage: `
          linear-gradient(to right,  color-mix(in oklch, var(--foreground) 5%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 5%, transparent) 1px, transparent 1px)
        `,
      }}
    />
    {/* Radial vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_30%,var(--background)_100%)]" />

    {/* Center glow */}
    {/* <motion.div
      animate={{ scale: [1, 1.18, 1], opacity: [0.08, 0.16, 0.08] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[130px]"
      style={{ background: "var(--brand)" }}
    /> */}
    {/* Secondary glow */}
    {/* <motion.div
      animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.09, 0.04] }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 3,
      }}
      className="absolute left-[65%] top-[30%] w-[400px] h-[400px] rounded-full blur-[100px]"
      style={{ background: "var(--brand)" }}
    /> */}
    {/* Top-left accent */}
    {/* <motion.div
      animate={{ opacity: [0.03, 0.07, 0.03] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5,
      }}
      className="absolute -left-20 top-20 w-[350px] h-[350px] rounded-full blur-[100px]"
      style={{ background: "var(--brand)" }}
    /> */}

    {/* Stars */}
    {STARS.map((s) => (
      <motion.div
        key={s.id}
        className={`absolute ${s.size} rounded-full`}
        style={{ left: s.left, top: s.top, background: "var(--brand)" }}
        animate={{ opacity: [0, 0.8, 0], scale: [0, 1.4, 0] }}
        transition={{
          duration: s.dur,
          repeat: Infinity,
          delay: s.delay,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default HeroBackground;
