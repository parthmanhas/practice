import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useEffect, useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

const List = ({ props }) => {

  const sliderWrapperRef = useRef();
  const sliderBulletsRef = useRef();
  const [percent, setPercent] = useState(-100);
  const [canTransition, setCanTransition] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  
  const handleClick = (direction) => {
    if(!canTransition) return 

    sliderBulletsRef.current.childNodes[activeSlide].classList.remove('active');
    
    setCanTransition(false);
    if(direction === 'left') {
      sliderWrapperRef.current.style.transform = `translateX(${percent - 100}%)`;
      setPercent(percent - 100);
      const activeSlideTemp = activeSlide - 1 < 0 ? 6 : activeSlide - 1;
      setActiveSlide(activeSlideTemp);
      sliderBulletsRef.current.childNodes[activeSlideTemp].classList.add('active');
    }
    
    if(direction === 'right') {
      sliderWrapperRef.current.style.transform = `translateX(calc(${percent + 100}%))`;
      setPercent(percent + 100);
      setActiveSlide((activeSlide + 1) % 7);
      sliderBulletsRef.current.childNodes[(activeSlide + 1) % 7].classList.add('active');
    }

  }

  const handleTransitionEnd = () => {
    setCanTransition(true)
    if(percent === -600) {
      setPercent(-100);
      sliderWrapperRef.current.style.transition = 'none';
      sliderWrapperRef.current.style.transform = `translateX(-100%)`;
      setTimeout(() => {
        sliderWrapperRef.current.style.transition = 'all 0.5s';
      }, 300)
    }
    
    if(percent === 0){
      sliderWrapperRef.current.style.transition = 'none';
      sliderWrapperRef.current.style.transform = `translateX(-500%)`;
      setPercent(-500);
      setTimeout(() => {
        sliderWrapperRef.current.style.transition = 'all 0.5s';
      }, 300)
    }
  }

  useEffect(() => {
    sliderBulletsRef.current.childNodes[0].classList.add('active');
  }, []);

  return (
    <div className="list">
      <div className="heading">Recently Added</div>
      <div className="wrapper">
        <div className="slider-bullets">
          <div className="slider-container" ref={sliderBulletsRef}>
            <div className="slider-bullet"></div>
            <div className="slider-bullet"></div>
            <div className="slider-bullet"></div>
            <div className="slider-bullet"></div>
            <div className="slider-bullet"></div>
            <div className="slider-bullet"></div>
            <div className="slider-bullet"></div>
          </div>
        </div>
        <div className="arrow-container">
          <ArrowBackIosOutlined
            className="arrow left"
            onClick={() => handleClick("left")}
          />
          <ArrowForwardIosOutlined
            className="arrow right"
            onClick={() => handleClick("right")}
          />
        </div>
        <div className="slider-container">
          <div className="slider" ref={sliderWrapperRef} onTransitionEnd={handleTransitionEnd}>
            <div className="slider-items 5">
              <ListItem />
            </div>
            <div className="slider-items 1">
              <ListItem />
              <ListItem />
            </div>
            <div className="slider-items 2" style={{backgroundColor: 'blue'}}>
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </div>
            <div className="slider-items 3" style={{backgroundColor: 'red'}}>
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </div>
            <div className="slider-items 4" style={{backgroundColor: 'blue'}}>
              <ListItem />  
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </div>
            <div className="slider-items 5" style={{backgroundColor: 'green'}}>
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </div>
            <div className="slider-items 1" style={{backgroundColor: 'red'}}>
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
