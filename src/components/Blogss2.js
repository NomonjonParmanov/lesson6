import React from "react";
import { BLOGSS } from "../static";
import "../blogs/blogs.scss";
let blogs = BLOGSS?.map(({ id, title, paragh, buy, img }) => (
  <div key={id} className="blog__card">
    <img src={img} alt="" />
    <h3>{title}</h3>
    <p>{paragh}</p>
    <a href="/">{buy}</a>
  </div>
));
function Blogssss() {
  return (
    <div>
      <div className="container blogs pd">
        <div className="blog__cards">{blogs}</div>
      </div>
    </div>
  );
}

export default Blogssss;
