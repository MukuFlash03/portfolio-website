import React from "react";
import Image from "next/image";
import { Project } from '@/app/lib/types/project';
import ProjectCard from "./ProjectCard";

const ProjectContainer: React.FC<{
  projectsData: Project[],
}> = ({
  projectsData,
}) => {
    return (
      <div className="w-full md:h-[420px] px-0.5 md:px-2.5 py-0.5 md:py-2.5 overflow-x-auto">
        <div className="flex space-x-2 md:space-x-10">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              project={project}
            />
          ))}
        </div>
      </div>
    );
  };

export default ProjectContainer;