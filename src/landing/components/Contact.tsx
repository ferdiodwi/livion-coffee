"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AlertCircle, Check } from "lucide-react";
import { bind } from "../lib/bind";
import {
  ariaInvalidAttrs,
  ariaLabelAttr,
  buildContactWhatsAppUrl,
  contactFieldClass,
  contactTopicBtnClass,
  copyTextToClipboard,
  focusElement,
  imgPerfProps,
  inputChangeValue,
  labelledByAttr,
  linkTargetProps,
  livePoliteAttrs,
  openExternalUrl,
  pressedAttr,
  readContactMeta,
  revealUp,
  rotateStyle,
  sortedItems,
  type SectionComponentProps,
} from "../lib/helpers";

export function Contact({ block }: SectionComponentProps) {
  const [topicIdx, setTopicIdx] = useState(0);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [nameInvalid, setNameInvalid] = useState(false);
  const [messageInvalid, setMessageInvalid] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [sentHref, setSentHref] = useState("");
  const [copyStatus, setCopyStatus] = useState<0 | 1 | 2>(0);

  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const meta = readContactMeta(block);
  const channels = sortedItems(block.items);
  const primaryChannels = channels.slice(0, 1);
  const secondaryChannels = channels.slice(1);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  const handleCopyPhone = async () => {
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    const ok = await copyTextToClipboard(meta.copyValue);
    setCopyStatus(ok ? 1 : 2);
    copyTimerRef.current = setTimeout(() => {
      setCopyStatus(0);
    }, 2600);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanMessage = message.trim();
    const missingName = cleanName.length === 0;
    const missingMessage = cleanMessage.length === 0;

    setNameInvalid(missingName);
    setMessageInvalid(missingMessage);

    if (missingName || missingMessage) {
      setHasError(true);
      setSentHref("");
      focusElement(missingName ? nameRef.current : messageRef.current);
      return;
    }

    const topicText = meta.topics[topicIdx] ?? meta.topics[0] ?? "";
    const url = buildContactWhatsAppUrl(
      meta.whatsappPhone,
      topicText,
      cleanName,
      company.trim(),
      cleanMessage,
    );

    setHasError(false);
    setSentHref(url);
    openExternalUrl(url);
  };

  const handleReset = () => {
    setName("");
    setCompany("");
    setMessage("");
    setNameInvalid(false);
    setMessageInvalid(false);
    setHasError(false);
    setSentHref("");
    focusElement(nameRef.current);
  };

  return (
    <section
      id={meta.sectionId}
      {...labelledByAttr(meta.headingId)}
      className="relative overflow-x-clip bg-[#F5F0EA] py-12 text-[#14110F] sm:py-16 lg:py-20"
    >
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-12">
        <div
          aria-hidden="true"
          className="hero-dot-field pointer-events-none absolute -top-2 right-0 z-0 h-44 w-[44%] opacity-75"
        />

        <div className="relative z-10 overflow-hidden rounded-[28px] bg-[#E7DDDD] px-5 py-8 sm:rounded-[36px] sm:px-9 sm:py-12 lg:rounded-[40px] lg:px-14 lg:py-14">
          <div className="about-dot-field pointer-events-none absolute right-0 bottom-0 z-0 h-52 w-52 opacity-40" aria-hidden="true" />

          {/* Organic roasted beans anchoring section to Livion brand world */}
          <img
            src={meta.beanAUrl}
            alt=""
            aria-hidden="true"
            width={303}
            height={152}
            {...imgPerfProps()}
            style={rotateStyle(-14)}
            className="pointer-events-none absolute top-4 right-7 z-20 hidden w-10 select-none drop-shadow-[0_10px_14px_rgba(36,29,24,0.22)] lg:block"
          />
          <img
            src={meta.beanBUrl}
            alt=""
            aria-hidden="true"
            width={287}
            height={222}
            {...imgPerfProps()}
            style={rotateStyle(22)}
            className="pointer-events-none absolute bottom-5 left-6 z-20 hidden w-9 select-none drop-shadow-[0_10px_14px_rgba(36,29,24,0.22)] lg:block"
          />

          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
            {/* Left Heading + Grounded Espresso Contact Card */}
            <div {...revealUp(0)} className="lg:col-span-5">
              <h2
                id="contact-heading"
                className="font-hero text-[clamp(2.15rem,4.2vw,3.75rem)] leading-[1.03] font-extrabold tracking-[-0.03em] text-[#3E2216]"
              >
                <span className="block">{bind(block, "title")}</span>
                <span className="block">{bind(block, "subtitle")}</span>
              </h2>

              <p className="mt-4 max-w-[490px] text-[15.5px] leading-[1.68] text-[#4A423C] sm:text-[16.5px]">
                {bind(block, "description")}
              </p>

              <div className="mt-7 rounded-[24px] bg-[#2C1810] p-6 text-[#F5F0EA] sm:p-7">
                {primaryChannels.map((item, idx) => (
                  <div key={idx}>
                    <p className="font-display text-[13px] font-semibold tracking-[0.02em] text-[#E8A889]">
                      <span>{bind(item, "icon")}</span>
                    </p>
                    <p className="mt-1 font-hero text-[1.4rem] leading-tight font-extrabold tracking-tight text-[#F5F0EA] sm:text-[1.65rem]">
                      <span>{bind(item, "title")}</span>
                    </p>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-[#D7C9BE]">
                      {bind(item, "description")}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-2.5">
                      <a
                        href={meta.waDirectHref}
                        {...linkTargetProps(true)}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#B8421B] px-5 py-2.5 font-hero text-[14px] font-bold text-[#FFFFFF] transition-[background-color,transform] hover:bg-[#4E2716] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0EA] active:scale-[0.98]"
                      >
                        <span>{bind(block, "extra.direct_wa_label")}</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyPhone}
                        {...ariaLabelAttr(meta.copyAria)}
                        className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-full border border-[#B89F8D] bg-transparent px-4 py-2.5 font-hero text-[14px] font-bold text-[#F5F0EA] transition-[background-color,border-color,transform] hover:border-[#F5F0EA] hover:bg-[#4E2716]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0EA] active:scale-[0.98]"
                      >
                        {copyStatus === 1 && (
                          <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                        )}
                        {copyStatus === 2 && (
                          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                        )}
                        {copyStatus === 1 ? (
                          <span>{bind(block, "extra.copied_label")}</span>
                        ) : copyStatus === 2 ? (
                          <span>{bind(block, "extra.copy_fallback_label")}</span>
                        ) : (
                          <span>{bind(block, "extra.copy_label")}</span>
                        )}
                      </button>
                    </div>
                  </div>
                ))}

                {secondaryChannels.length > 0 && (
                  <div className="mt-6 grid grid-cols-1 gap-5 border-t border-[#F5F0EA]/16 pt-5 sm:grid-cols-2">
                    {secondaryChannels.map((item, idx) => (
                      <div key={idx}>
                        <p className="font-display text-[12.5px] font-semibold tracking-[0.02em] text-[#E8A889]">
                          <span>{bind(item, "icon")}</span>
                        </p>
                        <p className="mt-1 font-hero text-[15.5px] leading-snug font-extrabold text-[#F5F0EA]">
                          <span>{bind(item, "title")}</span>
                        </p>
                        <p className="mt-1 text-[13.5px] leading-[1.5] text-[#D7C9BE]">
                          {bind(item, "description")}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Tactile Paper Roastery Order Slip */}
            <div
              {...revealUp(0.08)}
              className="rounded-[24px] border border-[#3E2216]/12 bg-[#FBF8F4] p-5 sm:rounded-[28px] sm:p-8 lg:col-span-7 lg:p-10"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#3E2216]/12 pb-4">
                <h3 className="font-hero text-[1.4rem] leading-tight font-extrabold tracking-[-0.02em] text-[#3E2216] sm:text-[1.7rem]">
                  <span>{bind(block, "extra.form_title")}</span>
                </h3>
                <span className="font-display text-[13px] font-bold tracking-[0.02em] text-[#9C3513]">
                  {bind(block, "extra.form_badge")}
                </span>
              </div>

              <p className="mt-3 text-[14.5px] leading-relaxed text-[#4A423C] sm:text-[15.5px]">
                {bind(block, "extra.form_subtitle")}
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                <div role="group" {...labelledByAttr(meta.topicLabelId)}>
                  <p
                    id="contact-topic-label"
                    className="text-[13.5px] font-semibold text-[#3E2216]"
                  >
                    <span>{bind(block, "extra.topic_label")}</span>
                  </p>

                  <div className="mt-2 grid grid-cols-1 gap-1 rounded-[14px] bg-[#EFE7DF] p-1 sm:grid-cols-3">
                    <button
                      type="button"
                      {...pressedAttr(topicIdx === 0)}
                      onClick={() => setTopicIdx(0)}
                      className={contactTopicBtnClass(topicIdx === 0)}
                    >
                      <span>{bind(block, "extra.topic_0")}</span>
                    </button>
                    <button
                      type="button"
                      {...pressedAttr(topicIdx === 1)}
                      onClick={() => setTopicIdx(1)}
                      className={contactTopicBtnClass(topicIdx === 1)}
                    >
                      <span>{bind(block, "extra.topic_1")}</span>
                    </button>
                    <button
                      type="button"
                      {...pressedAttr(topicIdx === 2)}
                      onClick={() => setTopicIdx(2)}
                      className={contactTopicBtnClass(topicIdx === 2)}
                    >
                      <span>{bind(block, "extra.topic_2")}</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[13.5px] font-semibold text-[#3E2216]"
                    >
                      <span>{bind(block, "extra.name_label")}</span>
                    </label>
                    <input
                      ref={nameRef}
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(inputChangeValue(e));
                        if (nameInvalid) setNameInvalid(false);
                        if (hasError) setHasError(false);
                      }}
                      placeholder={meta.namePlaceholder}
                      {...ariaInvalidAttrs(nameInvalid, meta.feedbackId)}
                      className={contactFieldClass(nameInvalid)}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-[13.5px] font-semibold text-[#3E2216]"
                    >
                      <span>{bind(block, "extra.company_label")}</span>
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(inputChangeValue(e))}
                      placeholder={meta.companyPlaceholder}
                      className={contactFieldClass(false)}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[13.5px] font-semibold text-[#3E2216]"
                  >
                    <span>{bind(block, "extra.message_label")}</span>
                  </label>
                  <textarea
                    ref={messageRef}
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(inputChangeValue(e));
                      if (messageInvalid) setMessageInvalid(false);
                      if (hasError) setHasError(false);
                    }}
                    placeholder={meta.messagePlaceholder}
                    {...ariaInvalidAttrs(messageInvalid, meta.feedbackId)}
                    className={contactFieldClass(messageInvalid)}
                  />
                </div>

                <div id="contact-feedback" role="status" {...livePoliteAttrs()}>
                  {hasError && (
                    <div className="flex items-start gap-2.5 rounded-[12px] border border-[#B8421B] bg-[#FFF4EF] px-4 py-3 text-[14px] font-medium text-[#9C3513]">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{bind(block, "extra.error_text")}</span>
                    </div>
                  )}

                  {!hasError && sentHref && (
                    <div className="rounded-[12px] border border-[#234B35]/30 bg-[#EFF6F1] px-4 py-3.5 text-[14px] text-[#234B35]">
                      <div className="flex items-start gap-2.5 font-medium">
                        <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>{bind(block, "extra.success_text")}</span>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-3 pl-6">
                        <a
                          href={sentHref}
                          {...linkTargetProps(true)}
                          className="inline-flex min-h-[44px] items-center rounded-full bg-[#234B35] px-4 py-2 text-[13.5px] font-bold text-[#FFFFFF] transition-colors hover:bg-[#3E2216] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#234B35]"
                        >
                          <span>{bind(block, "extra.open_wa_fallback_label")}</span>
                        </a>
                        <button
                          type="button"
                          onClick={handleReset}
                          className="inline-flex min-h-[44px] items-center rounded-full border border-[#234B35]/35 bg-[#FFFFFF] px-4 py-2 text-[13.5px] font-bold text-[#234B35] transition-colors hover:bg-[#EFF6F1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#234B35]"
                        >
                          <span>{bind(block, "extra.reset_label")}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-3.5 border-t border-[#3E2216]/12 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[13.5px] leading-snug text-[#4A423C]">
                    {bind(block, "extra.form_note")}
                  </p>

                  <button
                    type="submit"
                    className="inline-flex min-h-[50px] shrink-0 items-center justify-center rounded-full bg-[#B8421B] px-7 py-3 font-hero text-[15.5px] font-extrabold tracking-[-0.01em] text-[#FFFFFF] transition-[background-color,transform] hover:bg-[#3E2216] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3E2216] active:scale-[0.97]"
                  >
                    <span>{bind(block, "extra.submit_label")}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
