import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {

    setCartItems((prevItems) => [
      ...prevItems,
      product,
    ]);
   

  };
   const removeFromCart = (id) => {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== id)
      );
    };
    const totalPrice = cartItems.reduce((total, item) => total + Number(item.price),0);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;