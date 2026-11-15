import type { Metadata } from "next";
import { JetBrains_Mono, Oswald, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "LIVION COFFEE — Freshly Roasted Indonesian Specialty Beans",
  description:
    "Biji kopi Arabica & Robusta pilihan dari dataran tinggi Indonesia. Dipanggang segar setiap minggu untuk manual brew, espresso, hingga kebutuhan kafe.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${oswald.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F0EA] text-[#14110F] font-sans selection:bg-[#C4552D] selection:text-[#F5F0EA]">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
