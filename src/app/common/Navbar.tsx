'use client'

import React from 'react';
import Image from 'next/image'
import logoFlash from '@/app/assets/flash.svg'
import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const navItems = {
    home: {
      label: 'Home',
      link: '/',
    },
    about: {
      label: 'About',
      link: '/about',
    },
    experience: {
      label: 'Experience',
      link: '/experience',
    },
    projects: {
      label: 'Projects',
      link: '/projects',
    },
    skills: {
      label: 'Skills',
      link: '/skills',
    }
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main>
      {/* <div className="w-full h-[122px] flex flex-col items-center justify-center space-y-10 px-24 py-4">
        <div className="w-full h-[90px] flex flex-row items-center justify-between px-2.5 mx-24">
          <div className="w-[90px] h-[90px] flex items-start space-x-2.5 p-2.5">
            <Image src={logoFlash} width={70} height={70} alt="Flash Logo" className="rounded-[100px]" />
          </div>
          <div className="w-full h-[18px] flex justify-end items-center space-x-3.5">
            {Object.entries(navItems).map(([key, item]) => (
              <a key={key} href={item.link} className="text-[18px] leading-[40px] font-medium text-[#E3E3E3]">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div> */}
      <div className="w-full h-[122px] flex items-center justify-between px-24 py-4">
        <div className="w-[90px] h-[90px] flex-shrink-0">
          <Image src={logoFlash} width={70} height={70} alt="Flash Logo" className="rounded-[100px]" />
        </div>
        <div className="hidden md:flex space-x-3.5">
          {Object.entries(navItems).map(([key, item]) => (
            // <a key={key} href={item.link} className="text-[14px] md:text-[18px] leading-[40px] font-medium text-[#E3E3E3]">
            //   {item.label}
            // </a>
            <Link key={key} href={item.link} className="text-[14px] md:text-[18px] leading-[40px] font-medium text-[#E3E3E3]">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          {/* Hamburger icon */}
          <button onClick={() => {
            setIsMenuOpen(!isMenuOpen)
            console.log(isMenuOpen);

          }} className="text-[#E3E3E3]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#182546] py-4">
            {Object.entries(navItems).map(([key, item]) => (
              <a key={key} href={item.link} className="block py-2 px-4 text-[18px] font-medium text-[#E3E3E3]">
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Navbar;