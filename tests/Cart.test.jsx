import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Router from "../src/Router";
import CartContainer from "../src/components/template/main/CartContainer/CartContainer";

const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
    timestamp: 1707478816745,
  },
];

vi.mock("../src/components/template/main/CartContainer/CartContainer", () => ({
  default: ({ cartItems, handleRemoveItem }) => (
    <div>
      {cartItems.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <p>
            <Link to="/">Go to store page</Link>
          </p>
        </>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>Title: {item.title}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          ))}
          <div className="details">
            <h2>Summary</h2>
            <p>Total Price: {/* Here goes your total price calculation */}</p>
            <button type="button">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  ),
}));

describe("Cart page", () => {
  window.history.pushState({}, "", "/cart");

  it("renders products", () => {
    render(<Router />);

    screen.debug();

    expect(
      screen.getByText("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
    ).toBeInTheDocument();
  });
});
