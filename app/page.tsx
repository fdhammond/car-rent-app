import Hero from "@/components/hero/Hero";
import Promo from "@/components/promo/Promo";
import Navbar from "@/components/Navbar";
import WhatWeDo from "@/components/whatwedo/WhatWeDo";

export default function Home() {
  return (
    <div className="absolute w-full h-screen">
      <Navbar />
      <Hero />
      <Promo />
      <WhatWeDo />
    </div>
  );
}
