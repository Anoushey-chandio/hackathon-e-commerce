export type Product = {
    _id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    discountPercentage: number;
    isFeaturedProduct: boolean;
    stockLevel: number;  // Use stockLevel as per your schema
    category: string;
    slug: string;
    inventory: number;  // We will manage inventory for cart separately
  };
  