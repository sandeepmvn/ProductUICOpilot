import React from 'react';
import { ShoppingCart } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center gap-3">
          <ShoppingCart className="h-8 w-8 text-white" />
          <div>
            <h1 className="text-3xl font-bold text-white">Product Manager</h1>
            <p className="text-blue-100 text-sm mt-1">Enterprise Product Management System</p>
          </div>
        </div>
      </div>
    </header>
  );
};
