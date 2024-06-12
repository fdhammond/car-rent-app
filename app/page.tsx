import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import Promo from "@/components/promo/Promo";
import WhatWeDo from "@/components/whatwedo/WhatWeDo";
import Rental from "@/components/rental/Rental";

export default function Home() {
  return (
    <div className="absolute w-full h-screen">
      <Navbar />
      <Hero />
      <Promo />
      <WhatWeDo />
      <Rental />
      <WhatWeDo />
      <WhatWeDo />

    </div>
  );
}
