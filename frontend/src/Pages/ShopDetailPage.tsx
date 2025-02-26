import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useCart } from "../assets/CartContext";
import Button from "../Components/Button";
import { API_BASE_URL } from "../config";

interface Product {
  id: number;
  name: string;
  description: string; // HTML content from API
  summary: string;
  image: string;
  price: number;
}

const ShopDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
//   const { addToCart } = useCart();

//   const handleAddToCart = () => {
//     if (product) {
//       addToCart(product);
//     }
//   };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products/${id}/`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data: Product = await response.json();
        setProduct(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading product details...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
  if (!product) return <div className="text-center mt-10 text-gray-500">Product not found.</div>;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Product Overview Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        <div className="md:w-1/2 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={product.image.startsWith("http") ? product.image : `${product.image}`}
            alt={product.name}
            className="h-[400px] w-full object-cover"
          />
        </div>

        {/* Product Details Section */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div className="grid gap-4">
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <p>{product.summary}</p>
            <p className="text-2xl font-semibold mt-2 text-gray-800">Rs. {product.price}</p>
          </div>

          {/* Add to Cart Button */}
          {/* <Button className="mt-4 w-full md:w-auto" onClick={handleAddToCart}>
            Add to Cart
          </Button> */}
          <Button className="mt-4 w-full md:w-auto"><a href="tel:+918130589012">Call Now</a></Button>
        </div>
      </div>
      {/* Full Description Section */}
      <div className="mt-8 px-6 py-8 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold border-b border-gray-300 pb-2">Description</h2>
        <div
          className="mt-4 text-gray-700 grid gap-4"
          dangerouslySetInnerHTML={{ __html: product.description }} // Render HTML description
        />
      </div>
    </div>
  );
};

export default ShopDetailPage;
