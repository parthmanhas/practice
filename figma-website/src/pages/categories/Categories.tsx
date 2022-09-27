import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './Categories.scss';
import { categoryPostsMock } from './Categories.mock';
import { CategoryPost } from './Categories.interface';

const Categories = ({ categoryPosts, categories, tags }) => {
  categoryPosts = categoryPostsMock;
  return (
    <>
      <Navbar />
      <div className="top-background"></div>
      <div className="categories-container">
        <div className="top">
          <h1>Business</h1>
          <p className='body-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          <p className='cap-03'>BLOG &gt; BUSINESS</p>
        </div>
        <div className="bottom">
          <div className="left">
            {categoryPosts.map((post: CategoryPost) => (
              <div className="post">
                <div className="post--left">
                  <img src={require('../../static/images/blog-featured-post.jpg')}></img>
                </div>
                <div className="post--right">
                  <p className='cap-1'>{post.category}</p>
                  <h2>{post.postHeading}</h2>
                  <p className='body-1'>{post.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="right">
            <h2>Categories</h2>
            <ul>
              {categories.map(category => (
                <li>
                  <div className="icon"></div>
                  {category}
                </li>
              ))}
            </ul>
            <h2>All Tags</h2>
            <div className="tags">
              {tags.map(tag => (
                <div className="tag">{tag}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Categories;