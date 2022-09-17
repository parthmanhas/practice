import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import FeaturedPosts from "../components/featuredPosts/FeaturedPosts";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedPosts />
    </>
  );
};

export default Home;
