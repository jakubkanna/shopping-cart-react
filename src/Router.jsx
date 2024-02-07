import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
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
          element: <Home props={homeProps} />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/cart",
          element: <Cart props={cartProps} />,
          errorElement: <ErrorPage />,
        },
      ],
    },
    {},
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
