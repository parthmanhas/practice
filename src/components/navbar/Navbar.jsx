import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='logo'>
        &#123;Finsweet
        </div>
        <ul className='nav-items'>
            <li>Home</li>
            <li>Blog</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li><button>Subscribe</button></li>
        </ul>
    </div>
  )
}

export default Navbar