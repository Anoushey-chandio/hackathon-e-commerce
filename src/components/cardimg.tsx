import React from 'react';
import Image from 'next/image';
import Button from './button'; // Assuming Button is a separate component

interface CardImgProps {
  limit?: number; // Optional prop to limit the number of items
  title: string;  // Dynamic title for the section
  description: string;  // Dynamic description for the section
}

const CardImg: React.FC<CardImgProps> = ({ limit, title, description }) => {
  const items = [
    { src: '/images/Mask group (16).png', alt: 'Mask Group 1', title: 'Trenton modular sofa_3', price: 'Rs. 25,000.00' },
    { src: '/images/Mask group (17).png', alt: 'Mask Group 2', title: 'Granite dining table with dining chair', price: 'Rs. 25,000.00' },
    { src: '/images/Mask group (18).png', alt: 'Mask Group 3', title: 'Granite dining table with dining chair', price: 'Rs. 25,000.00' },
    { src: '/images/Mask group (19).png', alt: 'Mask Group 4', title: 'Plain console with teak mirror', price: 'Rs. 25,000.00' },
    { src: '/images/Mask group.png', alt: 'Mask Group 5', title: 'Grain coffee table', price: 'Rs. 15,000.00' },
    { src: '/images/Mask group (13).png', alt: 'Mask Group 6', title: 'Kent coffee table', price: 'Rs. 225,000.00' },
    { src: '/images/Mask group (14).png', alt: 'Mask Group 7', title: 'Round coffee table_color 2', price: 'Rs. 251,000.00' },
    { src: '/images/Mask group (15).png', alt: 'Mask Group 8', title: 'Reclaimed teak coffee table', price: 'Rs. 25,200.00' },
    { src: '/images/Mask group (3).png', alt: 'Mask Group 9', title: 'Plain console_', price: 'Rs. 258,200.00' },
    { src: '/images/Mask group (5).png', alt: 'Mask Group 10', title: 'Reclaimed teak Sideboard', price: 'Rs. 20,000.00' },
    { src: '/images/Mask group (20).png', alt: 'Mask Group 11', title: 'SJP_0825 ', price: 'Rs. 200,000.00' },
    { src: '/images/Mask group (6).png', alt: 'Mask Group 12', title: 'Bella chair and table', price: 'Rs. 100,000.00' },
    { src: '/images/Mask group (8).png', alt: 'Mask Group 12', title: 'Granite square side table', price: 'Rs. 258,800.00' },
    { src: '/images/Mask group (9).png', alt: 'Mask Group 12', title: 'Asgaard sofa', price: 'Rs. 250,000.00' },
    { src: '/images/Mask group (12).png', alt: 'Mask Group 12', title: 'Maya sofa three seater', price: 'Rs. 115,000.00' },
    { src: '/images/Mask group (10).png', alt: 'Mask Group 12', title: 'Outdoor sofa set', price: 'Rs. 244,000.00' },
  ];

  // Limit the number of items to display based on the `limit` prop
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <div className="pt-16"> {/* Added padding-top to push content below header */}
      
      {/* Section Header directly inside CardImg */}
      <div className="flex flex-col items-center text-center mb-6">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-sm text-gray-600 max-w-lg">{description}</p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-16">
        {displayItems.map((item, index) => (
          <div key={index} className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg bg-white">
            {/* Image */}
            <div className="relative w-full h-[250px]">
              <Image
                src={item.src}
                alt={item.alt}
                layout="intrinsic"
                width={287}
                height={287}
                objectFit="cover"
              />
            </div>

            {/* Card Text and Price */}
            <div className="p-4 text-center">
              <h3 className="text-xs font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-lg mb-2">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardImg;




