import { PiPhoneCallLight } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import FooterSocialButton from "../ui/FooterSocialButton";

export default function Footer() {
  return (
    <footer className="text-white bg-black pb-24 pt-[85px] overflow-hidden">
      <div className="sm:mx-[100px] md:mx-[268px] px-4 md:px-0">
        <div className="flex flex-col sm:flex-row md:flex-row justify-center items-start sm:items-center md:items-center sm:w-full md:w-full sm:h-auto md:h-[102px] border-[1px] border-[#222] rounded-[40px] sm:px-8 md:px-12 py-4 mx-4">
          <div className="flex flex-row items-center self-start sm:self-center md:self-center sm:flex-row md:flex-row sm:items-center md:items-center my-2 ml-8">
            <div className="bg-yellow-general p-4 rounded-[50%] sm:mb-0 sm:mr-4 md:mb-0 md:mr-4">
              <PiPhoneCallLight className="w-6 h-6 text-black" />
            </div>
            <div className="text-start sm:text-left md:text-left sm:ml-0 md:ml-0 ml-4">
              <h2>Call us</h2>
              <p>+971 52-333-4444</p>
            </div>
          </div>
          <div className="sm:block md:block border-[1px] border-[#131313] sm:h-20 md:h-20 sm:w-auto md:w-auto w-full sm:mx-10 md:mx-20 sm:my-0 md:my-0 my-8"></div> {/* Vertical Line with space */}
          <div className="flex flex-row items-center self-start sm:self-center md:self-center sm:flex-row md:flex-row sm:items-center md:items-center my-2 ml-8">
            <div className="bg-yellow-general p-4 rounded-[50%] sm:mb-0 sm:mr-4 md:mb-0 md:mr-4">
              <IoIosMail className="w-6 h-6 text-black" />
            </div>
            <div className="text-start sm:text-left md:text-left sm:ml-0 md:ml-0 ml-4">
              <h2>Write to us</h2>
              <p>info@renax.com</p>
            </div>
          </div>
          <div className="sm:block md:block border-[1px] border-[#131313] sm:h-20 md:h-20 sm:w-auto md:w-auto w-full sm:mx-10 md:mx-20 sm:my-0 md:my-0 my-8"></div> {/* Vertical Line with space */}
          <div className="flex flex-row items-center self-start sm:self-center md:self-center sm:flex-row md:flex-row sm:items-center md:items-center my-2 ml-8">
            <div className="bg-yellow-general p-4 rounded-[50%] sm:mb-0 sm:mr-4 md:mb-0 md:mr-4">
              <FaMapMarkerAlt className="w-6 h-6 text-black" />
            </div>
            <div className="text-start sm:text-left md:text-left sm:ml-0 md:ml-0 ml-4">
              <h2>Address</h2>
              <p>Dubai, Water Tower, Office 123</p>
            </div>
          </div>
        </div>
        <div className="pt-[65px] flex flex-col md:flex-row px-6 justify-around">
            <div className="md:max-w-[356px]">
                <Image src="https://utfs.io/f/72a2540d-3386-4094-a4fb-6e063717745e-skwtpw.png" width={130} height={18.3} alt="logo image" />
                <p className="my-8 font-normal text-[14px]">Rent a car imperdiet sapien porttito the bibenum ellentesue the commodo erat nesuen.</p>
                <div className="flex gap-4">
                    <FooterSocialButton icon={BiLogoFacebook} />
                    <FooterSocialButton icon={FaWhatsapp} />
                    <FooterSocialButton icon={FaYoutube} />
                </div>
            </div>
            <div className="md:max-w-[356px] pt-12 mx:pt-0">
                <h2 className="text-[21px] font-bold mb-[15px]">Subscribe</h2>
                <p className="font-normal text-[14px]">Want to be notified about our services. Just sign up and we&apos;ll send you a notification by email.</p>
                <div className="flex justify-between align-center items-center border-[1px] border-yellow-general rounded-[40px] p-2 md:mt-4 mt-8">
                    <input type="text" placeholder="Email Address" className="pl-4 text-[14px] bg-black outline-none focus:border-none" />
                    <button className="bg-yellow-general rounded-[50%] p-4">
                        <BsArrowUpRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
