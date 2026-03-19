import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StatCard = ({ label, value, unit, icon: Icon }) => {
  const [timestamp, setTimestamp] = useState("LATEST");

  // Passive timestamp simulation
  useEffect(() => {
    const times = ["3S AGO", "LIVE", "SYNCED", "JUST NOW"];
    const interval = setInterval(() => {
      setTimestamp(times[Math.floor(Math.random() * times.length)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        hover: { y: -8, transition: { duration: 0.4, ease: "easeOut" } },
      }}
      className="group relative p-[1.5px] rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-brand"
    >
      {/* ══ HOVER-ONLY EXCLUSIVE: The Spinning Border Logic ══ */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 btn_download" />

      {/* ══ MAIN BODY ══ */}
      <div className="relative h-full flex flex-col items-center text-center p-4 rounded-[23px] bg-card border border-border group-hover:border-transparent transition-all duration-500 overflow-hidden">
        {/* Vector Grid Backdrop - Brightens on Hover */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03] group-hover:opacity-[0.08] text-brand transition-opacity duration-500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-stat"
              width="15"
              height="15"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 15 0 L 0 0 0 15"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-stat)" />
        </svg>

        {/* Top Data Header */}
        <div className="relative z-10 w-full flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <motion.span
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_var(--brand)]"
            />
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">
              Terminal.01
            </span>
          </div>
          <span className="text-[8px] font-mono font-bold text-brand-soft opacity-40 group-hover:opacity-100 transition-opacity">
            {timestamp}
          </span>
        </div>

        {/* Icon with Passive + Hover Animation */}
        <div className="relative mb-4">
          <div className="relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center border border-border bg-secondary/30 group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-sm">
            <Icon size={18} />
          </div>

          {/* Passive Sonar Rings (Always active) */}
          <motion.div
            animate={{ scale: [1, 2], opacity: [0.3, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
            className="absolute inset-0 rounded-2xl border border-brand/30"
          />
          {/* Hover-Specific Glow Pulse */}
          <motion.div
            variants={{ hover: { scale: 2.5, opacity: 0.15 } }}
            className="absolute inset-0 rounded-full bg-brand blur-xl opacity-0 transition-all duration-500"
          />
        </div>

        {/* Value Section */}
        <div className="relative z-10 space-y-1">
          <h4 className="text-lg capitalize font-black tracking-tighter text-foreground group-hover:text-brand transition-colors duration-500">
            {value}
          </h4>
          {unit && (
            <span className="block text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-muted-foreground group-hover:text-brand-soft">
              {unit}
            </span>
          )}
        </div>

        {/* Bottom Label Section */}
        <div className="mt-auto pt-4 w-full relative z-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-3" />
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground/40 group-hover:text-foreground transition-colors">
            {label}
          </p>
        </div>

        {/* The "Bottom Eclipse" Light - Moves up on hover */}
        <motion.div
          variants={{ hover: { y: -20, opacity: 0.4 } }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-32 h-12 bg-brand rounded-full blur-[35px] opacity-20 transition-all duration-700"
        />
      </div>
    </motion.div>
  );
};

export default StatCard;
