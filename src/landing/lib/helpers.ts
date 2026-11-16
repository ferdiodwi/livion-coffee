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
  { src: "assets/cutouts/bean-2.png", width: 303, height: 152, className: "hidden md:block left-[33%] top-[9%] z-0 w-11 opacity-85", depth: -10, rotate: -12, blur: true },
  { src: "assets/cutouts/bean-6.png", width: 261, height: 261, className: "hidden lg:block left-[39%] top-[15%] z-10 w-8 opacity-90", depth: 18, rotate: 52 },
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

export function buildBeanWhatsAppUrl(
  phone: string,
  productName: string,
  weight: string,
  grind: string,
  quantity: number,
  totalPrice: number,
): string {
  const message = [
    "Halo Livion Coffee! Saya mau pesan biji kopi:",
    "",
    `Produk: ${productName}`,
    `Berat: ${weight}`,
    `Gilingan: ${grind}`,
    `Jumlah: ${quantity}x`,
    `Total: ${formatIDR(totalPrice)}`,
    "",
    "Mohon info ketersediaan dan ongkirnya ya. Terima kasih!",
  ].join("\n");
  return `https://wa.me/${sanitizePhone(phone)}?text=${encodeURIComponent(message)}`;
}

export function buildTextWhatsAppUrl(phone: string, text: string): string {
  return `https://wa.me/${sanitizePhone(phone)}?text=${encodeURIComponent(text)}`;
}

export function readNavbarMeta(block: LandingBlock) {
  const ex = block.extra;
  return {
    homeHref: strVal(ex, "home_href", "#top"),
    ctaHref: strVal(ex, "cta_href", "#beans"),
    openAria: strVal(ex, "menu_open_aria", "Buka menu navigasi"),
    closeAria: strVal(ex, "menu_close_aria", "Tutup menu navigasi"),
    navAria: "Navigasi utama",
    mobileNavAria: "Navigasi mobile",
    drawerId: "mobile-nav-drawer",
  };
}

export function navItemHref(item: LandingItem): string {
  const raw = (item.icon ?? "").trim();
  return raw || "#beans";
}

export function readHeroConfig(block: LandingBlock) {
  const ex = block.extra;
  return {
    sectionId: strVal(ex, "section_id", "top"),
    originPrefix: strVal(ex, "origin_prefix", "Asal Kebun"),
    roastPrefix: strVal(ex, "roast_prefix", "Sangrai"),
    bestForPrefix: strVal(ex, "best_for_prefix", "Cocok buat"),
    tablistAria: strVal(ex, "tablist_aria", "Pilih varian kopi Livion"),
    whatsappPhone: strVal(ex, "whatsapp_number", "6285159506662"),
    defaultWeight: strVal(ex, "default_weight", "200g"),
    defaultGrind: strVal(ex, "default_grind", "Biji Utuh (Whole Bean)"),
    desktopBackRibbon:
      "M -20 385 C 200 385, 445 388, 505 460 C 545 508, 530 625, 610 658 C 695 688, 915 655, 915 535 C 915 445, 675 415, 615 495 C 590 528, 595 555, 635 575",
    desktopFrontRibbon:
      "M 635 575 C 700 608, 835 612, 922 560 C 1030 495, 1215 415, 1465 375",
    mobileRibbon:
      "M -20 330 C 240 250, 560 475, 900 330 C 1150 220, 1320 300, 1465 265",
  };
}

export function readHeroLot(block: LandingBlock | undefined) {
  const ex = block?.extra;
  const name = typeof block?.title === "string" ? block.title : "Livion Coffee";
  const origin = typeof block?.subtitle === "string" ? block.subtitle : "";
  const price200g = numVal(ex, "price_200g", 85000);
  return {
    name,
    origin,
    roastLevel: strVal(ex, "roast_level", "Medium"),
    bestFor: strVal(ex, "best_for", ""),
    pouchWidth: numVal(ex, "pouch_width", 480),
    pouchHeight: numVal(ex, "pouch_height", 790),
    imageAlt: strVal(ex, "image_alt", name),
    price200g,
    orderAria: `Pesan ${name} 200g via WhatsApp`,
    srAnnouncement: `Menampilkan ${name}, ${origin}.`,
  };
}

