'use client'
import SectionTitle from "../ui/SectionTitle"
import { MdSecurityUpdateWarning } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/pagination';

export default function CarRentalProcess() {
    const services = [
        { topTitle: "Choose A Car", paragraph: "View our range of cars, find your perfect car for the coming days.", order: "01." },
        { topTitle: "Come In Contact", paragraph: "Our advisor team is ready to help you with the booking process or any questions.", order: "02." },
        { topTitle: "Enjoy Driving", paragraph: "Receive the key and enjoy your car. We treat all our cars with respect.", order: "03." },
    ]

    return (
        <div className="py-12 md:py-[120px]">
            <SectionTitle
                topTitle="Steps"
                bottomTitleBlack="Car Rental"
                bottomTitleYellow="Process"
            />
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center w-full overflow-x-hidden md:px-20 px-6 mt-12 gap-6 md:gap-4">
                {
                    services.map((service, index) => (
                        <div key={index} className="flex flex-col w-full md:w-[376px] h-[271px] overflow-hidden rounded-[20px] bg-light-gray px-6 md:px-[40px] pt-10 md:pt-[60px] mx-0 md:mx-4">
                            <span className='text-black text-lg md:text-[21px] text-start font-bold mb-4 md:mb-[15px]'>
                                {service.topTitle}
                            </span>
                            <span className='text-gray-500 text-sm md:text-[14px] leading-relaxed md:leading-[1.95em] text-start'>
                                {service.paragraph}
                            </span>
                            <div className="md:mt-auto mt-16 pb-4 md:pb-[15px]">
                                <span className='flex rounded-full text-md text-center bg-white border-yellow-general border-[0.5px] w-12 h-12 md:w-14 md:h-14 items-center justify-center font-bold'>
                                    {service.order}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="text-center mt-8 flex justify-center md:items-center items-start px-[12px]">
                <MdSecurityUpdateWarning className="text-yellow-general w-6 h-6" />
                <p className="md:pl-4 pl-2 text-[14px] font-normal text-gray-500">If you&apos;ve never rented a car before, we&apos;ll guide you through the process.</p>
            </div>
        </div>
    )
}
