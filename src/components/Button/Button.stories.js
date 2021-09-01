import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => <Button color={"primary"}>Primary</Button>;
export const Secondary = () => <Button color={"secondary"}>Secondary</Button>;
