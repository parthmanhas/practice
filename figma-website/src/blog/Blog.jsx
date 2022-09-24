import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import BlogFeaturedPost from "./blog-featured-post/BlogFeaturedPost";
import AllPosts from "./all-posts/AllPosts";
import ChooseCatergory from "../components/chooseCategory/ChooseCatergory";
import JoinOurTeam from "../components/joinOurTeam/JoinOurTeam";

const Blog = () => {
  return (
    <>
      <Navbar />
      <BlogFeaturedPost />
      <AllPosts />
      <ChooseCatergory />
      <JoinOurTeam />
      <Footer />
    </>
  );
};

export default Blog;
