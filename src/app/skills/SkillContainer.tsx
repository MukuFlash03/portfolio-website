import React from 'react'
import SkillCard from './SkillCard'
import skillsData from '@/app/lib/data/skills'

const SkillContainer: React.FC = () => {
  return (
    <div className="w-full flex-grow px-[10px]">
      {skillsData.map((skillset, index) => (
        <SkillCard
          key={index}
          category={skillset.category}
          skills={skillset.skills}
        />
      ))}
    </div>
  )
}

export default SkillContainer