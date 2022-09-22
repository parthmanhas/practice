import './App.scss';
import Home from './home/Home';
import Blog from './blog/Blog';

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
    element: <Blog />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
