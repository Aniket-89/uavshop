import React from 'react';
import { useCart } from '../assets/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleQuantityChange = (productId: number, quantity: number) => {
    if (quantity > 0) {
      updateQuantity(productId, quantity);
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-8">
      <h2 className='text-3xl font-semibold'>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} className="cart-item-img" />
              <h3>{product.name}</h3>
              <p>Rs. {product.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(product.id, product.quantity - 1)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>+</button>
              </div>
              <button onClick={() => removeFromCart(product.id)} className="remove-btn">Remove</button>
            </div>
          ))}
          <div className="cart-footer">
            <button onClick={clearCart} className="clear-cart-btn">Clear Cart</button>
            <p>Total: Rs. {cart.reduce((total, product) => total + product.price * product.quantity, 0)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
