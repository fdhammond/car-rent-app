import Hero from "@/components/hero/Hero";
import Promo from "@/components/promo/Promo";
import WhatWeDo from "@/components/whatwedo/WhatWeDo";
import Rental from "@/components/rental/Rental";
import CarFleet from "@/components/carFleet/CarFleet";
import RentalCarServices from "@/components/rentalCarServices/RentalCarServices";
import CarRentalProcess from "@/components/carRentalProcess/CarRentalProcess";
import LineSeparator from "@/components/ui/LineSeparator";
import Template from "./template";

export default function Home() {
  return (
    <div className="w-full">
      <Template>
        <Hero />
        <Promo />
        <LineSeparator />
        <WhatWeDo />
        <Rental />
        <CarFleet />
        <LineSeparator />
        <RentalCarServices />
        <LineSeparator />
        <CarRentalProcess />
      </Template>
    </div>
  );
}
