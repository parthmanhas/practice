import "./AllPosts.scss";

import { Post } from "../Blog.interace";

const AllPosts = ({ posts }) => {
  return (
    <div className="all-posts-container">
      <div className="top">
        <h1>All Posts</h1>
      </div>
      <div className="middle">
        {posts.map((post: Post) => (
          <div className="post">
            <div className="left">
              <img src={require(`../../../static/images/${post.imgUrl}`)} alt=""></img>
            </div>
            <div className="right">
              <span className="cap-1">{post.category}</span>
              <h2>{post.heading}</h2>
              <p className="body-1">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bottom">
        <h4>&lt; Prev</h4>
        <h3>Next &gt;</h3>
      </div>
    </div>
  );
};

export default AllPosts;
