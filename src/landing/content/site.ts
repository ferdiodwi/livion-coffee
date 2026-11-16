export const site = {
  name: "Livion Coffee",
  slug: "livion-coffee",
  category: "Specialty Coffee Roastery",
  description:
    "Biji kopi Arabica & Robusta pilihan dari dataran tinggi Indonesia. Disangrai segar tiap minggu buat seduh rumahan, espresso, sampai stok kafe.",
  preview_image_url: "assets/cutouts/arabica-pouch.png",
  pages: [
    {
      title: "LIVION COFFEE | Biji Kopi Nusantara Fresh Roast",
      slug: "home",
      order: 0,
      is_home: true,
      meta_title: "LIVION COFFEE | Biji Kopi Nusantara Fresh Roast",
      meta_description:
        "Biji kopi Arabica & Robusta pilihan dari dataran tinggi Indonesia. Disangrai segar tiap minggu buat seduh rumahan, espresso, sampai stok kafe.",
      sections: [
        {
          type: "Navbar",
          order: 0,
          is_active: true,
          blocks: [
            {
              order: 0,
              title: "Livion Coffee",
              extra: {
                home_href: "#top",
                cta_label: "Belanja",
                cta_href: "#beans",
                menu_label: "Menu",
                menu_open_aria: "Buka menu navigasi",
                menu_close_aria: "Tutup menu navigasi",
              },
              items: [
                { order: 0, title: "Proses", icon: "#craft" },
                { order: 1, title: "Biji Kopi", icon: "#beans" },
                { order: 2, title: "Asal Biji", icon: "#origin" },
                { order: 3, title: "Tentang", icon: "#about" },
                { order: 4, title: "Pesan", icon: "#order-cta" },
                { order: 5, title: "Kontak", icon: "#contact" },
              ],
            },
          ],
        },
        {
          type: "Hero",
          order: 1,
          is_active: true,
          blocks: [
            {
              order: 0,
              title: "Sangrai Pelan",
              subtitle: "Kopi",
              description: "Nusantara",
              extra: {
                section_id: "top",
                origin_prefix: "Asal Kebun",
                roast_prefix: "Sangrai",
                best_for_prefix: "Cocok buat",
                seal_top: "Pesan",
                seal_bottom: "yuk",
                tablist_aria: "Pilih varian kopi Livion",
                whatsapp_number: "6285159506662",
                default_weight: "200g",
                default_grind: "Biji Utuh (Whole Bean)",
              },
            },
            {
              order: 1,
              title: "Livion Arabica Pilihan",
              subtitle: "Dataran Tinggi Nusantara",
              description:
                "Karamel, Sitrus Segar, Cokelat Hitam. Manisnya pas dengan sentuhan sitrus yang segar dan bersih.",
              image_url: "assets/cutouts/arabica-pouch.png",
              extra: {
                short_label: "Arabica",
                roast_level: "Medium",
                best_for: "V60, Pour Over, Filter, Espresso",
                price_200g: 85000,
                pouch_width: 513,
                pouch_height: 822,
                image_alt: "Kemasan biji kopi Livion Arabica Pilihan",
              },
            },
            {
              order: 2,
              title: "Robusta Argopuro",
              subtitle: "Gunung Argopuro, Jawa Timur",
              description:
                "Cokelat Hitam, Almond Panggang, Gula Merah. Crema tebal, manis kacang panggang, dan body yang mantap.",
              image_url: "assets/cutouts/argopuro-pouch.png",
              extra: {
                short_label: "Argopuro",
                roast_level: "Medium-Dark",
                best_for: "Espresso, Kopi Susu, Susu Dingin",
                price_200g: 65000,
                pouch_width: 444,
                pouch_height: 768,
                image_alt: "Kemasan biji kopi Robusta Argopuro",
              },
            },
            {
              order: 3,
              title: "Robusta Temanggung",
              subtitle: "Temanggung, Jawa Tengah",
              description:
                "Rempah Halus, Molases, Kakao. Aroma rempah khas Jawa dengan rasa pekat yang awet di lidah.",
              image_url: "assets/cutouts/temanggung-pouch.png",
              extra: {
                short_label: "Temanggung",
                roast_level: "Medium-Dark",
                best_for: "Tubruk, Moka Pot, Campuran Espresso",
                price_200g: 62000,
                pouch_width: 461,
                pouch_height: 771,
                image_alt: "Kemasan biji kopi Robusta Temanggung",
              },
            },
          ],
        },
        {
          type: "Crafted",
          order: 2,
          is_active: true,
          blocks: [
            {
              order: 0,
              title: "Bukan Sekadar",
              subtitle: "Kopi Biasa",
              description:
                "Dari kebun dataran tinggi sampai lereng Argopuro dan Temanggung, tiap batch kami sangrai porsi kecil setiap minggu. Biar manis alaminya keluar, cremanya tebal, dan nyaman nemenin ngopi harianmu.",
              image_url: "assets/cutouts/crafted-open-hand-beans.png",
              extra: {
                section_id: "craft",
                image_alt: "Telapak tangan terbuka memegang biji kopi sangrai",
              },
            },
          ],
        },
        {
          type: "Collection",
          order: 3,
          is_active: true,
          blocks: [
            {
              order: 0,
              title: "Pilihan Pas",
              subtitle: "Buat Seleramu",
              description:
                "Biji kopi pilihan yang disangrai fresh tiap minggu dalam porsi kecil. Manisnya pas, cremanya tebal, dan nyaman diseduh tiap hari.",
              extra: {
                section_id: "beans",
                whatsapp_number: "6285159506662",
                spec_altitude: "Ketinggian",
                spec_process: "Proses",
                spec_roast: "Sangrai",
                spec_best_for: "Cocok Buat",
                weight_label: "Pilih Berat Kemasan",
                grind_label: "Pilih Gilingan",
                qty_label: "Jumlah",
                qty_minus_aria: "Kurangi jumlah",
                qty_plus_aria: "Tambah jumlah",
                total_label: "Total",
                cta_label: "Pesan via WhatsApp",
                close_aria: "Tutup detail produk",
                lot_prefix: "Lot",
                weights: [
                  { label: "200g", multiplier: 1 },
                  { label: "500g", multiplier: 2.35 },
                  { label: "1kg", multiplier: 4.5 },
                ],
                grinds: [
                  "Biji Utuh (Whole Bean)",
                  "Halus (Espresso)",
                  "Sedang (V60 / Pour Over)",
                  "Kasar (French Press / Tubruk)",
                ],
              },
            },
            {
              order: 1,
              title: "Livion Arabica Pilihan",
              subtitle: "Dataran Tinggi Nusantara",
              description:
                "Dipilih dari panen dataran tinggi dengan karakter rasa bersih, manis karamel lembut, dan sentuhan cokelat hitam yang nyaman banget diminum tiap hari.",
              image_url: "assets/cutouts/arabica-pouch.png",
              extra: {
                category: "arabica",
                variant: "corner-badge",
                index_label: "01",
                title_top: "Arabica",
                title_bottom: "Pilihan",
                price_200g: 85000,
                price_display: "Rp 85.000",
                altitude: "1.400 - 1.700 mdpl",
                process: "Washed / Semi-Washed",
                roast_level: "Medium",
                best_for: "V60, Pour Over, Filter, Espresso",
                tasting_notes: ["Karamel", "Sitrus Segar", "Cokelat Hitam"],
                texture_url: "assets/textures/arabica-crema.jpg",
                texture_alt: "Tekstur crema espresso keemasan yang halus",
                image_alt: "Kemasan biji kopi Livion Arabica Pilihan",
                pouch_width: 513,
                pouch_height: 822,
              },
            },
            {
              order: 2,
              title: "Robusta Argopuro",
              subtitle: "Gunung Argopuro, Jawa Timur",
              description:
                "Robusta lereng Argopuro yang diproses rapi buat hasilin body tebal, aroma kacang panggang, dan crema pekat yang pas untuk racikan espresso maupun kopi susu.",
              image_url: "assets/cutouts/argopuro-pouch.png",
              extra: {
                category: "robusta",
                variant: "center-featured",
                index_label: "02",
                title_top: "Robusta",
                title_bottom: "Argopuro",
                price_200g: 65000,
                price_display: "Rp 65.000",
                altitude: "900 - 1.200 mdpl",
                process: "Natural / Honey",
                roast_level: "Medium-Dark",
                best_for: "Espresso, Kopi Susu, Susu Dingin",
                tasting_notes: ["Cokelat Hitam", "Almond Panggang", "Gula Merah"],
                texture_url: "assets/textures/argopuro-crema.jpg",
                texture_alt: "Tekstur crema espresso gelap pekat bergaris halus",
                image_alt: "Kemasan biji kopi Robusta Argopuro",
                pouch_width: 444,
                pouch_height: 768,
              },
            },
            {
              order: 3,
              title: "Robusta Temanggung",
              subtitle: "Temanggung, Jawa Tengah",
              description:
                "Karakter klasik Temanggung dengan wangi rempah halus, manis gula aren yang kuat, dan aftertaste panjang. Pas buat kopi hitam mantap maupun base andalan kafe.",
              image_url: "assets/cutouts/temanggung-pouch.png",
              extra: {
                category: "robusta",
                variant: "corner-badge",
                index_label: "03",
                title_top: "Robusta",
                title_bottom: "Temanggung",
                price_200g: 62000,
                price_display: "Rp 62.000",
                altitude: "800 - 1.100 mdpl",
                process: "Natural",
                roast_level: "Medium-Dark",
                best_for: "Tubruk, Moka Pot, Campuran Espresso",
                tasting_notes: ["Rempah Halus", "Molases", "Kakao"],
                texture_url: "assets/textures/temanggung-foam.jpg",
                texture_alt: "Tekstur microfoam kopi yang lembut dan creamy",
                image_alt: "Kemasan biji kopi Robusta Temanggung",
                pouch_width: 461,
                pouch_height: 771,
              },
            },
          ],
        },
        {
          type: "OriginShowcase",
          order: 4,
          is_active: true,
          blocks: [
            {
              order: 0,
              title: "Dari Lereng Jawa",
              subtitle: "ke Gelasmu Tiap Hari",
              image_url: "assets/cutouts/argopuro-pouch.png",
              extra: {
                section_id: "origin",
                image_alt: "Kemasan biji kopi Livion Coffee Robusta Argopuro 200g",
              },
              items: [
                {
                  order: 0,
                  title: "Panen Langsung",
                  icon: "Argopuro & Temanggung",
                  description:
                    "Dipetik bareng petani kopi Arabica dataran tinggi dan kebun Robusta pilihan dari Jawa Timur dan Jawa Tengah.",
                },
                {
                  order: 1,
                  title: "Profil Sangrai",
                  icon: "Diuji Tiap Lot",
                  description:
                    "Setiap batch dicari profil panasnya biar manis alami dan crema tebalnya keluar maksimal tanpa rasa gosong.",
                },
                {
                  order: 2,
                  title: "Batch Kecil",
                  icon: "Sangrai Mingguan",
                  description:
                    "Disangrai rutin tiap minggu dalam jumlah terjaga supaya biji yang sampai ke rumahmu masih wangi maksimal.",
                },
                {
                  order: 3,
                  title: "Giling & Kirim",
                  icon: "Kemasan Katup Udara",
                  description:
                    "Dikemas rapi pakai valve satu arah, bebas pilih biji utuh atau gilingan sesuai alat V60, espresso, maupun tubruk.",
                },
              ],
            },
          ],
        },
        {
          type: "About",
          order: 5,
          is_active: true,
          blocks: [
            {
              order: 0,
              title: "Kopi Jujur dari Kebun",
              subtitle: "Buat Meja Ngopimu",
              description:
                "Livion Coffee berangkat dari hal sederhana: pengen bikin kopi harian yang wanginya masih seger pas kemasan dibuka, manis alaminya keluar, dan harganya tetap ramah buat stok di rumah maupun kedai.",
              image_url: "assets/cutouts/temanggung-pouch.png",
              extra: {
                section_id: "about",
                badge_label: "Tentang Kami",
                story_secondary:
                  "Kami ambil biji pilihan dari petani dataran tinggi Nusantara, lereng Gunung Argopuro, dan Temanggung. Tiap minggu kami sangrai rutin dalam jumlah terjaga dan baru giling saat pesanan masuk biar rasanya tetap fresh sampai gelasmu.",
                card_caption:
                  "Disiapkan segar untuk manual brew, espresso harian, hingga suplai rutin kafe dan kantor.",
                secondary_pouch_url: "assets/cutouts/arabica-pouch.png",
                tertiary_pouch_url: "assets/cutouts/argopuro-pouch.png",
                texture_url: "assets/textures/argopuro-crema.jpg",
                image_alt: "Kemasan biji kopi Robusta Temanggung Livion",
                secondary_pouch_alt: "Kemasan biji kopi Arabica Pilihan Livion",
                tertiary_pouch_alt: "Kemasan biji kopi Robusta Argopuro Livion",
                texture_alt: "Tekstur crema espresso cokelat keemasan",
              },
              items: [
                {
                  order: 0,
                  title: "Jadwal Sangrai",
                  icon: "Selasa & Jumat",
                  description:
                    "Disangrai rutin dua kali seminggu supaya stok selalu dalam kondisi fresh.",
                },
                {
                  order: 1,
                  title: "Giling Sesuai Alat",
                  icon: "Grind to Order",
                  description:
                    "Tersedia biji utuh atau gilingan halus, sedang, dan kasar sesuai alat seduh.",
                },
                {
                  order: 2,
                  title: "Rumahan & Kafe",
                  icon: "200g sampai 1kg",
                  description:
                    "Dikemas pakai valve satu arah, siap buat stok rumah maupun grosir kedai.",
                },
              ],
            },
          ],
        },
        {
          type: "OrderCta",
          order: 6,
          is_active: true,
          blocks: [
            {
              order: 0,
              title: "Temukan",
              subtitle: "Kopi Pas",
              description: "Untukmu",
              image_url: "assets/cutouts/cta-hand-arabica.png",
              extra: {
                section_id: "order-cta",
                image_alt: "Tangan memegang kemasan biji kopi Livion Arabica",
                seal_top: "Pesan",
                seal_bottom: "yuk",
                product_name: "Livion Arabica Pilihan",
                unit_price: 85000,
                weight: "200g",
                grind: "Biji Utuh (Whole Bean)",
                whatsapp_number: "6285159506662",
                cta_aria: "Pesan Livion Arabica Pilihan 200g lewat WhatsApp",
              },
            },
          ],
        },
        {
          type: "Contact",
          order: 7,
          is_active: true,
          blocks: [
            {
              order: 0,
              title: "Ngobrol Soal Kopi",
              subtitle: "Atau Suplai Kedai",
              description:
                "Butuh rekomendasi gilingan untuk alat seduh di rumah, tanya jadwal sangrai terbaru, atau minta sample pack kafe dan kantor? Hubungi tim roastery langsung.",
              extra: {
                section_id: "contact",
                whatsapp_number: "6285159506662",
                copy_phone_value: "+6285159506662",
                wa_direct_text:
                  "Halo Livion Coffee! Mau tanya-tanya soal biji kopi dan layanan roastery.",
                direct_wa_label: "Chat WhatsApp",
                copy_label: "Salin Nomor",
                copied_label: "Nomor Tersalin",
                copy_fallback_label: "Salin manual nomor di atas",
                copy_aria: "Salin nomor WhatsApp Livion Coffee",
                form_badge: "Catatan Roastery",
                form_title: "Tulis Kebutuhan Kopimu",
                form_subtitle:
                  "Pilih topik dan isi pesan singkat, lalu detailmu langsung siap dikirim ke WhatsApp tim sangrai.",
                topic_label: "Topik",
                topic_0: "Tanya Seduh & Produk",
                topic_1: "Order Eceran / Kantor",
                topic_2: "Grosir & Sample Kafe",
                name_label: "Nama Kamu",
                name_placeholder: "Tulis nama panggilan atau lengkap",
                company_label: "Kedai, Kantor, atau Rumahan",
                company_placeholder: "Opsional: misal kedai kopi atau pantry kantor",
                message_label: "Ceritakan Kebutuhanmu",
                message_placeholder:
                  "Tulis varian yang dicari, jenis gilingan, atau estimasi stok per bulan.",
                error_text:
                  "Isi nama dan ceritakan kebutuhanmu dulu sebelum mengirim ke WhatsApp.",
                success_text:
                  "Pesan WhatsApp siap dikirim. Jika tab WhatsApp belum terbuka, klik tombol di bawah.",
                open_wa_fallback_label: "Buka WhatsApp",
                reset_label: "Tulis Ulang",
                form_note: "Balasan dikirim lewat WhatsApp roastery pada jam layanan.",
                submit_label: "Kirim ke WhatsApp",
              },
              items: [
                {
                  order: 0,
                  icon: "WhatsApp Roastery",
                  title: "+62 851-5950-6662",
                  description:
                    "Jalur utama untuk order biji 200g sampai 1kg, konsultasi seduh, dan kerjasama grosir.",
                },
                {
                  order: 1,
                  icon: "Jam Layanan & Sangrai",
                  title: "Senin - Sabtu, 08:00 - 17:00 WIB",
                  description:
                    "Batch sangrai rutin tiap Selasa & Jumat, pengiriman ke seluruh Indonesia.",
                },
                {
                  order: 2,
                  icon: "Format Pesanan",
                  title: "Kemasan 200g, 500g, 1kg",
                  description:
                    "Tersedia biji utuh (whole bean), giling halus, sedang, maupun kasar sesuai pesanan.",
                },
              ],
            },
          ],
        },
        {
          type: "Footer",
          order: 8,
          is_active: true,
          blocks: [
            {
              order: 0,
              title: "livion",
              description: "© 2026 Livion Coffee. Seluruh hak cipta dilindungi.",
              extra: {
                whatsapp_number: "6285159506662",
                default_product: "Livion Arabica Pilihan",
                default_price: 85000,
                default_weight: "200g",
                default_grind: "Biji Utuh (Whole Bean)",
                wholesale_text:
                  "Halo Livion Coffee! Mau tanya-tanya soal suplai grosir & sample pack biji kopinya nih.",
                action_order_label: "Pesan Biji",
                action_wholesale_label: "Grosir & Sample",
                col_nav_0_label: "Beranda",
                col_nav_0_href: "#top",
                col_nav_1_label: "Katalog",
                col_nav_1_href: "#beans",
                col_nav_2_label: "Asal Biji",
                col_nav_2_href: "#origin",
                col_nav_3_label: "Tentang Kami",
                col_nav_3_href: "#about",
                col_nav_4_label: "Kontak",
                col_nav_4_href: "#contact",
              },
              items: [
                {
                  order: 0,
                  title: "Katalog",
                  icon: "#beans",
                  description: "Lihat katalog biji kopi Livion",
                },
                {
                  order: 1,
                  title: "Temanggung",
                  icon: "#beans",
                  description: "Lihat varian Robusta Temanggung di katalog",
                },
                {
                  order: 2,
                  title: "Arabica",
                  icon: "#beans",
                  description: "Lihat varian Arabica Pilihan di katalog",
                },
                {
                  order: 3,
                  title: "WhatsApp",
                  icon: "wa",
                  description: "Pesan biji kopi Livion lewat WhatsApp",
                },
                {
                  order: 4,
                  title: "Argopuro",
                  icon: "#origin",
                  description: "Lihat showcase Robusta Argopuro dan asal biji",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
