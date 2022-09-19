import './SpecialCategory.scss';
import SpecialPostImg from '../../static/images/special-post.jpg';

const SpecialCategory = () => {
  return (
    <div className="special-category-container">
        <div className="left">
            <img src={SpecialPostImg}></img>
        </div>
        <div className="right">
            <p className='cap-1'>WHY WE STARTED</p>
            <h1>It started out as a simple idea and evolved into our passion</h1>
            <p className='body-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button>Discover our story &gt;</button>
        </div>
    </div>
  )
}

export default SpecialCategory