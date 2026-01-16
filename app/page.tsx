import { HeroSection } from "@/components/home/hero-section";
import { LivePreview } from "@/components/home/live-preview";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <HeroSection />
      <LivePreview />

      {/* Placeholder for future sections */}
      <section className="h-screen bg-zinc-950 flex items-center justify-center border-t border-white/5">
        <p className="text-gray-500">More sections coming soon...</p>
      </section>
    </div>
  );
}
