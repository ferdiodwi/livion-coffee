"use client";

import { bind } from "../lib/bind";
import { useLocale } from "../lib/i18n";
import {
  imgPerfProps,
  labelledByAttr,
  readBlockCopy,
  readOrderCtaMeta,
  revealRight,
  revealUp,
  ribbonStrokeAttrs,
  scrollRibbonAttr,
  svgPreserveAttr,
  type SectionComponentProps,
} from "../lib/helpers";
import { SealBadge } from "../ui/SealBadge";

export function OrderCta({ block }: SectionComponentProps) {
  const locale = useLocale();
  const meta = readOrderCtaMeta(block, locale);
  const copy = readBlockCopy(block, locale);

  return (
    <section
      id={meta.sectionId}
      {...labelledByAttr(meta.headingId)}
      className="relative overflow-x-clip bg-[#F5F0EA] text-[#14110F]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 260"
        {...svgPreserveAttr()}
        className="pointer-events-none absolute top-2 left-0 z-0 h-[150px] w-full sm:top-4 sm:h-[210px] lg:h-[250px]"
      >
        <path
          d={meta.ribbonPath}
          {...ribbonStrokeAttrs(2.8)}
          {...scrollRibbonAttr()}
          className="opacity-72"
        />
      </svg>

      <div className="relative mx-auto max-w-[1400px] px-5 pt-16 pb-6 sm:px-7 sm:pt-20 sm:pb-10 lg:px-12 lg:pt-24 lg:pb-16">
        <div className="relative z-20 lg:min-h-[360px] xl:min-h-[420px]">
          <div className="flex flex-col items-start lg:max-w-[52%] lg:pt-4">
            <h2
              id="order-cta-heading"
              {...revealUp(0)}
              className="font-hero text-[clamp(2.65rem,5.7vw,5.2rem)] leading-[0.98] font-extrabold tracking-[-0.03em] text-[#3E2216]"
            >
              <span className="block">
                {copy.isEn ? <span>{copy.headA}</span> : <span>{bind(block, "title")}</span>}
              </span>
              <span className="block">
                {copy.isEn ? <span>{copy.headB}</span> : <span>{bind(block, "subtitle")}</span>}
              </span>
              <span className="block">
                {copy.isEn ? <span>{copy.bodyCopy}</span> : <span>{bind(block, "description")}</span>}
              </span>
            </h2>

            <div className="mt-6 lg:mt-0 lg:self-end lg:translate-x-[16px] lg:-translate-y-[92px] xl:translate-x-[36px] xl:-translate-y-[108px]">
              <SealBadge
                href={meta.orderHref}
                label={meta.ctaAria}
                className="h-[114px] w-[114px] -rotate-12 sm:h-[128px] sm:w-[128px] lg:h-[138px] lg:w-[138px]"
                topSlot={meta.isEn ? <span>{meta.enSealTop}</span> : <span>{bind(block, "extra.seal_top")}</span>}
                bottomSlot={meta.isEn ? <span>{meta.enSealBottom}</span> : <span>{bind(block, "extra.seal_bottom")}</span>}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        {...revealRight(0.08)}
        className="pointer-events-none relative z-10 mt-2 ml-auto w-[92%] max-w-[490px] select-none lg:absolute lg:top-[14%] lg:right-0 lg:mt-0 lg:w-[44vw] lg:max-w-[620px] xl:top-[12%]"
      >
        <img
          src={bind(block, "image_url")}
          alt={meta.imageAlt}
          width={954}
          height={715}
          {...imgPerfProps()}
          className="h-auto w-full object-contain object-right drop-shadow-[0_22px_28px_rgba(36,29,24,0.2)]"
        />
      </div>
    </section>
  );
}
