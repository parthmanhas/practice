import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BlogFeaturedPost from "./blog-featured-post/BlogFeaturedPost";
import AllPosts from "./all-posts/AllPosts";
import ChooseCatergory from "../../components/chooseCategory/ChooseCatergory";
import JoinOurTeam from "../../components/joinOurTeam/JoinOurTeam";


//mock data
import { mockedBlogs } from "./blog.mock";

const Blog = () => {
  return (
    <>
      <Navbar />
      <BlogFeaturedPost />
      <AllPosts posts={mockedBlogs} />
      <ChooseCatergory />
      <JoinOurTeam />
      <Footer />
    </>
  );
};

export default Blog;
