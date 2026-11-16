"use client";

import { bind } from "../lib/bind";
import {
  imgPerfProps,
  labelledByAttr,
  readCraftedMeta,
  revealLeft,
  revealUp,
  svgPreserveAttr,
  type SectionComponentProps,
} from "../lib/helpers";

export function Crafted({ block }: SectionComponentProps) {
  const meta = readCraftedMeta(block);

  return (
    <section
      id={meta.sectionId}
      {...labelledByAttr(meta.headingId)}
      className="relative overflow-x-clip bg-[#F5F0EA] pt-8 pb-16 text-[#FFFFFF] sm:pt-12 sm:pb-20 lg:min-h-[640px] lg:py-20 xl:min-h-[680px]"
    >
      <div
        aria-hidden="true"
        className="hero-dot-field pointer-events-none absolute top-0 right-0 z-0 h-56 w-[48%] opacity-90"
      />

      <svg
        aria-hidden="true"
        viewBox="0 0 1440 720"
        {...svgPreserveAttr()}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      >
        <path d={meta.mobileWavePath} fill="#A83814" className="lg:hidden" />
        <path d={meta.desktopWavePath} fill="#A83814" className="hidden lg:block" />
      </svg>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[15%] left-[21%] z-10 hidden grid-cols-5 gap-4 lg:grid"
      >
        {meta.dots.map((dot) => (
          <span key={dot} className="h-2.5 w-2.5 rounded-full bg-[#F5F0EA]/28" />
        ))}
      </div>

      <div
        {...revealLeft(0)}
        className="pointer-events-none relative z-20 mb-5 w-[90%] max-w-[430px] select-none sm:max-w-[470px] lg:absolute lg:top-[17%] lg:left-0 lg:mb-0 lg:w-[39vw] lg:max-w-[590px] lg:min-w-[375px]"
      >
        <img
          src={bind(block, "image_url")}
          alt={meta.imageAlt}
          width={978}
          height={548}
          {...imgPerfProps()}
          className="h-auto w-full object-contain object-left drop-shadow-[0_24px_28px_rgba(36,29,24,0.28)]"
        />
      </div>

      <div className="relative z-20 mx-auto max-w-[1400px] px-5 pt-2 pb-10 sm:px-7 sm:pt-4 sm:pb-12 lg:px-12 lg:pt-14 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:col-start-6 lg:pt-6 xl:pt-10">
            <h2
              id="crafted-heading"
              {...revealUp(0)}
              className="font-hero text-[clamp(2.45rem,4.9vw,4.45rem)] leading-[1.04] font-extrabold tracking-[-0.03em] text-[#FFFFFF]"
            >
              <span className="block">{bind(block, "title")}</span>
              <span className="block">{bind(block, "subtitle")}</span>
            </h2>

            <p
              {...revealUp(0.08)}
              className="mt-7 max-w-[460px] text-[16.5px] leading-[1.68] text-[#FFFFFF]/92 sm:text-[18px] lg:mt-16 lg:mr-6 lg:ml-auto"
            >
              {bind(block, "description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
