// src/components/ProductCard.tsx
import React from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
};

interface ProductCardProps {
  product: Product;
  onSeeDetails: (id: number) => void; 
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSeeDetails }) => {
  return (
    <div
      key={product.id}
      className="bg-white shadow rounded-xl overflow-hidden hover:shadow-2xl nsition-shadow duration-300"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-scale-down"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold flex justify-center">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <button
          className="mt-4 w-full bg-light-blue text-black py-2 rounded-2xl  transition duration-200 border border-black hover:text-white hover:bg-black "
          onClick={() => onSeeDetails(product.id)} 
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
