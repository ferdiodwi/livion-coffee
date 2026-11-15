"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { EDITORIAL_EASE, FadeUp } from "./MotionPrimitives";

const CRAFT_STEPS = [
  {
    index: "01",
    title: "DIRECT SOURCE",
    detail:
      "Biji dipanen selektif dari petani dataran tinggi dan sentra kopi Jawa seperti Argopuro & Temanggung.",
  },
  {
    index: "02",
    title: "ROAST PROFILE",
    detail:
      "Setiap lot diuji profil sangrainya untuk mengeluarkan manis alami tanpa rasa gosong berlebih.",
  },
  {
    index: "03",
    title: "SMALL BATCH",
    detail:
      "Disangrai dalam batch kecil tiap minggu agar biji yang sampai ke tanganmu selalu dalam kondisi peak.",
  },
  {
    index: "04",
    title: "GRIND & SHIP",
    detail:
      "Dikemas dengan katup satu arah (one-way valve), tersedia biji utuh maupun gilingan sesuai alat seduh.",
  },
];

export function OriginCraft() {
  return (
    <section id="origin" className="bg-[#241D18] py-16 text-[#F5F0EA] lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <FadeUp className="lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C49B63]">
              02 : ORIGIN &amp; CRAFT
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight sm:text-5xl">
              FROM JAVANESE SLOPES TO YOUR MORNING CUP.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#F5F0EA]/80">
              Kami percaya kopi yang enak dimulai dari bahan baku yang jujur.
              Baik untuk seduhan manual yang clean maupun racikan kopi susu
              dengan crema tebal, Livion Coffee menjaga konsistensi dari proses
              sortasi hingga pengemasan.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#F5F0EA]/12 pt-6">
              <div>
                <p className="font-display text-3xl font-bold text-[#C49B63]">
                  03
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#F5F0EA]/75">
                  CORE LOTS
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-[#C49B63]">
                  52×
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#F5F0EA]/75">
                  WEEKLY ROASTS
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-[#C49B63]">
                  100%
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#F5F0EA]/75">
                  INDONESIAN
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.12} className="grid grid-cols-2 gap-4 lg:col-span-6">
            <div className="group relative aspect-[3/4] overflow-hidden border border-[#F5F0EA]/15">
              <Image
                src="/images/Robusta_Argopuro.jpeg"
                alt="Robusta Argopuro"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute right-0 bottom-0 left-0 bg-[#14110F]/85 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-[#F5F0EA]">
                ARGOPURO, EAST JAVA
              </span>
            </div>
            <div className="group relative mt-6 aspect-[3/4] overflow-hidden border border-[#F5F0EA]/15">
              <Image
                src="/images/Robusta_Temanggung.jpeg"
                alt="Robusta Temanggung"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute right-0 bottom-0 left-0 bg-[#14110F]/85 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-[#F5F0EA]">
                TEMANGGUNG, CENTRAL JAVA
              </span>
            </div>
          </FadeUp>
        </div>

        <div className="mt-16 grid gap-8 border-t border-[#F5F0EA]/12 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {CRAFT_STEPS.map((step, idx) => (
            <motion.div
              key={step.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: idx * 0.08,
                ease: EDITORIAL_EASE,
              }}
            >
              <span className="font-mono text-xs font-semibold text-[#C49B63]">
                {step.index}
              </span>
              <h3 className="mt-1.5 font-display text-xl font-bold uppercase tracking-wide text-[#F5F0EA]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#F5F0EA]/75">
                {step.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
