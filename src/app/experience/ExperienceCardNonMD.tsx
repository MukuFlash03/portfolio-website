import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Experience } from '@/app/lib/types/experience'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Link from 'next/link'

const ExperienceCardNonMD: React.FC<{
  experience: Experience
}> = ({
  experience
}) => {
    return (
      <div key={uuidv4()} className="w-full min-h-[216px] flex flex-col bg-[#182546] py-2 md:py-3 px-3 md:px-5 rounded-[8px] md:rounded-[10px]">
        <div className="flex-grow w-full h-full flex flex-col items-start space-y-1.5 py-1 md:py-3 pr-2 md:pr-8">
          <h3 className="text-sm md:text-base font-medium text-[#57D7D5] space-x-2">
            {experience.title}
          </h3>
          <h3 className="text-sm md:text-base font-medium text-[#57D7D5] space-x-2">
            {experience.company}
            <Link href={experience.url} target="_blank" rel="noopener noreferrer" className="px-2 mt-1 md:mt-4 inline-block">
              <FaExternalLinkAlt className="text-white text-sm md:text-base hover:text-blue-400 transition-colors duration-300" />
            </Link>
          </h3>
          <p className="text-xs md:text-sm font-medium text-[#B7BEBE]">{experience.role}</p>
          <div className="w-full flex justify-between items-center">
            <p className="text-xs md:text-sm text-[#8BA4D0]">{experience.location}</p>
            <p className="text-xs md:text-sm text-[#8BA4D0]">{experience.duration}</p>
          </div>
          <ul className="text-xs md:text-sm space-y-1.5 text-[#879BBD] list-disc pl-5">
            {experience.description.map((sentence) => (
              <li key={uuidv4()}>{sentence}</li>
            ))}
          </ul>
        </div>
        <div className="w-full flex flex-col items-center py-4 p-1.25 mt-2.5 md:mt-3.5">
          <div className="flex flex-wrap justify-center gap-2 mt-2 md:mt-4">
            {experience.skills.map((skill) => (
              <span key={uuidv4()} className="bg-[#1B344D] text-[#57D7D5] px-2 md:px-2 py-1 rounded-full text-xs md:text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

export default ExperienceCardNonMD