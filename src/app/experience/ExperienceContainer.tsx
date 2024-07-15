import React from 'react'
import ExperienceCard from './ExperienceCard'
import experienceData from '@/app/lib/data/experience'

const ExperienceContainer: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-2.5 px-[90px] py-2.5">
      {experienceData.map((experience, index) => (
        <ExperienceCard
          key={index}
          experience={experience}
        />
      ))}
    </div>
  )
}

export default ExperienceContainer