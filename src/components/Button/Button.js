import React from "react";
import "./Button.css";

export default function Button(props) {
  const { color, children } = props;
  return <button className={`button ${color}`}>{children}</button>;
}
