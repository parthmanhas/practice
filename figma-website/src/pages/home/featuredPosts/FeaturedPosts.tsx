import "./FeaturedPosts.scss";

import { IPost } from "../../../interface/App.interface";

const FeaturedPosts = ({
  featuredPost,
  posts,
}: {
  featuredPost: IPost;
  posts: IPost[];
}) => {

  //display only 4 posts
  posts = posts.slice(0, 4);

  return (
    <div className="featured-container">
      <div className="featured">
        <div className="heading-container">
          <h2>Featured Posts</h2>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="img-container">
              <img src={require('../../../static/images/featured-post.jpeg')}></img>
            </div>
            <div className="info-container">
              <p className="label-01">
                By <span>{featuredPost.author.name}</span> |{" "}
                {featuredPost.authoredDate}
              </p>
              <h3>{featuredPost.heading}</h3>
              <p className="body-1">{featuredPost.content}</p>
              <button>
                <h6>Read More &gt;</h6>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="all-posts">
        <div className="heading-container">
          <h2>All Posts</h2>
          <p>
            <span>View All</span>
          </p>
        </div>
        <div className="post-container">
          {posts.map((post) => (
            <a href={`/blog-post/${post.id}`}>
              <div className="post">
              <div className="label-01">
                By <span>{post.author.name}</span> | {post.authoredDate}
              </div>
              <h4>{post.heading}</h4>
            </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
