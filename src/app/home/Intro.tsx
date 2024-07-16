import React from "react";
import { v4 as uuidv4 } from "uuid";
import { IntroData } from "@/app/lib/types/intro";

const Intro: React.FC<{
  introData: IntroData
}> = ({
  introData,
}) => {
    return (
      <div className="w-full flex flex-col items-center space-y-2 md:space-y-10 px-1 md:px-5">
        <h1 className="w-full text-wrap text-center text-xl md:text-[32px] leading-[30px] md:leading-[40px] font-bold text-[#E3E3E3]">
          Hi, I&apos;m {introData.name} 🙋🏻‍♂️
        </h1>
        <div className="w-full flex flex-col items-center justify-center space-y-0 px- md:px-5">
          {introData.description.map((description) => (
            <p key={uuidv4()} className="w-full text-wrap text-center text-base md:text-[18px] leading-[30px] font-medium text-[#E3E3E3]">{description}</p>
          ))}
        </div>
      </div>
    )
  };

export default Intro;