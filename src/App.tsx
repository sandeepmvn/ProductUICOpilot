import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { AddProductForm } from './components/AddProductForm';
import { getProducts, createProduct, type Product, type CreateProductRequest } from './services/api';
import './index.css';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Failed to load products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    try {
      setRefreshing(true);
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Failed to refresh products:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const handleAddProduct = async (product: CreateProductRequest) => {
    try {
      setSubmitting(true);
      const newProduct = await createProduct(product);
      setProducts([...products, newProduct]);
    } catch (error) {
      console.error('Failed to add product:', error);
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add Product Form */}
          <div>
            <AddProductForm onSubmit={handleAddProduct} loading={submitting} />
          </div>

          {/* Products List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
              <ProductList 
                products={products} 
                loading={loading} 
                onRefresh={handleRefresh}
                refreshing={refreshing}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
