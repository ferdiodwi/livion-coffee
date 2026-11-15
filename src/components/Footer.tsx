import {
  BEAN_PRODUCTS,
  WHATSAPP_NUMBER,
  buildBeanWhatsAppUrl,
} from "@/data/beans";

const FOOTER_COL_LEFT = [
  { label: "Home", href: "#top" },
  { label: "Craft", href: "#craft" },
  { label: "Collection", href: "#beans" },
  { label: "Origin", href: "#origin" },
];

const WHOLESALE_WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Halo Livion Coffee! Saya tertarik menanyakan suplai wholesale & sample pack biji kopi.",
)}`;

const DEFAULT_ORDER_WA_URL = buildBeanWhatsAppUrl(
  BEAN_PRODUCTS[0],
  "200g",
  "Whole Bean (Biji Utuh)",
  1,
);

type BeanPillLink = {
  label: string;
  href: string;
  external?: boolean;
  ariaLabel: string;
  tiltClass: string;
};

const TOP_BEAN_PILLS: BeanPillLink[] = [
  {
    label: "Katalog",
    href: "#beans",
    ariaLabel: "Lihat katalog biji kopi Livion",
    tiltClass: "-rotate-[14deg] sm:-rotate-[34deg] sm:translate-y-2",
  },
  {
    label: "Temanggung",
    href: "#beans",
    ariaLabel: "Lihat varian Robusta Temanggung di katalog",
    tiltClass: "rotate-[10deg] sm:rotate-[22deg] sm:translate-y-3",
  },
];

const BOTTOM_BEAN_PILLS: BeanPillLink[] = [
  {
    label: "Arabica",
    href: "#beans",
    ariaLabel: "Lihat varian Indonesian Arabica di katalog",
    tiltClass: "-rotate-[8deg] sm:-rotate-[12deg]",
  },
  {
    label: "WhatsApp",
    href: DEFAULT_ORDER_WA_URL,
    external: true,
    ariaLabel: "Pesan biji kopi Livion lewat WhatsApp",
    tiltClass: "rotate-[1deg]",
  },
  {
    label: "Argopuro",
    href: "#origin",
    ariaLabel: "Lihat showcase Robusta Argopuro dan asal biji",
    tiltClass: "-rotate-[10deg] sm:-rotate-[14deg]",
  },
];

function CoffeeBeanPill({ item }: { item: BeanPillLink }) {
  return (
    <a
      href={item.href}
      {...(item.external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      aria-label={item.ariaLabel}
      className={`inline-flex min-h-[48px] items-center justify-center rounded-[999px] border-[3.5px] border-[#8D6A57] bg-[#2C1810] px-6 py-3 font-sans text-[14.5px] leading-none font-medium text-[#F5F0EA] transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#B05D44] hover:bg-[#4E2716] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5F0EA] sm:px-7 sm:py-3.5 sm:text-[15.5px] ${item.tiltClass}`}
    >
      {item.label}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-[#2C1810] text-[#F5F0EA]">
      {/* Organic dark-chocolate crest transitioning cleanly from the cream CTA above */}
      <div className="-mb-px w-full overflow-hidden bg-[#F5F0EA] leading-none">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block h-[56px] w-full sm:h-[84px] lg:h-[116px]"
        >
          <path
            d="M 0 84 C 155 18, 340 -8, 550 56 C 745 115, 965 112, 1175 44 C 1285 10, 1375 2, 1440 8 L 1440 122 L 0 122 Z"
            fill="#2C1810"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 pt-4 pb-12 sm:px-7 sm:pt-6 sm:pb-14 lg:px-12 lg:pt-8 lg:pb-16">
        {/* Monumental sculptural footer wordmark */}
        <div className="overflow-hidden py-4 sm:py-6">
          <p className="text-center font-hero text-[clamp(6rem,26vw,21.5rem)] leading-[0.82] font-extrabold lowercase tracking-[-0.045em] text-[#B05D44] select-none">
            livion
          </p>
        </div>

        {/* Utility bar + stacked coffee-bean quick links */}
        <div className="mt-8 border-t border-[#F5F0EA]/16 pt-8 sm:mt-10 sm:pt-10 lg:mt-12 lg:pt-11">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
            {/* Left nav column */}
            <nav
              aria-label="Footer navigation"
              className="md:col-span-3 lg:col-span-3"
            >
              <ul className="space-y-1">
                {FOOTER_COL_LEFT.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="inline-flex min-h-[44px] items-center text-[15px] text-[#D7C9BE] transition-colors hover:text-[#F5F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0EA]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Middle action column */}
            <div className="md:col-span-3 lg:col-span-3">
              <ul className="space-y-1">
                <li>
                  <a
                    href={DEFAULT_ORDER_WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center text-[15px] text-[#D7C9BE] transition-colors hover:text-[#F5F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0EA]"
                  >
                    Order Beans
                  </a>
                </li>
                <li>
                  <a
                    href={WHOLESALE_WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center text-[15px] text-[#D7C9BE] transition-colors hover:text-[#F5F0EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0EA]"
                  >
                    Wholesale &amp; Sample
                  </a>
                </li>
              </ul>
            </div>

            {/* Right copyright + stacked coffee-bean oval links */}
            <div className="flex flex-col justify-between gap-8 md:col-span-6 lg:col-span-6 lg:items-end">
              <p className="text-[14px] text-[#D7C9BE] md:text-right">
                © 2026 Livion Coffee. All rights reserved.
              </p>

              <div
                aria-label="Shortcut katalog dan pemesanan Livion Coffee"
                className="flex flex-col items-start gap-2.5 pt-2 sm:items-center lg:items-end"
              >
                <div className="flex flex-wrap items-center gap-3 sm:mr-10 sm:gap-4">
                  {TOP_BEAN_PILLS.map((item) => (
                    <CoffeeBeanPill key={item.label} item={item} />
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-3.5">
                  {BOTTOM_BEAN_PILLS.map((item) => (
                    <CoffeeBeanPill key={item.label} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
