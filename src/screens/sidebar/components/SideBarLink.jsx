import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function SideBarLink({ text, icon, link }) {
  return (
    <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="side-bar-link">
        <div className="side-bar-link-icon-box">
          <FontAwesomeIcon className="side-bar-link-icon" icon={icon} />
        </div>
        <div className="side-bar-link-text-box">
          <p className="side-bar-link-text">{text}</p>
        </div>
      </div>
    </Link>
  );
}

export default SideBarLink;
