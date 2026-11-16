"use client";

import { bind } from "../lib/bind";
import { useLocale } from "../lib/i18n";
import {
  imgPerfProps,
  labelledByAttr,
  readAboutMeta,
  readBlockCopy,
  readItemCopy,
  revealLeft,
  revealRight,
  revealUp,
  rotateStyle,
  sortedItems,
  type SectionComponentProps,
} from "../lib/helpers";

export function About({ block }: SectionComponentProps) {
  const locale = useLocale();
  const meta = readAboutMeta(block, locale);
  const copy = readBlockCopy(block, locale);
  const highlights = sortedItems(block.items);

  return (
    <section
      id={meta.sectionId}
      {...labelledByAttr(meta.headingId)}
      className="relative overflow-x-clip bg-[#F5F0EA] py-14 text-[#14110F] sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16">
          {/* Left Visual Showcase Card */}
          <div {...revealLeft(0)} className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[28px] bg-[#2C1810] p-6 shadow-[0_26px_54px_rgba(36,29,24,0.2)] sm:rounded-[34px] sm:p-8">
              <div
                aria-hidden="true"
                className="about-dot-field pointer-events-none absolute top-0 right-0 z-0 h-44 w-44 opacity-80"
              />

              <div className="relative z-10 flex min-h-[280px] items-end justify-center pt-5 pb-2 sm:min-h-[330px]">
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[56%] overflow-hidden rounded-[22px] border border-[#F5F0EA]/18">
                  <img
                    src={bind(block, "extra.texture_url")}
                    alt={meta.textureAlt}
                    {...imgPerfProps()}
                    className="h-full w-full object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[#2C1810]/20"
                  />
                </div>

                {/* Overlapping Trio Pouches */}
                <div className="pointer-events-none relative z-20 flex items-end justify-center select-none">
                  <img
                    src={bind(block, "image_url")}
                    alt={meta.imageAlt}
                    width={461}
                    height={771}
                    {...imgPerfProps()}
                    style={rotateStyle(-9)}
                    className="relative z-10 -mr-6 h-auto w-[100px] translate-y-2 drop-shadow-[0_20px_24px_rgba(20,17,15,0.45)] sm:-mr-7 sm:w-[128px] lg:-mr-8 lg:w-[132px]"
                  />
                  <img
                    src={bind(block, "extra.secondary_pouch_url")}
                    alt={meta.secondaryAlt}
                    width={513}
                    height={822}
                    {...imgPerfProps()}
                    className="relative z-20 h-auto w-[116px] drop-shadow-[0_26px_30px_rgba(20,17,15,0.5)] sm:w-[146px] lg:w-[150px]"
                  />
                  <img
                    src={bind(block, "extra.tertiary_pouch_url")}
                    alt={meta.tertiaryAlt}
                    width={444}
                    height={768}
                    {...imgPerfProps()}
                    style={rotateStyle(9)}
                    className="relative z-10 -ml-6 h-auto w-[100px] translate-y-2 drop-shadow-[0_20px_24px_rgba(20,17,15,0.45)] sm:-ml-7 sm:w-[128px] lg:-ml-8 lg:w-[132px]"
                  />
                </div>

                {/* Floating accent beans */}
                <img
                  src={meta.beanAUrl}
                  alt=""
                  aria-hidden="true"
                  width={277}
                  height={248}
                  {...imgPerfProps()}
                  style={rotateStyle(-20)}
                  className="pointer-events-none absolute top-2 left-[4%] z-30 w-8 select-none drop-shadow-[0_10px_14px_rgba(20,17,15,0.35)] sm:w-10"
                />
                <img
                  src={meta.beanBUrl}
                  alt=""
                  aria-hidden="true"
                  width={212}
                  height={273}
                  {...imgPerfProps()}
                  style={rotateStyle(24)}
                  className="pointer-events-none absolute top-6 right-[4%] z-30 w-7 select-none drop-shadow-[0_10px_14px_rgba(20,17,15,0.35)] sm:w-9"
                />
              </div>

              <p className="relative z-20 mt-5 text-[14.5px] leading-relaxed text-[#F5F0EA]/85 sm:text-[15px]">
                {meta.isEn ? <span>{meta.enCardCaption}</span> : <span>{bind(block, "extra.card_caption")}</span>}
              </p>
            </div>
          </div>

          {/* Right Editorial Copy + Roastery Highlights */}
          <div className="lg:col-span-7">
            <div {...revealRight(0)}>
              <span className="inline-flex items-center rounded-full bg-[#4E2716] px-4 py-1.5 font-display text-[13.5px] font-bold tracking-[0.01em] text-[#FBF8F4]">
                {meta.isEn ? <span>{meta.enBadgeLabel}</span> : <span>{bind(block, "extra.badge_label")}</span>}
              </span>

              <h2
                id="about-heading"
                className="mt-4 font-hero text-[clamp(2.2rem,4.3vw,4rem)] leading-[1.03] font-extrabold tracking-[-0.03em] text-[#3E2216]"
              >
                <span className="block">
                  {copy.isEn ? <span>{copy.headA}</span> : <span>{bind(block, "title")}</span>}
                </span>
                <span className="block">
                  {copy.isEn ? <span>{copy.headB}</span> : <span>{bind(block, "subtitle")}</span>}
                </span>
              </h2>

              <p className="mt-5 max-w-[640px] text-[16px] leading-[1.68] text-[#4A423C] sm:text-[17.5px]">
                {copy.isEn ? <span>{copy.bodyCopy}</span> : <span>{bind(block, "description")}</span>}
              </p>

              <p className="mt-4 max-w-[640px] text-[16px] leading-[1.68] text-[#4A423C] sm:text-[17.5px]">
                {meta.isEn ? <span>{meta.enStorySecondary}</span> : <span>{bind(block, "extra.story_secondary")}</span>}
              </p>
            </div>

            {/* 3 Honest Operational Highlight Cards */}
            <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-3 sm:gap-4">
              {highlights.map((item, idx) => {
                const itemCopy = readItemCopy(item, locale);
                return (
                  <article
                    key={idx}
                    {...revealUp(Number((0.06 + idx * 0.06).toFixed(2)))}
                    className="rounded-[18px] border border-[#3E2216]/8 bg-[#EDE4DC]/85 p-4 sm:p-5"
                  >
                    <p className="font-display text-[12.5px] font-bold tracking-[0.02em] text-[#9C3513]">
                      {itemCopy.isEn ? <span>{itemCopy.metaTag}</span> : <span>{bind(item, "icon")}</span>}
                    </p>
                    <h3 className="mt-1 font-hero text-[16.5px] leading-snug font-extrabold text-[#3E2216]">
                      {itemCopy.isEn ? <span>{itemCopy.labelText}</span> : <span>{bind(item, "title")}</span>}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-[1.52] text-[#4A423C]">
                      {itemCopy.isEn ? <span>{itemCopy.bodyCopy}</span> : <span>{bind(item, "description")}</span>}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
