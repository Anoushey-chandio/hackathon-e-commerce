'use server';

import { cookies } from 'next/headers';

// Function to get current cart from cookies
const getCart = () => {
  const cart = cookies().get('cart');
  return cart ? JSON.parse(cart.value) : [];
};

// Function to add item to cart
export async function addToCart(product: any) {
  const cart = getCart();
  const existingItem = cart.find((item: any) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  cookies().set('cart', JSON.stringify(cart), { path: '/' });

  return cart;
}
