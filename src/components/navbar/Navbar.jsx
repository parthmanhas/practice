import { Search, Notifications, ArrowDropDown, Edit, Person, Info } from "@material-ui/icons";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  //TODO: understand
  window.onscroll = () => {
    setIsScrolled(window.scrollY !== 0);
    return () => (window.onscroll = null);
  };

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
          <span>Children</span>
          <Notifications />
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
            alt=""
          ></img>
          <div className="profile">
            <ArrowDropDown />
            <div className="options">
              <div>
                <div className="option">
                  <Edit />
                  <span>Manage Profile</span>
                </div>
                <div className="option">
                  <Person />
                  <span>Account</span>
                </div>
                <div className="option">
                  <Info />
                  <span>Help Centre</span>
                </div>
              </div>
              <div>
                <span>Sign out of Netflix</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
