import React from 'react';

export const ProductItemSkeleton: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg animate-pulse">
      <div className="flex-1">
        {/* Product name skeleton */}
        <div className="h-6 bg-gray-200 rounded w-32 mb-2"></div>
        {/* Product ID skeleton */}
        <div className="h-4 bg-gray-100 rounded w-20"></div>
      </div>
      <div className="text-right ml-4">
        {/* Price skeleton */}
        <div className="h-8 bg-gray-200 rounded w-16"></div>
      </div>
    </div>
  );
};

interface ProductSkeletonListProps {
  count?: number;
}

export const ProductSkeletonList: React.FC<ProductSkeletonListProps> = ({ count = 3 }) => {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }, (_, index) => (
        <ProductItemSkeleton key={index} />
      ))}
    </div>
  );
};