import React from 'react';
import { RefreshCw } from 'lucide-react';
import type { Product } from '../services/api';
import { ProductItem } from './ProductItem';
import { ProductSkeletonList } from './ProductSkeleton';

interface ProductListProps {
  products: Product[];
  loading: boolean;
  onRefresh: () => Promise<void>;
  refreshing?: boolean;
}

export const ProductList: React.FC<ProductListProps> = ({ products, loading, onRefresh, refreshing = false }) => {
  // Show skeleton during initial loading
  if (loading) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="h-8 bg-gray-200 rounded w-32 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-100 rounded w-40 animate-pulse"></div>
          </div>
          <button
            disabled
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-400 text-white font-medium rounded-lg"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
        </div>
        <ProductSkeletonList count={3} />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Products</h2>
            <p className="text-gray-600 text-sm mt-1">
              0 products available
            </p>
          </div>
          <button
            onClick={onRefresh}
            disabled={refreshing}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition"
          >
            <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
            {refreshing ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found</p>
          <p className="text-gray-400 text-sm mt-2">Add a new product to get started</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Products</h2>
          <p className="text-gray-600 text-sm mt-1">
            {products.length} product{products.length !== 1 ? 's' : ''} available
          </p>
        </div>
        <button
          onClick={onRefresh}
          disabled={refreshing}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition"
        >
          <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
          {refreshing ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
      
      {/* Show skeleton overlay during refresh */}
      {refreshing && (
        <div className="relative">
          <div className="absolute inset-0 bg-white/75 backdrop-blur-sm z-10 rounded-lg">
            <ProductSkeletonList count={Math.min(products.length, 5)} />
          </div>
          <div className="opacity-50">
            <div className="space-y-3">
              {products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Normal product list when not refreshing */}
      {!refreshing && (
        <div className="space-y-3 transition-opacity duration-300 ease-in-out">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
