import { CollectionShowcaseSection } from "@/components/CollectionShowcaseSection";
import { CraftedSection } from "@/components/CraftedSection";
import { Footer } from "@/components/Footer";
import { HeroCutoutShowcase } from "@/components/HeroCutoutShowcase";
import { Navbar } from "@/components/Navbar";
import { OrderCtaSection } from "@/components/OrderCtaSection";
import { OriginShowcaseSection } from "@/components/OriginShowcaseSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <HeroCutoutShowcase />
        <CraftedSection />
        <CollectionShowcaseSection />
        <OriginShowcaseSection />
        <OrderCtaSection />
      </main>
      <Footer />
    </div>
  );
}
