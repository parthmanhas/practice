import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BlogFeaturedPost from "./blog-featured-post/BlogFeaturedPost";
import AllPosts from "./all-posts/AllPosts";
import ChooseCatergory from "../../components/chooseCategory/ChooseCatergory";
import JoinOurTeam from "../../components/joinOurTeam/JoinOurTeam";


//mock data
import { mockedBlogs } from "./blog.mock";
import { useRef } from "react";

const Blog = () => {

  const bottomRef = useRef();

  return (
    <>
      <Navbar scrollTo={bottomRef}/>
      <BlogFeaturedPost />
      <AllPosts posts={mockedBlogs} />
      <ChooseCatergory />
      <JoinOurTeam />
      <div ref={bottomRef}>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
