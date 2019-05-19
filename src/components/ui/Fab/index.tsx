import React from "react";

import { Fab } from "./elements";
import { PropTypes } from "@material-ui/core";

interface FabProps {
  children: React.ReactNode;
  color?: PropTypes.Color;
  onClick?: React.MouseEventHandler;
}

export default ({ children, onClick, color = "default" }: FabProps) => {
  return <Fab color={color} onClick={onClick} children={children} />;
};
