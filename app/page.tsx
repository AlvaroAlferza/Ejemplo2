import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Categories from "@/components/ui/Categories";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import EditorialBanner from "@/components/ui/EditorialBanner";
import Craftsmanship from "@/components/ui/Craftsmanship";
import Experience from "@/components/ui/Experience";
import FinalCTA from "@/components/ui/FinalCTA";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F6F0E5] text-[#171714]">
      <Navbar />

      <Hero />

      <Categories />

      <FeaturedProducts />

      <EditorialBanner />

    

      <Experience />

      <FinalCTA />

      <Footer />
    </main>
  );
}