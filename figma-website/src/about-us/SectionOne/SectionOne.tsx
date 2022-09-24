import "./SectionOne.scss";

const SectionOne = () => {
  return (
    <div className="about-us--section-one-container">
      <div className="top">
        <div className="left">
          <p className="cap-03">ABOUT US</p>
          <h1>We are a team of content writers who share their learnings</h1>
        </div>
        <div className="right">
          <p className="body-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="top">
        <div className="numbers">
          <div className="numbers--left">
            <h1>12+</h1>
            <p className="body-1">Blogs Published</p>
          </div>
          <div className="numbers--mid">
            <h1>18K+</h1>
            <p className="body-1">Views on Finsweet</p>
          </div>
          <div className="numbers--right">
            <h1>30K+</h1>
            <p className="body-1">Total active Users</p>
          </div>
        </div>
        <div className="design">
          <div className="design--left"></div>
          <div className="design--right"></div>
        </div>
          <img src={require("../../static/images/about-us-main.jpg")}></img>
        </div>
        <div className="bottom">
          <div className="left">
            <p className="cap-1">OUR MISSION</p>
            <h3>
              Creating valuable content for creatives all around the world
            </h3>
            <p className="body-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>
          <div className="right">
            <p className="cap-1">OUR VISION</p>
            <h3>A platform that empowers individuals to improve</h3>
            <p className="body-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
