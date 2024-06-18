'use client';
import { useState } from 'react';
import Image from 'next/image';
import ParallaxSection from "../ui/ParallaxSection";
import BiggerButton from "../ui/BiggerButton";
import PopupForm from './PopUpForm';
// Import Swiper React components
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css';
import './styles.css';

const carBrands = [
    {
    image: 'https://utfs.io/f/a9f44537-48d3-46ca-89f4-d68b956f7cb3-11hh.png'
    },
    {
    image: 'https://utfs.io/f/caa4bdd8-2bfe-4caa-bc5a-35b3de348d67-1286.png'
    },
    {
    image: 'https://utfs.io/f/edd3a877-a720-4170-be36-ad0d70041350-12yv.png'
    },
    {
    image: 'https://utfs.io/f/195d42cc-642c-4cc7-9b2c-d59ff9d1800a-13pk.png'
    },
    {
    image: 'https://utfs.io/f/46938d3a-3843-49b2-9627-b8314e9f9d9a-14g9.png'
    },
    {
    image: 'https://utfs.io/f/b91d743d-ae28-4f01-9289-05acfa35069c-156y.png'
    },
    {
    image: 'https://utfs.io/f/95252edf-3716-4730-98a3-b4c323056524-15xn.png'
    },
    {
    image: 'https://utfs.io/f/dccb7979-1813-4fc3-9163-333fd502d57a-16oc.png'
    },
]

export default function InterestedInRental() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleRentNowClick = () => {
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <>
            <ParallaxSection
                parallaxHeight="h-[440px]"
                parallaxBackgroundUrl="https://utfs.io/f/a25c1bac-589a-46dc-8470-24d01494470e-2t46oa.jpg"
            >
                <div className="flex flex-col justify-center items-center w-full">
                    <p className="text-yellow-general font-[300] text-14 tracking-[6px] uppercase mb-4">Rent your car</p>
                    <h2 className="text-4xl font-[700] text-white mb-[15px]">Interested in Renting?</h2>
                    <p className="text-white-background text-[14px]">Don&apos;t hesitate and send us a message.</p>
                    <div className="flex gap-4 mt-8">
                        <a href="https://api.whatsapp.com/send?phone=1234567890">
                            <BiggerButton
                                text="Whatsapp"
                                textColor="text-black"
                                backgroundColor="bg-yellow-general"
                                showWhatsappIcon={true}
                                iconSize="text-[20px]"
                                bgColorOnHover="hover:bg-white-background border-yellow-general"
                                textColorOnHover="text-black"
                            />
                        </a>
                        <a onClick={handleRentNowClick}>
                            <BiggerButton
                                text="Rent Now"
                                textColor="text-white"
                                showArrowIcon={true}
                                iconSize="text-[10px]"
                                bgColorOnHover="hover:bg-yellow-general hover:border-yellow-general"
                            />
                        </a>
                    </div>
                </div>
            </ParallaxSection>

            <div className="mySwiper">
                <Swiper
                    breakpoints={{
                        420: { slidesPerView: 2 },
                        1024: { slidesPerView: 6 },
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {carBrands.map((brand, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-[170px] h-[85px]">
                                <Image src={brand.image} width={300} height={300} alt={`slide ${index + 1}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <PopupForm isVisible={isPopupVisible} onClose={handleClosePopup} />

        </>
    );
}
