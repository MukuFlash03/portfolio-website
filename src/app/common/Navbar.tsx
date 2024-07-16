'use client'

import React from 'react';
import Image from 'next/image'
import logoFlash from '@/app/assets/flash.svg'
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // 768px is the default 'md' breakpoint in Tailwind
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main>
      <div className="w-full h-[122px] flex items-center justify-between px-4 md:px-24 py-4">
        <div className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] flex-shrink-0">
          <Image src={logoFlash} width={60} height={60} alt="Flash Logo" className="rounded-[100px] md:w-[70px] md:h-[70px]" />
        </div>

        <div className="hidden md:flex space-x-3.5">
          {Object.entries(navItems).map(([key, item]) => (
            <Link key={key} href={item.link} className="text-[14px] md:text-[18px] leading-[40px] font-medium text-[#E3E3E3]">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#E3E3E3] p-2">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hiddne fixed top-[122px] left-0 right-0 bottom-0 bg-[#182546] z-50 overflow-y-auto">
            <div className="flex flex-col h-full justify-center items-center">
              {Object.entries(navItems).map(([key, item]) => (
                <a
                  key={key}
                  href={item.link}
                  className="block py-4 px-4 text-[24px] font-medium text-[#E3E3E3] hover:text-[#57D7D5]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Navbar;