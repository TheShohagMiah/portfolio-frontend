import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({ label, title, accent, children, index }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        {/* Label Row */}
        <div className="relative flex items-center gap-3 mb-5">
          <span className="absolute top-0 left-0 -translate-y-1/2 text-6xl font-black text-foreground opacity-[0.20] tracking-tighter select-none pointer-events-none">
            {index}
          </span>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block h-1 w-10 origin-left bg-brand rounded-full"
          />
          <span className="text-[11px] font-black uppercase tracking-[0.3em] font-mono text-brand">
            {label}
          </span>
        </div>

        {/* Heading Row */}
        <h2 className="text-2xl md:text-3xl font-normal  tracking-tight text-foreground leading-[1.1]">
          {title}{" "}
          {accent && (
            <>
              <br className="hidden md:block" />
              <span className="text-brand font-extrabold">{accent}</span>
            </>
          )}
        </h2>
      </motion.div>

      {/* Right Side Actions Slot */}
      {children && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex  shrink-0"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default SectionHeader;
