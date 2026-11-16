"use client";

import { brandLogoSpecs } from "../lib/helpers";

/** Official WhatsApp speech-bubble + receiver glyph shared by product CTA and floating FAB. */
export function WhatsAppLogo({ className }: { className: string }) {
  const spec = brandLogoSpecs();
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d={spec.whatsappPath} />
    </svg>
  );
}

/** Authentic Shopee / Tokopedia bag emblem for marketplace purchase buttons. */
export function MarketplaceLogo({ isShopee }: { isShopee: boolean }) {
  const spec = brandLogoSpecs();

  if (isShopee) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={20}
        height={20}
        aria-hidden="true"
        className="h-5 w-5 shrink-0"
      >
        <path
          d={spec.bagHandlePath}
          fill="none"
          stroke="#D13816"
          strokeWidth="1.9"
          {...spec.roundStrokeProps}
        />
        <path d={spec.bagBodyPath} fill="#D13816" />
        <path
          d={spec.shopeeSPath}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.95"
          {...spec.roundStrokeProps}
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width={20}
      height={20}
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
    >
      <path
        d={spec.bagHandlePath}
        fill="none"
        stroke="#028A0C"
        strokeWidth="1.9"
        {...spec.roundStrokeProps}
      />
      <path d={spec.bagBodyPath} fill="#028A0C" />
      <circle cx="9.6" cy="13.2" r="2.1" fill="#FFFFFF" />
      <circle cx="14.4" cy="13.2" r="2.1" fill="#FFFFFF" />
      <circle cx="9.8" cy="13.2" r="0.9" fill="#028A0C" />
      <circle cx="14.2" cy="13.2" r="0.9" fill="#028A0C" />
      <path d="M10.9 15.8L12 17.2L13.1 15.8Z" fill="#FFFFFF" />
    </svg>
  );
}

/** Unified channel emblem inside the floating Pesan Sekarang popover. */
export function OrderChannelLogo({ isWa, isShopee }: { isWa: boolean; isShopee: boolean }) {
  if (isWa) {
    return <WhatsAppLogo className="h-5 w-5 shrink-0" />;
  }
  return <MarketplaceLogo isShopee={isShopee} />;
}
