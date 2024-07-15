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
      // Text placement correct without responsive design. 
      // Uncommented in use code has responsive but text placements are messed up for overlay cards.
      // <div key={index} className="flex-shrink-0 w-[480px] h-[400px] flex flex-col items-center space-y-5 p-10 relative group overflow-hidden">
      //   <h3 className="absolute top-5 left-0 right-0 text-center text-base sm:text-xl leading-[40px] font-semibold text-[#E3E3E3] z-10 group-hover:opacity-0 transition-opacity duration-300">
      //     {project.title}
      //   </h3>
      //   <div className="w-[440px] h-[300px] relative">
      //     <Image
      //       src={project.image}
      //       layout="fill"
      //       objectFit="cover"
      //       alt={project.title}
      //     />
      //   </div>
      // <div className="flex-shrink-0 w-full sm:w-[480px] h-[300px] sm:h-[400px] flex flex-col items-center space-y-5 p-10 relative group overflow-hidden">
      <div className="flex-shrink-0 w-full sm:w-[480px] h-[300px] sm:h-[400px] flex flex-col items-center space-y-5 p-10 relative group overflow-hidden">
        <h3 className="absolute top-5 left-0 right-0 text-center text-base sm:text-xl leading-[30px] sm:leading-[40px] font-semibold text-[#E3E3E3] z-10 group-hover:opacity-0 transition-opacity duration-300">
          {project.title}
        </h3>
        <div className="w-full sm:w-[440px] h-[200px] sm:h-[300px] relative">
          <Image
            src={project.image}
            layout="fill"
            objectFit="cover"
            alt={project.title}
          />
        </div>
        <div className="absolute inset-0 top-0 bottom-[20px] rounded-[10px] bg-black bg-opacity-85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Overlay content */}
          <div className="text-white text-center p-4 space-y-4">
            <h3 className="absolute top-8 left-0 right-0 text-center text-base sm:text-xl leading-[40px] font-semibold">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium leading-relaxed">{project.date}</p>
            <p className="text-sm sm:text-base font-medium leading-relaxed">{project.info}</p>
            <p className="text-xs sm:text-sm text-gray-300">
              <span className="font-semibold text-blue-400">Tech Stack:</span> {project.tags.join(', ')}
            </p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
              <FaExternalLinkAlt className="text-white text-lg sm:text-2xl hover:text-blue-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div >
    );
  };

export default ProjectCard;