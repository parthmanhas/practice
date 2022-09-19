import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import FeaturedPosts from "../components/featuredPosts/FeaturedPosts";
import AboutUs from "../components/aboutUs/AboutUs";
import ChooseCatergory from "./chooseCategory/ChooseCatergory";
import SpecialCategory from "./specialCategory/SpecialCategory";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedPosts />
      <AboutUs />
      <ChooseCatergory />
      <SpecialCategory />
    </>
  );
};

export default Home;
