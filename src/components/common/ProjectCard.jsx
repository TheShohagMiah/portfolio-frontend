import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiArrowUpRight,
  FiX,
  FiCode,
  FiMaximize2,
} from "react-icons/fi";
import useBodyScrollLock from "../../hooks/useBodyScrollLock ";

// ═══════════════════════════════════════════════════════════════
//  MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════
const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
  }),
  exit: { opacity: 0, scale: 0.94, transition: { duration: 0.22 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, scale: 0.94, y: 16, transition: { duration: 0.22 } },
};

// ═══════════════════════════════════════════════════════════════
//  DESCRIPTION MODAL
// ═══════════════════════════════════════════════════════════════
const DescriptionModal = ({ project, onClose }) => {
  useBodyScrollLock(true);
  const {
    title,
    description,
    category,
    technologies,
    liveLink,
    githubRepo,
    image,
  } = project;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      />

      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative z-10 w-full max-w-2xl max-h-[88vh] bg-card border border-border rounded-3xl shadow-brand overflow-hidden flex flex-col"
      >
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-soft to-transparent z-20 opacity-30" />

        {/* Image Section */}
        <div className="relative h-56 shrink-0 overflow-hidden bg-secondary">
          {image?.url ? (
            <img
              src={image.url}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <FiCode size={40} className="text-muted-foreground/20" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

          <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.25em] backdrop-blur-md border border-brand bg-brand-muted text-brand-soft font-mono">
            {category ?? "Project"}
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-xl bg-background/70 backdrop-blur-md border border-border text-muted-foreground hover:text-destructive transition-all"
          >
            <FiX size={13} />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-5 p-7 overflow-y-auto">
          <div>
            <h3 className="text-2xl font-bold italic font-serif text-foreground leading-tight mb-4">
              {title}
            </h3>
            <div
              className="text-muted-foreground text-sm leading-relaxed prose prose-sm dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {technologies?.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg border border-border bg-secondary text-[10px] font-mono font-bold uppercase text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <motion.a
              whileTap={{ scale: 0.97 }}
              href={githubRepo}
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-border bg-secondary hover:bg-muted text-sm font-bold text-foreground transition-all"
            >
              <FiGithub size={14} /> View Code
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.97 }}
              href={liveLink}
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-brand text-brand-fg text-sm font-bold shadow-brand transition-all hover:opacity-90"
            >
              <FiArrowUpRight size={14} /> Live Demo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ═══════════════════════════════════════════════════════════════
//  PROJECT CARD
// ═══════════════════════════════════════════════════════════════
const ProjectCard = ({ project, index }) => {
  const [showModal, setShowModal] = useState(false);
  const [hovered, setHovered] = useState(false);
  const {
    image,
    title,
    description,
    category,
    liveLink,
    githubRepo,
    technologies,
    featured,
  } = project;

  return (
    <>
      <motion.article
        layout
        custom={index}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="group relative rounded-3xl overflow-hidden cursor-default border border-border hover:border-brand transition-colors duration-500 aspect-[4/5]"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {image?.url ? (
            <motion.img
              src={image.url}
              alt={title}
              className="w-full h-full object-cover"
              animate={{ scale: hovered ? 1.08 : 1 }}
              transition={{ duration: 0.6 }}
            />
          ) : (
            <div className="w-full h-full bg-secondary flex items-center justify-center">
              <FiCode size={48} className="text-muted-foreground/20" />
            </div>
          )}
          {/* Gradient overlay using background color token */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        {/* Pills */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.25em] backdrop-blur-md border border-border bg-card/50 text-foreground font-mono">
            {category ?? "Project"}
          </div>
          {featured && (
            <div className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider backdrop-blur-md border border-amber-400/30 bg-amber-400/10 text-amber-400">
              ★ Featured
            </div>
          )}
        </div>

        {/* Glass Content Panel */}
        <motion.div
          className="absolute inset-x-0 bottom-0 z-10 p-3"
          animate={{ y: hovered ? 0 : 55 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-2xl border border-border bg-card/70 backdrop-blur-xl p-5 shadow-brand">
            <h3 className="text-xl font-bold text-foreground leading-snug mb-2">
              {title}
            </h3>

            <motion.div
              animate={{
                opacity: hovered ? 1 : 0,
                height: hovered ? "auto" : 0,
              }}
              className="overflow-hidden mb-3"
            >
              <div
                className="text-muted-foreground text-xs line-clamp-2"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </motion.div>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {technologies?.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md text-[9px] font-mono font-bold border border-border bg-secondary/50 text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <motion.a
                href={githubRepo}
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest bg-secondary border border-border text-foreground hover:bg-muted transition-all"
              >
                <FiGithub size={12} /> Code
              </motion.a>
              <motion.a
                href={liveLink}
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest bg-brand text-brand-fg transition-all"
              >
                <FiArrowUpRight size={12} /> Live
              </motion.a>
              <button
                onClick={() => setShowModal(true)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-secondary border border-border text-foreground hover:border-brand transition-all"
              >
                <FiMaximize2 size={13} />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.article>

      <AnimatePresence>
        {showModal && (
          <DescriptionModal
            project={project}
            onClose={() => setShowModal(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
