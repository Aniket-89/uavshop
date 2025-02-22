// // CartContext.tsx
// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// // Define a type for a product in the cart
// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
//   image: string;
// }

// // Define the context type
// interface CartContextType {
//   cart: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (productId: number) => void;
//   updateQuantity: (productId: number, quantity: number) => void;
//   clearCart: () => void;
// }

// // Create the context with an initial undefined value
// const CartContext = createContext<CartContextType | undefined>(undefined);

// // Custom hook to use the CartContext
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

// // Define props for the CartProvider including children
// interface CartProviderProps {
//   children: ReactNode;
// }

// // The CartProvider component
// export const CartProvider = ({ children }: CartProviderProps) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   // Load cart data from localStorage when the component mounts
//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   // Save cart data to localStorage whenever the cart changes
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   // Function to add a product to the cart
//   const addToCart = (product: Product) => {
//     setCart((prevCart) => {
//       const productIndex = prevCart.findIndex((p) => p.id === product.id);
//       if (productIndex >= 0) {
//         // Increase quantity if product already exists in cart
//         const updatedCart = [...prevCart];
//         updatedCart[productIndex].quantity += 1;
//         return updatedCart;
//       }
//       // Otherwise, add new product with initial quantity 1
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   // Function to remove a product from the cart
//   const removeFromCart = (productId: number) => {
//     setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
//   };

//   // Function to update the quantity of a product in the cart
//   const updateQuantity = (productId: number, quantity: number) => {
//     setCart((prevCart) =>
//       prevCart.map((product) =>
//         product.id === productId ? { ...product, quantity } : product
//       )
//     );
//   };

//   // Function to clear the cart
//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
