import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useEffect, useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

const List = ({ props }) => {

  const sliderWrapperRef = useRef();
  const [percent, setPercent] = useState(-100);
  const [canTransition, setCanTransition] = useState(true);
  
  const handleClick = (direction) => {
    if(!canTransition) return 

    setCanTransition(false);
    if(direction === 'left') {
      sliderWrapperRef.current.style.transform = `translateX(${percent - 100}%)`
      setPercent(percent - 100);
    }

    if(direction === 'right') {
      sliderWrapperRef.current.style.transform = `translateX(calc(${percent + 100}%))`
      setPercent(percent + 100);
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

  return (
    <div className="list">
      <div className="heading">Recently Added</div>
      <div className="wrapper">
        <div className="slider-container">
          <ArrowBackIosOutlined
            className="arrow left"
            onClick={() => handleClick("left")}
          />
          <div className="slider" ref={sliderWrapperRef} onTransitionEnd={handleTransitionEnd}>
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
            
          <ArrowForwardIosOutlined
            className="arrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default List;
