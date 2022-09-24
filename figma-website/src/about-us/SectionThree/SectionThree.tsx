import "./SectionThree.scss";

const SectionThree = () => {
  return (
    <div className="about-us--section-three-container">
      <div className="left">
        <div className="wrapper">
          <img src={require("../../static/images/about-us-section-3.jpg")}></img>
          <div className="circle"></div>
        </div>
      </div>
      <div className="right">
        <h2>Why we started this Blog</h2>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </h4>
        <p className="body-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </p>
      </div>
    </div>
  );
};

export default SectionThree;
