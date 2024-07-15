import React from "react";
import { IntroData } from "@/app/lib/types/intro";

const Intro: React.FC<{
  introData: IntroData
}> = ({
  introData,
}) => {
    return (
      <div className="w-full flex flex-col items-center space-y-10 px-5">
        <h1 className="w-full text-center text-[36px] leading-[40px] font-bold text-[#E3E3E3]">
          Hi, I&apos;m {introData.name} 🙋🏻‍♂️
        </h1>
        <ul className="w-full text-left text-[20px] leading-[40px] font-medium text-[#E3E3E3] list-disc list-inside">
          {introData.description.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </div>
    )
  };

export default Intro;