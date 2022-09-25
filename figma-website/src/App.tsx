import './App.scss';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import AboutUs from './pages/about-us/AboutUs';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/about-us",
    element: <AboutUs />
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
