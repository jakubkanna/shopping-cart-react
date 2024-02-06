import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";

const Router = () => {
  const mainProps = {
    addToCart: () => {
      console.log("click");
    },
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home props={mainProps} />, // Pass mainProps to Home component
          errorElement: <ErrorPage />,
        },
        {
          path: "/cart",
          element: <Cart />,
          errorElement: <ErrorPage />,
        },
      ],
    },
    {},
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
