'use client';
import Image from "next/image"
import { MdMail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { PiPhoneCallLight } from "react-icons/pi";

function ContactInfo() {
    const info = [
        {
            title: "Email us",
            data: "info@renax.com",
            Icon: MdMail
        },
        {
            title: "Our address",
            data: "Dubai, Water Tower, Office 123",
            Icon: FaMapMarkerAlt
        },
        {
            title: "Opening Hours",
            data: "Mon-Sun: 8 AM - 7 PM",
            Icon: FaRegClock
        },
        {
            title: "Call us",
            data: "+971 52-333-4444",
            Icon: PiPhoneCallLight,
            selected: true
        }
    ]
    return (
        <>
            {
                info.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-start justify-center w-[261px] h-[228px] px-[30px] py-[60px] rounded-2xl group transition-transform duration-300 ease-in-out
                            ${item.selected ? 'bg-yellow-general' : 'bg-[#222] hover:bg-yellow-general'}
                            hover:translate-y-[-10px]`}
                    >
                        <item.Icon className={`${item.selected ? 'text-black' : 'text-yellow-general group-hover:text-black'} w-[35px] h-[35px] mb-[15px]`} />
                        <h2 className={`text-[21px] ${item.selected ? 'text-black' : 'text-white group-hover:text-black'} font-bold`}>{item.title}</h2>
                        <p className={`text-[14px] mt-2 ${item.selected ? 'text-black' : 'text-[#999] group-hover:text-black'}`}>{item.data}</p>
                    </div>
                ))
            }
        </>
    )
}

export default function Contact() {
    return (
        <>
            <div className="bg-[#1B1B1B]">
                <div className="relative w-full h-[661px]">
                    <div className="relative w-full h-full">
                        <Image
                            src="https://utfs.io/f/b1be3e38-4e2d-4d0e-bbb8-395aa47e9ec6-17n.jpg"
                            alt="car detail"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <div className="text-center mb-[4px]">
                                <h2 className="text-yellow-general tracking-[6px] uppercase text-xs">Get in touch</h2>
                            </div>
                            <div className="md:pl-[12px] pl-[8px] text-center">
                                <h2 className="text-[42px] font-bold text-white">Contact <span className="text-[42px] font-bold text-yellow-general">Us</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center mt-[-80px] md:mt-[-100px] gap-8">
                    <ContactInfo />
                </div>
                <div className="w-full py-[120px] flex flex-col items-center md:flex-row justify-center">
                    <div className="flex items-center justify-center flex-wrap md:max-w-[400px] md:w-1/2 px-4 md:px-0 mb-[30px]">
                        <h2 className="text-white text-[21px] font-bold mb-[20px]">Get in touch</h2>
                        <form className="">
                            <input type="text" placeholder="Your Name *" className="text-[#999] md:w-[188px] w-full rounded-[30px] px-[18px] py-[20px] bg-[#222] mb-[15px] text-[14px] font-normal" />
                            <input type="email" placeholder="Your Email *" className="text-[#999] md:ml-6 md:w-[188px] w-full rounded-[30px] px-[18px] py-[20px] bg-[#222] mb-[15px] text-[14px] font-normal" />
                            <input type="text" placeholder="Your Number *" className="text-[#999] md:w-[188px] w-full rounded-[30px] px-[18px] py-[20px] bg-[#222] mb-[15px] text-[14px] font-normal" />
                            <input type="text" placeholder="Subject *" className="text-[#999] md:ml-6 md:w-[188px] w-full rounded-[30px] px-[18px] py-[20px] bg-[#222] mb-[15px] text-[14px] font-normal" />
                            <textarea placeholder="Message *" className="text-[#999] rounded-[30px] px-[18px] py-[20px] bg-[#222] mb-[15px] text-[14px] font-normal w-full h-[121px]"></textarea>
                            <button className="transition-colors ease-in-out delay-400 hover:bg-white bg-yellow-general text-[14px] font-normal text-[#1b1b1b] rounded-[30px] px-[35px] py-[19px]" type="submit">Send Message</button>
                        </form>
                    </div>
                    <div className="flex flex-col items-center justify-start flex-wrap w-full md:max-w-[451px] md:ml-[95px]">
                        <h2 className="text-white text-[21px] font-bold mb-[20px]">Location</h2>
                        <iframe className="rounded-[30px] w-full md:w-[450px] h-[340px] grayscale md:px-none px-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573147.7480448114!2d-74.84628175962355!3d41.04009641088412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25856139b3d33%3A0xb2739f33610a08ee!2s1616%20Broadway%2C%20New%20York%2C%20NY%2010019%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1646760525018!5m2!1str!2str"></iframe>
                    </div>
                </div>

            </div>
        </>
    )
}
