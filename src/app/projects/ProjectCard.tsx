import React from "react";
import Image from "next/image";
import { Project } from '@/app/lib/types/project';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Link from "next/link";

const ProjectCard: React.FC<{
  project: Project,
}> = ({
  project,
}) => {
    return (
      <div className="flex-shrink-0 w-full md:w-[480px] h-[300px] md:h-[400px] flex flex-col items-center space-y-5 p-10 relative group overflow-hidden">
        <h3 className="absolute top-5 left-0 right-0 text-center text-base md:text-xl leading-[30px] md:leading-[40px] font-semibold text-[#E3E3E3] z-10 group-hover:opacity-0 transition-opacity duration-300">
          {project.title}
        </h3>
        <div className="w-full md:w-[440px] h-[200px] md:h-[300px] relative">
          <Image
            src={project.image}
            layout="fill"
            objectFit="cover"
            alt={project.title}
          />
        </div>
        <div className="absolute inset-0 top-0 bottom-2 md:bottom-5 rounded-[8px] md:rounded-[10px] bg-black bg-opacity-85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-center py-1 md:p-4 space-y-2 md:space-y-4">
            <h3 className="absolute top-2 md:top-8 left-0 right-0 text-center text-base md:text-xl leading-[40px] md:leading-[30px] font-medium md:font-semibold">
              {project.title}
            </h3>
            <p className="text-xs md:text-sm font-medium leading-relaxed">{project.date}</p>
            <p className="text-sm md:text-base font-medium leading-relaxed">{project.info}</p>
            <p className="text-xs md:text-sm text-gray-300">
              <span className="font-medium md:font-semibold text-blue-400">Tech Stack:</span> {project.tags.join(', ')}
            </p>
            <Link href={project.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
              <FaExternalLinkAlt className="text-white text-lg md:text-2xl hover:text-blue-400 transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div >
    );
  };

export default ProjectCard;