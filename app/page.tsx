import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F6F0E5] text-[#171714]">
      <Navbar />
      <Hero />
    </main>
  );
}