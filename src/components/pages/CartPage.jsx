import { useEffect } from "react";
import CartContainer from "../template/main/CartContainer/CartContainer";

export default function CartPage({ props }) {
  const { cartItems, setCartItems, setIsAdded, addToCart } = props;

  useEffect(() => {
    setIsAdded(false);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const containerProps = {
    cartItems: cartItems,
    setCartItems: setCartItems,
    handleRemoveItem: handleRemoveItem,
    addToCart: addToCart,
  };
  return (
    <>
      <h1>Cart</h1>
      <CartContainer props={containerProps} />
    </>
  );
}
