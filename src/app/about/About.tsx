import React from "react";
import { AboutSection } from "../lib/types/about";

const About: React.FC<{
  aboutData: AboutSection[]
}> = ({
  aboutData,
}) => {
    return (
      <div className="w-full min-h-[216px] flex bg-[#182546] px-1 md:px-5 rounded-[10px]">
        <div className="w-full flex-grow flex justify-center items-center">
          <div className="w-full h-full flex flex-col justify-center items-start space-y-4 md:space-y-6 px-2 md:px-5 py-2 md:py-5">
            {aboutData.map((data, index) => (
              <span key={index} className="w-full h-full text-[#E3E3E3] text-base leading-5 md:leading-6 space-y-2 font-medium">
                {/* I&apos;m a passionate Full Stack Developer with a strong foundation in computer science and a keen interest in cutting-edge technologies. My journey in the tech world has equipped me with a diverse skill set, allowing me to tackle complex problems and create innovative solutions. */}
                <div className="flex justify-center w-full">
                  {data.title}
                </div>
                <ul className="w-full h-full text-sm md:text-base text-[#8BA4D0] text-left list-disc list-outside space-y-2">
                  {data.description.map((point, index) => (
                    <li key={index}>{point}</li>
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