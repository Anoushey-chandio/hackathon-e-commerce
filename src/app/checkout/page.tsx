

import Checkout from '@/components/billingDetail';

import FreeDeliveryGrid from '@/components/freeinfo';


import Image from 'next/image'; // Import Image from next/image

const Shop = () => {
  return (
    <div className="p-4 ">
    {/* Instagram Section */}
    <div className="relative w-full h-[316px]">
      <div className="absolute inset-0 w-full h-[316px] -z-10">
        {/* Fixed Background Image */}
        <Image
          src="/images/Rectangle 1.png"
          alt="Shop Background"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      {/* Centered Text - Adjusted for Header Separation */}
      <div className="absolute flex flex-col items-center justify-center w-full" style={{ top: '100px' }}>
        <h1 className="text-black text-4xl font-bold mb-2">Checkout</h1>
        {/* Breadcrumb as Plain Text */}
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-black-900">Home</span>
          <span className="text-black-900">›</span>
          <span className="text-gray-500 font-semibold">Checkout</span>
        </div>
      </div>
    </div>

      {/* billing detail */}
      <Checkout/>
    

      {/* Use the FreeDeliveryGrid component */}
      <FreeDeliveryGrid />

 
    </div>
  );
};

export default Shop;