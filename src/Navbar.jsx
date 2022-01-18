import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
/* import "./Navbar.css"; */
import "./App.css";
import * as bootstrap from "bootstrap";
import $ from "jquery";

const Navbar = () => {
  useEffect(() => {
    const menuToggle = document.getElementById("navbarColor01");
    const bsCollapse = new bootstrap.Collapse(menuToggle, {
      toggle: false,
    });

    let style = getComputedStyle(menuToggle);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        //do something
        style.display !== "flex" && bsCollapse?.toggle();
      }
    });
    menuToggle.addEventListener("click", (event) => {
      style.display === "none" && bsCollapse?.toggle();
    });

    const myToast = `<div id="toast" class="toast show" role="alert" aria-live="assertive" aria-atomic="true" style='position:absolute;left:0rem;top:0rem;color:red;pointerEvents: none'>
        <div class="toast-header">
          <strong class="me-auto">Bootstrap</strong>
          <small>${Date.now()}</small>
          <button type="button" class="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close">
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div class="toast-body">*** You can close/expand menu with ESC key</div>
      </div>`;

    $("#togglerButton").on({
      mouseenter: function () {
        /* const newLocal = "<span style='position:absolute;left:0rem;top:0rem;color:red;pointerEvents: none'> *** You can close/expand menu with ESC key</span>"; */
        const newLocal = myToast;
        $(".App-header").append($(newLocal));
      },
      mouseleave: function () {
        /* $(".App-header").find("toast").last().remove(); */
        $(".App-header").find("#toast").remove();
      },
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="togglerButton"
        >
          <span className="navbar-toggler-icon" style={{ fontSize: "100%", color: "red" }}></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <span> &hearts;</span>

            <NavLink className="btn btn-outline-secondary " to="/">
              Home
            </NavLink>
            <NavLink className="btn btn-outline-secondary" to="/Articles">
              Articles
            </NavLink>
            <NavLink className="btn btn-outline-secondary" to="/Article">
              Article
            </NavLink>
            <NavLink className="btn btn-outline-secondary" to="/About">
              About
            </NavLink>
            <NavLink className="btn btn-outline-secondary" to="/Shop">
              Shop
            </NavLink>

            <form className="d-lg-flex">
              <input className="form-control me-sm-2 my-2 my-sm-0" type="text" placeholder="Search" style={{ marginLeft: "0.5rem" }} />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
