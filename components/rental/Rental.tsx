'use client'
import { useState } from "react";
import ParallaxSection from "../ui/ParallaxSection";
import PopupForm from "../ui/PopUpForm";
import BiggerButton from "../ui/BiggerButton";

export default function Rental() {
    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
    const handleRentNowClick = () => {
        setIsPopupVisible(true);
    }

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    }
    return (
        <>
            <ParallaxSection
                parallaxHeight="h-[440px]"
                parallaxBackgroundUrl="https://utfs.io/f/16adb06e-9196-47a3-8b59-98dc0fef8ac9-23tg.jpg"
            >
                <div className="flex flex-col justify-center items-center w-full">
                    <p className="text-yellow-general font-[300] text-14 tracking-[6px] uppercase mb-4">Rent now</p>
                    <h2 className="text-4xl font-[700] text-white">Book Auto Rental</h2>
                    <div onClick={handleRentNowClick} className="mt-6">
                        <BiggerButton text="Rent Now" textColor="text-black hover:text-white" backgroundColor="bg-yellow-general hover:bg-black"  />
                    </div>
                </div>
            <PopupForm isVisible={isPopupVisible} onClose={handleClosePopup} />
            </ParallaxSection>
        </>
    );
}
