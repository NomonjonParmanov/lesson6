import React from "react";
import logo from "../images/logo.png";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  let [toggle, setToggle] = useState(false);
  const toggleSidebar = () => {
    setToggle(!toggle);
  };
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
        <button className="btn3" onClick={toggleSidebar}>
          <IoIosMenu />
        </button>
        <div className={`sidebar ${toggle ? "show" : ""}`}>
          <div className="nav__links2">
            <div className="closing">
              <NavLink to={"/"}>
                <img src={logo} alt="" />
              </NavLink>
              <button className="close" onClick={toggleSidebar}>
                <IoMdClose />
              </button>
            </div>
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
      </div>
    </div>
  );
}

export default Navbar;
