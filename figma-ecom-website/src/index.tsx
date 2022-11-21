import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import { GLOBAL_THEME } from "./styles/GlobalTheme";
import Category from "./pages/category/Category";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/cart";
import Checkout from './pages/Checkout';
import CheckoutPayment from './pages/CheckoutPayment';
import PersonalInformation from "./pages/PersonalInformation";
import MyOrders from './pages/MyOrders';
import OrderDetails from './pages/OrderDetails';
import About from "./pages/About";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category/:category",
    element: <Category />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/checkout-payment",
    element: <CheckoutPayment />,
  },
  {
    path: "/personal",
    element: <PersonalInformation />,
  },
  {
    path: "/my-orders",
    element: <MyOrders />,
  },
  {
    path: "/order-details",
    element: <OrderDetails />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={GLOBAL_THEME}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
