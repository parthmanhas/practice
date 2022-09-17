import './Hero.scss';

import heroImg from '../../static/images/hero.jpeg';

const Hero = () => {
  return (
    <div className='hero'>
        <img src={heroImg} alt="img"></img>
        <div className="overlay"></div>
        <div className='hero-info'>
            <h2>POSTED ON <b>STARTUP</b></h2>
            <h1>Step-by-step guide to choosing great font pairs</h1>
            <p>By <span>James West</span> |  May 23, 2022 </p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <button>Read More &gt;</button>
        </div>
        
    </div>
  )
}

export default Hero