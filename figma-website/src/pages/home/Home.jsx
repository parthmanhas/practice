import Hero from "./hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import FeaturedPosts from "./featuredPosts/FeaturedPosts";
import AboutUs from "./aboutUs/AboutUs";
import ChooseCatergory from "../../components/chooseCategory/ChooseCatergory";
import SpecialCategory from "./specialCategory/SpecialCategory";
import Author from "./authors/Author";
import Logos from "./logos/Logos";
import Testimonials from "./testimonials/Testimonials";
import JoinOurTeam from "../../components/joinOurTeam/JoinOurTeam";

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
      <Testimonials />
      <JoinOurTeam />
      <Footer />
    </>
  );
};

export default Home;
