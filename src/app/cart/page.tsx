'use client';

import { useEffect, useState } from 'react';
import FreeDeliveryGrid from '@/components/freeinfo';
import Image from 'next/image';
import Link from 'next/link';
import { TrashIcon } from '@heroicons/react/24/solid';

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const cartData = document.cookie
      .split('; ')
      .find((row) => row.startsWith('cart='))
      ?.split('=')[1];

    if (cartData) {
      setCart(JSON.parse(decodeURIComponent(cartData)));
    }
  }, []);

  const updateCartCookie = (updatedCart: any[]) => {
    document.cookie = `cart=${encodeURIComponent(JSON.stringify(updatedCart))}; path=/; max-age=86400`;
    setCart(updatedCart);
  };

  const increaseQuantity = (id: string) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCartCookie(updatedCart);
  };

  const decreaseQuantity = (id: string) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
    );
    updateCartCookie(updatedCart);
  };

  const removeItem = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    updateCartCookie(updatedCart);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-8 md:p-10 w-full">
      <div className="relative w-full h-[180px] md:h-[316px] bg-white rounded-lg overflow-hidden">
        <Image
          src="/images/Rectangle 1.png"
          alt="Shop Background"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-black text-xl md:text-4xl font-bold mb-2">Shopping Cart</h1>
          <div className="flex items-center space-x-2 text-xs md:text-base text-gray-700">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>›</span>
            <span className="font-semibold">Cart</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-6 md:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-4 md:p-6 bg-gray-50 rounded-lg shadow-lg w-full overflow-hidden">
          <h2 className="text-xl md:text-3xl text-gray-950 font-semibold mb-4 md:mb-6">Your Cart</h2>

          {cart.length === 0 ? (
            <div className="text-center py-6 md:py-10">
              <p className="text-sm md:text-2xl text-gray-600">Your cart is empty.</p>
              <Link href="/productList" className="mt-4 inline-block bg-primary text-xl text-gray-950 px-3 md:px-6 py-2 md:py-3 rounded-lg hover:bg-gray-500">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto w-full">
              <table className="w-full border-collapse text-xs md:text-base">
                <thead>
                  <tr className="bg-primary text-gray-950">
                    <th className="p-1 md:p-3 text-left">Product</th>
                    <th className="p-1 md:p-3 text-center">Price</th>
                    <th className="p-1 md:p-3 text-center">Quantity</th>
                    <th className="p-1 md:p-3 text-center">Total</th>
                    <th className="p-1 md:p-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="border-b text-center">
                      <td className="p-1 md:p-4 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                        <Image src={item.imageUrl || '/default-image.jpg'} alt={item.name} width={50} height={50} className="rounded-md" />
                        <span className="font-semibold">{item.name}</span>
                      </td>
                      <td className="p-1 md:p-4 text-green-600 font-semibold">${item.price}</td>
                      <td className="p-1 md:p-4">
                        <div className="flex items-center justify-center space-x-1 md:space-x-3">
                          <button className="bg-gray-300 px-2 py-1 rounded-lg hover:bg-gray-400" onClick={() => decreaseQuantity(item.id)}>
                            -
                          </button>
                          <span className="text-sm md:text-lg font-semibold">{item.quantity}</span>
                          <button className="bg-gray-300 px-2 py-1 rounded-lg hover:bg-gray-400" onClick={() => increaseQuantity(item.id)}>
                            +
                          </button>
                        </div>
                      </td>
                      <td className="p-1 md:p-4 font-semibold">${(item.price * item.quantity).toFixed(2)}</td>
                      <td className="p-1 md:p-4">
                        <button className="text-primary" onClick={() => removeItem(item.id)}>
                          <TrashIcon className="w-6 h-6" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between text-lg">
              <span>Subtotal:</span>
              <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            <hr className="my-4 border-gray-300" />
            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <Link href="/checkout">
              <button className="w-full mt-4 bg-primary text-gray-900 py-3 rounded-md hover:bg-gray-700 hover:text-white transition">
                 Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
      <FreeDeliveryGrid />
    </div>
  );
}
