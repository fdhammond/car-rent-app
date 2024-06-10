import Image from "next/image"
import BiggerButton from "../ui/BiggerButton"
import { IoIosCheckmark } from "react-icons/io";
import './styles.css'

export default function Promo () {
    return (
        <>
            <section className="py-[120px] background-white flex justify-center md:flex-row md:items-start flex-wrap flex-col items-center md:px-0 px-[24px]">
                <div className="max-w-[576px] h-auto flex flex-wrap flex-col">
                    <p className="text-[10px] leading-3 text-yellow-general mb-4 uppercase tracking-[6px]">
                        Rentax
                    </p>
                    <h2 className="text-4xl text-yellow-general mb-4 leading-5 font-[700] mt-2">
                        <span className="text-black">We Are More Than</span>
                        <div className="mt-6">
                            A Car Rental Company
                        </div>
                    </h2>
                    <p className="text-[14px] leading-[1.95em] text-gray-500 mt-4">
                        Car repair quisque sodales dui ut varius vestibulum drana tortor
                        turpis porttiton tellus eu euismod nisl massa nutodio
                        in the miss volume place urna lacinia eros nunta urna mauris
                        vehicula rutrum in the miss on volume interdum.
                    </p>
                    <div className="flex items-center w-full gap-4 mt-4">
                        <div className="flex justify-center items-center bg-light-gray rounded-[50%] w-[41px] h-[41px]">
                            <IoIosCheckmark className="text-gray-400 w-6 h-6" />
                        </div>
                        <p className="text-sm text-gray-600">Sports and Luxury Cars</p>
                    </div>
                    <div className="flex items-center w-full gap-4 mt-4">
                        <div className="flex justify-center items-center bg-light-gray rounded-[50%] w-[41px] h-[41px]">
                            <IoIosCheckmark className="text-gray-400 w-6 h-6" />
                        </div>
                        <p className="text-sm text-gray-600">Economy Cars</p>
                    </div>
                    <div className="mt-4">
                        <BiggerButton text="Read More" textColor="text-black" backgroundColor="bg-yellow-general" showArrowIcon={true} showWhatsappIcon={false} bgColorOnHover="hover:bg-black" textColorOnHover="text-white"/>
                    </div>
                </div>
                <div className="w-full md:max-w-[476px] max-h-[476px] md:ml-[100px] mt-8">
                    <div className="absolute bg-white w-[80px] h-[80px] mt-[82.5%] md:mt-[24%] rounded-tr-[40px]">
                        <div className="svg-shape">
                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#ffffff"></path>
                            </svg>
                        </div>
                        <button className="absolute w-[60px] h-[60px] rounded-[50%] bg-yellow-general mt-[76%] md:mt-[10px]">Play</button>
                        <div className="svg-shape-two">
                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                                <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#ffffff"></path>
                            </svg>
                        </div>
                    </div>
                    <Image src='https://utfs.io/f/31a57e9b-c353-42cb-ba69-e38414739991-1j4zgt.jpg' alt="promo image" width={1920} height={1080} className="w-full h-auto rounded-[20px]" />
                </div>
            </section>
        </>
    )
}