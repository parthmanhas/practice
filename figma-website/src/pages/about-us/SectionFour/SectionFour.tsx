import SocialWrapper from "../../../components/socialWrapper/SocialWrapper";
import { Author } from "../Author.interface";
import "./SectionFour.scss";

const SectionFour = ({ authors }) => {
  return (
    <div className="about-us--section-four-container">
      <div className="top">
        <h2>List Of Authors</h2>
      </div>
      <div className="bottom">
        {authors.map((author: Author) => (
          <div className="author">
            <div className="top">
              <div className="wrapper">
                <img
                  src={require("../../../static/images/author-1.jpeg")}
                ></img>
              </div>
            </div>
            <div className="bottom">
              <h3>{author.name}</h3>
              <p className="body-2">{author.description}</p>
              <SocialWrapper />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFour;
