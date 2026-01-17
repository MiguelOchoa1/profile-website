"use client";

import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { x?: number; y?: number; opacity?: number; filter?: string };
    visible: { x?: number; y?: number; opacity?: number; filter?: string };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  xOffset?: number;
  direction?: "up" | "down" | "left" | "right";
  inView?: boolean;
  inViewMargin?: string | undefined;
  blur?: string;
}

const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 4,
  xOffset = 15,
  direction = "up",
  inView = false,
  inViewMargin = "-50px",
  blur = "3px",
}: BlurFadeProps) => {
  const ref = useRef(null);
  // @ts-ignore
  const inViewResult = useInView(ref, {
    once: true,
    // @ts-ignore
    margin: inViewMargin,
  });
  const isInView = !inView || inViewResult;

  const getDefaultVariants = (): Variants => {
    switch (direction) {
      case "up":
        return {
          hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
          visible: { y: 0, opacity: 1, filter: `blur(0px)` },
        };
      case "down":
        return {
          hidden: { y: -yOffset, opacity: 0, filter: `blur(${blur})` },
          visible: { y: 0, opacity: 1, filter: `blur(0px)` },
        };
      case "left":
        return {
          hidden: { x: xOffset, opacity: 0, filter: `blur(${blur})` },
          visible: { x: 0, opacity: 1, filter: `blur(0px)` },
        };
      case "right":
        return {
          hidden: { x: -xOffset, opacity: 0, filter: `blur(${blur})` },
          visible: { x: 0, opacity: 1, filter: `blur(0px)` },
        };
      default:
        return {
          hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
          visible: { y: 0, opacity: 1, filter: `blur(0px)` },
        };
    }
  };

  const combinedVariants = variant || getDefaultVariants();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={combinedVariants}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
