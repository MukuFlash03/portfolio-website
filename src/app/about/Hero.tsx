import React from 'react'
import aboutData from '@/app/lib/data/about'
import About from './About'
import Title from '@/app/common/Title'

const Hero: React.FC = () => {
  return (
    <section className="flex-grow w-full">
      <div className="w-full flex-grow flex flex-col items-start space-y-2.5 px-24">
        <div className="w-full flex-grow flex justify-center items-center">
          <div className="w-full h-full flex flex-col justify-center items-start space-y-4 px-5 py-10">
            <Title title="Get To Know Me 👨🏻‍💻" />
            <About aboutData={aboutData} />
          </div>
        </div>
      </div>
    </section >
  )
}

export default Hero
