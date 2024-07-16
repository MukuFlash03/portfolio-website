import React from 'react'
import ExperienceCard_MD from './ExperienceCard_NonMD'
import ExperienceCard_NonMD from './ExperienceCard_MD'
import { Experience } from '@/app/lib/types/experience'

const ExperienceContainer: React.FC<{
  experienceData: Experience[]
}> = ({
  experienceData,
}) => {
    return (
      <div className="w-full flex flex-col items-center space-y-2.5 px-[2px] md:px-[10px] py-1 md:py-2.5">
        {experienceData.map((experience, index) => (
          <div key={index} className="w-full">
            <div className="hidden md:block">
              <ExperienceCard_MD key={index}
                id={index}
                experience={experience} />
            </div>
            <div className="block md:hidden">
              <ExperienceCard_NonMD key={index}
                id={index}
                experience={experience} />
            </div>
          </div>
        ))}
      </div>
    )
  }

export default ExperienceContainer