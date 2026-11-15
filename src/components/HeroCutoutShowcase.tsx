"use client";

import { type KeyboardEvent, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { BEAN_PRODUCTS, buildBeanWhatsAppUrl } from "@/data/beans";
import { EDITORIAL_EASE } from "./MotionPrimitives";

type FloatingBeanSpec = {
  src: string;
  w: number;
  h: number;
  className: string;
  depth: number;
  rotate: number;
  blur?: boolean;
};

// Positioned across the wide hero stage to create a Coffeelo-inspired bean cascade while keeping every headline, blurb, and CTA clear
const STAGE_BEANS: FloatingBeanSpec[] = [
  {
    src: "/images/cutouts/bean-1.png",
    w: 283,
    h: 219,
    className: "left-[4%] top-[12%] z-20 w-9 sm:w-11 lg:left-[8%] lg:top-[15%] lg:w-12",
    depth: 14,
    rotate: -18,
  },
  {
    src: "/images/cutouts/bean-4.png",
    w: 287,
    h: 222,
    className: "hidden md:block left-[20%] top-[10%] z-10 w-9 opacity-90",
    depth: 12,
    rotate: 34,
  },
  {
    src: "/images/cutouts/bean-2.png",
    w: 303,
    h: 152,
    className: "hidden md:block left-[33%] top-[9%] z-0 w-11 opacity-85",
    depth: -10,
    rotate: -12,
    blur: true,
  },
  {
    src: "/images/cutouts/bean-6.png",
    w: 261,
    h: 261,
    className: "hidden lg:block left-[39%] top-[15%] z-10 w-8 opacity-90",
    depth: 18,
    rotate: 52,
  },
  {
    src: "/images/cutouts/bean-6.png",
    w: 261,
    h: 261,
    className: "hidden md:block right-[15%] top-[8%] z-10 w-9 opacity-90",
    depth: -12,
    rotate: -42,
  },
  {
    src: "/images/cutouts/bean-3.png",
    w: 277,
    h: 248,
    className: "right-[4%] top-[10%] z-20 w-9 sm:w-11 lg:right-[7%] lg:top-[12%] lg:w-12",
    depth: 20,
    rotate: 26,
  },
  {
    src: "/images/cutouts/bean-1.png",
    w: 283,
    h: 219,
    className: "hidden lg:block right-[4%] top-[27%] z-10 w-10 opacity-90",
    depth: 16,
    rotate: -32,
  },
  {
    src: "/images/cutouts/bean-5.png",
    w: 212,
    h: 273,
    className: "hidden lg:block left-[12%] top-[35%] z-20 w-9",
    depth: 22,
    rotate: 18,
  },
  {
    src: "/images/cutouts/bean-6.png",
    w: 261,
    h: 261,
    className: "hidden lg:block left-[7%] bottom-[47%] z-10 w-11",
    depth: 22,
    rotate: -28,
  },
  {
    src: "/images/cutouts/bean-1.png",
    w: 283,
    h: 219,
    className: "left-[6%] top-[44%] z-20 w-8 sm:w-9 lg:left-[36%] lg:top-auto lg:bottom-[44%] lg:w-10",
    depth: 24,
    rotate: -24,
  },
  {
    src: "/images/cutouts/bean-3.png",
    w: 277,
    h: 248,
    className: "hidden lg:block left-[33%] bottom-[35%] z-10 w-9",
    depth: 14,
    rotate: 40,
  },
  {
    src: "/images/cutouts/bean-2.png",
    w: 303,
    h: 152,
    className: "hidden lg:block right-[11%] bottom-[47%] z-0 w-10 opacity-80",
    depth: -12,
    rotate: 20,
    blur: true,
  },
  {
    src: "/images/cutouts/bean-5.png",
    w: 212,
    h: 273,
    className: "right-[6%] bottom-[42%] z-20 w-9 sm:w-10 lg:right-[31%] lg:bottom-[36%] lg:w-11",
    depth: 24,
    rotate: 16,
  },
  {
    src: "/images/cutouts/bean-3.png",
    w: 277,
    h: 248,
    className: "hidden lg:block right-[4%] bottom-[38%] z-10 w-10 opacity-85",
    depth: -14,
    rotate: -36,
    blur: true,
  },
  {
    src: "/images/cutouts/bean-1.png",
    w: 283,
    h: 219,
    className: "hidden lg:block right-[14%] bottom-[31%] z-20 w-11",
    depth: 20,
    rotate: -15,
  },
  {
    src: "/images/cutouts/bean-6.png",
    w: 261,
    h: 261,
    className: "hidden lg:block right-[22%] bottom-[25%] z-20 w-10",
    depth: 26,
    rotate: 38,
  },
  {
    src: "/images/cutouts/bean-4.png",
    w: 287,
    h: 222,
    className: "hidden lg:block right-[6%] bottom-[26%] z-10 w-9 opacity-90",
    depth: 14,
    rotate: -48,
  },
  {
    src: "/images/cutouts/bean-4.png",
    w: 287,
    h: 222,
    className: "hidden lg:block right-[29%] bottom-[10%] z-20 w-12",
    depth: 16,
    rotate: 22,
  },
  {
    src: "/images/cutouts/bean-5.png",
    w: 212,
    h: 273,
    className: "hidden lg:block right-[36%] bottom-[6%] z-30 w-9",
    depth: 28,
    rotate: -18,
  },
];

function ParallaxBean({
  spec,
  mouseX,
  mouseY,
  reducedMotion,
}: {
  spec: FloatingBeanSpec;
  mouseX: ReturnType<typeof useSpring>;
  mouseY: ReturnType<typeof useSpring>;
  reducedMotion: boolean;
}) {
  const x = useTransform(mouseX, (v) => (reducedMotion ? 0 : v * spec.depth));
  const y = useTransform(mouseY, (v) => (reducedMotion ? 0 : v * spec.depth));

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y, rotate: spec.rotate }}
      className={`pointer-events-none absolute select-none ${spec.className}`}
    >
      <Image
        src={spec.src}
        alt=""
        width={spec.w}
        height={spec.h}
        sizes="64px"
        loading="eager"
        className={`h-auto w-full drop-shadow-[0_12px_14px_rgba(36,29,24,0.26)] ${
          spec.blur ? "blur-[0.8px]" : ""
        }`}
      />
    </motion.div>
  );
}

