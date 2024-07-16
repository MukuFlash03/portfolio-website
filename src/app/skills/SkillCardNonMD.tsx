import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'
import { SkillCategory } from '@/app/lib/types/skills';

const SkillCardNonMD: React.FC<{
  skillset: SkillCategory
}> = ({
  skillset: { category, skills },
}) => {
    return (
      <div key={uuidv4()} className="w-full min-h-[126px] flex flex-col space-y-1 md:space-y-2 bg-[#182546] mb-1 md:mb-5 py-2 md:py-[13px] rounded-md md:rounded-lg">
        <div className="w-full md:w-[195px] h-auto py-2 md:py-4 flex items-center justify-center px-2 md:px-[27px]">
          <h3 className="text-sm md:text-lg font-semibold text-[#E3E3E3] text-center">{category}</h3>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 px-1 md:px-5">
          {skills.map((skill) => (
            <div key={uuidv4()} className="flex flex-col items-center justify-center">
              <div className="w-full h-[60px] md:h-[80px] flex items-center justify-center p-1 md:p-[12px]">
                <Image
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-8 h-8 md:w-12 md:h-12"
                />
              </div>
              <div className="w-full h-[20px] flex items-center justify-center">
                <span className="text-xs md:text-sm leading-[20px] font-medium md:font-semibold tracking-[0.05em] text-center text-white">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

export default SkillCardNonMD