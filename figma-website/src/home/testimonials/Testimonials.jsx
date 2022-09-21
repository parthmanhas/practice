import "./Testimonials.scss";
import Author1Img from '../../static/images/author-1.jpeg';

const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <div className="left">
        <p className="cap-1">TESTIMONIALS</p>
        <h2>What people say about our blog</h2>
        <p className="body-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <div className="right">
        <div className="top">
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h4>
        </div>
        <div className="bottom">
            <div className="author">
                <div className="icon">
                    <img src={Author1Img}></img>
                </div>
                <div className="info">
                    <h4>Jonathan Valiem</h4>
                    <p className="body-1">New York, USA</p>
                </div>
            </div>
            <div className="arrows">
                <div className="left-arrow">&lt;--</div>
                <div className="right-arrow">--&gt;</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
