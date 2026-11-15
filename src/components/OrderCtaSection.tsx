"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { BEAN_PRODUCTS, DEFAULT_GRIND, buildBeanWhatsAppUrl } from "@/data/beans";
import { EDITORIAL_EASE } from "./MotionPrimitives";
import { ScallopedOrderSeal } from "./ScallopedOrderSeal";

// Subtle terracotta ribbon arc sweeping behind the headline and hand-held Arabica pouch
const CTA_RIBBON_PATH =
  "M -20 135 C 235 8, 635 12, 920 128 C 1105 204, 1285 215, 1460 155";

export function OrderCtaSection() {
  const reducedMotion = useReducedMotion() ?? false;
  const featuredBean = BEAN_PRODUCTS[0];
  const orderHref = buildBeanWhatsAppUrl(
    featuredBean,
    "200g",
    DEFAULT_GRIND,
    1,
  );

  return (
    <section
      id="order-cta"
      aria-labelledby="order-cta-heading"
      className="relative overflow-x-clip bg-[#F5F0EA] text-[#14110F]"
    >
      {/* Arching terracotta ribbon line spanning top of closing CTA canvas */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
        className="pointer-events-none absolute top-2 left-0 z-0 h-[150px] w-full sm:top-4 sm:h-[210px] lg:h-[250px]"
      >
        <motion.path
          d={CTA_RIBBON_PATH}
          fill="none"
          stroke="#C9734B"
          strokeWidth={2.8}
          strokeLinecap="round"
          initial={
            reducedMotion
              ? { pathLength: 1, opacity: 0.72 }
              : { pathLength: 0, opacity: 0.25 }
          }
          whileInView={{ pathLength: 1, opacity: 0.72 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.0, ease: EDITORIAL_EASE }}
        />
      </svg>

      <div className="relative mx-auto max-w-[1400px] px-5 pt-16 pb-6 sm:px-7 sm:pt-20 sm:pb-10 lg:px-12 lg:pt-24 lg:pb-16">
        <div className="relative z-20 lg:min-h-[360px] xl:min-h-[420px]">
          <div className="flex flex-col items-start lg:max-w-[52%] lg:pt-4">
            <motion.h2
              id="order-cta-heading"
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.58, ease: EDITORIAL_EASE }}
              className="font-hero text-[clamp(2.65rem,5.7vw,5.2rem)] leading-[0.98] font-extrabold tracking-[-0.03em] text-[#3E2216]"
            >
              <span className="block">Temukan</span>
              <span className="block">Kopi Pas</span>
              <span className="block">Untukmu</span>
            </motion.h2>

            {/* Scalloped Order Seal paired beside line 3 on desktop, clean spacing on mobile */}
            <div className="mt-6 lg:mt-0 lg:self-end lg:translate-x-[16px] lg:-translate-y-[92px] xl:translate-x-[36px] xl:-translate-y-[108px]">
              <ScallopedOrderSeal
                href={orderHref}
                label={`Pesan ${featuredBean.name} 200g lewat WhatsApp`}
                className="h-[114px] w-[114px] -rotate-12 sm:h-[128px] sm:w-[128px] lg:h-[138px] lg:w-[138px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Edge Cutout: Arm entering flush from the right margin holding the Livion Arabica pouch */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, x: 28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.64, delay: 0.08, ease: EDITORIAL_EASE }}
        className="pointer-events-none relative z-10 mt-2 ml-auto w-[92%] max-w-[490px] select-none lg:absolute lg:top-[14%] lg:right-0 lg:mt-0 lg:w-[44vw] lg:max-w-[620px] xl:top-[12%]"
      >
        <Image
          src="/images/cutouts/cta-hand-arabica.png"
          alt="Tangan memegang kemasan biji kopi Livion Arabica Coffee"
          width={954}
          height={715}
          sizes="(max-width: 1024px) 92vw, 620px"
          className="h-auto w-full object-contain object-right drop-shadow-[0_22px_28px_rgba(36,29,24,0.2)]"
        />
      </motion.div>
    </section>
  );
}
