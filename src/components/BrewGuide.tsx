"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BREW_RECIPES, type BrewRecipe } from "@/data/beans";
import { EDITORIAL_EASE, FadeUp } from "./MotionPrimitives";

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
      className="border-b border-[#14110F]/12 bg-[#E7E0D6] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#993816]">
                03 : BREW GUIDE
              </p>
              <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-[#14110F] sm:text-5xl">
                YOUR BREW, YOUR WAY.
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#575049] sm:text-base">
                Panduan rasio dasar untuk mengeluarkan karakter terbaik biji
                kopi Livion di rumah maupun di bar.
              </p>
            </div>

            <div
              className="inline-flex flex-wrap gap-1.5 border border-[#14110F]/15 bg-[#F5F0EA]/70 p-1"
              role="tablist"
              aria-label="Metode seduh"
            >
              {BREW_RECIPES.map((recipe) => {
                const isActive = activeId === recipe.id;
                return (
                  <button
                    key={recipe.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveId(recipe.id)}
                    className={`relative min-h-[44px] px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-colors ${
                      isActive
                        ? "text-[#F5F0EA]"
                        : "text-[#14110F] hover:text-[#A8401B]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="brew-tab-pill"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 32,
                        }}
                        className="absolute inset-0 bg-[#8F511A]"
                      />
                    )}
                    <span className="relative z-10">{recipe.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </FadeUp>

        <div className="mt-10 overflow-hidden border border-[#14110F]/12 bg-[#F5F0EA] p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRecipe.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: EDITORIAL_EASE }}
              className="grid gap-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <p className="font-mono text-xs uppercase tracking-widest text-[#A8401B]">
                  RECIPE PARAMETERS
                </p>
                <h3 className="mt-1 font-display text-3xl font-bold uppercase text-[#14110F]">
                  {activeRecipe.name}
                </h3>
                <p className="mt-1.5 text-sm text-[#575049]">
                  {activeRecipe.subtitle}
                </p>

                <div className="mt-6 divide-y divide-[#14110F]/10 border-y border-[#14110F]/12">
                  {metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center justify-between py-2.5 font-mono text-xs"
                    >
                      <span className="text-[#575049]">{m.label}</span>
                      <span className="font-semibold text-[#14110F]">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 lg:border-l lg:border-[#14110F]/12 lg:pl-8">
                <p className="font-mono text-xs uppercase tracking-widest text-[#575049]">
                  STEP-BY-STEP
                </p>
                <ol className="mt-5 space-y-4">
                  {activeRecipe.steps.map((step, idx) => (
                    <li
                      key={step}
                      className="flex gap-4 border-b border-[#14110F]/10 pb-4 last:border-b-0 last:pb-0"
                    >
                      <span className="font-mono text-sm font-bold text-[#A8401B]">
                        0{idx + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-[#14110F]">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
