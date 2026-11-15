import { BeansCatalog } from "@/components/BeansCatalog";
import { BrewGuide } from "@/components/BrewGuide";
import { Footer } from "@/components/Footer";
import { HeroCutoutShowcase } from "@/components/HeroCutoutShowcase";
import { Navbar } from "@/components/Navbar";
import { OriginCraft } from "@/components/OriginCraft";
import { WholesaleSection } from "@/components/WholesaleSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <HeroCutoutShowcase />
        <BeansCatalog />
        <OriginCraft />
        <BrewGuide />
        <WholesaleSection />
      </main>
      <Footer />
    </div>
  );
}