function ScallopedOrderSeal({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.06, rotate: -6 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.22, ease: EDITORIAL_EASE }}
      className="group relative flex h-[106px] w-[106px] -rotate-12 items-center justify-center rounded-full sm:h-[124px] sm:w-[124px] lg:h-[136px] lg:w-[136px]"
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
        <span>Order</span>
        <span>now</span>
      </span>
    </motion.a>
  );
}

// Desktop spline weaves above Single-Origin, loops behind the pouch, then crosses cleanly in front and exits above LOT 01
const DESKTOP_BACK_RIBBON =
  "M -20 385 C 200 385, 445 388, 505 460 C 545 508, 530 625, 610 658 C 695 688, 915 655, 915 535 C 915 445, 675 415, 615 495 C 590 528, 595 555, 635 575";
const DESKTOP_FRONT_RIBBON =
  "M 635 575 C 700 608, 835 612, 922 560 C 1030 495, 1215 415, 1465 375";
const MOBILE_RIBBON =
  "M -20 330 C 240 250, 560 475, 900 330 C 1150 220, 1320 300, 1465 265";

/** Shared animated ribbon path so back-pass and foreground wrap match color, stroke, and easing. */
function HeroRibbonPath({
  d,
  reducedMotion,
  delay = 0,
  duration = 1,
  className,
}: {
  d: string;
  reducedMotion: boolean;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="#C9734B"
      strokeWidth={3.3}
      strokeLinecap="round"
      className={className}
      initial={
        reducedMotion
          ? { pathLength: 1, opacity: 0.78 }
          : { pathLength: 0, opacity: delay > 0 ? 0 : 0.25 }
      }
      animate={{ pathLength: 1, opacity: 0.78 }}
      transition={{ duration, delay, ease: EDITORIAL_EASE }}
    />
  );
}

