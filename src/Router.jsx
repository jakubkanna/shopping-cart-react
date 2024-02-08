import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/template/App";
import HomePage from "./components/pages/HomePage";
import CartPage from "./components/pages/CartPage";
import ErrorPage from "./components/pages/ErrorPage";
import { useState } from "react";

const Router = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  function addToCart(item) {
    const timestamp = Date.now();
    const newItem = { ...item, timestamp: timestamp };
    const newCartItems = [...cartItems, newItem];
    setCartItems(newCartItems);
  }

  const homeProps = {
    addToCart: addToCart,
    setIsAdded: setIsAdded,
  };

  const cartProps = {
    cartItems: cartItems,
    setCartItems: setCartItems,
    setIsAdded: setIsAdded,
    addToCart: addToCart,
  };

  const itemCount = cartItems.length;

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App isAdded={isAdded} setIsAdded={setIsAdded} itemCount={itemCount} />
      ),
      children: [
        {
          path: "/",
          element: <HomePage props={homeProps} />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/cart",
          element: <CartPage props={cartProps} />,
          errorElement: <ErrorPage />,
        },
      ],
    },
    {},
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
