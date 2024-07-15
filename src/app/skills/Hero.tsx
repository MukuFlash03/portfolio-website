import React from 'react'
import SkillContainer from './SkillContainer'
import skillsData from '@/app/lib/data/skills'
import Title from '@/app/common/Title'

const Hero: React.FC = () => {
  return (
    <section className="flex-grow w-full">
      <div className="w-full flex-grow flex flex-col items-start space-y-2.5 px-24">
        <div className="w-full flex-grow flex-col flex justify-center items-center space-y-5">
          <Title title="Skills" />
          <SkillContainer skillsData={skillsData} />
        </div>
      </div>
    </section >
  )
}

export default Hero
