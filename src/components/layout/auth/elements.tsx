import React from "react";

import styled from "@emotion/styled";
import { Paper as MPaper } from "@material-ui/core";

export const Wrapper = styled.div`
  background-color: ${({ theme }: any) => theme.palette.light.main};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Paper = styled(MPaper)`
  box-shadow: rgba(0, 0, 0, 0.1);
  padding: 16px;
  min-width: 350px;
` as typeof MPaper;
