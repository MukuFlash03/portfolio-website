import React from 'react'
import Image from 'next/image'
import { SkillCategory } from '@/app/lib/types/skills';

const SkillCard: React.FC<{
  key: number;
  id: number;
  skillset: SkillCategory
}> = ({
  id,
  skillset: { category, skills },
}) => {
    return (
      <div key={id} className="w-full min-h-[126px] flex bg-[#182546] mb-5 py-[13px] rounded-lg">
        <div className="w-[195px] h-[94px] flex items-center justify-center px-[27px]">
          <h3 className="text-[18px] font-semibold text-[#E3E3E3] text-center">{category}</h3>
        </div>
        <div className="flex-grow flex flex-wrap gap-x-[45px] gap-y-4 px-5">
          {skills.map((skill, skillIndex) => (
            <div key={skillIndex} className="w-[58px] h-[100px] flex flex-col items-center">
              <div className="w-[58px] h-[80px] flex items-center justify-center p-[12px]">
                <Image
                  src={skill.logo}
                  width={56}
                  height={56}
                  alt={`${skill} logo`}
                />
              </div>
              <div className="w-[52px] h-[20px] flex items-center justify-center">
                <span className="text-[14px] leading-[20px] font-semibold tracking-[0.05em] text-center text-white">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

export default SkillCard