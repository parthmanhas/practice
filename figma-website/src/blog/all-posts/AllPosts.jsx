import './AllPosts.scss';

import Post1Img from '../../static/images/post-1.jpg';

const AllPosts = () => {
  return (
    <div className="all-posts-container">
        <div className="top">
            <h1>All Posts</h1>
        </div>
        <div className="middle">
            <div className="post">
                <div className="left">
                    <img src={Post1Img}></img>
                </div>
                <div className="right">
                    <span className='cap-1'>STARTUP</span>
                    <h2>Design tips for designers that cover everything you need</h2>
                    <p className='body-1'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                </div>
            </div>
        </div>
        <div className="bottom">
            <h4>&lt; Prev</h4>
            <h3>Next &gt;</h3>
        </div>
    </div>
  )
}

export default AllPosts