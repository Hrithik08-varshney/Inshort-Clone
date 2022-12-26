import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <img
        src="https://assets.inshorts.com/website_assets/images/logo_footer.png "
        width="160px"
        height="48px"
        alt="inshorts"
      />

      <span style={{ color: "#cfcfcf" }}>
        Inshorts <span style={{ color: "#4B4B4B" }}>pte. Ltd</span>
      </span>
      <span style={{ fontSize: "12px", color: "#4B4B4B" }}>
        &#169;COPYRIGHT 2022
      </span>
      <span className="name">
        Inshorts Clone made by -{" "}
        <a
          href="https://www.inshorts.com/en/read"
          target="_blank"
          rel="noreferrer"
        >
          Nishu & Hrithik
        </a>
        {/* Nishu & Hrithik */}
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a
          href="https://www.facebook.com/inshortsapp"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-facebook-f fa-2x"></i>
        </a>
        <a href="https://twitter.com/inshorts" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-twitter fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/news-in-shorts/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
