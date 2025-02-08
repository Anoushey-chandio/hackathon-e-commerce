import React from "react";
import Image from "next/image";
import { FaRegClock, FaCalendarAlt } from "react-icons/fa";

const BlogGrid = () => {
  return (
    <div className="bg-white px-6 py-12">
      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8">
        {/* Blog 1 */}
        <div className="flex flex-col items-center text-center bg-gray-50 rounded-lg shadow-md overflow-hidden max-w-full sm:max-w-[800px] w-full mx-auto">
          {/* Image Section */}
          <div className="relative w-full h-[500px]">
            <Image
              src="/images/Rectangle 68.png"
              alt="Going all-in with millennial design"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <FaRegClock className="h-4 w-4" />
                5 min
              </span>
              <span className="flex items-center gap-1">
                <FaCalendarAlt className="h-4 w-4" />
                12th Oct 2022
              </span>
            </div>
          {/* Content Section */}
          <div className="px-6 py-4">
            <h3 className="text-lg font-medium">Going all-in with millennial design</h3>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <p className="mt-4 font-semibold underline">Read More</p>
          
          </div>
        </div>

        {/* Blog 2 */}
        <div className="flex flex-col items-center text-center bg-gray-50 rounded-lg shadow-md overflow-hidden max-w-full sm:max-w-[800px] w-full mx-auto">
          {/* Image Section */}
          <div className="relative w-full h-[500px]">
            <Image
              src="/images/Rectangle 68 (1).png"
              alt="Going all-in with millennial design"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <FaRegClock className="h-4 w-4" />
                5 min
              </span>
              <span className="flex items-center gap-1">
                <FaCalendarAlt className="h-4 w-4" />
                12th Oct 2022
              </span>
            </div>
          {/* Content Section */}
          <div className="px-6 py-4">
            <h3 className="text-lg font-medium">Going all-in with millennial design</h3>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <p className="mt-4 font-semibold underline">Read More</p>
          
          </div>
        </div>

        {/* Blog 3 */}
        <div className="flex flex-col items-center text-center bg-gray-50 rounded-lg shadow-md overflow-hidden max-w-full sm:max-w-[800px] w-full mx-auto">
          {/* Image Section */}
          <div className="relative w-full h-[500px]">
            <Image
              src="/images/Rectangle 68 (2).png"
              alt="Going all-in with millennial design"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <FaRegClock className="h-4 w-4" />
                5 min
              </span>
              <span className="flex items-center gap-1">
                <FaCalendarAlt className="h-4 w-4" />
                12th Oct 2022
              </span>
            </div>


          {/* Content Section */}
          <div className="px-6 py-4">
            <h3 className="text-lg font-medium">Going all-in with millennial design</h3>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
            </p>
            <p className="mt-4 font-semibold underline">Read More</p>
         
          </div>
        </div>
      </div>

      {/* View All Post Button */}
      <div className="text-center mt-12">
        <a
          href="#"
          className="text-black text-lg underline hover:text-gray-600"
        >
          View All Post
        </a>
      </div>
    </div>
  );
};

export default BlogGrid;
