"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  AlertCircle,
  Check,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { bind } from "../lib/bind";
import { useLocale } from "../lib/i18n";
import {
  ariaInvalidAttrs,
  ariaLabelAttr,
  buildContactWhatsAppUrl,
  contactFieldClass,
  contactPhoneGroupClass,
  copyTextToClipboard,
  focusElement,
  iframeMapAttrs,
  inputChangeValue,
  labelledByAttr,
  linkTargetProps,
  livePoliteAttrs,
  openExternalUrl,
  readBlockCopy,
  readContactMeta,
  readItemCopy,
  revealUp,
  sortedItems,
  type SectionComponentProps,
} from "../lib/helpers";

export function Contact({ block }: SectionComponentProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [message, setMessage] = useState("");
  const [firstNameInvalid, setFirstNameInvalid] = useState(false);
  const [messageInvalid, setMessageInvalid] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [sentHref, setSentHref] = useState("");
  const [copyStatus, setCopyStatus] = useState<0 | 1 | 2>(0);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const locale = useLocale();
  const meta = readContactMeta(block, locale);
  const copy = readBlockCopy(block, locale);
  const channels = sortedItems(block.items);

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
    const cleanFirst = firstName.trim();
    const cleanMessage = message.trim();
    const missingFirst = cleanFirst.length === 0;
    const missingMessage = cleanMessage.length === 0;

    setFirstNameInvalid(missingFirst);
    setMessageInvalid(missingMessage);

    if (missingFirst || missingMessage) {
      setHasError(true);
      setSentHref("");
      focusElement(missingFirst ? firstNameRef.current : messageRef.current);
      return;
    }

    const fullName = [cleanFirst, lastName.trim()].filter(Boolean).join(" ");
    const url = buildContactWhatsAppUrl(
      meta.whatsappPhone,
      fullName,
      contactInfo.trim(),
      senderPhone.trim(),
      cleanMessage,
      locale,
    );

    setHasError(false);
    setSentHref(url);
    openExternalUrl(url);
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setContactInfo("");
    setSenderPhone("");
    setMessage("");
    setFirstNameInvalid(false);
    setMessageInvalid(false);
    setHasError(false);
    setSentHref("");
    focusElement(firstNameRef.current);
  };

  return (
    <section
      id={meta.sectionId}
      {...labelledByAttr(meta.headingId)}
      className="relative overflow-x-clip bg-[#F5F0EA] py-14 text-[#14110F] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12 xl:gap-16">
          {/* Left Editorial Intro + Square-Icon Contact Channels */}
          <div {...revealUp(0)} className="lg:col-span-5 lg:pt-2">
            <span className="inline-flex items-center gap-2 rounded-[10px] border border-[#3E2216]/14 bg-[#FFFFFF] px-3.5 py-1.5 text-[13.5px] font-semibold text-[#3E2216] shadow-[0_2px_8px_rgba(36,29,24,0.04)]">
              <Mail className="h-3.5 w-3.5 text-[#B8421B]" aria-hidden="true" />
              {meta.isEn ? <span>{meta.enBadgeLabel}</span> : <span>{bind(block, "extra.badge_label")}</span>}
            </span>

            <h2
              id="contact-heading"
              className="mt-4 font-hero text-[clamp(2.2rem,4.3vw,3.55rem)] leading-[1.06] font-extrabold tracking-[-0.03em] text-[#3E2216]"
            >
              <span className="block">
                {copy.isEn ? <span>{copy.headA}</span> : <span>{bind(block, "title")}</span>}
              </span>
              <span className="block">
                {copy.isEn ? <span>{copy.headB}</span> : <span>{bind(block, "subtitle")}</span>}
              </span>
            </h2>

            <p className="mt-3.5 max-w-[440px] text-[15.5px] leading-[1.65] text-[#4A423C] sm:text-[16px]">
              {copy.isEn ? <span>{copy.bodyCopy}</span> : <span>{bind(block, "description")}</span>}
            </p>

            <ul className="mt-8 space-y-5">
              {channels.map((item, idx) => {
                const itemCopy = readItemCopy(item, locale);
                return (
                  <li key={idx} className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] border border-[#3E2216]/10 bg-[#FFFFFF] text-[#B8421B] shadow-[0_6px_16px_rgba(36,29,24,0.05)]"
                    >
                      {idx === 0 ? (
                        <Phone className="h-5 w-5" />
                      ) : idx === 1 ? (
                        <Clock className="h-5 w-5" />
                      ) : (
                        <MapPin className="h-5 w-5" />
                      )}
                    </span>

                    <div className="min-w-0">
                      <p className="text-[13px] font-medium text-[#5E4336]">
                        {itemCopy.isEn ? <span>{itemCopy.metaTag}</span> : <span>{bind(item, "icon")}</span>}
                      </p>

                      <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                        {idx === 0 ? (
                          <>
                            <a
                              href={meta.waDirectHref}
                              {...linkTargetProps(true)}
                              className="font-hero text-[16px] leading-snug font-bold text-[#14110F] underline decoration-[#3E2216]/25 underline-offset-4 transition-colors hover:text-[#B8421B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8421B]"
                            >
                              {itemCopy.isEn ? <span>{itemCopy.labelText}</span> : <span>{bind(item, "title")}</span>}
                            </a>

                            <button
                              type="button"
                              onClick={handleCopyPhone}
                              {...ariaLabelAttr(meta.copyAria)}
                              className="inline-flex min-h-[44px] items-center gap-1 text-[13px] font-semibold text-[#9C3513] underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8421B]"
                            >
                              {copyStatus === 1 && (
                                <Check className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                              )}
                              {copyStatus === 2 && (
                                <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                              )}
                              {copyStatus === 1 ? (
                                meta.isEn ? <span>{meta.enCopiedLabel}</span> : <span>{bind(block, "extra.copied_label")}</span>
                              ) : copyStatus === 2 ? (
                                meta.isEn ? <span>{meta.enCopyFallback}</span> : <span>{bind(block, "extra.copy_fallback_label")}</span>
                              ) : (
                                meta.isEn ? <span>{meta.enCopyLabel}</span> : <span>{bind(block, "extra.copy_label")}</span>
                              )}
                            </button>
                          </>
                        ) : idx >= 2 ? (
                          <a
                            href="#contact-map"
                            className="font-hero text-[16px] leading-snug font-bold text-[#14110F] underline decoration-[#3E2216]/25 underline-offset-4 transition-colors hover:text-[#B8421B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8421B]"
                          >
                            {itemCopy.isEn ? <span>{itemCopy.labelText}</span> : <span>{bind(item, "title")}</span>}
                          </a>
                        ) : (
                          <p className="font-hero text-[16px] leading-snug font-bold text-[#14110F]">
                            {itemCopy.isEn ? <span>{itemCopy.labelText}</span> : <span>{bind(item, "title")}</span>}
                          </p>
                        )}
                      </div>

                      <p className="mt-0.5 text-[13.5px] leading-relaxed text-[#5E4336]">
                        {itemCopy.isEn ? <span>{itemCopy.bodyCopy}</span> : <span>{bind(item, "description")}</span>}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Clean White Bordered Inquiry Card */}
          <div
            {...revealUp(0.06)}
            className="rounded-[22px] border border-[#3E2216]/12 bg-[#FFFFFF] p-5 shadow-[0_18px_48px_rgba(36,29,24,0.06)] sm:p-8 lg:col-span-7"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-first-name"
                    className="block text-[13.5px] font-semibold text-[#3E2216]"
                  >
                    {meta.isEn ? <span>{meta.enFirstNameLabel}</span> : <span>{bind(block, "extra.first_name_label")}</span>}
                  </label>
                  <input
                    ref={firstNameRef}
                    id="contact-first-name"
                    type="text"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(inputChangeValue(e));
                      if (firstNameInvalid) setFirstNameInvalid(false);
                      if (hasError) setHasError(false);
                    }}
                    placeholder={meta.firstNamePlaceholder}
                    {...ariaInvalidAttrs(firstNameInvalid, meta.feedbackId)}
                    className={contactFieldClass(firstNameInvalid)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-last-name"
                    className="block text-[13.5px] font-semibold text-[#3E2216]"
                  >
                    {meta.isEn ? <span>{meta.enLastNameLabel}</span> : <span>{bind(block, "extra.last_name_label")}</span>}
                  </label>
                  <input
                    id="contact-last-name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(inputChangeValue(e))}
                    placeholder={meta.lastNamePlaceholder}
                    className={contactFieldClass(false)}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[13.5px] font-semibold text-[#3E2216]"
                >
                  {meta.isEn ? <span>{meta.enEmailLabel}</span> : <span>{bind(block, "extra.email_label")}</span>}
                </label>
                <input
                  id="contact-email"
                  type="text"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(inputChangeValue(e))}
                  placeholder={meta.emailPlaceholder}
                  className={contactFieldClass(false)}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-[13.5px] font-semibold text-[#3E2216]"
                >
                  {meta.isEn ? <span>{meta.enPhoneLabel}</span> : <span>{bind(block, "extra.phone_label")}</span>}
                </label>
                <div className={contactPhoneGroupClass()}>
                  <span className="inline-flex shrink-0 items-center border-r border-[#9E8E82]/45 bg-[#FAF6F1] px-3.5 text-[14.5px] font-semibold text-[#4A423C] select-none">
                    {meta.countryPrefix}
                  </span>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={senderPhone}
                    onChange={(e) => setSenderPhone(inputChangeValue(e))}
                    placeholder={meta.phonePlaceholder}
                    className="min-w-0 flex-1 bg-transparent px-3.5 py-2.5 text-[16px] text-[#14110F] placeholder:text-[#6B5F58] focus:outline-none sm:text-[15px]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[13.5px] font-semibold text-[#3E2216]"
                >
                  {meta.isEn ? <span>{meta.enMessageLabel}</span> : <span>{bind(block, "extra.message_label")}</span>}
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
                  <div className="flex items-start gap-2.5 rounded-[10px] border border-[#B8421B] bg-[#FFF4EF] px-4 py-3 text-[14px] font-medium text-[#9C3513]">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    {meta.isEn ? <span>{meta.enErrorText}</span> : <span>{bind(block, "extra.error_text")}</span>}
                  </div>
                )}

                {!hasError && sentHref && (
                  <div className="rounded-[10px] border border-[#234B35]/30 bg-[#EFF6F1] px-4 py-3.5 text-[14px] text-[#234B35]">
                    <div className="flex items-start gap-2.5 font-medium">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      {meta.isEn ? <span>{meta.enSuccessText}</span> : <span>{bind(block, "extra.success_text")}</span>}
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-3 pl-6">
                      <a
                        href={sentHref}
                        {...linkTargetProps(true)}
                        className="inline-flex min-h-[44px] items-center rounded-[10px] bg-[#234B35] px-4 py-2 text-[13.5px] font-bold text-[#FFFFFF] transition-colors hover:bg-[#3E2216] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#234B35]"
                      >
                        {meta.isEn ? <span>{meta.enOpenWaLabel}</span> : <span>{bind(block, "extra.open_wa_fallback_label")}</span>}
                      </a>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex min-h-[44px] items-center rounded-[10px] border border-[#234B35]/35 bg-[#FFFFFF] px-4 py-2 text-[13.5px] font-bold text-[#234B35] transition-colors hover:bg-[#EFF6F1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#234B35]"
                      >
                        {meta.isEn ? <span>{meta.enResetLabel}</span> : <span>{bind(block, "extra.reset_label")}</span>}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <button
                  type="submit"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-[10px] bg-[#B8421B] px-7 py-2.5 font-hero text-[15px] font-bold text-[#FFFFFF] shadow-[0_6px_16px_rgba(184,66,27,0.22)] transition-[background-color,transform] hover:bg-[#3E2216] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3E2216] active:scale-[0.98]"
                >
                  {meta.isEn ? <span>{meta.enSubmitLabel}</span> : <span>{bind(block, "extra.submit_label")}</span>}
                </button>

                <p className="text-[13px] text-[#5E4336]">
                  {meta.isEn ? <span>{meta.enFormNote}</span> : <span>{bind(block, "extra.form_note")}</span>}
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Full-Width Embedded Google Maps Card */}
        <div
          id="contact-map"
          {...revealUp(0.08)}
          className="mt-12 overflow-hidden rounded-[22px] border border-[#3E2216]/12 bg-[#FFFFFF] p-3 shadow-[0_14px_38px_rgba(36,29,24,0.05)] sm:mt-16 sm:p-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 px-2 pt-1 pb-3">
            <div className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-[#B8421B]" aria-hidden="true" />
              <p className="font-hero text-[15.5px] font-bold text-[#3E2216] sm:text-[16.5px]">
                {meta.isEn ? <span>{meta.enMapTitle}</span> : <span>{bind(block, "extra.map_title")}</span>}
              </p>
            </div>

            <a
              href={meta.mapExternalUrl}
              {...linkTargetProps(true)}
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-[10px] border border-[#3E2216]/15 px-3.5 py-2 text-[13.5px] font-semibold text-[#3E2216] transition-colors hover:border-[#B8421B] hover:text-[#B8421B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8421B]"
            >
              {meta.isEn ? <span>{meta.enMapLinkLabel}</span> : <span>{bind(block, "extra.map_link_label")}</span>}
              <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </a>
          </div>

          <div className="overflow-hidden rounded-[14px] border border-[#3E2216]/10 bg-[#FAF6F1]">
            <iframe
              {...iframeMapAttrs(meta)}
              width={600}
              height={450}
              loading="lazy"
              allowFullScreen
              className="block h-[280px] w-full border-0 sm:h-[360px] lg:h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
