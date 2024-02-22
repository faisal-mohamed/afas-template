import React from "react";

interface ImageProps {
  src: string;
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
  imgClassName?:string;
}
const CustomImage: React.FC<ImageProps> = ({
  src,
  className,
  width,
  height,
  alt,
  imgClassName
}) => {
  return (
    <div className={className} >
      <img src={src} height={height} width={width} alt={alt}  className={imgClassName} />
    </div>
  );
};

export default CustomImage;
