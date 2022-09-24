import './App.scss';
import Home from './home/Home';
import Blog from './blog/Blog';
import AboutUs from './about-us/AboutUs';

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
