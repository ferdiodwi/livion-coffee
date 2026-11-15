export function Footer() {
  return (
    <footer className="bg-[#14110F] pt-14 pb-8 text-[#F5F0EA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-[#F5F0EA]/15 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#C49B63]">
              LIVION COFFEE ROASTERY
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#F5F0EA]/75">
              Menyediakan biji kopi Arabica dan Robusta pilihan dari sentra kopi
              Indonesia. Dipanggang segar setiap minggu untuk penikmat kopi
              rumahan maupun mitra kafe.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#F5F0EA]/55">
              NAVIGATE
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[#F5F0EA]/85">
              <li>
                <a href="#signature" className="hover:text-[#C49B63]">
                  Signature Lot
                </a>
              </li>
              <li>
                <a href="#beans" className="hover:text-[#C49B63]">
                  Our Coffee Beans
                </a>
              </li>
              <li>
                <a href="#origin" className="hover:text-[#C49B63]">
                  Origin &amp; Craft
                </a>
              </li>
              <li>
                <a href="#brew-guide" className="hover:text-[#C49B63]">
                  Brew Guide
                </a>
              </li>
              <li>
                <a href="#wholesale" className="hover:text-[#C49B63]">
                  Wholesale &amp; Sample
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#F5F0EA]/55">
              ROASTERY HOURS
            </p>
            <ul className="mt-3 space-y-2 font-mono text-xs text-[#F5F0EA]/80">
              <li>SENIN – SABTU: 08:00 – 17:00 WIB</li>
              <li>ROASTING DAY: SELASA &amp; JUMAT</li>
              <li>PENGIRIMAN: SELURUH INDONESIA</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 overflow-hidden">
          <p className="font-display text-[clamp(3.25rem,13vw,10.5rem)] leading-[0.86] font-bold uppercase tracking-tight text-[#F5F0EA]/95 select-none">
            LIVION <span className="text-[#C4552D]">/ COFFEE</span>
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-[#F5F0EA]/10 pt-5 font-mono text-[11px] uppercase tracking-widest text-[#F5F0EA]/55">
          <span>© 2026 LIVION COFFEE</span>
          <span>INDONESIAN SPECIALTY BEANS</span>
        </div>
      </div>
    </footer>
  );
}
