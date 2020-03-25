import React from "react";
import { TextProps } from "./Text.types";

export const Text = ({ children }: TextProps) => {
  return <p style={{ fontSize: 17 }}>{children}</p>;
};
