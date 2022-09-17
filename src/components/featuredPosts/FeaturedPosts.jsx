import "./FeaturedPosts.scss";

import featuredPostImg from "../../static/images/featured-post.jpeg";

const FeaturedPosts = () => {
  return (
    <div className="container">
      <div className="featured">
        <h2>Featured Posts</h2>
        <div className="card-container">
          <div className="card">
            <div className="img-container">
              <img src={featuredPostImg}></img>
            </div>
            <div className="info-container">
              <p className="label-01">
                By <span>John Doe</span> | May 23, 2022
              </p>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </h3>
              <p className="body-1">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <button>
                <h6>Read More &gt;</h6>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="all-posts">
        <div className="top-container">
          <h2>All Posts</h2>
          <p>View All</p>
        </div>
        <div className="post-container">
          <div className="post">
            <div className="label-01">
              By <span>John Deo</span> | Aug 23, 2021{" "}
            </div>
            <h4>
              8 Figma design systems that you can download for free today.
            </h4>
          </div>
          <div className="post">
            <div className="label-01">
              By <span>John Deo</span> | Aug 23, 2021{" "}
            </div>
            <h4>
              8 Figma design systems that you can download for free today.
            </h4>
          </div>
          <div className="post">
            <div className="label-01">
              By <span>John Deo</span> | Aug 23, 2021{" "}
            </div>
            <h4>
              8 Figma design systems that you can download for free today.
            </h4>
          </div>
          <div className="post">
            <div className="label-01">
              By <span>John Deo</span> | Aug 23, 2021{" "}
            </div>
            <h4>
              8 Figma design systems that you can download for free today.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
