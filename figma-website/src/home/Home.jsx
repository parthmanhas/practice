import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import FeaturedPosts from "../components/featuredPosts/FeaturedPosts";
import AboutUs from "../components/aboutUs/AboutUs";
import ChooseCatergory from "./chooseCategory/ChooseCatergory";
import SpecialCategory from "./specialCategory/SpecialCategory";
import Author from "./authors/Author";
import Logos from "./logos/Logos";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedPosts />
      <AboutUs />
      <ChooseCatergory />
      <SpecialCategory />
      <Author />
      <Logos />
    </>
  );
};

export default Home;
