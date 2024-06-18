import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import Promo from "@/components/promo/Promo";
import WhatWeDo from "@/components/whatwedo/WhatWeDo";
import Rental from "@/components/rental/Rental";
import CarFleet from "@/components/carFleet/CarFleet";
import RentalCarServices from "@/components/rentalCarServices/RentalCarServices";
import CarRentalProcess from "@/components/carRentalProcess/CarRentalProcess";
import InterestedInRental from "@/components/interestedInRental/InterestedInRental";

export default function Home() {
  return (
    <div className="absolute w-full h-screen">
      <Navbar />
      <Hero />
      <Promo />
      <WhatWeDo />
      <Rental />
      <CarFleet />
      <RentalCarServices />
      <CarRentalProcess />
      <InterestedInRental />
      <CarRentalProcess />

    </div>
  );
}
