import React from 'react'
import Image from 'next/image'
import avatar from '@/app/assets/avatar_1.svg'
import contactsData from '@/app/lib/data/contacts'

const Hero: React.FC = () => {
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
              {contactsData.map((contact, index) => (
                <a key={index} href={contact.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={contact.logo}
                    width={contact.width}
                    height={contact.height}
                    alt={`${contact.name} logo`}
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
    </section >
  )
}

export default Hero
