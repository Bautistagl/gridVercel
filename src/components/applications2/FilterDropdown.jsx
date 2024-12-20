import React from "react";

const FilterDropdown = ({ darkMode }) => {
  return (
    <div className={`dropdown2 ${darkMode ? "dark" : "light"}`}>
      <p>Status</p>
      <ul>
        <li>
          {" "}
          <div className="circle3"></div>ACTIVE
        </li>
        <li>
          {" "}
          <div className="circle4"></div>INACTIVE
        </li>
        <li>
          {" "}
          <div className="circle5"></div>RENEW
        </li>
      </ul>
      <p>Type</p>
      <ul>
        <li>Web service</li>
      </ul>
    </div>
  );
};

export default FilterDropdown;
