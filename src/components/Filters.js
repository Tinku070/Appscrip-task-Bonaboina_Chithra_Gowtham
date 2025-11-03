import React, { useState } from "react";
import "./Filters.css";

const Filter = () => {
  const [openSections, setOpenSections] = useState({});
  const [isVisible, setIsVisible] = useState(true);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className={`filter-container ${isVisible ? "visible" : "hidden"}`}>
      {/* Header Row */}
      <div className="filter-header">
        <div className="filter-items">
          <h4>3425 ITEMS</h4>
          <button
            className="toggle-filter"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </div>
      </div>

      {/* Filter Options */}
      {isVisible && (
        <div className="filter-body">
          <div className="filter-section">
            <label>
              <input type="checkbox" /> CUSTOMIZABLE
            </label>
          </div>

          {[
            "IDEAL FOR",
            "OCCASION",
            "WORK",
            "FABRIC",
            "SEGMENT",
            "SUITABLE FOR",
            "RAW MATERIALS",
            "PATTERN",
          ].map((section) => (
            <div key={section} className="filter-section">
              <div
                className="filter-title"
                onClick={() => toggleSection(section)}
              >
                <span>{section}</span>
                <span>{openSections[section] ? "▲" : "▼"}</span>
              </div>
              {openSections[section] && (
                <div className="filter-options">
                  <label><input type="checkbox" /> Option 1</label>
                  <label><input type="checkbox" /> Option 2</label>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
