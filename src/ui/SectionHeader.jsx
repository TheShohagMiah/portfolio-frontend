import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({ label, title, accent, children, index }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-lg font-extrabold uppercase tracking-[0.2em] text-brand opacity-60 block mb-3">
          {index && <span className="mr-2 opacity-50">{index}</span>}
          {label}
        </span>
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-foreground leading-snug">
          {title}
          {accent && (
            <span className="text-brand"> {accent}</span>
          )}
        </h2>
      </motion.div>

      {children && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="shrink-0"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default SectionHeader;
