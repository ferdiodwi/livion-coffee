"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, ShoppingBag } from "lucide-react";
import {
  BEAN_PRODUCTS,
  calculateBeanPrice,
  formatIDR,
  GRIND_OPTIONS,
  WEIGHT_OPTIONS,
  type BeanCategory,
  type BeanProduct,
  type GrindOption,
  type WeightOption,
} from "@/data/beans";
import { useCart } from "./CartContext";
import { BeanDetailModal } from "./BeanDetailModal";

type FilterTab = "all" | BeanCategory;

const TABS: { id: FilterTab; label: string }[] = [
  { id: "all", label: "All Beans (03)" },
  { id: "arabica", label: "Arabica (01)" },
  { id: "robusta", label: "Robusta (02)" },
];

function BeanCard({
  product,
  onInspect,
}: {
  product: BeanProduct;
  onInspect: (product: BeanProduct) => void;
}) {
  const { addItem } = useCart();
  const [weight, setWeight] = useState<WeightOption["label"]>("200g");
  const [grind, setGrind] = useState<GrindOption>("Whole Bean (Biji Utuh)");

  const currentPrice = calculateBeanPrice(product.basePrice200g, weight);

  return (
    <article className="flex flex-col justify-between border border-[#14110F]/15 bg-[#F5F0EA] transition-shadow hover:shadow-lg">
      <div>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E7E0D6]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
          <span className="absolute top-3 left-3 bg-[#14110F]/90 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#F5F0EA]">
            {product.index} · {product.category}
          </span>
          <button
            type="button"
            onClick={() => onInspect(product)}
            aria-label={`Lihat detail ${product.name}`}
            className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-[#F5F0EA]/95 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#14110F] transition-colors hover:bg-[#C4552D] hover:text-[#F5F0EA]"
          >
            <Eye className="h-3.5 w-3.5" />
            Detail
          </button>
        </div>

        <div className="p-5">
          <p className="font-mono text-[11px] uppercase tracking-wider text-[#C4552D]">
            {product.origin} · {product.roastLevel}
          </p>
          <h3 className="mt-1 font-display text-2xl font-bold uppercase tracking-tight text-[#14110F]">
            {product.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#6E675F]">
            {product.tagline}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.tastingNotes.map((note) => (
              <span
                key={note}
                className="border border-[#14110F]/15 bg-[#E7E0D6]/60 px-2 py-0.5 font-mono text-[11px] text-[#14110F]"
              >
                {note}
              </span>
            ))}
          </div>

          <div className="mt-4 space-y-3 border-t border-[#14110F]/12 pt-4">
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-[#6E675F]">
                Berat Kemasan
              </span>
              <div className="mt-1.5 grid grid-cols-3 gap-1.5">
                {WEIGHT_OPTIONS.map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => setWeight(opt.label)}
                    className={`border py-1.5 font-mono text-xs font-semibold transition-colors ${
                      weight === opt.label
                        ? "border-[#14110F] bg-[#14110F] text-[#F5F0EA]"
                        : "border-[#14110F]/20 text-[#14110F] hover:border-[#14110F]"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor={`grind-${product.id}`}
                className="block font-mono text-[10px] uppercase tracking-widest text-[#6E675F]"
              >
                Gilingan
              </label>
              <select
                id={`grind-${product.id}`}
                value={grind}
                onChange={(e) => setGrind(e.target.value as GrindOption)}
                className="mt-1 w-full border border-[#14110F]/20 bg-white/75 px-2.5 py-2 text-xs text-[#14110F] focus:border-[#C4552D] focus:outline-none"
              >
                {GRIND_OPTIONS.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-[#14110F]/12 bg-[#E7E0D6]/50 px-5 py-3.5">
        <div>
          <span className="block font-mono text-[10px] uppercase text-[#6E675F]">
            Harga {weight}
          </span>
          <span className="font-mono text-base font-bold text-[#14110F]">
            {formatIDR(currentPrice)}
          </span>
        </div>

        <button
          type="button"
          onClick={() => addItem(product, weight, grind, 1)}
          className="inline-flex items-center gap-2 bg-[#14110F] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F5F0EA] transition-colors hover:bg-[#C4552D]"
        >
          <ShoppingBag className="h-3.5 w-3.5" />
          Add to Bag
        </button>
      </div>
    </article>
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
      className="border-b border-[#14110F]/15 bg-[#F5F0EA] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-[#14110F]/15 pb-3 font-mono text-[11px] uppercase tracking-widest text-[#6E675F]">
          <span>THE COLLECTION / 003</span>
          <span>FRESHLY ROASTED WEEKLY</span>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-[#14110F] sm:text-5xl">
              OUR COFFEE BEANS
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#6E675F] sm:text-base">
              Pilih karakter kopi yang sesuai seleramu — dari Arabica yang
              bright hingga Robusta Argopuro dan Temanggung yang pekat.
            </p>
          </div>

          <div
            className="inline-flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter kategori kopi"
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeTab === tab.id
                    ? "bg-[#C49B63] text-[#14110F]"
                    : "border border-[#14110F]/20 bg-transparent text-[#14110F] hover:border-[#14110F]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <BeanCard
              key={product.id}
              product={product}
              onInspect={setInspectedProduct}
            />
          ))}
        </div>
      </div>

      <BeanDetailModal
        key={inspectedProduct?.id ?? "closed"}
        product={inspectedProduct}
        onClose={() => setInspectedProduct(null)}
      />
    </section>
  );
}
