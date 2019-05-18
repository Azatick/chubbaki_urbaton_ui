import React from "react";
import styled from "@emotion/styled";
import {
  AppBar as MAppBar,
  IconButton,
  Toolbar as MToolbar
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

export const AppBar = styled(MAppBar)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  box-shadow: none;
  h6 {
    color: ${({ theme }) => theme.palette.primary.contrast};
  }
` as typeof MAppBar;

export const BurgerButton = styled(props => (
  <IconButton {...props} color="inherit" aria-label="Menu">
    <MenuIcon />
  </IconButton>
))`` as typeof IconButton;

export const Toolbar = styled(MToolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
` as typeof MToolbar;
