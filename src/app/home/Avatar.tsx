import React from "react";
import Image from "next/image";

const Avatar: React.FC<{
  src: string;
}> = ({
  src,
}) => {
    return (
      <div className="w-1/2 h-full flex justify-center items-center space-x-2.5 py-4 md:py-[91px]">
        <div className="w-full h-[200px] md:h-[302px] overflow-hidden">
          <Image
            src={src}
            width={624}
            height={302}
            alt="Hero Image"
            className="hidden md:w-full md:h-full md:object-contain"
          />
          <Image
            src={src}
            width={280}
            height={450}
            alt="Hero Image"
            className="md:hidden w-full h-full object-contain"
          />
        </div>
      </div>
    );
  };

export default Avatar;