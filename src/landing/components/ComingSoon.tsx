  "use client";

import { bind } from "../lib/bind";
import { useLocale } from "../lib/i18n";
import {
  imgPerfProps,
  labelledByAttr,
  readBlockCopy,
  readComingSoonMeta,
  readItemCopy,
  revealLeft,
  revealRight,
  rotateStyle,
  sortedItems,
  type SectionComponentProps,
} from "../lib/helpers";

export function ComingSoon({ block }: SectionComponentProps) {
  const locale = useLocale();
  const meta = readComingSoonMeta(block, locale);
  const copy = readBlockCopy(block, locale);
  const teaserItems = sortedItems(block.items);

  return (
    <section
      id={meta.sectionId}
      {...labelledByAttr(meta.headingId)}
      className="relative overflow-x-clip bg-[#F5F0EA] pt-9 pb-14 text-[#14110F] sm:pt-14 sm:pb-18 lg:pt-16 lg:pb-24"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-12">
        <div className="relative rounded-[28px] bg-[#2C1810] p-6 shadow-[0_26px_54px_rgba(36,29,24,0.18)] sm:rounded-[34px] sm:p-9 lg:rounded-[40px] lg:p-12">
          <span className="pointer-events-none absolute -top-5 left-4 z-30 inline-block -rotate-3 rounded-2xl bg-[#B8421B] px-6 py-2.5 font-hero text-[24px] leading-none font-extrabold tracking-tight whitespace-nowrap text-[#FFFFFF] shadow-[0_12px_24px_rgba(184,66,27,0.32)] sm:-top-[18px] sm:-left-6 sm:-rotate-18 sm:px-7 sm:py-3 sm:text-[28px] sm:shadow-[0_16px_30px_rgba(184,66,27,0.36)] lg:-top-[22px] lg:-left-10 lg:px-8 lg:py-3.5 lg:text-[34px]">
            {meta.isEn ? <span>{meta.enStatusBadge}</span> : <span>{bind(block, "extra.status_badge")}</span>}
          </span>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
          >
            <div className="about-dot-field absolute top-0 right-0 h-52 w-52 opacity-60" />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            {/* Left Mystery Drop Stage */}
            <div {...revealLeft(0)} className="lg:col-span-5">
              <div className="relative flex min-h-[260px] items-end justify-center pt-8 pb-3 sm:min-h-[305px] sm:pt-10">

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] overflow-hidden rounded-[22px] border border-[#F5F0EA]/16">
                  <img
                    src={bind(block, "extra.texture_url")}
                    alt={meta.textureAlt}
                    {...imgPerfProps()}
                    className="h-full w-full object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[#2C1810]/45"
                  />
                </div>

                <img
                  src={bind(block, "image_url")}
                  alt={meta.imageAlt}
                  width={438}
                  height={790}
                  {...imgPerfProps()}
                  className="pointer-events-none relative z-20 h-auto w-[134px] -rotate-6 brightness-[0.52] contrast-[1.12] drop-shadow-[0_24px_26px_rgba(12,7,5,0.65)] select-none sm:w-[158px] lg:w-[172px]"
                />

                <img
                  src={meta.beanAUrl}
                  alt=""
                  aria-hidden="true"
                  width={283}
                  height={219}
                  {...imgPerfProps()}
                  style={rotateStyle(-18)}
                  className="pointer-events-none absolute bottom-8 left-[6%] z-30 w-8 select-none drop-shadow-[0_10px_14px_rgba(20,17,15,0.4)] sm:w-10"
                />
                <img
                  src={meta.beanBUrl}
                  alt=""
                  aria-hidden="true"
                  width={212}
                  height={273}
                  {...imgPerfProps()}
                  style={rotateStyle(22)}
                  className="pointer-events-none absolute top-5 right-[10%] z-30 w-7 select-none drop-shadow-[0_10px_14px_rgba(20,17,15,0.4)] sm:w-9"
                />
              </div>
            </div>

            {/* Right Upcoming Release Info + Waitlist CTA */}
            <div {...revealRight(0.06)} className="lg:col-span-7">
              <p className="font-display text-[13px] font-bold tracking-[0.04em] text-[#E8A889] uppercase">
                {meta.isEn ? <span>{meta.enEyebrow}</span> : <span>{bind(block, "extra.eyebrow")}</span>}
              </p>

              <h2
                id="coming-soon-heading"
                className="mt-2 font-hero text-[clamp(2rem,3.9vw,3.35rem)] leading-[1.04] font-extrabold tracking-[-0.03em] text-[#F5F0EA]"
              >
                <span className="block">
                  {copy.isEn ? <span>{copy.headA}</span> : <span>{bind(block, "title")}</span>}
                </span>
                <span className="block">
                  {copy.isEn ? <span>{copy.headB}</span> : <span>{bind(block, "subtitle")}</span>}
                </span>
              </h2>

              <p className="mt-3.5 max-w-[600px] text-[15.5px] leading-[1.68] text-[#D7C9BE] sm:text-[16.5px]">
                {copy.isEn ? <span>{copy.bodyCopy}</span> : <span>{bind(block, "description")}</span>}
              </p>

              {teaserItems.length > 0 && (
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {teaserItems.map((item, idx) => {
                    const itemCopy = readItemCopy(item, locale);
                    return (
                      <div
                        key={idx}
                        className="rounded-[16px] border border-[#F5F0EA]/14 bg-[#3E2216]/85 p-4"
                      >
                        <p className="font-display text-[12px] font-bold tracking-[0.03em] text-[#E8A889]">
                          {itemCopy.isEn ? <span>{itemCopy.metaTag}</span> : <span>{bind(item, "icon")}</span>}
                        </p>
                        <h3 className="mt-1 font-hero text-[16px] leading-snug font-extrabold text-[#F5F0EA]">
                          {itemCopy.isEn ? <span>{itemCopy.labelText}</span> : <span>{bind(item, "title")}</span>}
                        </h3>
                        <p className="mt-1 text-[13.5px] leading-[1.5] text-[#D7C9BE]">
                          {itemCopy.isEn ? <span>{itemCopy.bodyCopy}</span> : <span>{bind(item, "description")}</span>}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
