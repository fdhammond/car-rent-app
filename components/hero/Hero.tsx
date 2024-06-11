'use client'
import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from 'next/image';
import BiggerButton from '../ui/BiggerButton';
import { motion } from 'framer-motion';
import './styles.css'

export default function Hero() {
  const [triggerAnimation, setTriggerAnimation] = useState<boolean>(false);

  const [sliderRef, internalSlider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 0 },
    slideChanged(s) {
    // Trigger animation state on slide change
    setTriggerAnimation(true);
    // Reset animation state after a delay to allow re-triggering
    setTimeout(() => setTriggerAnimation(false), 500); // Adjust the timeout as per the animation duration
    }
  });

  const cars = [
    {
      name: "Bentley Bentayga",
      imageUrl: "https://utfs.io/f/79d9a0ca-5578-45af-9473-8e76147ee7e9-17k.jpg",
      price: "$600"
    },
    {
      name: "Bugatti Mistral W16",
      imageUrl: "https://utfs.io/f/863410f4-3d86-4592-9b28-46e31004471d-17l.jpg",
      price: "$900"
    },
    {
      name: "Audi RS7 Sportback",
      imageUrl: "https://utfs.io/f/0bdb50fa-af30-45ac-9e83-7b7dc076718a-17n.jpg",
      price: "$600"
    },
  ];

  return (
    <div ref={sliderRef} className="keen-slider">
      {cars.map((car, index) => (
        <div className="keen-slider__slide relative" key={index}>
          <Image
            src={car.imageUrl}
            alt={car.name}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.3 },
            }}
            className='flex items-center justify-start absolute ml-[15px] md:ml-8 md:mb-2 md:bottom-6 md:left-[351px] w-full h-full'>
            <div className='flex flex-col'>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4 },
                }}
                className='text-[12px] uppercase tracking-[6px] text-yellow-general'>* Premium</motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.5 },
                }}
                className="text-[42px] md:text-[90px] md:leading-[1em] font-[700] text-white">Rental Car</motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6 },
                }}
                className='flex items-bottom my-2.5'>
                <p className='text-[17px] font-[300] text-white'>{car.name}</p>
                <p className='ml-5 text-white font-[300]'><span className='text-[21px] font-bold text-yellow-general'>{car.price}</span> / DAY</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.7 },
                }}
                className='flex gap-4'>
                <BiggerButton text="View Details" textColor="text-black"
                  backgroundColor="bg-yellow-general" showArrowIcon={true} iconSize='text-[10px]'
                  bgColorOnHover="hover:bg-white-background border-yellow-general"
                  textColorOnHover="text-black"
                />
                <BiggerButton text="Rent Now" textColor="text-white"
                  showArrowIcon={true} iconSize='text-[10px]' bgColorOnHover="hover:bg-yellow-general"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}