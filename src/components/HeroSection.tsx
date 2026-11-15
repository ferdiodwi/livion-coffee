import Image from "next/image";
import { ArrowRight, Flame, PackageCheck, Sprout, Truck } from "lucide-react";

const HERO_SPECS = [
  { label: "ORIGINS", value: "ARGOPURO · TEMANGGUNG · HIGHLANDS" },
  { label: "ROAST SCHEDULE", value: "FRESH WEEKLY BATCH" },
  { label: "GRIND OPTIONS", value: "WHOLE BEAN / CUSTOM GRIND" },
  { label: "PACK SIZES", value: "200G · 500G · 1KG" },
];

const QUICK_STRIP = [
  {
    icon: Flame,
    title: "Small-Batch Roasted",
    detail: "Dipanggang rutin tiap minggu agar aroma tetap maksimal.",
  },
  {
    icon: Sprout,
    title: "100% Indonesian Beans",
    detail: "Arabica dataran tinggi & Robusta pilihan Jawa.",
  },
  {
    icon: PackageCheck,
    title: "Grind to Order",
    detail: "Bisa biji utuh atau giling sesuai alat seduhmu.",
  },
  {
    icon: Truck,
    title: "Retail & Wholesale",
    detail: "Siap untuk seduh rumahan hingga suplai kafe.",
  },
];

export function HeroSection() {
  return (
    <section id="top" className="border-b border-[#14110F]/15 bg-[#F5F0EA]">
      <div className="mx-auto max-w-7xl px-4 pt-6 pb-12 sm:px-6 lg:px-8 lg:pt-10 lg:pb-16">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#14110F]/15 pb-3 font-mono text-[11px] uppercase tracking-widest text-[#6E675F]">
          <span>LIVION / ROASTERY — 001</span>
          <span className="text-[#C4552D]">INDONESIAN SPECIALTY BEANS</span>
        </div>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C4552D]">
              ROASTED FOR DAILY RITUALS
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[0.94] font-bold uppercase tracking-tight text-[#14110F] sm:text-7xl lg:text-[5.25rem]">
              CRAFTED BEANS
              <br />
              WORTH WAKING
              <br />
              UP FOR.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#6E675F] sm:text-lg">
              Livion Coffee menghadirkan biji kopi{" "}
              <span className="font-semibold text-[#14110F]">Arabica</span> dan{" "}
              <span className="font-semibold text-[#14110F]">
                Robusta pilihan Nusantara
              </span>{" "}
              yang dipanggang segar dalam batch kecil. Profil rasa jelas,
              konsisten untuk V60, espresso, maupun kopi susu harian.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#beans"
                className="inline-flex items-center gap-2.5 bg-[#14110F] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#F5F0EA] transition-colors hover:bg-[#C4552D]"
              >
                Explore Beans
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#wholesale"
                className="inline-flex items-center gap-2 border border-[#14110F] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#14110F] transition-colors hover:bg-[#14110F] hover:text-[#F5F0EA]"
              >
                Wholesale / Sample
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden border border-[#14110F]/15 bg-[#E7E0D6]">
              <div className="relative aspect-[4/4.5] w-full">
                <Image
                  src="/images/Arabica.jpeg"
                  alt="Livion Coffee Arabica Selection"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between border-t border-[#14110F]/15 bg-[#F5F0EA] px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider text-[#14110F]">
                <span>FIG. 01 — ARABICA SELECTION</span>
                <span className="text-[#C4552D]">LOT 2026</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[#14110F]/15 pt-6 sm:grid-cols-4">
          {HERO_SPECS.map((spec) => (
            <div key={spec.label}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#6E675F]">
                {spec.label}
              </p>
              <p className="mt-1 font-mono text-xs font-semibold text-[#14110F]">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Value Strip adapted from hospitality layout with high-contrast espresso band */}
      <div className="bg-[#241D18] text-[#F5F0EA]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-7 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {QUICK_STRIP.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-[#C49B63]/40 text-[#C49B63]">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-[#F5F0EA]">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-xs leading-relaxed text-[#F5F0EA]/75">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
