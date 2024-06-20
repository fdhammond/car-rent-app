'use client';
import { useState } from 'react';
import Image from 'next/image';
import { IconType } from 'react-icons';
import { GiCarDoor } from "react-icons/gi";
import { TbManualGearboxFilled } from "react-icons/tb";
import { LuBaggageClaim } from "react-icons/lu";
import { BsPersonFillAdd } from "react-icons/bs";
import { PiThermometerColdBold } from "react-icons/pi";
import { IoMdPerson } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";
import PopupForm from '@/components/ui/PopUpForm';
import PopUpGallery from '@/components/ui/PopUpGallery';

interface InfoButtonProps {
    icon: IconType,
    title: string,
    data: string
}

export function InfoButton({ icon: Icon, title, data }: InfoButtonProps) {
    return (
        <div className='flex items-center py-[15px]'>
            <div className='bg-[#333333] rounded-full flex items-center justify-center w-[34px] h-[34px] mr-[14px]'>
                <Icon className='w-[14px] h-[14px] text-yellow-general' />
            </div>
            <p className="text-[#999]">{title}</p>
            <p className='ml-auto text-white'>{data}</p>
        </div>
    )
}

export function InfoContent({ text }: { text: string }) {
    return (
        <div className='flex justify-start items-center mt-[10px]'>
            <div className="bg-[#333333] rounded-full flex items-center justify-center w-[34px] h-[34px] mr-[10px]">
                <BiCheck className="text-yellow-general" />
            </div>
            <p className="text-[14px] font-normal text-[#999]">{ text }</p>
        </div>
    )
}

export default function CarDetail() {
    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
    const [isGalleryVisible, setIsGalleryVisible] = useState<boolean>(false)
    const [carImage, setCarImage] = useState<string>('')

    const handleRentNowClick = () => {
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    const handleGalleryClick = (imgSrc: string) => {
        setCarImage(imgSrc);
        setIsGalleryVisible(true);
    };

    const handleCloseGallery = () => {
        setIsGalleryVisible(false);
    };

    return (
        <>
            <div className="relative flex w-full h-[661px]">
                <div className="relative w-full h-full">
                    <Image
                        src="https://utfs.io/f/79d9a0ca-5578-45af-9473-8e76147ee7e9-17k.jpg"
                        alt="car detail"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-start md:px-[351px]">
                        <div className="pl-8">
                            <div className="text-start mb-[4px]">
                                <h2 className="text-yellow-general tracking-[6px] uppercase text-xs">Luxury Cars</h2>
                            </div>
                            <div className="md:pl-[12px] pl-[8px] text-center">
                                <h2 className="text-[42px] font-bold text-white">Bentley Bentayga</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#1b1b1b] flex flex-wrap justify-center align-center gap-24 pb-[120px]'>
                <div className='max-w-[760px] py-[120px] px-4 md:px-0'>
                    <h2 className='text-white text-[21px] font-bold mb-[15px]'>General Information</h2>
                    <p className="text-[14px] text-[#999] font-normal mb-[30px]">
                        Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen
                        morbi consesua the miss sustion consation porttitor orci sit amet
                        iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante
                        sollicitudin velen fermen morbinetion consesua the risus consequation
                        the porttiton.
                    </p>
                    <div className="mb-[90px]">
                        <InfoContent
                            text='24/7 Roadside Assistance'
                        />
                        <InfoContent
                            text='Free Cancellation & Return'
                        />
                        <InfoContent
                            text='24/7 Roadside Assistance'
                        />
                    </div>
                    <h2 className="text-[21px] font-bold mb-[15px] text-white">Image Gallery</h2>
                    <div className="flex justify-start flex-wrap gap-4">
                        <Image
                            src="https://utfs.io/f/f16a8608-55e4-4047-9696-a6b50b3ba45e-pfvyio.jpg"
                            alt="Outside"
                            width={356}
                            height={200}
                            className="rounded-lg cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 md:max-w-[356px] w-full"
                            onClick={() => handleGalleryClick("https://utfs.io/f/f16a8608-55e4-4047-9696-a6b50b3ba45e-pfvyio.jpg")}
                        />
                        <Image
                            src="https://utfs.io/f/35471a57-ff41-46ab-b202-d36131f0cae1-yyww.jpg"
                            alt="Interior"
                            width={356}
                            height={200}
                            className="rounded-lg cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 md:max-w-[356px] w-full"
                            onClick={() => handleGalleryClick("https://utfs.io/f/35471a57-ff41-46ab-b202-d36131f0cae1-yyww.jpg")}
                        />
                    </div>
                </div>
                <div className="mt-[-98px] z-0">
                    <div className='flex items-center justify-center w-[356px] h-auto bg-yellow-general px-[30px] py-[25px] rounded-tr-[20px] rounded-tl-[20px] text-center'>
                        <h2 className="text-[32px] text-black font-bold text-center">$600 <span className='text-[14px] font-normal text-[#1b1b1b]'>/ rent per day</span></h2>
                    </div>
                    <div className='bg-[#222222] flex flex-col p-[30px] text-[14px] rounded-b-[20px]'>
                        <InfoButton
                            icon={GiCarDoor}
                            title="Doors"
                            data= "4"
                        />
                        <InfoButton
                            icon={BsPersonFillAdd}
                            title="Passengers"
                            data= "5"
                        />
                        <InfoButton
                            icon={TbManualGearboxFilled}
                            title="Transmission"
                            data= "Auto"
                        />
                        <InfoButton
                            icon={LuBaggageClaim}
                            title="Luggage"
                            data= "2 Bags"
                        />
                        <InfoButton
                            icon={PiThermometerColdBold}
                            title="Air Condition"
                            data= "Yes"
                        />
                        <InfoButton
                            icon={IoMdPerson}
                            title="Age"
                            data= "25"
                        />
                        <div className="flex justify-center align-middle items-center mt-[30px] mb-[10px] gap-1 relative text-center">
                            <button onClick={handleRentNowClick} className="bg-yellow-general rounded-l-[30px] p-4 z-0 text-[14px] font-normal text-[#1b1b1b] w-full h-[57px] hover:bg-white">Rent Now</button>
                            <button className="bg-yellow-general rounded-r-[30px] p-4 z-0 text-[14px] font-normal text-[#1b1b1b] w-full h-[57px] flex items-center justify-center gap-[2px] hover:bg-white">
                                <FaWhatsapp className="w-4 h-4" /><a href="https://api.whatsapp.com/send?phone=1234567890">Whatsapp</a>
                            </button>
                            <button className="bg-[#222222] rounded-full text-white absolute z-10 text-center w-8 h-8 text-[12px]">&</button>
                        </div>
                    </div>
                </div>
                <PopupForm isVisible={isPopupVisible} onClose={handleClosePopup} />
                <PopUpGallery isVisible={isGalleryVisible} onClose={handleCloseGallery} carImage={carImage} />
            </div>
        </>
    );
}
