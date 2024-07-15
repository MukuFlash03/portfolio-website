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
      <div key={index} className="flex-shrink-0 w-[480px] h-[400px] flex flex-col items-center space-y-5 p-5 relative group overflow-hidden">
        <h3 className="w-full text-center text-[28px] leading-[40px] font-semibold text-[#E3E3E3]">
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
        <div className="absolute inset-0 rounded-[10px] bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-center p-4">
            <p className="text-lg font-medium leading-relaxed">{project.date}</p>
            <p className="text-lg font-medium leading-relaxed">{project.title}</p>
            <p className="text-lg font-medium leading-relaxed">{project.info}</p>
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-blue-400">Technologies:</span> {project.tags.join(', ')}
            </p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
              <FaExternalLinkAlt className="text-white text-2xl hover:text-blue-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    );
  };

export default ProjectCard;