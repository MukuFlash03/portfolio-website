import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { AboutSection } from "../lib/types/about";

const About: React.FC<{
  aboutData: AboutSection[]
}> = ({
  aboutData,
}) => {
    return (
      <div className="w-full min-h-[216px] flex bg-[#182546] px-4 md:px-5 rounded-[10px]">
        <div className="w-full flex-grow flex justify-center items-center">
          <div className="w-full h-full flex flex-col justify-center items-start space-y-4 md:space-y-6 px-2 md:px-5 py-3 md:py-5">
            {aboutData.map((data) => (
              <span key={uuidv4()} className="w-full h-full text-[#E3E3E3] text-base leading-4 md:leading-4 space-y-2 font-medium">
                <div className="flex justify-center w-full">
                  {data.title}
                </div>
                <ul className="w-full h-full text-sm md:text-base leading-5 md:leading-5 text-[#8BA4D0] text-left list-disc space-y-1 md:space-y-2 pl-6 md:pl-5">
                  {data.description.map((point) => (
                    <li key={uuidv4()} className="pr-2">{point}</li>
                  ))}
                </ul>
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default About;