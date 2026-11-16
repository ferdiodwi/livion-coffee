import { tr, type Locale } from "./i18n";

export type { Locale };

export type LandingItem = {
  id?: string;
  title?: string;
  description?: string;
  icon?: string;
  order?: number;
};

export type LandingBlock = {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  image_url?: string | null;
  icon?: string;
  order?: number;
  extra?: Record<string, unknown> | null;
  items?: LandingItem[];
};

export type LandingSection = {
  id?: string;
  type?: string;
  order?: number;
  is_active?: boolean;
  blocks?: LandingBlock[];
};

export type LandingPage = {
  id?: string;
  title?: string;
  slug?: string;
  order?: number;
  is_home?: boolean;
  sections?: LandingSection[];
};

export type LandingPayload = {
  name?: string;
  slug?: string;
  description?: string;
  preview_image_url?: string | null;
  category?: string;
  pages?: LandingPage[];
};

export type SectionComponentProps = {
  section?: LandingSection;
  block: LandingBlock;
};

export type WeightPreset = {
  label: string;
  multiplier: number;
};

export type SubmittedReview = {
  id: string;
  author: string;
  role: string;
  rating: number;
  ratingDisplay: string;
  initials: string;
  quote: string;
};

export type SubmittedReviewDraft = Omit<SubmittedReview, "id">;

export type HeroBeanSpec = {
  src: string;
  width: number;
  height: number;
  className: string;
  depth: number;
  rotate: number;
  blur?: boolean;
};

export const STAGE_BEAN_SPECS: HeroBeanSpec[] = [
  { src: "assets/cutouts/bean-1.png", width: 283, height: 219, className: "left-[4%] top-[12%] z-20 w-9 sm:w-11 lg:left-[8%] lg:top-[15%] lg:w-12", depth: 14, rotate: -18 },
  { src: "assets/cutouts/bean-4.png", width: 287, height: 222, className: "hidden md:block left-[20%] top-[10%] z-10 w-9 opacity-90", depth: 12, rotate: 34 },
  { src: "assets/cutouts/bean-6.png", width: 261, height: 261, className: "hidden md:block right-[15%] top-[8%] z-10 w-9 opacity-90", depth: -12, rotate: -42 },
  { src: "assets/cutouts/bean-3.png", width: 277, height: 248, className: "right-[4%] top-[10%] z-20 w-9 sm:w-11 lg:right-[7%] lg:top-[12%] lg:w-12", depth: 20, rotate: 26 },
  { src: "assets/cutouts/bean-1.png", width: 283, height: 219, className: "hidden lg:block right-[4%] top-[27%] z-10 w-10 opacity-90", depth: 16, rotate: -32 },
  { src: "assets/cutouts/bean-5.png", width: 212, height: 273, className: "hidden lg:block left-[12%] top-[35%] z-20 w-9", depth: 22, rotate: 18 },
  { src: "assets/cutouts/bean-6.png", width: 261, height: 261, className: "hidden lg:block left-[7%] bottom-[47%] z-10 w-11", depth: 22, rotate: -28 },
  { src: "assets/cutouts/bean-1.png", width: 283, height: 219, className: "left-[6%] top-[44%] z-20 w-8 sm:w-9 lg:left-[36%] lg:top-auto lg:bottom-[44%] lg:w-10", depth: 24, rotate: -24 },
  { src: "assets/cutouts/bean-3.png", width: 277, height: 248, className: "hidden lg:block left-[33%] bottom-[35%] z-10 w-9", depth: 14, rotate: 40 },
  { src: "assets/cutouts/bean-2.png", width: 303, height: 152, className: "hidden lg:block right-[11%] bottom-[47%] z-0 w-10 opacity-80", depth: -12, rotate: 20, blur: true },
  { src: "assets/cutouts/bean-5.png", width: 212, height: 273, className: "right-[6%] bottom-[42%] z-20 w-9 sm:w-10 lg:right-[31%] lg:bottom-[36%] lg:w-11", depth: 24, rotate: 16 },
  { src: "assets/cutouts/bean-3.png", width: 277, height: 248, className: "hidden lg:block right-[4%] bottom-[38%] z-10 w-10 opacity-85", depth: -14, rotate: -36, blur: true },
  { src: "assets/cutouts/bean-1.png", width: 283, height: 219, className: "hidden lg:block right-[14%] bottom-[31%] z-20 w-11", depth: 20, rotate: -15 },
  { src: "assets/cutouts/bean-6.png", width: 261, height: 261, className: "hidden lg:block right-[22%] bottom-[25%] z-20 w-10", depth: 26, rotate: 38 },
  { src: "assets/cutouts/bean-4.png", width: 287, height: 222, className: "hidden lg:block right-[6%] bottom-[26%] z-10 w-9 opacity-90", depth: 14, rotate: -48 },
  { src: "assets/cutouts/bean-4.png", width: 287, height: 222, className: "hidden lg:block right-[29%] bottom-[10%] z-20 w-12", depth: 16, rotate: 22 },
  { src: "assets/cutouts/bean-5.png", width: 212, height: 273, className: "hidden lg:block right-[36%] bottom-[6%] z-30 w-9", depth: 28, rotate: -18 },
];

export const ORIGIN_CARD_POSITIONS = [
  "lg:left-[3.5%] lg:top-[218px] lg:w-[295px] xl:left-[7%] xl:top-[225px] xl:w-[340px]",
  "lg:left-[1.5%] lg:bottom-[92px] lg:w-[310px] xl:left-[4%] xl:bottom-[104px] xl:w-[365px]",
  "lg:right-[2.5%] lg:top-[238px] lg:w-[298px] xl:right-[5.5%] xl:top-[246px] xl:w-[345px]",
  "lg:right-[5%] lg:bottom-[54px] lg:w-[278px] xl:right-[9%] xl:bottom-[58px] xl:w-[312px]",
];

export const COLLECTION_BEAN_SETS: HeroBeanSpec[][] = [
  [
    { src: "assets/cutouts/bean-2.png", width: 303, height: 152, className: "bottom-[58%] left-[37%] z-30 w-8 sm:w-9", depth: 0, rotate: -18 },
    { src: "assets/cutouts/bean-4.png", width: 287, height: 222, className: "bottom-[66%] left-[12%] z-30 w-7 sm:w-8", depth: 0, rotate: 28 },
  ],
  [
    { src: "assets/cutouts/bean-1.png", width: 283, height: 219, className: "-top-10 left-[10%] z-30 w-9 sm:w-10", depth: 0, rotate: -24 },
    { src: "assets/cutouts/bean-3.png", width: 277, height: 248, className: "-top-14 left-[22%] z-30 w-8 sm:w-9", depth: 0, rotate: 34 },
    { src: "assets/cutouts/bean-6.png", width: 261, height: 261, className: "-top-7 left-[34%] z-30 w-7 sm:w-8", depth: 0, rotate: -42 },
  ],
  [
    { src: "assets/cutouts/bean-5.png", width: 212, height: 273, className: "bottom-[67%] left-[13%] z-30 w-7 sm:w-8", depth: 0, rotate: 16 },
    { src: "assets/cutouts/bean-1.png", width: 283, height: 219, className: "bottom-[55%] left-[36%] z-30 w-8 sm:w-9", depth: 0, rotate: -30 },
  ],
];

function strVal(obj: Record<string, unknown> | null | undefined, key: string, fallback = ""): string {
  if (!obj) return fallback;
  const val = obj[key];
  return typeof val === "string" ? val : fallback;
}

function numVal(obj: Record<string, unknown> | null | undefined, key: string, fallback = 0): number {
  if (!obj) return fallback;
  const val = obj[key];
  if (typeof val === "number" && Number.isFinite(val)) return val;
  if (typeof val === "string") {
    const parsed = Number(val);
    if (Number.isFinite(parsed)) return parsed;
  }
  return fallback;
}

function strArrVal(obj: Record<string, unknown> | null | undefined, key: string, fallback: string[] = []): string[] {
  if (!obj || !Array.isArray(obj[key])) return fallback;
  return (obj[key] as unknown[]).filter((v): v is string => typeof v === "string" && v.trim().length > 0);
}

