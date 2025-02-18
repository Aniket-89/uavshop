import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../assets/CartContext";
import Button from "../Components/Button";

interface Product {
  id?: number;
  name?: string;
  description: string;
  quantity?: number;
  image: string;
  price: number;
}

const ShopDetailPage: React.FC<Product> = () => {
  const { id } = useParams<{ id: string }>(); // Get product ID from URL params
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data: Product = await response.json();
        setProduct(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading product details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <div className="">
      <div className="p-4 max-w-7xl mx-auto h-[50vh] flex gap-2">
        <div className="w-1/2 bg-blue-300 h-full">
          <img
            src={
              product.image.startsWith("http")
                ? product.image
                : `http://127.0.0.1:8000${product.image}`
            }
            alt={product.name}
            className="h-[440px] w-full object-cover object-center"
          />
        </div>
        <div className="w-1/2 bg-red-300 h-full flex flex-col gap-2 p-8 justify-between">
          <div className="">
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <p className="text-xl font-semibold mt-2">Rs. {product.price}</p>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <Button className="" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto bg-green-300 h-[50vh]"></div>
    </div>
  );
};

export default ShopDetailPage;
