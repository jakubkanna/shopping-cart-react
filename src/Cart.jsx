import React, { useEffect } from "react";
import CartContainer from "./components/main/cartContainer/CartContainer";

export default function Cart({ props }) {
  const { cartItems, setCartItems, setIsAdded } = props;

  useEffect(() => {
    setIsAdded(false);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <h1>Cart</h1>
      <CartContainer
        cartItems={cartItems}
        handleRemoveItem={handleRemoveItem}
      />
    </>
  );
}
