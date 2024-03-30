import React from "react";
import "./footer.scss";
import logo from "../images/footerlogo.png";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { PiYoutubeLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";

function Footer() {
  return (
    <div className="footer">
      <div className="container foot ">
        <div className="footer__links">
          <img width={100} src={logo} alt="" />
          <h3>Bespoke software solutions</h3>
          <div className="icon">
            <FaFacebookF />
            <PiYoutubeLogo />
            <FaInstagram />
            <CiTwitter />
          </div>
        </div>
        <div className="footer__links1">
          <h3>Company</h3>
          <NavLink to={"about"} className="nav__item">
            About Us
          </NavLink>
          <NavLink to={"careers"} className="nav__item">
            Careers
          </NavLink>
          <NavLink to={"/services"} className="nav__item">
            Services
          </NavLink>
          <NavLink to={"/blog"} className="nav__item">
            Blog
          </NavLink>
        </div>
        <div className="footer__links2">
          <h3>Connect</h3>
          hi@finsweet.com
          <a href="/">+(123) 456-7890</a>
        </div>
        <div className="footer__links3">
          <h3>Join Newsletter</h3>
          <input type="email" placeholder="Type email here" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
