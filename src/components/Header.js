import React, { useState } from "react";
import "./Header.css";

import logo from "../assets/icons/img_header_logo.svg";
import searchIcon from "../assets/icons/img_search_normal.svg";
import heartIcon from "../assets/icons/img_heart.svg";
import bagIcon from "../assets/icons/img_shopping_bag.svg";
import userIcon from "../assets/icons/img_profile.svg";
import menuIcon from "../assets/icons/img_element_4.svg";
import svgElement from "../assets/icons/img_element_4.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Top Black Bar */}
      <div className="header-top">
        <div className="top-item">
          <img src={svgElement} alt="icon" className="top-icon" />
          <span>Lorem ipsum dolor</span>
        </div>
        <div className="top-item">
          <img src={svgElement} alt="icon" className="top-icon" />
          <span>Lorem ipsum dolor</span>
        </div>
        <div className="top-item">
          <img src={svgElement} alt="icon" className="top-icon" />
          <span>Lorem ipsum dolor</span>
        </div>
      </div>

      {/* Middle Section */}
      <div className="header-main">
        <div className="logo-section">
          <img src={menuIcon} alt="menu" className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} />
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
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
          <img src={userIcon} alt="User" />
          <span className="lang">ENG <span className="arrow">▼</span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
