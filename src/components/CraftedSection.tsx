"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { EDITORIAL_EASE } from "./MotionPrimitives";

// Organic burnt-terracotta wave paths echoing a continuous studio ribbon between cream sections
const DESKTOP_WAVE_PATH =
  "M 0 118 C 155 152, 295 215, 430 180 C 555 148, 635 52, 780 52 C 955 52, 1085 186, 1255 168 C 1340 160, 1400 138, 1440 118 L 1440 622 C 1315 656, 1165 668, 1020 598 C 890 536, 745 516, 625 572 C 495 632, 305 688, 0 638 Z";

const MOBILE_WAVE_PATH =
  "M 0 92 C 320 155, 760 28, 1440 96 L 1440 694 C 1020 718, 510 672, 0 704 Z";

const DOT_MATRIX = Array.from({ length: 20 }, (_, i) => i);

export function CraftedSection() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section
      id="craft"
      aria-labelledby="crafted-heading"
      className="relative overflow-x-clip bg-[#F5F0EA] pt-8 pb-16 text-[#FFFFFF] sm:pt-12 sm:pb-20 lg:min-h-[640px] lg:py-20 xl:min-h-[680px]"
    >
      {/* Continue subtle top-right roast-sieve dot field above the wave */}
      <div
        aria-hidden="true"
        className="hero-dot-field pointer-events-none absolute top-0 right-0 z-0 h-56 w-[48%] opacity-90"
      />

      {/* Full-bleed organic terracotta backdrop wave */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 720"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      >
        <path d={MOBILE_WAVE_PATH} fill="#A83814" className="lg:hidden" />
        <path d={DESKTOP_WAVE_PATH} fill="#A83814" className="hidden lg:block" />
      </svg>

      {/* Subtle cream dot cluster anchoring the lower-left wave pocket beneath the hand */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[15%] left-[21%] z-10 hidden grid-cols-5 gap-4 lg:grid"
      >
        {DOT_MATRIX.map((idx) => (
          <span key={idx} className="h-2.5 w-2.5 rounded-full bg-[#F5F0EA]/28" />
        ))}
      </div>

      {/* Left Edge Cutout: Wrist enters flush from left viewport border with open palm holding roasted beans */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, x: -28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.62, ease: EDITORIAL_EASE }}
        className="pointer-events-none relative z-20 mb-5 w-[90%] max-w-[430px] select-none sm:max-w-[470px] lg:absolute lg:top-[17%] lg:left-0 lg:mb-0 lg:w-[39vw] lg:max-w-[590px] lg:min-w-[375px]"
      >
        <Image
          src="/images/cutouts/crafted-open-hand-beans.png"
          alt="Open hand holding roasted coffee beans"
          width={978}
          height={548}
          sizes="(max-width: 1024px) 90vw, 590px"
          className="h-auto w-full object-contain object-left drop-shadow-[0_24px_28px_rgba(36,29,24,0.28)]"
        />
      </motion.div>

      <div className="relative z-20 mx-auto max-w-[1400px] px-5 pt-2 pb-10 sm:px-7 sm:pt-4 sm:pb-12 lg:px-12 lg:pt-14 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:col-start-6 lg:pt-6 xl:pt-10">
            <motion.h2
              id="crafted-heading"
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.58, ease: EDITORIAL_EASE }}
              className="font-hero text-[clamp(2.45rem,4.9vw,4.45rem)] leading-[1.04] font-extrabold tracking-[-0.03em] text-[#FFFFFF]"
            >
              <span className="block">Crafted Beyond</span>
              <span className="block">the Ordinary</span>
            </motion.h2>

            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.62, delay: 0.08, ease: EDITORIAL_EASE }}
              className="mt-7 max-w-[460px] text-[16.5px] leading-[1.68] text-[#FFFFFF]/92 sm:text-[18px] lg:mt-16 lg:mr-6 lg:ml-auto"
            >
              From Indonesian highlands to Javanese slopes in Argopuro and
              Temanggung, every lot is small-batch roasted weekly for balanced
              sweetness, thick crema, and honest daily brews.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
