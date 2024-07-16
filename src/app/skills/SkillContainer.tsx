import React from 'react'
import SkillCard_MD from './SkillCard_MD'
import SkillCard_NonMD from './SkillCard_NonMD'
import { SkillCategory } from '@/app/lib/types/skills'

const SkillContainer: React.FC<{
  skillsData: SkillCategory[]
}> = ({
  skillsData,
}) => {
    return (
      <div className="w-full flex-grow px-0.5 md:px-[10px]">
        {skillsData.map((skillset, index) => (
          <div key={index} className="w-full">
            <div className="hidden md:block">
              <SkillCard_MD key={index} id={index} skillset={skillset} />
            </div>
            <div className="block md:hidden">
              <SkillCard_NonMD key={index} id={index} skillset={skillset} />
            </div>
          </div>
        ))}
      </div>
    )
  }

export default SkillContainer