export function readCraftedMeta(block: LandingBlock) {
  const ex = block.extra;
  return {
    sectionId: strVal(ex, "section_id", "craft"),
    headingId: "crafted-heading",
    imageAlt: strVal(ex, "image_alt", "Telapak tangan terbuka memegang biji kopi sangrai"),
    desktopWavePath:
      "M 0 118 C 155 152, 295 215, 430 180 C 555 148, 635 52, 780 52 C 955 52, 1085 186, 1255 168 C 1340 160, 1400 138, 1440 118 L 1440 622 C 1315 656, 1165 668, 1020 598 C 890 536, 745 516, 625 572 C 495 632, 305 688, 0 638 Z",
    mobileWavePath:
      "M 0 92 C 320 155, 760 28, 1440 96 L 1440 694 C 1020 718, 510 672, 0 704 Z",
    dots: Array.from({ length: 20 }, (_, idx) => idx),
  };
}

export function readCollectionConfig(block: LandingBlock) {
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
  const grinds = strArrVal(ex, "grinds", [
    "Biji Utuh (Whole Bean)",
    "Halus (Espresso)",
    "Sedang (V60 / Pour Over)",
    "Kasar (French Press / Tubruk)",
  ]);
  return {
    sectionId: strVal(ex, "section_id", "beans"),
    headingId: "collection-heading",
    whatsappPhone: strVal(ex, "whatsapp_number", "6285159506662"),
    specAltitude: strVal(ex, "spec_altitude", "Ketinggian"),
    specProcess: strVal(ex, "spec_process", "Proses"),
    specRoast: strVal(ex, "spec_roast", "Sangrai"),
    specBestFor: strVal(ex, "spec_best_for", "Cocok Buat"),
    weightLabel: strVal(ex, "weight_label", "Pilih Berat Kemasan"),
    grindLabel: strVal(ex, "grind_label", "Pilih Gilingan"),
    qtyLabel: strVal(ex, "qty_label", "Jumlah"),
    qtyMinusAria: strVal(ex, "qty_minus_aria", "Kurangi jumlah"),
    qtyPlusAria: strVal(ex, "qty_plus_aria", "Tambah jumlah"),
    totalLabel: strVal(ex, "total_label", "Total"),
    ctaLabel: strVal(ex, "cta_label", "Pesan via WhatsApp"),
    closeAria: strVal(ex, "close_aria", "Tutup detail produk"),
    lotPrefix: strVal(ex, "lot_prefix", "Lot"),
    weights,
    grinds,
  };
}

export function readCollectionProduct(block: LandingBlock, index: number) {
  const ex = block.extra;
  const variant = strVal(ex, "variant", "corner-badge");
  const title = typeof block.title === "string" ? block.title : "";
  const origin = typeof block.subtitle === "string" ? block.subtitle : "";
  const desc = typeof block.description === "string" ? block.description : "";
  const price200g = numVal(ex, "price_200g", 65000);
  const beanSet = COLLECTION_BEAN_SETS[index % COLLECTION_BEAN_SETS.length] ?? COLLECTION_BEAN_SETS[0];
  return {
    featured: variant === "center-featured",
    beanName: title,
    origin,
    desc,
    category: strVal(ex, "category", "kopi"),
    indexLabel: strVal(ex, "index_label", twoDigitStep(block.order, index)),
    price200g,
    priceDisplay: strVal(ex, "price_display", formatIDR(price200g)),
    altitude: strVal(ex, "altitude", "-"),
    process: strVal(ex, "process", "-"),
    roastLevel: strVal(ex, "roast_level", "Medium"),
    bestFor: strVal(ex, "best_for", "-"),
    tastingNotes: strArrVal(ex, "tasting_notes", []),
    textureUrl: strVal(ex, "texture_url", "assets/textures/arabica-crema.jpg"),
    textureAlt: strVal(ex, "texture_alt", ""),
    pouchUrl: typeof block.image_url === "string" ? block.image_url : "assets/cutouts/arabica-pouch.png",
    imageAlt: strVal(ex, "image_alt", title),
    pouchWidth: numVal(ex, "pouch_width", 460),
    pouchHeight: numVal(ex, "pouch_height", 780),
    beanSet,
    cardAria: `Pilih varian dan pesan ${title}, mulai ${strVal(ex, "price_display", formatIDR(price200g))}`,
    modalSelectId: `modal-grind-${block.order ?? index}`,
    modalTitleId: `modal-title-${block.order ?? index}`,
    modalWeightId: `modal-weight-${block.order ?? index}`,
    modalQtyId: `modal-qty-${block.order ?? index}`,
  };
}

export function readOriginMeta(block: LandingBlock) {
  const ex = block.extra;
  return {
    sectionId: strVal(ex, "section_id", "origin"),
    headingId: "origin-showcase-heading",
    imageAlt: strVal(ex, "image_alt", "Kemasan biji kopi Livion Coffee Robusta Argopuro 200g"),
  };
}

