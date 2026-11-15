"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { BEAN_PRODUCTS, formatIDR, type BeanProduct } from "@/data/beans";
import { BeanDetailModal } from "./BeanDetailModal";
import { EDITORIAL_EASE } from "./MotionPrimitives";

type AccentBean = {
  src: string;
  w: number;
  h: number;
  className: string;
  rotate: number;
};

type CardVisualConfig = {
  productId: string;
  variant: "corner-badge" | "center-featured";
  titleTop: string;
  titleBottom: string;
  textureSrc: string;
  textureAlt: string;
  accentBeans: AccentBean[];
};

const CARD_CONFIGS: CardVisualConfig[] = [
  {
    productId: "arabica-signature",
    variant: "corner-badge",
    titleTop: "Arabica",
    titleBottom: "Pilihan",
    textureSrc: "/images/textures/arabica-crema.jpg",
    textureAlt: "Tekstur crema espresso keemasan yang halus",
    accentBeans: [
      {
        src: "/images/cutouts/bean-2.png",
        w: 303,
        h: 152,
        className: "bottom-[58%] left-[37%] z-30 w-8 sm:w-9",
        rotate: -18,
      },
      {
        src: "/images/cutouts/bean-4.png",
        w: 287,
        h: 222,
        className: "bottom-[66%] left-[12%] z-30 w-7 sm:w-8",
        rotate: 28,
      },
    ],
  },
  {
    productId: "robusta-argopuro",
    variant: "center-featured",
    titleTop: "Robusta",
    titleBottom: "Argopuro",
    textureSrc: "/images/textures/argopuro-crema.jpg",
    textureAlt: "Tekstur crema espresso gelap pekat bergaris halus",
    accentBeans: [
      {
        src: "/images/cutouts/bean-1.png",
        w: 283,
        h: 219,
        className: "-top-10 left-[10%] z-30 w-9 sm:w-10",
        rotate: -24,
      },
      {
        src: "/images/cutouts/bean-3.png",
        w: 277,
        h: 248,
        className: "-top-14 left-[22%] z-30 w-8 sm:w-9",
        rotate: 34,
      },
      {
        src: "/images/cutouts/bean-6.png",
        w: 261,
        h: 261,
        className: "-top-7 left-[34%] z-30 w-7 sm:w-8",
        rotate: -42,
      },
    ],
  },
  {
    productId: "robusta-temanggung",
    variant: "corner-badge",
    titleTop: "Robusta",
    titleBottom: "Temanggung",
    textureSrc: "/images/textures/temanggung-foam.jpg",
    textureAlt: "Tekstur microfoam kopi yang lembut dan creamy",
    accentBeans: [
      {
        src: "/images/cutouts/bean-5.png",
        w: 212,
        h: 273,
        className: "bottom-[67%] left-[13%] z-30 w-7 sm:w-8",
        rotate: 16,
      },
      {
        src: "/images/cutouts/bean-1.png",
        w: 283,
        h: 219,
        className: "bottom-[55%] left-[36%] z-30 w-8 sm:w-9",
        rotate: -30,
      },
    ],
  },
];

