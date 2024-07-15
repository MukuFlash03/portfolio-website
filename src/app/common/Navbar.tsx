import React from 'react';
import Image from 'next/image'
import logoFlash from '@/app/assets/flash.svg'

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

  return (
    <main>
      <div className="w-full h-[122px] flex flex-col items-center justify-center space-y-10 px-24 py-4">
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
      </div>
    </main>
  );
}

export default Navbar;