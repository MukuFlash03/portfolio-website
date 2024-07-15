import React from 'react'
import Image from 'next/image'
import avatar from '@/app/assets/avatar_1.svg'

const Hero: React.FC = () => {
  return (
    <section className="h-[682px] w-full">
      <div className="w-full h-[682px] flex flex-col items-start space-y-2.5 px-24">
        <div className="w-full h-[656px] flex justify-center items-center">
          <div className="w-1/2 h-full flex flex-col justify-center items-start space-y-10 px-5 py-10">
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
