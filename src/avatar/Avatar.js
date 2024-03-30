import React from "react";
import "../blogs/blogHeader/blogheader.scss";
import avatar from "../images/avatar.png";

function Avatar() {
  return (
    <div className="container">
      <div className="top">
        <img src={avatar} alt="" />
        <p>Andrew Jonson Posted on 27th January 2021</p>
      </div>
    </div>
  );
}

export default Avatar;
