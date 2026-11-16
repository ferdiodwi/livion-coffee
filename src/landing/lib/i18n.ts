import { useEffect, useSyncExternalStore } from "react";

export type Locale = "id" | "en";

const STORAGE_KEY = "livion-locale";

let currentLocale: Locale = "id";
let storageHydrated = false;
const listeners = new Set<() => void>();

function syncDocumentMeta(next: Locale) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = next;
  document.title =
    next === "en"
      ? "LIVION COFFEE | Fresh Roasted Indonesian Coffee Beans"
      : "LIVION COFFEE | Biji Kopi Nusantara Fresh Roast";
}

export function setLocale(next: Locale): void {
  if (currentLocale !== next) {
    currentLocale = next;
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Ignore storage errors in restricted browser modes
      }
    }
    syncDocumentMeta(next);
    listeners.forEach((notify) => notify());
    return;
  }
  syncDocumentMeta(next);
}

export function toggleLocale(): void {
  setLocale(currentLocale === "id" ? "en" : "id");
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): Locale {
  return currentLocale;
}

function getServerSnapshot(): Locale {
  return "id";
}

export function useLocale(): Locale {
  const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (storageHydrated || typeof window === "undefined") return;
    storageHydrated = true;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" && currentLocale !== "en") {
        currentLocale = "en";
        syncDocumentMeta("en");
        listeners.forEach((notify) => notify());
      } else {
        syncDocumentMeta(currentLocale);
      }
    } catch {
      syncDocumentMeta(currentLocale);
    }
  }, []);

  return value;
}

