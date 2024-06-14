'use client'

import SectionTitle from "../ui/SectionTitle"
import CarouselThreeBoxesWithButton from "../ui/CarouselThreeBoxesWithButton";
import { BsArrowUpRight } from "react-icons/bs";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

export default function RentalCarServices() {
    const services = [
        { image: "https://utfs.io/f/ad810e58-ef7b-4521-891b-aa2e4d00d45e-16r.jpg", topTitle: "Luxury Cars"},
        { image: "https://utfs.io/f/2dc7c06b-f1ad-4a09-96bd-9ef41cd81d7d-16s.jpg", topTitle: "Sport Cars"},
        { image: "https://utfs.io/f/21ff2743-e1f9-44c8-b606-dfe06bb3d9c7-16q.jpg", topTitle: "SUV" },
        { image: "https://utfs.io/f/016f2d4e-c3ad-4d79-bff2-5a0831f15355-16p.jpg", topTitle: "Convertible" },
        { image: "https://utfs.io/f/5f682f45-2657-4e59-8585-5ae01078c893-16u.jpg", topTitle: "Sedan" },
        { image: "https://utfs.io/f/56638b13-ca25-4b3f-afa0-a449581a4074-16t.jpg", topTitle: "Small Cars" }
    ];
    return (
        <div className="py-[120px]">
            <SectionTitle
                topTitle="Categories"
                bottomTitleBlack="Rental"
                bottomTitleYellow="Car Types"
            />
            <div>
                <CarouselThreeBoxesWithButton
                    services={services}
                    serviceButtonIcon={<BsArrowUpRight className="w-4 h-4 text-black group-hover:text-white" />}
                />
            </div>
        </div>
    )
}