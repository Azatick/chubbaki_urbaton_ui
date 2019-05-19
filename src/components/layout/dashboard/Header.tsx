import React from "react";
import { RootRef } from "@material-ui/core";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";

import { AppBar, Toolbar } from "./Header.elements";
import { toggleSidebar } from "src/redux/ducks/sidebar";
import Button from "src/components/ui/Button";
import { RecyclingIcon } from "src/components/icons";
import { AppState } from "src/types/appState";
import { User } from "src/types/user";
import { openGuide } from "src/redux/ducks/guide";

interface HeaderProps {
  toggleSidebar?: () => void;
  user?: User;
  forwardRef?: any;
  openGuide?: () => void;
}

const Header = ({ forwardRef, user, openGuide }: HeaderProps) => {
  return (
    <RootRef rootRef={forwardRef}>
      <AppBar position="static">
        <Toolbar>
          <RecyclingIcon fill="white" width={32} height={32} />
          {isEmpty(user) ? (
            <Button label="Войти" to="/login" />
          ) : (
            <Button label="Помощник" onClick={openGuide} />
          )}
        </Toolbar>
      </AppBar>
    </RootRef>
  );
};

const ConnectedHeader = connect(
  (state: AppState) => ({
    user: state.auth.user
  }),
  {
    toggleSidebar,
    openGuide
  }
)(Header);

export default React.forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  return <ConnectedHeader {...props} forwardRef={ref} />;
});
