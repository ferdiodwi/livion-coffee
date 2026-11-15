export type BeanCategory = "arabica" | "robusta";

export type WeightOption = {
  label: "200g" | "500g" | "1kg";
  multiplier: number;
};

export type GrindOption =
  | "Biji Utuh (Whole Bean)"
  | "Halus (Espresso)"
  | "Sedang (V60 / Pour Over)"
  | "Kasar (French Press / Tubruk)";

export interface BeanProduct {
  id: string;
  index: string;
  name: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  accent: string;
  accentText: string;
  category: BeanCategory;
  origin: string;
  altitude: string;
  process: string;
  roastLevel: string;
  tastingNotes: string[];
  bestFor: string;
  cuppingScore: string;
  basePrice200g: number;
  image: string;
  cutoutImage: string;
  cutoutWidth: number;
  cutoutHeight: number;
  tagline: string;
  description: string;
  featured?: boolean;
}

export interface BrewRecipe {
  id: "v60" | "espresso" | "tubruk";
  name: string;
  subtitle: string;
  coffee: string;
  water: string;
  temp: string;
  ratio: string;
  time: string;
  grind: string;
  steps: string[];
}

/**
 * Ganti nomor WhatsApp ini dengan nomor resmi Livion Coffee (format internasional tanpa '+').
 */
export const WHATSAPP_NUMBER = "6285159506662";

export const WEIGHT_OPTIONS: WeightOption[] = [
  { label: "200g", multiplier: 1 },
  { label: "500g", multiplier: 2.35 },
  { label: "1kg", multiplier: 4.5 },
];

export const DEFAULT_GRIND: GrindOption = "Biji Utuh (Whole Bean)";

export const GRIND_OPTIONS: GrindOption[] = [
  "Biji Utuh (Whole Bean)",
  "Halus (Espresso)",
  "Sedang (V60 / Pour Over)",
  "Kasar (French Press / Tubruk)",
];

export const BEAN_PRODUCTS: BeanProduct[] = [
  {
    id: "arabica-signature",
    index: "01",
    name: "Livion Arabica Pilihan",
    eyebrow: "#01 Signature Highlands Lot",
    titleLine1: "Arabica",
    titleLine2: "Pilihan",
    accent: "#2C4C3B",
    accentText: "#F5F0EA",
    category: "arabica",
    origin: "Dataran Tinggi Nusantara",
    altitude: "1.400 - 1.700 mdpl",
    process: "Washed / Semi-Washed",
    roastLevel: "Medium",
    tastingNotes: ["Karamel", "Sitrus Segar", "Cokelat Hitam"],
    bestFor: "V60, Pour Over, Filter, Espresso",
    cuppingScore: "86.5",
    basePrice200g: 85000,
    image: "/images/Arabica.jpeg",
    cutoutImage: "/images/cutouts/arabica-pouch.png",
    cutoutWidth: 513,
    cutoutHeight: 822,
    tagline: "Manisnya pas dengan sentuhan sitrus yang segar dan bersih.",
    description:
      "Dipilih dari panen dataran tinggi dengan karakter rasa bersih, manis karamel lembut, dan sentuhan cokelat hitam yang nyaman banget diminum tiap hari.",
    featured: true,
  },
  {
    id: "robusta-argopuro",
    index: "02",
    name: "Robusta Argopuro",
    eyebrow: "#02 East Java Bold Lot",
    titleLine1: "Robusta",
    titleLine2: "Argopuro",
    accent: "#8F511A",
    accentText: "#F5F0EA",
    category: "robusta",
    origin: "Gunung Argopuro, Jawa Timur",
    altitude: "900 - 1.200 mdpl",
    process: "Natural / Honey",
    roastLevel: "Medium-Dark",
    tastingNotes: ["Cokelat Hitam", "Almond Panggang", "Gula Merah"],
    bestFor: "Espresso, Kopi Susu, Susu Dingin",
    cuppingScore: "83.0",
    basePrice200g: 65000,
    image: "/images/Robusta_Argopuro.jpeg",
    cutoutImage: "/images/cutouts/argopuro-pouch.png",
    cutoutWidth: 444,
    cutoutHeight: 768,
    tagline: "Crema tebal, manis kacang panggang, dan body yang mantap.",
    description:
      "Robusta lereng Argopuro yang diproses rapi buat hasilin body tebal, aroma kacang panggang, dan crema pekat yang pas untuk racikan espresso maupun kopi susu.",
  },
  {
    id: "robusta-temanggung",
    index: "03",
    name: "Robusta Temanggung",
    eyebrow: "#03 Central Java Classic",
    titleLine1: "Robusta",
    titleLine2: "Temanggung",
    accent: "#274772",
    accentText: "#F5F0EA",
    category: "robusta",
    origin: "Temanggung, Jawa Tengah",
    altitude: "800 - 1.100 mdpl",
    process: "Natural",
    roastLevel: "Medium-Dark",
    tastingNotes: ["Rempah Halus", "Molases", "Kakao"],
    bestFor: "Tubruk, Moka Pot, Campuran Espresso",
    cuppingScore: "82.5",
    basePrice200g: 62000,
    image: "/images/Robusta_Temanggung.jpeg",
    cutoutImage: "/images/cutouts/temanggung-pouch.png",
    cutoutWidth: 461,
    cutoutHeight: 771,
    tagline: "Aroma rempah khas Jawa dengan rasa pekat yang awet di lidah.",
    description:
      "Karakter klasik Temanggung dengan wangi rempah halus, manis gula aren yang kuat, dan aftertaste panjang. Pas buat kopi hitam mantap maupun base andalan kafe.",
  },
];

