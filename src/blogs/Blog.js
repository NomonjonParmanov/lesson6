import React from "react";
import { BLOGS } from "../static";
import "./blogs.scss";

let blogs = BLOGS?.map(({ id, title, paragh, buy, img }) => (
  <div key={id} className="blog__card">
    <img src={img} alt="" />
    <h3>{title}</h3>
    <p>{paragh}</p>
    <a href="/">{buy}</a>
  </div>
));
function Blog() {
  return (
    <div className="bg">
      <div className="container blogs">
        <h1>Latest Blog & News</h1>
        <div className="blog__cards">{blogs}</div>
      </div>
    </div>
  );
}

export default Blog;
