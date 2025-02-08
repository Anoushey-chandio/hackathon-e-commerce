'use client';

import Image from 'next/image';
import { createClient } from '@sanity/client';
import ProductCard from '@/components/productCard';
import EasySteps from '@/components/stepbox';
import FreeDeliveryGrid from '@/components/freeinfo';
import Link from 'next/link';

// Sanity client setup
const client = createClient({
  projectId: 'n3fr1x5a',
  dataset: 'production',
  apiVersion: '2025-01-13',
  useCdn: true,
});

// Define the types
type Product = {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
  slug: string;
};

// Function to fetch products from Sanity
const fetchProducts = async (): Promise<Product[]> => {
  const query = `*[_type == "product"]{
    _id,
    name,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category
  }`;

  const products = await client.fetch(query, {}, { cache: 'no-store' });
  return products;
};

export default async function ProductPage() {
  const products = await fetchProducts();

  if (!products || products.length === 0) {
    return <div className="text-center p-8 text-lg font-semibold">No products found...</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 bg-slate-50 pt-28">
      {/* Top Picks Heading */}
      <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2">
        Top Picks For You
      </h1>

      {/* Subtitle - */}
      <h3 className="text-sm sm:text-md md:text-lg lg:text-xs font-medium text-center mb-6 sm:mb-8 px-2 sm:px-6">
        Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
      </h3>

      {/* Responsive Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product._id} 
            className="p-6 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow 
            w-full h-auto flex flex-col justify-between">
            <ProductCard
              _id={product._id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.price}
              description={product.description}
              discountPercentage={product.discountPercentage}
              isFeaturedProduct={product.isFeaturedProduct}
              stockLevel={product.stockLevel}
              category={product.category}
              slug={product.slug}
            />
          </div>
        ))}
      </div>

      {/* Extra Sections */}
      <div className="mt-16">
        <EasySteps />
      </div>
      <div className="mt-16">
        <FreeDeliveryGrid />
      </div>
    </div>
  );
}
