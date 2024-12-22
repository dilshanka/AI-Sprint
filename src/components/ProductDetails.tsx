// src/pages/ProductDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";
import {productdetails} from "../constants/productdetails";
import { FaArrowAltCircleLeft } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  details?: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const productId = id ? parseInt(id) : null;

  // Find the product by id
  const product = productdetails.find((p: Product) => p.id === productId);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 py-6 text-center mt-10">
        <h1 className="text-3xl font-bold text-black">Product Details</h1>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border p-4 rounded-xl shadow-md ">
          <div className="flex flex-col md:flex-row items-start space-y-5 md:space-x-5   ">
            <button>
              <a href="/products" className="text-blue-500">
                <FaArrowAltCircleLeft className="w-6 h-6" />
              </a>
            </button>
            <img
              src={product.image}
              alt={product.name}
              className="w-fit h-72 object-scale-down "
            />
          </div>

          <div className=" pl-10  py-2">
            <h2 className="text-3xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mt-4">{product.description}</p>
          </div>
        </div>

        <div className="mt-5 bg-gray-50 p-5 rounded-xl shadow-sm">
          <p className="text-gray-600 ">{product.details}</p>
        </div>


      </div>
    </div>
  );
};

export default ProductDetail;
