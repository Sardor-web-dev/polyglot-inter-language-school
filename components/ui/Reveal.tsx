"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const OFFSET = 60;
const EASE  = [0.22, 1, 0.36, 1] as const;

function offsetFor(direction: Direction): { x: number; y: number } {
  switch (direction) {
    case "up":    return { x: 0,      y: OFFSET  };
    case "down":  return { x: 0,      y: -OFFSET };
    case "left":  return { x: OFFSET, y: 0       };
    case "right": return { x: -OFFSET, y: 0      };
    default:      return { x: 0,      y: 0       };
  }
}

type RevealProps = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className,
  as = "div",
}: RevealProps) {
  const { x, y } = offsetFor(direction);

  const variants: Variants = {
    hidden:  { opacity: 0, x, y, scale: 0.95 },
    visible: {
      opacity: 1, x: 0, y: 0, scale: 1,
      transition: { duration, delay, ease: EASE },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  );
}

/** Container that staggers its <RevealItem> children. */
export function RevealGroup({
  children,
  className,
  stagger = 0.12,
  delayChildren = 0,
  amount = 0.15,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  direction = "up",
  duration = 0.8,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  duration?: number;
  className?: string;
}) {
  const { x, y } = offsetFor(direction);
  return (
    <motion.div
      className={className}
      variants={{
        hidden:  { opacity: 0, x, y, scale: 0.95 },
        visible: {
          opacity: 1, x: 0, y: 0, scale: 1,
          transition: { duration, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
