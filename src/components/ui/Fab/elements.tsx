import styled from "@emotion/styled";
import { Fab as MFab } from "@material-ui/core";

export const Fab = styled(MFab)`
  position: absolute;
  z-index: 1000;
  right: 32px;
  bottom: 32px;
  ${({ theme, color }: any) => `
    ${
      color === "primary"
        ? `
        background: ${theme.palette.primary.main};
        color: white;
        &:hover {
            background: white;
            color: ${theme.palette.primary.main};
        }
    `
        : ""
    }
    ${
      color === "default"
        ? `
        background: ${theme.palette.light.main};
        color: ${theme.palette.light.contrast};
    `
        : ""
    }
  `}
` as typeof MFab;
