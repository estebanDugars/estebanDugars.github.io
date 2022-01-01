import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary app-header">
      <div className="container-fluid">
        <NavLink className="btn btn-outline-primary" to="/">
          Home
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/Articles">
          Articles
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/Article">
          Article
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/About">
          About
        </NavLink>
        <NavLink className="btn btn-outline-primary" to="/Shop">
          Shop
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
