import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import FeaturedPosts from "../components/featuredPosts/FeaturedPosts";
import AboutUs from "../components/aboutUs/AboutUs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedPosts />
      <AboutUs />
    </>
  );
};

export default Home;
