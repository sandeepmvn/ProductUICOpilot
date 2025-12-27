import axios from 'axios';

const API_BASE_URL = 'https://localhost:7054/api';

// Disable SSL verification for development (ONLY for development!)
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  httpsAgent: {
    rejectUnauthorized: false,
  } as any,
});

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface CreateProductRequest {
  name: string;
  price: number;
}

// Get all products
export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get<Product[]>('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Add a new product
export const createProduct = async (product: CreateProductRequest): Promise<Product> => {
  try {
    const response = await api.post<Product>('/products', product);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};
