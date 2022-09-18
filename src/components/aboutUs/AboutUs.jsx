import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="pattern">
        <div className="yellow"></div>
        <div className="purple"></div>
      </div>
      <div className="info-container">
        <div className="about-us">
          <div className="wrapper">
            <p className="cap-1">ABOUT US</p>
            <h2>
              We are a community of content writers who share their learnings
            </h2>
            <p className="body-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              <span>Read More &gt;</span>
            </p>
          </div>
        </div>
        <div className="our-mission">
          <div className="wrapper">
            <p className="cap-1">OUR MISSION</p>
            <h3>
              Creating valuable content for creatives all around the world
            </h3>
            <p className="body-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
