import React from "react";

import { Fab } from "./elements";
import { PropTypes } from "@material-ui/core";

interface FabProps {
  children: React.ReactNode;
  color?: PropTypes.Color;
  onClick?: React.MouseEventHandler;
  className?: string;
}

export default ({
  children,
  className,
  onClick,
  color = "default"
}: FabProps) => {
  return (
    <Fab
      color={color}
      className={className}
      onClick={onClick}
      children={children}
    />
  );
};
