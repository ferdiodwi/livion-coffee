"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BEAN_PRODUCTS, formatIDR } from "@/data/beans";
import { useCart } from "./CartContext";

export function SignatureLot() {
  const { addItem } = useCart();
  const flagship = BEAN_PRODUCTS[0];

  const specRows = [
    { label: "ORIGIN", value: flagship.origin },
    { label: "ALTITUDE", value: flagship.altitude },
    { label: "PROCESS", value: flagship.process },
    { label: "ROAST LEVEL", value: flagship.roastLevel },
    { label: "BEST FOR", value: flagship.bestFor },
    { label: "PRICE (200G)", value: formatIDR(flagship.basePrice200g) },
  ];

  return (
    <section
      id="signature"
      className="border-b border-[#14110F]/15 bg-[#F5F0EA] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-[#14110F]/15 pb-3 font-mono text-[11px] uppercase tracking-widest text-[#6E675F]">
          <span>SIGNATURE LOT / 002</span>
          <span className="text-[#C4552D]">ROASTER&apos;S PICK</span>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden border border-[#14110F]/15 bg-[#E7E0D6]">
              <div className="relative aspect-square w-full">
                <Image
                  src={flagship.image}
                  alt={flagship.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between border-t border-[#14110F]/15 bg-[#F5F0EA] px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider">
                <span>CUPPING SCORE — {flagship.cuppingScore}</span>
                <span className="text-[#C4552D]">WHOLE / GROUND</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-widest text-[#C4552D]">
              {flagship.category} · {flagship.origin}
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-[#14110F] sm:text-5xl">
              {flagship.name}
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {flagship.tastingNotes.map((note) => (
                <span
                  key={note}
                  className="border border-[#14110F]/20 bg-[#E7E0D6]/70 px-3 py-1 font-mono text-xs uppercase tracking-wider text-[#14110F]"
                >
                  {note}
                </span>
              ))}
            </div>

            <p className="mt-5 text-base leading-relaxed text-[#6E675F]">
              {flagship.description}
            </p>

            <div className="mt-6 divide-y divide-[#14110F]/15 border-y border-[#14110F]/15">
              {specRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between py-2.5 text-sm"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-[#6E675F]">
                    {row.label}
                  </span>
                  <span className="font-medium text-[#14110F]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  addItem(flagship, "200g", "Whole Bean (Biji Utuh)", 1)
                }
                className="inline-flex items-center gap-2.5 bg-[#14110F] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#F5F0EA] transition-colors hover:bg-[#C4552D]"
              >
                Add Signature 200g to Bag
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#beans"
                className="border-b border-[#14110F] pb-0.5 text-xs font-semibold uppercase tracking-widest text-[#14110F] transition-colors hover:border-[#C4552D] hover:text-[#C4552D]"
              >
                Compare All 3 Lots
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
