import { BeansCatalog } from "@/components/BeansCatalog";
import { BrewGuide } from "@/components/BrewGuide";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { OriginCraft } from "@/components/OriginCraft";
import { SignatureLot } from "@/components/SignatureLot";
import { WholesaleSection } from "@/components/WholesaleSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <SignatureLot />
        <BeansCatalog />
        <OriginCraft />
        <BrewGuide />
        <WholesaleSection />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
