import React, { useState, useEffect, useRef } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
interface CustomDropDownProps {
    options: string[];
    onSelect: (option: string) => void;
    defaultText: string;
}

interface PopupFormProps {
    isVisible: boolean;
    onClose: () => void;
}

function CustomDropdown({ options, onSelect, defaultText }: CustomDropDownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultText);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };

    useClickOutside(dropdownRef, () => setIsOpen(false));

    return (
        <div className="relative" ref={dropdownRef}>
            <div
                className="rounded-[30px] shadow appearance-none border w-full p-[20px] text-[14px] text-gray-400 bg-[#222] border-[#222] leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                        className="fill-current h-4 w-4 text-yellow-general"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                </div>
            </div>
            {isOpen && (
                <div className="absolute mt-1 w-full rounded-md shadow-lg bg-[#222] z-10">
                    {options.map((option) => (
                        <div
                            key={option}
                            className="text-gray-400 hover:bg-yellow-general hover:text-black cursor-pointer text-center py-2"
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function PopupForm({ isVisible, onClose }: PopupFormProps) {
    const carTypes = ['All', 'Luxury Cars', 'Sport Cars', 'SUVs', 'Convertible'];
    const locations = ['Los Angeles', 'New York', 'San Francisco', 'Miami'];
    const popupRef = useRef<HTMLDivElement>(null);

    useClickOutside(popupRef, onClose);

    return isVisible ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center max-w-full md:max-h-full">
            <div ref={popupRef} className="bg-[#1b1b1b] text-gray-600 rounded-2xl shadow-lg md:w-[800px] md:h-auto w-full relative">
                <div className="bg-yellow-general py-4 px-8 rounded-t-2xl">
                    <h3 className="text-2xl text-black font-bold">Booking Form</h3>
                </div>
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
                    onClick={onClose}
                >
                    <svg
                        className="h-6 w-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <form className='py-6 md:py-[60px] md:px-[32px] px-[24px]'>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                        <div>
                            <input
                                className="rounded-[30px] shadow appearance-none border w-full p-[20px] text-[14px] font-[300] text-gray-400 bg-[#222] border-[#222] leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Full Name"
                            />
                        </div>
                        <div>
                            <input
                                className="rounded-[30px] shadow appearance-none border w-full p-[20px] text-[14px] text-gray-400 bg-[#222] border-[#222] leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                        <div>
                            <input
                                className="rounded-[30px] shadow appearance-none border w-full p-[20px] text-[14px] text-gray-400 bg-[#222] border-[#222] leading-tight focus:outline-none focus:shadow-outline"
                                id="phone"
                                type="tel"
                                placeholder="Phone"
                            />
                        </div>
                        <div>
                            <CustomDropdown options={carTypes} onSelect={(option) => option} defaultText="Select Car Type" />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                        <div>
                            <CustomDropdown options={locations} onSelect={(option) => option} defaultText="Pickup Location" />
                        </div>
                        <div>
                            <CustomDropdown options={locations} onSelect={(option) => option} defaultText="Dropoff Location" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <textarea
                            className="shadow appearance-none border rounded-[30px] w-full p-[20px] text-[14px] text-gray-400 bg-[#222] border-[#222] leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            placeholder="Your Message"
                            rows={6}
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="w-full rounded-[30px] p-[20px] bg-yellow-general text-[14px] text-black-background hover:bg-white text-text-gray-600 font-[300] py-4 px-4 focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Rent Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    ) : null;
}