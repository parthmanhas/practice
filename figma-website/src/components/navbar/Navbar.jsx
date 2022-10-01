import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='logo'>
        &#123;Finsweet
        </div>
        <ul className='nav-items'>
            <li><a href='/home'>Home</a></li>
            <li><a href='/blog'>Blog</a></li>
            <li><a href='/about-us'>About Us</a></li>
            <li><a href='/contact-us'>Contact Us</a></li>
            <li><button>Subscribe</button></li>
        </ul>
    </div>
  )
}

export default Navbar