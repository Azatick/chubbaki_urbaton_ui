import React from "react";

import { Typography } from "@material-ui/core";
import { RecyclingIcon } from "src/components/icons";

import { Wrapper, Paper } from "./elements";

interface Props {
  children: React.ReactNode;
}

export default ({ children }: Props) => (
  <Wrapper>
    <Paper>{children}</Paper>
  </Wrapper>
);
