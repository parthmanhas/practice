import './SectionTwo.scss';

const SectionTwo = () => {
  return (
    <div className="about-us--section-two-container">
      <div className="left">
        <h2>Our team of creatives</h2>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </p>
      </div>
      <div className="right">
        <img src={require('../../static/images/about-us-section-2.jpg')}></img>
        <div className="box"></div>
      </div>
     
    </div>
  );
};

export default SectionTwo;
