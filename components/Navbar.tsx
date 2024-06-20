'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Home', 'About', 'Services', 'Cars', 'Contact'];

  return (
    <nav className="absolute top-0 left-0 w-full z-10 md:px-[351px]">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full">
        <div className='flex items-center w-full h-[84px] justify-between px-[15px] md:px-0 md:gap-48 py-4'>
          <div className="p-2 md:mr-auto">
            <Link href="/">
              <Image src="https://utfs.io/f/72a2540d-3386-4094-a4fb-6e063717745e-skwtpw.png" width={130} height={18.3} alt="logo image" />
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        <ul className={`md:flex md:items-center md:gap-4 ${isOpen ? 'flex flex-col bg-black w-full h-auto py-8 gap-4 text-sm' : 'hidden'} md:block`}>
          {menuItems.map((item, index) => (
            <li key={index} className="text-white cursor-pointer hover:text-yellow-600 px-4 py-2 md:py-8">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
