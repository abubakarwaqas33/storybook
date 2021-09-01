import React from "react";
import "./Button.css";

export default function Button(props) {
  const { color, children, ...rest } = props;
  return <button className={`button ${color}`}>{children}</button>;
}