const EN_MAP: Record<string, string> = {
  // Navigation & Shared Chrome
  "Proses": "Process",
  "Produk": "Products",
  "Asal Biji": "Origin",
  "Tentang": "About",
  "Testimoni": "Reviews",
  "Pesan": "Order",
  "Kontak": "Contact",
  "Menu": "Menu",
  "Buka menu navigasi": "Open navigation menu",
  "Tutup menu navigasi": "Close navigation menu",

  // Hero
  "Kopi Asli Lereng": "Pure Coffee From",
  "Argopuro": "Argopuro",
  "Bondowoso": "Bondowoso",
  "Asal Kebun": "Farm Origin",
  "Sangrai": "Roast",
  "Cocok buat": "Best for",
  "yuk": "now",
  "Pilih varian kopi Livion": "Choose Livion coffee variant",
  "Biji Utuh (Whole Bean)": "Whole Bean",
  "Arabica Argopuro": "Arabica Argopuro",
  "Gunung Argopuro · Sortir Grade 4": "Mount Argopuro · Grade 4 Sorted",
  "Karamel, Sitrus Segar, Cokelat Hitam. Biji Arabica Argopuro sortir grade 4 untuk seduh harian yang bersih, ringan, dan hemat.":
    "Caramel, Bright Citrus, Dark Chocolate. Grade 4 sorted Argopuro Arabica for clean, smooth everyday brewing at a friendly price.",
  "Kemasan biji kopi Livion Arabica Argopuro Sortir Grade 4":
    "Livion Arabica Argopuro Grade 4 Sorted coffee bean pouch",
  "Robusta Argopuro": "Robusta Argopuro",
  "Gunung Argopuro, Jawa Timur": "Mount Argopuro, East Java",
  "Cokelat Hitam, Almond Panggang, Gula Merah. Crema tebal, manis kacang panggang, dan body yang mantap.":
    "Dark Chocolate, Roasted Almond, Brown Sugar. Thick crema, roasted nut sweetness, and a full, steady body.",
  "Espresso, Kopi Susu, Susu Dingin": "Espresso, Milk Coffee, Iced Latte",
  "Kemasan biji kopi Robusta Argopuro": "Robusta Argopuro coffee bean pouch",
  "Robusta Temanggung": "Robusta Temanggung",
  "Temanggung, Jawa Tengah": "Temanggung, Central Java",
  "Rempah Halus, Molases, Kakao. Aroma rempah khas Jawa dengan rasa pekat yang awet di lidah.":
    "Warm Spice, Molasses, Cacao. Signature Javanese spice aroma with a deep, lingering finish.",
  "Tubruk, Moka Pot, Campuran Espresso": "Tubruk, Moka Pot, Espresso Blend",
  "Kemasan biji kopi Robusta Temanggung": "Robusta Temanggung coffee bean pouch",

  // Crafted
  "Bukan Sekadar": "More Than Just",
  "Kopi Biasa": "Everyday Coffee",
  "Dari kebun dataran tinggi sampai lereng Argopuro dan Temanggung, tiap batch kami sangrai porsi kecil setiap minggu. Biar manis alaminya keluar, cremanya tebal, dan nyaman nemenin ngopi harianmu.":
    "From highland farms across Argopuro and Temanggung, every batch is roasted weekly in small lots so natural sweetness and thick crema come through in every daily cup.",
  "Telapak tangan terbuka memegang biji kopi sangrai":
    "Open palm holding freshly roasted coffee beans",

  // Collection & Product Modal
  "Pilihan Pas": "Crafted Selection",
  "Buat Seleramu": "For Your Brew",
  "Biji kopi pilihan yang disangrai fresh tiap minggu dalam porsi kecil. Manisnya pas, cremanya tebal, dan nyaman diseduh tiap hari.":
    "Selected Indonesian coffee beans roasted fresh in small batches each week. Balanced sweetness, rich crema, and comfortable for everyday brewing.",
  "Ketinggian": "Elevation",
  "Cocok Buat": "Best For",
  "Pilih Berat Kemasan": "Choose Bag Weight",
  "Pilih Gilingan": "Choose Grind Size",
  "Jumlah": "Quantity",
  "Kurangi jumlah": "Decrease quantity",
  "Tambah jumlah": "Increase quantity",
  "Total": "Total",
  "Pesan via WhatsApp": "Order via WhatsApp",
  "Atau checkout via marketplace resmi:": "Or checkout via our official marketplace:",
  "Beli di Shopee": "Buy on Shopee",
  "Beli di Tokopedia": "Buy on Tokopedia",
  "Tutup detail produk": "Close product details",
  "Lot": "Lot",
  "Halus (Espresso)": "Fine (Espresso)",
  "Sedang (V60 / Pour Over)": "Medium (V60 / Pour Over)",
  "Kasar (French Press / Tubruk)": "Coarse (French Press / Tubruk)",
  "Dipilih dari panen lereng Gunung Argopuro dengan proses sortir grade 4. Karakter rasanya bersih dengan manis karamel lembut dan sentuhan cokelat hitam, ramah di kantong untuk seduh harian maupun racikan kedai.":
    "Harvested from Mount Argopuro slopes and sorted to Grade 4 standard. Clean profile with soft caramel sweetness and dark chocolate notes, priced fairly for daily brews and cafe house blends.",
  "Arabica": "Arabica",
  "Sortir Grade 4": "Grade 4 Sorted",
  "1.200 - 1.700 mdpl": "1,200 - 1,700 masl",
  "Washed · Sortir Grade 4": "Washed · Grade 4 Sorted",
  "Karamel": "Caramel",
  "Sitrus Segar": "Bright Citrus",
  "Cokelat Hitam": "Dark Chocolate",
  "Tekstur crema espresso keemasan yang halus": "Smooth golden espresso crema texture",
  "Robusta lereng Argopuro yang diproses rapi buat hasilin body tebal, aroma kacang panggang, dan crema pekat yang pas untuk racikan espresso maupun kopi susu.":
    "Argopuro slope Robusta processed cleanly for a heavy body, roasted nut aroma, and dense crema built for espresso and iced milk coffee.",
  "Robusta": "Robusta",
  "900 - 1.200 mdpl": "900 - 1,200 masl",
  "Almond Panggang": "Roasted Almond",
  "Gula Merah": "Brown Sugar",
  "Tekstur crema espresso gelap pekat bergaris halus":
    "Rich dark espresso crema texture with fine swirls",
  "Karakter klasik Temanggung dengan wangi rempah halus, manis gula aren yang kuat, dan aftertaste panjang. Pas buat kopi hitam mantap maupun base andalan kafe.":
    "Classic Temanggung character with subtle warm spices, rich palm sugar sweetness, and a long aftertaste. Great for bold black coffee or cafe espresso bases.",
  "800 - 1.100 mdpl": "800 - 1,100 masl",
  "Rempah Halus": "Warm Spice",
  "Molases": "Molasses",
  "Kakao": "Cacao",
  "Tekstur microfoam kopi yang lembut dan creamy":
    "Velvety microfoam coffee texture",

  // Coming Soon
  "Varian Baru": "New Release",
  "Sedang Disiapkan": "In The Works",
  "Kami lagi menguji profil sangrai untuk lot panen berikutnya dari kebun mitra. Begitu hasilnya pas di gelas, detail lengkap dan harganya langsung dibuka di katalog.":
    "We are testing roast curves for the upcoming harvest lot from our partner farms. Once it hits the sweet spot in the cup, full tasting specs and pricing will open in the catalog.",
  "Segera Hadir": "Coming Soon",
  "Rilis Berikutnya": "Next Release",
  "Tekstur crema espresso kopi sangrai": "Roasted coffee espresso crema texture",
  "Kemasan kopi putih Livion dengan simbol tanda tanya untuk varian yang segera hadir":
    "Minimalist white Livion coffee pouch with a question mark for our upcoming release",
  "Asal & Proses": "Origin & Process",
  "Panen Terpilih": "Selected Harvest",
  "Seleksi panen terbaru langsung dari kebun mitra.":
    "Fresh seasonal harvest lots sourced straight from partner growers.",
  "Status": "Status",
  "Uji Sangrai": "Roast Trials",
  "Mencari profil manis alami dan crema terbaik.":
    "Dialing in natural sweetness and dense crema.",
  "Notifikasi": "Release Update",
  "Langsung via WA": "Direct via WA",
  "Dapat kabar pertama pas stok batch dibuka.":
    "Be first to hear once the batch opens for orders.",

  // Origin Showcase
  "Dari Lereng Jawa": "From Java Highlands",
  "ke Gelasmu Tiap Hari": "To Your Daily Cup",
  "Kemasan biji kopi Livion Coffee Robusta Argopuro 200g":
    "Livion Coffee Robusta Argopuro 200g pouch",
  "Panen Langsung": "Direct Harvest",
  "Argopuro & Temanggung": "Argopuro & Temanggung",
  "Dipetik bareng petani kopi Arabica Argopuro dan kebun Robusta pilihan dari Jawa Timur dan Jawa Tengah.":
    "Handpicked alongside Argopuro Arabica growers and selected Robusta farms across East and Central Java.",
  "Profil Sangrai": "Roast Profile",
  "Diuji Tiap Lot": "Cupped Every Lot",
  "Setiap batch dicari profil panasnya biar manis alami dan crema tebalnya keluar maksimal tanpa rasa gosong.":
    "Every batch is profiled carefully so natural sweetness and thick crema shine without harsh bitterness.",
  "Batch Kecil": "Small Batches",
  "Sangrai Mingguan": "Weekly Roasts",
  "Disangrai rutin tiap minggu dalam jumlah terjaga supaya biji yang sampai ke rumahmu masih wangi maksimal.":
    "Roasted weekly in controlled runs so the beans reach your doorstep at peak aroma.",
  "Giling & Kirim": "Grind & Ship",
  "Kemasan Katup Udara": "One-Way Valve Bag",
  "Dikemas rapi pakai valve satu arah, bebas pilih biji utuh atau gilingan sesuai alat V60, espresso, maupun tubruk.":
    "Sealed in one-way valve bags with your choice of whole bean or custom grind for V60, espresso, or tubruk.",

  // About
  "Kopi Jujur dari Kebun": "Honest Farm Coffee",
  "Buat Meja Ngopimu": "For Your Daily Table",
  "Livion Coffee berangkat dari hal sederhana: pengen bikin kopi harian yang wanginya masih seger pas kemasan dibuka, manis alaminya keluar, dan harganya tetap ramah buat stok di rumah maupun kedai.":
    "Livion Coffee started with a simple goal: craft everyday coffee that smells vibrant the moment you open the bag, tastes naturally sweet, and stays fairly priced for both home brewers and cafes.",
  "Tentang Kami": "About Us",
  "Kami ambil biji pilihan dari petani dataran tinggi Nusantara, lereng Gunung Argopuro, dan Temanggung. Tiap minggu kami sangrai rutin dalam jumlah terjaga dan baru giling saat pesanan masuk biar rasanya tetap fresh sampai gelasmu.":
    "We source selected lots directly from highland farmers in Nusantara, Mount Argopuro slopes, and Temanggung. We roast in steady weekly batches and only grind upon order so freshness holds all the way to your cup.",
  "Disiapkan segar untuk manual brew, espresso harian, hingga suplai rutin kafe dan kantor.":
    "Prepared fresh for manual pour-over, daily espresso, and steady cafe or office supply.",
  "Kemasan biji kopi Robusta Temanggung Livion": "Livion Robusta Temanggung coffee bean pouch",
  "Kemasan biji kopi Arabica Argopuro Livion": "Livion Arabica Argopuro coffee bean pouch",
  "Kemasan biji kopi Robusta Argopuro Livion": "Livion Robusta Argopuro coffee bean pouch",
  "Tekstur crema espresso cokelat keemasan": "Golden-brown espresso crema texture",
  "Jadwal Sangrai": "Roast Schedule",
  "Selasa & Jumat": "Tuesday & Friday",
  "Disangrai rutin dua kali seminggu supaya stok selalu dalam kondisi fresh.":
    "Roasted twice weekly so stock stays consistently fresh.",
  "Giling Sesuai Alat": "Custom Grind",
  "Tersedia biji utuh atau gilingan halus, sedang, dan kasar sesuai alat seduh.":
    "Available as whole beans or ground fine, medium, or coarse to match your brewer.",
  "Rumahan & Kafe": "Home & Cafe",
  "200g sampai 1kg": "200g to 1kg",
  "Dikemas pakai valve satu arah, siap buat stok rumah maupun grosir kedai.":
    "Packed in one-way valve pouches, ready for kitchen shelves or cafe bars.",

  // Testimonials & Review Form
  "kata": "client",
  "pelanggan": "reviews",
  "Tulis Ulasan": "Write a Review",
  "Belum ada testimoni pelanggan yang ditambahkan.": "No customer reviews have been added yet.",
  "Ulasan Pelanggan": "Customer Review",
  "Bagikan Pengalaman Ngopimu": "Share Your Coffee Experience",
  "Tulis kesanmu setelah nyeduh kopi Livion. Ulasan langsung tampil sementara di halaman ini dan dikirim ke WhatsApp admin.":
    "Tell us what you think after brewing Livion coffee. Your review appears right away in this browser session and is formatted to send via WhatsApp.",
  "Nama lengkap *": "Full name *",
  "Nama kamu": "Your name",
  "Peran / Kota (opsional)": "Role / City (optional)",
  "Contoh: Home Brewer, Bondowoso": "e.g. Home Brewer, Bondowoso",
  "Pelanggan Livion Coffee": "Livion Coffee Customer",
  "Rating kepuasan *": "Satisfaction rating *",
  "Rating": "Rating",
  "Ulasanmu *": "Your review *",
  "Ceritakan varian favorit, aroma saat diseduh, atau kesan pesan di Livion...":
    "Share your favorite bean, brewing aroma, or ordering experience...",
  "Isi nama lengkap dan ulasanmu dulu sebelum mengirim ulasan.":
    "Please fill in your full name and review before submitting.",
  "Ulasanmu sudah tampil di halaman ini. Klik Buka WhatsApp jika tab WhatsApp belum terbuka untuk mengirim ke tim Livion.":
    "Your review now appears on this page. Click Open WhatsApp below if the WhatsApp tab did not open automatically.",
  "Buka WhatsApp": "Open WhatsApp",
  "Tulis Ulasan Lagi": "Write Another",
  "Kirim Ulasan": "Submit Review",
  "Lihat di Halaman": "View on Page",
  "Tutup form ulasan": "Close review form",
  "Preview sementara di sesi browser & terkirim ke WhatsApp admin.":
    "Live session preview in browser & sent via roastery WhatsApp.",
  "Preview Sementara": "Session Preview",
  "Ulasan yang baru kamu kirim pada sesi ini:":
    "Reviews you just submitted during this session:",
  "Hapus": "Remove",
  "Jember, Kota": "Coffee Bar · Jember",
  "Awalnya iseng nyoba robusta argopuro buat es kopi susu, eh malah keterusan stok tiap minggu. begitu pouch dibuka aromanya langsung keluar, gik anget habis sangrai selasa-jumat. cakancah yang biasa ngopi malam di kedai langsung bilang nyaman ongghu cak":
    "Started trying robusta argopuro for our iced milk coffee menu, and now we restock every week. the moment you open the bag it still smells warm right off the tuesday-friday roast. friends dropping by for late-night coffee keep praising how smooth it tastes.",
  "Bondowoso Kota": "V60 Drinker · Bondowoso",
  "pesan arabica argopuro sortir grade 4 gilingan sedang buat v60 pagi, manis karamel sama sitrusnya bersih pol. gak bikin sepet di tenggorokan":
    "ordered arabica argopuro grade 4 sorted in medium grind for morning v60, sweet caramel and clean citrus shine right through with zero harsh dryness.",
  "Curahdami, Bondowoso": "Home Barista · Curahdami, Bondowoso",
  "Buat yang doyan kopi pait tanpa gula, robusta argopuro ini cek nyamanna. cremanya tebel buat moka pot, dicampur susu dingin juga tetep kerasa cokelatnya. tanya takaran gilingan lewat wa juga langsung dibantu santai":
    "for anyone who loves pure black coffee with no sugar, this robusta argopuro hits the spot. thick crema on a moka pot and the chocolate notes still hold up in cold milk. quick, friendly advice on grind size over whatsapp too.",
  "Tamanan, Bondowoso": "Office Brewer · Tamanan, Bondowoso",
  "Biasa nyeduh tubruk pas baru mole kerja biar kepala enteng lagi. robusta temanggung yang 200g ini wanginya rempah kakao, sampe anak kantor sering minta dibikinin bareng pas jam istirahat tretan":
    "always brew a mug of tubruk right when getting home from work to unwind. this 200g robusta temanggung packs warm spice and cacao aroma, even coworkers ask me to brew a round during break time.",
  "Jember": "Student · Jember",
  "Kirim ke jember cepet, kemasan valve aman. stok andalan pas lagi lembur malam, rasanya mantap tenan rek":
    "fast delivery to jember, sealed neatly in a valve bag. my go-to stash for late-night study sessions, solid taste every time.",

  // Order CTA
  "Temukan": "Find",
  "Kopi Pas": "Crafted Coffee",
  "Untukmu": "Made For You",
  "Tangan memegang kemasan biji kopi Livion Arabica Argopuro":
    "Hand holding a pouch of Livion Arabica Argopuro coffee beans",
  "Arabica Argopuro (Sortir Grade 4)": "Arabica Argopuro (Grade 4 Sorted)",
  "Pesan Arabica Argopuro Sortir Grade 4 200g lewat WhatsApp":
    "Order Arabica Argopuro Grade 4 Sorted 200g via WhatsApp",

  // Contact
  "Ada Pertanyaan": "Got Questions",
  "Soal Kopi Kami?": "About Our Coffee?",
  "Tim roastery siap bantu konsultasi alat seduh, pilih profil sangrai, atau siapkan sample pack untuk kedai dan kantormu.":
    "Our roastery team is happy to help with brewing advice, choosing roast profiles, or preparing sample packs for your cafe and office.",
  "Halo Livion Coffee! Mau tanya-tanya soal biji kopi dan layanan roastery.":
    "Hello Livion Coffee! I have a few questions about your coffee beans and roastery services.",
  "Salin nomor": "Copy number",
  "Tersalin": "Copied",
  "Salin manual nomor ini": "Copy this number manually",
  "Salin nomor WhatsApp Livion Coffee": "Copy Livion Coffee WhatsApp number",
  "Nama depan *": "First name *",
  "Nama depan": "First name",
  "Nama belakang": "Last name",
  "Email atau Nama Usaha": "Email or Business Name",
  "nama@usaha.com atau nama kedai": "name@business.com or cafe name",
  "Nomor WhatsApp": "WhatsApp Number",
  "Pesan *": "Message *",
  "Tulis varian kopi, jenis gilingan, permintaan sample, atau pertanyaanmu...":
    "Write your bean preference, grind size, sample request, or question...",
  "Isi nama depan dan pesanmu dulu sebelum mengirim ke WhatsApp.":
    "Please enter your first name and message before sending to WhatsApp.",
  "Pesan WhatsApp siap dikirim. Jika tab WhatsApp belum terbuka, klik tombol di bawah.":
    "WhatsApp message is ready. If WhatsApp did not open automatically, click the button below.",
  "Tulis Ulang": "Reset Form",
  "Balasan lewat WhatsApp pada jam layanan.": "Replies sent via WhatsApp during service hours.",
  "Kirim Pesan": "Send Message",
  "Lokasi di Google Maps": "Location on Google Maps",
  "Buka di Google Maps": "Open in Google Maps",
  "WhatsApp:": "WhatsApp:",
  "Order eceran 200g - 1kg, konsultasi seduh, & sample kafe.":
    "Retail orders 200g to 1kg, brew guidance, & cafe samples.",
  "Jam Layanan:": "Service Hours:",
  "Senin - Sabtu, 08:00 - 17:00 WIB": "Monday - Saturday, 08:00 - 17:00 WIB",
  "Jadwal sangrai rutin tiap Selasa & Jumat, kirim ke seluruh Indonesia.":
    "Regular roasting every Tuesday & Friday, shipping across Indonesia.",
  "Lokasi:": "Location:",
  "Toko HendiPutra": "Toko HendiPutra",
  "Klik untuk melihat titik lokasi di Google Maps di bawah.":
    "Click to view our exact pin on Google Maps below.",

  // Footer & Floating WhatsApp
  "Biji kopi Arabica & Robusta pilihan dari dataran tinggi Indonesia. Disangrai segar tiap minggu buat seduh rumahan, espresso, sampai stok kafe.":
    "Selected Arabica & Robusta coffee beans from Indonesian highlands. Roasted fresh every week for home brewers, espresso bars, and cafe stock.",
  "© 2026 Livion Coffee. Seluruh hak cipta dilindungi.":
    "© 2026 Livion Coffee. All rights reserved.",
  "Halo Livion Coffee! Mau tanya-tanya soal suplai grosir & sample pack biji kopinya nih.":
    "Hello Livion Coffee! I would like to ask about wholesale supply & bean sample packs.",
  "Pesan Biji": "Order Beans",
  "Grosir & Sample": "Wholesale & Samples",
  "Shopee Official": "Shopee Store",
  "Tokopedia Official": "Tokopedia Store",
  "Beranda": "Home",
  "Katalog": "Catalog",
  "Pesan Sekarang": "Order Now",
  "Pesan kopi Livion lewat WhatsApp": "Order Livion Coffee via WhatsApp",
  "Halo Livion Coffee! Saya mau pesan biji kopinya.":
    "Hello Livion Coffee! I'd like to order your coffee beans.",
  "Instagram": "Instagram",
  "TikTok": "TikTok",
  "Ikuti Instagram @livioncoffee": "Follow @livioncoffee on Instagram",
  "Ikuti TikTok @livioncoffee": "Follow @livioncoffee on TikTok",
};

export function tr(raw: string | null | undefined, locale: Locale): string {
  if (typeof raw !== "string" || raw.length === 0) return "";
  if (locale === "id") return raw;
  const trimmed = raw.trim();
  return EN_MAP[raw] ?? EN_MAP[trimmed] ?? raw;
}
