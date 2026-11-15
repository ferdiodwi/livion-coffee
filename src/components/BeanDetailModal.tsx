"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Minus, Plus, X } from "lucide-react";
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

  const unitPrice = calculateBeanPrice(product.basePrice200g, weight);
  const totalPrice = unitPrice * quantity;
  const whatsappHref = buildBeanWhatsAppUrl(product, weight, grind, quantity);

  useEffect(() => {
    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#14110F]/65 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label={`Detail ${product.name}`}
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 8 }}
        transition={{ duration: 0.3, ease: EDITORIAL_EASE }}
        className="relative z-10 grid max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-[#14110F]/20 bg-[#F5F0EA] text-[#14110F] shadow-2xl md:grid-cols-12"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup detail produk"
          className="absolute top-3 right-3 z-20 flex h-11 w-11 items-center justify-center rounded-sm bg-[#F5F0EA]/95 text-[#14110F] transition-colors hover:bg-[#14110F] hover:text-[#F5F0EA]"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="relative aspect-square bg-[#E7E0D6] md:col-span-5 md:aspect-auto">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-between p-6 md:col-span-7">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#A8401B]">
              {product.category} · {product.origin}
            </p>
            <h3 className="mt-1.5 font-display text-3xl font-bold uppercase tracking-tight">
              {product.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#575049]">
              {product.description}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2.5 border-y border-[#14110F]/12 py-3.5 font-mono text-xs">
              <div>
                <span className="text-[#575049]">ALTITUDE: </span>
                <span className="font-semibold">{product.altitude}</span>
              </div>
              <div>
                <span className="text-[#575049]">PROCESS: </span>
                <span className="font-semibold">{product.process}</span>
              </div>
              <div>
                <span className="text-[#575049]">ROAST: </span>
                <span className="font-semibold">{product.roastLevel}</span>
              </div>
              <div>
                <span className="text-[#575049]">BEST FOR: </span>
                <span className="font-semibold">{product.bestFor}</span>
              </div>
            </div>

            <div className="mt-5">
              <p className="font-mono text-[11px] uppercase tracking-wider text-[#575049]">
                Pilih Berat Kemasan
              </p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {WEIGHT_OPTIONS.map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => setWeight(opt.label)}
                    className={`min-h-[44px] border py-2 font-mono text-xs font-semibold transition-colors ${
                      weight === opt.label
                        ? "border-[#8F511A] bg-[#8F511A] text-[#F5F0EA]"
                        : "border-[#14110F]/20 bg-white/60 text-[#14110F] hover:border-[#14110F]"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="sm:col-span-2">
                <label
                  htmlFor={`modal-grind-${product.id}`}
                  className="block font-mono text-[11px] uppercase tracking-wider text-[#575049]"
                >
                  Pilih Gilingan
                </label>
                <select
                  id={`modal-grind-${product.id}`}
                  value={grind}
                  onChange={(e) => setGrind(e.target.value as GrindOption)}
                  className="mt-1.5 min-h-[44px] w-full border border-[#14110F]/25 bg-white/80 px-3 py-2.5 text-sm text-[#14110F] focus:border-[#B8421B]"
                >
                  {GRIND_OPTIONS.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-[#575049]">
                  Jumlah
                </span>
                <div className="mt-1.5 flex h-[44px] items-center justify-between border border-[#14110F]/25 bg-white/80 px-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Kurangi jumlah"
                    className="flex h-10 w-10 items-center justify-center text-[#14110F] hover:text-[#A8401B]"
                  >
                    <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                  <span className="font-mono text-sm font-semibold tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Tambah jumlah"
                    className="flex h-10 w-10 items-center justify-center text-[#14110F] hover:text-[#A8401B]"
                  >
                    <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-[#14110F]/12 pt-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#575049]">
                Total ({quantity}x {weight})
              </p>
              <p className="font-mono text-xl font-bold text-[#14110F] tabular-nums">
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
              className="inline-flex min-h-[44px] items-center gap-2 bg-[#B8421B] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] transition-[background-color,transform] hover:bg-[#14110F] active:scale-[0.98]"
            >
              Pesan via WhatsApp
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
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
