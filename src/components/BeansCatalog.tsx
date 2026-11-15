"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import {
  BEAN_PRODUCTS,
  buildBeanWhatsAppUrl,
  formatIDR,
  type BeanCategory,
  type BeanProduct,
} from "@/data/beans";
import { BeanDetailModal } from "./BeanDetailModal";
import { EDITORIAL_EASE, FadeUp } from "./MotionPrimitives";

type FilterTab = "all" | BeanCategory;

const TABS: { id: FilterTab; label: string }[] = [
  { id: "all", label: "All Beans" },
  { id: "arabica", label: "Arabica" },
  { id: "robusta", label: "Robusta" },
];

function BeanCard({
  product,
  index,
  onInspect,
}: {
  product: BeanProduct;
  index: number;
  onInspect: (product: BeanProduct) => void;
}) {
  const quickOrderUrl = buildBeanWhatsAppUrl(
    product,
    "200g",
    "Whole Bean (Biji Utuh)",
    1,
  );

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: EDITORIAL_EASE }}
      className="group flex flex-col justify-between border border-[#14110F]/12 bg-[#F5F0EA] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div>
        <button
          type="button"
          onClick={() => onInspect(product)}
          aria-label={`Pilih varian ${product.name}`}
          className="relative block aspect-[4/3.2] w-full overflow-hidden bg-[#E7E0D6] text-left"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <span className="absolute top-3 left-3 bg-[#14110F]/90 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#F5F0EA]">
            {product.index} · {product.category}
          </span>
        </button>

        <div className="p-6">
          <p className="font-mono text-[11px] uppercase tracking-wider text-[#A8401B]">
            {product.origin} · {product.roastLevel}
          </p>
          <h3 className="mt-1.5 font-display text-2xl font-bold uppercase tracking-tight text-[#14110F]">
            {product.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#575049]">
            {product.tagline}
          </p>

          <p className="mt-4 border-t border-[#14110F]/10 pt-3 font-mono text-xs text-[#14110F]/85">
            {product.tastingNotes.join(" · ")}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-[#14110F]/10 bg-[#E7E0D6]/40 px-6 py-4">
        <div>
          <span className="block font-mono text-[10px] uppercase tracking-wider text-[#575049]">
            Mulai 200g
          </span>
          <span className="font-mono text-base font-bold text-[#14110F] tabular-nums">
            {formatIDR(product.basePrice200g)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onInspect(product)}
            className="inline-flex min-h-[44px] items-center gap-1.5 border border-[#14110F]/25 px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#14110F] transition-colors hover:border-[#14110F] hover:bg-[#14110F] hover:text-[#F5F0EA]"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
            Varian
          </button>
          <a
            href={quickOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Pesan ${product.name} via WhatsApp`}
            className="inline-flex min-h-[44px] items-center gap-1.5 bg-[#14110F] px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] transition-[background-color,transform] hover:bg-[#B8421B] active:scale-[0.97]"
          >
            Order
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function BeansCatalog() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [inspectedProduct, setInspectedProduct] = useState<BeanProduct | null>(
    null,
  );

  const filteredProducts =
    activeTab === "all"
      ? BEAN_PRODUCTS
      : BEAN_PRODUCTS.filter((item) => item.category === activeTab);

  return (
    <section
      id="beans"
      className="border-b border-[#14110F]/12 bg-[#F5F0EA] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8401B]">
                01 : THE COLLECTION
              </p>
              <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-[#14110F] sm:text-5xl">
                OUR COFFEE BEANS
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#575049] sm:text-base">
                Pilih karakter kopi sesuai seleramu. Klik{" "}
                <span className="font-semibold text-[#14110F]">Varian</span>{" "}
                untuk atur berat (200g / 500g / 1kg) dan tingkat gilingan.
              </p>
            </div>

            <div
              className="inline-flex flex-wrap gap-1.5 border border-[#14110F]/15 bg-[#E7E0D6]/60 p-1"
              role="tablist"
              aria-label="Filter kategori kopi"
            >
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative min-h-[44px] px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-colors ${
                      isActive
                        ? "text-[#F5F0EA]"
                        : "text-[#575049] hover:text-[#14110F]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="catalog-tab-pill"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 32,
                        }}
                        className="absolute inset-0 bg-[#8F511A]"
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </FadeUp>

        <motion.div
          layout
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <BeanCard
                key={product.id}
                product={product}
                index={index}
                onInspect={setInspectedProduct}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <BeanDetailModal
        product={inspectedProduct}
        onClose={() => setInspectedProduct(null)}
      />
    </section>
  );
}
