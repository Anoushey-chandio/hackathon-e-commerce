'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from './button';
import Link from 'next/link';

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('L'); // Default size
  const [selectedColor, setSelectedColor] = useState('blue'); // Default color

  // Function to handle size selection
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  // Function to handle color selection
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  // Function to increment quantity
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to decrement quantity
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Thumbnails (hidden on mobile) */}
        <div className="hidden lg:flex flex-col gap-4">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="relative w-20 h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 bg-gray-100 rounded-lg overflow-hidden"
            >
              <Image
                src="/images/Mask group (9).png" // Replace with your image paths
                alt={`Thumbnail ${index}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>

        {/* Center: Main Image */}
        <div className="relative w-full h-auto sm:h-80 md:h-96 bg-primary rounded-lg overflow-hidden">
          <Image
            src="/images/Mask group (9).png" // Main image path
            alt="Product Image"
            layout="responsive"
            width={600} // Define a fixed width for responsiveness
            height={600} // Define a fixed height for maintaining aspect ratio
            objectFit="contain" // Ensures the image scales correctly within its box
          />
        </div>

        {/* Right Side: Product Details */}
        <div className="flex flex-col space-y-6 sm:text-center lg:text-left">
          <h1 className="text-2xl font-bold text-gray-900">Asgaard Sofa</h1>
          <p className="text-sm text-gray-600">Rs. 250,000.00</p>
          <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
            <span className="text-yellow-500">★★★★☆</span>
            <p className="text-sm text-gray-500">(45 reviews)</p>
          </div>
          <p className="text-sm font-extralight text-gray-900 mt-4">Setting the bar as one of the loudest speakers in its class,
             the Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for 
              a sound.
          </p>

          {/* Size Selection */}
          <div>
            <p className="text-sm text-gray-600">Size:</p>
            <div className="flex justify-center gap-4 mt-2 flex-wrap">
              {['L', 'XL', 'XS'].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`py-2 px-4 border rounded-lg ${
                    selectedSize === size
                      ? 'bg-primary text-gray-900 border-gray-600'
                      : size === 'L'
                      ? 'bg-custom text-gray-950'
                      : size === 'XL'
                      ? 'bg-custom text-gray-950'
                      : size === 'XS'
                      ? 'bg-custom text-gray-950'
                      : 'bg-primary text-gray-700'
                  } `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <p className="text-sm text-gray-600">Color:</p>
            <div className="flex justify-center gap-4 mt-2">
              {['blue', 'brown', 'black'].map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorSelect(color)}
                  className={`w-6 h-6 rounded-full border-2 ${
                    selectedColor === color
                      ? 'border-blue-600'
                      : 'border-gray-300'
                  } ${
                    color === 'blue'
                      ? 'bg-blue-500'
                      : color === 'brown'
                      ? 'bg-yellow-900' // Brown color
                      : 'bg-black'
                  }`}
                ></button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart Button */}
          <div className="flex flex-col sm:flex-row items-center gap-6 ">
            {/* Quantity Controls */}
            <div className="flex items-center border rounded-lg">
              <button
                onClick={decrementQuantity}
                className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-4 py-2 text-gray-900">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300"
              >
                +
              </button>
            </div>

            {/* Add to Cart button */}
       
            <div className="flex justify-center">
      <Link href="/cart" passHref>
        <div>
          <Button label="AddtoCart" outline={true} />
        </div>
      </Link>
    </div>
      </div>
          </div>

       
        </div>
      </div>
   
  );
}

export default ProductDetail;





