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
import { authorsMock } from "./Home.mock";
import { useRef } from "react";

const Home = () => {
  const bottomRef = useRef();

  return (
    <>
      <Navbar scrollTo={bottomRef} />
      <Hero />
      <FeaturedPosts />
      <AboutUs />
      <ChooseCatergory />
      <SpecialCategory />
      <Author authors={authorsMock} />
      <Logos />
      <Testimonials />
      <JoinOurTeam />
      <div ref={bottomRef}>
        <Footer />
      </div>
    </>
  );
};

export default Home;