export function HeroCutoutShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion() ?? false;

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const smoothX = useSpring(rawX, { stiffness: 110, damping: 22 });
  const smoothY = useSpring(rawY, { stiffness: 110, damping: 22 });

  const beans = BEAN_PRODUCTS;
  const currentBean = beans[activeIndex];
  const whatsappUrl = buildBeanWhatsAppUrl(
    currentBean,
    "200g",
    "Whole Bean (Biji Utuh)",
    1,
  );

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || e.pointerType !== "mouse" || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    rawX.set(nx);
    rawY.set(ny);
  };

  const handlePointerLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const handleStageKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % beans.length);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + beans.length) % beans.length);
    }
  };

  return (
    <section id="top" className="relative bg-[#F5F0EA] text-[#14110F]">
      <div
        ref={stageRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="relative overflow-x-clip"
      >
        {/* Subtle roast-sieve dot texture balancing the airy cream right margin */}
        <div
          aria-hidden="true"
          className="hero-dot-field pointer-events-none absolute inset-y-0 right-0 w-[48%]"
        />

        {/* Back SVG ribbon layer (weaves behind pouch & Order seal, dodging all hero copy) */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 720"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        >
          <HeroRibbonPath
            d={MOBILE_RIBBON}
            reducedMotion={reducedMotion}
            duration={1.0}
            className="lg:hidden"
          />
          <HeroRibbonPath
            d={DESKTOP_BACK_RIBBON}
            reducedMotion={reducedMotion}
            duration={0.9}
            className="hidden lg:block"
          />
        </svg>

        {/* Front SVG wrap segment (passes across lower pouch in front of z-20 image, stays behind z-30 Order seal & copy) */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 720"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 z-[25] hidden h-full w-full lg:block"
        >
          <HeroRibbonPath
            d={DESKTOP_FRONT_RIBBON}
            reducedMotion={reducedMotion}
            delay={0.62}
            duration={0.55}
          />
        </svg>

        <div className="relative mx-auto flex min-h-0 max-w-[1400px] flex-col justify-center px-5 pt-7 pb-11 sm:px-9 sm:pt-9 sm:pb-14 lg:min-h-[calc(100svh-84px)] lg:px-12 lg:pt-7 lg:pb-14">
          {/* Scattered Roasted Beans across wide stage */}
          {STAGE_BEANS.map((spec, idx) => (
            <ParallaxBean
              key={`${spec.src}-${idx}`}
              spec={spec}
              mouseX={smoothX}
              mouseY={smoothY}
              reducedMotion={reducedMotion}
            />
          ))}

          {/* Monumental Layered Display Headline */}
          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EDITORIAL_EASE }}
            className="relative z-10 mx-auto max-w-[1140px] text-center font-hero font-extrabold tracking-[-0.04em] text-[#3E2216] select-none"
          >
            <span className="flex flex-wrap items-baseline justify-center gap-x-3.5 sm:gap-x-6">
              <span className="text-[clamp(1.8rem,4.1vw,3.65rem)] leading-none font-bold tracking-[-0.03em] text-[#3E2216]">
                Slow Roasted
              </span>
              <span className="text-[clamp(3.95rem,11.8vw,10.1rem)] leading-[0.86] font-extrabold text-[#3E2216]">
                Coffee
              </span>
            </span>
            <span className="mt-0.5 block whitespace-nowrap text-[clamp(3.15rem,12.2vw,10.45rem)] leading-[0.86] font-extrabold text-[#3E2216]">
              Experience
            </span>
          </motion.h1>

          {/* Overlapping Cut-Out Pouch Stage + Left Blurb (z-auto wrapper lets pouch sit behind front ribbon while seal/text sit on top) */}
          <div className="relative -mt-1 grid grid-cols-1 items-end gap-8 sm:-mt-3 lg:-mt-[70px] lg:grid-cols-12 lg:gap-5 xl:-mt-[78px]">
            {/* Left Column: Origin Blurb + Lot Switcher */}
            <div className="relative z-30 order-2 flex flex-col items-center text-center lg:order-1 lg:col-span-4 lg:items-start lg:pb-5 lg:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBean.id}
                  initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.28, ease: EDITORIAL_EASE }}
                  className="max-w-[355px]"
                >
                  <p className="text-[17px] font-bold text-[#14110F] sm:text-lg">
                    Single-Origin · {currentBean.origin}
                  </p>
                  <p className="mt-2 text-[15.5px] leading-relaxed text-[#575049] sm:text-[16.5px]">
                    {currentBean.tastingNotes.join(", ")}.{" "}
                    {currentBean.tagline}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Accessible 3-Lot Switcher Tabs */}
              <div
                role="tablist"
                aria-label="Pilih varian kopi Livion"
                onKeyDown={handleStageKeyDown}
                className="mt-6 flex flex-wrap justify-center gap-2.5 lg:justify-start"
              >
                {beans.map((bean, i) => {
                  const isActive = i === activeIndex;
                  const shortName =
                    bean.id === "arabica-signature"
                      ? "Arabica"
                      : bean.id === "robusta-argopuro"
                        ? "Argopuro"
                        : "Temanggung";

                  return (
                    <button
                      key={bean.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveIndex(i)}
                      className={`inline-flex min-h-[48px] items-center justify-center rounded-full border px-5 py-2.5 text-[13.5px] font-semibold tracking-wide transition-colors ${
                        isActive
                          ? "border-[#8F511A] bg-[#8F511A] text-[#F5F0EA] shadow-xs"
                          : "border-[#14110F]/20 bg-[#F5F0EA]/90 text-[#14110F] hover:border-[#14110F]"
                      }`}
                    >
                      {shortName}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Center Column: Tilted Cut-Out Livion Pouch + Scalloped Order Seal */}
            <div className="relative order-1 flex justify-center lg:order-2 lg:col-span-5">
              <div className="relative flex aspect-[4/4.6] w-[286px] items-center justify-center sm:w-[340px] lg:w-[412px]">
                {/* Active Transparent Pouch Cut-Out */}
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={currentBean.id}
                    initial={
                      reducedMotion
                        ? false
                        : { opacity: 0, y: 18, scale: 0.94, rotate: -10 }
                    }
                    animate={{ opacity: 1, y: 0, scale: 1, rotate: -6 }}
                    exit={
                      reducedMotion
                        ? undefined
                        : { opacity: 0, y: -12, scale: 0.96, rotate: -2 }
                    }
                    transition={{ duration: 0.42, ease: EDITORIAL_EASE }}
                    className="relative z-20 flex h-full w-full items-center justify-center p-4"
                  >
                    <Image
                      src={currentBean.cutoutImage}
                      alt={`${currentBean.name} stand-up coffee pouch`}
                      width={currentBean.cutoutWidth}
                      height={currentBean.cutoutHeight}
                      sizes="(max-width: 640px) 264px, (max-width: 1024px) 320px, 380px"
                      loading="eager"
                      fetchPriority="high"
                      draggable={false}
                      className="h-[88%] w-auto object-contain select-none drop-shadow-[0_26px_30px_rgba(36,29,24,0.24)]"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Scalloped Terracotta Order Seal CTA overlapping bottom-left of pouch */}
                <div className="absolute bottom-[5%] left-[2%] z-30 sm:bottom-[6%] sm:-left-[2%] lg:bottom-[4%] lg:-left-[6%]">
                  <ScallopedOrderSeal
                    href={whatsappUrl}
                    label={`Pesan ${currentBean.name} 200g via WhatsApp`}
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Clean Airy Counterbalance Spec */}
            <div className="relative z-30 order-3 hidden flex-col items-end pb-7 text-right lg:col-span-3 lg:flex">
              <p className="font-display text-xl font-bold uppercase text-[#14110F]">
                {currentBean.roastLevel} Roast
              </p>
              <p className="mt-0.5 text-[13.5px] text-[#575049]">
                Best for: {currentBean.bestFor}
              </p>
            </div>
          </div>

          <p className="sr-only" aria-live="polite">
            Menampilkan {currentBean.name}, {currentBean.origin}.
          </p>
        </div>
      </div>
    </section>
  );
}
