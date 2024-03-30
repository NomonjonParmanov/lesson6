import React from "react";
import logo from "../images/logo.png";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <div className="nav__links">
        <NavLink to={"/"}>
          <img src={logo} alt="" />
        </NavLink>
        <ul className="nav__link">
          <li>
            <NavLink to={"/"} className="nav__item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className="nav__item">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to={"/careers"} className="nav__item">
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink to={"/services"} className="nav__item">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to={"/blogs"} className="nav__item">
              Blog
            </NavLink>
          </li>

          <li>
            <button>Clone project</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
