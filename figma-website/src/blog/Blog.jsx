import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import BlogFeaturedPost from "./blog-featured-post/BlogFeaturedPost";

const Blog = () => {
  return (
    <>
      <Navbar />
      <BlogFeaturedPost />
      <Footer />
    </>
  );
};

export default Blog;
