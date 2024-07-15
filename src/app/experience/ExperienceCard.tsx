import React from 'react'

const ExperienceCard: React.FC<{
  key: number,
  experience: {
    company: string
    title: string
    role: string
    duration: string
    location: string
    skills: string[]
    description: string[]
  }
}> = ({
  key,
  experience
}) => {
    return (
      <div key={key} className="w-full min-h-[216px] flex bg-[#182546] px-5 rounded-[10px]">
        <div className="flex-grow w-[70%] h-full flex flex-col items-start space-y-2.5 py-5 pr-8">
          <h3 className="text-[16px] font-medium text-[#57D7D5]">{experience.title} @ {experience.company}</h3>
          <p className="text-[15px] font-medium text-[#B7BEBE]">{experience.role}</p>
          <ul className="text-[14px] text-[#879BBD] list-disc pl-5">
            {experience.description.map((sentence, index) => (
              <li key={index}>{sentence}</li>
            ))}
          </ul>
        </div>
        <div className="w-[30%] h-[187px] flex flex-col items-start justify-between p-1.25 mt-3.5">
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-[15px] text-[#8BA4D0]">{experience.location}</p>
            <p className="text-[15px] text-[#8BA4D0]">{experience.duration}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, skillIndex) => (
              <span key={skillIndex} className="bg-[#1B344D] text-[#57D7D5] px-2 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

export default ExperienceCard