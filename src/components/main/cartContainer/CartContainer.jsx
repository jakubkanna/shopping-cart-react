import { useEffect, useState } from "react";
import {
  ProductImage,
  ProductTitle,
} from "../ProductsContainer/ProductsContainerStyles";
import {
  CartImgWrapper,
  CartItem,
  CartList,
  QuantityInput,
  CartContainerStyled,
} from "./CartContainerStyles";

import { Link } from "react-router-dom"; // Import Link from react-router-dom

// Assuming "/" is your store page route

export default function CartContainer({ props }) {
  const { cartItems, setCartItems, handleRemoveItem, addToCart } = props;

  const [uniqueList, setUniqueList] = useState(getUniqueList());

  useEffect(() => {
    setUniqueList(getUniqueList());
  }, [cartItems]);

  function getUniqueList() {
    const uniqueItems = [];
    cartItems.forEach((item) => {
      if (!uniqueItems.some((uniqueItem) => uniqueItem.id === item.id)) {
        uniqueItems.push(item);
      }
    });
    return uniqueItems.sort((a, b) => a.id - b.id);
  }

  function getCount(item) {
    return cartItems.filter((cartItem) => cartItem.id === item.id).length;
  }

  function handleChange(e, item) {
    e.target.value > item.quantity
      ? addToCart(item)
      : setCartItems(reduceQuantity(item));
  }

  function reduceQuantity(item) {
    const newList = cartItems.filter((obj) => obj.timestamp !== item.timestamp);
    return newList;
  }

  function calculateTotalPrice() {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * getCount(item);
    });
    return parseFloat(totalPrice.toFixed(2));
  }

  return (
    <CartContainerStyled>
      {cartItems.length === 0 ? ( // Check if cart is empty
        <>
          <p>Your cart is empty.</p>
          <p>
            <Link to="/">Go to store page</Link>
          </p>
        </>
      ) : (
        <>
          <CartList>
            {uniqueList.map((item) => {
              item.quantity = getCount(item);
              return (
                <CartItem key={item.id}>
                  <CartImgWrapper>
                    <ProductImage src={item.image} alt={item.title} />
                  </CartImgWrapper>
                  <ProductTitle>{item.title}</ProductTitle>
                  <div>
                    <p>Quantity:</p>
                    <QuantityInput
                      type="number"
                      value={item.quantity}
                      name="itemQuantity"
                      id="itemQuantity"
                      onChange={(e) => handleChange(e, item)}
                    />
                  </div>
                  <p>Price: ${item.price}</p>
                  <button onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </button>
                </CartItem>
              );
            })}
          </CartList>

          <div className="details">
            <h2>Summary</h2>
            <p>Total Price: {calculateTotalPrice()}</p>

            <button type="button">Proceed to Checkout</button>
          </div>
        </>
      )}
    </CartContainerStyled>
  );
}
