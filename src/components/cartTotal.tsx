"use client";

import React from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import Button from "./button";
import Link from "next/link";

const CartComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between p-6 gap-6 max-w-[1440px] mx-auto bg-[#fefbf6]">
      {/* Left Section (Product Details) */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        {/* Product Details Header */}
        <div className="hidden sm:grid grid-cols-5 gap-4 items-center font-bold text-center bg-primary text-gray-900 mb-4">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
          <span>Action</span>
        </div>

        {/* Product Row */}
        <div className="flex flex-col sm:grid sm:grid-cols-5 gap-4 items-center py-4 border-t">
          {/* Product Image */}
          <div className="flex justify-center sm:col-span-1">
            <Image
              src="/images/Mask group (9).png"
              alt="Asgaard Sofa"
              width={100}
              height={100}
              className="object-cover rounded"
            />
          </div>

          {/* Product Details for Mobile */}
          <div className="flex flex-col sm:hidden text-center">
            <span className="font-medium text-gray-700">Asgaard Sofa</span>
            <span className="text-gray-500">Rs. 250,000.00</span>
          </div>

          {/* Price (for larger screens only) */}
          <span className="hidden sm:block text-gray-500">Rs. 250,000.00</span>

          {/* Quantity */}
          <div className="flex justify-center items-center sm:col-span-1">
            <input
              type="number"
              className="w-12 text-center border border-gray-300 rounded-md"
              defaultValue={1}
              min={1}
            />
          </div>

          {/* Subtotal */}
          <span className="hidden sm:block text-gray-500">Rs. 250,000.00</span>

          {/* Action */}
          <div className="flex justify-center sm:col-span-1">
            <button className="text-yellow-500 hover:text-yellow-600">
              <FaTrash size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Section (Cart Totals) */}
      <div className="w-full lg:w-1/3 bg-[#fff8e7] p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-700 mb-6 text-center">
          Cart Totals
        </h2>

        {/* Totals */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500">Subtotal</span>
          <span className="font-bold text-gray-700">Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between items-center mb-8">
          <span className="text-gray-500">Total</span>
          <span className="text-yellow-500 font-bold text-xl">
            Rs. 250,000.00
          </span>
        </div>

        {/* Checkout Button */}
        <div className="flex justify-center">
      <Link href="/checkout" passHref>
        <div>
          <Button label="CheckOut" outline={true} />
        </div>
      </Link>
    </div>
      </div>
    </div>
  );
};

export default CartComponent;



