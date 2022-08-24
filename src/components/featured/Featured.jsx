import { PlayArrow, InfoOutlined } from "@material-ui/icons";
import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <img
        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
        alt=""
      ></img>
      <div className="info">
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          libero. Illum placeat minus ut aut magni sit sapiente inventore, illo
          tenetur iure sed quam repellendus necessitatibus libero at, rem et?
        </span>
        <div className="buttons">
          <button className="btn play">
            <PlayArrow className="icon" />
            <span>Play</span>
          </button>
          <button className="btn more">
            <InfoOutlined className="icon" />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
