import styled from "@emotion/styled";
import { Fab as MFab } from "@material-ui/core";

export const Fab = styled(MFab)`
  position: absolute !important;
  z-index: 1000 !important;
  right: 32px !important;
  bottom: 32px !important;
  ${({ theme, color }: any) => `
    ${
      color === "primary"
        ? `
        background: ${theme.palette.primary.main} !important;
        color: white !important;
        &:hover {
            background: white !important;
            color: ${theme.palette.primary.main} !important;
        }
    `
        : ""
    }
    ${
      color === "default"
        ? `
        background: ${theme.palette.light.main} !important;
        color: ${theme.palette.light.contrast} !important;
    `
        : ""
    }
  `}
` as typeof MFab;
