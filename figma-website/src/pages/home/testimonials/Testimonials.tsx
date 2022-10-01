import "./Testimonials.scss";
import { ITestimonials } from "../../../interface/App.interface";
import { RefObject, useRef, useState } from "react";

const Testimonials = ({ testimonials }: { testimonials: ITestimonials[] }) => {
  const testimonialRef: RefObject<HTMLDivElement> = useRef();
  const testimonialSliderRef: RefObject<HTMLDivElement> = useRef();
  const [sliderCount, setSliderCount] = useState(1);

  const slide = (direction) => {
    let multiplier = 0;
    if(direction === 'left'){
      multiplier = -1; 
      setSliderCount((sliderCount + 1) % testimonials.length);
    } else {
      multiplier = 1;

      setSliderCount((sliderCount - 1) % testimonials.length);
    }
    testimonialSliderRef.current.style.transform = `translateX(${(multiplier * 100 * sliderCount)}%)`;
  };

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
        <div className="testimonial-wrapper">
          <div ref={testimonialSliderRef} className="testimonial-slider">
            {testimonials.map((testimonial) => (
              <div ref={testimonialRef} className="testimonial">
                <div className="top">
                  <h4>{testimonial.content}</h4>
                </div>
                <div className="bottom">
                  <div className="author">
                    <div className="icon">
                      <img
                        src={require("../../../static/images/author-1.jpeg")}
                      ></img>
                    </div>
                    <div className="info">
                      <h4>{testimonial.author.name}</h4>
                      <p className="body-1">{testimonial.author.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="arrows">
          <div className="left-arrow" onClick={() => slide("left")}>
            &lt;--
          </div>
          <div className="right-arrow" onClick={() => slide("right")}>
            --&gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
