import React from "react";

import { StyledButton } from "./elements";
import { PropTypes } from "@material-ui/core";

interface ButtonProps {
  label: string;
  onClick?: React.MouseEventHandler;
  color?: PropTypes.Color;
}

export default ({ label, color = "default", onClick }: ButtonProps) => {
  return (
    <StyledButton variant="flat" color={color} onClick={onClick}>
      {label}
    </StyledButton>
  );
};
