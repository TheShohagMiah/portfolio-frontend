import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      setProgress(scrollTop / (scrollHeight - clientHeight));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-border/40">
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX: progress,
          background:
            "linear-gradient(to right, var(--brand), color-mix(in oklch, var(--brand) 60%, transparent))",
        }}
      />
    </div>
  );
};

export default ScrollProgress;
