import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { API_BASE_URL } from '../config';
import SkeletonCardLoading from './SkeletonCardLoading';

interface Product {
  id: string;
  name: string;
  description: string;
  summary: string;
  image: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products/`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Something went wrong');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return (
    <div className="grid grid-cols-2 md:grid-cols-3 place-items-center lg:flex mx-auto justify-center w-full gap-4">
      {[...Array(4)].map((_, index) => (
        <SkeletonCardLoading key={index} />
      ))}
    </div>
  );
  
  
  if (error) return <div className='flex justify-center items-center h-[60vh] text-3xl font-semibold text-red-400'>Error: {error}</div>;

  return (
    <div className="product-list grid grid-cols-2 md:grid-cols-3 place-items-center lg:flex overflow-auto w-full gap-2 mx-auto">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard product={product}/>
        ))
      ) : (
        <div>No products available.</div>
      )}
    </div>
  );
};

export default ProductList;
