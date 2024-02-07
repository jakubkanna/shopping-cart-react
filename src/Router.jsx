import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import { useState } from "react";

const Router = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  const mainProps = {
    addToCart: (item) => {
      const newCartItems = [...cartItems, item];
      setCartItems(newCartItems);
      setIsAdded(true);
    },
  };

  const cartProps = {
    cartItems: cartItems,
    setCartItems: setCartItems,
    setIsAdded: setIsAdded,
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
          element: <Home props={mainProps} />,
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
