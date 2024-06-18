import { PiPhoneCallLight } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white bg-black py-8">
      <div className="sm:mx-[100px] md:mx-[268px]">
        <div className="flex flex-col sm:flex-row md:flex-row justify-center items-start sm:items-center md:items-center sm:w-full md:w-full sm:h-auto md:h-[102px] border-[1px] border-[#222] rounded-[40px] sm:px-8 md:px-12 py-4 mx-4">
          <div className="flex flex-row items-center self-start sm:self-center md:self-center sm:flex-row md:flex-row sm:items-center md:items-center my-2 ml-8">
            <div className="bg-yellow-general p-4 rounded-[50%] sm:mb-0 sm:mr-4 md:mb-0 md:mr-4">
              <PiPhoneCallLight className="w-6 h-6" />
            </div>
            <div className="text-start sm:text-left md:text-left sm:ml-0 md:ml-0 ml-4">
              <h2>Call us</h2>
              <p>+971 52-333-4444</p>
            </div>
          </div>
          <div className="sm:block md:block border-[1px] border-[#131313] sm:h-20 md:h-20 sm:w-auto md:w-auto w-full sm:mx-10 md:mx-20 sm:my-0 md:my-0 my-8"></div> {/* Vertical Line with space */}
          <div className="flex flex-row items-center self-start sm:self-center md:self-center sm:flex-row md:flex-row sm:items-center md:items-center my-2 ml-8">
            <div className="bg-yellow-general p-4 rounded-[50%] sm:mb-0 sm:mr-4 md:mb-0 md:mr-4">
              <IoIosMail className="w-6 h-6" />
            </div>
            <div className="text-start sm:text-left md:text-left sm:ml-0 md:ml-0 ml-4">
              <h2>Write to us</h2>
              <p>info@renax.com</p>
            </div>
          </div>
          <div className="sm:block md:block border-[1px] border-[#131313] sm:h-20 md:h-20 sm:w-auto md:w-auto w-full sm:mx-10 md:mx-20 sm:my-0 md:my-0 my-8"></div> {/* Vertical Line with space */}
          <div className="flex flex-row items-center self-start sm:self-center md:self-center sm:flex-row md:flex-row sm:items-center md:items-center my-2 ml-8">
            <div className="bg-yellow-general p-4 rounded-[50%] sm:mb-0 sm:mr-4 md:mb-0 md:mr-4">
              <FaMapMarkerAlt className="w-6 h-6" />
            </div>
            <div className="text-start sm:text-left md:text-left sm:ml-0 md:ml-0 ml-4">
              <h2>Address</h2>
              <p>Dubai, Water Tower, Office 123</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
