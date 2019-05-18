import React from "react";
import { connect } from "react-redux";
import {
  SwipeableDrawer,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { Mail as MailIcon, Inbox as InboxIcon } from "@material-ui/icons";

import { toggleSidebar } from "src/redux/ducks/sidebar";
import { AppState } from "src/types/appState";
import { List } from "./Sidebar.elements";

interface SidebarProps {
  visible?: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ visible = false, toggleSidebar }: SidebarProps) => {
  return (
    <SwipeableDrawer
      open={visible}
      onClose={toggleSidebar}
      onOpen={toggleSidebar}
    >
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  );
};

export default connect(
  (state: AppState) => ({
    visible: state.sidebar.visible
  }),
  {
    toggleSidebar
  }
)(Sidebar);
