import React from 'react'
import aboutData from '@/app/lib/data/about'
import TextContent from '@/app/(spa)/(about)/TextContent'
import Title from '@/app/common/Title'

const Hero: React.FC = () => {
  return (
    <section className="flex-grow w-full">
      <div className="w-full flex-grow flex flex-col items-start space-y-2.5 px-2 md:px-24">
        <div className="w-full flex-grow flex justify-center items-center">
          <div className="w-full h-full flex flex-col justify-center items-start space-y-2 md:space-y-4 px-2 md:px-5 py-4 md:py-10">
            <Title title="Get To Know Me 👨🏻‍💻" />
            <TextContent aboutData={aboutData} />
          </div>
        </div>
      </div>
    </section >
  )
}

export default Hero
