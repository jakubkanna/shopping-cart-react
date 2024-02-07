import { useEffect, useState } from "react";
import {
  ProductImage,
  ProductTitle,
} from "../ProductsContainer/ProductsContainerStyles";
import { CartImgWrapper, CartItem, CartList } from "./CartContainerStyles";

export default function CartContainer({ cartItems, handleRemoveItem }) {
  function getCount(array, item) {
    return array.filter((cartItem) => cartItem.id === item.id).length;
  }

  const uniqueList = [...new Set([...cartItems])];

  return (
    <>
      <CartList>
        {uniqueList.map((item) => {
          const itemInCartQuantity = getCount(cartItems, item);
          return (
            <CartItem key={item.id}>
              <CartImgWrapper>
                <ProductImage src={item.image} alt={item.title} />
              </CartImgWrapper>
              <ProductTitle>{item.title}</ProductTitle>
              <p>Quantity: {itemInCartQuantity}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </CartItem>
          );
        })}
      </CartList>
      <div className="details">
        <h2>Placeholder Container</h2>
        <p>Total Quantity:</p>
        {/* Add other content for the placeholder container */}
      </div>
    </>
  );
}
