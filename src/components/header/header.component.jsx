import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.style.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="options" to="/shop">
        Shop
      </Link>
      <Link className="options" to="/shop">
        contact
      </Link>
      <Link className="options" to="/signin">
        sign in
      </Link>
    </div>
  </div>
);

export default Header;