export function sortedItems(items: LandingItem[] = []): LandingItem[] {
  return [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function sortedBlocks(blocks: LandingBlock[] = []): LandingBlock[] {
  return [...blocks].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function isMainBlock(block: LandingBlock | undefined): boolean {
  return (block?.order ?? 0) === 0;
}

export function childBlocks(section: LandingSection | undefined): LandingBlock[] {
  return sortedBlocks(section?.blocks).filter((b) => (b.order ?? 0) > 0);
}

export function formatIDR(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateBeanPrice(basePrice: number, weightLabel: string, weights: WeightPreset[]): number {
  const matched = weights.find((item) => item.label === weightLabel);
  if (!matched) return basePrice;
  return Math.round((basePrice * matched.multiplier) / 1000) * 1000;
}

export function sanitizePhone(phone: string): string {
  const digits = phone.replace(/[^0-9]/g, "");
  return digits || "6285159506662";
}

export function readBlockCopy(block: LandingBlock | undefined, locale: Locale = "id") {
  return {
    isEn: locale === "en",
    headA: tr(typeof block?.title === "string" ? block.title : "", locale),
    headB: tr(typeof block?.subtitle === "string" ? block.subtitle : "", locale),
    bodyCopy: tr(typeof block?.description === "string" ? block.description : "", locale),
    badgeIcon: tr(typeof block?.icon === "string" ? block.icon : "", locale),
  };
}

export function readItemCopy(item: LandingItem | undefined, locale: Locale = "id") {
  return {
    isEn: locale === "en",
    labelText: tr(typeof item?.title === "string" ? item.title : "", locale),
    bodyCopy: tr(typeof item?.description === "string" ? item.description : "", locale),
    metaTag: tr(typeof item?.icon === "string" ? item.icon : "", locale),
  };
}

export function buildBeanWhatsAppUrl(
  phone: string,
  productName: string,
  weight: string,
  grind: string,
  quantity: number,
  totalPrice: number,
  locale: Locale = "id",
): string {
  const isEn = locale === "en";
  const message = [
    isEn
      ? "Hello Livion Coffee! I'd like to order coffee beans:"
      : "Halo Livion Coffee! Saya mau pesan biji kopi:",
    "",
    `${isEn ? "Product" : "Produk"}: ${productName}`,
    `${isEn ? "Weight" : "Berat"}: ${weight}`,
    `${isEn ? "Grind" : "Gilingan"}: ${grind}`,
    `${isEn ? "Quantity" : "Jumlah"}: ${quantity}x`,
    `Total: ${formatIDR(totalPrice)}`,
    "",
    isEn
      ? "Could you let me know availability and shipping options? Thank you!"
      : "Mohon info ketersediaan dan ongkirnya ya. Terima kasih!",
  ].join("\n");
  return `https://wa.me/${sanitizePhone(phone)}?text=${encodeURIComponent(message)}`;
}

export function buildTextWhatsAppUrl(phone: string, text: string): string {
  return `https://wa.me/${sanitizePhone(phone)}?text=${encodeURIComponent(text)}`;
}

export function buildContactWhatsAppUrl(
  phone: string,
  fullName: string,
  contactInfo: string,
  senderPhone: string,
  detailMessage: string,
  locale: Locale = "id",
): string {
  const isEn = locale === "en";
  const lines = [
    isEn
      ? "Hello Livion Coffee! I'm reaching out via the website form:"
      : "Halo Livion Coffee! Saya mau menghubungi lewat form website:",
    "",
    `${isEn ? "Name" : "Nama"}: ${fullName}`,
    contactInfo ? `${isEn ? "Email / Business" : "Email / Usaha"}: ${contactInfo}` : null,
    senderPhone ? `WhatsApp: +62 ${senderPhone}` : null,
    `${isEn ? "Message" : "Pesan"}: ${detailMessage}`,
  ]
    .filter((line) => line !== null)
    .join("\n");
  return `https://wa.me/${sanitizePhone(phone)}?text=${encodeURIComponent(lines)}`;
}

export function readNavbarMeta(block: LandingBlock, locale: Locale = "id") {
  const ex = block.extra;
  const isEn = locale === "en";
  return {
    isEn,
    homeHref: strVal(ex, "home_href", "#top"),
    openAria: tr(strVal(ex, "menu_open_aria", "Buka menu navigasi"), locale),
    closeAria: tr(strVal(ex, "menu_close_aria", "Tutup menu navigasi"), locale),
    navAria: isEn ? "Primary navigation" : "Navigasi utama",
    mobileNavAria: isEn ? "Mobile navigation" : "Navigasi mobile",
    enMenuLabel: tr(strVal(ex, "menu_label", "Menu"), locale),
    langSwitchAria: isEn
      ? "Switch language to Bahasa Indonesia (currently English)"
      : "Ganti bahasa ke English (saat ini Bahasa Indonesia)",
    drawerId: "mobile-nav-drawer",
  };
}

export function navItemHref(item: LandingItem): string {
  const raw = (item.icon ?? "").trim();
  return raw || "#beans";
}

export function flagGlyphSpec(clipId: string) {
  return {
    clipUrl: `url(#${clipId})`,
    wavePath:
      "M 1.5 3.6 Q 7.5 1.1 14 3.4 Q 20.5 5.7 26.5 3.0 L 26.5 16.4 Q 20.5 19.1 14 16.8 Q 7.5 14.5 1.5 17.0 Z",
    horizonPath: "M -1 10.3 Q 7.5 7.8 14 10.1 Q 20.5 12.4 29 9.7",
    diagPath: "M -2 -1 L 30 21 M 30 -1 L -2 21",
    verticalPath: "M 14 -1 L 14 21",
    idRedPath:
      "M 0 0 L 28 0 L 28 9.7 Q 20.5 12.4 14 10.1 Q 7.5 7.8 0 10.3 Z",
  };
}

export function readHeroConfig(block: LandingBlock, locale: Locale = "id") {
  const ex = block.extra;
  return {
    isEn: locale === "en",
    sectionId: strVal(ex, "section_id", "top"),
    originPrefix: tr(strVal(ex, "origin_prefix", "Asal Kebun"), locale),
    roastPrefix: tr(strVal(ex, "roast_prefix", "Sangrai"), locale),
    bestForPrefix: tr(strVal(ex, "best_for_prefix", "Cocok buat"), locale),
    enSealTop: tr(strVal(ex, "seal_top", "Pesan"), locale),
    enSealBottom: tr(strVal(ex, "seal_bottom", "yuk"), locale),
    tablistAria: tr(strVal(ex, "tablist_aria", "Pilih varian kopi Livion"), locale),
    whatsappPhone: strVal(ex, "whatsapp_number", "6285159506662"),
    defaultWeight: strVal(ex, "default_weight", "200g"),
    defaultGrind: tr(strVal(ex, "default_grind", "Biji Utuh (Whole Bean)"), locale),
    desktopBackRibbon:
      "M -20 385 C 200 385, 445 388, 505 460 C 545 508, 530 625, 610 658 C 695 688, 915 655, 915 535 C 915 445, 675 415, 615 495 C 590 528, 595 555, 635 575",
    desktopFrontRibbon:
      "M 635 575 C 700 608, 835 612, 922 560 C 1030 495, 1215 415, 1465 375",
    mobileRibbon:
      "M -20 330 C 240 250, 560 475, 900 330 C 1150 220, 1320 300, 1465 265",
  };
}

export function readHeroLot(block: LandingBlock | undefined, locale: Locale = "id") {
  const ex = block?.extra;
  const rawName = typeof block?.title === "string" ? block.title : "Livion Coffee";
  const rawOrigin = typeof block?.subtitle === "string" ? block.subtitle : "";
  const beanName = tr(rawName, locale);
  const originText = tr(rawOrigin, locale);
  const price200g = numVal(ex, "price_200g", 25000);
  const isEn = locale === "en";
  return {
    isEn,
    beanName,
    originText,
    roastLevel: tr(strVal(ex, "roast_level", "Medium"), locale),
    bestFor: tr(strVal(ex, "best_for", ""), locale),
    shortLabel: tr(strVal(ex, "short_label", rawName), locale),
    pouchWidth: numVal(ex, "pouch_width", 480),
    pouchHeight: numVal(ex, "pouch_height", 790),
    imageAlt: tr(strVal(ex, "image_alt", rawName), locale),
    price200g,
    orderAria: isEn
      ? `Order ${beanName} 200g via WhatsApp`
      : `Pesan ${beanName} 200g via WhatsApp`,
    srAnnouncement: isEn
      ? `Showing ${beanName}, ${originText}.`
      : `Menampilkan ${beanName}, ${originText}.`,
  };
}

export function readCraftedMeta(block: LandingBlock, locale: Locale = "id") {
  const ex = block.extra;
  return {
    sectionId: strVal(ex, "section_id", "craft"),
    headingId: "crafted-heading",
    imageAlt: tr(
      strVal(ex, "image_alt", "Telapak tangan terbuka memegang biji kopi sangrai"),
      locale,
    ),
    desktopWavePath:
      "M 0 118 C 155 152, 295 215, 430 180 C 555 148, 635 52, 780 52 C 955 52, 1085 186, 1255 168 C 1340 160, 1400 138, 1440 118 L 1440 622 C 1315 656, 1165 668, 1020 598 C 890 536, 745 516, 625 572 C 495 632, 305 688, 0 638 Z",
    mobileWavePath:
      "M 0 92 C 320 155, 760 28, 1440 96 L 1440 694 C 1020 718, 510 672, 0 704 Z",
    dots: Array.from({ length: 20 }, (_, idx) => idx),
  };
}

export function readCollectionConfig(block: LandingBlock, locale: Locale = "id") {
  const ex = block.extra;
  const weights: WeightPreset[] = Array.isArray(ex?.weights)
    ? (ex.weights as unknown[])
        .filter((e): e is Record<string, unknown> => Boolean(e && typeof e === "object"))
        .map((e) => ({
          label: typeof e.label === "string" ? e.label : "200g",
          multiplier: typeof e.multiplier === "number" ? e.multiplier : 1,
        }))
    : [
        { label: "200g", multiplier: 1 },
        { label: "500g", multiplier: 2.35 },
        { label: "1kg", multiplier: 4.5 },
      ];
  const rawGrinds = strArrVal(ex, "grinds", [
    "Biji Utuh (Whole Bean)",
    "Halus (Espresso)",
    "Sedang (V60 / Pour Over)",
    "Kasar (French Press / Tubruk)",
  ]);
  return {
    isEn: locale === "en",
    sectionId: strVal(ex, "section_id", "beans"),
    headingId: "collection-heading",
    whatsappPhone: strVal(ex, "whatsapp_number", "6285159506662"),
    specAltitude: tr(strVal(ex, "spec_altitude", "Ketinggian"), locale),
    specProcess: tr(strVal(ex, "spec_process", "Proses"), locale),
    specRoast: tr(strVal(ex, "spec_roast", "Sangrai"), locale),
    specBestFor: tr(strVal(ex, "spec_best_for", "Cocok Buat"), locale),
    weightLabel: tr(strVal(ex, "weight_label", "Pilih Berat Kemasan"), locale),
    grindLabel: tr(strVal(ex, "grind_label", "Pilih Gilingan"), locale),
    qtyLabel: tr(strVal(ex, "qty_label", "Jumlah"), locale),
    qtyMinusAria: tr(strVal(ex, "qty_minus_aria", "Kurangi jumlah"), locale),
    qtyPlusAria: tr(strVal(ex, "qty_plus_aria", "Tambah jumlah"), locale),
    totalLabel: tr(strVal(ex, "total_label", "Total"), locale),
    ctaLabel: tr(strVal(ex, "cta_label", "Pesan via WhatsApp"), locale),
    marketplaceNote: tr(
      strVal(ex, "marketplace_note", "Atau checkout via marketplace resmi:"),
      locale,
    ),
    shopeeUrl: strVal(ex, "shopee_url", "https://id.shp.ee/Lagtfovg").trim(),
    shopeeLabel: tr(strVal(ex, "shopee_label", "Beli di Shopee"), locale),
    tokopediaUrl: strVal(ex, "tokopedia_url", "https://www.tokopedia.com/livioncoffee").trim(),
    tokopediaLabel: tr(strVal(ex, "tokopedia_label", "Beli di Tokopedia"), locale),
    closeAria: tr(strVal(ex, "close_aria", "Tutup detail produk"), locale),
    lotPrefix: tr(strVal(ex, "lot_prefix", "Lot"), locale),
    weights,
    grinds: rawGrinds.map((g) => tr(g, locale)),
  };
}

export function readCollectionProduct(
  block: LandingBlock,
  index: number,
  locale: Locale = "id",
) {
  const ex = block.extra;
  const variant = strVal(ex, "variant", "corner-badge");
  const rawTitle = typeof block.title === "string" ? block.title : "";
  const rawOrigin = typeof block.subtitle === "string" ? block.subtitle : "";
  const rawDesc = typeof block.description === "string" ? block.description : "";
  const beanName = tr(rawTitle, locale);
  const price200g = numVal(ex, "price_200g", 35000);
  const priceDisplay = strVal(ex, "price_display", formatIDR(price200g));
  const beanSet = COLLECTION_BEAN_SETS[index % COLLECTION_BEAN_SETS.length] ?? COLLECTION_BEAN_SETS[0];
  return {
    isEn: locale === "en",
    featured: variant === "center-featured",
    beanName,
    originText: tr(rawOrigin, locale),
    bodyCopy: tr(rawDesc, locale),
    categoryLabel: tr(strVal(ex, "category", "kopi"), locale),
    enTitleTop: tr(strVal(ex, "title_top", rawTitle), locale),
    enTitleBottom: tr(strVal(ex, "title_bottom", ""), locale),
    cardNote: tr(strVal(ex, "card_note", ""), locale),
    indexLabel: strVal(ex, "index_label", twoDigitStep(block.order, index)),
    price200g,
    priceDisplay,
    shopeeUrl: strVal(ex, "shopee_url", "").trim(),
    tokopediaUrl: strVal(ex, "tokopedia_url", "").trim(),
    altitude: tr(strVal(ex, "altitude", "-"), locale),
    process: tr(strVal(ex, "process", "-"), locale),
    roastLevel: tr(strVal(ex, "roast_level", "Medium"), locale),
    bestFor: tr(strVal(ex, "best_for", "-"), locale),
    tastingNotes: strArrVal(ex, "tasting_notes", []).map((note) => tr(note, locale)),
    textureUrl: strVal(ex, "texture_url", "assets/textures/arabica-crema.jpg"),
    textureAlt: tr(strVal(ex, "texture_alt", ""), locale),
    pouchUrl: typeof block.image_url === "string" ? block.image_url : "assets/cutouts/arabica-pouch.png",
    imageAlt: tr(strVal(ex, "image_alt", rawTitle), locale),
    pouchWidth: numVal(ex, "pouch_width", 460),
    pouchHeight: numVal(ex, "pouch_height", 780),
    beanSet,
    cardAria:
      locale === "en"
        ? `View details and order ${beanName}, starting at ${priceDisplay}`
        : `Pilih varian dan pesan ${beanName}, mulai ${priceDisplay}`,
    modalSelectId: `modal-grind-${block.order ?? index}`,
    modalTitleId: `modal-title-${block.order ?? index}`,
    modalWeightId: `modal-weight-${block.order ?? index}`,
    modalQtyId: `modal-qty-${block.order ?? index}`,
  };
}

export function readComingSoonMeta(block: LandingBlock, locale: Locale = "id") {
  const ex = block.extra;
  return {
    isEn: locale === "en",
    sectionId: strVal(ex, "section_id", "coming-soon"),
    headingId: "coming-soon-heading",
    enStatusBadge: tr(strVal(ex, "status_badge", "Segera Hadir"), locale),
    enEyebrow: tr(strVal(ex, "eyebrow", "Rilis Berikutnya"), locale),
    imageAlt: tr(
      strVal(
        ex,
        "image_alt",
        "Kemasan kopi putih Livion dengan simbol tanda tanya untuk varian yang segera hadir",
      ),
      locale,
    ),
    textureAlt: tr(strVal(ex, "texture_alt", "Tekstur crema espresso kopi sangrai"), locale),
    beanAUrl: "assets/cutouts/bean-1.png",
    beanBUrl: "assets/cutouts/bean-5.png",
  };
}

export function readOriginMeta(block: LandingBlock, locale: Locale = "id") {
  const ex = block.extra;
  return {
    sectionId: strVal(ex, "section_id", "origin"),
    headingId: "origin-showcase-heading",
    imageAlt: tr(
      strVal(ex, "image_alt", "Kemasan biji kopi Livion Coffee Robusta Argopuro 200g"),
      locale,
    ),
  };
}

export function readAboutMeta(block: LandingBlock, locale: Locale = "id") {
  const ex = block.extra;
  return {
    isEn: locale === "en",
    sectionId: strVal(ex, "section_id", "about"),
    headingId: "about-heading",
    enBadgeLabel: tr(strVal(ex, "badge_label", "Tentang Kami"), locale),
    enStorySecondary: tr(strVal(ex, "story_secondary", ""), locale),
    enCardCaption: tr(strVal(ex, "card_caption", ""), locale),
    imageAlt: tr(strVal(ex, "image_alt", "Kemasan biji kopi Robusta Temanggung Livion"), locale),
    secondaryAlt: tr(
      strVal(ex, "secondary_pouch_alt", "Kemasan biji kopi Arabica Argopuro Livion"),
      locale,
    ),
    tertiaryAlt: tr(
      strVal(ex, "tertiary_pouch_alt", "Kemasan biji kopi Robusta Argopuro Livion"),
      locale,
    ),
    textureAlt: tr(strVal(ex, "texture_alt", "Tekstur crema espresso cokelat keemasan"), locale),
    beanAUrl: "assets/cutouts/bean-3.png",
    beanBUrl: "assets/cutouts/bean-5.png",
  };
}

export const REVIEW_STARS = [1, 2, 3, 4, 5] as const;

export function buildReviewWhatsAppUrl(
  phone: string,
  author: string,
  role: string,
  rating: number,
  quote: string,
  locale: Locale = "id",
): string {
  const isEn = locale === "en";
  const lines = [
    isEn
      ? "Hello Livion Coffee! Here is my customer review:"
      : "Halo Livion Coffee! Saya mau kirim ulasan pelanggan:",
    `- ${isEn ? "Name" : "Nama"}: ${author}`,
    role ? `- ${isEn ? "Role / City" : "Peran / Kota"}: ${role}` : null,
    `- Rating: ${rating}/5 ${isEn ? "stars" : "bintang"}`,
    `- ${isEn ? "Review" : "Ulasan"}: "${quote}"`,
  ].filter(Boolean);
  return buildTextWhatsAppUrl(phone, lines.join("\n"));
}

export function initialsFromName(name: string): string {
  const parts = name
    .trim()
    .split(/\s+/)
    .map((p) => p.replace(/[^A-Za-z0-9]/g, ""))
    .filter(Boolean);
  if (parts.length === 0) return "LP";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase();
}

export function formatReviewScore(rating: number): string {
  return `${rating}.0`;
}

export function reviewScoreSummary(rating: number): string {
  return `${rating} / 5`;
}

export function starOptionAria(star: number, locale: Locale = "id"): string {
  return locale === "en"
    ? `Rate ${star} out of 5 stars`
    : `Beri rating ${star} dari 5 bintang`;
}

export function removeReviewAria(author: string, locale: Locale = "id"): string {
  return locale === "en"
    ? `Remove session review preview from ${author}`
    : `Hapus preview ulasan dari ${author}`;
}

export function readTestimonialsMeta(block: LandingBlock, locale: Locale = "id") {
  const ex = block.extra;
  return {
    isEn: locale === "en",
    sectionId: strVal(ex, "section_id", "testimonials"),
    headingId: "testimonials-heading",
    modalTitleId: "review-modal-title",
    ratingLabelId: "review-rating-label",
    feedbackId: "review-form-feedback",
    whatsappPhone: strVal(ex, "whatsapp_number", "6285159506662"),
    closeAria: tr(strVal(ex, "close_aria", "Tutup form ulasan"), locale),
    namePlaceholder: tr(strVal(ex, "name_placeholder", "Nama kamu"), locale),
    rolePlaceholder: tr(
      strVal(ex, "role_placeholder", "Contoh: Home Brewer, Bondowoso"),
      locale,
    ),
    roleDefault: tr(strVal(ex, "role_default", "Pelanggan Livion Coffee"), locale),
    quotePlaceholder: tr(
      strVal(
        ex,
        "quote_placeholder",
        "Ceritakan varian favorit, aroma saat diseduh, atau kesan pesan di Livion...",
      ),
      locale,
    ),
    enWriteCta: tr(strVal(ex, "write_cta_label", "Tulis Ulasan"), locale),
    enEmptyState: tr(
      strVal(ex, "empty_state", "Belum ada testimoni pelanggan yang ditambahkan."),
      locale,
    ),
    enFormBadge: tr(strVal(ex, "form_badge", "Ulasan Pelanggan"), locale),
    enFormTitle: tr(strVal(ex, "form_title", "Bagikan Pengalaman Ngopimu"), locale),
    enFormSubtitle: tr(strVal(ex, "form_subtitle", ""), locale),
    enNameLabel: tr(strVal(ex, "name_label", "Nama lengkap *"), locale),
    enRoleLabel: tr(strVal(ex, "role_label", "Peran / Kota (opsional)"), locale),
    enRatingLabel: tr(strVal(ex, "rating_label", "Rating kepuasan *"), locale),
    enRatingUnit: tr(strVal(ex, "rating_unit", "Rating"), locale),
    enQuoteLabel: tr(strVal(ex, "quote_label", "Ulasanmu *"), locale),
    enErrorText: tr(strVal(ex, "error_text", ""), locale),
    enSuccessText: tr(strVal(ex, "success_text", ""), locale),
    enOpenWaLabel: tr(strVal(ex, "open_wa_fallback_label", "Buka WhatsApp"), locale),
    enResetLabel: tr(strVal(ex, "reset_label", "Tulis Ulasan Lagi"), locale),
    enSubmitLabel: tr(strVal(ex, "submit_label", "Kirim Ulasan"), locale),
    enCloseFormLabel: tr(strVal(ex, "close_form_label", "Lihat di Halaman"), locale),
    enFormNote: tr(strVal(ex, "form_note", ""), locale),
    enPreviewBadge: tr(strVal(ex, "preview_section_badge", "Preview Sementara"), locale),
    enPreviewNote: tr(strVal(ex, "preview_section_note", ""), locale),
    enPreviewRemove: tr(strVal(ex, "preview_remove_label", "Hapus"), locale),
  };
}

export function readTestimonialCard(
  block: LandingBlock,
  index: number,
  locale: Locale = "id",
) {
  const ex = block.extra;
  const featuredFlag = ex && ex.featured === true;
  const avatarUrl = typeof block.image_url === "string" ? block.image_url.trim() : "";
  const ratingScore = typeof block.icon === "string" ? block.icon.trim() : "";
  return {
    isEn: locale === "en",
    featured: featuredFlag || index === 0,
    hasAvatar: avatarUrl.length > 0,
    avatarAlt: tr(
      strVal(
        ex,
        "image_alt",
        typeof block.title === "string" ? block.title : "Pelanggan Livion Coffee",
      ),
      locale,
    ),
    hasRating: ratingScore.length > 0,
    enRatingLabel: tr(strVal(ex, "rating_label", "Rating"), locale),
    enInitials: strVal(ex, "initials", ""),
  };
}

export function readOrderCtaMeta(block: LandingBlock, locale: Locale = "id") {
  const ex = block.extra;
  const productName = tr(
    strVal(ex, "product_name", "Arabica Argopuro (Sortir Grade 4)"),
    locale,
  );
  const unitPrice = numVal(ex, "unit_price", 25000);
  const weight = strVal(ex, "weight", "200g");
  const grind = tr(strVal(ex, "grind", "Biji Utuh (Whole Bean)"), locale);
  const phone = strVal(ex, "whatsapp_number", "6285159506662");
  return {
    isEn: locale === "en",
    sectionId: strVal(ex, "section_id", "order-cta"),
    headingId: "order-cta-heading",
    ribbonPath: "M -20 135 C 235 8, 635 12, 920 128 C 1105 204, 1285 215, 1460 155",
    imageAlt: tr(
      strVal(ex, "image_alt", "Tangan memegang kemasan biji kopi Livion Arabica Argopuro"),
      locale,
    ),
    enSealTop: tr(strVal(ex, "seal_top", "Pesan"), locale),
    enSealBottom: tr(strVal(ex, "seal_bottom", "yuk"), locale),
    ctaAria: tr(
      strVal(ex, "cta_aria", `Pesan ${productName} ${weight} lewat WhatsApp`),
      locale,
    ),
    orderHref: buildBeanWhatsAppUrl(phone, productName, weight, grind, 1, unitPrice, locale),
  };
}

export function readContactMeta(block: LandingBlock, locale: Locale = "id") {
  const ex = block.extra;
  const phone = strVal(ex, "whatsapp_number", "6285159506662");
  const directText = tr(
    strVal(
      ex,
      "wa_direct_text",
      "Halo Livion Coffee! Mau tanya-tanya soal biji kopi dan layanan roastery.",
    ),
    locale,
  );
  return {
    isEn: locale === "en",
    sectionId: strVal(ex, "section_id", "contact"),
    headingId: "contact-heading",
    feedbackId: "contact-feedback",
    whatsappPhone: phone,
    copyValue: strVal(ex, "copy_phone_value", "+6285159506662"),
    waDirectHref: buildTextWhatsAppUrl(phone, directText),
    mapEmbedUrl: strVal(
      ex,
      "map_embed_url",
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d343.82002475613507!2d113.79277103946625!3d-7.986094103135859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6c333566273c7%3A0xdf5aa653fd10c38!2sToko%20HendiPutra%20%26%20HendiPutra%20CarRental!5e0!3m2!1sid!2sid!4v1794835622980!5m2!1sid!2sid",
    ),
    mapExternalUrl: strVal(
      ex,
      "map_external_url",
      "https://maps.google.com/?q=-7.986094103135859,113.79277103946625",
    ),
    mapTitle: tr(strVal(ex, "map_title", "Peta Lokasi Livion Coffee"), locale),
    firstNamePlaceholder: tr(strVal(ex, "first_name_placeholder", "Nama depan"), locale),
    lastNamePlaceholder: tr(strVal(ex, "last_name_placeholder", "Nama belakang"), locale),
    emailPlaceholder: tr(
      strVal(ex, "email_placeholder", "nama@usaha.com atau nama kedai"),
      locale,
    ),
    phonePlaceholder: strVal(ex, "phone_placeholder", "812 3456 7890"),
    messagePlaceholder: tr(
      strVal(
        ex,
        "message_placeholder",
        "Tulis pertanyaan, permintaan sample, atau pesananmu di sini...",
      ),
      locale,
    ),
    copyAria: tr(strVal(ex, "copy_aria", "Salin nomor WhatsApp Livion Coffee"), locale),
    countryPrefix: "+62",
    enBadgeLabel: tr(strVal(ex, "badge_label", "Kontak"), locale),
    enCopyLabel: tr(strVal(ex, "copy_label", "Salin nomor"), locale),
    enCopiedLabel: tr(strVal(ex, "copied_label", "Tersalin"), locale),
    enCopyFallback: tr(strVal(ex, "copy_fallback_label", "Salin manual nomor ini"), locale),
    enFirstNameLabel: tr(strVal(ex, "first_name_label", "Nama depan *"), locale),
    enLastNameLabel: tr(strVal(ex, "last_name_label", "Nama belakang"), locale),
    enEmailLabel: tr(strVal(ex, "email_label", "Email atau Nama Usaha"), locale),
    enPhoneLabel: tr(strVal(ex, "phone_label", "Nomor WhatsApp"), locale),
    enMessageLabel: tr(strVal(ex, "message_label", "Pesan *"), locale),
    enErrorText: tr(strVal(ex, "error_text", ""), locale),
    enSuccessText: tr(strVal(ex, "success_text", ""), locale),
    enOpenWaLabel: tr(strVal(ex, "open_wa_fallback_label", "Buka WhatsApp"), locale),
    enResetLabel: tr(strVal(ex, "reset_label", "Tulis Ulang"), locale),
    enFormNote: tr(strVal(ex, "form_note", ""), locale),
    enSubmitLabel: tr(strVal(ex, "submit_label", "Kirim Pesan"), locale),
    enMapTitle: tr(strVal(ex, "map_title", "Lokasi di Google Maps"), locale),
    enMapLinkLabel: tr(strVal(ex, "map_link_label", "Buka di Google Maps"), locale),
  };
}

export function readFooterMeta(block: LandingBlock, locale: Locale = "id") {
  const ex = block.extra;
  const isEn = locale === "en";
  const phone = strVal(ex, "whatsapp_number", "6285159506662");
  const productName = tr(
    strVal(ex, "default_product", "Arabica Argopuro (Sortir Grade 4)"),
    locale,
  );
  const unitPrice = numVal(ex, "default_price", 25000);
  const weight = strVal(ex, "default_weight", "200g");
  const grind = tr(strVal(ex, "default_grind", "Biji Utuh (Whole Bean)"), locale);
  const wholesaleText = tr(
    strVal(
      ex,
      "wholesale_text",
      "Halo Livion Coffee! Mau tanya-tanya soal suplai grosir & sample pack biji kopinya nih.",
    ),
    locale,
  );
  const floatingText = tr(
    strVal(ex, "floating_cta_text", "Halo Livion Coffee! Saya mau pesan biji kopinya."),
    locale,
  );
  const allItems = sortedItems(block.items);
  return {
    isEn,
    footerNavAria: isEn ? "Footer navigation" : "Navigasi footer",
    shortcutsAria: isEn
      ? "Livion Coffee social media"
      : "Media sosial Livion Coffee",
    floatingWaAria: tr(
      strVal(ex, "floating_cta_aria", "Buka pilihan pesan kopi Livion"),
      locale,
    ),
    floatingCloseAria: tr(
      strVal(ex, "floating_close_aria", "Tutup pilihan pesan kopi Livion"),
      locale,
    ),
    popoverHead: tr(strVal(ex, "floating_menu_title", "Pilih Metode Pesan"), locale),
    floatingMenuId: "floating-order-popover",
    floatingOrderChannels: [
      {
        isWa: true,
        isShopee: false,
        channelName: strVal(ex, "floating_wa_title", "WhatsApp"),
        href: buildTextWhatsAppUrl(phone, floatingText),
        available: true,
        badgeText: "",
        rowClass:
          "flex min-h-[48px] items-center justify-between gap-3 rounded-[14px] border border-[#3E2216]/12 bg-[#FFFFFF] px-3 py-2.5 text-left transition-[border-color,background-color,transform] hover:border-[#168341]/55 hover:bg-[#F3FBF5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#168341] active:scale-[0.98]",
        badgeBoxClass:
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF8ED] text-[#147339]",
      },
      {
        isWa: false,
        isShopee: true,
        channelName: tr(strVal(ex, "action_shopee_label", "Shopee Official"), locale),
        href: strVal(ex, "action_shopee_href", "https://id.shp.ee/Lagtfovg").trim(),
        available: Boolean(strVal(ex, "action_shopee_href", "https://id.shp.ee/Lagtfovg").trim()),
        badgeText: tr(strVal(ex, "floating_soon_badge", "Segera Hadir"), locale),
        rowClass:
          "flex min-h-[48px] items-center justify-between gap-3 rounded-[14px] border border-[#3E2216]/12 bg-[#FFFFFF] px-3 py-2.5 text-left transition-[border-color,background-color,transform] hover:border-[#D13816]/55 hover:bg-[#FFF6F3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D13816] active:scale-[0.98]",
        badgeBoxClass: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF3F0]",
      },
      {
        isWa: false,
        isShopee: false,
        channelName: tr(strVal(ex, "action_tokopedia_label", "Tokopedia Official"), locale),
        href: strVal(ex, "action_tokopedia_href", "https://www.tokopedia.com/livioncoffee").trim(),
        available: Boolean(
          strVal(ex, "action_tokopedia_href", "https://www.tokopedia.com/livioncoffee").trim(),
        ),
        badgeText: tr(strVal(ex, "floating_soon_badge", "Segera Hadir"), locale),
        rowClass: strVal(ex, "action_tokopedia_href", "https://www.tokopedia.com/livioncoffee").trim()
          ? "flex min-h-[48px] items-center justify-between gap-3 rounded-[14px] border border-[#3E2216]/12 bg-[#FFFFFF] px-3 py-2.5 text-left transition-[border-color,background-color,transform] hover:border-[#028A0C]/55 hover:bg-[#F1FBF3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#028A0C] active:scale-[0.98]"
          : "flex min-h-[48px] items-center justify-between gap-3 rounded-[14px] border border-[#3E2216]/10 bg-[#F7F3EE] px-3 py-2.5 text-left",
        badgeBoxClass: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF8ED]",
      },
    ],
    wavePath:
      "M 0 84 C 155 18, 340 -8, 550 56 C 745 115, 965 112, 1175 44 C 1285 10, 1375 2, 1440 8 L 1440 122 L 0 122 Z",
    colNav0Href: strVal(ex, "col_nav_0_href", "#top"),
    colNav1Href: strVal(ex, "col_nav_1_href", "#craft"),
    colNav2Href: strVal(ex, "col_nav_2_href", "#beans"),
    colNav3Href: strVal(ex, "col_nav_3_href", "#origin"),
    colNav4Href: strVal(ex, "col_nav_4_href", "#contact"),
    enColNav0: tr(strVal(ex, "col_nav_0_label", "Beranda"), locale),
    enColNav1: tr(strVal(ex, "col_nav_1_label", "Katalog"), locale),
    enColNav2: tr(strVal(ex, "col_nav_2_label", "Asal Biji"), locale),
    enColNav3: tr(strVal(ex, "col_nav_3_label", "Tentang Kami"), locale),
    enColNav4: tr(strVal(ex, "col_nav_4_label", "Kontak"), locale),
    enActionOrder: tr(strVal(ex, "action_order_label", "Pesan Biji"), locale),
    enActionWholesale: tr(strVal(ex, "action_wholesale_label", "Grosir & Sample"), locale),
    enFloatingLabel: tr(strVal(ex, "floating_cta_label", "Pesan Sekarang"), locale),
    orderWaHref: buildBeanWhatsAppUrl(phone, productName, weight, grind, 1, unitPrice, locale),
    wholesaleWaHref: buildTextWhatsAppUrl(phone, wholesaleText),
    socialRows: [allItems.slice(0, 3), allItems.slice(3)].filter((row) => row.length > 0),
    phone,
  };
}

export type FloatingOrderChannel = ReturnType<typeof readFooterMeta>["floatingOrderChannels"][number];

export function socialItemMeta(item: LandingItem) {
  const titleLower = (item.title ?? "").toLowerCase();
  const iconLower = (item.icon ?? "").toLowerCase();
  const isTikTok = titleLower.includes("tiktok") || iconLower.includes("tiktok.com");
  const isShopee =
    titleLower.includes("shopee") || iconLower.includes("shp.ee") || iconLower.includes("shopee");
  const isTokopedia = titleLower.includes("tokopedia") || iconLower.includes("tokopedia.com");
  const isWa =
    iconLower === "wa" || titleLower.includes("whatsapp") || iconLower.includes("wa.me");
  return {
    isTikTok,
    isShopee,
    isTokopedia,
    isWa,
    tiktokPath:
      "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z",
    igSvgProps: {
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
    },
  };
}

export function marketplacePalette(isShopee: boolean, monochrome = false, compact = false) {
  const iconClass = compact ? "h-[18px] w-[18px] shrink-0" : "h-5 w-5 shrink-0";
  if (monochrome) {
    return { bagColor: "currentColor", cutoutColor: "#2C1810", iconClass };
  }
  return isShopee
    ? { bagColor: "#D13816", cutoutColor: "#FFFFFF", iconClass }
    : { bagColor: "#028A0C", cutoutColor: "#FFFFFF", iconClass };
}

export type MarketplaceOption = {
  isShopee: boolean;
  href: string;
  label: string;
  buttonClass: string;
};

export function marketplaceOptions(
  shopeeHref: string,
  shopeeLabel: string,
  tokopediaHref: string,
  tokopediaLabel: string,
): MarketplaceOption[] {
  const list: MarketplaceOption[] = [];
  if (shopeeHref) {
    list.push({
      isShopee: true,
      href: shopeeHref,
      label: shopeeLabel,
      buttonClass:
        "inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full border border-[#3E2216]/16 bg-[#FFFFFF] px-4 py-2 text-[14px] font-bold text-[#3E2216] shadow-xs transition-[background-color,border-color,transform] hover:border-[#D13816] hover:bg-[#FFF6F3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D13816] active:scale-[0.97]",
    });
  }
  if (tokopediaHref) {
    list.push({
      isShopee: false,
      href: tokopediaHref,
      label: tokopediaLabel,
      buttonClass:
        "inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full border border-[#3E2216]/16 bg-[#FFFFFF] px-4 py-2 text-[14px] font-bold text-[#3E2216] shadow-xs transition-[background-color,border-color,transform] hover:border-[#027A0A] hover:bg-[#F1FBF3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#027A0A] active:scale-[0.97]",
    });
  }
  return list;
}

export function brandLogoSpecs() {
  return {
    roundStrokeProps: {
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
    },
    whatsappPath:
      "M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.98 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z",
    bagHandlePath: "M8.5 6.8V5.5a3.5 3.5 0 0 1 7 0v1.3",
    bagBodyPath:
      "M4.2 7.2Q4.2 6.4 5.0 6.4H19.0Q19.8 6.4 19.8 7.2L18.75 19.3Q18.6 21.2 16.7 21.2H7.3Q5.4 21.2 5.25 19.3Z",
    shopeeSPath:
      "M14.4 10.9C14.0 9.9 10.0 9.6 9.7 11.4C9.4 13.2 14.6 13.8 14.4 16.0C14.2 17.9 9.9 17.9 9.4 16.3",
  };
}

export function footerPillLinkProps(
  item: LandingItem,
  phone: string,
  defaultOrderHref: string,
  locale: Locale = "id",
) {
  const raw = (item.icon ?? "").trim();
  const external = raw === "wa" || raw.startsWith("https://");
  const href = external ? (raw.startsWith("https://") ? raw : defaultOrderHref) : raw || "#beans";
  const rawLabel =
    typeof item.description === "string" && item.description
      ? item.description
      : item.title ?? "";
  const label = tr(rawLabel, locale);
  return {
    href,
    ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
    ...(label ? { "aria-label": label } : {}),
  };
}

export function twoDigitStep(order: number | undefined, index: number): string {
  const num = (typeof order === "number" ? order : index) + 1;
  return String(num).padStart(2, "0");
}

export function rotateStyle(deg: number): { transform: string } {
  return { transform: `rotate(${deg}deg)` };
}

export function revealUp(delay = 0): Record<string, string> {
  const out: Record<string, string> = { "data-reveal": "up" };
  if (delay > 0) out["data-reveal-delay"] = String(delay);
  return out;
}

export function revealLeft(delay = 0): Record<string, string> {
  const out: Record<string, string> = { "data-reveal": "left" };
  if (delay > 0) out["data-reveal-delay"] = String(delay);
  return out;
}

export function revealRight(delay = 0): Record<string, string> {
  const out: Record<string, string> = { "data-reveal": "right" };
  if (delay > 0) out["data-reveal-delay"] = String(delay);
  return out;
}

export function qtyWeightText(quantity: number, weight: string): string {
  return `${quantity}x ${weight}`;
}

export function heroEnterAttr(): Record<string, string> {
  return { "data-hero-enter": "true" };
}

export function heroStageAttr(): Record<string, string> {
  return { "data-hero-stage": "true" };
}

export function beanParallaxAttr(depth: number): Record<string, number> {
  return { "data-bean-depth": depth };
}

export function heroRibbonAttr(delay = 0, duration = 0.95): Record<string, string | number> {
  return {
    "data-hero-ribbon": "true",
    "data-ribbon-delay": delay,
    "data-ribbon-duration": duration,
  };
}

export function scrollRibbonAttr(): Record<string, string> {
  return { "data-scroll-ribbon": "true" };
}

export function navHeaderClass(scrolled: boolean): string {
  return `sticky top-0 z-40 transition-colors duration-200 ${
    scrolled ? "border-b border-[#14110F]/10 bg-[#F5F0EA]/95" : "bg-[#F5F0EA]/85"
  }`;
}

export function mobileDrawerClass(open: boolean): string {
  return `overflow-hidden border-t border-[#14110F]/10 bg-[#F5F0EA] transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
    open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0 border-t-0 pointer-events-none"
  }`;
}

export function tabButtonClass(active: boolean): string {
  return `inline-flex min-h-[48px] items-center justify-center whitespace-nowrap rounded-full border px-4 py-2.5 text-[13px] font-semibold tracking-wide transition-colors sm:px-5 sm:text-[13.5px] ${
    active
      ? "border-[#8F511A] bg-[#8F511A] text-[#F5F0EA] shadow-xs"
      : "border-[#14110F]/20 bg-[#F5F0EA]/90 text-[#14110F] hover:border-[#14110F]"
  }`;
}

export function beanWrapperClass(spec: HeroBeanSpec): string {
  return `pointer-events-none absolute select-none ${spec.className}`;
}

export function beanImageClass(spec: HeroBeanSpec): string {
  return `h-auto w-full drop-shadow-[0_12px_14px_rgba(36,29,24,0.26)] ${spec.blur ? "blur-[0.8px]" : ""}`;
}

export function collectionCardClass(featured: boolean): string {
  return `group relative rounded-2xl bg-[#FFFFFF] transition-transform duration-300 ease-out hover:-translate-y-1.5 ${
    featured
      ? "p-4 shadow-[0_26px_54px_rgba(36,29,24,0.1)] sm:p-5 md:-mt-4"
      : "p-3.5 shadow-[0_20px_42px_rgba(36,29,24,0.06)] sm:p-4 md:mt-12"
  }`;
}

export function collectionTextureBoxClass(featured: boolean): string {
  return `relative w-full overflow-hidden rounded-xl bg-[#E7E0D6] ${
    featured ? "aspect-[16/11.5]" : "aspect-[16/10.8]"
  }`;
}

export function collectionPlusClass(featured: boolean): string {
  return `pointer-events-none absolute top-3.5 right-3.5 z-20 flex items-center justify-center rounded-full bg-[#3E2216] text-[#FFFFFF] shadow-md transition-[background-color,transform] duration-200 group-hover:scale-105 group-hover:bg-[#B8421B] ${
    featured ? "h-12 w-12" : "h-11 w-11"
  }`;
}

export function collectionPouchClass(featured: boolean): string {
  return `pointer-events-none absolute select-none transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:-rotate-2 ${
    featured
      ? "bottom-[104px] -left-2 z-20 w-[49%] max-w-[188px] -rotate-6 sm:bottom-[110px]"
      : "bottom-3.5 left-2 z-20 w-[45%] max-w-[164px] -rotate-6"
  }`;
}

export function weightOptionClass(selected: boolean): string {
  return `min-h-[48px] rounded-full border px-4 py-2.5 font-display text-[15px] font-bold transition-[background-color,border-color,color,transform] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E2216] active:scale-[0.98] ${
    selected
      ? "border-[#3E2216] bg-[#3E2216] text-[#FBF8F4] shadow-xs"
      : "border-[#3E2216]/18 bg-[#FFFFFF] text-[#3E2216] hover:border-[#3E2216]/50"
  }`;
}

export function originPillarPos(index: number): string {
  return ORIGIN_CARD_POSITIONS[index % ORIGIN_CARD_POSITIONS.length] ?? ORIGIN_CARD_POSITIONS[0];
}

export function originOrbitClass(index: number): string {
  return `absolute z-20 ${originPillarPos(index)}`;
}

export function originCardClass(extraPos = ""): string {
  return `rounded-[20px] border border-[#FFFFFF]/80 bg-[#F4EEE8]/95 p-5 shadow-[0_14px_34px_rgba(62,34,22,0.08)] backdrop-blur-sm sm:rounded-[22px] sm:p-6 ${extraPos}`;
}

export function testimonialCardClass(index: number, featured: boolean): string {
  if (featured) {
    return "flex h-full flex-col rounded-[24px] border border-[#3E2216] bg-[#2C1810] p-6 text-[#F5F0EA] shadow-[0_24px_48px_rgba(36,29,24,0.16)] sm:col-span-2 sm:p-7 lg:col-span-1 lg:row-span-2";
  }
  const slot = (index - 1) % 4;
  const spanClass = slot === 1 || slot === 2 ? "sm:col-span-1 lg:col-span-2" : "sm:col-span-1 lg:col-span-1";
  return `flex h-full flex-col rounded-[24px] border border-[#3E2216]/10 bg-[#FFFFFF] p-6 text-[#14110F] shadow-[0_8px_22px_rgba(36,29,24,0.04)] sm:p-7 lg:min-h-[232px] ${spanClass}`;
}

export function testimonialAvatarClass(featured: boolean): string {
  return featured
    ? "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#F5F0EA]/20 bg-[#4E2716] font-hero text-[13.5px] font-bold tracking-tight text-[#F5F0EA]"
    : "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#3E2216]/12 bg-[#EDE4DC] font-hero text-[13.5px] font-bold tracking-tight text-[#3E2216]";
}

export function testimonialAvatarImgClass(featured: boolean): string {
  return featured
    ? "h-11 w-11 shrink-0 rounded-full border border-[#F5F0EA]/25 object-cover"
    : "h-11 w-11 shrink-0 rounded-full border border-[#3E2216]/12 object-cover";
}

export function testimonialStarClass(featured: boolean): string {
  return featured
    ? "h-4 w-4 shrink-0 fill-[#E8A889] text-[#E8A889]"
    : "h-4 w-4 shrink-0 fill-[#B8421B] text-[#B8421B]";
}

export function testimonialRatingLabelClass(featured: boolean): string {
  return featured ? "text-[13.5px] font-medium text-[#D7C9BE]" : "text-[13.5px] font-medium text-[#575049]";
}

export function testimonialQuoteClass(featured: boolean): string {
  return featured
    ? "mt-6 mb-8 font-hero text-[17.5px] leading-[1.48] font-bold tracking-[-0.015em] text-[#F5F0EA] sm:text-[18.5px]"
    : "mt-5 mb-7 text-[15.5px] leading-[1.6] font-medium text-[#14110F] sm:text-[16px]";
}

export function testimonialAuthorClass(featured: boolean): string {
  return featured
    ? "font-hero text-[15.5px] font-bold tracking-tight text-[#F5F0EA]"
    : "font-hero text-[15.5px] font-bold tracking-tight text-[#14110F]";
}

export function testimonialRoleClass(featured: boolean): string {
  return featured ? "mt-0.5 text-[13.5px] text-[#D7C9BE]" : "mt-0.5 text-[13.5px] text-[#575049]";
}

export function reviewStarBtnClass(active: boolean): string {
  return `inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[12px] border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8421B] active:scale-95 ${
    active
      ? "border-[#B8421B] bg-[#FFF4EF] text-[#B8421B]"
      : "border-[#3E2216]/16 bg-[#FFFFFF] text-[#7D6959] hover:border-[#B8421B]/55"
  }`;
}

export function reviewStarIconClass(active: boolean): string {
  return `h-5 w-5 transition-colors ${active ? "fill-[#B8421B] text-[#B8421B]" : "fill-transparent text-[#7D6959]"}`;
}

export function footerPillClass(): string {
  return "inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full border-[1.5px] border-[#8D6A57] bg-[#2C1810] px-5 py-2.5 font-sans text-[14.5px] leading-none font-semibold text-[#F5F0EA] transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#B8421B] hover:bg-[#3E2216] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5F0EA] active:scale-[0.97]";
}

export function sealRootClass(sizeClass: string): string {
  return `group relative flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-[1.06] hover:-rotate-6 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E2216] ${sizeClass}`;
}

export function altAttr(text: string): Record<string, string> {
  return { alt: text };
}

export function ariaLabelAttr(text: string): Record<string, string> {
  return text ? { "aria-label": text } : {};
}

export function ariaModalAttrs(id: string): Record<string, unknown> {
  return { "aria-modal": true, "aria-labelledby": id };
}

export function labelledByAttr(id: string): Record<string, string> {
  return { "aria-labelledby": id };
}

export function tablistAttrs(label: string): Record<string, string> {
  return { role: "tablist", "aria-label": label };
}

export function tabItemA11y(selected: boolean): Record<string, unknown> {
  return { role: "tab", "aria-selected": selected };
}

export function pressedAttr(pressed: boolean): Record<string, boolean> {
  return { "aria-pressed": pressed };
}

export function livePoliteAttrs(): Record<string, string> {
  return { "aria-live": "polite" };
}

export function svgPreserveAttr(): Record<string, string> {
  return { preserveAspectRatio: "none" };
}

export function ribbonStrokeAttrs(strokeWidth = 3.2): Record<string, unknown> {
  return {
    fill: "none",
    stroke: "#C9734B",
    strokeWidth,
    strokeLinecap: "round",
  };
}

export function linkTargetProps(external: boolean): Record<string, string> {
  return external ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

export function menuBtnA11y(open: boolean, openLabel: string, closeLabel: string, drawerId: string): Record<string, unknown> {
  return {
    "aria-expanded": open,
    "aria-controls": drawerId,
    "aria-label": open ? closeLabel : openLabel,
  };
}

export function orderMenuBtnA11y(
  open: boolean,
  openLabel: string,
  closeLabel: string,
  menuId: string,
): Record<string, unknown> {
  return {
    "aria-expanded": open,
    "aria-controls": menuId,
    "aria-haspopup": "dialog",
    "aria-label": open ? closeLabel : openLabel,
  };
}

export function attachOutsidePointerDown(
  container: HTMLElement | null,
  onOutside: () => void,
): () => void {
  if (!container || typeof document === "undefined") return () => {};
  const onPointerDown = (e: PointerEvent) => {
    if (e.target instanceof Node && !container.contains(e.target)) {
      onOutside();
    }
  };
  document.addEventListener("pointerdown", onPointerDown);
  return () => document.removeEventListener("pointerdown", onPointerDown);
}

export function floatingFabClass(open: boolean): string {
  return `group inline-flex h-14 min-w-14 items-center justify-center rounded-full px-3.5 text-[#FFFFFF] shadow-[0_14px_30px_rgba(62,34,22,0.28)] transition-[background-color,box-shadow,transform] duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3E2216] active:scale-[0.97] motion-reduce:transition-none ${
    open
      ? "bg-[#3E2216] hover:bg-[#2C1810]"
      : "bg-[#B8421B] hover:bg-[#3E2216]"
  }`;
}

export function floatingExpandGridClass(open: boolean): string {
  return `grid transition-[grid-template-columns] duration-300 ease-out motion-reduce:transition-none ${
    open
      ? "grid-cols-[0fr]"
      : "grid-cols-[0fr] group-hover:grid-cols-[1fr] group-focus-visible:grid-cols-[1fr]"
  }`;
}

export function floatingExpandTextClass(open: boolean): string {
  return `inline-block font-sans text-[15px] font-bold tracking-tight whitespace-nowrap transition-opacity duration-200 motion-reduce:transition-none ${
    open
      ? "opacity-0"
      : "pr-2 pl-2.5 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
  }`;
}

export function imgPerfProps(): Record<string, unknown> {
  return { loading: "eager", decoding: "async", draggable: false };
}

export function modalSelectVal(e: { target: { value: string } }): string {
  return e.target.value;
}

export function isArrowNextKey(key: string): boolean {
  return key === "ArrowRight";
}

export function isArrowPrevKey(key: string): boolean {
  return key === "ArrowLeft";
}

export function isEscapeKey(key: string): boolean {
  return key === "Escape";
}

export function lockDocumentScroll(active: boolean): () => void {
  if (typeof document === "undefined" || !active) return () => {};
  const previous = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  return () => {
    document.body.style.overflow = previous;
  };
}

export function attachKeydown(handler: (key: string) => void): () => void {
  if (typeof window === "undefined") return () => {};
  const listener = (event: KeyboardEvent) => handler(event.key);
  window.addEventListener("keydown", listener);
  return () => window.removeEventListener("keydown", listener);
}

export function blockRenderKey(pageIdx: number, sectionIdx: number, blockIdx: number): string {
  return `${pageIdx}-${sectionIdx}-${blockIdx}`;
}

export function attachWindowScroll(threshold: number, onChange: (scrolled: boolean) => void): () => void {
  if (typeof window === "undefined") return () => {};
  const update = () => onChange(window.scrollY > threshold);
  update();
  window.addEventListener("scroll", update, { passive: true });
  return () => window.removeEventListener("scroll", update);
}

export function focusElement(el: { focus?: () => void } | null | undefined): void {
  el?.focus?.();
}

export function activeElementRef(): HTMLElement | null {
  return typeof document !== "undefined" ? (document.activeElement as HTMLElement | null) : null;
}

export function joinTastingNotes(notes: string[], fallbackDesc: string): string {
  return notes.length > 0 ? `${notes.join(" · ")}. ${fallbackDesc}` : fallbackDesc;
}

export function contactFieldClass(invalid = false): string {
  return `mt-1.5 min-h-[46px] w-full rounded-[10px] border bg-[#FFFFFF] px-3.5 py-2.5 text-[16px] text-[#14110F] placeholder:text-[#6B5F58] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-[15px] ${
    invalid
      ? "border-[#B8421B] focus-visible:outline-[#B8421B]"
      : "border-[#9E8E82] hover:border-[#3E2216] focus:border-[#B8421B] focus-visible:outline-[#B8421B]"
  }`;
}

export function contactPhoneGroupClass(): string {
  return "mt-1.5 flex min-h-[46px] items-stretch overflow-hidden rounded-[10px] border border-[#9E8E82] bg-[#FFFFFF] transition-colors hover:border-[#3E2216] focus-within:border-[#B8421B] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#B8421B]";
}

export function iframeMapAttrs(meta: { mapEmbedUrl: string; mapTitle: string }) {
  return {
    src: meta.mapEmbedUrl,
    title: meta.mapTitle,
    referrerPolicy: "strict-origin-when-cross-origin" as const,
  };
}

export function ariaInvalidAttrs(invalid: boolean, describedById: string): Record<string, unknown> {
  return invalid
    ? { "aria-invalid": true, "aria-describedby": describedById }
    : {};
}

export function inputChangeValue(e: { target: { value: string } }): string {
  return e.target.value;
}

export function openExternalUrl(url: string): void {
  if (typeof window === "undefined") return;
  window.open(url, "_blank", "noopener,noreferrer");
}

export async function copyTextToClipboard(text: string): Promise<boolean> {
  if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) {
    return false;
  }
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
