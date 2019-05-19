import React, { RefObject } from "react";
import { Typography, RootRef } from "@material-ui/core";
import { connect } from "react-redux";

import { AppBar, BurgerButton, Toolbar } from "./Header.elements";
import { toggleSidebar } from "src/redux/ducks/sidebar";
import Button from "src/components/ui/Button";
import { RecyclingIcon } from "src/components/icons";

interface HeaderProps {
  toggleSidebar?: () => void;
  forwardRef?: any;
}

const Header = ({ forwardRef }: HeaderProps) => {
  return (
    <RootRef rootRef={forwardRef}>
      <AppBar position="static">
        <Toolbar>
          <RecyclingIcon fill="white" width={32} height={32} />
          <Button label="Войти" to="/login" />
        </Toolbar>
      </AppBar>
    </RootRef>
  );
};

const ConnectedHeader = connect<HeaderProps>(
  null,
  {
    toggleSidebar
  }
)(Header);

export default React.forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  return <ConnectedHeader {...props} forwardRef={ref} />;
});
