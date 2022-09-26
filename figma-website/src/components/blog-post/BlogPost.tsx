import Footer from "../footer/Footer";
import JoinOurTeam from "../joinOurTeam/JoinOurTeam";
import Navbar from "../navbar/Navbar";
import { BlogPostRecommendation } from "./BlogPost.interface";
import {
  blogPostAuthorMock,
  blogPostMock,
  blogRecommendationsMock,
} from "./BlogPost.mock";
import "./BlogPost.scss";

const BlogPost = ({ blogPost, recommendations, blogPostAuthor }) => {
  blogPost = blogPostMock;
  recommendations = blogRecommendationsMock;
  blogPostAuthor = blogPostAuthorMock;
  return (
    <>
      <Navbar />

      <div className="blog-container">
        <div className="wrapper">
          <div className="info">
            <div className="author-img">
              <img src={require("../../static/images/author-1.jpeg")}></img>
            </div>
            <div className="author-info">
              <h3>{blogPostAuthor.name}</h3>
              <p className="body-1">Posted on {blogPostAuthor.date}</p>
            </div>
          </div>
          <div className="blog-info">
            <h1>Step-by-step guide to choosing great font pairs</h1>
            <div className="blog-category">
              <div className="icon"></div>
              <h4>Startup</h4>
            </div>
          </div>
          <div className="blog-img">
            <img src={require("../../static/images/blog-post.jpg")}></img>
          </div>
          <div className="blog">{blogPost.content}</div>
        </div>

        <h2>What to read next</h2>
        <div className="what-to-read-next">
          {recommendations.map((post: BlogPostRecommendation) => (
            <div className="post">
              <img
                src={require("../../static/images/blog-post-recommendation.jpg")}
              ></img>
              <div className="post-content">
                <p>
                  By <span>{post.authorName}</span> | {post.date}
                </p>
                <h3>{post.postHeading}</h3>
                <p className="body-1">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
        <hr></hr>
        <JoinOurTeam />
      </div>

      <Footer />
    </>
  );
};

export default BlogPost;
