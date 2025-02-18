import Button from "./Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const api = "http://localhost:8000";

const ProductCard: React.FC<{ product: any }> = ({ product }) => {

  return (
    <div className="product-card w-fit rounded p-4 group overflow-hidden">
      <img
        src={`${api}/${product.image}`}
        alt={product.name}
        className="w-full h-48 object-cover object-center rounded mb-4 group-hover:scale-105 transition-transform duration-300 ease-in"
      />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <span className="text-green-500 font-bold">Rs. {product.price}</span>
      <Link to={`/${product.id}`}>
        <Button className="mx-4">Buy Now</Button>
      </Link>
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
