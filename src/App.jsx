import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Components/Cart/Cart";
import RootLayout from "./Pages/RootLayout";
import './App.css';
import CartProvider from "./Store/CartProvider";
import OrderConfirm from "./Pages/OrderConfirm";
import Login from "./Pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart/> ,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/orderplaced",
        element: <OrderConfirm/> ,
      },
    ],
  },
]);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
