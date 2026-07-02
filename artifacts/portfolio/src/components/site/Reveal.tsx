import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const directionOffset = {
  up: { y: 20, x: 0 },
  down: { y: -20, x: 0 },
  left: { y: 0, x: 20 },
  right: { y: 0, x: -20 },
};

export const staggerContainer = {
  hidden: {},
  show: (stagger = 0.07) => ({
    transition: {
      staggerChildren: stagger,
    },
  }),
};

export const revealItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
  stagger,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  stagger?: number;
}) {
  const reduced = useReducedMotion();
  const offset = directionOffset[direction];

  if (stagger !== undefined) {
    return (
      <motion.div
        initial={reduced ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={reduced ? undefined : staggerContainer}
        custom={stagger}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
