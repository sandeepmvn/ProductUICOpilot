import React from 'react';
import type { Product } from '../services/api';

interface ProductItemProps {
  product: Product;
}

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 ease-in-out transform hover:scale-[1.02]">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">Product ID: {product.id}</p>
      </div>
      <div className="text-right ml-4">
        <p className="text-2xl font-bold text-blue-600">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
