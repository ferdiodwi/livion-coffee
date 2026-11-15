"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Minus, Plus, X } from "lucide-react";
import {
  buildBeanWhatsAppUrl,
  calculateBeanPrice,
  formatIDR,
  GRIND_OPTIONS,
  WEIGHT_OPTIONS,
  type BeanProduct,
  type GrindOption,
  type WeightOption,
} from "@/data/beans";
import { AnimatedValue, EDITORIAL_EASE } from "./MotionPrimitives";

interface BeanDetailModalProps {
  product: BeanProduct | null;
  onClose: () => void;
}

const MODAL_TEXTURES: Record<string, { src: string; alt: string }> = {
  "arabica-signature": {
    src: "/images/textures/arabica-crema.jpg",
    alt: "Macro golden espresso crema texture",
  },
  "robusta-argopuro": {
    src: "/images/textures/argopuro-crema.jpg",
    alt: "Macro bronze tiger-stripe espresso crema texture",
  },
  "robusta-temanggung": {
    src: "/images/textures/temanggung-foam.jpg",
    alt: "Macro silky espresso microfoam swirl texture",
  },
};

function ModalContent({
  product,
  onClose,
}: {
  product: BeanProduct;
  onClose: () => void;
}) {
  const [weight, setWeight] = useState<WeightOption["label"]>("200g");
  const [grind, setGrind] = useState<GrindOption>("Whole Bean (Biji Utuh)");
  const [quantity, setQuantity] = useState(1);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion() ?? false;

  const unitPrice = calculateBeanPrice(product.basePrice200g, weight);
  const totalPrice = unitPrice * quantity;
  const whatsappHref = buildBeanWhatsAppUrl(product, weight, grind, quantity);
  const texture =
    MODAL_TEXTURES[product.id] ?? MODAL_TEXTURES["arabica-signature"];

  const specItems = [
    { label: "Altitude", value: product.altitude },
    { label: "Process", value: product.process },
    { label: "Roast", value: product.roastLevel },
    { label: "Best For", value: product.bestFor },
  ];

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus?.();
    };
  }, [onClose]);

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reducedMotion ? { opacity: 0 } : { opacity: 0 }}
      transition={{ duration: reducedMotion ? 0.01 : 0.22 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2C1810]/65 p-3 backdrop-blur-xs sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${product.id}`}
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <motion.div
        initial={reducedMotion ? false : { opacity: 0, scale: 0.96, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={
          reducedMotion
            ? { opacity: 0 }
            : { opacity: 0, scale: 0.97, y: 8 }
        }
        transition={{
          duration: reducedMotion ? 0.01 : 0.3,
          ease: EDITORIAL_EASE,
        }}
        className="relative z-10 w-full max-w-[940px] overflow-hidden rounded-[28px] border border-[#FFFFFF]/80 bg-[#F5F0EA] text-[#14110F] shadow-[0_28px_72px_rgba(36,29,24,0.34)] sm:rounded-[34px]"
      >
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Tutup detail produk"
          className="absolute top-4 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-[#3E2216]/15 bg-[#F4EEE8] text-[#3E2216] transition-colors hover:bg-[#3E2216] hover:text-[#F5F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E2216] sm:top-5 sm:right-5"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="grid max-h-[90svh] overflow-y-auto md:grid-cols-12">
          {/* Left Visual Showcase echoing the dusty-taupe card, macro crema layer, and floating cutout pouch */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-[#E7DDDD] p-5 sm:p-7 md:col-span-5 md:p-7">
            <div
              aria-hidden="true"
              className="hero-dot-field pointer-events-none absolute top-0 right-0 z-0 h-44 w-[70%] opacity-80"
            />

            <div className="relative z-10 flex items-center justify-between pr-12 md:pr-0">
              <span className="inline-flex items-center rounded-full bg-[#4E2716] px-3.5 py-1.5 font-display text-[13px] font-bold tracking-[-0.01em] text-[#FBF8F4]">
                Lot {product.index} · {product.roastLevel}
              </span>
            </div>

            <div className="relative z-10 my-4 flex items-end justify-center px-2 pt-3 pb-3 md:my-6">
              {/* Inset rounded macro crema texture anchored behind lower half of pouch */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] overflow-hidden rounded-[22px] border border-[#FFFFFF]/65 shadow-inner">
                <Image
                  src={texture.src}
                  alt={texture.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 340px"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#3E2216]/12"
                />
              </div>

              {/* Floating Cutout Pouch in flow so container height always clears Lot badge & tasting pills */}
              <div className="pointer-events-none relative z-20 select-none">
                <Image
                  src={product.cutoutImage}
                  alt={`${product.name} craft pouch`}
                  width={product.cutoutWidth}
                  height={product.cutoutHeight}
                  sizes="(max-width: 768px) 150px, 230px"
                  className="h-auto w-[128px] -rotate-3 drop-shadow-[0_20px_24px_rgba(36,29,24,0.28)] sm:w-[146px] md:w-[196px] lg:w-[214px]"
                />
              </div>

              {/* Accent roasted beans */}
              <Image
                src="/images/cutouts/bean-1.png"
                alt=""
                aria-hidden="true"
                width={283}
                height={219}
                sizes="48px"
                className="pointer-events-none absolute top-4 left-[10%] z-30 w-8 -rotate-18 select-none drop-shadow-[0_8px_10px_rgba(36,29,24,0.22)] md:w-10"
              />
              <Image
                src="/images/cutouts/bean-4.png"
                alt=""
                aria-hidden="true"
                width={287}
                height={222}
                sizes="44px"
                className="pointer-events-none absolute top-12 right-[10%] z-30 w-7 rotate-26 select-none drop-shadow-[0_8px_10px_rgba(36,29,24,0.22)] md:w-9"
              />
            </div>

            {/* Tasting notes pills */}
            <div className="relative z-10 flex flex-wrap gap-2">
              {product.tastingNotes.map((note) => (
                <span
                  key={note}
                  className="inline-flex items-center rounded-full border border-[#FFFFFF]/80 bg-[#F4EEE8]/95 px-3 py-1 text-[12.5px] font-semibold text-[#3E2216] shadow-[0_4px_12px_rgba(62,34,22,0.06)]"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Right Variant & Order Configuration Panel */}
          <div className="flex flex-col justify-between p-6 sm:p-8 md:col-span-7 md:p-9">
            <div>
              <p className="font-display text-[13.5px] font-bold tracking-[0.01em] text-[#B8421B] capitalize sm:text-[14.5px]">
                {product.category} · {product.origin}
              </p>

              <h3
                id={`modal-title-${product.id}`}
                className="mt-1.5 pr-12 font-hero text-[clamp(1.85rem,3vw,2.55rem)] leading-[1.06] font-extrabold tracking-[-0.03em] text-[#3E2216]"
              >
                {product.name}
              </h3>

              <p className="mt-3 text-[15.5px] leading-[1.6] text-[#4A423C]">
                {product.description}
              </p>

              {/* Soft warm tactile spec cards */}
              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3">
                {specItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[16px] border border-[#3E2216]/8 bg-[#EDE4DC]/80 px-3.5 py-2.5"
                  >
                    <p className="text-[12px] font-medium text-[#5E4336]">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-[14px] font-semibold text-[#3E2216]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Weight Selector Pills */}
              <div
                className="mt-6"
                role="group"
                aria-labelledby={`modal-weight-label-${product.id}`}
              >
                <p
                  id={`modal-weight-label-${product.id}`}
                  className="text-[13.5px] font-semibold text-[#3E2216]"
                >
                  Pilih Berat Kemasan
                </p>
                <div className="mt-2.5 grid grid-cols-3 gap-2.5">
                  {WEIGHT_OPTIONS.map((opt) => {
                    const selected = weight === opt.label;
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setWeight(opt.label)}
                        className={`min-h-[48px] rounded-full border px-4 py-2.5 font-display text-[15px] font-bold transition-[background-color,border-color,color,transform] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E2216] active:scale-[0.98] ${
                          selected
                            ? "border-[#3E2216] bg-[#3E2216] text-[#FBF8F4] shadow-xs"
                            : "border-[#3E2216]/18 bg-[#FFFFFF] text-[#3E2216] hover:border-[#3E2216]/50"
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Grind & Quantity Controls */}
              <div className="mt-5 grid gap-3.5 sm:grid-cols-3">
                <div className="sm:col-span-2">
                  <label
                    htmlFor={`modal-grind-${product.id}`}
                    className="block text-[13.5px] font-semibold text-[#3E2216]"
                  >
                    Pilih Gilingan
                  </label>
                  <select
                    id={`modal-grind-${product.id}`}
                    value={grind}
                    onChange={(e) => setGrind(e.target.value as GrindOption)}
                    className="mt-2 min-h-[48px] w-full rounded-[16px] border border-[#3E2216]/18 bg-[#FFFFFF] px-4 py-2.5 text-[15px] font-medium text-[#3E2216] transition-colors hover:border-[#3E2216]/45 focus:border-[#B8421B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E2216]"
                  >
                    {GRIND_OPTIONS.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <span
                    id={`modal-qty-label-${product.id}`}
                    className="block text-[13.5px] font-semibold text-[#3E2216]"
                  >
                    Jumlah
                  </span>
                  <div
                    role="group"
                    aria-labelledby={`modal-qty-label-${product.id}`}
                    className="mt-2 flex h-[48px] items-center justify-between rounded-full border border-[#3E2216]/18 bg-[#FFFFFF] px-1.5"
                  >
                    <button
                      type="button"
                      disabled={quantity <= 1}
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      aria-label="Kurangi jumlah"
                      className="flex h-9 w-9 items-center justify-center rounded-full text-[#3E2216] transition-colors hover:bg-[#EDE4DC] focus-visible:outline-2 focus-visible:outline-[#3E2216] disabled:cursor-not-allowed disabled:opacity-35"
                    >
                      <Minus className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <span className="font-display text-[16px] font-bold text-[#3E2216] tabular-nums">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      aria-label="Tambah jumlah"
                      className="flex h-9 w-9 items-center justify-center rounded-full text-[#3E2216] transition-colors hover:bg-[#EDE4DC] focus-visible:outline-2 focus-visible:outline-[#3E2216]"
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Total + WhatsApp Action Pill */}
            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#3E2216]/12 pt-5">
              <div>
                <p className="text-[13px] font-medium text-[#5E4336]">
                  Total · {quantity}x {weight}
                </p>
                <p className="mt-0.5 font-hero text-[1.75rem] leading-tight font-extrabold tracking-[-0.02em] text-[#3E2216] tabular-nums sm:text-[1.95rem]">
                  <AnimatedValue valueKey={totalPrice}>
                    {formatIDR(totalPrice)}
                  </AnimatedValue>
                </p>
              </div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#B8421B] px-7 py-3 font-hero text-[15.5px] font-extrabold tracking-[-0.01em] text-[#FFFFFF] shadow-[0_10px_24px_rgba(184,66,27,0.24)] transition-[background-color,transform] hover:bg-[#3E2216] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3E2216] active:scale-[0.97]"
              >
                Pesan via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function BeanDetailModal({ product, onClose }: BeanDetailModalProps) {
  return (
    <AnimatePresence>
      {product && (
        <ModalContent key={product.id} product={product} onClose={onClose} />
      )}
    </AnimatePresence>
  );
}
