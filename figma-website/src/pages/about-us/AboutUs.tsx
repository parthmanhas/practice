import Footer from "../../components/footer/Footer";
import JoinOurTeam from "../../components/joinOurTeam/JoinOurTeam";
import Navbar from "../../components/navbar/Navbar";
import { mockedAuthors } from "./Author.mock";
import SectionFour from "./SectionFour/SectionFour";
import SectionOne from "./SectionOne/SectionOne";
import SectionThree from "./SectionThree/SectionThree";
import SectionTwo from "./SectionTwo/SectionTwo";
import { useRef } from 'react';

const AboutUs = () => {

  const bottomRef = useRef();

  return (
    <div className="about-us-container">
      <Navbar scrollTo={bottomRef}/>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour authors={mockedAuthors} />
      <JoinOurTeam />
      <div ref={bottomRef}>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
