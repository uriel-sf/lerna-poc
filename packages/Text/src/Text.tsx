import React from "react";
import { TextProps } from "./Text.types";
import styled from "styled-components";

const StyledParagraph = styled.p`
  color: ${props => props?.theme?.main || "green"};
  font-size: 21px;
`;

export const Text = ({ children }: TextProps) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};
