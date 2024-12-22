// src/pages/ProductDemo.tsx
import React from "react";
import { products } from "../constants/products";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

const ProductDemo: React.FC = () => {
  const navigate = useNavigate();

  const handleSeeDetails = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
    
        <div className="container mx-auto px-4 py-6 text-center">
          <h1 className="text-3xl font-bold text-black">Product Information</h1>
        </div>
   

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSeeDetails={handleSeeDetails} 
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductDemo;
