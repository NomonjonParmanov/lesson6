import React from "react";
import headerImage from "../../images/blog.png";
import "./blogheader.scss";
import Avatar from "../../avatar/Avatar";
function BlogHeader() {
  return (
    <div className="bg">
      <div className="bloghome container">
        <div className="left">
          <Avatar />
          <h1>Our internal process and longerm vision</h1>
          <p className="p">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized. We aim to attain the
          </p>
          <a href="/">Read More</a>
        </div>
        <div className="right">
          <img src={headerImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BlogHeader;
