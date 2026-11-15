"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingBag, X } from "lucide-react";
import {
  calculateBeanPrice,
  formatIDR,
  GRIND_OPTIONS,
  WEIGHT_OPTIONS,
  type BeanProduct,
  type GrindOption,
  type WeightOption,
} from "@/data/beans";
import { useCart } from "./CartContext";

interface BeanDetailModalProps {
  product: BeanProduct | null;
  onClose: () => void;
}

export function BeanDetailModal({ product, onClose }: BeanDetailModalProps) {
  const { addItem } = useCart();
  const [weight, setWeight] = useState<WeightOption["label"]>("200g");
  const [grind, setGrind] = useState<GrindOption>("Whole Bean (Biji Utuh)");

  if (!product) return null;

  const price = calculateBeanPrice(product.basePrice200g, weight);

  const handleAdd = () => {
    addItem(product, weight, grind, 1);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#14110F]/70 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label={`Detail ${product.name}`}
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 grid max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-[#14110F]/20 bg-[#F5F0EA] text-[#14110F] shadow-2xl md:grid-cols-12">
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup detail produk"
          className="absolute top-3 right-3 z-20 rounded-sm bg-[#F5F0EA]/90 p-1.5 text-[#14110F] transition-colors hover:bg-[#14110F] hover:text-[#F5F0EA]"
        >
          <X className="h-5 w-5" />
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
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#C4552D]">
              {product.index} · {product.category} · {product.origin}
            </p>
            <h3 className="mt-1.5 font-display text-3xl font-bold uppercase tracking-tight">
              {product.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#6E675F]">
              {product.description}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 border-y border-[#14110F]/15 py-3 font-mono text-xs">
              <div>
                <span className="text-[#6E675F]">ALTITUDE: </span>
                <span className="font-semibold">{product.altitude}</span>
              </div>
              <div>
                <span className="text-[#6E675F]">PROCESS: </span>
                <span className="font-semibold">{product.process}</span>
              </div>
              <div>
                <span className="text-[#6E675F]">ROAST: </span>
                <span className="font-semibold">{product.roastLevel}</span>
              </div>
              <div>
                <span className="text-[#6E675F]">SCORE: </span>
                <span className="font-semibold">{product.cuppingScore}</span>
              </div>
            </div>

            <div className="mt-5">
              <p className="font-mono text-[11px] uppercase tracking-wider text-[#6E675F]">
                Pilih Berat Kemasan
              </p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {WEIGHT_OPTIONS.map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => setWeight(opt.label)}
                    className={`border py-2 font-mono text-xs font-semibold transition-colors ${
                      weight === opt.label
                        ? "border-[#14110F] bg-[#14110F] text-[#F5F0EA]"
                        : "border-[#14110F]/20 bg-white/60 text-[#14110F] hover:border-[#14110F]"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor={`modal-grind-${product.id}`}
                className="block font-mono text-[11px] uppercase tracking-wider text-[#6E675F]"
              >
                Pilih Gilingan
              </label>
              <select
                id={`modal-grind-${product.id}`}
                value={grind}
                onChange={(e) => setGrind(e.target.value as GrindOption)}
                className="mt-1.5 w-full border border-[#14110F]/25 bg-white/80 px-3 py-2 text-sm text-[#14110F] focus:border-[#C4552D] focus:outline-none"
              >
                {GRIND_OPTIONS.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-[#14110F]/15 pt-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#6E675F]">
                Harga ({weight})
              </p>
              <p className="font-mono text-xl font-bold text-[#14110F]">
                {formatIDR(price)}
              </p>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="inline-flex items-center gap-2 bg-[#C4552D] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#F5F0EA] transition-colors hover:bg-[#14110F]"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
