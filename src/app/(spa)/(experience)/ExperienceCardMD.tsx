import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Experience } from '@/app/lib/types/experience'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Link from 'next/link'

const ExperienceCardMD: React.FC<{
  experience: Experience
}> = ({
  experience
}) => {
    return (
      <div key={uuidv4()} className="w-full min-h-[216px] flex bg-[#182546] pb-4 px-2 md:px-5 rounded-[8px] md:rounded-[10px]">
        <div className="flex-grow w-[70%] h-full flex flex-col items-start space-y-2.5 py-1 md:py-2 pr-2 md:pr-8">
          <h3 className="text-sm md:text-base font-medium text-[#57D7D5] space-x-2">
            {experience.title}
            <span className='text-[#E3E3E3]'> @ </span>
            {experience.company}
            <Link href={experience.url} target="_blank" rel="noopener noreferrer" className="mt-1 md:mt-4 inline-block">
              <FaExternalLinkAlt className="text-white text-sm md:text-base hover:text-blue-400 transition-colors duration-300" />
            </Link>
          </h3>
          <p className="text-xs md:text-[14px] font-medium text-[#B7BEBE]">{experience.role}</p>
          <ul className="text-xs md:text-[14px] space-y-1.5 text-[#879BBD] list-disc pl-5">
            {experience.description.map((sentence) => (
              <li key={uuidv4()}>{sentence}</li>
            ))}
          </ul>
        </div>
        <div className="w-[30%] h-[187px] flex flex-col items-start py-2 md:py-3 mt-2.5 md:mt-3.5">
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-xs md:text-sm text-[#8BA4D0]">{experience.location}</p>
            <p className="text-xs md:text-sm text-[#8BA4D0]">{experience.duration}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 md:mt-4">
            {experience.skills.map((skill) => (
              <span key={uuidv4()} className="bg-[#1B344D] text-[#57D7D5] px-1 md:px-2 py-1 rounded-full text-xs md:text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

export default ExperienceCardMD