// components/ProductCard.tsx
'use client'
import Image from 'next/image';
import Link from 'next/link';


type ProductCardProps = {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
  slug: string;  // Add slug prop to the ProductCard component
};

const ProductCard = ({
  name,
  imageUrl,
  price,
  description,
  discountPercentage,
  stockLevel,
  slug,  // Receive slug prop
}: ProductCardProps) => {
  return (
    <div className="border rounded-lg p-4  shadow-lg">
      {/* Make the image clickable and navigate to the product detail page */}
      <Link href={`/product/${slug}`}>
        <Image
          src={imageUrl}
          alt={name}
          width={400}
          height={400}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
      </Link>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      <p className="text-lg font-semibold text-green-600">${price}</p>
      {discountPercentage && discountPercentage > 0 && (
        <p className="text-sm text-red-500">
          Discount: {discountPercentage}% Off
        </p>
      )}
      <p className="text-sm text-gray-600">
        {stockLevel > 0 ? `${stockLevel} in stock` : 'Out of stock'}
      </p>

    
    </div>
  );
};

export default ProductCard;



