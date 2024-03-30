import React from "react";
import "./position.scss";
import { CARDS } from "../../static/index";

let cards = CARDS?.map(({ id, title, paragh, buy }) => (
  <div key={id} className="card">
    <h3>{title}</h3>
    <p>{paragh}</p>
    <a href="/">{buy}</a>
  </div>
));
function Position() {
  return (
    <div className="container">
      <div className="open">
        <h1>See our open positions </h1>
        <div className="cards">{cards}</div>
      </div>
    </div>
  );
}

export default Position;
