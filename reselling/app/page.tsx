import Image from "next/image";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import CTA from "./components/cta";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <main className="md:w-[720px] lg:w-[860px] xl:w-[920px] 2xl:w-[1200px]">
        <About />
        <CTA />
      </main>
    </div>
  );
}
