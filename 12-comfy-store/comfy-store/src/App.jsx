import ErrorElement from "./components/ErrorElement";
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from "./pages";
import { store } from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as ProductsLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/Checkout";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <HomeLayout />,
    children: [
      {
        path: "",
        errorElement: <ErrorElement />,
        loader: landingLoader,
        element: <Landing />,
      },
      {
        path: "products",
        errorElement: <ErrorElement />,
        loader: ProductsLoader,
        element: <Products />,
      },
      {
        path: "products/:id",
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },

      {
        path: "checkout",
        element: <Checkout />,
        loader: checkoutLoader(store),
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
    action: registerAction,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
