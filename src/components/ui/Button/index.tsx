import React from "react";

import { PropTypes } from "@material-ui/core";
import { navigate } from "@reach/router";

import { StyledButton } from "./elements";

interface ButtonProps {
  label: string;
  onClick?: React.MouseEventHandler;
  color?: PropTypes.Color;
  to?: string;
  type?: "submit" | "reset" | "button";
}

export default ({
  label,
  type,
  color = "default",
  onClick,
  to
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      color={color}
      onClick={
        to
          ? (e: React.MouseEvent) => {
              navigate(to);
            }
          : onClick
      }
    >
      {label}
    </StyledButton>
  );
};
