"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/beans";
import { FadeUp } from "./MotionPrimitives";

export function WholesaleSection() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [volume, setVolume] = useState("5–15 kg / bulan");
  const [interest, setInterest] = useState("Arabica & Robusta Blend");
  const [note, setNote] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = [
      "Halo Livion Coffee! Saya tertarik kerjasama Wholesale / Request Sample:",
      "",
      `Nama: ${name || "-"}`,
      `Nama Kafe / Usaha: ${business || "-"}`,
      `Estimasi Kebutuhan: ${volume}`,
      `Biji yang Diminati: ${interest}`,
      note ? `Catatan: ${note}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="wholesale"
      className="border-b border-[#14110F]/12 bg-[#F5F0EA] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <FadeUp className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8401B]">
              04 : WHOLESALE &amp; SAMPLE
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-[#14110F] sm:text-5xl">
              SUPPLY FOR YOUR CAFÉ OR OFFICE.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#575049]">
              Butuh suplai rutin Arabica atau Robusta untuk kedai kopi,
              restoran, atau pantry kantor? Kami menyediakan harga grosir,
              custom roast profile, dan paket sample untuk uji rasa.
            </p>

            <ul className="mt-7 space-y-2.5 border-t border-[#14110F]/12 pt-5 font-mono text-xs text-[#14110F]">
              <li>· MINIMUM ORDER WHOLESALE MULAI 5 KG</li>
              <li>· TERSEDIA KEMASAN 1 KG VALVE BAG</li>
              <li>· BISA REQUEST SAMPLE PACK SEBELUM KONTRAK</li>
            </ul>
          </FadeUp>

          <FadeUp
            delay={0.1}
            className="border border-[#14110F]/15 bg-[#241D18] p-6 text-[#F5F0EA] sm:p-8 lg:col-span-7"
          >
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-[#C49B63]">
              Request Sample / Penawaran Harga
            </h3>
            <form
              onSubmit={handleSubmit}
              className="mt-6 grid gap-4 sm:grid-cols-2"
            >
              <div>
                <label
                  htmlFor="ws-name"
                  className="block font-mono text-[11px] uppercase tracking-wider text-[#F5F0EA]/75"
                >
                  Nama Anda
                </label>
                <input
                  id="ws-name"
                  type="text"
                  required
                  placeholder="Contoh: Raka Pratama"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full border border-[#F5F0EA]/20 bg-[#14110F] px-3.5 py-2.5 text-sm text-[#F5F0EA] placeholder:text-[#F5F0EA]/55 focus:border-[#C49B63] focus:ring-1 focus:ring-[#C49B63]"
                />
              </div>

              <div>
                <label
                  htmlFor="ws-business"
                  className="block font-mono text-[11px] uppercase tracking-wider text-[#F5F0EA]/75"
                >
                  Nama Kafe / Usaha
                </label>
                <input
                  id="ws-business"
                  type="text"
                  required
                  placeholder="Contoh: Seduh Ruang Coffee"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  className="mt-1.5 w-full border border-[#F5F0EA]/20 bg-[#14110F] px-3.5 py-2.5 text-sm text-[#F5F0EA] placeholder:text-[#F5F0EA]/55 focus:border-[#C49B63] focus:ring-1 focus:ring-[#C49B63]"
                />
              </div>

              <div>
                <label
                  htmlFor="ws-volume"
                  className="block font-mono text-[11px] uppercase tracking-wider text-[#F5F0EA]/75"
                >
                  Estimasi Kebutuhan
                </label>
                <select
                  id="ws-volume"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="mt-1.5 min-h-[44px] w-full border border-[#F5F0EA]/20 bg-[#14110F] px-3.5 py-2.5 text-sm text-[#F5F0EA] focus:border-[#C49B63] focus:ring-1 focus:ring-[#C49B63]"
                >
                  <option value="Sample Pack (< 5 kg)">
                    Sample Pack (&lt; 5 kg)
                  </option>
                  <option value="5–15 kg / bulan">5–15 kg / bulan</option>
                  <option value="15–50 kg / bulan">15–50 kg / bulan</option>
                  <option value="50+ kg / bulan">50+ kg / bulan</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="ws-interest"
                  className="block font-mono text-[11px] uppercase tracking-wider text-[#F5F0EA]/75"
                >
                  Fokus Produk
                </label>
                <select
                  id="ws-interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="mt-1.5 min-h-[44px] w-full border border-[#F5F0EA]/20 bg-[#14110F] px-3.5 py-2.5 text-sm text-[#F5F0EA] focus:border-[#C49B63] focus:ring-1 focus:ring-[#C49B63]"
                >
                  <option value="Arabica & Robusta Blend">
                    Arabica &amp; Robusta Blend
                  </option>
                  <option value="Livion Arabica Selection">
                    Livion Arabica Selection
                  </option>
                  <option value="Robusta Argopuro">Robusta Argopuro</option>
                  <option value="Robusta Temanggung">Robusta Temanggung</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="ws-note"
                  className="block font-mono text-[11px] uppercase tracking-wider text-[#F5F0EA]/75"
                >
                  Catatan Tambahan
                </label>
                <textarea
                  id="ws-note"
                  rows={3}
                  placeholder="Misal: untuk menu kopi susu gula aren, butuh profil medium-dark..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="mt-1.5 w-full border border-[#F5F0EA]/20 bg-[#14110F] px-3.5 py-2.5 text-sm text-[#F5F0EA] placeholder:text-[#F5F0EA]/55 focus:border-[#C49B63] focus:ring-1 focus:ring-[#C49B63]"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 bg-[#C49B63] px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-[#14110F] transition-[background-color,transform] hover:bg-[#F5F0EA] active:scale-[0.99]"
                >
                  Kirim Inquiry via WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
