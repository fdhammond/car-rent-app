'use client';
import { useState } from 'react';
import ParallaxSection from "../ui/ParallaxSection";
import BiggerButton from "../ui/BiggerButton";
import PopupForm from './PopUpForm';

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

            <PopupForm isVisible={isPopupVisible} onClose={handleClosePopup} />
        </>
    );
}
