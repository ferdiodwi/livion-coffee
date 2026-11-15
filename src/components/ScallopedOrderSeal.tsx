"use client";

import { motion } from "motion/react";
import { EDITORIAL_EASE } from "./MotionPrimitives";

type ScallopedOrderSealProps = {
  href: string;
  label: string;
  external?: boolean;
  className?: string;
};

/** Signature scalloped terracotta seal CTA shared across hero and closing showcase sections. */
export function ScallopedOrderSeal({
  href,
  label,
  external = true,
  className = "h-[106px] w-[106px] -rotate-12 sm:h-[124px] sm:w-[124px] lg:h-[136px] lg:w-[136px]",
}: ScallopedOrderSealProps) {
  return (
    <motion.a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={label}
      whileHover={{ scale: 1.06, rotate: -6 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.22, ease: EDITORIAL_EASE }}
      className={`group relative flex items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E2216] ${className}`}
    >
      <svg
        viewBox="0 0 120 120"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full drop-shadow-[0_14px_20px_rgba(62,34,22,0.26)]"
      >
        <path
          d="M60,4 C66,4 69,9 75,10 C81,11 86,8 91,12 C96,16 95,22 100,26 C105,30 111,30 113,36 C115,42 111,47 113,53 C115,59 120,63 118,69 C116,75 110,77 109,83 C108,89 111,95 107,100 C103,105 97,104 92,108 C87,112 86,118 80,119 C74,120 69,115 63,116 C57,117 52,120 46,118 C40,116 38,110 32,108 C26,106 20,109 16,104 C12,99 14,93 10,88 C6,83 1,81 1,75 C1,69 6,65 5,59 C4,53 0,48 2,42 C4,36 10,34 12,28 C14,22 12,16 17,12 C22,8 28,11 33,8 C38,5 41,0 47,0 C53,0 54,4 60,4 Z"
          className="fill-[#B8421B] transition-colors duration-200 group-hover:fill-[#3E2216]"
        />
      </svg>
      <span className="relative z-10 flex flex-col items-center justify-center text-center font-hero text-[16.5px] leading-[1.02] font-extrabold tracking-tight text-[#FFFFFF] sm:text-[18px] lg:text-[20px]">
        <span>Pesan</span>
        <span>yuk</span>
      </span>
    </motion.a>
  );
}
