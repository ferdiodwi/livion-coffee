export function Footer() {
  return (
    <footer className="bg-[#14110F] pt-16 pb-9 text-[#F5F0EA]">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-12">
        <div className="grid gap-11 border-b border-[#F5F0EA]/15 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-mono text-xs uppercase tracking-widest text-[#C49B63]">
              LIVION COFFEE ROASTERY
            </p>
            <p className="mt-3.5 max-w-lg text-[15.5px] leading-relaxed text-[#F5F0EA]/75">
              Menyediakan biji kopi Arabica dan Robusta pilihan dari sentra kopi
              Indonesia. Dipanggang segar setiap minggu untuk penikmat kopi
              rumahan maupun mitra kafe.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#F5F0EA]/70">
              NAVIGATE
            </p>
            <ul className="mt-3.5 space-y-2.5 text-[15.5px] text-[#F5F0EA]/85">
              <li>
                <a href="#top" className="hover:text-[#C49B63]">
                  Home
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
            <p className="font-mono text-xs uppercase tracking-widest text-[#F5F0EA]/70">
              ROASTERY HOURS
            </p>
            <ul className="mt-3.5 space-y-2.5 font-mono text-[13px] text-[#F5F0EA]/80">
              <li>SENIN - SABTU: 08:00 - 17:00 WIB</li>
              <li>ROASTING DAY: SELASA &amp; JUMAT</li>
              <li>PENGIRIMAN: SELURUH INDONESIA</li>
            </ul>
          </div>
        </div>

        <div className="mt-11 overflow-hidden">
          <p className="font-display text-[clamp(3.4rem,13.5vw,11.55rem)] leading-[0.86] font-bold uppercase tracking-tight text-[#F5F0EA]/95 select-none">
            LIVION <span className="text-[#C49B63]">/ COFFEE</span>
          </p>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-2 border-t border-[#F5F0EA]/10 pt-6 font-mono text-xs uppercase tracking-widest text-[#F5F0EA]/70">
          <span>© 2026 LIVION COFFEE</span>
          <span>INDONESIAN SPECIALTY BEANS</span>
        </div>
      </div>
    </footer>
  );
}
