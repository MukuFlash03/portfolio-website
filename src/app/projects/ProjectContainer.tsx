import React from "react";
import { v4 as uuidv4 } from "uuid";
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
          {projectsData.map((project) => (
            <ProjectCard
              key={uuidv4()}
              project={project}
            />
          ))}
        </div>
      </div>
    );
  };

export default ProjectContainer;