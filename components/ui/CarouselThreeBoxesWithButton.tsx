import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';

interface Service {
    image: string;
    text?: string;
    order?: string;
    topTitle?: string;
}

interface CarouselThreeBoxesWithButtonProps {
    services: Service[];
    serviceButtonIcon?: string | JSX.Element;
    topTitle?: string;
}

export default function CarouselThreeBoxesWithButton({ services, serviceButtonIcon }: CarouselThreeBoxesWithButtonProps) {
    return (
        <div className="flex justify-between items-center align-middle w-full overflow-x-hidden md:px-80 px-6 mt-12">
            <Swiper
                pagination={{
                    dynamicBullets: true,
                    clickable: true
                }}
                className="swiper-pagination-custom"
                modules={[Pagination, Navigation]}
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
            >
                {
                    services.map((service, index) => (
                        <SwiperSlide key={index} className='relative group'>
                            <div className="overflow-hidden rounded-[20px]">
                                <Image src={service.image} width={400} height={400} alt={`slide ${index + 1}`} className='transform transition duration-300 ease-in-out group-hover:scale-105' />
                            </div>
                            <span className='text-white-background text-[21px] ml-10 mt-14 text-start text-xl absolute inset-x-0 left-0 top-0 pb-6 font-bold'>
                                { service.topTitle }
                            </span>
                            <p className='text-white-background text-center text-xl absolute inset-x-0 bottom-0 pb-[1.8rem] font-bold'>{service.text}</p>
                            <Link href={'/carDetail'}>
                                <span className='absolute inset-x-0 bottom-0 rounded-[50%] text-md text-center bg-yellow-general group-hover:bg-black-background group-hover:text-white-background w-14 h-14 flex items-center justify-center font-bold ml-4 mb-4'>
                                    {
                                        <>
                                                <button className='group-hover:text-white'>
                                                    {serviceButtonIcon && serviceButtonIcon}
                                                </button>
                                        </>
                                    }
                                    {service.order}
                                </span>
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}
