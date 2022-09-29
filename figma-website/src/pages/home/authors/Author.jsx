import "./Authos.scss";
import Author1Img from "../../../static/images/author-1.jpeg";
import SocialWrapper from "../../../components/socialWrapper/SocialWrapper";

const Author = ({ authors }) => {
  return (
    <div className="author-container">
      <h2>List of Authors</h2>
      <div className="wrapper">
        {authors.map((author) => (
          <div className="author">
            <div className="image">
              <img src={Author1Img}></img>
            </div>
            <div className="name">
              <h3>{author.name}</h3>
            </div>
            <div className="sub-name">
              <p className="body-2">{author.description}</p>
            </div>
            <SocialWrapper />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Author;
