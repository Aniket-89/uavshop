import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useCart } from "../assets/CartContext";
import Button from "../Components/Button";
import { API_BASE_URL } from "../config";
import DetailPageSkeletonLoading from "../Components/DetailPageSkeletonLoading";
import { PaymentMethodLogos } from "../assets/assets";

interface Product {
  id: number;
  name: string;
  description: string; // HTML content from API
  summary: string;
  image: string;
  features: [];
  price: number;
  images: { id: number; image: string }[];
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

  if (loading) return <DetailPageSkeletonLoading />;

  if (error)
    return <div className="text-center mt-10 text-red-500">Error: {error}</div>;

  if (!product)
    return (
      <div className="text-center mt-10 text-gray-500">Product not found.</div>
    );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Product Overview Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        <div className="md:w-1/2">
          <div className=" bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[724px] min-h-[400px]  w-full object-cover"
            />
          </div>
          <div className="flex gap-2 mt-4">
            {product.images.map((img) => (
              <img
                key={img.id}
                src={img.image}
                alt={product.name}
                className="w-32 h-32 rounded-sm"
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="md:w-1/2 flex mb-8 flex-col justify-between">
          <div className="grid gap-6">
            <h2 className="text-3xl font-bold font-heading">{product.name}</h2>
            <p className="text-2xl font-semibold mt-2 text-gray-800">
              &#8377;{product.price}
            </p>
            <ul className="my-4">
              {product.features.map((feature, index) => (
                <li className="list-disc ml-4 font-medium" key={index}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Add to Cart Button */}
          {/* <Button className="mt-4 w-full md:w-auto" onClick={handleAddToCart}>
            Add to Cart
          </Button> */}
          <div className="w-full border h-[140px] px-3 pt-1 bg-green-100">
            <h4 className="text-lg ">Payment methods</h4>
            <ul className="flex gap-8 items-center my-4 justify-center">
                {PaymentMethodLogos.map((_, index) => (
                    <img src={_} alt="" key={index} height={72} width={72} />
                ))}
            </ul>
          </div>
          <Button className="w-full md:w-auto">
            <a href="tel:+918130589012">Call Now</a>
          </Button>
        </div>
      </div>

      {/* Full Description Section */}
      <div className="mt-8 px-6 py-8 rounded-lg mx-auto">
        <h2 className="text-2xl font-semibold border-b border-gray-300 pb-2">
          Description
        </h2>
        <div
          className="mt-4 text-gray-800 space-y-4 mx-auto w-full"
          dangerouslySetInnerHTML={{ __html: product.description }} // Render HTML description
        />
      </div>
    </div>
  );
};

export default ShopDetailPage;
