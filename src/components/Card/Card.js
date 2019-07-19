import React from "react";
import "./Card.scss";

export function Card(props) {
  return <div className="card--container">{props.children}</div>;
}
