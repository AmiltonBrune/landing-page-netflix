import React from "react";
import ListToggle from "./ListToggle";

export default function Item(props) {
  return (
    <div
      className="Item"
      style={{ backgroundImage: "url(" + props.backdrop + ")" }}
    >
      <div className="overlay">
        <div className="title">{props.title}</div>
        <div className="rating">{props.score} / 10</div>
        <div className="plot">{props.overview}</div>
        <ListToggle />
      </div>
    </div>
  );
}
