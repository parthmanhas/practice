import "./BlogFeaturedPost.scss";
import BlogFeaturedPostImg from "../../../static/images/blog-featured-post.jpg";

const BlogFeaturedPost = () => {
  return (
    <div className="blog-featured-post-container">
      <div className="wrapper">
        <div className="left">
          <p className="cap-03">FEATURED POST</p>
          <h2>Step-by-step guide to choosing great font pairs</h2>
          <p>
            By <span>John Doe</span> | May 23, 2022
          </p>
          <p className="body-1">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <button>Read More &gt;</button>
        </div>
        <div className="right">
          <img src={BlogFeaturedPostImg}></img>
        </div>
      </div>
    </div>
  );
};

export default BlogFeaturedPost;
