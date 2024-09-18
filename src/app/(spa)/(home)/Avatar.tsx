import React from "react";
import Image, { StaticImageData } from "next/image";

interface AvatarProps {
  src: string | StaticImageData;
  width: number;
  height: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, width, height }) => {
  const isJpeg = typeof src === 'string' &&
    (
      src.toLowerCase().endsWith('.jpg') ||
      src.toLowerCase().endsWith('.jpeg') ||
      src.toLowerCase().endsWith('.png')
    );

  return (
    <div className="w-1/2 h-full flex justify-center items-center space-x-2.5 py-4 md:py-[91px]">
      <div className="w-full h-[200px] md:h-[302px] overflow-hidden">
        <Image
          src={src}
          width={width}
          height={height}
          alt="Hero Image"
          className={`hidden md:block w-full h-full ${isJpeg ? 'object-cover' : 'object-contain'}`}
        />
        <Image
          src={src}
          width={width / 2}
          height={height / 2}
          alt="Hero Image"
          className={`block md:hidden w-full h-full ${isJpeg ? 'object-cover' : 'object-contain'}`}
        />
      </div>
    </div>
  );
};

export default Avatar;