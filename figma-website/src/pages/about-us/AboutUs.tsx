import Footer from "../../components/footer/Footer";
import JoinOurTeam from "../../components/joinOurTeam/JoinOurTeam";
import Navbar from "../../components/navbar/Navbar";
import { mockedAuthors } from "./Author.mock";
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
      <SectionFour authors={mockedAuthors} />
      <JoinOurTeam />
      <Footer />
    </div>
  );
};

export default AboutUs;
