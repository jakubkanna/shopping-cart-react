import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import Router from "../src/Router";

describe("Home page", () => {
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
    },
  ];

  //mock fetch
  vi.mock(
    "../src/components/template/main/ProductsContainer/ProductsContainer",
    () => ({
      default: ({ setIsAdded, addToCart }) => (
        <>
          {products.map((product) => (
            <button
              type="button"
              key={product.id}
              onClick={() => {
                setIsAdded(true);
                addToCart(product);
              }}>
              Add to cart
            </button>
          ))}
        </>
      ),
    })
  );
  window.history.pushState({}, "", "/");

  it("renders products", () => {
    const { container } = render(<Router />); // renders homepage

    expect(container).toMatchSnapshot();
  });

  it("displays message after add to cart click", async () => {
    const user = userEvent.setup();

    render(<Router />);

    const button = screen.getByRole("button", { name: "Add to cart" });

    await user.click(button);

    expect(
      screen.getByText("Item successfully added to cart.")
    ).toBeInTheDocument();
  });
});
