import React from "react";

const Title: React.FC<{
  title: string
}> = ({
  title
}) => {
    return (
      <div className="w-full flex-grow flex flex-col items-center space-y-5">
        <h2 className="w-full text-center text-[24px] sm:text-[32px] leading-[40px] font-semibold text-[#E3E3E3]">
          {title}
        </h2>
      </div>
    )
  }

export default Title