'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@sanity/client';
import ImageGrid from '@/components/blogsimg';
import Button from '@/components/button';
import TwoImagesWithBg from '@/components/twoimages';
import ProductCard from '@/components/productCard'; // Import ProductCard component
import Image from 'next/image';
import Link from 'next/link';

// Sanity client setup
const client = createClient({
  projectId: 'n3fr1x5a', // Replace with your project ID
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
};

const fetchProducts = async (): Promise<Product[]> => {
  const query = `*[_type == "product"]{
    _id,
    name,
    "imageUrl": image.asset->url,
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category
  }`;

  const products = await client.fetch(query);
  return products;
};

const Hero = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  // Split products into groups (4 products for display)
  const groupOf4 = products.slice(0, 4);

  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 lg:py-24 bg-primary">
        {/* Left side - Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800">
            Rocket single seater
          </h1>
          {/* Link to Product List */}
          <Link href="/productList">
            <Button label="Shop Now" underline={true} />
          </Link>
        </div>

        {/* Right side - Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <Image
            src="/images/1st.png" // Path to image in public folder
            alt="Rocket"
            width={700} // Set the width for optimization
            height={500} // Set the height for optimization
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Use the TwoPics component */}
      <TwoImagesWithBg
        leftImage="/images/2nd.png"
        rightImage="/images/3rd.png"
        bgColor="bg-custom" // Another background color
      />

      {/* Products Grid */}
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Top Picks For You</h2>
        <h3 className="text-md font-extralight text-center mb-8">Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.</h3>
        {products.length === 0 ? (
          <div className="text-center p-8">Loading products...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {groupOf4.map((product) => (
              <ProductCard
                key={product._id}
                _id={product._id}
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.price}
                description={product.description}
                discountPercentage={product.discountPercentage}
                isFeaturedProduct={product.isFeaturedProduct}
                stockLevel={product.stockLevel}
                category={product.category}
                slug={''} // You can add a dynamic slug if needed
              />
            ))}
          </div>
        )}
        <div className="flex justify-center mt-6">
          <Link href="/productList">
            <button className="px-6 py-3 bg-primary text-gray-950 font-semibold rounded-lg shadow-md hover:bg-gray-700 hover:text-white transition duration-300">
              View All Products
            </button>
          </Link>
        </div>
      </div>

      {/* New Arrival Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-primary">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/Asgaard sofa 1.png"
            alt="Asgaard Sofa"
            className="w-full max-w-md object-cover rounded-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left">
          <p className="text-sm text-gray-800 uppercase tracking-wide">New Arrivals</p>
          <h1 className="text-4xl font-bold mt-4">Asgaard Sofa</h1>
          <br />
          <Button label="Order Now" outline={true} />
        </div>
      </div>

      {/* Blogs Grid */}
      <ImageGrid />

      {/* Instagram Section */}
      <div className="relative w-full h-[430px]">
        <Image
          src="/images/Group 47.png"
          alt="Image 2"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </>
  );
};

export default Hero;

