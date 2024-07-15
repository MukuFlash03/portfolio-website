import React from 'react'
import Image from 'next/image'
import avatar from '@/app/assets/avatar_1.svg'
import Contact from './Contact'
import Intro from './Intro'
import Button from '@/app/common/Button'
import introData from "@/app/lib/data/intro";
import Avatar from './Avatar'

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
      </div>
    </section >
  )
}

export default Hero
