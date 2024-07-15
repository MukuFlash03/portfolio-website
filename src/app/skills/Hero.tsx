import React from 'react'
import SkillContainer from './SkillContainer'

const Hero: React.FC = () => {
  return (
    <section className="flex-grow w-full">
      <div className="w-full flex-grow flex flex-col items-start space-y-2.5 px-24">
        <div className="w-full flex-grow flex-col flex justify-center items-center">
          <div className="w-full flex-grow flex flex-col items-center space-y-5">
            <h2 className="w-full text-center text-[32px] leading-[40px] font-semibold text-[#E3E3E3]">
              Skills
            </h2>
          </div>
          <SkillContainer />
        </div>
      </div>
    </section >
  )
}

export default Hero
