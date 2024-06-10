import Hero from "@/components/hero/Hero";
import Promo from "@/components/promo/Promo";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="absolute w-full h-screen">
      <Navbar />
      <Hero />
      <Promo />
    </div>
  );
}
