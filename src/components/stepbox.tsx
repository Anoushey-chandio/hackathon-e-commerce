import React from 'react';

const EasySteps = () => {
  return (
    <div className="p-4">
      {/* Free Delivery Section */}
      <div className="flex justify-center items-center m-8">
        {/* Parent Container */}
        <div className="w-full max-w-[392px] h-[60px] flex justify-between items-center">
          {/* Child Containers with max width and spacing */}
          <div className="w-[60px] h-[60px] flex justify-center items-center bg-yellow-300 text-gray-950 font-bold rounded-md mx-2">
            1
          </div>
          <div className="w-[60px] h-[60px] flex justify-center items-center bg-primary text-gray-950 font-bold rounded-md mx-2">
            2
          </div>
          <div className="w-[60px] h-[60px] flex justify-center items-center bg-primary text-gray-950 font-bold rounded-md mx-2">
            3
          </div>
          <div className="w-[60px] h-[60px] flex justify-center items-center bg-primary text-gray-950 font-bold rounded-md mx-2">
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasySteps;

