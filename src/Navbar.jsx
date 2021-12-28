import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <ul className="navbar">
      <Link to="/">Home</Link>
      <Link to="/Articles">Articles</Link>
      <Link to="/Article">Article</Link>
      <Link to="/About">About</Link>
      <Link to="/CMS">CMS</Link>
    </ul>
  );
};

export default Navbar;
