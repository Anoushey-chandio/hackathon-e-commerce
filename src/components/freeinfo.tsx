// Import required libraries
import React from 'react';

const FreeDeliveryGrid = () => {
  return (
    <div className="p-4 ">
      {/* Free Delivery Section */}
      <div
        className="bg-custom p-6 rounded-lg mx-auto"
        style={{ maxWidth: '950px', height: '300px' }}
      >
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full items-center text-center">
          {/* Sentence 1 */}
          <div >
            <h2 className="text-lg text-black font-bold mb-2">Free Delivery</h2>
            <p className="text-sm text-gray-500 font-medium">For all oders over $50, consectetur adipim scing elit.</p>
          </div>

          {/* Sentence 2 */}
          <div >
            <h2 className="text-lg text-black font-bold mb-2">90 Days Return</h2>
            <p className="text-sm text-gray-500 font-medium">If goods have problems, consectetur adipim scing elit.</p>
          </div>

          {/* Sentence 3 */}
          <div >
            <h2 className="text-lg text-black font-bold mb-2">Secure Payment</h2>
            <p className="text-sm  text-gray-500 font-medium">If goods have problems, consectetur adipim scing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeDeliveryGrid;


  
