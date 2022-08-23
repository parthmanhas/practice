import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY !== 0)
    return () => window.onscroll = null;
  }

  console.log(window.scrollY);

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            alt="NETFLIX"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          ></img>
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search />
          <span>KID</span>
          <Notifications />
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
            alt=""
          ></img>
          <div className="profile">
            <ArrowDropDown />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
