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
    <div className="max-w-[260px] lg:min-w-[260px] flex-1 bg-white rounded-sm overflow-hidden shadow-sm group">
      <div className="overflow-hidden w-full aspect-1">
        <img
          src={`${product.image}`}
          alt={product.name}
          className="w-full h-full aspect-1 object-cover object-center aspect-square group-hover:scale-105 transition-transform duration-300 ease-in"
        />
      </div>
      <div className="flex flex-col gap-1 items-center my-2">
        <h3 className="text-xl line-clamp-1 font-heading font-bold text-wrap text-center">
          {product.name}
        </h3>
        {/* <p className="text-gray-600 text-center line-clamp-3">
          {product.summary}
        </p> */}
        <span className="text-green-600 lg:text-lg font-medium my-2">
        &#8377; {product.price}
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
