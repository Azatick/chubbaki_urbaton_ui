import { Button } from "@material-ui/core";
import { css } from "@emotion/core";

import { styled } from "src/styles";

export const StyledButton = styled(Button)<any>`
  ${({ color, theme }) => css`
    padding: 8px 16px;
    ${color === "primary" &&
      `
      background: ${theme.palette.primary.main} !important;
      color: ${theme.palette.primary.contrast} !important;
    `}
    ${color === "default" &&
      `
      background: ${theme.palette.light.main} !important;
      color: ${theme.palette.light.contrast} !important;
    `}
  `}
` as typeof Button;
