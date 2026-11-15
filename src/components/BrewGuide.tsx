"use client";

import { useState } from "react";
import { BREW_RECIPES, type BrewRecipe } from "@/data/beans";

export function BrewGuide() {
  const [activeId, setActiveId] = useState<BrewRecipe["id"]>("v60");
  const activeRecipe =
    BREW_RECIPES.find((r) => r.id === activeId) ?? BREW_RECIPES[0];

  const metrics = [
    { label: "COFFEE", value: activeRecipe.coffee },
    { label: "WATER", value: activeRecipe.water },
    { label: "TEMP", value: activeRecipe.temp },
    { label: "RATIO", value: activeRecipe.ratio },
    { label: "TIME", value: activeRecipe.time },
    { label: "GRIND", value: activeRecipe.grind },
  ];

  return (
    <section
      id="brew-guide"
      className="border-b border-[#14110F]/15 bg-[#E7E0D6] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-[#14110F]/15 pb-3 font-mono text-[11px] uppercase tracking-widest text-[#6E675F]">
          <span>BREW GUIDE / 005</span>
          <span>RECOMMENDED RECIPES</span>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-[#14110F] sm:text-5xl">
              YOUR BREW, YOUR WAY.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#6E675F] sm:text-base">
              Panduan rasio dasar untuk mengeluarkan karakter terbaik biji kopi
              Livion di rumah maupun di bar.
            </p>
          </div>

          <div
            className="inline-flex flex-wrap gap-2"
            role="tablist"
            aria-label="Metode seduh"
          >
            {BREW_RECIPES.map((recipe) => (
              <button
                key={recipe.id}
                type="button"
                role="tab"
                aria-selected={activeId === recipe.id}
                onClick={() => setActiveId(recipe.id)}
                className={`px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeId === recipe.id
                    ? "bg-[#14110F] text-[#F5F0EA]"
                    : "border border-[#14110F]/25 text-[#14110F] hover:border-[#14110F]"
                }`}
              >
                {recipe.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 border border-[#14110F]/15 bg-[#F5F0EA] p-6 sm:p-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-widest text-[#C4552D]">
              RECIPE PARAMETERS
            </p>
            <h3 className="mt-1 font-display text-3xl font-bold uppercase text-[#14110F]">
              {activeRecipe.name}
            </h3>
            <p className="mt-1.5 text-sm text-[#6E675F]">
              {activeRecipe.subtitle}
            </p>

            <div className="mt-6 divide-y divide-[#14110F]/12 border-y border-[#14110F]/15">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center justify-between py-2.5 font-mono text-xs"
                >
                  <span className="text-[#6E675F]">{m.label}</span>
                  <span className="font-semibold text-[#14110F]">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 lg:border-l lg:border-[#14110F]/15 lg:pl-8">
            <p className="font-mono text-xs uppercase tracking-widest text-[#6E675F]">
              STEP-BY-STEP
            </p>
            <ol className="mt-5 space-y-4">
              {activeRecipe.steps.map((step, idx) => (
                <li
                  key={step}
                  className="flex gap-4 border-b border-[#14110F]/10 pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="font-mono text-sm font-bold text-[#C4552D]">
                    0{idx + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-[#14110F]">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
