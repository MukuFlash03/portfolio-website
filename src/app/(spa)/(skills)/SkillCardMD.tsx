import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'
import { SkillCategory } from '@/app/lib/types/skills';

const SkillCardMD: React.FC<{
  skillset: SkillCategory
}> = ({
  skillset: { category, skills },
}) => {
    return (
      <div key={uuidv4()} className="w-full max-w-7xl mx-auto min-h-[126px] flex flex-row bg-[#182546] mb-5 py-1 md:py-[13px] rounded-md md:rounded-lg">
        <div className="w-full md:w-[195px] h-[94px] flex items-center justify-center px-2 md:px-[27px]">
          <h3 className="text-sm md:text-lg font-semibold text-[#E3E3E3] text-center">{category}</h3>
        </div>
        <div className="flex-grow flex flex-wrap justify-start gap-x-2 md:gap-x-[45px] gap-y-1 md:gap-y-4 px-1 md:px-5">
          {skills.map((skill) => (
            <div key={uuidv4()} className="flex-basis-[calc(20%-1rem)] md:flex-basis-[calc(16.666%-1rem)] flex flex-col items-center">
              <div className="w-full md:w-[58px] h-[80px] flex items-center justify-center p-1 md:p-[12px]">
                <Image
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-6 h-6 md:w-12 md:h-12"
                />
              </div>
              <div className="w-full md:w-[52px] h-[20px] flex items-center justify-center">
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

export default SkillCardMD