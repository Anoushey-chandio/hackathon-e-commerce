import React from 'react';

interface TwoImagesWithBgProps {
  leftImage: string;
  rightImage: string;
  bgColor?: string;  // Optional background color
}

const TwoImagesWithBg: React.FC<TwoImagesWithBgProps> = ({ leftImage, rightImage, bgColor = 'bg-white' }) => {
  return (
    <section className={`${bgColor} flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-6 px-6 py-12 gap-4`}>
      {/* Left Image with background color */}
      <div className={`w-full lg:w-1/2 ${bgColor} max-w-full`}>
        <div className="relative w-full h-auto max-h-96">
          <img
            src={leftImage}  // Dynamic left image path
            alt="Left Image"
            className="w-full h-full object-contain max-h-96"
          />
        </div>
      </div>

      {/* Right Image with background color */}
      <div className={`w-full lg:w-1/2 ${bgColor} max-w-full`}>
        <div className="relative w-full h-auto max-h-96">
          <img
            src={rightImage}  // Dynamic right image path
            alt="Right Image"
            className="w-full h-full object-contain max-h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default TwoImagesWithBg;

