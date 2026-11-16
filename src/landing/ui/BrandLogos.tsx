"use client";

import { brandLogoSpecs, marketplacePalette } from "../lib/helpers";

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

/** Authentic Shopee / Tokopedia bag emblem for marketplace buttons & footer pills. */
export function MarketplaceLogo({
  isShopee,
  monochrome = false,
  compact = false,
}: {
  isShopee: boolean;
  monochrome?: boolean;
  compact?: boolean;
}) {
  const spec = brandLogoSpecs();
  const colors = marketplacePalette(isShopee, monochrome, compact);

  if (isShopee) {
    return (
      <svg
        viewBox="0 0 24 24"
        width={20}
        height={20}
        aria-hidden="true"
        className={colors.iconClass}
      >
        <path
          d={spec.bagHandlePath}
          fill="none"
          stroke={colors.bagColor}
          strokeWidth="1.9"
          {...spec.roundStrokeProps}
        />
        <path d={spec.bagBodyPath} fill={colors.bagColor} />
        <path
          d={spec.shopeeSPath}
          fill="none"
          stroke={colors.cutoutColor}
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
      className={colors.iconClass}
    >
      <path
        d={spec.bagHandlePath}
        fill="none"
        stroke={colors.bagColor}
        strokeWidth="1.9"
        {...spec.roundStrokeProps}
      />
      <path d={spec.bagBodyPath} fill={colors.bagColor} />
      <circle cx="9.6" cy="13.2" r="2.1" fill={colors.cutoutColor} />
      <circle cx="14.4" cy="13.2" r="2.1" fill={colors.cutoutColor} />
      <circle cx="9.8" cy="13.2" r="0.9" fill={colors.bagColor} />
      <circle cx="14.2" cy="13.2" r="0.9" fill={colors.bagColor} />
      <path d="M10.9 15.8L12 17.2L13.1 15.8Z" fill={colors.cutoutColor} />
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
