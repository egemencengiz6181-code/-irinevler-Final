"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

export function ShimmerText({
  children,
  className,
  duration = 2.8,
  delay = 1.0,
}: ShimmerTextProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className={cn("inline-block whitespace-nowrap select-none", className)}
        style={{
          WebkitTextFillColor: "transparent",
          background:
            "linear-gradient(to right, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.22) 40%, rgba(255,255,255,0.22) 60%, rgba(255,255,255,0.08) 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          backgroundRepeat: "no-repeat",
          backgroundSize: "50% 200%",
        } as React.CSSProperties}
        initial={{ backgroundPositionX: "250%" }}
        animate={{ backgroundPositionX: ["-100%", "250%"] }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "linear",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default ShimmerText;
