import React from 'react'
import Image from 'next/image'
import avatar from '@/app/assets/avatar_1.svg'
import Contact from './Contact'
import Intro from './Intro'
import Button from '@/app/common/Button'
import introData from "@/app/lib/data/intro";
import Avatar from './Avatar'
import { PiSoccerBallFill } from "react-icons/pi";
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className="flex-grow w-full">
      <div className="w-full flex-grow flex flex-col items-start space-y-2.5 px-24">
        <div className="w-full flex-grow flex justify-center items-center">
          <div className="w-1/2 h-full flex flex-col justify-center items-start space-y-10 px-5 py-10">
            <Intro introData={introData} />
            <Contact />
            <Button label="View Resume" />
          </div>
          <Avatar src={avatar} />
        </div>
        <div className="w-full flex flex-col justify-center items-center py-5 text-base">
          <p className="text-center text-[#E3E3E3]">
            Designed in <Link href='https://www.figma.com/' target="_blank"><span className='text-green-400 font-semibold'>Figma</span></Link> ⭐
            Coded in <Link href='https://code.visualstudio.com/' target="_blank"><span className='text-yellow-400 font-semibold'>VS Code</span></Link>
          </p>
          <p className="text-center text-[#E3E3E3]">
            Built with <Link href='https://nextjs.org/' target="_blank"><span className='text-orange-400 font-semibold'>Next.js</span></Link> and <Link href='https://tailwindcss.com/' target="_blank"><span className='text-teal-300 font-semibold'>Tailwind CSS</span></Link>
          </p>
          <p className="text-center text-[#E3E3E3]">
            Deployed with <Link href='https://vercel.com/' target="_blank"><span className='text-pink-300 font-semibold'>Vercel</span></Link>
          </p>
        </div>
      </div>
    </section >
  )
}

export default Hero
