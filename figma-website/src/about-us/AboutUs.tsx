import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import SectionFour from "./SectionFour/SectionFour";
import SectionOne from "./SectionOne/SectionOne";
import SectionThree from "./SectionThree/SectionThree";
import SectionTwo from "./SectionTwo/SectionTwo";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  );
};

export default AboutUs;
