"use client";

import { useState, useEffect } from "react";
import { addToCart } from "@/app/actions/addToCart";
import { createClient } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FreeDeliveryGrid from "@/components/freeinfo";
import { useUser, SignInButton } from "@clerk/nextjs";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

// Sanity client setup
const client = createClient({
  projectId: "n3fr1x5a",
  dataset: "production",
  apiVersion: "2025-01-13",
  useCdn: true,
});

// Fetch product by slug
const fetchProductBySlug = async (slug: string) => {
  const query = `
    *[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      "slug": slug.current,
      "imageUrl": image.asset->url,
      price,
      description,
      discountPercentage,
      stockLevel
    }
  `;
  return await client.fetch(query, { slug });
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Modal state
  const { isSignedIn } = useUser(); // Clerk se user ki authentication check karega

  useEffect(() => {
    const getProduct = async () => {
      const fetchedProduct = await fetchProductBySlug(slug);
      setProduct(fetchedProduct);
    };
    getProduct();
  }, [slug]);

  if (!product) {
    return (
      <div className="text-center p-8">
        <h2 className="text-xl">Product not found...</h2>
        <p className="mt-4">It seems the product doesnot exist or the URL is incorrect.</p>
        <Link href="/product" className="text-blue-500 mt-4 inline-block">
          Back to Products
        </Link>
      </div>
    );
  }

  // ✅ Add to Cart & Redirect to Cart Page
  const handleAddToCart = async () => {
    if (!isSignedIn) {
      setIsOpen(true); //  User agar sign in na ho toh modal open hoga
      return;
    }

    setLoading(true);
    await addToCart({
      id: product._id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      imageUrl: product.imageUrl || "/default-image.jpg",
    });
    setLoading(false);
    router.push("/cart");
  };

  return (
    <div className="container mx-auto p-4 md:p-8 lg:pt-34 bg-slate-50">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
        <div className="w-full lg:w-1/2">
          <Image
            src={product.imageUrl || "/default-image.jpg"}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">{product.name}</h1>
          <p className="text-base md:text-lg text-gray-800 mb-2 md:mb-4">{product.description}</p>
          <p className="text-lg md:text-xl font-semibold text-green-600">${product.price}</p>
          {product.discountPercentage > 0 && (
            <p className="text-sm md:text-base text-red-500">
              Discount: {product.discountPercentage}% Off
            </p>
          )}
          <p className="text-sm md:text-base text-gray-600 mt-2 md:mt-4">
            {product.stockLevel > 0 ? `${product.stockLevel} in stock` : "Out of stock"}
          </p>

          <div className="mt-4 md:mt-6">
            <button
              className="w-full md:w-auto bg-primary text-gray-950 px-4 py-3 rounded-lg hover:bg-gray-500 hover:text-white"
              disabled={product.stockLevel <= 0 || loading}
              onClick={handleAddToCart}
            >
              {loading ? "Adding..." : product.stockLevel > 0 ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>

      <FreeDeliveryGrid />

      {/* 🔥 Clerk Sign-In Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <div className="fixed inset-0 bg-black bg-opacity-30" />
          <div className="fixed inset-0 flex items-center justify-center">
            <Dialog.Panel className="w-full max-w-sm bg-white rounded-lg p-6 shadow-lg">
              <Dialog.Title className="text-lg font-semibold text-gray-900">
                Please Sign In
              </Dialog.Title>
              <Dialog.Description className="text-gray-600 mt-2">
                You need to sign in before adding items to the cart.
              </Dialog.Description>

              <div className="mt-4 flex justify-center">
                <SignInButton mode="modal">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Sign In / Sign Up
                  </button>
                </SignInButton>
              </div>

              <button
                className="mt-4 w-full text-sm text-gray-500 hover:text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
