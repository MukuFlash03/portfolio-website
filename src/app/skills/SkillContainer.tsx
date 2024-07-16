import React from 'react'
import SkillCard from './SkillCard'
import { SkillCategory } from '@/app/lib/types/skills'

const SkillContainer: React.FC<{
  skillsData: SkillCategory[]
}> = ({
  skillsData,
}) => {
    return (
      <div className="w-full flex-grow px-0.5 md:px-[10px]">
        {skillsData.map((skillset, index) => (
          <SkillCard
            key={index}
            id={index}
            skillset={skillset}
          />
        ))}
      </div>
    )
  }

export default SkillContainer