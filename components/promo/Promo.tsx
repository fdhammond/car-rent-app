'use client'
import { useState, useRef } from 'react';
import { IoIosClose } from 'react-icons/io';
import Image from 'next/image';
import BiggerButton from '../ui/BiggerButton';
import { IoIosCheckmark } from 'react-icons/io';
import { FiPlay } from "react-icons/fi";
import { useClickOutside } from '@/hooks/useClickOutside';
import './styles.css';

export default function Promo() {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useClickOutside(modalRef, () => {
        setShowModal(false);
    });

    return (
        <>
            <section className="py-[120px] background-white flex justify-center md:flex-row md:items-start flex-wrap flex-col items-center md:px-0 px-[24px]">
                <div className="max-w-[576px] h-auto flex flex-wrap flex-col">
                    <p className="text-[10px] leading-3 text-yellow-general mb-4 uppercase tracking-[6px]">
                        Rentax
                    </p>
                    <h2 className="text-4xl text-yellow-general mb-4 leading-5 font-[700] mt-2">
                        <span className="text-black">We Are More Than</span>
                        <div className="mt-6">A Car Rental Company</div>
                    </h2>
                    <p className="text-[14px] leading-[1.95em] text-gray-500 mt-4">
                        Car repair quisque sodales dui ut varius vestibulum drana tortor turpis
                        porttiton tellus eu euismod nisl massa nutodio in the miss volume place
                        urna lacinia eros nunta urna mauris vehicula rutrum in the miss on
                        volume interdum.
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
                        <BiggerButton
                            text="Read More"
                            backgroundColor="bg-yellow-general"
                            showArrowIcon={true}
                            showWhatsappIcon={false}
                            bgColorOnHover="hover:bg-black"
                            textColorOnHover="hover:text-white"
                        />
                    </div>
                </div>
                <div className="w-full md:max-w-[476px] max-h-[476px] md:ml-[100px] mt-8">
                    <Image
                        src="https://utfs.io/f/31a57e9b-c353-42cb-ba69-e38414739991-1j4zgt.jpg"
                        alt="promo image"
                        width={1920}
                        height={1080}
                        className="w-full h-auto rounded-[20px]"
                    />
                    <div className="flex justify-center align-middle items-center bg-white w-[80px] h-[80px] ">
                        <button
                            onClick={openModal}
                            className="mt-[-180px] ml-6 flex justify-center items-center align-middle w-[60px] h-[60px] rounded-[50%] bg-yellow-general hover:bg-black hover:border-yellow-general hover:border-[2px] hover:text-white"
                        >
                            <FiPlay className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Modal for YouTube Video */}
            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div ref={modalRef} className="md:w-[680px] md:h-[480px] w-full h-[450px]">
                        <button
                            onClick={closeModal}
                            className="flex md:ml-auto text-white hover:text-yellow-general"
                        >
                            <IoIosClose className="w-8 h-8" />
                        </button>
                        <div className="w-full h-full">
                            <iframe
                                src="https://www.youtube.com/embed/1LxcTt1adfY?si=U0TttQYNJixSmWE5"
                                title="YouTube video player"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
