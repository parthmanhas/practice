import './Hero.scss';

import heroImg from '../../static/images/hero.jpeg';

const Hero = () => {
  return (
    <div className='hero'>
        <img src={heroImg}></img>
        <div className="overlay"></div>
        
    </div>
  )
}

export default Hero