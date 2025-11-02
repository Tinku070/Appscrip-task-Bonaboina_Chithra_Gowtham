import React, { useState } from "react";
import "./Filters.css";
import arrowLeft from "../assets/icons/img_arrow_left.svg";

const Filters = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [sortOption, setSortOption] = useState("Recommended");

  const toggleFilters = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="filters-container">
      <div className="filters-topbar">
        <div className="left-section">
          <span className="items-count">3425 ITEMS</span>
          <button className="hide-filter" onClick={toggleFilters}>
            <img src={arrowLeft} alt="arrow" className="arrow-icon" />
            {isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </div>

        <div className="right-section">
          <div className="dropdown">
            <span className="dropdown-label">{sortOption}</span>
            <select
              className="dropdown-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="Recommended">RECOMMENDED</option>
              <option value="Newest">NEWEST FIRST</option>
              <option value="Popular">POPULAR</option>
              <option value="HighToLow">PRICE : HIGH TO LOW</option>
              <option value="LowToHigh">PRICE : LOW TO HIGH</option>
            </select>
          </div>
        </div>
      </div>

      <div className="filters-content">
        {isFilterVisible && (
          <aside className="filter-sidebar">
            <div className="filter-block">
              <label className="checkbox-label">
                <input type="checkbox" /> CUSTOMIZABLE
              </label>
            </div>

            <div className="filter-category">
              <h3>IDEAL FOR</h3>
              <span className="filter-sub">All</span>
              <span className="filter-link">Unselect all</span>
              <div className="filter-options">
                <label><input type="checkbox" /> Men</label>
                <label><input type="checkbox" /> Women</label>
                <label><input type="checkbox" /> Baby & Kids</label>
              </div>
            </div>

            <div className="filter-category">
              <h3>OCCASION</h3>
              <span className="filter-sub">All</span>
            </div>

            <div className="filter-category">
              <h3>WORK</h3>
              <span className="filter-sub">All</span>
            </div>

            <div className="filter-category">
              <h3>FABRIC</h3>
              <span className="filter-sub">All</span>
            </div>

            <div className="filter-category">
              <h3>SEGMENT</h3>
              <span className="filter-sub">All</span>
            </div>

            <div className="filter-category">
              <h3>SUITABLE FOR</h3>
              <span className="filter-sub">All</span>
            </div>

            <div className="filter-category">
              <h3>RAW MATERIALS</h3>
              <span className="filter-sub">All</span>
            </div>

            <div className="filter-category">
              <h3>PATTERN</h3>
              <span className="filter-sub">All</span>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default Filters;
