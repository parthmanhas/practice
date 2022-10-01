import "./Authos.scss";
import SocialWrapper from "../../../components/socialWrapper/SocialWrapper";
import { IAuthor } from "../../../interface/App.interface";

const Author = ({ authors }: { authors: IAuthor[] }) => {
  return (
    <div className="author-container">
      <h2>List of Authors</h2>
      <div className="wrapper">
        {authors.map((author) => (
          <div className="author">
            <div className="image">
              <img src={require("../../../static/images/author-1.jpeg")}></img>
            </div>
            <div className="name">
              <h3>{author.name}</h3>
            </div>
            <div className="sub-name">
              <p className="body-2">{author.description.short}</p>
            </div>
            <SocialWrapper />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Author;
