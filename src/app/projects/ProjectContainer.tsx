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
      <div className="w-full h-[420px] px-[10px] py-[10px] overflow-x-auto">
        <div className="flex space-x-10">
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