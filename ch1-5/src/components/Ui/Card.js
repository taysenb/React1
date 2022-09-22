//this file gives te page the card styles like round edge
import React from "react";
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //finds all classnames in <Card>

  return <div className={classes}>{props.children}</div>;
} //props.children connects to all children of <Card></Card>

export default Card;
