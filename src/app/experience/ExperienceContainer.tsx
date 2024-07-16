import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import ExperienceCardMD from './ExperienceCardMD'
import ExperienceCardNonMD from './ExperienceCardNonMD'
import { Experience } from '@/app/lib/types/experience'

const ExperienceContainer: React.FC<{
  experienceData: Experience[]
}> = ({
  experienceData,
}) => {
    return (
      <div className="w-full flex flex-col items-center space-y-2.5 px-[2px] md:px-[10px] py-1 md:py-2.5">
        {experienceData.map((experience, index) => (
          <div key={uuidv4()} className="w-full">
            <div className="hidden md:block">
              <ExperienceCardMD experience={experience} />
            </div>
            <div className="block md:hidden">
              <ExperienceCardNonMD experience={experience} />
            </div>
          </div>
        ))}
      </div>
    )
  }

export default ExperienceContainer