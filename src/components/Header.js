import React from "react";
import "./Header.css";
import logo from "../assets/icons/img_header_logo.svg";
import searchIcon from "../assets/icons/img_search_normal.svg";
import heartIcon from "../assets/icons/img_heart.svg";
import bagIcon from "../assets/icons/img_shopping_bag.svg";
import profileIcon from "../assets/icons/img_profile.svg";

const Header = () => {
  return (
    <header className="header">
      {/* Top Bar */}
      <div className="header-top">
        <div className="top-item">
          <span className="top-icon">⬛</span> Lorem ipsum dolor
        </div>
        <div className="top-item">
          <span className="top-icon">⬛</span> Lorem ipsum dolor
        </div>
        <div className="top-item">
          <span className="top-icon">⬛</span> Lorem ipsum dolor
        </div>
      </div>

      {/* Main Navigation */}
      <div className="header-main">
        <img src={logo} alt="metta muse logo" className="header-logo" />

        <nav className="nav">
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
        </nav>

        <div className="icons">
          <img src={searchIcon} alt="Search" />
          <img src={heartIcon} alt="Wishlist" />
          <img src={bagIcon} alt="Cart" />
          <img src={profileIcon} alt="Profile" />
          <span className="lang">ENG ⌄</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
