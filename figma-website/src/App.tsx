import "./App.scss";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import AboutUs from "./pages/about-us/AboutUs";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ContactUs from "./pages/contact-us/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
