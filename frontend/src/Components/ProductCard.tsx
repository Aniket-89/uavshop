import Button from "./Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

interface Product {
  image: string;
  name: string;
  summary: string;
  price: number;
  id: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white sm:w-72 w-[46%] min-w-[230px] mx-auto my-6 flex flex-col items-center justify-between rounded lg:px-2 py-2 p-1 group overflow-hidden">
      <div className="overflow-hidden w-full">
        <img
          src={`${product.image}`}
          alt={product.name}
          className="w-full sm:h-48 lg:h-56 h-36 object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in"
        />
      </div>
      <div className="grid">
        <h3 className="text-xl font-bold mb-2 text-center">{product.name}</h3>
        <p className="text-gray-600 text-center line-clamp-3">
          {product.summary}
        </p>
        <span className="text-green-600 lg:text-2xl font-bold my-2">
          Rs. {product.price}
        </span>
        <Link to={`/${product.id}`}>
          <Button className="mx-4 lg:px-8">Buy Now</Button>
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
