import React from "react";
import { ButtonProps } from "./Button.types";

export const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};
