"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { formatIDR, WHATSAPP_NUMBER } from "@/data/beans";
import { useCart } from "./CartContext";

export function CartDrawer() {
  const {
    items,
    subtotal,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    const itemLines = items
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.name} (${item.weight} · ${item.grind}) x${item.quantity} = ${formatIDR(item.unitPrice * item.quantity)}`,
      )
      .join("\n");

    const message = [
      "Halo Livion Coffee! Saya mau pesan biji kopi:",
      "",
      itemLines,
      "",
      `*Subtotal: ${formatIDR(subtotal)}*`,
      customerName ? `Nama: ${customerName}` : null,
      customerAddress ? `Alamat / Kota: ${customerAddress}` : null,
      notes ? `Catatan: ${notes}` : null,
      "",
      "Mohon info ongkir dan pembayarannya ya. Terima kasih!",
    ]
      .filter((line) => line !== null)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#14110F]/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Keranjang Belanja"
    >
      <div className="fixed inset-0" onClick={closeCart} aria-hidden="true" />

      <aside className="relative z-10 flex h-full w-full max-w-md flex-col bg-[#F5F0EA] text-[#14110F] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#14110F]/15 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="h-5 w-5 text-[#C4552D]" />
            <h2 className="font-display text-xl font-bold uppercase tracking-wide">
              Your Roast Bag
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Tutup keranjang"
            className="rounded-sm p-1.5 text-[#14110F]/70 transition-colors hover:bg-[#E7E0D6] hover:text-[#14110F]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-[#6E675F]">
                EMPTY BAG
              </p>
              <p className="mt-2 text-sm text-[#6E675F]">
                Belum ada biji kopi yang dipilih. Pilih Arabica atau Robusta
                favoritmu dulu.
              </p>
              <a
                href="#beans"
                onClick={closeCart}
                className="mt-5 inline-flex items-center gap-2 bg-[#14110F] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F5F0EA] transition-colors hover:bg-[#C4552D]"
              >
                Lihat Katalog
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.key}
                  className="flex gap-3.5 border-b border-[#14110F]/12 pb-4"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-[#E7E0D6]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-base font-bold uppercase leading-tight">
                          {item.name}
                        </h3>
                        <p className="mt-0.5 font-mono text-[11px] text-[#6E675F]">
                          {item.weight} · {item.grind}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        aria-label={`Hapus ${item.name}`}
                        className="text-[#6E675F] transition-colors hover:text-[#C4552D]"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="inline-flex items-center border border-[#14110F]/20 bg-[#F5F0EA]">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, -1)}
                          aria-label="Kurangi jumlah"
                          className="px-2 py-1 text-[#14110F] hover:bg-[#E7E0D6]"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="px-2.5 font-mono text-xs font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, 1)}
                          aria-label="Tambah jumlah"
                          className="px-2 py-1 text-[#14110F] hover:bg-[#E7E0D6]"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="font-mono text-sm font-semibold text-[#14110F]">
                        {formatIDR(item.unitPrice * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="space-y-3 pt-2">
                <p className="font-mono text-[11px] uppercase tracking-widest text-[#6E675F]">
                  Detail Pengiriman (Opsional)
                </p>
                <input
                  type="text"
                  placeholder="Nama penerima"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full border border-[#14110F]/20 bg-white/70 px-3 py-2 text-sm text-[#14110F] placeholder:text-[#6E675F] focus:border-[#C4552D] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Kota / Alamat singkat"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  className="w-full border border-[#14110F]/20 bg-white/70 px-3 py-2 text-sm text-[#14110F] placeholder:text-[#6E675F] focus:border-[#C4552D] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Catatan tambahan (misal: minta roast date terbaru)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full border border-[#14110F]/20 bg-white/70 px-3 py-2 text-sm text-[#14110F] placeholder:text-[#6E675F] focus:border-[#C4552D] focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[#14110F]/15 bg-[#E7E0D6]/70 px-5 py-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-mono uppercase tracking-wider text-[#6E675F]">
                Subtotal
              </span>
              <span className="font-mono text-lg font-bold text-[#14110F]">
                {formatIDR(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-xs text-[#6E675F]">
              Ongkir & pembayaran akan dikonfirmasi langsung lewat WhatsApp.
            </p>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={handleCheckoutWhatsApp}
                className="flex flex-1 items-center justify-center gap-2 bg-[#14110F] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#F5F0EA] transition-colors hover:bg-[#C4552D]"
              >
                Checkout via WhatsApp
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={clearCart}
                aria-label="Kosongkan keranjang"
                className="border border-[#14110F]/25 px-3 py-3 text-xs font-semibold uppercase text-[#14110F] transition-colors hover:bg-[#14110F] hover:text-[#F5F0EA]"
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
