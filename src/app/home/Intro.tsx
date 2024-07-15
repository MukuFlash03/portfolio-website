import React from "react";
import { IntroData } from "@/app/lib/types/intro";

const Intro: React.FC<{
  introData: IntroData
}> = ({
  introData,
}) => {
    return (
      <div className="w-full flex flex-col items-center space-y-10 px-5">
        <h1 className="w-full text-center text-2xl sm:text-[34px] leading-[40px] font-bold text-[#E3E3E3]">
          Hi, I&apos;m {introData.name} 🙋🏻‍♂️
        </h1>
        <div className="w-full flex flex-col items-center justify-center space-y-0 px-5">
          {introData.description.map((description, index) => (
            <p key={index} className="w-full text-center text-base sm:text-[18px] leading-[30px] font-medium text-[#E3E3E3]">{description}</p>
          ))}
        </div>
      </div>
    )
  };

export default Intro;