function ShowcaseCard({
  product,
  config,
  index,
  reducedMotion,
  onSelect,
}: {
  product: BeanProduct;
  config: CardVisualConfig;
  index: number;
  reducedMotion: boolean;
  onSelect: (product: BeanProduct) => void;
}) {
  const isFeatured = config.variant === "center-featured";
  const priceLabel = formatIDR(product.basePrice200g);

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: EDITORIAL_EASE }}
      className={`group relative rounded-2xl bg-[#FFFFFF] transition-transform duration-300 ease-out hover:-translate-y-1.5 ${
        isFeatured
          ? "p-4 shadow-[0_26px_54px_rgba(36,29,24,0.1)] sm:p-5 md:-mt-4"
          : "p-3.5 shadow-[0_20px_42px_rgba(36,29,24,0.06)] sm:p-4 md:mt-12"
      }`}
    >
      {/* Floating top-left terracotta price pill for flanking cards */}
      {!isFeatured && (
        <span className="pointer-events-none absolute -top-3.5 left-4 z-30 inline-block -rotate-3 rounded-xl bg-[#B8421B] px-4 py-1.5 font-hero text-[15px] font-bold tracking-tight whitespace-nowrap text-[#FFFFFF] shadow-[0_10px_20px_rgba(184,66,27,0.28)] tabular-nums sm:text-[16px]">
          {priceLabel}
        </span>
      )}

      {/* Inner Coffee Crema / Microfoam Swatch */}
      <div
        className={`relative w-full overflow-hidden rounded-xl bg-[#E7E0D6] ${
          isFeatured ? "aspect-[16/11.5]" : "aspect-[16/10.8]"
        }`}
      >
        <Image
          src={config.textureSrc}
          alt={config.textureAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Decorative Plus Indicator (interaction handled seamlessly by full-card button below) */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute top-3.5 right-3.5 z-20 flex items-center justify-center rounded-full bg-[#3E2216] text-[#FFFFFF] shadow-md transition-[background-color,transform] duration-200 group-hover:scale-105 group-hover:bg-[#B8421B] ${
            isFeatured ? "h-12 w-12" : "h-11 w-11"
          }`}
        >
          <Plus className="h-5 w-5 stroke-[2.5]" />
        </span>
      </div>

      {/* Floating Cutout Pouch overlapping card geometry */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute select-none transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:-rotate-2 ${
          isFeatured
            ? "bottom-[104px] -left-2 z-20 w-[49%] max-w-[188px] -rotate-6 sm:bottom-[110px]"
            : "bottom-3.5 left-2 z-20 w-[45%] max-w-[164px] -rotate-6"
        }`}
      >
        <Image
          src={product.cutoutImage}
          alt=""
          width={product.cutoutWidth}
          height={product.cutoutHeight}
          sizes="(max-width: 768px) 48vw, 190px"
          className="h-auto w-full object-contain drop-shadow-[0_18px_22px_rgba(36,29,24,0.28)]"
        />
      </div>

      {/* Scattered accent roasted beans */}
      {config.accentBeans.map((bean, idx) => (
        <div
          key={`${product.id}-bean-${idx}`}
          aria-hidden="true"
          style={{ transform: `rotate(${bean.rotate}deg)` }}
          className={`pointer-events-none absolute select-none transition-transform duration-500 ease-out group-hover:-translate-y-1 ${bean.className}`}
        >
          <Image
            src={bean.src}
            alt=""
            width={bean.w}
            height={bean.h}
            sizes="48px"
            className="h-auto w-full drop-shadow-[0_8px_12px_rgba(36,29,24,0.26)]"
          />
        </div>
      ))}

      {/* Card Footer Typography */}
      {isFeatured ? (
        <div className="relative z-10 flex min-h-[104px] items-center justify-between gap-3 px-2 pt-5 pb-1">
          <h3 className="font-hero text-[24px] leading-[1.08] font-extrabold tracking-tight text-[#14110F] sm:text-[26px] lg:text-[28px]">
            <span className="block">{config.titleTop}</span>
            <span className="block">{config.titleBottom}</span>
          </h3>

          <span className="inline-block -rotate-2 rounded-xl bg-[#B8421B] px-4 py-1.5 font-hero text-[16px] font-bold tracking-tight whitespace-nowrap text-[#FFFFFF] shadow-[0_10px_20px_rgba(184,66,27,0.24)] tabular-nums sm:text-[17px]">
            {priceLabel}
          </span>
        </div>
      ) : (
        <div className="relative z-10 flex min-h-[104px] flex-col justify-center pt-5 pr-2 pb-1 pl-[48%]">
          <h3 className="font-hero text-[22px] leading-[1.08] font-extrabold tracking-tight text-[#14110F] sm:text-[24px] lg:text-[25px]">
            <span className="block">{config.titleTop}</span>
            <span className="block">{config.titleBottom}</span>
          </h3>
        </div>
      )}

      {/* Single accessible interaction layer opening variant/order modal */}
      <button
        type="button"
        onClick={() => onSelect(product)}
        aria-label={`Pilih varian dan pesan ${product.name}, mulai ${priceLabel}`}
        className="absolute inset-0 z-30 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8421B]"
      />
    </motion.article>
  );
}

export function CollectionShowcaseSection() {
  const [inspectedProduct, setInspectedProduct] = useState<BeanProduct | null>(
    null,
  );
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section
      id="beans"
      aria-labelledby="collection-heading"
      className="relative overflow-x-clip bg-[#F5F0EA] py-16 text-[#14110F] sm:py-20 lg:py-28"
    >
      {/* Continue subtle right-side roast-sieve dot pattern */}
      <div
        aria-hidden="true"
        className="hero-dot-field pointer-events-none absolute inset-y-0 right-0 z-0 w-[46%] opacity-85"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-12">
        {/* Asymmetric Header: Editorial intro left, bold display title right */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.52, ease: EDITORIAL_EASE }}
            className="max-w-[360px] text-[15.5px] leading-[1.65] text-[#575049] sm:text-[17px] lg:col-span-5"
          >
            Biji kopi pilihan yang disangrai fresh tiap minggu dalam porsi kecil.
            Manisnya pas, cremanya tebal, dan nyaman diseduh tiap hari.
          </motion.p>

          <motion.h2
            id="collection-heading"
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.56, ease: EDITORIAL_EASE }}
            className="font-hero text-[clamp(2.35rem,4.5vw,4.25rem)] leading-[1.02] font-extrabold tracking-[-0.03em] text-[#3E2216] lg:col-span-7 lg:text-right"
          >
            <span className="block">Pilihan Pas</span>
            <span className="block">Buat Seleramu</span>
          </motion.h2>
        </div>

        {/* Staggered 3-Card Product Showcase */}
        <div className="mt-16 grid grid-cols-1 gap-14 md:mt-20 md:grid-cols-3 md:items-start md:gap-6 lg:mt-24 lg:gap-8 xl:gap-10">
          {CARD_CONFIGS.map((config, idx) => {
            const product = BEAN_PRODUCTS.find((b) => b.id === config.productId);
            if (!product) return null;

            return (
              <ShowcaseCard
                key={product.id}
                product={product}
                config={config}
                index={idx}
                reducedMotion={reducedMotion}
                onSelect={setInspectedProduct}
              />
            );
          })}
        </div>
      </div>

      <BeanDetailModal
        product={inspectedProduct}
        onClose={() => setInspectedProduct(null)}
      />
    </section>
  );
}
