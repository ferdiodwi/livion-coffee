"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { EDITORIAL_EASE } from "./MotionPrimitives";

type OriginPillar = {
  id: string;
  step: string;
  title: string;
  meta: string;
  description: string;
  /** Desktop orbital coordinates + distinct card width to mirror the staggered layout without crowding the central pouch. */
  desktopClass: string;
  delay: number;
};

const ORIGIN_PILLARS: OriginPillar[] = [
  {
    id: "direct-source",
    step: "01",
    title: "Panen Langsung",
    meta: "Argopuro & Temanggung",
    description:
      "Dipetik bareng petani kopi Arabica dataran tinggi dan kebun Robusta pilihan dari Jawa Timur dan Jawa Tengah.",
    desktopClass:
      "lg:left-[3.5%] lg:top-[218px] lg:w-[295px] xl:left-[7%] xl:top-[225px] xl:w-[340px]",
    delay: 0.08,
  },
  {
    id: "roast-profile",
    step: "02",
    title: "Profil Sangrai",
    meta: "Diuji Tiap Lot",
    description:
      "Setiap batch dicari profil panasnya biar manis alami dan crema tebalnya keluar maksimal tanpa rasa gosong.",
    desktopClass:
      "lg:left-[1.5%] lg:bottom-[92px] lg:w-[310px] xl:left-[4%] xl:bottom-[104px] xl:w-[365px]",
    delay: 0.16,
  },
  {
    id: "small-batch",
    step: "03",
    title: "Batch Kecil",
    meta: "Sangrai Mingguan",
    description:
      "Disangrai rutin tiap minggu dalam jumlah terjaga supaya biji yang sampai ke rumahmu masih wangi maksimal.",
    desktopClass:
      "lg:right-[2.5%] lg:top-[238px] lg:w-[298px] xl:right-[5.5%] xl:top-[246px] xl:w-[345px]",
    delay: 0.12,
  },
  {
    id: "grind-ship",
    step: "04",
    title: "Giling & Kirim",
    meta: "Kemasan Katup Udara",
    description:
      "Dikemas rapi pakai valve satu arah, bebas pilih biji utuh atau gilingan sesuai alat V60, espresso, maupun tubruk.",
    desktopClass:
      "lg:right-[5%] lg:bottom-[54px] lg:w-[278px] xl:right-[9%] xl:bottom-[58px] xl:w-[312px]",
    delay: 0.22,
  },
];

function OriginPillarCard({
  pillar,
  reducedMotion,
  className = "",
}: {
  pillar: OriginPillar;
  reducedMotion: boolean;
  className?: string;
}) {
  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: pillar.delay, ease: EDITORIAL_EASE }}
      className={`rounded-[20px] border border-[#FFFFFF]/80 bg-[#F4EEE8]/95 p-5 shadow-[0_14px_34px_rgba(62,34,22,0.08)] backdrop-blur-sm sm:rounded-[22px] sm:p-6 ${className}`}
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E4D5CD] font-hero text-[16px] font-extrabold tracking-tight text-[#3E2216] ring-2 ring-[#F4EEE8]"
        >
          {pillar.step}
        </span>

        <div className="min-w-0">
          <h3 className="inline-flex items-center rounded-full bg-[#4E2716] px-3.5 py-1 font-display text-[14.5px] leading-tight font-bold tracking-[-0.01em] text-[#FBF8F4] sm:text-[15.5px]">
            {pillar.title}
          </h3>
          <p className="mt-1.5 pl-0.5 text-[12.5px] font-semibold tracking-[0.02em] text-[#5E4336] sm:text-[13px]">
            {pillar.meta}
          </p>
        </div>
      </div>

      <p className="mt-3.5 text-[15px] leading-[1.48] text-[#4A423C] sm:text-[15.5px]">
        {pillar.description}
      </p>
    </motion.article>
  );
}

/** Editorial showcase pairing Robusta Argopuro with Livion Coffee's four origin-to-bag craft pillars. */
export function OriginShowcaseSection() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section
      id="origin"
      aria-labelledby="origin-showcase-heading"
      className="relative overflow-x-clip bg-[#F5F0EA] text-[#14110F]"
    >
      <div className="relative mx-auto max-w-[1400px] px-5 pt-10 pb-20 sm:px-7 sm:pt-14 sm:pb-24 lg:px-12 lg:pt-16 lg:pb-28">
        {/* Subtle roast-sieve dot matrix peeking behind the upper-right rim of the card */}
        <div
          aria-hidden="true"
          className="hero-dot-field pointer-events-none absolute top-4 right-0 h-44 w-[52%] opacity-85 sm:top-6 sm:h-60 sm:w-[44%] lg:w-[34%]"
        />

        <div className="relative z-10 overflow-hidden rounded-[28px] bg-[#E7DDDD] px-5 pt-11 pb-8 sm:rounded-[34px] sm:px-9 sm:pt-14 sm:pb-10 lg:min-h-[700px] lg:rounded-[40px] lg:px-12 lg:pt-16 lg:pb-10 xl:min-h-[740px]">
          <motion.h2
            id="origin-showcase-heading"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: EDITORIAL_EASE }}
            className="relative z-20 mx-auto max-w-[740px] text-center font-hero text-[clamp(2.2rem,4.4vw,4.15rem)] leading-[1.03] font-extrabold tracking-[-0.03em] text-[#3E2216]"
          >
            Dari Lereng Jawa
            <br />
            ke Gelasmu Tiap Hari
          </motion.h2>

          {/* Desktop staggered orbital composition */}
          <div className="hidden lg:block">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: EDITORIAL_EASE }}
              className="pointer-events-none relative z-10 mx-auto mt-6 flex justify-center xl:mt-4"
            >
              <Image
                src="/images/cutouts/argopuro-pouch.png"
                alt="Kemasan biji kopi Livion Coffee Robusta Argopuro 200g"
                width={444}
                height={768}
                sizes="320px"
                className="h-auto w-[275px] select-none drop-shadow-[0_24px_34px_rgba(36,29,24,0.22)] xl:w-[310px]"
              />
            </motion.div>

            {ORIGIN_PILLARS.map((pillar) => (
              <OriginPillarCard
                key={pillar.id}
                pillar={pillar}
                reducedMotion={reducedMotion}
                className={`absolute z-20 ${pillar.desktopClass}`}
              />
            ))}
          </div>

          {/* Mobile and tablet structured flow without overlaps */}
          <div className="mt-8 lg:hidden">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {ORIGIN_PILLARS.map((pillar) => (
                <OriginPillarCard
                  key={pillar.id}
                  pillar={pillar}
                  reducedMotion={reducedMotion}
                />
              ))}
            </div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: EDITORIAL_EASE }}
              className="mt-8 flex justify-center sm:mt-10"
            >
              <Image
                src="/images/cutouts/argopuro-pouch.png"
                alt="Kemasan biji kopi Livion Coffee Robusta Argopuro 200g"
                width={444}
                height={768}
                sizes="(max-width: 640px) 220px, 260px"
                className="h-auto w-[210px] select-none drop-shadow-[0_20px_28px_rgba(36,29,24,0.22)] sm:w-[250px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
