"use client";

import { bind } from "../lib/bind";
import { useLocale } from "../lib/i18n";
import {
  imgPerfProps,
  labelledByAttr,
  originCardClass,
  originOrbitClass,
  readBlockCopy,
  readItemCopy,
  readOriginMeta,
  revealUp,
  sortedItems,
  twoDigitStep,
  type LandingBlock,
  type LandingItem,
  type LandingSection,
  type SectionComponentProps,
} from "../lib/helpers";

function OriginPillarCard({
  block,
  item,
  index,
  extraPos = "",
}: {
  section?: LandingSection;
  block: LandingBlock;
  item: LandingItem;
  index: number;
  extraPos?: string;
}) {
  void block;
  const locale = useLocale();
  const itemCopy = readItemCopy(item, locale);

  return (
    <article
      {...revealUp(Number((0.08 + index * 0.05).toFixed(2)))}
      className={originCardClass(extraPos)}
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E4D5CD] font-hero text-[16px] font-extrabold tracking-tight text-[#3E2216] ring-2 ring-[#F4EEE8]"
        >
          {twoDigitStep(item.order, index)}
        </span>

        <div className="min-w-0">
          <h3 className="inline-flex items-center rounded-full bg-[#4E2716] px-3.5 py-1 font-display text-[14.5px] leading-tight font-bold tracking-[-0.01em] text-[#FBF8F4] sm:text-[15.5px]">
            {itemCopy.isEn ? <span>{itemCopy.labelText}</span> : <span>{bind(item, "title")}</span>}
          </h3>
          <p className="mt-1.5 pl-0.5 text-[12.5px] font-semibold tracking-[0.02em] text-[#5E4336] sm:text-[13px]">
            {itemCopy.isEn ? <span>{itemCopy.metaTag}</span> : <span>{bind(item, "icon")}</span>}
          </p>
        </div>
      </div>

      <p className="mt-3.5 text-[15px] leading-[1.48] text-[#4A423C] sm:text-[15.5px]">
        {itemCopy.isEn ? <span>{itemCopy.bodyCopy}</span> : <span>{bind(item, "description")}</span>}
      </p>
    </article>
  );
}

export function OriginShowcase({ section, block }: SectionComponentProps) {
  const locale = useLocale();
  const meta = readOriginMeta(block, locale);
  const copy = readBlockCopy(block, locale);
  const pillars = sortedItems(block.items);

  return (
    <section
      id={meta.sectionId}
      {...labelledByAttr(meta.headingId)}
      className="relative overflow-x-clip bg-[#F5F0EA] text-[#14110F]"
    >
      <div className="relative mx-auto max-w-[1400px] px-5 pt-10 pb-20 sm:px-7 sm:pt-14 sm:pb-24 lg:px-12 lg:pt-16 lg:pb-28">
        <div
          aria-hidden="true"
          className="hero-dot-field pointer-events-none absolute top-4 right-0 h-44 w-[52%] opacity-85 sm:top-6 sm:h-60 sm:w-[44%] lg:w-[34%]"
        />

        <div className="relative z-10 overflow-hidden rounded-[28px] bg-[#E7DDDD] px-5 pt-11 pb-8 sm:rounded-[34px] sm:px-9 sm:pt-14 sm:pb-10 lg:min-h-[700px] lg:rounded-[40px] lg:px-12 lg:pt-16 lg:pb-10 xl:min-h-[740px]">
          <h2
            id="origin-showcase-heading"
            {...revealUp(0)}
            className="relative z-20 mx-auto max-w-[740px] text-center font-hero text-[clamp(2.2rem,4.4vw,4.15rem)] leading-[1.03] font-extrabold tracking-[-0.03em] text-[#3E2216]"
          >
            <span className="block">
              {copy.isEn ? <span>{copy.headA}</span> : <span>{bind(block, "title")}</span>}
            </span>
            <span className="block">
              {copy.isEn ? <span>{copy.headB}</span> : <span>{bind(block, "subtitle")}</span>}
            </span>
          </h2>

          {/* Desktop orbital showcase */}
          <div className="hidden lg:block">
            <div
              {...revealUp(0.06)}
              className="pointer-events-none relative z-10 mx-auto mt-6 flex justify-center xl:mt-4"
            >
              <img
                src={bind(block, "image_url")}
                alt={meta.imageAlt}
                width={444}
                height={768}
                {...imgPerfProps()}
                className="h-auto w-[275px] select-none drop-shadow-[0_24px_34px_rgba(36,29,24,0.22)] xl:w-[310px]"
              />
            </div>

            {pillars.map((item, idx) => (
              <OriginPillarCard
                key={idx}
                section={section}
                block={block}
                item={item}
                index={idx}
                extraPos={originOrbitClass(idx)}
              />
            ))}
          </div>

          {/* Mobile and tablet clean grid */}
          <div className="mt-8 lg:hidden">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {pillars.map((item, idx) => (
                <OriginPillarCard
                  key={idx}
                  section={section}
                  block={block}
                  item={item}
                  index={idx}
                />
              ))}
            </div>

            <div
              {...revealUp(0.1)}
              className="mt-8 flex justify-center sm:mt-10"
            >
              <img
                src={bind(block, "image_url")}
                alt={meta.imageAlt}
                width={444}
                height={768}
                {...imgPerfProps()}
                className="h-auto w-[210px] select-none drop-shadow-[0_20px_28px_rgba(36,29,24,0.22)] sm:w-[250px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
