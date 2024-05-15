import React from "react";
import "./Navinshorts.css";
import HamburgerIcon from "./HamburgerIcon";
const Navinshorts = ({ setCategory,category }) => {
  return (
    <div className="nav">
      <div className="icon">
        <HamburgerIcon setCategory={setCategory} category={category} />
      </div>
      <a href="https://www.inshorts.com" alt="inshorts-app" >
      <img
        // style={{ cursor: "pointer" }}
        className="inshort"
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png "
        // height="80%"
        alt="logo"
      />
      </a>
    </div>
  );
};

export default Navinshorts;
