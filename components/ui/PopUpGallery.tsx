import { useRef } from 'react';
import Image from 'next/image';
import { useClickOutside } from '@/hooks/useClickOutside';

export default function PopUpGallery({ isVisible, onClose, carImage }) {
    const imageRef = useRef<HTMLDivElement>(null);

    useClickOutside(imageRef, onClose);

    return (
        <>
            {
                isVisible ? (
                    <div className="fixed inset-0 flex justify-center items-center z-[9999] bg-black bg-opacity-50">
                        <div className="max-w-full mx-4 my-40">
                            <div ref={imageRef} className="text-gray-600 rounded-2xl shadow-lg overflow-hidden relative">
                                <div className="flex justify-center">
                                    <div style={{ maxWidth: 'calc(100vw - 80px)', maxHeight: 'calc(100vh - 80px)' }}>
                                        <Image src={carImage} alt="car" objectFit="contain" className="rounded-2xl" layout="responsive" width={1920} height={1080} />
                                    </div>
                                </div>
                                <button
                                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
                                    onClick={onClose}
                                >
                                    <svg
                                        className="h-6 w-6 text-white"
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
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    );
}
