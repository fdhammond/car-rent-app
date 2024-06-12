'use client'
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import './styles.css'
export default function WhatWeDo() {

    const services = [
    { image: "https://utfs.io/f/ba6ce0ed-9e89-49b2-b10d-a21559193646-1d.jpg", text: "Corporate Car Rental", order: "01" },
    { image: "https://utfs.io/f/99ffba94-e802-40b0-b59c-53946e8dcb4a-1e.jpg", text: "Car Rental with Driver", order: "02" },
    { image: "https://utfs.io/f/f3f6d3eb-038e-4e8e-aa3e-c7a6fe65d396-1f.jpg", text: "Airport Transfer", order: "03" },
    { image: "https://utfs.io/f/434e431a-9be9-4be4-9a4f-041b17875d27-1g.jpg", text: "Fleet Leasing", order: "04" },
    { image: "https://utfs.io/f/edda028d-c3de-4e13-863a-0dd4091f51b4-1h.jpg", text: "VIP Transfer", order: "05" },
    { image: "https://utfs.io/f/065e05b2-3605-453d-994b-0d5c05382255-1i.jpg", text: "Private Transfer", order: "06" }
];

    return (
        <>
            <section className="py-[120px] w-full mb-[25px]">
                <div className="text-center mb-4">
                    <h2 className="text-yellow-general tracking-[6px] uppercase text-xs">What we do</h2>
                </div>
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-yellow-general"><span className="text-black">Our</span> Services</h2>
                </div>
                <div className="flex justify-between items-center align-middle w-full overflow-x-hidden md:px-80 px-24 mt-12">
                    <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            services.map((service, index) => (
                                <SwiperSlide key={index} className='relative group'>
                                    <div className="overflow-hidden rounded-[20px]">
                                        <Image src={service.image} width={400} height={400} alt="slide 1" className='transform transition duration-300 ease-in-out group-hover:scale-105'/>
                                    </div>
                                    <p className='text-white-background text-center text-xl absolute inset-x-0 bottom-0 pb-6 font-bold'>{service.text}</p>
                                    <span className='absolute inset-x-0 bottom-0 rounded-[50%] text-md text-center bg-yellow-general group-hover:bg-black-background group-hover:text-white-background w-14 h-14 flex items-center justify-center font-bold ml-2 mb-2'>
                                        {service.order}
                                    </span>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </section>
        </>
    )
}