export const BREW_RECIPES: BrewRecipe[] = [
  {
    id: "v60",
    name: "V60 / Pour Over",
    subtitle: "Clean, aromatic, highlights acidity & sweetness",
    coffee: "15 g",
    water: "250 ml",
    temp: "92 °C",
    ratio: "1 : 16.7",
    time: "02:30",
    grind: "Medium",
    steps: [
      "Bilas paper filter dengan air panas dan panaskan server.",
      "Tuang 45 ml air untuk blooming selama 35 detik.",
      "Lanjutkan tuangan melingkar bertahap hingga 250 ml di menit 01:45.",
      "Tunggu drawdown selesai di sekitar 02:30 lalu sajikan.",
    ],
  },
  {
    id: "espresso",
    name: "Espresso",
    subtitle: "Concentrated body, rich crema, ideal for milk-based",
    coffee: "18 g",
    water: "36 g yield",
    temp: "93 °C",
    ratio: "1 : 2",
    time: "00:28",
    grind: "Fine",
    steps: [
      "Giling 18 g biji kopi tepat sebelum ekstraksi dan ratakan di portafilter.",
      "Tamping rata dengan tekanan konsisten.",
      "Ekstrak pada 9 bar hingga menghasilkan 36 g espresso dalam 26–30 detik.",
      "Nikmati langsung atau campur dengan 150 ml susu dingin/steamed.",
    ],
  },
  {
    id: "tubruk",
    name: "Kopi Tubruk",
    subtitle: "Traditional Indonesian brew, full-bodied & bold",
    coffee: "12 g",
    water: "180 ml",
    temp: "94 °C",
    ratio: "1 : 15",
    time: "04:00",
    grind: "Medium-Coarse",
    steps: [
      "Masukkan 12 g bubuk kopi ke dalam gelas saji.",
      "Tuang 180 ml air panas (diamkan 30 detik setelah mendidih).",
      "Aduk perlahan 3–4 kali agar seluruh bubuk terbasahi merata.",
      "Diamkan 3–4 menit hingga ampas turun sempurna sebelum diminum.",
    ],
  },
];

export function calculateBeanPrice(
  basePrice200g: number,
  weight: WeightOption["label"],
): number {
  const option = WEIGHT_OPTIONS.find((item) => item.label === weight);
  if (!option) return basePrice200g;
  return Math.round((basePrice200g * option.multiplier) / 1000) * 1000;
}

export function formatIDR(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function buildBeanWhatsAppUrl(
  product: BeanProduct,
  weight: WeightOption["label"],
  grind: GrindOption,
  quantity = 1,
): string {
  const unitPrice = calculateBeanPrice(product.basePrice200g, weight);
  const total = unitPrice * quantity;
  const message = [
    "Halo Livion Coffee! Saya mau pesan biji kopi:",
    "",
    `Produk: ${product.name}`,
    `Berat: ${weight}`,
    `Gilingan: ${grind}`,
    `Jumlah: ${quantity}x`,
    `Total: ${formatIDR(total)}`,
    "",
    "Mohon info ketersediaan dan ongkirnya ya. Terima kasih!",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
