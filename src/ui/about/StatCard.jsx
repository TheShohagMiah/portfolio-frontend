import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StatCard = ({ label, value, unit, icon: Icon }) => {
  const [timestamp, setTimestamp] = useState("LIVE");

  useEffect(() => {
    const times = ["3S AGO", "LIVE", "SYNCED", "JUST NOW"];
    const interval = setInterval(() => {
      setTimestamp(times[Math.floor(Math.random() * times.length)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeOut" } }}
      className="group relative flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card transition-colors duration-300"
      style={{
        borderColor: "var(--border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--brand-border)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center border mb-5 transition-all duration-300"
        style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--brand)";
          e.currentTarget.style.color = "#fff";
          e.currentTarget.style.borderColor = "var(--brand)";
        }}
      >
        <Icon size={16} />
      </div>

      {/* Value */}
      <p
        className="text-2xl font-bold tabular-nums tracking-tight leading-none mb-1 transition-colors duration-300 group-hover:text-brand"
        style={{ color: "var(--foreground)" }}
      >
        {value}
        {unit && (
          <span className="text-xs font-mono font-normal text-muted-foreground ml-1">
            {unit}
          </span>
        )}
      </p>

      {/* Label */}
      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mt-3">
        {label}
      </p>

      {/* Timestamp */}
      <span className="mt-4 text-[9px] font-mono uppercase tracking-widest text-muted-foreground/40">
        {timestamp}
      </span>
    </motion.div>
  );
};

export default StatCard;
