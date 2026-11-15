"use client";

import type { ReactNode } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";

export const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

export function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: EDITORIAL_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedValue({
  valueKey,
  children,
  className,
}: {
  valueKey: string | number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative inline-flex overflow-hidden ${className ?? ""}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={valueKey}
          initial={{ y: "65%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-65%", opacity: 0 }}
          transition={{ duration: 0.28, ease: EDITORIAL_EASE }}
        >
          {children}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
