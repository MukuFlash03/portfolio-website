import React from 'react'
import ExperienceCard from './ExperienceCard'
import Experience from '@/app/lib/types/experience'

const ExperienceContainer: React.FC<{
  experienceData: Experience[]
}> = ({
  experienceData,
}) => {
    return (
      <div className="w-full flex flex-col items-center space-y-2.5 px-[10px] py-2.5">
        {experienceData.map((experience, index) => (
          <ExperienceCard
            key={index}
            id={index}
            experience={experience}
          />
        ))}
      </div>
    )
  }

export default ExperienceContainer