import { Button } from "@material-ui/core";
import { css } from "@emotion/core";
import { ButtonProps } from "@material-ui/core/Button";

import { styled } from "src/styles";
import { WithTheme } from "src/types/theme";

export const StyledButton = styled(Button)<any>`
  ${({ color, theme }) => css`
    padding: 8px 16px;
    ${color === "primary" &&
      `
      background: ${theme.palette.primary.main};
      color: ${theme.palette.primary.contrast};
    `}
    ${color === "default" &&
      `
      background: ${theme.palette.light.main};
      color: ${theme.palette.light.contrast};
      &:hover {
        color: ${theme.palette.light.main};
      }
    `}
  `}
` as typeof Button;
