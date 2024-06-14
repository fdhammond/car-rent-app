'use client'
import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { GiCarDoor } from "react-icons/gi";
import { TbManualGearboxFilled } from "react-icons/tb";
import { LuBaggageClaim } from "react-icons/lu";
import { IoMdPerson } from "react-icons/io";
import SectionTitle from '../ui/SectionTitle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function CarFleet() {

    const [activeIndex, setActiveIndex] = useState(0);

    const cars = [
        {
            name: "Aston Martin DBX",
            imageUrl: "https://utfs.io/f/78c56d60-a3df-47e0-a1cf-2af1ac3d72ad-17j.jpg",
            seats: 4,
            shift: "Auto",
            bags: 2,
            age: 25,
            price: "$500"
        },
        {
            name: "Lamborghini Urus",
            imageUrl: "https://utfs.io/f/6eb95a37-8da4-487d-b08a-31deb104de7d-17l.jpg",
            seats: 4,
            shift: "Auto",
            bags: 2,
            age: 25,
            price: "$750"
        },
        {
            name: "Audi Q8",
            imageUrl: "https://utfs.io/f/419a193c-9dc3-43d4-b360-467b12fa1997-17k.jpg",
            seats: 4,
            shift: "Auto",
            bags: 2,
            age: 25,
            price: "$450"
        },
        {
            name: "Bentley Continental",
            imageUrl: "https://utfs.io/f/53577742-e036-4515-8f2b-4cd190a68b6d-17m.jpg",
            seats: 4,
            shift: "Auto",
            bags: 2,
            age: 25,
            price: "$500"
        },
        {
            name: "Bugatti Mistral W16",
            imageUrl: "https://utfs.io/f/b1be3e38-4e2d-4d0e-bbb8-395aa47e9ec6-17n.jpg",
            seats: 2,
            shift: "Auto",
            bags: 2,
            age: 25,
            price: "$800"
        },
    ];

    return (
        <div className="py-[120px]">
            <SectionTitle
                topTitle="Select your car"
                bottomTitleBlack="Luxury"
                bottomTitleYellow="Car Fleet"
            />
            <div className='my-12 flex justify-center align-middle items-center'>
                <Swiper
                    centeredSlides={true}
                    spaceBetween={33}
                    pagination={{
                        clickable: true
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="custom-swiper"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 2.33,
                        },
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {
                        cars.map((car, index) => (
                            <SwiperSlide key={index} className="custom-slide flex flex-col px-4 md:px-0">
                                <Image src={car.imageUrl} width={800} height={450} alt={car.name} className={`md:mb-12 mb-[158px] transform transition duration-300 ease-in-out hover:scale-[1.01]`} />
                                    <div className={`absolute bottom-0 w-[400px] md:w-[700px] md:h-[100px] bg-[#f2f2f2] rounded-2xl details-section ${activeIndex === index ? 'active' : ''}`}>
                                        <div className='flex flex-col md:flex-row md:justify-between items-start md:items-center w-full h-full px-[25px] py-[25px]'>
                                            <div className='flex flex-col md:pb-0 pb-2.5'>
                                                <h2 className='text-[22px] font-bold'>{car.name}</h2>
                                                <div className='flex justify-center items-center gap-1.5'>
                                                    <GiCarDoor className='text-[16px] md:ml-2 text-yellow-general'/> <span className='text-[14px] text-gray-400'>{car.seats}</span>
                                                    <TbManualGearboxFilled className='text-[16px] ml-2 text-yellow-general'/> <span className='text-[14px] text-gray-400'>{car.shift}</span>
                                                    <LuBaggageClaim className='text-[16px] ml-2 text-yellow-general'/> <span className='text-[14px] text-gray-400'>{car.bags}</span>
                                                    <IoMdPerson className='text-[16px] ml-2 text-yellow-general'/> <span className='text-[14px] text-gray-400'>{car.age}</span>
                                                </div>
                                            </div>
                                            <div className='flex justify-center items-center'>
                                                <button className='flex justify-center items-center text-center text-[14px] text-black-background bg-yellow-general rounded-[20px] px-[14px] py-[21px] w-[86px] h-[50px]'>Details</button>
                                                <div className='flex flex-col justify-center items-center ml-[15px]'>
                                                    <span className='text-[22px] font-bold text-yellow-general'>{car.price}</span>
                                                    <span className='text-[14px] text-gray-400'>/day</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}
