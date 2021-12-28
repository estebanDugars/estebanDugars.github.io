import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Articles">Articles</NavLink>
      <NavLink to="/Article">Article</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/CMS">CMS</NavLink>
      <NavLink to="/CMS">CMS</NavLink>
      <NavLink to="/CMS">CMS</NavLink>
      <NavLink to="/CMS">CMS</NavLink>
      <NavLink to="/CMS">CMS</NavLink>
    </div>
  );
};

export default Navbar;