export function readOrderCtaMeta(block: LandingBlock) {
  const ex = block.extra;
  const productName = strVal(ex, "product_name", "Livion Arabica Pilihan");
  const unitPrice = numVal(ex, "unit_price", 85000);
  const weight = strVal(ex, "weight", "200g");
  const grind = strVal(ex, "grind", "Biji Utuh (Whole Bean)");
  const phone = strVal(ex, "whatsapp_number", "6285159506662");
  return {
    sectionId: strVal(ex, "section_id", "order-cta"),
    headingId: "order-cta-heading",
    ribbonPath: "M -20 135 C 235 8, 635 12, 920 128 C 1105 204, 1285 215, 1460 155",
    imageAlt: strVal(ex, "image_alt", "Tangan memegang kemasan biji kopi Livion Arabica"),
    ctaAria: strVal(ex, "cta_aria", `Pesan ${productName} ${weight} lewat WhatsApp`),
    orderHref: buildBeanWhatsAppUrl(phone, productName, weight, grind, 1, unitPrice),
  };
}

export function readFooterMeta(block: LandingBlock) {
  const ex = block.extra;
  const phone = strVal(ex, "whatsapp_number", "6285159506662");
  const productName = strVal(ex, "default_product", "Livion Arabica Pilihan");
  const unitPrice = numVal(ex, "default_price", 85000);
  const weight = strVal(ex, "default_weight", "200g");
  const grind = strVal(ex, "default_grind", "Biji Utuh (Whole Bean)");
  const wholesaleText = strVal(
    ex,
    "wholesale_text",
    "Halo Livion Coffee! Mau tanya-tanya soal suplai grosir & sample pack biji kopinya nih.",
  );
  const allItems = sortedItems(block.items);
  return {
    footerNavAria: "Navigasi footer",
    shortcutsAria: "Shortcut katalog dan pemesanan Livion Coffee",
    wavePath:
      "M 0 84 C 155 18, 340 -8, 550 56 C 745 115, 965 112, 1175 44 C 1285 10, 1375 2, 1440 8 L 1440 122 L 0 122 Z",
    colNav0Href: strVal(ex, "col_nav_0_href", "#top"),
    colNav1Href: strVal(ex, "col_nav_1_href", "#craft"),
    colNav2Href: strVal(ex, "col_nav_2_href", "#beans"),
    colNav3Href: strVal(ex, "col_nav_3_href", "#origin"),
    orderWaHref: buildBeanWhatsAppUrl(phone, productName, weight, grind, 1, unitPrice),
    wholesaleWaHref: buildTextWhatsAppUrl(phone, wholesaleText),
    topPills: allItems.slice(0, 2),
    bottomPills: allItems.slice(2),
    phone,
  };
}

export function footerPillLinkProps(item: LandingItem, phone: string, defaultOrderHref: string) {
  const raw = (item.icon ?? "").trim();
  const external = raw === "wa" || raw.startsWith("https://");
  const href = external ? (raw.startsWith("https://") ? raw : defaultOrderHref) : raw || "#beans";
  const label = typeof item.description === "string" && item.description ? item.description : item.title ?? "";
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
  return `overflow-hidden border-t border-[#14110F]/10 bg-[#F5F0EA] transition-[max-height,opacity] duration-300 ease-out md:hidden ${
    open ? "max-h-80 opacity-100" : "max-h-0 opacity-0 border-t-0 pointer-events-none"
  }`;
}

export function tabButtonClass(active: boolean): string {
  return `inline-flex min-h-[48px] items-center justify-center rounded-full border px-5 py-2.5 text-[13.5px] font-semibold tracking-wide transition-colors ${
    active
      ? "border-[#8F511A] bg-[#8F511A] text-[#F5F0EA] shadow-xs"
      : "border-[#14110F]/20 bg-[#F5F0EA]/90 text-[#14110F] hover:border-[#14110F]"
  }`;
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

export function footerPillClass(index: number, isTopRow: boolean): string {
  const tilts = isTopRow
    ? ["-rotate-[14deg] sm:-rotate-[34deg] sm:translate-y-2", "rotate-[10deg] sm:rotate-[22deg] sm:translate-y-3"]
    : ["-rotate-[8deg] sm:-rotate-[12deg]", "rotate-[1deg]", "-rotate-[10deg] sm:-rotate-[14deg]"];
  const tilt = tilts[index % tilts.length] ?? "";
  return `inline-flex min-h-[48px] items-center justify-center rounded-[999px] border-[3.5px] border-[#8D6A57] bg-[#2C1810] px-6 py-3 font-sans text-[14.5px] leading-none font-medium text-[#F5F0EA] transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#B05D44] hover:bg-[#4E2716] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5F0EA] sm:px-7 sm:py-3.5 sm:text-[15.5px] ${tilt}`;
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
