import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"orders"}>Order Review</NavLink>
      <NavLink to={"about"}>About</NavLink>
      <NavLink to={"contact"}>Contact</NavLink>
      <NavLink to={"grand"}>GrandPa </NavLink>
    </nav>
  );
};

export default Header;
