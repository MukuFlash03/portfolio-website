import React from "react";
import Image from "next/image";
import { Project } from '@/app/lib/types/project';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard: React.FC<{
  index: number,
  project: Project,
}> = ({
  index,
  project,
}) => {
    return (
      // <div key={index} className="flex-shrink-0 w-[480px] h-[400px] flex flex-col items-center space-y-5 p-10 relative group overflow-hidden">
      //   <h3 className="w-full text-center text-[20px] leading-[40px] font-semibold text-[#E3E3E3]">
      //     {project.title}
      //   </h3>
      // <div className="relative w-[480px] h-[400px] group">
      <div key={index} className="flex-shrink-0 w-[480px] h-[400px] flex flex-col items-center space-y-5 p-10 relative group overflow-hidden">
        {/* <h3 className="absolute top-5 left-0 right-0 text-center text-[28px] leading-[40px] font-semibold text-[#E3E3E3] z-10"> */}
        <h3 className="absolute top-5 left-0 right-0 text-center text-xl leading-[40px] font-semibold text-[#E3E3E3] z-10 group-hover:opacity-0 transition-opacity duration-300">
          {/* <h3 className="absolute top-5 left-0 right-0 text-center text-xl leading-[40px] font-semibold text-[#E3E3E3] z-10"> */}
          {project.title}
        </h3>
        <div className="w-[440px] h-[300px] relative">
          <Image
            src={project.image}
            layout="fill"
            objectFit="cover"
            alt={project.title}
          />
        </div>
        {/* <div className="absolute inset-0 rounded-[10px] bg-[#2C0561] bg-opacity-85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-center p-4 space-y-4">
            <p className="text-lg font-medium leading-relaxed">{project.title}</p> */}
        {/* <div className="absolute inset-0 rounded-[10px] bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"> */}
        <div className="absolute inset-0 top-0 bottom-[20px] rounded-[10px] bg-black bg-opacity-85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Overlay content */}
          <div className="text-white text-center p-4 space-y-4">
            <h3 className="absolute top-8 left-0 right-0 text-center text-xl leading-[40px] font-semibold">
              {project.title}
            </h3>
            <p className="text-sm font-medium leading-relaxed">{project.date}</p>
            <p className="text-base font-medium leading-relaxed">{project.info}</p>
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-blue-400">Tech Stack:</span> {project.tags.join(', ')}
            </p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
              <FaExternalLinkAlt className="text-white text-2xl hover:text-blue-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div >
    );
  };

export default ProjectCard;