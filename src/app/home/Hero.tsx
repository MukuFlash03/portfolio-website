import React from 'react'
import Image from 'next/image'
import avatar from '@/app/assets/avatar_1.svg'
import linkedin from '@/app/assets/contact/linkedin.svg'
import github from '@/app/assets/contact/github.svg'
import gmail from '@/app/assets/contact/gmail.svg'
import wordpress from '@/app/assets/contact/wordpress.svg'

const Hero: React.FC = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: linkedin, url: 'https://www.linkedin.com/in/mukulm03', width: 55, height: 55 },
    { name: 'GitHub', icon: github, url: 'https://github.com/MukuFlash03', width: 55, height: 55 },
    { name: 'Gmail', icon: gmail, url: 'mailto:mukulm2010@gmail.com', width: 55, height: 48 },
    { name: 'Wordpress', icon: wordpress, url: 'https://mukulcodes.wordpress.com/', width: 55, height: 55 },
  ];

  return (
    <section className="flex-grow w-full">
      <div className="w-full flex-grow flex flex-col items-start space-y-2.5 px-24">
        <div className="w-full flex-grow flex justify-center items-center">
          <div className="w-1/2 h-full flex flex-col justify-center items-start space-y-10 px-5 py-10">
            <div className="w-full flex flex-col items-center space-y-10 px-5">
              <h1 className="w-full text-center text-[36px] leading-[40px] font-bold text-[#E3E3E3]">
                Hi, Mukul C. Mahadik !
              </h1>
              <ul className="w-full text-left text-[20px] leading-[40px] font-medium text-[#E3E3E3] list-disc list-inside">
                <li>Currently based in San Francisco, actively attending tech talks, meetups, networking events, and meeting with different startup founders.</li>
                <li>Open to connecting with founders and actively seeking job opportunities to contribute to.</li>
              </ul>
            </div>
            <div className="w-full flex-grow flex items-baseline justify-center space-x-20 px-5">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={link.icon}
                    width={link.width}
                    height={link.height}
                    alt={`${link.name} logo`}
                  />
                </a>
              ))}
            </div>
            <div className="w-full flex flex-col items-center justify-center space-y-2.5 px-5 py-2.5">
              <button className="w-[135px] h-[50px] bg-[#4C0693] rounded-full flex items-center justify-center">
                <span className="text-white">View Resume</span>
              </button>
            </div>
          </div>
          <div className="w-1/2 h-full flex justify-center items-center space-x-2.5 py-[91px]">
            <div className="w-full h-[302px] overflow-hidden">
              <Image
                src={avatar}
                width={624}
                height={302}
                alt="Hero Image"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
