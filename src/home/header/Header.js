import React from "react";
import home from "../../images/Header image.png";
import "./header.scss";
function Header() {
  return (
    <div className="container">
      <div className="home">
        <div className="left">
          <h1>We hired people who are very passionate about what they do</h1>
          <p>
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw.
          </p>
          <button>View Positions</button>
        </div>
        <div className="right">
          <img src={home} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
