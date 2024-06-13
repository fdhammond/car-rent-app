import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import Promo from "@/components/promo/Promo";
import WhatWeDo from "@/components/whatwedo/WhatWeDo";
import Rental from "@/components/rental/Rental";
import CarFleet from "@/components/carFleet/CarFleet";

export default function Home() {
  return (
    <div className="absolute w-full h-screen">
      <Navbar />
      <Hero />
      <Promo />
      <WhatWeDo />
      <Rental />
      <CarFleet/>
    </div>
  );
}
