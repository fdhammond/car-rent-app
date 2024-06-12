'use client'
import ParallaxSection from "../ui/ParallaxSection";

export default function Rental() {
    return (
        <>
            <ParallaxSection
                parallaxHeight="h-[440px]"
                parallaxBackgroundUrl="https://utfs.io/f/16adb06e-9196-47a3-8b59-98dc0fef8ac9-23tg.jpg"
            >
                <div className="flex flex-col justify-center items-center w-full">
                    <p className="text-yellow-general font-[300] text-14 tracking-[6px] uppercase mb-4">Rent now</p>
                    <h2 className="text-4xl font-[700] text-white">Book Auto Rental</h2>
                </div>
            </ParallaxSection>
        </>
    );
}
