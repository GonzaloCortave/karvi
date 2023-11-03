import React from "react";
import "./NavBar.scss";
import karviLogo from "../../assets/karvi-logo.png";

const NavBar = () => {
    return (
      <nav className="NavBar">
        <img src={karviLogo} alt="Logo" className="NavBar__logo" />
      </nav>
    );
  };
  
  export default NavBar;