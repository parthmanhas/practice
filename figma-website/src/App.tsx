import "./App.scss";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import AboutUs from "./pages/about-us/AboutUs";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./pages/contact-us/ContactUs";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import BlogPost from "./components/blog-post/BlogPost";
import Categories from "./pages/categories/Categories";
import AuthorDetails from "./components/author-details/AuthorDetails";
import { authorDetailsMock } from "./components/author-details/AuthorDetails.mock";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
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
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/blog-post",
    element: (
      <BlogPost blogPost={{}} recommendations={[]} blogPostAuthor={{}} />
    ),
  },
  {
    path: "/categories/:category",
    element: (
      <Categories
        categoryPosts={[]}
        categories={["Startup", "Business", "Economy", "Technology"]}
        tags={[
          "Business",
          "Experience",
          "Technology",
          "Screen",
          "Marketing",
          "Life",
        ]}
      />
    ),
  },
  {
    path: "/author-details",
    element: <AuthorDetails authorDetail={authorDetailsMock} />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
