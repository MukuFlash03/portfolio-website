import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Project } from '@/app/lib/types/project';
import ProjectCardNonMD from "./ProjectCardNonMD";
import ProjectCardMD from "./ProjectCardMD";

const ProjectContainer: React.FC<{
  projectsData: Project[],
}> = ({
  projectsData,
}) => {
    return (
      <div className="w-full items-center grid grid-flow-dense grid-cols-3 grid-rows-3 gap-10 md:h-[420px] space-y-2.5 px-[2px] md:px-[10px] py-5 md:py-2.5">
        {/* <div className="flex space-x-2 md:space-x-10"> */}
        {projectsData.map((project) => (
          <div key={uuidv4()} className="w-full">
            <div className="hidden md:block">
              <ProjectCardMD
                key={uuidv4()}
                project={project}
              />
            </div>
            <div className="block md:hidden">
              <ProjectCardNonMD
                key={uuidv4()}
                project={project}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

export default ProjectContainer;