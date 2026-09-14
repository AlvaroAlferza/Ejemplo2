import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F6F0E5] text-[#171714]">
      <Navbar />

      <section className="flex min-h-screen items-center justify-center">
        <h1 className="text-5xl font-semibold tracking-[-0.05em]">
          Navidad
        </h1>
      </section>
    </main>
  );
}