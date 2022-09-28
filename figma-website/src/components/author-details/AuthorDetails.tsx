import "./AuthorDetails.scss";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import SocialWrapper from "../socialWrapper/SocialWrapper";

const AuthorDetails = ({ authorDetail }) => {
  return (
    <>
      <Navbar />

      <div className="author-details-container">
        <div className="author-info-background"></div>
        <div className="author-info">
          <div className="author-info-top">
            <div className="left">
              <img
                src={require("../../static/images/author-details-author-img.jpg")}
              ></img>
            </div>
            <div className="right">
              <h1>{authorDetail.author.name}</h1>
              <p className="body-1">{authorDetail.author.description}</p>
              <SocialWrapper />
            </div>
          </div>
          <div className="author-info-bottom">
            <div className="yellow"></div>
            <div className="purple"></div>
          </div>
        </div>
        <div className="author-posts">
          <div className="top">
            <h1>My Posts</h1>
          </div>
          <div className="bottom">
            {authorDetail.posts.map((post) => (
              <div className="post">
                <div className="left">
                  <img
                    src={require("../../static/images/author-details-post.jpg")}
                  ></img>
                </div>
                <div className="right">
                  <p className="cap-1">{post.category}</p>
                  <h2>{post.heading}</h2>
                  <p className="body-1">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AuthorDetails;
