import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  JetBrains_Mono,
  Oswald,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import { MotionRoot } from "@/components/MotionPrimitives";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
  title: "LIVION COFFEE | Freshly Roasted Indonesian Specialty Beans",
  description:
    "Biji kopi Arabica & Robusta pilihan dari dataran tinggi Indonesia. Dipanggang segar setiap minggu untuk manual brew, espresso, hingga kebutuhan kafe.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${bricolage.variable} ${oswald.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F0EA] text-[#14110F] font-sans selection:bg-[#B8421B] selection:text-[#F5F0EA]">
        <a href="#main-content" className="skip-link">
          Lewati ke konten utama
        </a>
        <MotionRoot>{children}</MotionRoot>
      </body>
    </html>
  );
}
