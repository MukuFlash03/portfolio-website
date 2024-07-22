import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import SkillCardMD from './SkillCardMD'
import SkillCardNonMD from './SkillCardNonMD'
import { SkillCategory } from '@/app/lib/types/skills'

const SkillContainer: React.FC<{
  skillsData: SkillCategory[]
}> = ({
  skillsData,
}) => {
    return (
      <div className="w-full flex-grow px-0.5 md:px-[10px]">
        {skillsData.map((skillset) => (
          <div key={uuidv4()} className="w-full">
            <div className="hidden md:block">
              <SkillCardMD skillset={skillset} />
            </div>
            <div className="block md:hidden">
              <SkillCardNonMD skillset={skillset} />
            </div>
          </div>
        ))}
      </div>
    )
  }

export default SkillContainer