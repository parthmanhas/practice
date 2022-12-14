import { IAuthor, IPost } from "../../interface/App.interface";
import Footer from "../footer/Footer";
import JoinOurTeam from "../joinOurTeam/JoinOurTeam";
import Navbar from "../navbar/Navbar";
import "./BlogPost.scss";
import { useRef } from 'react';

const BlogPost = ({ blogPost, recommendations, blogPostAuthor }: {blogPost: IPost, recommendations: IPost[], blogPostAuthor: IAuthor}) => {

  const bottomRef = useRef();

  return (
    <>
      <Navbar scrollTo={bottomRef}/>

      <div className="blog-container">
        <div className="wrapper">
          <div className="info">
            <div className="author-img">
              <img src={require("../../static/images/author-1.jpeg")}></img>
            </div>
            <div className="author-info">
              <h3>{blogPostAuthor.name}</h3>
              <p className="body-1">Posted on {blogPost.authoredDate}</p>
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
          {recommendations.map(post => (
            <div className="post">
              <img src={require("../../static/images/blog-post-recommendation.jpg")}
              ></img>
              <div className="post-content">
                <p>
                  By <span>{post.author.name}</span> | {post.authoredDate}
                </p>
                <h3>{post.heading}</h3>
                <p className="body-1">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
        <hr></hr>
        <JoinOurTeam />
      </div>

      <div ref={bottomRef}>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
