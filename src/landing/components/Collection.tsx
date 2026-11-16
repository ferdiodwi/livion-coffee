"use client";

import { useEffect, useRef, useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import { bind } from "../lib/bind";
import {
  activeElementRef,
  ariaLabelAttr,
  ariaModalAttrs,
  attachKeydown,
  beanWrapperClass,
  buildBeanWhatsAppUrl,
  calculateBeanPrice,
  childBlocks,
  collectionCardClass,
  collectionPlusClass,
  collectionPouchClass,
  collectionTextureBoxClass,
  focusElement,
  formatIDR,
  imgPerfProps,
  isEscapeKey,
  isMainBlock,
  labelledByAttr,
  linkTargetProps,
  lockDocumentScroll,
  modalSelectVal,
  pressedAttr,
  qtyWeightText,
  readCollectionConfig,
  readCollectionProduct,
  revealUp,
  rotateStyle,
  weightOptionClass,
  type LandingBlock,
  type LandingSection,
  type SectionComponentProps,
} from "../lib/helpers";

function CollectionCard({
  block,
  index,
  onSelect,
}: {
  section?: LandingSection;
  block: LandingBlock;
  index: number;
  onSelect: (selected: LandingBlock) => void;
}) {
  const prod = readCollectionProduct(block, index);

  return (
    <article
      {...revealUp(Number((index * 0.08).toFixed(2)))}
      className={collectionCardClass(prod.featured)}
    >
      {!prod.featured && (
        <span className="pointer-events-none absolute -top-3.5 left-4 z-30 inline-block -rotate-3 rounded-xl bg-[#B8421B] px-4 py-1.5 font-hero text-[15px] font-bold tracking-tight whitespace-nowrap text-[#FFFFFF] shadow-[0_10px_20px_rgba(184,66,27,0.28)] tabular-nums sm:text-[16px]">
          {bind(block, "extra.price_display")}
        </span>
      )}

      <div className={collectionTextureBoxClass(prod.featured)}>
        <img
          src={bind(block, "extra.texture_url")}
          alt={prod.textureAlt}
          {...imgPerfProps()}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        <span aria-hidden="true" className={collectionPlusClass(prod.featured)}>
          <Plus className="h-5 w-5 stroke-[2.5]" />
        </span>
      </div>

      <div aria-hidden="true" className={collectionPouchClass(prod.featured)}>
        <img
          src={bind(block, "image_url")}
          alt=""
          width={prod.pouchWidth}
          height={prod.pouchHeight}
          {...imgPerfProps()}
          className="h-auto w-full object-contain drop-shadow-[0_18px_22px_rgba(36,29,24,0.28)]"
        />
      </div>

      {prod.beanSet.map((bean, bIdx) => (
        <div
          key={bIdx}
          aria-hidden="true"
          style={rotateStyle(bean.rotate)}
          className={beanWrapperClass(bean)}
        >
          <img
            src={bean.src}
            alt=""
            width={bean.width}
            height={bean.height}
            {...imgPerfProps()}
            className="h-auto w-full drop-shadow-[0_8px_12px_rgba(36,29,24,0.26)]"
          />
        </div>
      ))}

      {prod.featured ? (
        <div className="relative z-10 flex min-h-[104px] items-center justify-between gap-3 px-2 pt-5 pb-1">
          <h3 className="font-hero text-[24px] leading-[1.08] font-extrabold tracking-tight text-[#14110F] sm:text-[26px] lg:text-[28px]">
            <span className="block">{bind(block, "extra.title_top")}</span>
            <span className="block">{bind(block, "extra.title_bottom")}</span>
          </h3>

          <span className="inline-block -rotate-2 rounded-xl bg-[#B8421B] px-4 py-1.5 font-hero text-[16px] font-bold tracking-tight whitespace-nowrap text-[#FFFFFF] shadow-[0_10px_20px_rgba(184,66,27,0.24)] tabular-nums sm:text-[17px]">
            {bind(block, "extra.price_display")}
          </span>
        </div>
      ) : (
        <div className="relative z-10 flex min-h-[104px] flex-col justify-center pt-5 pr-2 pb-1 pl-[48%]">
          <h3 className="font-hero text-[22px] leading-[1.08] font-extrabold tracking-tight text-[#14110F] sm:text-[24px] lg:text-[25px]">
            <span className="block">{bind(block, "extra.title_top")}</span>
            <span className="block">{bind(block, "extra.title_bottom")}</span>
          </h3>
        </div>
      )}

      <button
        type="button"
        onClick={() => onSelect(block)}
        {...ariaLabelAttr(prod.cardAria)}
        className="absolute inset-0 z-30 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8421B]"
      />
    </article>
  );
}

function BeanDetailModal({
  configBlock,
  productBlock,
  productIndex,
  onClose,
}: {
  configBlock: LandingBlock;
  productBlock: LandingBlock;
  productIndex: number;
  onClose: () => void;
}) {
  const cfg = readCollectionConfig(configBlock);
  const prod = readCollectionProduct(productBlock, productIndex);
  const firstWeight = cfg.weights[0]?.label ?? cfg.specRoast;
  const firstGrind = cfg.grinds[0] ?? cfg.specProcess;

  const [weight, setWeight] = useState(firstWeight);
  const [grind, setGrind] = useState(firstGrind);
  const [quantity, setQuantity] = useState(1);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const unitPrice = calculateBeanPrice(prod.price200g, weight, cfg.weights);
  const totalPrice = unitPrice * quantity;
  const whatsappHref = buildBeanWhatsAppUrl(
    cfg.whatsappPhone,
    prod.beanName,
    weight,
    grind,
    quantity,
    totalPrice,
  );

  useEffect(() => {
    const previous = activeElementRef();
    const unlockScroll = lockDocumentScroll(true);
    focusElement(closeBtnRef.current);

    const detachKeys = attachKeydown((key) => {
      if (isEscapeKey(key)) onClose();
    });

    return () => {
      unlockScroll();
      detachKeys();
      focusElement(previous);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2C1810]/65 p-3 backdrop-blur-xs sm:p-6"
      role="dialog"
      {...ariaModalAttrs(prod.modalTitleId)}
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="livion-dialog-in relative z-10 w-full max-w-[940px] overflow-hidden rounded-[28px] border border-[#FFFFFF]/80 bg-[#F5F0EA] text-[#14110F] shadow-[0_28px_72px_rgba(36,29,24,0.34)] sm:rounded-[34px]">
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          {...ariaLabelAttr(cfg.closeAria)}
          className="absolute top-4 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-[#3E2216]/15 bg-[#F4EEE8] text-[#3E2216] transition-colors hover:bg-[#3E2216] hover:text-[#F5F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E2216] sm:top-5 sm:right-5"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="grid max-h-[90svh] overflow-y-auto md:grid-cols-12">
          <div className="relative flex flex-col justify-between overflow-hidden bg-[#E7DDDD] p-5 sm:p-7 md:col-span-5 md:p-7">
            <div
              aria-hidden="true"
              className="hero-dot-field pointer-events-none absolute top-0 right-0 z-0 h-44 w-[70%] opacity-80"
            />

            <div className="relative z-10 flex items-center justify-between pr-12 md:pr-0">
              <span className="inline-flex items-center rounded-full bg-[#4E2716] px-3.5 py-1.5 font-display text-[13px] font-bold tracking-[-0.01em] text-[#FBF8F4]">
                <span>{cfg.lotPrefix}</span>
                <span> </span>
                <span>{prod.indexLabel}</span>
                <span> · </span>
                <span>{prod.roastLevel}</span>
              </span>
            </div>

            <div className="relative z-10 my-4 flex items-end justify-center px-2 pt-3 pb-3 md:my-6">
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] overflow-hidden rounded-[22px] border border-[#FFFFFF]/65 shadow-inner">
                <img
                  src={prod.textureUrl}
                  alt={prod.textureAlt}
                  {...imgPerfProps()}
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#3E2216]/12"
                />
              </div>

              <div className="pointer-events-none relative z-20 select-none">
                <img
                  src={prod.pouchUrl}
                  alt={prod.imageAlt}
                  width={prod.pouchWidth}
                  height={prod.pouchHeight}
                  {...imgPerfProps()}
                  className="h-auto w-[128px] -rotate-3 drop-shadow-[0_20px_24px_rgba(36,29,24,0.28)] sm:w-[146px] md:w-[196px] lg:w-[214px]"
                />
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-4 left-[10%] z-30 w-8 -rotate-18 select-none md:w-10"
              >
                <img
                  src={prod.beanSet[0]?.src ?? prod.pouchUrl}
                  alt=""
                  width={283}
                  height={219}
                  {...imgPerfProps()}
                  className="h-auto w-full drop-shadow-[0_8px_10px_rgba(36,29,24,0.22)]"
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-12 right-[10%] z-30 w-7 rotate-26 select-none md:w-9"
              >
                <img
                  src={prod.beanSet[1]?.src ?? prod.beanSet[0]?.src ?? prod.pouchUrl}
                  alt=""
                  width={287}
                  height={222}
                  {...imgPerfProps()}
                  className="h-auto w-full drop-shadow-[0_8px_10px_rgba(36,29,24,0.22)]"
                />
              </div>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2">
              {prod.tastingNotes.map((note, nIdx) => (
                <span
                  key={nIdx}
                  className="inline-flex items-center rounded-full border border-[#FFFFFF]/80 bg-[#F4EEE8]/95 px-3 py-1 text-[12.5px] font-semibold text-[#3E2216] shadow-[0_4px_12px_rgba(62,34,22,0.06)]"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-8 md:col-span-7 md:p-9">
            <div>
              <p className="font-display text-[13.5px] font-bold tracking-[0.01em] text-[#B8421B] capitalize sm:text-[14.5px]">
                <span>{prod.category}</span>
                <span> · </span>
                <span>{prod.origin}</span>
              </p>

              <h3
                id={prod.modalTitleId}
                className="mt-1.5 pr-12 font-hero text-[clamp(1.85rem,3vw,2.55rem)] leading-[1.06] font-extrabold tracking-[-0.03em] text-[#3E2216]"
              >
                {prod.beanName}
              </h3>

              <p className="mt-3 text-[15.5px] leading-[1.6] text-[#4A423C]">
                {prod.desc}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3">
                <div className="rounded-[16px] border border-[#3E2216]/8 bg-[#EDE4DC]/80 px-3.5 py-2.5">
                  <p className="text-[12px] font-medium text-[#5E4336]">{cfg.specAltitude}</p>
                  <p className="mt-0.5 text-[14px] font-semibold text-[#3E2216]">{prod.altitude}</p>
                </div>
                <div className="rounded-[16px] border border-[#3E2216]/8 bg-[#EDE4DC]/80 px-3.5 py-2.5">
                  <p className="text-[12px] font-medium text-[#5E4336]">{cfg.specProcess}</p>
                  <p className="mt-0.5 text-[14px] font-semibold text-[#3E2216]">{prod.process}</p>
                </div>
                <div className="rounded-[16px] border border-[#3E2216]/8 bg-[#EDE4DC]/80 px-3.5 py-2.5">
                  <p className="text-[12px] font-medium text-[#5E4336]">{cfg.specRoast}</p>
                  <p className="mt-0.5 text-[14px] font-semibold text-[#3E2216]">{prod.roastLevel}</p>
                </div>
                <div className="rounded-[16px] border border-[#3E2216]/8 bg-[#EDE4DC]/80 px-3.5 py-2.5">
                  <p className="text-[12px] font-medium text-[#5E4336]">{cfg.specBestFor}</p>
                  <p className="mt-0.5 text-[14px] font-semibold text-[#3E2216]">{prod.bestFor}</p>
                </div>
              </div>

              <div className="mt-6" role="group" {...labelledByAttr(prod.modalWeightId)}>
                <p id={prod.modalWeightId} className="text-[13.5px] font-semibold text-[#3E2216]">
                  {cfg.weightLabel}
                </p>
                <div className="mt-2.5 grid grid-cols-3 gap-2.5">
                  {cfg.weights.map((opt, wIdx) => {
                    const selected = weight === opt.label;
                    return (
                      <button
                        key={wIdx}
                        type="button"
                        {...pressedAttr(selected)}
                        onClick={() => setWeight(opt.label)}
                        className={weightOptionClass(selected)}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 grid gap-3.5 sm:grid-cols-3">
                <div className="sm:col-span-2">
                  <label
                    htmlFor={prod.modalSelectId}
                    className="block text-[13.5px] font-semibold text-[#3E2216]"
                  >
                    {cfg.grindLabel}
                  </label>
                  <select
                    id={prod.modalSelectId}
                    value={grind}
                    onChange={(e) => setGrind(modalSelectVal(e))}
                    className="mt-2 min-h-[48px] w-full rounded-[16px] border border-[#3E2216]/18 bg-[#FFFFFF] px-4 py-2.5 text-[15px] font-medium text-[#3E2216] transition-colors hover:border-[#3E2216]/45 focus:border-[#B8421B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E2216]"
                  >
                    {cfg.grinds.map((g, gIdx) => (
                      <option key={gIdx} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <span id={prod.modalQtyId} className="block text-[13.5px] font-semibold text-[#3E2216]">
                    {cfg.qtyLabel}
                  </span>
                  <div
                    role="group"
                    {...labelledByAttr(prod.modalQtyId)}
                    className="mt-2 flex h-[48px] items-center justify-between rounded-full border border-[#3E2216]/18 bg-[#FFFFFF] px-1.5"
                  >
                    <button
                      type="button"
                      disabled={quantity <= 1}
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      {...ariaLabelAttr(cfg.qtyMinusAria)}
                      className="flex h-9 w-9 items-center justify-center rounded-full text-[#3E2216] transition-colors hover:bg-[#EDE4DC] focus-visible:outline-2 focus-visible:outline-[#3E2216] disabled:cursor-not-allowed disabled:opacity-35"
                    >
                      <Minus className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <span className="font-display text-[16px] font-bold text-[#3E2216] tabular-nums">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      {...ariaLabelAttr(cfg.qtyPlusAria)}
                      className="flex h-9 w-9 items-center justify-center rounded-full text-[#3E2216] transition-colors hover:bg-[#EDE4DC] focus-visible:outline-2 focus-visible:outline-[#3E2216]"
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#3E2216]/12 pt-5">
              <div>
                <p className="text-[13px] font-medium text-[#5E4336]">
                  <span>{cfg.totalLabel}</span>
                  <span> · </span>
                  <span>{qtyWeightText(quantity, weight)}</span>
                </p>
                <p className="mt-0.5 font-hero text-[1.75rem] leading-tight font-extrabold tracking-[-0.02em] text-[#3E2216] tabular-nums sm:text-[1.95rem]">
                  {formatIDR(totalPrice)}
                </p>
              </div>
              <a
                href={whatsappHref}
                {...linkTargetProps(true)}
                onClick={onClose}
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#B8421B] px-7 py-3 font-hero text-[15.5px] font-extrabold tracking-[-0.01em] text-[#FFFFFF] shadow-[0_10px_24px_rgba(184,66,27,0.24)] transition-[background-color,transform] hover:bg-[#3E2216] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3E2216] active:scale-[0.97]"
              >
                {cfg.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Collection({ section, block }: SectionComponentProps) {
  const [selectedProduct, setSelectedProduct] = useState<{
    block: LandingBlock;
    index: number;
  } | null>(null);

  if (!isMainBlock(block)) return null;

  const cfg = readCollectionConfig(block);
  const products = childBlocks(section);

  return (
    <section
      id={cfg.sectionId}
      {...labelledByAttr(cfg.headingId)}
      className="relative overflow-x-clip bg-[#F5F0EA] py-16 text-[#14110F] sm:py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="hero-dot-field pointer-events-none absolute inset-y-0 right-0 z-0 w-[46%] opacity-85"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
          <p
            {...revealUp(0)}
            className="max-w-[360px] text-[15.5px] leading-[1.65] text-[#575049] sm:text-[17px] lg:col-span-5"
          >
            {bind(block, "description")}
          </p>

          <h2
            id="collection-heading"
            {...revealUp(0.05)}
            className="font-hero text-[clamp(2.35rem,4.5vw,4.25rem)] leading-[1.02] font-extrabold tracking-[-0.03em] text-[#3E2216] lg:col-span-7 lg:text-right"
          >
            <span className="block">{bind(block, "title")}</span>
            <span className="block">{bind(block, "subtitle")}</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-14 md:mt-20 md:grid-cols-3 md:items-start md:gap-6 lg:mt-24 lg:gap-8 xl:gap-10">
          {products.map((cardBlock, idx) => (
            <CollectionCard
              key={cardBlock.order ?? idx}
              section={section}
              block={cardBlock}
              index={idx}
              onSelect={(chosen) => setSelectedProduct({ block: chosen, index: idx })}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <BeanDetailModal
          configBlock={block}
          productBlock={selectedProduct.block}
          productIndex={selectedProduct.index}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
